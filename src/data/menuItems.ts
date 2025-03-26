
export interface MenuItem {
  id: number;
  name: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  price: number;
  image: string;
  category: 'meals' | 'addons' | 'beverages';
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: {
      ar: 'برجر لحم أنجوس',
      en: 'Angus Beef Burger'
    },
    description: {
      ar: 'برجر لحم بقري أنجوس فاخر مع جبنة شيدر وصلصة خاصة',
      en: 'Premium Angus beef burger with cheddar cheese and special sauce'
    },
    price: 35,
    image: '/placeholder.svg',
    category: 'meals'
  },
  {
    id: 2,
    name: {
      ar: 'برجر دجاج مقرمش',
      en: 'Crispy Chicken Burger'
    },
    description: {
      ar: 'برجر دجاج مقرمش مع صلصة الرانش وخس طازج',
      en: 'Crispy chicken burger with ranch sauce and fresh lettuce'
    },
    price: 28,
    image: '/placeholder.svg',
    category: 'meals'
  },
  {
    id: 3,
    name: {
      ar: 'شاورما لحم',
      en: 'Beef Shawarma'
    },
    description: {
      ar: 'شاورما لحم على الطريقة السورية مع صلصة طحينة وبطاطا مقلية',
      en: 'Syrian-style beef shawarma with tahini sauce and french fries'
    },
    price: 32,
    image: '/placeholder.svg',
    category: 'meals'
  },
  {
    id: 4,
    name: {
      ar: 'شاورما دجاج',
      en: 'Chicken Shawarma'
    },
    description: {
      ar: 'شاورما دجاج طازجة مع ثوم وبهارات خاصة',
      en: 'Fresh chicken shawarma with garlic and special spices'
    },
    price: 26,
    image: '/placeholder.svg',
    category: 'meals'
  },
  {
    id: 5,
    name: {
      ar: 'بطاطا مقلية',
      en: 'French Fries'
    },
    description: {
      ar: 'بطاطا مقلية مقرمشة مع ملح البحر',
      en: 'Crispy french fries with sea salt'
    },
    price: 12,
    image: '/placeholder.svg',
    category: 'addons'
  },
  {
    id: 6,
    name: {
      ar: 'حلقات البصل',
      en: 'Onion Rings'
    },
    description: {
      ar: 'حلقات بصل مقرمشة بالبقسماط',
      en: 'Crispy breaded onion rings'
    },
    price: 14,
    image: '/placeholder.svg',
    category: 'addons'
  },
  {
    id: 7,
    name: {
      ar: 'صلصة الثوم',
      en: 'Garlic Sauce'
    },
    description: {
      ar: 'صلصة ثوم كريمية محضرة طازجة',
      en: 'Creamy fresh garlic sauce'
    },
    price: 5,
    image: '/placeholder.svg',
    category: 'addons'
  },
  {
    id: 8,
    name: {
      ar: 'كوكا كولا',
      en: 'Coca Cola'
    },
    description: {
      ar: 'كوكا كولا باردة ومنعشة',
      en: 'Cold refreshing Coca Cola'
    },
    price: 7,
    image: '/placeholder.svg',
    category: 'beverages'
  },
  {
    id: 9,
    name: {
      ar: 'عصير برتقال طازج',
      en: 'Fresh Orange Juice'
    },
    description: {
      ar: 'عصير برتقال طازج ومثلج',
      en: 'Fresh chilled orange juice'
    },
    price: 15,
    image: '/placeholder.svg',
    category: 'beverages'
  },
  {
    id: 10,
    name: {
      ar: 'شاي بالنعناع',
      en: 'Mint Tea'
    },
    description: {
      ar: 'شاي مع أوراق نعناع طازجة',
      en: 'Tea with fresh mint leaves'
    },
    price: 8,
    image: '/placeholder.svg',
    category: 'beverages'
  }
];
