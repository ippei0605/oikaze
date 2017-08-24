# 追い風

## テスト画面
https://oikaze.au-syd.mybluemix.net/

こちらは以前の懸賞ページです。
* https://oikaze.au-syd.mybluemix.net/area-filter.html
* https://oikaze.au-syd.mybluemix.net/distance.html

## データ

### アクティビティデータ
* data/activity.json に作成しました。

### マスター
* data/master.csv に作成しました。(Excel から抽出、LF, UTF-8 に変換)

### 設計文書
* _design/geodd

  - インデックス /st_indexes/geoidx
    ```
    function(doc) {
      if (doc.geometry && doc.geometry.coordinates) {
        st_index(doc.geometry);
      }
    }
    ```

  - マップ /views/list
    ```
    function (doc) {
        var row = {
            "_id": doc._id,
            "_rev": doc._rev,
            "type": doc.type,
            "geometry": doc.geometry,
            "properties": doc.properties,
        };
        emit(doc._id, row);
    }
    ```

### データロード方法
```
$ node data/load
```
> ローカル環境で実行する場合は、環境変数 VCAP_SERVICES を設定してください。

> サーバー環境では、プッシュ時の postinstall で実行するように設定しております。設計文書は既存の場合はエラー、同一キーのデータは上書きされないため、連続で実行させても問題ありません。

> $ はプロンプトです。

## アプリ

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
* https://docs.cloudant.com/geo.html#example:-querying-a-cloudant-geo-index
