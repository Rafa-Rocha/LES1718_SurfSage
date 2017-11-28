import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SearchPage } from '../pages/search/search.component';
import { Places } from '../models/places.model';
import { Weather } from '../models/weather.model';
import { StorageService, getLocations } from '../services/storageService.service';
import { WUndergroundService } from '../services/wUnderground.service';
import { WorldTidesService } from '../services/worldTides.service';
import { Storage } from "@ionic/storage";

describe('Models' , ()=> {
    it('Create Place', () => {
    
      
        var location = new Places('Country','Country', 'Latitude', 'Longitude');
    
        
       expect(location.city).toEqual('Country');
       expect(location.country).toEqual('Country');
       expect(location.lat).toEqual('Latitude');
       expect(location.lng).toEqual('Longitude');
 
        
    
    })

    it('Create Weather', () => {
        
      
            var weatherArray = new Weather(1,'100ºC', 'icon.png');
        
        
           expect(weatherArray.id).toEqual(1);
           expect(weatherArray.temperature).toEqual('100ºC');
           expect(weatherArray.weatherIconURL).toEqual('icon.png');
      
     
            
        
        })
    
    
    })
