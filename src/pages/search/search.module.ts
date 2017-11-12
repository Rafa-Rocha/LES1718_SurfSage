import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPage } from './search';
import { PlacesService } from '../../services/places.service';
import { weatherService } from '../../services/weatherService.service';

@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPage),
  ],
  providers: [
    PlacesService,
    weatherService
  ]
})
export class SearchPageModule {}
