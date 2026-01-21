
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-8 mb-8">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <div className="w-8 h-8 bg-[#EE4D2D] rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <span className="font-black text-xl tracking-tight text-white uppercase">Gia Phát Shop</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://www.facebook.com/dinhkhai.net" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
            <a href="mailto:dinhkhai8686@gmail.com" className="hover:text-white transition-colors">Email</a>
            <a href="tel:0925540789" className="hover:text-white transition-colors">Hotline: 0925540789</a>
          </div>
        </div>
        
        <div className="text-center md:text-left">
          <p className="text-sm leading-relaxed mb-4">
            <span className="text-white font-medium">Tuyên bố miễn trừ trách nhiệm:</span> Website chia sẻ các sản phẩm chất lượng, với giá ưu đãi. Chúng tôi không trực tiếp bán hàng, mọi giao dịch sẽ được thực hiện trên sàn TMĐT Shopee qua link tiếp thị liên kết của <strong>Gia Phát Shop</strong>.
          </p>
          <p className="text-xs">
            © {new Date().getFullYear()} Gia Phát Shop. Website tĩnh, không thu thập dữ liệu người dùng.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
