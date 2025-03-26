
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface CategoryFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  activeCategory, 
  setActiveCategory 
}) => {
  const { translate } = useLanguage();
  
  const categories = [
    { id: 'all', label: 'all' },
    { id: 'meals', label: 'meals' },
    { id: 'addons', label: 'addons' },
    { id: 'beverages', label: 'beverages' }
  ];

  return (
    <div className="w-full flex justify-center mb-8 px-4">
      <div className="glass rounded-full p-1.5 flex space-x-1 rtl:space-x-reverse animate-scale-in shadow">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`category-button ${
              activeCategory === category.id 
                ? 'category-button-active' 
                : 'category-button-inactive'
            }`}
            aria-label={`Filter by ${category.label}`}
          >
            {translate(category.label)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
