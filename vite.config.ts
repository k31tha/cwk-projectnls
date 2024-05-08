import {defineConfig} from 'vitest/config';
import {loadEnv} from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
//import dotenv from 'dotenv';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    server: {
      port: 3000,
    },
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
  };
});
