import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Places } from "../models/places.model";
import { Observable } from "rxjs/Observable";
import { Http } from '@angular/http';
import { DataService } from "../core/services/data.service";

@Injectable()
export class WorldTidesService {

  // for WorldTides API
  private apiKey = 'c67a8277-8a61-43e5-9a38-db79eca54371';
  private backupApiKey = "ce3a700d-80e0-4ffa-979f-c5d36f014bec";
  private baseUrl = 'https://www.worldtides.info/api?';
  private url;

  constructor(private storage: Storage, private dataService: DataService) { }

  private buildUrl(lat: string, lng: string,) {
    this.url = this.baseUrl + 'heights&datum=LAT&lat='+ lat + '&lon=' + lng + '&key=' + this.backupApiKey;
    return this.url;
  }

  public getTidalStatus(lat: string, lng: string) {
    this.url = this.buildUrl(lat, lng);
    return this.dataService.get(this.url);
  }

}
