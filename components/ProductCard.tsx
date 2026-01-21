
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formatPrice = (price: number) => {
    if (price <= 0) return 'Đang cập nhật';
    return price.toLocaleString('vi-VN') + 'đ';
  };

  // Chỉ hiện giá gốc nếu nó lớn hơn giá ưu đãi
  const showOriginalPrice = product.originalPrice > product.discountPrice;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400?text=Gia+Phat+Shop';
          }}
        />
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.tags.map((tag, idx) => (
            <span key={idx} className="bg-[#EE4D2D] text-white text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded shadow-sm uppercase">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-3 md:p-4 flex flex-col flex-grow">
        <h3 className="text-gray-800 font-medium text-xs md:text-sm line-clamp-2 mb-2 group-hover:text-[#EE4D2D] transition-colors min-h-[2.5rem]">
          {product.name}
        </h3>
        
        <div className="mt-auto">
          <div className="flex flex-col mb-3">
            {showOriginalPrice ? (
              <span className="text-gray-400 text-[10px] md:text-xs line-through">
                {formatPrice(product.originalPrice)}
              </span>
            ) : (
              <span className="text-transparent text-[10px] md:text-xs select-none">.</span>
            )}
            <span className="text-[#EE4D2D] font-bold text-sm md:text-lg">
              {formatPrice(product.discountPrice)}
            </span>
          </div>
          
          <a 
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#EE4D2D] hover:bg-[#d43d1f] text-white font-bold py-2 md:py-2.5 rounded-lg transition-colors text-xs md:text-sm shadow-sm active:scale-95 transform"
          >
            Mua Ngay
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
