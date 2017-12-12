import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home.component';
import { WelcomePage } from '../pages/welcome/welcome.component';

import { Storage } from "@ionic/storage";
import { GlobalProvider } from '../providers/global/global.provider';
import { RulerUnit } from '../models/rulerUnit.model';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  rootPage;

  constructor(private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private storage: Storage,
    private globalProvider: GlobalProvider) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.globalProvider.setRulerUnit(RulerUnit.METRIC);

      this.setRootPage();
    });

  }

  private setRootPage() {
    this.storage.get('locations').then(item => {
      if (item) {
        this.rootPage = HomePage
      } else {
        this.rootPage = WelcomePage;
      }
    });

  }
}

