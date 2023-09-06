require('dotenv').config()

const WeatherClient = require('./weatherClient');
const Weather = require('./weather');

const client = new WeatherClient();
const weather = new Weather(client);

weather.load('Bristol')
    .then(() => console.log(weather.getWeatherData()));
