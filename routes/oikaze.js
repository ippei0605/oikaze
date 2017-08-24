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

const classify = (url) => {
    return new Promise((resolve, reject) => {
        context.visualRecognition.classify({
            url: url,
            'Accept-Language': 'ja'
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

router.get('/', (req, res) => {
    const twitterParams = {
        screen_name: req.query.screen_name,
        count: req.query.count
    };

    let temp = {};
    timeline(twitterParams)
        .then((value) => {
            temp = value;
            return Promise.all(value.images.map((url) => {
                return classify(url);
            }));
        })
        .then((value) => {
            const result = temp;
            result.classes = value;
            res.json(result);
        })
        .catch((error) => {
            res.send(500).json({'error': error});
        });
});

module.exports = router;