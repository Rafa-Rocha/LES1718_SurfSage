import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home.component';
import { WelcomePage } from '../pages/welcome/welcome.component';

import { Storage } from "@ionic/storage";

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  rootPage;

  constructor(private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private storage: Storage) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.setRootPage();
    });

  }

  // private seeStatus() {

  //   this.placesService.hasPlaces().subscribe(response => {
  //     if (response) {
  //       this.rootPage = HomePage;
  //     } else {
  //       this.rootPage = WelcomePage;
  //     }
  //   });
  // }

  private setRootPage() {
    console.log('setting root page...');
    this.storage.get('locations').then(item => {
      if (item) {
        this.rootPage = HomePage
      } else {
        this.rootPage = WelcomePage;
      }
    });

  }
}

