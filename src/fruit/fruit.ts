export class Fruit {

    private static totalFruit:number = 1; //Pas 0 car je ne souhaite pas avoir d'id 0 pour un élement
    private idFruit:number;
    private nomFruit:string;

    constructor(nomFruit : string){
        this.idFruit = Fruit.totalFruit;
        this.nomFruit = nomFruit;
        Fruit.incrementTotalFruit();
    }

    public static incrementTotalFruit():void{
        this.totalFruit++;
    }

    public static getTotalFruit():number{

        return Fruit.totalFruit;
    }

    public getFruitId():number{
        return this.idFruit;
    }

    public static setTotalFruit(nbFruit:number):void{
        Fruit.totalFruit = nbFruit;
    }
}