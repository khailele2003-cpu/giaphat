
import React from 'react';

const reasons = [
  {
    title: 'Chọn deal thật',
    desc: 'Chúng tôi lọc và kiểm tra kỹ từng sản phẩm trước khi chia sẻ.',
    icon: '🎯'
  },
  {
    title: 'Không tăng giá',
    desc: 'Đảm bảo giá ưu đãi thật sự, không có chuyện nâng giá rồi giảm.',
    icon: '💰'
  },
  {
    title: 'Sản Phẩm Chính Hãng',
    desc: 'Ưu tiên các gian hàng Shopee Mall và Shop Yêu Thích.',
    icon: '✅'
  },
  {
    title: 'Cập nhật hàng ngày',
    desc: 'Liên tục cập nhật mã giảm giá và flash sale mới nhất.',
    icon: '⚡'
  }
];

const WhyUs: React.FC = () => {
  return (
    <section className="py-16 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
          Lý do nên săn deal qua Website này
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-gray-50 text-center hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-orange-100">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
