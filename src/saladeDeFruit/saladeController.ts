import { SaladeDeFruit } from "./saladeDeFruit";
import { SaladeService } from "./saladeService";

export class SaladeController{
    constructor(private saladeService:SaladeService){

    }

    public getSaladesFromJson():SaladeDeFruit[]{
        return this.saladeService.getSaladesFromJson();
    }

    public getSaladeById(id:number):SaladeDeFruit | null{
        return this.saladeService.getSaladeById(id);
    }