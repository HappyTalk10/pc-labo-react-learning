# 02. コンポーネント分割とprops

## 概要

PC-LABO「Reactで学ぶ 予定管理アプリ開発」シリーズ第2回のソースコードである。
Ver.1のHello World画面を、実際に予定を並べて表示するだけのシンプルな一覧画面に置き換え、コンポーネント分割とpropsの受け渡しを学ぶ。

## 動作確認環境

- Node.js v22系
- npm v10系

## セットアップ

```bash
cd 02_components-and-props
npm install
npm run dev
```

`http://localhost:5173` にブラウザでアクセスすると、予定一覧が表示される。

開発サーバーを終了する場合は、ターミナル上で Ctrl + C を押す

## ビルド

```bash
npm run build
```

## ファイル構成

```
02_components-and-props/
├── index.html
├── package.json
├── vite.config.js
├── public/favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx                    ← 予定データの配列を保持し、一覧を描画する
    ├── App.css
    ├── index.css
    └── components/
        └── ScheduleItem.jsx        ← props（title, date）を受け取り1件分を表示する
```

## 学んだこと

- コンポーネントを役割ごとにファイル分割する考え方（`App.jsx` と `components/ScheduleItem.jsx`）
- 親コンポーネント（App）から子コンポーネント（ScheduleItem）へ、propsを使ってデータを渡す方法
- 配列の`.map()`を使って、複数件のデータをまとめてコンポーネントに変換する書き方

## 関連記事

- ブログ記事: [Reactで学ぶ 予定管理アプリ開発（第2回）～ コンポーネント分割とprops～](https://pc-labo.online/2026/07/20/learning-schedule-management-app-development-with-react-part-2/)）
- 前の記事: [Reactで学ぶ 予定管理アプリ開発（第1回）～Vite環境構築とHello World～](https://pc-labo.online/2026/07/19/learning-schedule-management-app-development-with-react-part-1/)
- 次の記事: `03_usestate-todo`（準備中）
