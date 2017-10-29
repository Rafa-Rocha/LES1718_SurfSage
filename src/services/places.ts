import { Injectable } from "@angular/core";
// import { Storage } from "@ionic/storage";
import { Places } from "../models/places.model";

@Injectable()
export class PlacesService {

  private places: Places[] = [];

  constructor() { }

  public getTest() {
    console.log('Services working!');
  }
  public getPlaces(place: Places) {
    this.places.push(place);
    console.log(this.places);
  }

  public addPlace(data: Places) {
  }

  public deletePlace(index: number) {
  }

  public removeFile(place: Places) {
  }
}
