import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SearchPage } from '../pages/search/search.component';
import { Places } from '../models/places.model';
import { Weather } from '../models/weather.model';
import { StorageService, getLocations } from '../services/storageService.service';
import { WUndergroundService } from '../services/wUnderground.service';
import { WorldTidesService } from '../services/worldTides.service';
import { Storage } from "@ionic/storage";

describe('Models', () => {
    it('Create Place', () => {
        var location = new Places('Amsterdã', 'Países Baixos', '52.3702157', '4.895167900000001');

        expect(location.city).toEqual('Amsterdã');
        expect(location.country).toEqual('Países Baixos');
        expect(location.lat).toEqual('52.3702157');
        expect(location.lng).toEqual('4.895167900000001');
    });

    it('Create Weather', () => {
        var weatherArray = new Weather(1, '10', '../../assets/imgs/io.png');

        expect(weatherArray.id).toEqual(1);
        expect(weatherArray.selectedCurrentTemperature).toEqual('10');
        expect(weatherArray.weatherIconURL).toEqual('../../assets/imgs/io.png');
    });


})
