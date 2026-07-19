# 01. Vite + React環境構築（Hello World）

## 概要

PC-LABO「Reactで学ぶ 予定管理アプリ開発」シリーズ第1回のソースコードである。
Vite + Reactの開発環境を構築し、動作確認までを行う。

## 動作確認環境

- Node.js v22系
- npm v10系

## Node.jsのインストール

### Windows / Mac 共通（推奨：nvmを使う方法）

バージョン管理がしやすいよう、nvm（Node Version Manager）経由でのインストールを推奨する。

**Mac / Linux**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

インストール後、ターミナルを再起動するか以下を実行する。

```bash
source ~/.bashrc   # または ~/.zshrc
```

**Windows**

[nvm-windows](https://github.com/coreybutler/nvm-windows/releases) のインストーラー（`nvm-setup.exe`）をダウンロードして実行する。

### Node.jsのインストールと切り替え

```bash
nvm install 22
nvm use 22
```

### インストール確認

```bash
node --version   # v22.x.x
npm --version    # 10.x.x
```

本シリーズはNode.js v22系・npm v10系で動作確認している。

## セットアップ

```bash
cd 01_hello-vite-react
npm install
npm run dev
```

`http://localhost:5173` にブラウザでアクセスすると、"Hello, PC-LABO!" とカウンターボタンが表示される。

## ビルド

```bash
npm run build
```

`dist/` 配下に本番用の静的ファイルが出力される。

## ファイル構成

```
01_hello-vite-react/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx      ← エントリーポイント
    ├── App.jsx       ← 画面の中身（Hello World + カウンター）
    ├── App.css
    └── index.css
```

## 学んだこと

- Viteによる開発サーバーの起動（`npm run dev`）
- Reactコンポーネントの基本構造（`App.jsx`）
- JSXの基本記法（HTMLに似た記法でUIを記述する）
- `useState`を使った簡単な状態管理（カウンターボタン）

## 関連記事

- ブログ記事: （準備中）
- 前の記事: なし（シリーズ第1回）
- 次の記事: `02_components-and-props`（準備中）
