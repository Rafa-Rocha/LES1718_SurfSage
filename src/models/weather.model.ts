import { Places } from "./places.model";
import { WeatherPreview } from "./weatherPreview.model";
import { ForecastSummary } from "./forecastSummary.model";
import { Wind } from "./wind.model";

export class Weather {
    
    public id: number;
    public location?: string
    public selectedCurrentTemperature?: string;
    public currentTemperature_celsius?: string;
    public currentTemperature_fahrenheit?: string;
    public weatherIconURL?: string;
    // Tidal Heights
    public tidalHeightsDates?: any[];
    public tidalHeightsValues?: any[];
    public currentTidalHeight?: any;
    // Forecasted Date
    public forecast_date?: string;
    // Transaction Date
    public transaction_date?: string;
    // Week day
    public weekday?: string;
    // Temperature (High and Low)
    public temperatureHigh_celsius?: string;
    public temperatureHigh_fahrenheit?: string;
    public temperatureLow_celsius?: string;
    public temperatureLow_fahrenheit?: string;
    // Wind (degrees, dir, kph, mph)
    public wind: Wind;
    // Weather condition (text description)
    public weatherCondition?: string;
    // Humidity (%)
    public humidity?: string;

    public uvIndex?: string;
    public visibility_km?: string;
    public visibility_mile?: string;
    public dewpoint_fahrenheit?: any;
    public dewpoint_celsius?: any;

    public feelsLike_fahrenheit?: any;
    public feelsLike_celsius?: any;

    // Weather preview for the next three days
    public weatherPreviews?: WeatherPreview[];

    // Small forecast summary
    public forecastSummary_today: ForecastSummary;
    public forecastSummary_tonight: ForecastSummary;
    public forecastSummary_tomorrow: ForecastSummary;

    constructor(id?: number, selectedCurrentTemperature?: string, weatherIconURL?: string) {
        
        this.id = id;
        this.selectedCurrentTemperature = selectedCurrentTemperature;
        this.weatherIconURL = weatherIconURL;
        
        this.tidalHeightsDates = [];
        this.tidalHeightsValues = [];

        this.wind = new Wind();
        this.forecastSummary_today = new ForecastSummary();
        this.forecastSummary_tonight = new ForecastSummary();
        this.forecastSummary_tomorrow = new ForecastSummary();
        
        this.weatherPreviews = [];
        this.weatherPreviews[0] = new WeatherPreview();
        this.weatherPreviews[1] = new WeatherPreview();
        this.weatherPreviews[2] = new WeatherPreview();
    }
}