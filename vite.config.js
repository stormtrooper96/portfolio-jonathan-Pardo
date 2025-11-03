import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
    port: 5173,
    cors: true,
    allowedHosts: [
      'localhost',
      '.ngrok-free.dev',
      '.ngrok.io',
      '.ngrok.app'
    ],
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  },
  preview: {
    host: true,
    port: 4173,
    cors: true,
    allowedHosts: [
      'localhost',
      '.ngrok-free.dev',
      '.ngrok.io',
      '.ngrok.app'
    ],
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  }
})
