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

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Initial state
const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: !!localStorage.getItem('token'),
  isLoading: false,
  error: null,
};

// Async thunks
export const login = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      // Check if the credentials match the guest account
      if (credentials.email === guestAccount.email && credentials.password === guestAccount.password) {
        const { password, ...guestUser } = guestAccount;
        const guestToken = 'guest-jwt-token';
        
        // Store token in localStorage
        localStorage.setItem('token', guestToken);
        
        return { user: guestUser, token: guestToken };
      }
      
      // Check if the credentials match the member account
      if (credentials.email === memberAccount.email && credentials.password === memberAccount.password) {
        const { password, ...memberUser } = memberAccount;
        const memberToken = 'member-jwt-token';
        
        // Store token in localStorage
        localStorage.setItem('token', memberToken);
        
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
      
      // Store token in localStorage
      localStorage.setItem('token', mockToken);
      
      return { user: mockUser, token: mockToken };
    } catch (error) {
      return rejectWithValue('Invalid credentials');
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem('token');
  return null;
});

export const register = createAsyncThunk(
  'auth/register',
  async (userData: { email: string; password: string; firstName: string; lastName: string }, { rejectWithValue }) => {
    try {
      // Prevent registration with the guest email
      if (userData.email === guestAccount.email || userData.email === memberAccount.email) {
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
      
      // Store token in localStorage
      localStorage.setItem('token', mockToken);
      
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
    },
    clearCredentials: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
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