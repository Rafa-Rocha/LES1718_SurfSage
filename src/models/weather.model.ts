import { Places } from "./places.model";

export class Weather {
    public id: number;
    public location: Places
    public temperature: number;
    public tidesHeight: number;
}