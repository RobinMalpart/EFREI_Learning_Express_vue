import { Fruit } from "./fruit";

export interface FruitService{

    getById(id:number):Fruit | null;
}