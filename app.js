/**
 * @file 追い風: アプリ
 * @author Ippei SUZUKI
 */

'use strict';

// モジュールを読込む。
const
    bodyParser = require('body-parser'),
    express = require('express'),
    logger = require('morgan'),
    path = require('path'),
    favicon = require('serve-favicon'),
    context = require('./utils/context');

// アプリケーションを作成する。
const app = express();

// ミドルウェアを設定する。
app.use('/', express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(favicon(__dirname + '/public/favicon.ico'));

// ルートを設定する。
app.use('/oikaze', require('./routes/oikaze'));

// リクエトを受付ける。
app.listen(context.appEnv.port, function () {
    console.log('server starting on ' + context.appEnv.url);
});