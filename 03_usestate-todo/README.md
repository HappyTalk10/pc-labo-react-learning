# 03. useStateによる予定の追加・削除

## 概要

PC-LABO「Reactで学ぶ 予定管理アプリ開発」シリーズ第3回のソースコードである。
Ver.2で作った予定一覧に、`useState`を使った追加・削除機能を実装する。

## 動作確認環境

- Node.js v22系
- npm v10系

## セットアップ

```bash
cd 03_usestate-todo
npm install
npm run dev
```

`http://localhost:5173` にブラウザでアクセスすると、予定一覧と入力フォームが表示される。

開発サーバーを終了する場合は、ターミナル上で `Ctrl + C` を押す（`Ctrl + Z`はプロセスを一時停止させるだけで終了はしないため、ここでは使わない）。

## ビルド

```bash
npm run build
```

## ファイル構成

```
03_usestate-todo/
├── index.html
├── package.json
├── vite.config.js
├── public/favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx                    ← useStateで予定配列を管理し、追加・削除を行う
    ├── App.css
    ├── index.css
    └── components/
        ├── ScheduleItem.jsx        ← 削除ボタンを追加（onDelete propsを受け取る）
        └── ScheduleForm.jsx        ← 日付・タイトルの入力フォーム（onAdd propsを受け取る）
```

## 学んだこと

- `useState`で配列（予定の一覧）を状態として管理する方法
- スプレッド構文（`[...prev, newSchedule]`）を使って、既存の配列を壊さず新しい要素を追加する考え方
- `.filter()`を使って、指定したidの要素だけを取り除く削除処理の書き方
- フォームの入力値を`useState`で管理し、送信時にリセットする流れ

## 関連記事

- ブログ記事: （準備中）
- 前の記事: [02_components-and-props](https://pc-labo.online/2026/07/20/learning-schedule-management-app-development-with-react-part-2/)
- 次の記事: `04_useeffect-localstorage`（準備中）
