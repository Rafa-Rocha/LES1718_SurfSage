import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SearchPage } from '../pages/search/search.component';
import { Places } from '../models/places.model';
import { Weather } from '../models/weather.model';
import { StorageService, getLocations } from '../services/storageService.service';
import { WUndergroundService } from '../services/wUnderground.service';
import { WorldTidesService } from '../services/worldTides.service';
import { Storage } from "@ionic/storage";

describe('StorageService' , ()=> {
    it('Save Location into Storage', () => {
    
        //saveLocations
        var location = new Places('Country','Country', 'Latitude', 'Longitude');
    
        //call method saveLocations...
 
        
    
    })


    
    })
