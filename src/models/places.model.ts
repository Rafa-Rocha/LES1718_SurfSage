export class Places {
    public id: string;
    public city: string;
    public country: string;
    public lng: string;
    public lat: string;

    constructor(city: string, country: string, lat: string, lng: string) {
        this.city = city;
        this.country = country;
        this.lat = lat;
        this.lng = lng;
    }

    public getLat() {
        
        return this.lat;
      }
    
      public getLng() {
        return this.lng;
      }

}