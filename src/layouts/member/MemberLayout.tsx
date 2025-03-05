import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import { logout, selectCurrentUser } from '../../features/shared/auth/authSlice';
import HeloLogo from '../../components/shared/HeloLogo';

interface MemberLayoutProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const MemberLayout: React.FC<MemberLayoutProps> = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  
  const handleLogout = async () => {
    await dispatch(logout());
    navigate('/login');
  };
  
  const navigation = [
    { name: 'Dashboard', href: '/member/dashboard', icon: HomeIcon },
    { name: 'Book a Flight', href: '/member/booking', icon: CalendarIcon },
    { name: 'My Trips', href: '/member/trips', icon: AirplaneIcon },
    { name: 'Profile', href: '/member/profile', icon: UserIcon },
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <div className="min-h-screen bg-platinum-700 dark:bg-jet-300">
      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-jet-100/50" onClick={() => setMobileMenuOpen(false)}></div>
        <div className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gunmetal-400 shadow-lg">
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
            <HeloLogo />
            <button
              type="button"
              className="text-gray-500 dark:text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XIcon className="w-6 h-6" />
            </button>
          </div>
          <nav className="mt-4 px-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  isActive(item.href)
                    ? 'bg-platinum-600 dark:bg-gunmetal-500 text-gunmetal dark:text-gold'
                    : 'text-jet-600 dark:text-platinum-400 hover:bg-platinum-700 dark:hover:bg-gunmetal-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon
                  className={`mr-3 h-5 w-5 ${
                    isActive(item.href)
                      ? 'text-gunmetal dark:text-gold'
                      : 'text-jet-600 dark:text-platinum-400'
                  }`}
                />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white dark:bg-gunmetal-400 shadow">
          <div className="flex items-center h-16 px-6 border-b border-gray-200 dark:border-gray-700">
            <HeloLogo />
          </div>
          <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
            <nav className="flex-1 px-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    isActive(item.href)
                      ? 'bg-platinum-600 dark:bg-gunmetal-500 text-gunmetal dark:text-gold'
                      : 'text-jet-600 dark:text-platinum-400 hover:bg-platinum-700 dark:hover:bg-gunmetal-600'
                  }`}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 ${
                      isActive(item.href)
                        ? 'text-gunmetal dark:text-gold'
                        : 'text-jet-600 dark:text-platinum-400'
                    }`}
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top navigation */}
        <div className="sticky top-0 z-10 flex h-16 bg-white dark:bg-gunmetal-400 shadow">
          <button
            type="button"
            className="px-4 text-jet-600 dark:text-platinum-400 lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
          
          <div className="flex-1 flex justify-end px-4">
            <div className="ml-4 flex items-center md:ml-6">
              {/* Dark mode toggle */}
              <button
                type="button"
                className="p-1 rounded-full text-jet-600 dark:text-platinum-400 hover:text-jet-800 dark:hover:text-platinum-200 focus:outline-none"
                onClick={toggleDarkMode}
              >
                {darkMode ? (
                  <SunIcon className="h-6 w-6" />
                ) : (
                  <MoonIcon className="h-6 w-6" />
                )}
              </button>
              
              {/* Profile dropdown */}
              <div className="ml-3 relative">
                <div>
                  <button
                    type="button"
                    className="max-w-xs flex items-center text-sm rounded-full focus:outline-none"
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-gold-600 flex items-center justify-center text-white">
                      {currentUser?.firstName?.charAt(0) || 'U'}
                    </div>
                    <span className="ml-2 text-jet-800 dark:text-platinum-400 hidden md:block">
                      {currentUser?.firstName} {currentUser?.lastName}
                    </span>
                    <ChevronDownIcon className="ml-1 h-5 w-5 text-jet-600 dark:text-platinum-400" />
                  </button>
                </div>
                
                {userMenuOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gunmetal-400 ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link
                        to="/member/profile"
                        className="block px-4 py-2 text-sm text-jet-700 dark:text-platinum-400 hover:bg-platinum-600 dark:hover:bg-gunmetal-500"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        Your Profile
                      </Link>
                      <button
                        className="w-full text-left block px-4 py-2 text-sm text-jet-700 dark:text-platinum-400 hover:bg-platinum-600 dark:hover:bg-gunmetal-500"
                        onClick={() => {
                          handleLogout();
                          setUserMenuOpen(false);
                        }}
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// Icons
const HomeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const AirplaneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const LogoutIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);

const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const SunIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export default MemberLayout; 