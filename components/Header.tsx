
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Contact Info Top Bar */}
      <div className="bg-[#EE4D2D] text-white py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-[10px] md:text-xs font-medium gap-2">
          <div className="flex items-center space-x-4">
            <a href="tel:0925540789" className="flex items-center hover:opacity-80 transition-opacity">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              0925540789
            </a>
            <a href="mailto:dinhkhai8686@gmail.com" className="flex items-center hover:opacity-80 transition-opacity">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              dinhkhai8686@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://www.facebook.com/dinhkhai.net" target="_blank" rel="noopener noreferrer" className="flex items-center hover:opacity-80 transition-opacity">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-100 h-16 flex items-center px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#EE4D2D] rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <span className="font-black text-lg md:text-xl tracking-tight text-gray-900 uppercase">
              GIA PHÁT <span className="text-[#EE4D2D]">SHOP</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-[#EE4D2D] font-medium text-sm transition-colors">Trang chủ</a>
            <a href="#deals" className="text-gray-600 hover:text-[#EE4D2D] font-medium text-sm transition-colors">Sản phẩm</a>
            <a href="#why-us" className="text-gray-600 hover:text-[#EE4D2D] font-medium text-sm transition-colors">Về chúng tôi</a>
          </nav>

          <div className="flex items-center">
            <button className="text-gray-400 p-2 hover:text-[#EE4D2D] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
