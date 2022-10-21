export class Experiencia {
    id? : number;
    nombreExp : string;
    descriptionExp : string;

    constructor(nombreExp: string, descriptionExp: string ){
        this.nombreExp = nombreExp;
        this.descriptionExp = descriptionExp;
    }
}
