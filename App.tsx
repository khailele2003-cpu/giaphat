
import React, { useState, useMemo, useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryBar from './components/CategoryBar';
import ProductCard from './components/ProductCard';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import { CATEGORIES } from './constants';
import { Product } from './types';

const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQzH1D0RZhKAtQpFVFDAtYuXAjNih5o08up7dfbl_RjsL2mJA3Vk71bWoUvuJH6rwMNspR4eGvGYzrH/pub?gid=0&single=true&output=csv";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const dealsRef = useRef<HTMLDivElement>(null);

  const cleanPrice = (val: any): number => {
    if (!val) return 0;
    const cleaned = String(val).replace(/\D/g, '');
    return parseInt(cleaned, 10) || 0;
  };

  const parseCSV = (text: string): string[][] => {
    const rows: string[][] = [];
    let currentRow: string[] = [];
    let cell = '';
    let inQuotes = false;
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (inQuotes) {
        if (c === '"' && text[i+1] === '"') { cell += '"'; i++; }
        else if (c === '"') inQuotes = false;
        else cell += c;
      } else {
        if (c === '"') inQuotes = true;
        else if (c === ',') { currentRow.push(cell.trim()); cell = ''; }
        else if (c === '\n' || c === '\r') {
          if (c === '\r' && text[i+1] === '\n') i++;
          currentRow.push(cell.trim());
          if (currentRow.some(v => v !== '')) rows.push(currentRow);
          currentRow = []; cell = '';
        } else cell += c;
      }
    }
    if (currentRow.length > 0 || cell !== '') {
      currentRow.push(cell.trim());
      rows.push(currentRow);
    }
    return rows;
  };

  const mapCategory = (catName: string): string => {
    const name = catName.toLowerCase().trim();
    if (name.includes('điện tử') || name.includes('electronic')) return 'electronics';
    if (name.includes('thời trang') || name.includes('fashion')) return 'fashion';
    if (name.includes('nhà cửa') || name.includes('home')) return 'home';
    if (name.includes('làm đẹp') || name.includes('beauty')) return 'beauty';
    return 'all';
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${SHEET_CSV_URL}&t=${Date.now()}`);
        if (!res.ok) throw new Error("Không thể tải dữ liệu");
        
        const text = await res.text();
        const allRows = parseCSV(text);
        if (allRows.length < 2) {
          setProducts([]);
          return;
        }

        const dataRows = allRows.slice(1);
        const parsed = dataRows.map((cols, idx) => {
          /**
           * Ánh xạ cột mới:
           * Cột 1 (0): ID
           * Cột 2 (1): Tên sản phẩm
           * Cột 4 (3): Link Ảnh (Người dùng yêu cầu)
           * Cột 5 (4): Giá gốc
           * Cột 6 (5): Giá ưu đãi
           * Cột 8 (7): Link Shopee
           * Cột 9 (8): Danh mục
           * Cột 10 (9): Tags
           */
          const name = cols[1] || "";
          const image = cols[3] || ""; // Cập nhật sang cột 4 (index 3)
          const gGoc = cleanPrice(cols[4]);
          const gUuDai = cleanPrice(cols[5]) || gGoc;
          
          let link = cols[7] || "";
          if (!link.includes('shopee.vn') && !link.includes('shp.ee')) {
            const foundLink = cols.find(c => c.includes('shopee.vn') || c.includes('shp.ee'));
            if (foundLink) link = foundLink;
          }

          const catRaw = cols[8] || "all";

          return {
            id: cols[0] || `p-${idx}`,
            name: name,
            originalPrice: gGoc,
            discountPrice: gUuDai,
            image: image || 'https://via.placeholder.com/400?text=S%E1%BA%A3n+Ph%E1%BA%A9m',
            link: link,
            category: mapCategory(catRaw),
            tags: cols[9] ? cols[9].split(';').map(t => t.trim()).filter(Boolean) : ["Deal Hot"]
          };
        }).filter(p => p.name.length > 2 && p.link.includes('http'));

        setProducts(parsed);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Lỗi đồng bộ dữ liệu. Hãy kiểm tra lại Google Sheet của bạn.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filtered = useMemo(() => {
    if (selectedCategory === 'all') return products;
    return products.filter(p => p.category === selectedCategory);
  }, [selectedCategory, products]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
      <Header />
      <main className="flex-grow">
        <Hero onScrollToDeals={() => dealsRef.current?.scrollIntoView({ behavior: 'smooth' })} />
        
        <div id="deals" ref={dealsRef} className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">🔥 Deal Ngon Giá Hời</h2>
              <p className="text-gray-500 text-sm">{loading ? "Đang cập nhật..." : `Có ${filtered.length} sản phẩm đang chờ bạn`}</p>
            </div>
          </div>
          
          <CategoryBar categories={CATEGORIES} selectedId={selectedCategory} onSelect={setSelectedCategory} />
          
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => <div key={i} className="bg-white rounded-xl h-64 animate-pulse border border-gray-100" />)}
            </div>
          ) : error ? (
            <div className="bg-white p-12 text-center rounded-2xl shadow-sm">
              <p className="text-red-500 mb-4">{error}</p>
              <button onClick={() => window.location.reload()} className="bg-[#EE4D2D] text-white px-6 py-2 rounded-lg">Thử lại</button>
            </div>
          ) : filtered.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {filtered.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : (
            <div className="bg-white p-20 text-center rounded-2xl shadow-sm">
              <div className="text-4xl mb-4">🛒</div>
              <p className="text-gray-400">Không tìm thấy sản phẩm nào. Hãy thử chọn danh mục khác!</p>
              <button onClick={() => setSelectedCategory('all')} className="mt-4 text-[#EE4D2D] font-bold">Xem tất cả</button>
            </div>
          )}
        </div>
        
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;
