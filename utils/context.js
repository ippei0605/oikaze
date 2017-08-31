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

// データベース名
const DB_NAME = 'activity';

// 環境変数
const appEnv = cfenv.getAppEnv();

// Cloudant NoSQL DB サービス
const cloudant = new Cloudant(vcapServices.getCredentials('cloudantNoSQLDB'));

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
 * @property {object} API_TIMEOUT API タイムアウト
 * @property {object} appEnv 環境変数
 * @property {object} アプリ設定
 * @property {string} DB_NAME データベース名
 * @property {object} cloudant Cloudant NoSQL DB
 * @property {object} personalityInsights Personality Insights サービス
 * @property {object} visualRecognitionCreds Visual Recognition サービス資格情報
 * @property {object} weatherinsightsCreds Weather Company Data サービス資格情報
 *
 * @type {{API_TIMEOUT: {VISUAL_RECOGNITION: number, RECOMMEND: number}, appEnv, APP_SETTINGS: {TWITTER_TIMELINE_COUNT: number, VISUAL_RECOGNITION_SCORE: number, RADIUS: string}, DB_NAME: string, cloudant: Cloudant, personalityInsights: PersonalityInsightsV3, visualRecognitionCreds: Object, weatherinsightsCreds: Object}}
 */
module.exports = {
    API_TIMEOUT: API_TIMEOUT,
    appEnv: appEnv,
    APP_SETTINGS: APP_SETTINGS,
    DB_NAME: DB_NAME,
    cloudant: cloudant,
    personalityInsights: personalityInsights,
    visualRecognitionCreds: visualRecognitionCreds,
    weatherinsightsCreds: weatherinsightsCreds
};