import { SearchPage } from '../pages/search/search.component';
import { GoogleMapsService } from "../services/googleMaps.service";
import { Storage } from "@ionic/storage";
import { Http } from '@angular/http';
import { ViewController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { StorageService } from '../services/storageService.service';
import { weatherService } from '../services/weatherService.service';

describe('Google Maps Service', () => {
    let storage: Storage;
    let http: Http;
    let googleMapsService: GoogleMapsService;
    let viewCtrl: ViewController;
    let keyboard: Keyboard;
    let storageService: StorageService;
    let weatherService: weatherService;

    beforeEach(() => {
        storageService = new StorageService(storage);
    });

    afterEach(() => {
        // localStorage.removeItem('token');
        storageService = null;
    });

    it('Should exist ', () => {
        expect(storageService).toBeTruthy();
    });

    // it('Should exist getLocations', () => {
    //     console.log(JSON.stringify(storageService.getLocations()));
    //     expect(true).toBeTruthy();
    // });

    // it('Should exist getLocations', () => {
    //     storageService
    //     const result = storageService.getLocations()
    //     expect(1).toBeTruthy();
    // });


    //   it('canLogin returns false when the user is not authenticated', () => {
    //     const data = "";
    //     // expect(component.chooseItem(data)).toBeTruthy();
    //   });

    //   it('canLogin returns false when the user is not authenticated', () => {
    //     // localStorage.setItem('token', '12345'); 
    //     // expect(component.needsLogin()).toBeFalsy();
    //   });
});