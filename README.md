# 追い風

## テスト画面
https://oikaze.au-syd.mybluemix.net/

* テスト画面は認証エラーのため、一旦以下のURLで確認してください。
* ID 2 を起点に半径 1000 m で検索する。
  - https://3758fb7c-8205-44a2-a3e3-710a18880b49-bluemix:a50e9f45c23a6cb855ed21a9bb95e850eab6916d2e4e46cb2c0ea447cbf78699@3758fb7c-8205-44a2-a3e3-710a18880b49-bluemix.cloudant.com/activity/_design/geodd/_geo/geoidx?lat=36.845518&lon=138.358598&radius=1000&relation=contains&format=geojson
* ID 2 から 1 の距離は 8,720 m です。上記 URL の radius を 9000 とすると ID 2 と 1がヒットします。

https://docs.cloudant.com/geo.html#example:-querying-a-cloudant-geo-index

## データロード
```
$ node data/load
```
> ローカル環境で実行する場合は、環境変数 VCAP_SERVICES を設定してください。

> サーバー環境では、プッシュ時の postinstall で実行するように設定しております。設計文書は既存の場合はエラー、同一キーのデータは上書きされないため、連続で実行させても問題ありません。

> $ はプロンプトです。

## プッシュ
1. Bluemix にログインする。 (パスワードを入力してください。)
    ```
    $ bx login -a https://api.au-syd.bluemix.net -u wbc_2017_1@jiec.co.jp -c 267f9050fc9a825549b77b20817c9d8f -s dev
    ```
1. アプリをプッシュする。
    ```
    bx app push oikaze
    ```


