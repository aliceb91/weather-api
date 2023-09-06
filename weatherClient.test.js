const WeatherClient = require('./weatherClient');
const jestFetchMock = require("jest-fetch-mock");
jestFetchMock.enableMocks();

describe('WeatherClient', () => {
    
    describe('fetchWeatherData', () => {

        beforeEach(() => {
            fetch.resetMocks();
        });

        it('fetches the weather data for London when called', async () => {
            fetch.mockResponseOnce(JSON.stringify({name: "London"}))
            const client = new WeatherClient();
            const data = await client.fetchWeatherData('London');
            expect(data.name).toBe('London');
        });
    });
})