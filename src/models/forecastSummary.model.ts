export class ForecastSummary {
    
    public title?: string;
    public forecastText_metric?: string;
    public forecastText_imperial?: string;
    public weatherIconURL?: string;

    constructor(title?: string,
                weatherIconURL?: string,
                forecastText_metric?: string,
                forecastText_imperial?: string) {

        this.title = title;
        this.weatherIconURL = weatherIconURL;
        this.forecastText_metric = forecastText_metric;
        this.forecastText_imperial = forecastText_imperial;
    }
}