import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AutocompleteModalPage } from '../search/search';
import { Places } from '../../models/places.model';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  locations: Array<any>;

  constructor(public navCtrl: NavController,
              private placesService: PlacesService) {
    this.locations = [];
    this.placesService.getPlaces(this.locations);
  }

  ionViewWillEnter() {
    console.log(this.locations);
  }

  OpenSearchPage(){
    this.navCtrl.push(AutocompleteModalPage);
  }

}
