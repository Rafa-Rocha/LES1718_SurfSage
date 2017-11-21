import { Places } from "./places.model";

export class Weather {
    public id: number;
    public location?: string
    public temperature?: string;
    public weatherIconURL?: string;
    public tidesHeight?: string;

    constructor(id?: number, location?: string, temperature?: string, weatherIconURL?: string,
                 tidesHeight?: string) {
        
        this.id = id;
        this.location = location;
        this.temperature = temperature;
        this.weatherIconURL = weatherIconURL;
        this.tidesHeight = tidesHeight;
    }
}