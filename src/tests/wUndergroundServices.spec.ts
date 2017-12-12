import { SearchPage } from '../pages/search/search.component';
import { GoogleMapsService } from "../services/googleMaps.service";
import { Storage } from "@ionic/storage";
import { Http } from '@angular/http';
import { ViewController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { StorageService } from '../services/storageService.service';
import { weatherService } from '../services/weatherService.service';
import { WUndergroundService } from '../services/wUnderground.service';
import { DataService } from "../core/services/data.service";

describe('Weather Underground Service', () => {
  let storage: Storage;
  let dataService: DataService;
  let http: Http;
  let component: SearchPage;
  let googleMapsService: GoogleMapsService;
  let viewCtrl: ViewController;
  let keyboard: Keyboard;
  let storageService: StorageService;
  let weatherService: weatherService;
  let wUndergroundService: WUndergroundService;
  beforeEach(() => {
    dataService = new DataService(http);
    wUndergroundService = new WUndergroundService(storage, dataService);
  });

  afterEach(() => {
    wUndergroundService = null;
    component = null;
  });

  it('Should have buildUrlForCurrentWeather', () => {
    const city = "São Paulo";
    const lat = "-23,551";
    const long = "-46,633"
   
    expect(wUndergroundService.buildUrlForCurrentWeather(lat, long)).toBeTruthy();
  });

  it('Should return buildUrlForCurrentWeather', () => {
    const city = "São Paulo";
    const lat = "-23,551";
    const long = "-46,633"
    const result = 'http://api.wunderground.com/api/e01eb6c0c23f1ac5/conditions/q/-23,551,-46,633.json'
    expect(wUndergroundService.buildUrlForCurrentWeather(lat, long)).toBe(result);
  });

  it('Should have buildUrlForWeatherForecast', () => {
    const city = "São Paulo";
    const lat = "-23,551";
    const long = "-46,633"
    expect(wUndergroundService.buildUrlForWeatherForecast(lat, long)).toBeTruthy();
  });

  it('Should return buildUrlForCurrentWeather', () => {
    const city = "São Paulo";
    const lat = "-23,551";
    const long = "-46,633"
    const result = 'http://api.wunderground.com/api/e01eb6c0c23f1ac5/forecast/q/-23,551,-46,633.json'
    expect(wUndergroundService.buildUrlForWeatherForecast(lat, long)).toBe(result);
  });
});