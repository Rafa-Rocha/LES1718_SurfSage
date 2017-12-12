import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Places } from "../models/places.model";
import { Observable } from "rxjs/Observable";
import { Http } from '@angular/http';
import { DataService } from "../core/services/data.service";

@Injectable()
export class WUndergroundService {

  // for WeatherUnderground API
  private baseUrl = 'http://api.wunderground.com/api/';
  private apiKey = 'e01eb6c0c23f1ac5';
  private backupApiKey = '63f21773ef8cd16c';

  constructor(private storage: Storage, private dataService: DataService) { }

  public buildUrlForCurrentWeather(lat: string, lng: string,) {
    let url = this.baseUrl + this.apiKey + '/conditions/q/' + lat + ',' + lng + '.json';
    return url;
  }

  public buildUrlForWeatherForecast(lat: string, lng: string,) {
    let url = this.baseUrl + this.apiKey + '/forecast/q/' + lat + ',' + lng + '.json';
    return url;
  }

  public getWeatherStatus(lat: string, lng: string) {
    let url = this.buildUrlForCurrentWeather(lat, lng);
    return this.dataService.get(url);
  }

  public getWeatherForecast(lat: string, lng: string) {
    let url = this.buildUrlForWeatherForecast(lat, lng);
    return this.dataService.get(url);
  }

}
