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
const data = JSON.parse(fs.readFileSync(__dirname + '/' + ACTIVITY_FILENAME).toString());

// 設計文書
const GEO_INDEX = `function(doc) {
    if (doc.geometry && doc.geometry.coordinates) {
        st_index(doc.geometry);
    }
}`;
const DESIGN_DOC = {
    "_id": "_design/geodd",
    "st_indexes": {
        "geoidx": {
            "index": GEO_INDEX
        }
    }
};

// データベースを使用する。
const db = context.cloudant.db.use(context.DB_NAME);

db.get(DESIGN_DOC._id,(error, body)=>{
    if(error )
   console.log(error);
});

// 設計文書を登録する。
db.insert(DESIGN_DOC, (error, body) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`設計文書[${DESIGN_DOC._id}]を登録しました。`);
        console.log('----------');
        console.log(JSON.stringify(DESIGN_DOC, undefined, 2));
        console.log('----------');
    }
});

// データを登録する。
db.bulk(data, (error, body) => {
    if (error) {
        console.log(error);
    } else {
        console.log('文書を登録しました。');
        console.log('----------');
        console.log(JSON.stringify(data, undefined, 2));
        console.log('----------');
    }
});
