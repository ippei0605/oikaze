# 追い風

## アプリ画面
* (できれば)スマホから以下の URL にアクセスしてください。
    - https://oikaze.au-syd.mybluemix.net/#start

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

### プッシュ
1. Bluemix にログインする。 (パスワードを入力してください。)
    ```
     bx login -a https://api.au-syd.bluemix.net -u wbc_2017_1@jiec.co.jp -o wbc_2017_1@jiec.co.jp -c 267f9050fc9a825549b77b20817c9d8f -s dev
    ```

1. アプリをプッシュする。
    ```
    bx app push oikaze
    ```

## 参考
* クライアントアプリのリポジトリ
    - https://github.com/jiec-gitou/follow-wind-client
* 管理およびリコメンドエンジンのリポジトリ
    - https://github.com/jiec-gitou/wbc_manage
* EXAMPLE: QUERYING A CLOUDANT GEO INDEX
    - https://docs.cloudant.com/geo.html#example:-querying-a-cloudant-geo-index
