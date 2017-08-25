/**
 * @file Weather テスト
 * @author Ippei SUZUKI
 */

'use strict';
const
    axios = require('axios'),
    context = require('./utils/context');

const location = {
    "lat": 35.0962764,
    "lng": 139.0717047
};

axios.get(`https://${context.weatherinsightsCreds.host}/api/weather/v1/geocode/${location.lat}/${location.lng}/forecast/daily/10day.json?language=ja`, {
    auth: {
        username: context.weatherinsightsCreds.username,
        password: context.weatherinsightsCreds.password
    },
    headers: {
        Accept: 'application/json'
    },
    timeout: 10000
})
    .then((value) => {
        //console.log(value.data);
        value.data.forecasts.forEach((item) => {
            console.log(item.fcst_valid_local);
        });
    })
    .catch((error) => {
        console.log('error', error);
    });