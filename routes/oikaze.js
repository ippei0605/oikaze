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
    moment = require('moment'),
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
    return axios.get(`${context.visualRecognitionCreds.url}/v3/classify`, {
        params: {
            api_key: context.visualRecognitionCreds.api_key,
            url: url,
            version: '2016-05-20'
        },
        headers: {
            'Accept-Language': 'ja'
        },
        timeout: context.API_TIMEOUT.VISUAL_RECOGNITION
    })
        .then((value) => {
            let text = '';
            value.data.images[0].classifiers[0].classes.forEach((item) => {
                if (item.score >= score) {
                    text += item.class + '、';
                }
            });
            if (text) {
                text += 'の画像をアップロードしました。';
            }
            return text;
        })
        .catch((error) => {
            console.log('error:', error);
            return '';
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
    })
        .then((value) => {
            return {
                "location": location,
                "weather": value.data
            }
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

const recommend = (temp) => {
    const forecast = temp.weather.forecasts[0].day ? temp.weather.forecasts[0].day : temp.weather.forecasts[0].night;
    return axios.post(`${context.API_BASE_URL}v2/OikazeSagashi`, {
        "headers": {
            "Content-Type": "application/json"
        },
        area: {
            "lat": temp.location.lat.toString(),
            "lon": temp.location.lng.toString(),
            "radius": temp.settings.radius
        },
        insights: {
            "all_data": {
                "personality": temp.profile.personality
            },
        },
        weather: {
            "pop": forecast.pop.toString(),
            "wspd": forecast.wspd.toString()
        },
        "timeout": context.API_TIMEOUT.RECOMMEND
    });
};

router.get('/timeline', (req, res) => {
    // パラメータを取得する。
    const
        address = req.query.address,
        screen_name = req.query.screen_name,
        count = req.query.count || context.APP_SETTINGS.TWITTER_TIMELINE_COUNT,
        include_retweets_flg = req.query.include_retweets_flg || 'false',
        recognition_flg = req.query.recognition_flg || 'true',
        score = req.query.score || context.APP_SETTINGS.VISUAL_RECOGNITION_SCORE,
        radius = req.query.radius || context.APP_SETTINGS.RADIUS;

    let temp = {
        "settings": {
            "address": address,
            "screen_name": screen_name,
            "count": count,
            "include_retweets_flg": include_retweets_flg,
            "recognition_flg": recognition_flg,
            "score": score,
            "radius": radius
        }
    };
    const include_rts = include_retweets_flg === 'true' ? true : false;
    timeline({
        "screen_name": screen_name,
        "count": count,
        "include_rts": include_rts
    })
        .then((value) => {
            Object.assign(temp, value);
            res.json(temp);
        })
        .catch((error) => {
            console.log('error:', error);
            res.status(500).json({'error': error});
        });
});


const recognizeAndProfile = (temp) => {
    let classes;
    if (temp.settings.recognition_flg === 'true') {
        return Promise.all(temp.images.map((url) => {
            return classify(url, temp.settings.score);
        }))
            .then((value) => {
                temp.classes = value;
                const text = temp.tweets.join(' ') + value.join(' ');
                return profile(text);
            });
    } else {
        const text = temp.tweets.join(' ');
        return profile(text);
    }
};

router.post('/recommend', (req, res) => {
    const temp = req.body.temp;
    temp.label = {
        "big5_agreeableness": "協調性",
        "big5_conscientiousness": "誠実性",
        "big5_extraversion": "外向性",
        "big5_neuroticism": "敏感性",
        "big5_openness": "好奇心"
    };
    Promise.all([recognizeAndProfile(temp), geocode(temp.settings.address)])
        .then((value) => {
            temp.profile = value[0];
            temp.location = value[1].location;
            temp.weather = value[1].weather;
            return recommend(temp);
        })
        .then((value) => {
            temp.recommend = value.data[0].recommend;
            temp.surprise = value.data[0].surprise;
            context.log.insert({
                "datetime": moment().format(),
                "data": temp
            }, (error, value) => {
                if (error) {
                    console.log('error:', error);
                }
            });
            res.json(temp);
        })
        .catch((error) => {
            console.log('error:', error);
            context.log.insert({
                "datetime": moment().format(),
                "error": error
            }, (error, value) => {
                if (error) {
                    console.log('error:', error);
                }
            });
            res.status(500).json({'error': error});
        });
});

router.get('/', (req, res) => {
    const
        address = req.query.address,
        screen_name = req.query.screen_name,
        count = req.query.count || context.APP_SETTINGS.TWITTER_TIMELINE_COUNT,
        recognition_flg = req.query.recognition_flg || 'true',
        score = req.query.score || context.APP_SETTINGS.VISUAL_RECOGNITION_SCORE,
        radius = req.query.radius || context.APP_SETTINGS.RADIUS;

    let temp = {
        "settings": {
            "address": address,
            "screen_name": screen_name,
            "count": count,
            "recognition_flg": recognition_flg,
            "score": score,
            "radius": radius
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
                    return classify(url, score);
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
            temp.location = value[1].location;
            temp.weather = value[1].weather;
            return recommend(temp);
        })
        .then((value) => {
            temp.recommend = value.data[0].recommend;
            temp.surprise = value.data[0].surprise;
            res.json(temp);

        })
        .catch((error) => {
            console.log('error:', error);
            res.status(500).json({'error': error});
        });
});

module.exports = router;