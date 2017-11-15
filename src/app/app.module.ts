import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home.component';
import { WelcomePage } from '../pages/welcome/welcome.component';
import { SearchPage } from '../pages/search/search.component';
import {Keyboard} from '@ionic-native/keyboard';
import {PrettyJsonModule} from 'angular2-prettyjson';
import {AgmCoreModule} from '@agm/core';

import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { StorageService } from '../services/storageService.service';
import { GoogleMapsService } from '../services/googleMaps.service';
import { weatherService } from '../services/weatherService.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey   : 'AIzaSyBTX1dRXW-aZt_Iw77ft8I7EfQdc-h3Sog',
      libraries: ['places']
    }),
    PrettyJsonModule,
    HttpModule,
    IonicStorageModule.forRoot({
      name: 'surf_sage_db',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageService,
    GoogleMapsService,
    weatherService
  ]
})
export class AppModule {}
