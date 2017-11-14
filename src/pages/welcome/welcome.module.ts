import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomePage } from './welcome.component';

@NgModule({
  declarations: [
    WelcomePage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomePage),
  ],
})
export class WelcomePageModule {}
