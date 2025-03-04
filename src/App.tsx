import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

// Layouts
import MemberLayout from './layouts/member/MemberLayout';
import AdminLayout from './layouts/admin/AdminLayout';
import AuthLayout from './layouts/shared/AuthLayout';

// Member Pages
import MemberDashboard from './pages/member/Dashboard';
import BookingPage from './pages/member/Booking';
import ProfilePage from './pages/member/Profile';
import TripsPage from './pages/member/Trips';
import TripDetailsPage from './pages/member/TripDetails';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import BookingsManagement from './pages/admin/BookingsManagement';
import UserManagement from './pages/admin/UserManagement';
import FleetManagement from './pages/admin/FleetManagement';
import AnalyticsPage from './pages/admin/Analytics';

// Auth Pages
import LoginPage from './pages/shared/Login';
import RegisterPage from './pages/shared/Register';
import ForgotPasswordPage from './pages/shared/ForgotPassword';

// Shared Components
import ProtectedRoute from './components/shared/ProtectedRoute';
import NotFoundPage from './pages/shared/NotFound';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem('darkMode') === 'true' || true
  );

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Navigate to="/member/dashboard" replace />} />
          
          {/* Auth routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          </Route>
          
          {/* Member routes */}
          <Route
            path="/member"
            element={
              <MemberLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            }
          >
            <Route
              path="dashboard"
              element={
                <ProtectedRoute allowedRoles={['member', 'admin']}>
                  <MemberDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="booking"
              element={
                <ProtectedRoute allowedRoles={['member', 'admin']}>
                  <BookingPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="profile"
              element={
                <ProtectedRoute allowedRoles={['member', 'admin']}>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="trips"
              element={
                <ProtectedRoute allowedRoles={['member', 'admin']}>
                  <TripsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="trips/:tripId"
              element={
                <ProtectedRoute allowedRoles={['member', 'admin']}>
                  <TripDetailsPage />
                </ProtectedRoute>
              }
            />
          </Route>
          
          {/* Admin routes */}
          <Route
            path="/admin"
            element={
              <AdminLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            }
          >
            <Route
              path="dashboard"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="bookings"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <BookingsManagement />
                </ProtectedRoute>
              }
            />
            <Route
              path="users"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <UserManagement />
                </ProtectedRoute>
              }
            />
            <Route
              path="fleet"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <FleetManagement />
                </ProtectedRoute>
              }
            />
            <Route
              path="analytics"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AnalyticsPage />
                </ProtectedRoute>
              }
            />
          </Route>
          
          {/* 404 route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
