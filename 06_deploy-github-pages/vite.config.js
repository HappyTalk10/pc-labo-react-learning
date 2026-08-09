import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pagesのプロジェクトページ（https://<ユーザー名>.github.io/<リポジトリ名>/）に
  // 合わせて、リポジトリ名をbaseに設定する
  base: '/pc-labo-react-learning/',
})
