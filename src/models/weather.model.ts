import { Places } from "./places.model";

export class Weather {
    public id: number;
    public location?: string
    public temperature?: string;
    public weatherIconURL?: string;
    public tidalHeights?: any[];
    public currentTidalHeight?: any;

    constructor(id?: number, location?: string, temperature?: string, weatherIconURL?: string,
                tidalHeights?: any[]) {
        
        this.id = id;
        this.location = location;
        this.temperature = temperature;
        this.weatherIconURL = weatherIconURL;
        this.tidalHeights = tidalHeights;
    }
}