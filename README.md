# 追い風

## アプリ画面
(できれば) スマホから以下の URL にアクセスしてください。
* 本番
    - https://oikaze.au-syd.mybluemix.net/#start
* バックアップ
    - https://oikaze.eu-gb.mybluemix.net/#start

## テスト画面
* 本番
    - https://oikaze.au-syd.mybluemix.net/test
* バックアップ
    - https://oikaze.eu-gb.mybluemix.net/test
* 以前の検証ページです。(eu-gbにもありますが、コールバックの関係で Facebook には対応してません。)
    - https://oikaze.au-syd.mybluemix.net/test/area-filter.html
    - https://oikaze.au-syd.mybluemix.net/test/distance.html

> ルート直下はクライアントアプリ (Vue.js) を配置

## セットアップ

### クライアントアプリの組込み
* ローカルを最新化してください。
* mystore.js に定義されている baseURL: 'https://oikaze.au-syd.mybluemix.net/', を行ごと削除してください。(3箇所)
* npm run build
* dist 配下 (index.html および static デフィレクトリー) を こちらの public 配下にコピーしてください。

### 本番 @シドニー
1. Bluemix にログインする。 (パスワードを入力してください。)
    ```
     bx login -a https://api.au-syd.bluemix.net -u wbc_2017_1@jiec.co.jp -o wbc_2017_1@jiec.co.jp -c 267f9050fc9a825549b77b20817c9d8f -s dev
    ```

1. アプリをプッシュする。
    ```
    bx app push oikaze
    ```

### バックアップ @ロンドン
1. Bluemix にログインする。 (パスワードを入力してください。)
    ```
     bx login -a https://api.eu-gb.bluemix.net -u wbc_2017_1@jiec.co.jp -o wbc_2017_1@jiec.co.jp -c 267f9050fc9a825549b77b20817c9d8f -s dev
    ```

1. アプリをプッシュする。
    ```
    bx app push oikaze
    ```

1. 環境変数を設定する。
    - 名前: API_BASE_URL
    - 値: https://oikaze-api-eu-gb.eu-gb.mybluemix.net/

## 参考
* クライアントアプリのリポジトリ
    - https://github.com/jiec-gitou/follow-wind-client
* 管理およびリコメンドエンジンのリポジトリ
    - https://github.com/jiec-gitou/wbc_manage
* EXAMPLE: QUERYING A CLOUDANT GEO INDEX
    - https://docs.cloudant.com/geo.html#example:-querying-a-cloudant-geo-index
