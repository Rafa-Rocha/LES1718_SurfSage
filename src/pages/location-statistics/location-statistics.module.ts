import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { LocationStatisticsPage } from './location-statistics';
import { WUndergroundService } from '../../services/wUnderground.service';
import { StorageService } from '../../services/storageService.service';

@NgModule({
  declarations: [
    LocationStatisticsPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationStatisticsPage),
  ],
})
export class LocationStatisticsPageModule {}
