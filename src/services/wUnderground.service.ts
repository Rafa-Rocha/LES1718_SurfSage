import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Places } from "../models/places.model";
import { Observable } from "rxjs/Observable";
import { Http } from '@angular/http';
import { DataService } from "../core/services/data.service";

@Injectable()
export class WUndergroundService {

  // for WeatherUnderground API
  private apiKey = 'e01eb6c0c23f1ac5';
  private backupApiKey = '63f21773ef8cd16c';
  // private baseUrl = 'http://api.wunderground.com/api/{app}/tide/geolookup/q/';
  private url;

  constructor(private storage: Storage, private dataService: DataService) { }

  private buildUrl(lat: string, lng: string,) {

    this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q/' + lat + ',' + lng + '.json';
    return this.url;
  }

  public getWeatherStatus(lat: string, lng: string) {
    this.url = this.buildUrl(lat, lng);
    return this.dataService.get(this.url);
  }

}
