import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stormGlassWeatherMock from '@test/fixtures/stormglass_weather_mock.json';
import stormGlassWeatherMockfixed from '@test/fixtures/stormglass_weather_fixed.json';

jest.mock('axios');

describe('StormGlass client', () => {
  it('should return the normalized forecast from the StormGlass service', async () => {
    const lat = -33.86785;
    const lng = 151.20732;

    axios.get = jest.fn().mockResolvedValue(stormGlassWeatherMock);

    const stormGlass = new StormGlass(axios);
    const response = await stormGlass.fetchPoints(lat, lng);

    console.log(response);
    console.log(stormGlassWeatherMock);
    expect(response).toEqual(stormGlassWeatherMockfixed);
  });
});
