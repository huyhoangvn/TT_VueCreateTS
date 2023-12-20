import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/TT_Vuecreatets/',
  publicDir: 'public',
  plugins: [vue()],
})
