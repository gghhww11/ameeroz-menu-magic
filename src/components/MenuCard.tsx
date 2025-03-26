
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MenuItem } from '../data/menuItems';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const { language, translate } = useLanguage();
  
  return (
    <div className="glass rounded-xl overflow-hidden menu-card animate-fade-up">
      <div className="aspect-video bg-gray-100 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name[language]} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-ameeroz-dark mb-2">
          {item.name[language]}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 min-h-[40px]">
          {item.description[language]}
        </p>
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="text-sm font-medium text-ameeroz-dark">
            {translate('price')}
          </div>
          <div className="text-ameeroz-red font-bold">
            {item.price} {translate('sar')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
