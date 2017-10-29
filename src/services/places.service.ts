import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Places } from "../models/places.model";

@Injectable()
export class PlacesService {

  constructor(private storage: Storage) { }

  private getPlaces() {
  }
  
  private addPlace(data: Places) {
  }

  private deletePlace(index: number) {
  }

  private removeFile(place: Places) {
  }
}
