import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPage } from './search';
import { StorageService } from '../../services/storageService.service';
import { weatherService } from '../../services/weatherService.service';
import { GoogleMapsService } from '../../services/googleMaps.service';

@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPage),
  ],
  providers: [
    StorageService,
    GoogleMapsService,
    weatherService
  ]
})
export class SearchPageModule {}
