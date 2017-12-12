import { Storage } from "@ionic/storage";
import { Http } from '@angular/http';
import { WorldTidesService } from '../services/worldTides.service';

import { DataService } from "../core/services/data.service";

describe('World Tides Service', () => {
  let storage: Storage;
  let dataService: DataService;
  let http: Http;
  let worldTidesService: WorldTidesService;
  const city = "São Paulo";
  const lat = "-23,551";
  const long = "-46,633"

  beforeEach(() => {
    dataService = new DataService(http);
    worldTidesService = new WorldTidesService(storage, dataService);
  });

  afterEach(() => {
    worldTidesService = null;
  });

  it('Should have buildUrl', () => {

    expect(worldTidesService.buildUrl(lat, long)).toBeTruthy();
  });

  it('Should return buildUrl', () => {
    const result = 'https://www.worldtides.info/api?heights&datum=LAT&lat=-23,551&lon=-46,633&key=ce3a700d-80e0-4ffa-979f-c5d36f014bec'
    expect(worldTidesService.buildUrl(lat, long)).toBe(result);
  });
});