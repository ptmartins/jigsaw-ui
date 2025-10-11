import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'JigsawUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `jigsaw-ui.${format}.js`
    },
    rollupOptions: {
      external: ['lit', 'lit/decorators.js', 'lit/directives/class-map.js', 'lit/directives/style-map.js'],
      output: {
        globals: {
          'lit': 'Lit',
          'lit/decorators.js': 'LitDecorators'
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true,
    target: 'es2020'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  esbuild: {
    target: 'es2020'
  }
});