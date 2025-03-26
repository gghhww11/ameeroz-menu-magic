
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
  const { translate } = useLanguage();

  return (
    <header className="w-full flex flex-col items-center justify-center py-12 animate-fade-in">
      <div className="w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 logo-glow">
        <h1 className="text-ameeroz-red text-4xl font-bold">
          {translate('restaurantName').charAt(0)}
        </h1>
      </div>
      <h1 className="text-ameeroz-red text-3xl md:text-4xl font-bold mb-2">
        {translate('restaurantName')}
      </h1>
      <p className="text-ameeroz-dark/70 text-sm md:text-base font-medium">
        {translate('restaurantTagline')}
      </p>
    </header>
  );
};

export default Header;
