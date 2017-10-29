
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Component, ViewChild} from '@angular/core';
import {ViewController} from 'ionic-angular';
import {Keyboard} from '@ionic-native/keyboard';
import { Places } from '../../models/places.model';
import { PlacesService } from '../../services/places';
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




declare var google: any;


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class AutocompleteModalPage {

  @ViewChild('searchbar') searchBar;

  private place: Places[] = [];
  
  constructor(public viewCtrl: ViewController,
              private keyboard: Keyboard,
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

  chooseItem(item: any) {
    this.viewCtrl.dismiss(item);
    const newPlace: Places = {id: item.id, name: item.description}
    console.log(item);
    console.log(newPlace);
    this.placesService.getPlaces(newPlace);
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
