import { Places } from "./places.model";
import { WeatherPreview } from "./weatherPreview.model";

export class Weather {
    
    public id: number;
    public location?: string
    public temperature?: string;
    public weatherIconURL?: string;
    // Tidal Heights
    public tidalHeights?: any[];
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
    public wind?: any;
    // Weather condition (text description)
    public weatherCondition?: string;
    // Humidity (%)
    public humidity?: string;
    // Weather preview for the next three days
    public weatherPreviews?: WeatherPreview[];

    // Small forecast summary
    public forecastSummary_today?: any;
    public forecastSummary_tonight?: any;
    public forecastSummary_tomorrow?: any;

    constructor(id?: number, temperature?: string, weatherIconURL?: string,
                tidalHeights?: any[]) {
        
        this.id = id;
        this.temperature = temperature;
        this.weatherIconURL = weatherIconURL;
        this.tidalHeights = tidalHeights;
    }
}