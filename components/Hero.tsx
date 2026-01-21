
import React from 'react';

interface HeroProps {
  onScrollToDeals: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToDeals }) => {
  return (
    <div className="bg-white pt-32 pb-12 px-4 md:px-8 text-center border-b border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-orange-50 text-[#EE4D2D] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fade-in">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
          </svg>
          <span>Link Sản Phẩm Chính Hãng</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Deal Ngon Mỗi Ngày — <span className="text-[#EE4D2D]">Mua Đúng Giá, Đúng Chỗ</span>
        </h1>
        
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Tổng hợp những sản phẩm tốt nhất từ Shopee với mức giá ưu đãi cực sâu, cam kết link chính hãng 100% từ <strong>Gia Phát Shop</strong>.
        </p>
        
        <button 
          onClick={onScrollToDeals}
          className="bg-[#EE4D2D] hover:bg-[#d43d1f] text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-orange-200 transition-all transform hover:scale-105 active:scale-95"
        >
          Xem deal hot hôm nay
        </button>
      </div>
    </div>
  );
};

export default Hero;
