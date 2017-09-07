# 追い風

## アプリ画面
(できれば) スマホから以下の URL にアクセスしてください。
* 本番
    - https://oikaze.au-syd.mybluemix.net/#start
* バックアップ (コールバックの関係で Facebook 未対応)
    - https://oikaze.eu-gb.mybluemix.net/#start

## テスト画面
* 本番
    - https://oikaze.au-syd.mybluemix.net/test
* バックアップ
    - https://oikaze.eu-gb.mybluemix.net/test
* 以前の検証ページです。(eu-gbにもあります。)
    - https://oikaze.au-syd.mybluemix.net/test/area-filter.html
    - https://oikaze.au-syd.mybluemix.net/test/distance.html

    > ルート直下はクライアントアプリ (Vue.js) を配置


## エラーハンドリング
サーバーエラーは全てステータス 500 でエラーオブジェクトを返しています。代表的なエラーを以下に示します。
* ツイッターのスクリーンネームが無い
    - responseJSON.error[0].code = 34
    - responseJSON.error[0].message = "Sorry, that page does not exist."
* 性格分析 (Personality Insights) で語数が不足して分析できない
    - responseJSON.error.code = 400
    - responseJSON.error.error = "単語数 88 が、分析に必要な最小単語数よりも少なくなっています: 100"
    
        > 単語数の数値 (88) は例です。

## ロギング
最終的に取得できたデータ (data)、またはエラーオブジェクト (error) はタイムスタンプ (datetime) とともに log データベースに登録しております。Cloudant のサービス資格情報は環境変数で設定しております。(別組織のためバインドできません、後述)


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

1. 環境変数を設定する。

    |名前           |値     |
    | :---------- | :----- | 
    |CLOUDANT_URL  |https://412c4383-2907-48a7-8ed3-7c5330d287d0-bluemix:d5b407a58653ba93f161e304b3a6e15b99a5f806b1c576322b0fe3b947f64c08@412c4383-2907-48a7-8ed3-7c5330d287d0-bluemix.cloudant.com|

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

    |名前           |値     |
    | :---------- | :----- |
    |API_BASE_URL |https://oikaze-api-eu-gb.eu-gb.mybluemix.net/|
    |CLOUDANT_URL |https://8a7bd247-8bf3-446d-ad5d-fdb5b7e947ab-bluemix:974e12653ad2c43ae85d441b5ea503c29e4f63f1a5ff20a2beb55e08adfffdb8@8a7bd247-8bf3-446d-ad5d-fdb5b7e947ab-bluemix.cloudant.com|


## 参考
* クライアントアプリのリポジトリ
    - https://github.com/jiec-gitou/follow-wind-client
* 管理およびリコメンドエンジンのリポジトリ
    - https://github.com/jiec-gitou/wbc_manage
* EXAMPLE: QUERYING A CLOUDANT GEO INDEX
    - https://docs.cloudant.com/geo.html#example:-querying-a-cloudant-geo-index
