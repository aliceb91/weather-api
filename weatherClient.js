class WeatherClient {
    constructor() {}

    fetchWeatherData(city) {
        return fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${process.env.WEATHER_API_KEY}`)
            .then((weatherData) => weatherData.json());
    }
}

module.exports = WeatherClient;