import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StorageService } from '../../services/storageService.service';
import { weatherService } from '../../services/weatherService.service';
import { GoogleMapsService } from '../../services/googleMaps.service';
import { WUndergroundService } from '../../services/wUnderground.service';
import { HomePage } from './home.component';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  providers: [
    StorageService,
    GoogleMapsService,
    weatherService,
    WUndergroundService
  ]
})
export class HomePageModule {}
