# HirodaiMaps3.0
## リンク
<a hreh = "https://hirodaimaps.com">https://hirodaimaps.com</a>

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