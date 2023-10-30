import { Fruit } from "./fruit";
import { FruitService } from "./fruitService";
import *  as fs from 'fs';

export class FruitJsonService implements FruitService {

    private readonly jsonPath = './src/fruit/fruits.json';

    constructor(){
        this.setupJsonFile();
    }

    getById(id:number):Fruit | null{
        console.log("service value id = " + id + "  type : " + typeof (id));
        let rowText = fs.readFileSync(this.jsonPath);
        let fruits = JSON.parse(rowText.toString()) as Fruit[];
        const fruit = fruits.find((f: any) => f.idFruit === id) as Fruit;
        if (!fruit) {
        return null; // Le fruit n'a pas été trouvé
        }
        return fruit;
    }

    private createFruitFromObject(obj: any): Fruit | null {
        if (obj && obj.idFruit && obj.nomFruit) {
            return new Fruit(obj.nomFruit);
        }
        return null;
    }

    private setupJsonFile(){
        if(!fs.existsSync(this.jsonPath))
        fs.writeFileSync(this.jsonPath,JSON.stringify([]));
        else {
            //si le fichier existe déja, on extrait le dernier fruit du tableau pour en 
            //récupérer l'id. Cet id sera utilisé pour définir la valeur
            //de totalFruit
            let rowText = fs.readFileSync(this.jsonPath);
            let data = JSON.parse(rowText.toString());
            console.log(data);
            
            if (Array.isArray(data)) {
                let fruits = data.map((obj: any) => this.createFruitFromObject(obj)).filter((fruit: Fruit | null) => fruit !== null);
            
                // si tableau non vide
                if (fruits.length > 0) {
                    let fruit = fruits[fruits.length - 1]; // Accéder au dernier élément sans le retirer
                    if (fruit !== null && fruit !== undefined) {
                        Fruit.setTotalFruit(fruit.getFruitId() + 1);
                        console.log("Le nombre total de fruit est de "+ (Fruit.getTotalFruit() - 1));
                    } else {
                        console.log("Le fruit est nul.");
                    }

                } else {
                    console.log("Le tableau de fruit est vide.");
                }
            }
        }
    }
}