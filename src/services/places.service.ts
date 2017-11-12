import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Places } from "../models/places.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PlacesService {

  constructor(private storage: Storage) { }

  public getPlaces(locations: Array<any>) {
    this.storage.get('locations').then((data) => {
      if (data) {
        //console.log(data);
        for (let locationJson of data) {
          let location = JSON.parse(locationJson);
          locations.push(location);
        }
      }
    });
  }

  public addPlace(place: Places) {
    this.storage.get('locations').then((data) => {
      data = (data) ? data : data = [];
      data.push(JSON.stringify(place));
      this.storage.set('locations', data);
    });
  }


  private deletePlace(index: number) {
    console.log(' Deleted!')
  }

  private removeFile(place: Places) {
  }
}
