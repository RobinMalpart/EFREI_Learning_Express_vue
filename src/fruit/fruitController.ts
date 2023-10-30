import { FruitService } from "./fruitService";

export class FruitController{
    constructor(private fruitService:FruitService){

    }

    getById(id:number){

        if (typeof id !== 'number' || id <= 1) {
            throw new Error('L\'ID doit être un nombre entier positif.');
        }
        console.log("controller value id = " + id +typeof (id));
        return this.fruitService.getById(id);
    }
}