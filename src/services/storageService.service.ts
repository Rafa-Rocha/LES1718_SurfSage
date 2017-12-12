import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Places } from "../models/places.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class StorageService {

  constructor(private storage: Storage) { }
  private deepIndexOf(arr, obj) {
    return arr.findIndex(function (cur) {
      return Object.keys(obj).every(function (key) {
        return obj[key] === cur[key];
      });
    });
  }

  public saveLocations(data) {
    console.log('Aqui');
    console.log(data);
    this.storage.set('locations', JSON.stringify(data));
  }

  public getLocations() {
    return this.storage.get('locations');
  }

}

export function getLocations() {
  return this.storage.get('locations');
}