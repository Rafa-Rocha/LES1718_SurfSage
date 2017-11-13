import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { Places } from '../../models/places.model';
import { StorageService } from '../../services/storageService.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  locations: Array<any>;

  constructor(public navCtrl: NavController,
              private storageService: StorageService) {
    this.locations = [];
    
  }

  ionViewWillEnter() {
    this.storageService.getPlaces(this.locations);
    console.log(this.locations);
  }

  OpenSearchPage(){
    this.navCtrl.push(SearchPage);
  }
  private deleteItem(item) {
    console.log(item);
    alert('Sou eu!');
  }

}
