import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationStatisticsPage } from './location-statistics';

@NgModule({
  declarations: [
    LocationStatisticsPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationStatisticsPage),
  ],
})
export class LocationStatisticsPageModule {}
