import React from 'react';

interface HeloLogoProps {
  className?: string;
  darkMode?: boolean;
}

const HeloLogo: React.FC<HeloLogoProps> = ({ className, darkMode = false }) => {
  return (
    <div className={`${className || ''} flex items-center`}>
      <div className="w-8 h-8 rounded-full bg-primary dark:bg-accent flex items-center justify-center text-white dark:text-primary font-bold text-sm mr-2">
        H
      </div>
      <span className="font-bold text-xl text-primary dark:text-accent">HELO</span>
    </div>
  );
};

export default HeloLogo; 