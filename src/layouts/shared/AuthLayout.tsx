import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store';
import { selectIsAuthenticated } from '../../features/shared/auth/authSlice';
import HeloLogo from '../../components/shared/HeloLogo';

const AuthLayout: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  
  useEffect(() => {
    // If user is already authenticated, redirect to dashboard
    if (isAuthenticated) {
      navigate('/member/dashboard');
    }
  }, [isAuthenticated, navigate]);
  
  return (
    <div className="min-h-screen bg-light dark:bg-primary">
      <div className="absolute top-0 left-0 w-full p-4">
        <HeloLogo />
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout; 