/**
 * @file Twitter テスト
 * @author Ippei SUZUKI
 */

'use strict';
const
    fs = require('fs'),
    Twitter = require('twitter'),
    context = require('./utils/context');

const client = new Twitter({
    consumer_key: 'E5za5OWhxmjsHR9L0gaMbnNhB',
    consumer_secret: 'CMbg3wiemlAUyJ68ERvlWT7sYCx696XYCHraIpWljvwkQbn8Nz',
    access_token_key: '268618165-h3SPrD5wXoHwFKCV7IByL0lClqWLRMIm8NxJ4OhB',
    access_token_secret: 'YpgOYBRI2Os17tAPBCEAsnDcuZWlFXbqg421sngL67f41'
});

const params = {
    screen_name: 'AbeShinzo',
    count: 50
};
client.get('statuses/user_timeline', params, (error, tweets, response) => {
    if (error) {
        console.log('error:', error);
    } else {
        tweets.forEach((item) => {
            console.log(item.text);
            if (item.extended_entities) {
                console.log('url:', item.extended_entities.media[0].media_url_https);
                context.visualRecognition.classify({
                    url: item.extended_entities.media[0].media_url_https,
                    'Accept-Language': 'ja'
                }, (error, value) => {
                    if (error) {
                        console.log('error:', error);
                    } else {
                        console.log(JSON.stringify(value, undefined, 2));
                    }
                });
            }
        });
    }
});