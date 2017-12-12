
import {GoogleMapsService} from "../services/googleMaps.service";
import { Storage } from "@ionic/storage";
import { Http } from '@angular/http';
import { ViewController } from 'ionic-angular';
import {Keyboard} from '@ionic-native/keyboard';
import { StorageService } from '../services/storageService.service';
import { weatherService } from '../services/weatherService.service';

describe('Google Maps Service', () => {
  let storage: Storage;
  let http: Http;
  let googleMapsService: GoogleMapsService;
  const city = "São Paulo";
  const country = "Brasil";

  beforeEach(() => { 
    googleMapsService = new GoogleMapsService(storage, http);
  });

  afterEach(() => { 
    googleMapsService = null;
  });

  it('Should Exist', () => {
    expect(googleMapsService).toBeTruthy();
  });

  it('Should BuildURL exist', () => {
    expect(googleMapsService.buildUrl(city, country)).toBeTruthy();
  });

  it('Should return buildURL', () => {
    const result = 'https://maps.googleapis.com/maps/api/geocode/json?address=São+Paulo,+Brasil&key=AIzaSyBTX1dRXW-aZt_Iw77ft8I7EfQdc-h3Sog';
    expect(googleMapsService.buildUrl(city, country)).toBe(result);
  });
});