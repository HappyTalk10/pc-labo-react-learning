# 05. 月表示カレンダーの実装

## 概要

PC-LABO「Reactで学ぶ 予定管理アプリ開発」シリーズ第5回のソースコードである。
Ver.4までの「一覧表示だけ」の画面に、月表示のカレンダーを追加する。カレンダー上の日付をクリックすると、その日の予定だけを表示・追加・削除できるようになる。

## 動作確認環境

- Node.js v22系
- npm v10系

## セットアップ

```bash
cd 05_calendar-app
npm install
npm run dev
```

`http://localhost:5173` にブラウザでアクセスすると、月表示のカレンダーと、選択中の日付の予定一覧が表示される。

開発サーバーを終了する場合は、ターミナル上で `Ctrl + C` を押す（`Ctrl + Z`はプロセスを一時停止させるだけで終了はしないため、ここでは使わない）。

## ビルド

```bash
npm run build
```

## ファイル構成

```
05_calendar-app/
├── index.html
├── package.json
├── vite.config.js
├── public/favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx                    ← カレンダー・選択日・予定の追加削除を統合
    ├── App.css
    ├── index.css
    └── components/
        ├── Calendar.jsx            ← 月表示カレンダー本体（新規）
        ├── ScheduleItem.jsx        ← Ver.4から変更なし
        └── ScheduleForm.jsx        ← 選択中の日付に予定を追加する形に変更
```

## 学んだこと

- `Date`オブジェクトを使って、月の初日の曜日・最終日を計算し、カレンダーのマス目を組み立てる方法
- 配列の`.reduce()`を使って、「日付ごとの予定件数」のような集計データを作る方法
- クリックした日付を状態（`selectedDate`）として持ち、他のコンポーネント（フォーム・一覧）をその状態でフィルタリングする「1つの状態を複数のコンポーネントで共有する」考え方

## 関連記事

- ブログ記事: （準備中）
- 前の記事: [04_useeffect-localstorage](https://pc-labo.online/2026/07/23/learning-schedule-management-app-development-with-react-part-4/)
- 次の記事: `06_deploy-github-pages`（準備中）
