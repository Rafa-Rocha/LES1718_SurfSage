export class Wind {
    
    public degrees?: any;
    public dir?: any;
    public kph?: any;
    public mph?: any;
    
    constructor(degrees?: any,
                dir?: any,
                kph?: any,
                mph?: any) {

        this.degrees = degrees;
        this.dir = dir;
        this.kph = kph;
        this.mph = mph;
    }
}