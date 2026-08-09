# 06. GitHub Pagesへのデプロイ

## 概要

PC-LABO「Reactで学ぶ 予定管理アプリ開発」シリーズ最終回（第6回）のソースコードである。
アプリの中身はVer.5から変更していない。今回は、GitHub Actionsを使ってこのアプリをGitHub Pagesに自動デプロイする設定を加える。

## 動作確認環境

- Node.js v22系
- npm v10系

## ローカルでのセットアップ

```bash
cd 06_deploy-github-pages
npm install
npm run dev
```

`http://localhost:5173` にブラウザでアクセスすると、Ver.5と同じ内容の予定管理アプリが表示される。

開発サーバーを終了する場合は、ターミナル上で `Ctrl + C` を押す（`Ctrl + Z`はプロセスを一時停止させるだけで終了はしないため、ここでは使わない）。

## デプロイ設定

### 1. vite.config.jsのbase設定

GitHub Pagesのプロジェクトページ（`https://<ユーザー名>.github.io/<リポジトリ名>/`）に公開する場合、リポジトリ名を`base`として設定する必要がある。

```js
export default defineConfig({
  plugins: [react()],
  base: '/pc-labo-react-learning/',
})
```

### 2. GitHub Actionsワークフロー

リポジトリ直下の`.github/workflows/deploy-06.yml`に、以下を自動化するワークフローを用意している。

- `06_deploy-github-pages`配下に変更がpushされたら自動実行
- 依存パッケージのインストール、ビルド（`npm run build`）
- ビルド成果物（`dist/`）をGitHub Pagesへデプロイ

詳しい設定内容と、GitHubリポジトリ側で必要な設定（Settings > Pages > Source）は、ブログ記事本文を参照。

## ファイル構成

```
06_deploy-github-pages/
├── index.html
├── package.json
├── vite.config.js               ← baseを追加
├── public/favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx                    ← Ver.5から表示文言のみ変更
    ├── App.css
    ├── index.css
    └── components/
        ├── Calendar.jsx
        ├── ScheduleItem.jsx
        └── ScheduleForm.jsx

（リポジトリ直下）
.github/workflows/deploy-06.yml    ← GitHub Actionsのデプロイワークフロー
```

## 学んだこと

- Viteでビルドしたアプリをそのままpushしても動かない理由（プロジェクトページ特有のURL構造と`base`設定の関係）
- GitHub Actionsを使うと、pushするだけで「ビルド→公開」までを自動化できる
- ワークフローファイル（`.yml`）の基本的な読み方（`on`＝いつ実行するか、`jobs`＝何を実行するか）

## 関連記事

- ブログ記事: （[第6回](https://pc-labo.online/2026/08/09/learning-schedule-management-app-development-with-react-part6/)）
- 前の記事: [第5回](https://pc-labo.online/2026/07/24/learning-schedule-management-app-development-with-react-part5/)
- 次の記事: なし（シリーズ最終回）
