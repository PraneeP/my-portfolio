/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#D58A46',
        'brand-teal': '#088295',
        'brand-light': '#4AB9D6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      },
      // 👇 เพิ่มส่วนนี้สำหรับทำ Animation ลอยๆ
      animation: {
        'blob': 'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite', // ลอยช้ากว่าเพื่อนหน่อย จะได้ไม่พร้อมกัน
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }, // ลอยขึ้น 20px
        }
      },
    },
  },
  plugins: [],
}