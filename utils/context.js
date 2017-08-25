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
    vcapServices = require('vcap_services'),
    watson = require('watson-developer-cloud');

// TODO 最適なパラメータを設定する。
const APP_SETTINGS = {
    TWITTER_TIMELINE_COUNT: 5,
    VISUAL_RECOGNITION_SCORE: 0.6
};

// データベース名
const DB_NAME = 'activity';

// 環境変数
const appEnv = cfenv.getAppEnv();

// Cloudant NoSQL DB サービス
const cloudant = new Cloudant(vcapServices.getCredentials('cloudantNoSQLDB'));

// Visual Recognition サービス資格情報
const visualRecognitionCreds = vcapServices.getCredentials('watson_vision_combined');

// Visual Recognition サービス
const visualRecognition = new watson.VisualRecognitionV3({
    api_key: visualRecognitionCreds.api_key,
    version: 'v3',
    version_date: '2016-05-20'
});


// Personality Insights サービス資格情報
const personalityInsightsCreds = vcapServices.getCredentials('personality_insights');

// Personality Insights サービス
var personalityInsights = new watson.PersonalityInsightsV3({
    username: personalityInsightsCreds.username,
    password: personalityInsightsCreds.password,
    version_date: '2016-10-19'
});

// Weather Company Data サービス資格情報
const weatherinsightsCreds = vcapServices.getCredentials('weatherinsights');

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
    APP_SETTINGS: APP_SETTINGS,
    DB_NAME: DB_NAME,
    cloudant: cloudant,
    personalityInsights: personalityInsights,
    visualRecognition: visualRecognition,
    weatherinsightsCreds: weatherinsightsCreds
};