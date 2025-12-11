import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic' // 👈 เพิ่มบรรทัดนี้เข้าไปครับ (สำคัญ!)
    })
  ],
  base: '/my-portfolio/', 
})