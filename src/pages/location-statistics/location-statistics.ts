import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Places } from '../../models/places.model';

/**
 * Generated class for the LocationStatisticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location-statistics',
  templateUrl: 'location-statistics.html',
})
export class LocationStatisticsPage {
  public location: Places;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.location = this.navParams.get('location');
    console.log(this.location);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationStatisticsPage');
  }

}
