export class Places {
    public id: number;
    public city: string;
    public country: string;
    public lng: number;
    public lat: number;

    constructor(city: string, country: string, lat: number, lng: number) {
        this.city = city;
        this.country = country;
        this.lat = lat;
        this.lng = lng;
    }
}