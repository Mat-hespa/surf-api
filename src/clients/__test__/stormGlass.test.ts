import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stormGlassWeatherMock from '@test/fixtures/stormglass_weather_mock.json';
import stormGlassWeatherMockfixed from '@test/fixtures/stormglass_weather_fixed.json';

jest.mock('axios');

describe('StormGlass client', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  it('should return the normalized forecast from the StormGlass service', async () => {
    const lat = 58.7984;
    const lng = 17.8081;

    mockedAxios.get = jest
      .fn()
      .mockResolvedValue({ data: stormGlassWeatherMock });

    const stormGlass = new StormGlass(mockedAxios);
    const response = await stormGlass.fetchPoints(lat, lng);

    expect(response).toEqual(stormGlassWeatherMockfixed);
  });
});
