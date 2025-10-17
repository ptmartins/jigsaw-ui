/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import { resolve } from 'path';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  server: {
    fs: {
      strict: false
    }
  },
  optimizeDeps: {
    exclude: ['lit'],
    force: true,
    esbuildOptions: {
      target: 'es2020'
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'JigsawUI',
      formats: ['es', 'cjs'],
      fileName: format => `jigsaw-ui.${format}.js`
    },
    rollupOptions: {
      external: ['lit', 'lit/decorators.js', 'lit/directives/class-map.js', 'lit/directives/style-map.js'],
      output: {
        globals: {
          'lit': 'lit',
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