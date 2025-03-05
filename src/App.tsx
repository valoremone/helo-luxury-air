import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

// Layouts
import AuthLayout from './layouts/shared/AuthLayout';
import MemberLayout from './layouts/member/MemberLayout';
import AdminLayout from './layouts/admin/AdminLayout';
import ProtectedRoute from './components/shared/ProtectedRoute';

// Shared Pages
import Login from './pages/shared/Login';
import Register from './pages/shared/Register';
import ForgotPassword from './pages/shared/ForgotPassword';
import NotFound from './pages/shared/NotFound';

// Member Pages
import MemberDashboard from './pages/member/Dashboard';
import Trips from './pages/member/Trips';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import AdminBookings from './pages/admin/Bookings';
import AdminUsers from './pages/admin/Users';
import AdminFleet from './pages/admin/Fleet';
import AdminAnalytics from './pages/admin/Analytics';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Provider store={store}>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <BrowserRouter>
          <Routes>
            {/* Auth Routes */}
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Route>

            {/* Member Routes */}
            <Route
              path="/member"
              element={
                <ProtectedRoute allowedRoles={['member']}>
                  <MemberLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<MemberDashboard />} />
              <Route path="trips" element={<Trips />} />
            </Route>

            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="bookings" element={<AdminBookings />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="fleet" element={<AdminFleet />} />
              <Route path="analytics" element={<AdminAnalytics />} />
            </Route>

            {/* Root redirect */}
            <Route path="/" element={<Login />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
