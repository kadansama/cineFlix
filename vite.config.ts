import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/features': path.resolve(__dirname, './src/features'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/shared': path.resolve(__dirname, './src/shared'),
      '@/config': path.resolve(__dirname, './src/config'),
      '@/types': path.resolve(__dirname, './src/shared/types'),
      '@/utils': path.resolve(__dirname, './src/shared/utils'),
      '@/ui': path.resolve(__dirname, './src/shared/ui'),
      '@/lib': path.resolve(__dirname, './src/shared/lib'),
      '@/api': path.resolve(__dirname, './src/features'),
      '@/movie': path.resolve(__dirname, './src/features/movie'),
      '@/popularFilms': path.resolve(__dirname, './src/features/popularFilms')
    }
  }
})