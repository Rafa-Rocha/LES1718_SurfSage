import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { StorageService } from '../../services/storageService.service';
import { GoogleMapsService } from '../../services/googleMaps.service';

import {Component, ViewChild} from '@angular/core';
import {ViewController} from 'ionic-angular';
import {Keyboard} from '@ionic-native/keyboard';
import { Places } from '../../models/places.model';
import { weatherService } from '../../services/weatherService.service';

declare var google: any;


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  @ViewChild('searchbar') searchBar;

  private place: Places[] = [];
  
  constructor(public viewCtrl: ViewController,
              private keyboard: Keyboard,
              public http: Http,
              private storageService: StorageService,
              private googleMapsService : GoogleMapsService,
              private weatherService: weatherService) {
  }

  autocompleteItems: any;
  autocomplete: any;
  acService: any;

  ngOnInit() {
    this.acService = new google.maps.places.AutocompleteService();
    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.searchBar.setFocus();
      this.keyboard.show();
    }, 600);
  }

  private chooseItem(item: any) {
    let city = item.structured_formatting.main_text;
    let country = item.structured_formatting.secondary_text;
    
    // Get chosen location's coordinates and store it.
    this.googleMapsService.getLocationCoordinates(city, country).subscribe(coordinates => {
      console.log(coordinates);
      
      let result = coordinates.results[0].geometry.location;
      
      let latitude = result.lat;
      let longitude = result.lng;

      console.log("City: " + city + "\nCountry: " + country +
                  "\nLatitude: " + latitude + "\nLongitude: " + longitude);
      
      let place = new Places(city, country, latitude, longitude);
      console.log(this.weatherService.get());
      this.viewCtrl.dismiss(place);
    });
  }

  private updateSearch() {
    if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
    }
    let self = this;
    let config = {
      types: ['geocode'], // other types available in the API: 'address', 'establishment', 'regions', and 'cities'
      input: this.autocomplete.query
    };
    this.acService.getPlacePredictions(config, function (predictions, status) {
      self.autocompleteItems = [];
      if (predictions) {
        predictions.forEach(function (prediction) {
          self.autocompleteItems.push(prediction);
        });
      }
      else {
        console.log('no predictions');
      }
    });
  }
}
