/**
 * @file データロード
 * @author Ippei SUZUKI
 */

'use strict';

//モジュールを読込む。
const
    fs = require('fs'),
    context = require('../utils/context');

// アクティビティファイル
const ACTIVITY_FILENAME = 'activity.json';

// インデックス
const GEO_INDEX = `function(doc) {
    if (doc.geometry && doc.geometry.coordinates) {
        st_index(doc.geometry);
    }
}`;
// マップファンクション
const MAP_FUNCTION = `function (doc) {
    var row = {
        "_id": doc._id,
        "_rev": doc._rev,
        "type": doc.type,
        "geometry": doc.geometry,
        "properties": doc.properties,
    };
    emit(doc._id, row);
}`;
// 設計文書
const DESIGN_DOC = {
    "_id": "_design/geodd",
    "views": {
        "list": {
            "map": MAP_FUNCTION
        }
    },
    "st_indexes": {
        "geoidx": {
            "index": GEO_INDEX
        }
    }
};

// データベースを使用する。
const db = context.cloudant.db.use(context.DB_NAME);

// 設計文書を登録する。
db.insert(DESIGN_DOC, (error, body) => {
    if (error) {
        console.log('error:', error);
    } else {
        console.log(`設計文書[${DESIGN_DOC._id}]を登録しました。`);
        console.log('----------');
        console.log(JSON.stringify(DESIGN_DOC, undefined, 2));
        console.log('----------');
    }
});

// データを登録する。
fs.readFile(__dirname + '/' + ACTIVITY_FILENAME, (error, data) => {
    if (error) {
        console.log('error:', error);
    } else {
        const json = JSON.parse(data.toString());
        db.bulk(json, (error, body) => {
            if (error) {
                console.log('error:', error);
            } else {
                console.log('文書を登録しました。');
                console.log('----------');
                console.log(JSON.stringify(json, undefined, 2));
                console.log('----------');
            }
        });
    }
});
