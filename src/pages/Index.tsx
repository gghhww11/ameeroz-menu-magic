
import React, { useState, useEffect } from 'react';
import { LanguageProvider } from '../context/LanguageContext';
import { menuItems } from '../data/menuItems';
import Header from '../components/Header';
import CategoryFilter from '../components/CategoryFilter';
import MenuCard from '../components/MenuCard';
import LanguageToggle from '../components/LanguageToggle';
import ContactSection from '../components/ContactSection';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState(menuItems);
  
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <LanguageProvider>
      <div className="min-h-screen pb-16 overflow-x-hidden">
        <LanguageToggle />
        <div className="container mx-auto px-4">
          <Header />
          
          <CategoryFilter 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
          
          <ContactSection />
        </div>
      </div>
    </LanguageProvider>
  );
};

export default Index;
