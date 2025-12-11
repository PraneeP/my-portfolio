import React from 'react';

const DeviceMockup = ({ desktopImg, mobileImg }) => {
  // ถ้าเป็น null หรือว่าง จะเป็น false
  const hasMobile = Boolean(mobileImg);

  return (
    <div className="relative w-full max-w-[800px] mx-auto h-[400px] md:h-[500px] flex items-center justify-center">
      
      {/* 🖥️ Desktop Frame */}
      {/* Logic: ถ้าไม่มีมือถือ (hasMobile เป็น false) ให้ขยายจอกว้างขึ้นและอยู่ตรงกลาง */}
      <div 
        className={`relative aspect-video bg-gray-900 rounded-xl shadow-2xl border-[10px] border-gray-800 overflow-hidden transform transition duration-500 hover:scale-105
        ${hasMobile ? 'w-[70%] md:w-[75%] -translate-x-8 md:-translate-x-12 translate-y-4' : 'w-[90%] md:w-[95%] translate-x-0'} 
        `}
      >
        <img src={desktopImg} alt="Desktop View" className="w-full h-full object-fill" />
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full h-4 bg-gray-800 rounded-b-lg"></div>
      </div>

      {/* 📱 Mobile Frame */}
      {/* แสดงเฉพาะตอนที่มีรูป mobileImg เท่านั้น */}
      {hasMobile && (
        <div className="absolute right-4 md:right-12 bottom-0 w-[25%] md:w-[22%] aspect-[9/19] bg-gray-900 rounded-[2rem] shadow-2xl border-[8px] border-gray-800 overflow-hidden transform translate-y-8 hover:translate-y-4 transition duration-500 z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-4 bg-gray-800 rounded-b-lg z-20"></div>
          <img src={mobileImg} alt="Mobile View" className="w-full h-full object-cover" />
        </div>
      )}

    </div>
  );
};

export default DeviceMockup;