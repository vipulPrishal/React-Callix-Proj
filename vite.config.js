import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    chunkSizeWarningLimit: 3000,
  },
});

// --- version 2👇🏼👇🏼👇🏼🌟-NOW I WANT MY vite.config.js file to use the env variable base url from the .env file----
// import { fileURLToPath, URL } from 'node:url';
// import tailwindcss from '@tailwindcss/vite';
// import react from '@vitejs/plugin-react';
// import { defineConfig, loadEnv } from 'vite';

// export default defineConfig(({ mode }) => {
//   // Load environment variables
//   const env = loadEnv(mode, process.cwd(), '');

//   // Debug: Log the environment variable
//   console.log('�� VITE_API_BASE_URL:', env.VITE_API_BASE_URL);

//   return {
//     plugins: [react(), tailwindcss()],
//     base: '/',
//     resolve: {
//       alias: {
//         '@': fileURLToPath(new URL('./src', import.meta.url)),
//       },
//     },
//     build: {
//       chunkSizeWarningLimit: 3000,
//     },
//     server: {
//       proxy: {
//         '/api': {
//           target: env.VITE_API_BASE_URL,
//           changeOrigin: true,
//           secure: true,
//           configure: (proxy, _options) => {
//             proxy.on('error', (err, _req, _res) => {
//               console.log('❌ Proxy error:', err);
//             });
//             proxy.on('proxyReq', (proxyReq, req, _res) => {
//               console.log('🚀 Sending Request to Target:', req.method, req.url);
//               console.log('🎯 Target URL:', env.VITE_API_BASE_URL);
//             });
//             proxy.on('proxyRes', (proxyRes, req, _res) => {
//               console.log(
//                 '✅ Received Response:',
//                 proxyRes.statusCode,
//                 req.url,
//               );
//             });
//           },
//         },
//       },
//     },
//   };
// });
