import { Weather } from "./weather.model";

export class Places {
    public id: string;
    public city: string;
    public country: string;
    public lng: string;
    public lat: string;
    public weather: Weather;
    public temp: number;

    constructor(city: string, country: string, lat: string, lng: string, temp?: number, weather?: Weather) {
        this.city = city;
        this.country = country;
        this.lat = lat;
        this.lng = lng;
        this.temp = temp;
        this.weather = new Weather();
    }
}