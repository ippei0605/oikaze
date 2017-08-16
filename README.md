# 追い風

## テスト画面
https://oikaze.au-syd.mybluemix.net/

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

## 参考
* https://docs.cloudant.com/geo.html#example:-querying-a-cloudant-geo-index
