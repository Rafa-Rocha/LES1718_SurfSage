import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { Places } from '../../models/places.model';
import { StorageService } from '../../services/storageService.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public locations = [];

  constructor(public navCtrl: NavController,
    private storageService: StorageService,
    public modalCtrl: ModalController) {

    this.storageService.getLocations().then((data) => {
      if (data) {
        this.locations = JSON.parse(data);
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

}
