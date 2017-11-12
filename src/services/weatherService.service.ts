import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Places } from "../models/places.model";
import { Observable } from "rxjs/Observable";
import { Weather } from "../models/weather.model";

@Injectable()
export class weatherService {

  constructor(private storage: Storage) { }

  public get(): Weather[] {
      let response: Weather[] = [];
    this.storage.get('weather').then((data) => {
        console.log(data);
        response = (data) ? data : [];
    });
    return response;
  }

  public add(weather: Weather) {
    this.storage.get('weather').then((data) => {
        data = (data) ? data : data = [];
        data.push(JSON.stringify(weather));
        this.storage.set('weather', data);
      });
  }


  private delete(location: string) {
    this.storage.get('weather').then((data) => {
    });
  }

}
