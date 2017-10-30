import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
import {Component, ViewChild} from '@angular/core';
import {ViewController} from 'ionic-angular';
import {Keyboard} from '@ionic-native/keyboard';
import { Places } from '../../models/places.model';
import { PlacesService } from '../../services/places';
=======

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { PlacesService } from '../../services/places.service';

>>>>>>> 992210192d4be2ebe9a66782b43e000e0a94b92a
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export class SearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}


<<<<<<< HEAD

=======
import {Component, ViewChild} from '@angular/core';
import {ViewController} from 'ionic-angular';
import {Keyboard} from '@ionic-native/keyboard';
import { Places } from '../../models/places.model';
>>>>>>> 992210192d4be2ebe9a66782b43e000e0a94b92a

declare var google: any;


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class AutocompleteModalPage {

  // for Google Geocoding API
  apiKey = 'AIzaSyBTX1dRXW-aZt_Iw77ft8I7EfQdc-h3Sog';
  baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?';
  url;

  @ViewChild('searchbar') searchBar;

  private place: Places[] = [];
  
  constructor(public viewCtrl: ViewController,
              private keyboard: Keyboard,
              public http: Http,
              private placesService: PlacesService) {
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

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.searchBar.setFocus();
      this.keyboard.show();
    }, 600);
  }

  buildUrl(city: string, country: string) {
    // replace space characters with plus symbol
    let cityUrl = city.replace(/ /g, '+');
    let countryUrl = country.replace(/ /g, '+');

    // build URL
    this.url = this.baseUrl + "address=" + cityUrl + ",+" + countryUrl + "&key=" + this.apiKey;
    return this.url;
  }

  getLocationCoordinates(city: string, country: string) {
    this.url = this.buildUrl(city, country);
    return this.http.get(this.url).map(res => res.json());
  }

  chooseItem(item: any) {
    let city = item.structured_formatting.main_text;
    let country = item.structured_formatting.secondary_text;
    
    // Get chosen location's coordinates and store it.
    this.getLocationCoordinates(city, country).subscribe(coordinates => {
      console.log(coordinates);
      
      let result = coordinates.results[0].geometry.location;
      
      let latitude = result.lat;
      let longitude = result.lng;

      console.log("City: " + city + "\nCountry: " + country +
                  "\nLatitude: " + latitude + "\nLongitude: " + longitude);
      
      let place = new Places(city, country, latitude, longitude);
      this.placesService.addPlace(place);
    });
    
    this.viewCtrl.dismiss(item);
    //console.log(item);
  }

  updateSearch() {
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
