import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store';

// Define types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'member' | 'admin' | 'guest';
  membershipTier?: 'standard' | 'premium' | 'elite';
}

// Token storage constants and helper functions
const TOKEN_KEY = 'auth_token';
const TOKEN_EXPIRY_KEY = 'auth_token_expiry';
const USER_KEY = 'auth_user';

// Helper functions for token management
const setToken = (token: string, expiresIn: number = 3600) => {
  const expiryDate = new Date();
  expiryDate.setSeconds(expiryDate.getSeconds() + expiresIn);
  
  // Use sessionStorage for better security (token cleared when tab is closed)
  sessionStorage.setItem(TOKEN_KEY, token);
  sessionStorage.setItem(TOKEN_EXPIRY_KEY, expiryDate.toISOString());
};

const clearToken = () => {
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(TOKEN_EXPIRY_KEY);
  sessionStorage.removeItem(USER_KEY);
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_EXPIRY_KEY);
  localStorage.removeItem(USER_KEY);
};

const isTokenValid = (): boolean => {
  const expiry = sessionStorage.getItem(TOKEN_EXPIRY_KEY);
  if (!expiry) return false;
  
  const expiryDate = new Date(expiry);
  return expiryDate > new Date();
};

const getToken = (): string | null => {
  const token = sessionStorage.getItem(TOKEN_KEY);
  if (!token) return null;
  
  if (!isTokenValid()) {
    clearToken();
    return null;
  }
  
  return token;
};

// Default Guest account
const guestAccount = {
  id: 'guest-1',
  email: 'guest@flyhelo.one',
  firstName: 'Guest',
  lastName: 'User',
  role: 'guest' as const,
  password: 'guest123' // In a real app, this would be hashed
};

// Default Member account
const memberAccount = {
  id: 'member-1',
  email: 'member@flyhelo.one',
  firstName: 'Standard',
  lastName: 'Member',
  role: 'member' as const,
  membershipTier: 'standard' as const,
  password: 'member123' // In a real app, this would be hashed
};

// Default Admin account
const adminAccount = {
  id: 'admin-1',
  email: 'admin@flyhelo.one',
  firstName: 'Admin',
  lastName: 'User',
  role: 'admin' as const,
  membershipTier: 'elite' as const,
  password: 'admin123' // In a real app, this would be hashed
};

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Get user from sessionStorage if it exists
const storedUser = sessionStorage.getItem(USER_KEY);
const parsedUser = storedUser ? JSON.parse(storedUser) as User : null;

// Initial state
const initialState: AuthState = {
  user: parsedUser,
  token: getToken(),
  isAuthenticated: !!getToken(),
  isLoading: false,
  error: null,
};

// Async thunks
export const login = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string; rememberMe?: boolean }, { rejectWithValue }) => {
    try {
      // Set the expiresIn time based on "remember me" option
      const expiresIn = credentials.rememberMe ? 7 * 24 * 60 * 60 : 3600; // 7 days or 1 hour
      
      // Check if the credentials match the admin account
      if (credentials.email === adminAccount.email && credentials.password === adminAccount.password) {
        const { password, ...adminUser } = adminAccount;
        const adminToken = 'admin-jwt-token';
        
        // Store token with expiry
        setToken(adminToken, expiresIn);
        // Store user information
        sessionStorage.setItem(USER_KEY, JSON.stringify(adminUser));
        
        return { user: adminUser, token: adminToken };
      }
      
      // Check if the credentials match the guest account
      if (credentials.email === guestAccount.email && credentials.password === guestAccount.password) {
        const { password, ...guestUser } = guestAccount;
        const guestToken = 'guest-jwt-token';
        
        // Store token with expiry
        setToken(guestToken, expiresIn);
        // Store user information
        sessionStorage.setItem(USER_KEY, JSON.stringify(guestUser));
        
        return { user: guestUser, token: guestToken };
      }
      
      // Check if the credentials match the member account
      if (credentials.email === memberAccount.email && credentials.password === memberAccount.password) {
        const { password, ...memberUser } = memberAccount;
        const memberToken = 'member-jwt-token';
        
        // Store token with expiry
        setToken(memberToken, expiresIn);
        // Store user information
        sessionStorage.setItem(USER_KEY, JSON.stringify(memberUser));
        
        return { user: memberUser, token: memberToken };
      }
      
      // This would be an actual API call in a real application
      // For now, we'll simulate a successful login with mock data
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        email: credentials.email,
        firstName: 'John',
        lastName: 'Doe',
        role: 'member',
        membershipTier: 'premium',
      };
      
      const mockToken = 'mock-jwt-token';
      
      // Store token with expiry
      setToken(mockToken, expiresIn);
      // Store user information
      sessionStorage.setItem(USER_KEY, JSON.stringify(mockUser));
      
      return { user: mockUser, token: mockToken };
    } catch (error) {
      return rejectWithValue('Invalid credentials');
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  clearToken();
  return null;
});

export const register = createAsyncThunk(
  'auth/register',
  async (userData: { email: string; password: string; firstName: string; lastName: string }, { rejectWithValue }) => {
    try {
      // Prevent registration with reserved emails
      if (
        userData.email === guestAccount.email || 
        userData.email === memberAccount.email ||
        userData.email === adminAccount.email
      ) {
        return rejectWithValue('This email is already registered');
      }
      
      // This would be an actual API call in a real application
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '2',
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        role: 'member',
        membershipTier: 'standard',
      };
      
      const mockToken = 'mock-jwt-token-new-user';
      
      // Store token with expiry (1 hour)
      setToken(mockToken, 3600);
      // Store user information
      sessionStorage.setItem(USER_KEY, JSON.stringify(mockUser));
      
      return { user: mockUser, token: mockToken };
    } catch (error) {
      return rejectWithValue('Registration failed');
    }
  }
);

// Create slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      
      // Update storage
      setToken(token, 3600);
      sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    },
    clearCredentials: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      
      // Clear storage
      clearToken();
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
      })
      // Register
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectAuthLoading = (state: RootState) => state.auth.isLoading;
export const selectAuthError = (state: RootState) => state.auth.error; 