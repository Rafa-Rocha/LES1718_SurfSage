import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SearchPage } from '../search/search.component';
import { Places } from '../../models/places.model';
import { StorageService } from '../../services/storageService.service';
import { WUndergroundService } from '../../services/wUnderground.service';
import { WorldTidesService } from '../../services/worldTides.service';
import { GlobalProvider } from '../../providers/global/global.provider';
import { RulerUnit } from '../../models/rulerUnit.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [WUndergroundService, WorldTidesService]
})

export class HomePage {
 
  public locations: Places[] = [];
  public selectedRulerUnit: RulerUnit;
  public metricUnit: RulerUnit;
  public imperialUnit: RulerUnit;

  constructor(public navCtrl: NavController,
    private storageService: StorageService,
    public modalCtrl: ModalController,
    private wUndergroundService: WUndergroundService,
    private worldTidesService: WorldTidesService,
    private globalProvider: GlobalProvider) {

    this.metricUnit = RulerUnit.METRIC;
    this.imperialUnit = RulerUnit.IMPERIAL;
    this.selectedRulerUnit = this.globalProvider.selectedRulerUnit;    

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

  switchRulerUnit() {
    if (this.globalProvider.selectedRulerUnit === RulerUnit.METRIC) {
      this.globalProvider.setRulerUnit(RulerUnit.IMPERIAL);
      this.selectedRulerUnit = RulerUnit.IMPERIAL;
    } else {
      this.globalProvider.setRulerUnit(RulerUnit.METRIC);
      this.selectedRulerUnit = RulerUnit.METRIC;
    }
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
        
        location.weather.currentTemperature_celsius = response.current_observation.temp_c;
        location.weather.currentTemperature_fahrenheit = response.current_observation.temp_f;
        location.weather.weatherIconURL = response.current_observation.icon_url;
        location.weather.uvIndex = response.current_observation.UV;
        location.weather.visibility_km = response.current_observation.visibility_km;
        location.weather.visibility_mile = response.current_observation.visibility_mi;
        location.weather.dewpoint_celsius = response.current_observation.dewpoint_c;
        location.weather.dewpoint_fahrenheit = response.current_observation.dewpoint_f;
        location.weather.feelsLike_celsius = response.current_observation.feelslike_c;
        location.weather.feelsLike_fahrenheit = response.current_observation.feelslike_f;

        /*
        (this.globalProvider.selectedRulerUnit === RulerUnit.METRIC) ? 
          location.weather.selectedCurrentTemperature = location.weather.currentTemperature_celsius :
          location.weather.selectedCurrentTemperature = location.weather.currentTemperature_fahrenheit;
        */
      }
    );
  }

  private addingTidalData(location: Places) {
    this.worldTidesService.getTidalStatus(location.lat, location.lng).subscribe(
      (response: any) => {
        
        let tidalHeights = response.heights;
        console.log(tidalHeights);
        
        var currentTime = Math.floor((new Date).getTime()/1000);

        location.weather.tidalHeightsDates.length = 0;
        location.weather.tidalHeightsValues.length = 0;

        for (let tidalHeight in tidalHeights) {
          let tideTime = tidalHeights[tidalHeight].dt;
          
          if (currentTime < tideTime) {
            
            var date = new Date(tideTime * 1000);
            var iso = date.toISOString().match(/(\d{4}\-\d{2}\-\d{2})T(\d{2}:\d{2}:\d{2})/)
            
            location.weather.tidalHeightsDates.push(iso[2]);
            location.weather.tidalHeightsValues.push(tidalHeights[tidalHeight].height);
          }
        }

        location.weather.currentTidalHeight = 
          Math.round(location.weather.tidalHeightsValues[0] * 10) / 10;
      }
    );
  }

  /*
  private setCurrentTidalHeight(location: Places) {
    var currentTime = Math.floor((new Date).getTime()/1000);
    
    for (let tidalHeight in location.weather.tidalHeights) {
      let tideTime = location.weather.tidalHeights[tidalHeight].dt;
      if (currentTime < tideTime) {
        location.weather.currentTidalHeight = 
          Math.round(location.weather.tidalHeights[tidalHeight].height * 10) / 10;
        break;
      }
    }
  }*/

  private itemSelected(location) {
    this.navCtrl.push('LocationStatisticsPage', {location: location});
  }
}
