import { Fruit } from "../fruit/fruit";

export class SaladeDeFruit {
  private static totalSalade:number = 1;
  private idSalade: number;
  private nomSalade:string;
  private fruitsMap: Map<number, number>; // Map de (idFruit, Quantité)

  constructor(nomSalade:string) {
    this.nomSalade = nomSalade;
    this.idSalade = SaladeDeFruit.totalSalade;
    this.fruitsMap = new Map<number, number>();
    SaladeDeFruit.increamentTotalSalade();
  }

  private static increamentTotalSalade():void{
    this.totalSalade++;
  }

  public static getTotalSalade():number{
    return SaladeDeFruit.totalSalade;
  }

  public static setTotalSalade(total:number):void{
    SaladeDeFruit.totalSalade = total;
  }

  public getIdSalade():number{
    return this.idSalade;
  }

  public ajouterFruit(fruit: Fruit, quantite: number): void {
    if (quantite <= 0) {
      throw new Error('La quantité doit être supérieure à zéro.');
    }

    this.fruitsMap.set(fruit.getFruitId(), quantite);
  }


  public retirerFruit(fruit: Fruit): void {
    this.fruitsMap.delete(fruit.getFruitId());
  }
}