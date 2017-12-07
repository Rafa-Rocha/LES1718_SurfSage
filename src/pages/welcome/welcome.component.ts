import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search.component';
import { HomePage } from '../home/home.component';
import { StorageService } from '../../services/storageService.service';

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
        this.navCtrl.setRoot(HomePage);
        this.navCtrl.popToRoot();
      }
    });

    addModal.present();
  }

  private saveItem(location) {
    this.locations.push(location);
    this.storageService.saveLocations(this.locations);
  }

}
