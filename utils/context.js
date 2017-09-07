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
    VISUAL_RECOGNITION_SCORE: 0.6,
    RADIUS: "20000",
};

// API タイムアウト
const API_TIMEOUT = {
    VISUAL_RECOGNITION: 5000,
    RECOMMEND: 5000
};

// リコメンドエンジン BASE URL
const API_BASE_URL = process.env.API_BASE_URL || 'https://oikaze-api.au-syd.mybluemix.net/';

// 環境変数
const appEnv = cfenv.getAppEnv();

// Cloudant NoSQL DB サービス
const cloudant = new Cloudant(process.env.CLOUDANT_URL);

// データベースを使用する。
const log = cloudant.db.use('log');

// Visual Recognition サービス資格情報
const visualRecognitionCreds = vcapServices.getCredentials('watson_vision_combined');

// Personality Insights サービス資格情報
const personalityInsightsCreds = vcapServices.getCredentials('personality_insights');

// Personality Insights サービス
const personalityInsights = new watson.PersonalityInsightsV3({
    username: personalityInsightsCreds.username,
    password: personalityInsightsCreds.password,
    version_date: '2016-10-19'
});

// Weather Company Data サービス資格情報
const weatherinsightsCreds = vcapServices.getCredentials('weatherinsights');

/**
 * コンテキスト
 * @property {object} API_BASE_URL リコメンドエンジン BASE URL
 * @property {object} API_TIMEOUT API タイムアウト
 * @property {object} appEnv 環境変数
 * @property {object} APP_SETTINGS アプリ設定
 * @property {object} log log データベース
 * @property {object} personalityInsights Personality Insights サービス
 * @property {object} visualRecognitionCreds Visual Recognition サービス資格情報
 * @property {object} weatherinsightsCreds Weather Company Data サービス資格情報
 *
 * @type {{API_BASE_URL: string, API_TIMEOUT: {VISUAL_RECOGNITION: number, RECOMMEND: number}, appEnv, APP_SETTINGS: {TWITTER_TIMELINE_COUNT: number, VISUAL_RECOGNITION_SCORE: number, RADIUS: string}, personalityInsights: PersonalityInsightsV3, visualRecognitionCreds: Object, weatherinsightsCreds: Object}}
 */
module.exports = {
    API_BASE_URL: API_BASE_URL,
    API_TIMEOUT: API_TIMEOUT,
    appEnv: appEnv,
    APP_SETTINGS: APP_SETTINGS,
    log: log,
    personalityInsights: personalityInsights,
    visualRecognitionCreds: visualRecognitionCreds,
    weatherinsightsCreds: weatherinsightsCreds
};