/**
 * 追い風: ルーティング

 * @module routes/index
 * @author Ippei SUZUKI
 */

'use strict';

// モジュールを読込む。
const
    express = require('express'),
    request = require('request');

// ルーターを作成する。
const router = express.Router();

// Bluemix にログインする。
router.get('/', (req, res) => {
    res.json({'status': 200});
});

module.exports = router;