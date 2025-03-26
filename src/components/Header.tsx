
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
  const { translate } = useLanguage();

  return (
    <header className="w-full flex flex-col items-center justify-center py-12 animate-fade-in">
      <div className="w-32 h-32 mb-4 logo-glow">
        <img 
          src="/lovable-uploads/243a64e4-12b6-49ff-8269-99e020d095c4.png" 
          alt="AMEERO'Z Logo" 
          className="w-full h-full object-contain"
        />
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
