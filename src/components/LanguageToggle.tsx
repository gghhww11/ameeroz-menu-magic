
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, translate } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 flex items-center justify-center gap-2 px-4 py-2 glass rounded-full
                 hover:bg-ameeroz-gold/20 transition-all duration-300 animate-fade-in"
      aria-label="Toggle language"
    >
      <Globe size={16} className="text-ameeroz-dark" />
      <span className="text-sm font-medium text-ameeroz-dark">
        {translate('languageToggle')}
      </span>
    </button>
  );
};

export default LanguageToggle;
