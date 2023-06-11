# Next.jsでメンテナンスモードを導入するサンプルコード

Next.js 13 App Router のmiddlewareを用いてメンテナンスモードを導入するサンプルコードです。

## 環境構築

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## メンテナンスモードの切り替え

- `.env` の環境変数を設定してメンテナンスモードを有効にする
```.env:.env
NEXT_PUBLIC_MAINTENANCE_MODE=true
NEXT_PUBLIC_MAINTENANCE_WHITELIST=1.0.0.1,1.0.0.2
```