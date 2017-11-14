import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home.component';
import { WelcomePage } from '../pages/welcome/welcome.component';

import { PlacesService } from '../services/places.service';

@Component({
  templateUrl: 'app.html',
  providers: [PlacesService]
})
export class MyApp {
  rootPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private placesService: PlacesService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    if (this.placesService.hasPlaces) {
      this.rootPage = HomePage;
    } else {
      this.rootPage = WelcomePage;
    }
  }
}

