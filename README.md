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

## 建物の追加方法

<div align="center">

![Start-up window](docs_images/landingpage.png)

</div>

上記のBiulidings Listに建物を追加する方法

`frontend/src/components/buildingsData.jsx`の中に以下のようなデータ構造で建物データが格納されている。

| Key | data type | Description                   |
|-------------|-----------|-------------------------------|
| buildingId  | str       | 建物固有のID           |
| title       | str       | 建物名                    |
| description | str       | 建物名の下の建物の説明|
|imageUrl| str    |  建物の画像のパス |
|keywords| str    |検索バーでの検索の候補に含めたいワード|
|tag| str    | 学部レベルの建物かどうかなどのラベル|
|mapCoordinate| str |ページに地図をうまく表示するための固有の値|
|lat| str    | 値を増やすと地図上では下に赤いピンが移動|
|lon| str    | 値を増やすと地図上では右に赤いピンが移動|

図書館の例
```python
{ 
'buildingId': '2', 
    'title': '中央図書館', 
    'description': '広島大学の中央図書館です。', 
    'imageUrl': 'building_images/building2.jpg', 
    'keywords': ['中央図書館', '図書館', '図書', "Library", "Central"], 
    'tag': 'faculty', 
    'mapCoordinate': '#17/34.403814/132.715201', 'lat': '34.40320', 
    'lon': '132.71345' 
}
```
上記のようなデータを`const buildings`の最後に追加すると、建物がトップページのリストに追加される。



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
