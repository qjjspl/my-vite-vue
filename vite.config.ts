import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
  host: '0.0.0.0', //解决"vite use `--host` to expose"
  port: 8089,
  hmr: true,
  open: true
},
resolve: {
  alias: [
    {
      find: '@',
      replacement: resolve(__dirname, 'src')
    }
  ]
}
})

