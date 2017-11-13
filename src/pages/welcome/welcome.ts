import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';
import { StorageService } from '../../services/storageService.service';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  
  locations: Array<any>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storageService: StorageService,
              public modalCtrl: ModalController) {
                
    this.locations = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  openSearchPage() {
    let addModal = this.modalCtrl.create(SearchPage);
    
    addModal.onDidDismiss((location) => {
      if (location) {
        this.saveItem(location);
        this.navCtrl.push(HomePage);
      }
    });

    addModal.present();
  }

  private saveItem(location) {
    this.locations.push(location);
    this.storageService.saveLocations(this.locations);
  }

}
