import { SearchPage } from '../pages/search/search.component';
import { GoogleMapsService } from "../services/googleMaps.service";
import { Storage } from "@ionic/storage";
import { Http } from '@angular/http';
import { ViewController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { StorageService } from '../services/storageService.service';
import { weatherService } from '../services/weatherService.service';
import { WUndergroundService } from '../services/wUnderground.service';
import { WorldTidesService } from '../services/worldTides.service';

import { DataService } from "../core/services/data.service";

describe('World Tides Service', () => {
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
  let worldTidesService: WorldTidesService;

  beforeEach(() => {
    dataService = new DataService(http);
    worldTidesService = new WorldTidesService(storage, dataService);
  });

  afterEach(() => {
    worldTidesService = null;
    component = null;
  });

  it('Should have buildUrl', () => {
    const city = "São Paulo";
    const lat = "-23,551";
    const long = "-46,633"
    expect(worldTidesService.buildUrl(lat, long)).toBeTruthy();
  });

  it('Should return buildUrl', () => {
    const city = "São Paulo";
    const lat = "-23,551";
    const long = "-46,633"
    const result = 'https://www.worldtides.info/api?heights&datum=LAT&lat=-23,551&lon=-46,633&key=ce3a700d-80e0-4ffa-979f-c5d36f014bec'
    expect(worldTidesService.buildUrl(lat, long)).toBe(result);
  });
});