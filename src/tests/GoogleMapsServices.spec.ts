import {SearchPage} from '../pages/search/search.component';
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
  let component: SearchPage;
  let googleMapsService: GoogleMapsService;
  let viewCtrl: ViewController;
  let keyboard: Keyboard;
  let storageService: StorageService;
  let weatherService: weatherService;

  beforeEach(() => { 
    googleMapsService = new GoogleMapsService(storage, http);
    component = new SearchPage(viewCtrl, keyboard, http, storageService, googleMapsService,  weatherService);
  });

  afterEach(() => { 
    // localStorage.removeItem('token');
    googleMapsService = null;
    component = null;
  });

  it('Check if BuildURL exist', () => {
    const city = "São Paulo";
    const country = "Brasil";
    const result = "'https://maps.googleapis.com/maps/api/geocode/json?address=São+Paulo,+Brasil&key=AIzaSyBTX1dRXW-aZt_Iw77ft8I7EfQdc-h3Sog'"
    expect(googleMapsService.buildUrl(city, country)).toBeTruthy();
  });

  it('Should return buildURL', () => {
    const city = "São Paulo";
    const country = "Brasil";    2
    const result = 'https://maps.googleapis.com/maps/api/geocode/json?address=São+Paulo,+Brasil&key=AIzaSyBTX1dRXW-aZt_Iw77ft8I7EfQdc-h3Sog';
    expect(googleMapsService.buildUrl(city, country)).toBe(result);
  });

//   it('canLogin returns false when the user is not authenticated', () => {
//     const data = "";
//     // expect(component.chooseItem(data)).toBeTruthy();
//   });

//   it('canLogin returns false when the user is not authenticated', () => {
//     // localStorage.setItem('token', '12345'); 
//     // expect(component.needsLogin()).toBeFalsy();
//   });
});