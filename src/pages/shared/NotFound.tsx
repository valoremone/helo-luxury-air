import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light dark:bg-primary">
      <div className="text-center p-8 max-w-md">
        <h1 className="text-6xl font-bold text-primary dark:text-accent mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-primary dark:text-light mb-4">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="btn-primary"
          >
            Return Home
          </Link>
          <Link
            to="/member/dashboard"
            className="btn-secondary"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 