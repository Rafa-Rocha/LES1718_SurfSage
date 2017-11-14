import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Places } from "../models/places.model";
import { Observable } from "rxjs/Observable";

import { Http } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WeatherProvider {
  apiKey = 'e01eb6c0c23f1ac5';
  url;

  constructor(public http: Http) {
    //console.log('oiii');

    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  }
   
  //Following function takes city and state as an input
 
  getWeather(Long,Lat) {

  
     
    return this.http.get(this.url+'/'+Long+','+Lat+'.json')
           .map(result => { return result.json() });
  
  }
}
