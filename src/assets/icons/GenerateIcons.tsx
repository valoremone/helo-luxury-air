import React from 'react';
import HeloLogo from '../../components/shared/HeloLogo';

/**
 * This component is used to generate the app icons in different sizes.
 * It's not meant to be used in the app, but rather to generate the icons
 * that will be used as favicon and app icons.
 * 
 * To use it:
 * 1. Render this component in a temporary page
 * 2. Take screenshots of the rendered logos
 * 3. Save them as favicon.ico, logo192.png, and logo512.png
 */
const GenerateIcons: React.FC = () => {
  return (
    <div className="p-8 flex flex-col items-center space-y-8">
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">Favicon (64x64)</h2>
        <div className="w-16 h-16 bg-white p-2 rounded-lg">
          <HeloLogo className="w-full h-full" />
        </div>
      </div>
      
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">Logo 192x192</h2>
        <div className="w-48 h-48 bg-white p-4 rounded-lg">
          <HeloLogo className="w-full h-full" />
        </div>
      </div>
      
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">Logo 512x512</h2>
        <div className="w-96 h-96 bg-white p-8 rounded-lg">
          <HeloLogo className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default GenerateIcons; 