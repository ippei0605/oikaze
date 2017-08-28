/**
 * 追い風: ルーティング

 * @module routes/index
 * @author Ippei SUZUKI
 */

'use strict';

// モジュールを読込む。
const
    axios = require('axios'),
    express = require('express'),
    googleMaps = require('@google/maps'),
    Twitter = require('twitter'),
    context = require('../utils/context');

// ルーターを作成する。
const router = express.Router();

const client = new Twitter({
    consumer_key: 'E5za5OWhxmjsHR9L0gaMbnNhB',
    consumer_secret: 'CMbg3wiemlAUyJ68ERvlWT7sYCx696XYCHraIpWljvwkQbn8Nz',
    access_token_key: '268618165-h3SPrD5wXoHwFKCV7IByL0lClqWLRMIm8NxJ4OhB',
    access_token_secret: 'YpgOYBRI2Os17tAPBCEAsnDcuZWlFXbqg421sngL67f41'
});

const googleMapsClient = googleMaps.createClient({
    key: 'AIzaSyCGDCL9Cf2wYuTh0Er_KiqYlgasj-BRFds',
    Promise: Promise
});

const timeline = (params) => {
    return new Promise((resolve, reject) => {
        client.get('statuses/user_timeline', params, (error, tweets, response) => {
            if (error) {
                console.log('error:', error);
                reject(error);
            } else {
                let text = '', texts = [], images = [];
                tweets.forEach((item) => {
                    text += item.text;
                    texts.push(item.text);
                    if (item.extended_entities) {
                        images.push(item.extended_entities.media[0].media_url_https);
                    }
                });
                resolve({
                    tweets: texts,
                    images: images
                });
            }
        });
    });
};

const classify = (url, score) => {
    return new Promise((resolve, reject) => {
        context.visualRecognition.classify({
            "url": url,
            "Accept-Language": "ja"
        }, (error, value) => {
            if (error) {
                console.log('error:', error);
                reject(error);
            } else {
                let text = '';
                value.images[0].classifiers[0].classes.forEach((item) => {
                    if (item.score >= score) {
                        text += item.class + '、';
                    }
                });
                if (text) {
                    text += 'の画像をアップロードしました。';
                }
                resolve(text);
            }
        });
    });
};

const profile = (text) => {
    return new Promise((resolve, reject) => {
        context.personalityInsights.profile({
            "text": text,
            "consumption_preferences": true,
            "raw_scores": true,
            "headers": {
                "content-type": "text/plain;charset=utf-8",
                "content-language": "ja",
                "accept": "application/json",
                "accept-language": "ja"
            }
        }, (error, value) => {
            if (error) {
                console.log('error:', error);
                reject(error);
            } else {
                resolve(value);
            }
        });
    });
};

const forecast = (location) => {
    return axios.get(`https://${context.weatherinsightsCreds.host}/api/weather/v1/geocode/${location.lat}/${location.lng}/forecast/daily/3day.json?language=ja`, {
        "auth": {
            "username": context.weatherinsightsCreds.username,
            "password": context.weatherinsightsCreds.password
        },
        "headers": {
            "Accept": 'application/json'
        },
        "timeout": 10000
    });
};

const geocode = (address) => {
    return googleMapsClient.geocode({
        "address": address
    }).asPromise()
        .then((value) => {
            return forecast(value.json.results[0].geometry.location);
        })
        .catch((error) => {
            console.log('error:', error);
            res.status(500).json(error);
        });
};

router.get('/', (req, res) => {
    // パラメータを取得する。
    const
        address = req.query.address,
        screen_name = req.query.screen_name,
        count = req.query.count || context.APP_SETTINGS.TWITTER_TIMELINE_COUNT,
        recognition_flg = req.query.recognition_flg || 'true',
        score = req.query.score || context.APP_SETTINGS.VISUAL_RECOGNITION_SCORE;

    let temp = {
        "settings": {
            "address": address,
            "screen_name": screen_name,
            "count": count,
            "recognition_flg": recognition_flg,
            "score": score
        }
    };
    timeline({
        "screen_name": screen_name,
        "count": count
    })
        .then((value) => {
            Object.assign(temp, value);
            if (recognition_flg === 'true') {
                return Promise.all(value.images.map((url) => {
                    return classify(url, score, recognition_flg);
                }));
            } else {
                return [''];
            }
        })
        .then((value) => {
            temp.classes = value;
            const text = temp.tweets.join(' ') + value.join(' ');
            return Promise.all([profile(text), geocode(address)]);
        })
        .then((value) => {
            temp.profile = value[0];
            temp.weather = value[1].data;
            res.json(temp);
        })
        .catch((error) => {
            console.log('error:', error);
            res.status(500).json({'error': error});
        });
});

module.exports = router;