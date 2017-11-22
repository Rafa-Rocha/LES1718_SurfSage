import { Weather } from "./weather.model";

export class Places {
    public id: string;
    public city: string;
    public country: string;
    public lng: string;
    public lat: string;
    public weather: Weather;

    constructor(city: string, country: string, lat: string, lng: string, weather?: Weather) {
        this.city = city;
        this.country = country;
        this.lat = lat;
        this.lng = lng;
        this.weather = new Weather();
    }
}