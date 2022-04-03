import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true);

},
})
