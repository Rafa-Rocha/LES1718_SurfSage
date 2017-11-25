import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Places } from '../../models/places.model';
import { WUndergroundService } from '../../services/wUnderground.service';
import { StorageService } from '../../services/storageService.service';
import { WeatherPreview } from '../../models/weatherPreview.model';

@IonicPage()
@Component({
  selector: 'page-location-statistics',
  templateUrl: 'location-statistics.html',
  providers: [WUndergroundService]
})
export class LocationStatisticsPage {
  public location: Places;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private wUndergroundService: WUndergroundService) {
    
    this.location = this.navParams.get('location');    
    this.getWeatherForecast(this.location);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LocationStatisticsPage');
  }

  private getWeatherForecast(location: Places) {
    this.wUndergroundService.getWeatherForecast(this.location.lat, this.location.lng).subscribe(
      (response: any) => {
        let detailedForecast = response.forecast.simpleforecast.forecastday;
        
        let currentDayForecast = detailedForecast["0"];

        this.location.weather.humidity = currentDayForecast.avehumidity;
        this.location.weather.wind = currentDayForecast.avewind;
        this.location.weather.weatherCondition = currentDayForecast.conditions;
        this.location.weather.weekday = currentDayForecast.date.weekday;
        this.location.weather.temperatureHigh_celsius = currentDayForecast.high.celsius;
        this.location.weather.temperatureHigh_fahrenheit = currentDayForecast.high.fahrenheit;
        this.location.weather.temperatureLow_celsius = currentDayForecast.low.celsius;
        this.location.weather.temperatureLow_fahrenheit = currentDayForecast.low.fahrenheit;

        let weatherPreview1 = new WeatherPreview(detailedForecast["1"].date.weekday,
                                                 detailedForecast["1"].icon_url,
                                                 detailedForecast["1"].high.celsius,
                                                 detailedForecast["1"].high.fahrenheit,
                                                 detailedForecast["1"].low.celsius,
                                                 detailedForecast["1"].low.fahrenheit);
        let weatherPreview2 = new WeatherPreview(detailedForecast["2"].date.weekday,
                                                 detailedForecast["2"].icon_url,
                                                 detailedForecast["2"].high.celsius,
                                                 detailedForecast["2"].high.fahrenheit,
                                                 detailedForecast["2"].low.celsius,
                                                 detailedForecast["2"].low.fahrenheit);
        let weatherPreview3 = new WeatherPreview(detailedForecast["3"].date.weekday,
                                                 detailedForecast["3"].icon_url,
                                                 detailedForecast["3"].high.celsius,
                                                 detailedForecast["3"].high.fahrenheit,
                                                 detailedForecast["3"].low.celsius,
                                                 detailedForecast["3"].low.fahrenheit);
        let weatherPreviews = [];
        weatherPreviews.push(weatherPreview1);
        weatherPreviews.push(weatherPreview2);
        weatherPreviews.push(weatherPreview3);

        this.location.weather.weatherPreviews = weatherPreviews;
        
        let forecastSummary = response.forecast.txt_forecast.forecastday;
        this.location.weather.forecastSummary_today = forecastSummary["0"];
        this.location.weather.forecastSummary_tonight = forecastSummary["1"];
        this.location.weather.forecastSummary_tomorrow = forecastSummary["2"];
        
        console.log(this.location);
      }
    );
  }

}
