import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SearchPage } from '../search/search.component';
import { Places } from '../../models/places.model';
import { StorageService } from '../../services/storageService.service';
import { WUndergroundService } from '../../services/wUnderground.service';
import { WorldTidesService } from '../../services/worldTides.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [WUndergroundService, WorldTidesService]
})
export class HomePage {
  public locations: Places[] = [];

  constructor(public navCtrl: NavController,
    private storageService: StorageService,
    public modalCtrl: ModalController,
    private wUndergroundService: WUndergroundService,
    private worldTidesService: WorldTidesService) {

    this.storageService.getLocations().then((data) => {
      if (data) {
        this.locations = JSON.parse(data);
        this.locations.forEach(element => {
          this.addingWeatherData(element);
          this.addingTidalData(element);
          //console.log(element);
        });
      }
    });


    //this.storageService.getPlaces(this.locations);
  }

  ionViewWillEnter() {
  }

  openSearchPage() {

    let addModal = this.modalCtrl.create(SearchPage);

    addModal.onDidDismiss((location) => {
      if (location) {
        this.saveItem(location);
        this.locations.forEach(element => {
          this.addingWeatherData(element);
          this.addingTidalData(element);
         console.log(element);
        });
      }
    });

    addModal.present();
    //this.navCtrl.push(SearchPage);
  }

  public saveItem(locationToSave) {
    // check if location already exists in the list
    let index = this.deepIndexOf(this.locations, locationToSave);

    // if it doesn't exist, then save the location
    if (index === -1) {
      this.locations.push(locationToSave);
      this.storageService.saveLocations(this.locations);
    }
  }

  public deleteItem(locationToDelete) {
    let index = this.deepIndexOf(this.locations, locationToDelete);

    if (index > -1) {
      this.locations.splice(index, 1);
    }

    this.storageService.saveLocations(this.locations);
  }

  private deepIndexOf(arr, obj) {
    return arr.findIndex(function (cur) {
      return Object.keys(obj).every(function (key) {
        return obj[key] === cur[key];
      });
    });
  }

  private addingWeatherData(location: Places) {
    this.wUndergroundService.getWeatherStatus(location.lat, location.lng).subscribe(
      (response: any) => {
        console.log(response);
        location.weather.temperature = response.current_observation.temp_c;
        location.weather.weatherIconURL = response.current_observation.icon_url;
        /*console.log(this.locations[0]);
        console.log(this.locations[0].weather);*/
      }
    );
  }

  private addingTidalData(location: Places) {
    this.worldTidesService.getTidalStatus(location.lat, location.lng).subscribe(
      (response: any) => {
        //console.log(response);
        location.weather.tidalHeights = response.heights;
        console.log(location.weather.tidalHeights);
        
        this.setCurrentTidalHeight(location);
        //location.weather.weatherIconURL = response.current_observation.icon_url;
        /*console.log(this.locations[0]);
        console.log(this.locations[0].weather);*/
      }
    );
  }

  private setCurrentTidalHeight(location: Places) {
    var currentTime = Math.floor((new Date).getTime()/1000);
    for (let tidalHeight in location.weather.tidalHeights) {
      let tideTime = location.weather.tidalHeights[tidalHeight].dt;
      if (currentTime < tideTime) {
        location.weather.currentTidalHeight = location.weather.tidalHeights[tidalHeight].height;
        break;
      }
    }
  }
}
