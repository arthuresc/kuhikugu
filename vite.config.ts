import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';

// https://vite.dev/config/
export default defineConfig({
  // root: 'src/', // Preciso indicar o local do arquivo html de inicio (index.html) para mudar o root
  plugins: [
    react(),
    tailwindcss(),
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
  ],
  // TODO Alias por enquanto não tem muita vantagem, implementar corretamente ou configurar o root melhor
  // resolve: {
  //   alias: [
  //     { find: '@', replacement: 'src' }
  //   ]
  // },
});
