# HirodaiMaps3.0
## リンク
本番環境のリンクは以下
<a hreh = "https://hirodaimaps.com">https://hirodaimaps.com</a>

## 自分のパソコンでのアプリケーションの起動
1. プロジェクトのルートディレクトリ（Hirodaimaps3.0)にいることを確認する。
2. frontend　ディレクトリに移動する。
 ```bash
 cd frontend
 ```
3. フロントエンドサーバーを起動。
 ```bash
npm start
 ```
4. サーバー起動後、<a>http://localhost:3000/</a>にアクセスする。
   チェックポイントIDが郵便局の場合、クエリパラメータで以下のように指定する。
   <a>http://localhost:3000/?qrid=1</a>

## .htaccessの設定
以下の設定をFTPで書き換えることでリダイレクトに対応。
```bash
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . index.html [L]
```
