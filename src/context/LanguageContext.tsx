
import React, { createContext, useState, useContext } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translate: (key: string) => string;
}

const translations = {
  ar: {
    'all': 'الكل',
    'meals': 'الوجبات',
    'addons': 'إضافات جانبية',
    'beverages': 'المشروبات',
    'price': 'السعر',
    'sar': 'ر.س',
    'description': 'الوصف',
    'languageToggle': 'English',
    'restaurantName': 'أميروز',
    'restaurantTagline': 'مذاق لا يُنسى',
  },
  en: {
    'all': 'All',
    'meals': 'Meals',
    'addons': 'Add-ons',
    'beverages': 'Beverages',
    'price': 'Price',
    'sar': 'SAR',
    'description': 'Description',
    'languageToggle': 'العربية',
    'restaurantName': "AMEERO'Z",
    'restaurantTagline': 'Unforgettable Taste',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const translate = (key: string): string => {
    return translations[language][key as keyof typeof translations.ar] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
