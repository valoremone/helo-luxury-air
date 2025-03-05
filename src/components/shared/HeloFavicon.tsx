import React from 'react';

interface HeloFaviconProps {
  className?: string;
}

const HeloFavicon: React.FC<HeloFaviconProps> = ({ className }) => {
  return (
    <div className={`${className || ''} w-8 h-8 rounded-full bg-primary dark:bg-accent flex items-center justify-center text-white dark:text-primary font-bold text-sm`}>
      H
    </div>
  );
};

export default HeloFavicon; 