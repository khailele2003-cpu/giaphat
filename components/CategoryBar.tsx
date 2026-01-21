
import React from 'react';
import { Category } from '../types';

interface CategoryBarProps {
  categories: Category[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const CategoryBar: React.FC<CategoryBarProps> = ({ categories, selectedId, onSelect }) => {
  return (
    <div className="sticky top-[96px] md:top-[96px] z-20 bg-white/80 backdrop-blur-md border-b border-gray-100 py-3 mb-6">
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar flex space-x-3 md:justify-center">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              selectedId === cat.id
                ? 'bg-[#EE4D2D] text-white shadow-md shadow-orange-100'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span className="mr-1.5">{cat.icon}</span>
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
