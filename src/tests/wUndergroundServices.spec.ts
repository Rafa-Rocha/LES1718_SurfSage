import { Storage } from "@ionic/storage";
import { Http } from '@angular/http';
import { WUndergroundService } from '../services/wUnderground.service';
import { DataService } from "../core/services/data.service";

describe('Weather Underground Service', () => {
  let storage: Storage;
  let dataService: DataService;
  let http: Http;
  let wUndergroundService: WUndergroundService;
  const city = "São Paulo";
  const lat = "-23,551";
  const long = "-46,633"

  beforeEach(() => {
    dataService = new DataService(http);
    wUndergroundService = new WUndergroundService(storage, dataService);
  });

  afterEach(() => {
    wUndergroundService = null;
  });

  it('Should have buildUrlForCurrentWeather', () => {
    expect(wUndergroundService.buildUrlForCurrentWeather(lat, long)).toBeTruthy();
  });

  it('Should return buildUrlForCurrentWeather', () => {
    const result = 'http://api.wunderground.com/api/e01eb6c0c23f1ac5/conditions/q/-23,551,-46,633.json'
    expect(wUndergroundService.buildUrlForCurrentWeather(lat, long)).toBe(result);
  });

  it('Should have buildUrlForWeatherForecast', () => {
    expect(wUndergroundService.buildUrlForWeatherForecast(lat, long)).toBeTruthy();
  });

  it('Should return buildUrlForCurrentWeather', () => {
    const result = 'http://api.wunderground.com/api/e01eb6c0c23f1ac5/forecast/q/-23,551,-46,633.json'
    expect(wUndergroundService.buildUrlForWeatherForecast(lat, long)).toBe(result);
  });
});