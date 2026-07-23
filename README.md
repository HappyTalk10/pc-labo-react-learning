# pc-labo-react-learning

PC-LABO（[pc-labo.online](https://pc-labo.online/)）で連載中の「Reactで学ぶ 予定管理アプリ開発」シリーズのソースコード一式を管理するリポジトリである。

ブログ内のカテゴリ「GitHubでつくって学ぶ」に対応する連載として位置づけている。

## 企画概要

Vite + Reactを使って、シンプルな環境構築から始め、コンポーネント設計・状態管理・API連携・デプロイまでを段階的に学びながら、最終的に「予定管理アプリ」を完成させる連載企画である。
各回のブログ記事とソースコードを1対1で対応させ、記事を読みながらそのまま手を動かして学べる構成を目指している。

## シリーズ構成

| Ver | ディレクトリ | 内容 | ブログ記事 |
|---|---|---|---|
| Ver.1 | `01_hello-vite-react` | Vite + React環境構築・Hello World表示 | [公開済み](https://pc-labo.online/2026/07/19/learning-schedule-management-app-development-with-react-part-1/) |
| Ver.2 | `02_components-and-props` | コンポーネント分割・props | [公開済み](https://pc-labo.online/2026/07/20/learning-schedule-management-app-development-with-react-part-2/) |
| Ver.3 | `03_usestate-todo` | useStateによる予定の追加・削除 | [公開済み](https://pc-labo.online/2026/07/21/learning-schedule-management-app-development-with-react-part-3/) |
| Ver.4 | `04_useeffect-localstorage` | useEffect + localStorageによるデータ永続化 |  [公開済み](https://pc-labo.online/2026/07/23/learning-schedule-management-app-development-with-react-part-4/) |
| Ver.5 | `05_calendar-app` | 月表示カレンダーの実装 |  [公開済み](https://pc-labo.online/2026/07/24/learning-schedule-management-app-development-with-react-part5/) |
| Ver.6 | `06_deploy-github-pages` | GitHub Pagesへのデプロイ | （準備中） |

## 関連記事（GitHubの基礎）

Gitの基本操作やGitHub Codespacesの使い方については、以下の記事も参照してほしい。

- GitHubとは？       [プログラミング学習を「つくって学ぶ」ための土台](https://pc-labo.online/2026/07/21/what-is-github/)
- GitHubとは？(第2回)[（第2回）— Codespacesでコードを書いて動かしてみる（超初心者向け）](https://pc-labo.online/2026/07/22/what-is-github2/)

## 技術スタック

- React
- Vite
- JavaScript (ES2020+)

## 動作確認環境

各ディレクトリのREADME.mdに、そのVer時点でのNode.jsバージョン・実行手順を記載する。

## ライセンス

学習目的のサンプルコードとして自由に参照・改変して構わない。
