class Weather {
    constructor(client) {
        this.client = client;
        this.data = null

    }

    async load(city) {
        const cityData = await this.client.fetchWeatherData(city)
        this.data = cityData;
        return;
    }

    getWeatherData() {
        return this.data;
    }
}

module.exports = Weather;