const Weather = require('./weather');
const jestFetchMock = require('jest-fetch-mock');

describe('Weather', () => {

    it('creates an instance of Weather that contains WeatherClient', () => {
        const mockClient = {
            stored: true
        }
        const weather = new Weather(mockClient);
        expect(weather.client.stored).toBe(true);
    });

    describe('load', () => {

        it('fetches the weather data for Bristol and stores it', async () => {
            const mockClient = {
                stored: true,
                fetchWeatherData: jest.fn(() => {
                    return {name: 'Bristol'}
                })
            }
            const weather = new Weather(mockClient);
            await weather.load('Bristol');
            expect(weather.data.name).toBe('Bristol');
        });
    });

    describe('getWeatherData', () => {

        it('returns the currently stored data as an object', async () => {
            const mockClient = {
                stored: true,
                fetchWeatherData: jest.fn(() => {
                    return {name: 'Bristol'}
                })
            }
            const weather = new Weather(mockClient);
            await weather.load('Bristol');
            expect(weather.getWeatherData()).toEqual({name: "Bristol"});
        });
    });
});
