/**
 * 追い風: ルーティング

 * @module routes/index
 * @author Ippei SUZUKI
 */

'use strict';

// モジュールを読込む。
const
    express = require('express'),
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
                console.log('value:', value);
                resolve(value);
            }
        });
    });
};

router.get('/', (req, res) => {
    const twitterParams = {
        "screen_name": req.query.screen_name,
        "count": req.query.count
    };
    let temp = {};
    timeline(twitterParams)
        .then((value) => {
            temp = value;
            return Promise.all(value.images.map((url) => {
                return classify(url, req.query.score);
            }));
        })
        .then((value) => {
            temp.classes = value;
            const text = temp.tweets.join(' ') + value.join(' ');
            console.log('text:', text);
            return profile(text);
        })
        .then((value) => {
            temp.profile = value;
            res.json(temp);
        })
        .catch((error) => {
            console.log('error:', error);
            res.status(500).json({'error': error});
        });
});

module.exports = router;