import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { AutocompleteModalPage } from '../pages/search/search';
import {Keyboard} from '@ionic-native/keyboard';
import {PrettyJsonModule} from 'angular2-prettyjson';
import {AgmCoreModule} from '@agm/core';

import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { PlacesService } from '../services/places.service';
import { weatherService } from '../services/weatherService.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    AutocompleteModalPage
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
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    AutocompleteModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlacesService,
    weatherService
  ]
})
export class AppModule {}
