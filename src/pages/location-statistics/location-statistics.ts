import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Places } from '../../models/places.model';
import { WUndergroundService } from '../../services/wUnderground.service';
import { StorageService } from '../../services/storageService.service';
import { WeatherPreview } from '../../models/weatherPreview.model';
import { ForecastSummary } from '../../models/forecastSummary.model';
import { Wind } from '../../models/wind.model';

import { Chart } from 'chart.js';
import { GlobalProvider } from '../../providers/global/global.provider';
import { RulerUnit } from '../../models/rulerUnit.model';

@IonicPage()
@Component({
  selector: 'page-location-statistics',
  templateUrl: 'location-statistics.html',
  providers: [WUndergroundService]
})
export class LocationStatisticsPage {
  public location: Places;
  public selectedRulerUnit: RulerUnit;
  public metricUnit: RulerUnit;
  public imperialUnit: RulerUnit;

  /* Chart Setup */
  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;
  /* Chart Setup */


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private wUndergroundService: WUndergroundService,
              private globalProvider: GlobalProvider) {
    
    this.metricUnit = RulerUnit.METRIC;
    this.imperialUnit = RulerUnit.IMPERIAL;

    this.location = this.navParams.get('location');
    this.selectedRulerUnit = this.globalProvider.selectedRulerUnit;    
    this.getWeatherForecast(this.location);
  }

  ionViewDidLoad() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.location.weather.tidalHeightsDates,
        options: {
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              display: false
            }],
          }
        },
        datasets: [
          {
            label: "Height in meters",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.location.weather.tidalHeightsValues,
            spanGaps: false,
          }
        ]
      }
    });
  }

  private getWeatherForecast(location: Places) {
    this.wUndergroundService.getWeatherForecast(this.location.lat, this.location.lng).subscribe(
      (response: any) => {
        let detailedForecast = response.forecast.simpleforecast.forecastday;
        
        let currentDayForecast = detailedForecast["0"];

        this.location.weather.humidity = currentDayForecast.avehumidity;
        
        let wind = currentDayForecast.avewind;
        this.location.weather.wind.degrees = wind.degrees;
        this.location.weather.wind.dir = wind.dir;
        this.location.weather.wind.kph = wind.kph;
        this.location.weather.wind.mph = wind.mph;
        
        this.location.weather.weatherCondition = currentDayForecast.conditions;
        this.location.weather.weekday = currentDayForecast.date.weekday;
        this.location.weather.temperatureHigh_celsius = currentDayForecast.high.celsius;
        this.location.weather.temperatureHigh_fahrenheit = currentDayForecast.high.fahrenheit;
        this.location.weather.temperatureLow_celsius = currentDayForecast.low.celsius;
        this.location.weather.temperatureLow_fahrenheit = currentDayForecast.low.fahrenheit;

        this.location.weather.weatherPreviews[0].weekday = detailedForecast["1"].date.weekday;
        this.location.weather.weatherPreviews[0].weatherIconURL = detailedForecast["1"].icon_url;
        
        this.location.weather.weatherPreviews[0].weatherIconURL = this.location.weather.weatherPreviews[0].weatherIconURL.replace("http://icons.wxug.com/i/c/k/", "../assets/imgs/");
        this.location.weather.weatherPreviews[0].weatherIconURL = this.location.weather.weatherPreviews[0].weatherIconURL.replace(".gif", ".png"); 
        
        this.location.weather.weatherPreviews[0].temperatureHigh_celsius = detailedForecast["1"].high.celsius;
        this.location.weather.weatherPreviews[0].temperatureHigh_fahrenheit = detailedForecast["1"].high.fahrenheit;
        this.location.weather.weatherPreviews[0].temperatureLow_celsius = detailedForecast["1"].low.celsius;
        this.location.weather.weatherPreviews[0].temperatureLow_fahrenheit = detailedForecast["1"].low.fahrenheit;
        
        this.location.weather.weatherPreviews[1].weekday = detailedForecast["2"].date.weekday;
        this.location.weather.weatherPreviews[1].weatherIconURL = detailedForecast["2"].icon_url;
        this.location.weather.weatherPreviews[1].temperatureHigh_celsius = detailedForecast["2"].high.celsius;
        this.location.weather.weatherPreviews[1].temperatureHigh_fahrenheit = detailedForecast["2"].high.fahrenheit;
        this.location.weather.weatherPreviews[1].temperatureLow_celsius = detailedForecast["2"].low.celsius;
        this.location.weather.weatherPreviews[1].temperatureLow_fahrenheit = detailedForecast["2"].low.fahrenheit;
        
        this.location.weather.weatherPreviews[1].weatherIconURL = this.location.weather.weatherPreviews[1].weatherIconURL.replace("http://icons.wxug.com/i/c/k/", "../assets/imgs/");
        this.location.weather.weatherPreviews[1].weatherIconURL = this.location.weather.weatherPreviews[1].weatherIconURL.replace(".gif", ".png"); 
   

        
        this.location.weather.weatherPreviews[2].weekday = detailedForecast["3"].date.weekday;
        this.location.weather.weatherPreviews[2].weatherIconURL = detailedForecast["3"].icon_url;
        this.location.weather.weatherPreviews[2].temperatureHigh_celsius = detailedForecast["3"].high.celsius;
        this.location.weather.weatherPreviews[2].temperatureHigh_fahrenheit = detailedForecast["3"].high.fahrenheit;
        this.location.weather.weatherPreviews[2].temperatureLow_celsius = detailedForecast["3"].low.celsius;
        this.location.weather.weatherPreviews[2].temperatureLow_fahrenheit = detailedForecast["3"].low.fahrenheit;

        this.location.weather.weatherPreviews[2].weatherIconURL = this.location.weather.weatherPreviews[2].weatherIconURL.replace("http://icons.wxug.com/i/c/k/", "../assets/imgs/");
        this.location.weather.weatherPreviews[2].weatherIconURL = this.location.weather.weatherPreviews[2].weatherIconURL.replace(".gif", ".png"); 
   

        let forecastSummary = response.forecast.txt_forecast.forecastday;
        
        this.location.weather.forecastSummary_today.title = forecastSummary["0"].title;
        this.location.weather.forecastSummary_today.weatherIconURL = forecastSummary["0"].icon_url;
        this.location.weather.forecastSummary_today.forecastText_metric = forecastSummary["0"].fcttext_metric;
        this.location.weather.forecastSummary_today.forecastText_imperial = forecastSummary["0"].fcttext;
        
        this.location.weather.forecastSummary_tonight.title = forecastSummary["1"].title;
        this.location.weather.forecastSummary_tonight.weatherIconURL = forecastSummary["1"].icon_url;
        this.location.weather.forecastSummary_tonight.forecastText_metric = forecastSummary["1"].fcttext_metric;
        this.location.weather.forecastSummary_tonight.forecastText_imperial = forecastSummary["1"].fcttext;

        this.location.weather.forecastSummary_tomorrow.title = forecastSummary["2"].title;
        this.location.weather.forecastSummary_tomorrow.weatherIconURL = forecastSummary["2"].icon_url;
        this.location.weather.forecastSummary_tomorrow.forecastText_metric = forecastSummary["2"].fcttext_metric;
        this.location.weather.forecastSummary_tomorrow.forecastText_imperial = forecastSummary["2"].fcttext;
        
        //console.log(this.location);
      }
    );
  }

  public closePage() {
    this.navCtrl.pop();
  }

}
