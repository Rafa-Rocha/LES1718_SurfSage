import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPage } from './search.component';
import { PlacesService } from '../../services/places';

@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPage),
  ],
  providers: [
    PlacesService
  ]
})
export class SearchPageModule {}
