import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/ReactTodolist/', // 이 부분이 없으면 빌드 후에도 파일을 못 찾습니다!
  plugins: [react()],
});
