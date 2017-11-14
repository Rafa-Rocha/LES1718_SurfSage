import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

import { Observable } from "rxjs/Observable";
import { Http } from '@angular/http';

@Injectable()
export class GoogleMapsService {

  // for Google Geocoding API
  private apiKey = 'AIzaSyBTX1dRXW-aZt_Iw77ft8I7EfQdc-h3Sog';
  private baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?';
  private url;

  constructor(private storage: Storage, public http: Http,) { }

  private buildUrl(city: string, country: string) {
    // replace space characters with plus symbol
    let cityUrl = city.replace(/ /g, '+');
    let countryUrl = country.replace(/ /g, '+');

    // build URL
    this.url = this.baseUrl + "address=" + cityUrl + ",+" + countryUrl + "&key=" + this.apiKey;
    return this.url;
  }

  public getLocationCoordinates(city: string, country: string) {
    this.url = this.buildUrl(city, country);
    return this.http.get(this.url).map(res => res.json());
  }

}
