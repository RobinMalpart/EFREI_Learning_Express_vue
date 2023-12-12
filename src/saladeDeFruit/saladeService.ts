import { SaladeDeFruit } from "./saladeDeFruit";

export interface SaladeService{

    getSaladesFromJson():SaladeDeFruit[];
    // private createSaladeFromObject(obj:any): SaladeDeFruit | null;
    getSaladeById(id:number):SaladeDeFruit | null
}