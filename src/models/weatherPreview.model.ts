export class WeatherPreview {
    
    public weatherIconURL?: string;
    // Week day
    public weekday?: string;
    // Temperature (High and Low)
    public temperatureHigh_celsius?: string;
    public temperatureHigh_fahrenheit?: string;
    public temperatureLow_celsius?: string;
    public temperatureLow_fahrenheit?: string;

    constructor(weekday?: string,
                weatherIconURL?: string,
                temperatureHigh_celsius?: string,
                temperatureHigh_fahrenheit?: string,
                temperatureLow_celsius?: string,
                temperatureLow_fahrenheit?: string) {

        this.weekday = weekday;
        this.weatherIconURL = weatherIconURL;
        this.temperatureHigh_celsius = temperatureHigh_celsius;
        this.temperatureHigh_fahrenheit = temperatureHigh_fahrenheit;
        this.temperatureLow_celsius = temperatureLow_celsius;
        this.temperatureLow_fahrenheit = temperatureLow_fahrenheit;
    }
}