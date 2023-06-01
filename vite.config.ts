import {defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [react(), eslint()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.js',
    passWithNoTests: true,
    include: ['./src/tests/**/*.tsx', './src/**/tests/**/*.ts'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      provider: 'istanbul',
    },
  },
});
