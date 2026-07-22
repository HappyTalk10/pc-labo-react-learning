# 04. useEffect + localStorageによるデータ永続化

## 概要

PC-LABO「Reactで学ぶ 予定管理アプリ開発」シリーズ第4回のソースコードである。
Ver.3で作った追加・削除機能に、`useEffect`と`localStorage`を組み合わせてデータを永続化する仕組みを追加する。ブラウザを再読み込みしても、登録した予定が消えなくなる。

## 動作確認環境

- Node.js v22系
- npm v10系

## セットアップ

```bash
cd 04_useeffect-localstorage
npm install
npm run dev
```

`http://localhost:5173` にブラウザでアクセスすると、予定一覧と入力フォームが表示される。予定を追加・削除した後にブラウザをリロードしても、内容が保持されていることを確認できる。

開発サーバーを終了する場合は、ターミナル上で `Ctrl + C` を押す（`Ctrl + Z`はプロセスを一時停止させるだけで終了はしないため、ここでは使わない）。

## ビルド

```bash
npm run build
```

## ファイル構成

```
04_useeffect-localstorage/
├── index.html
├── package.json
├── vite.config.js
├── public/favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx                    ← useEffectでlocalStorageへの保存・読み込みを行う
    ├── App.css
    ├── index.css
    └── components/
        ├── ScheduleItem.jsx        ← Ver.3から変更なし
        └── ScheduleForm.jsx        ← Ver.3から変更なし
```

## 学んだこと

- `useEffect`を使うと、状態（state）が変化した「後」に何か処理を実行できる
- `localStorage`は、ブラウザ内にデータを保存できる仕組み。文字列しか保存できないため、配列やオブジェクトは`JSON.stringify`で文字列に変換してから保存し、読み込む時は`JSON.parse`で元に戻す
- `useState`の初期値には、関数を渡すこともできる（初回レンダリング時にのみ実行される）。ここでは、ページ読み込み時に`localStorage`から保存済みデータを取り出す処理に使っている

## 関連記事

- ブログ記事: （準備中）
- 前の記事: [03_usestate-todo](https://pc-labo.online/2026/07/21/learning-schedule-management-app-development-with-react-part-3/)
- 次の記事: `05_calendar-app`（準備中）
