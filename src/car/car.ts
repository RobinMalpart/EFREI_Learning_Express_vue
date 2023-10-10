export class Car implements CarService {

    private id:number;
    private model:string;

    constructor(id : number, model : string){
        this.id = id;
        this.model = model;
    }
}