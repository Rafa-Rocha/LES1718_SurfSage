import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Places } from "../models/places.model";

@Injectable()
export class PlacesService {

  constructor(private storage: Storage) { }

  public getPlaces(locations: Array<Places>) {
    let that = this;
    this.storage.get('locations').then((data) => {
        if(data !== null){
          console.log(data);
          let locationList = JSON.parse(data);
          locations.push(locationList);
        }
    });
  }
  
  public addPlace(place: Places) {
    this.storage.get('locations').then((data) => {
      if(data == null) {
       data = [];
       data.push(JSON.stringify(place));
       this.storage.set('locations',data);
       return false;
      
      } else {
        data.push(JSON.stringify(place));
        this.storage.set('locations',data);
        return true;
      }
    });

    //this.storage.set(place.city + "," + place.country, JSON.stringify(place));
  }

  public hasPlaces() {
    this.storage.get('locations').then((data) => {
      if(data == null) {
       data = [];
       this.storage.set('locations', data);
       return false;

      } else {
        console.log(data);
        return true;
      }
    });
  }

  private deletePlace(index: number) {
  }

  private removeFile(place: Places) {
  }
}
