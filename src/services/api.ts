import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

// Define a more secure token storage mechanism
const TOKEN_KEY = 'auth_token';
const TOKEN_EXPIRY_KEY = 'auth_token_expiry';

const getToken = (): string | null => {
  const token = sessionStorage.getItem(TOKEN_KEY) || localStorage.getItem(TOKEN_KEY);
  const expiry = sessionStorage.getItem(TOKEN_EXPIRY_KEY) || localStorage.getItem(TOKEN_EXPIRY_KEY);
  
  // Check if token is expired
  if (expiry && new Date(expiry) < new Date()) {
    // Clear expired token
    sessionStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(TOKEN_EXPIRY_KEY);
    localStorage.removeItem(TOKEN_EXPIRY_KEY);
    return null;
  }
  
  return token;
};

// Create an Axios instance with default config
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://api.heloluxuryair.com',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  timeout: 10000, // 10 seconds timeout
  withCredentials: true // For CORS with credentials
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = getToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Add CSRF protection
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    if (csrfToken && config.headers) {
      config.headers['X-CSRF-Token'] = csrfToken;
    }
    
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Response interceptor for handling errors and refreshing tokens
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as any;
    
    // Handle 401 Unauthorized errors (token expired)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        // In a real app, refresh the token here
        // const refreshResponse = await api.post('/auth/refresh');
        // if (refreshResponse.data.token) {
        //   const expiryDate = new Date();
        //   expiryDate.setHours(expiryDate.getHours() + 1); // Token expires in 1 hour
        //   sessionStorage.setItem(TOKEN_KEY, refreshResponse.data.token);
        //   sessionStorage.setItem(TOKEN_EXPIRY_KEY, expiryDate.toISOString());
        //   if (originalRequest.headers) {
        //     originalRequest.headers.Authorization = `Bearer ${refreshResponse.data.token}`;
        //   }
        //   return api(originalRequest);
        // }
        
        // For now, just logout the user
        sessionStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(TOKEN_KEY);
        sessionStorage.removeItem(TOKEN_EXPIRY_KEY);
        localStorage.removeItem(TOKEN_EXPIRY_KEY);
        window.location.href = '/login';
      } catch (refreshError) {
        // Handle refresh error - logout
        sessionStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(TOKEN_KEY);
        sessionStorage.removeItem(TOKEN_EXPIRY_KEY);
        localStorage.removeItem(TOKEN_EXPIRY_KEY);
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    
    // Handle other errors
    if (error.response?.status === 403) {
      // Forbidden - user doesn't have access
      window.location.href = '/forbidden';
    }
    
    if (error.response?.status === 500) {
      // Server error - show error page
      window.location.href = '/error';
    }
    
    return Promise.reject(error);
  }
);

export default api; 