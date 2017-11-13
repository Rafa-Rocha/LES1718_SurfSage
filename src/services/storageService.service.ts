import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Places } from "../models/places.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class StorageService {

  constructor(private storage: Storage) { }

  public getPlaces(locations: Array<any>) {
    this.storage.get('locations').then((data) => {
      if (data) {
        locations = data;
        //console.log(data);
        /*for (let locationJson of data) {
          let location = JSON.parse(locationJson);
          locations.push(location);
        }*/
      }
    });
  }

  public addPlace(place) {
    //let place = new Places(city, country, latitude, longitude);

    this.storage.get('locations').then((data) => {
      data = (data) ? data : data = [];
      data.push(JSON.stringify(place));
      this.storage.set('locations', data);
    });
  }

  public deletePlace(locationToDelete) {
    let locationsArray = [];
    this.getPlaces(locationsArray);

    let index = this.deepIndexOf(locationsArray, locationToDelete);
    
    if(index > -1){
        locationsArray.splice(index, 1);
    }

    let locationsJson = [];
    for ( let location in locationsArray) {
        locationsJson.push(JSON.stringify(location));
    }

    this.storage.set('locations', locationsJson);
  }

  private deepIndexOf(arr, obj) {
    return arr.findIndex(function (cur) {
      return Object.keys(obj).every(function (key) {
        return obj[key] === cur[key];
      });
    });
  }

  public saveLocations(data) {
    this.storage.set('locations', JSON.stringify(data));
  }

  public getLocations() {
    return this.storage.get('locations');
  }
}
