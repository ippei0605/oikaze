/**
 * 追い風: コンテキスト
 *
 * @module utils/context
 * @author Ippei SUZUKI
 */

'use strict';

// モジュールを読込む。
const
    cfenv = require('cfenv'),
    Cloudant = require('cloudant'),
    vcapServices = require('vcap_services');

// データベース名を
const DB_NAME = 'activity';

// 環境変数を取得する。
const appEnv = cfenv.getAppEnv();

// Cloudant NoSQL DB に接続する。
const cloudant = new Cloudant(vcapServices.getCredentials('cloudantNoSQLDB'));

/**
 * コンテキスト
 * @property {object} appEnv 環境変数
 * @property {string} DB_NAME データベース名
 * @property {object} cloudant Cloudant NoSQL DB
 *
 * @type {{appEnv, DB_NAME: string, cloudantCreds: Object}}
 */
module.exports = {
    appEnv: appEnv,
    DB_NAME: DB_NAME,
    cloudant: cloudant
};