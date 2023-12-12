import {SaladeDeFruit} from './saladeDeFruit';
import {SaladeService } from './saladeService';
import *  as fs from 'fs';

export class SaladeJsonService implements SaladeService {

    private readonly jsonPath = './src/saladeDeFruit/salade.json';

    constructor(){
        this.setupJsonFile();
    }

    private createSaladeFromObject(obj: any): SaladeDeFruit | null {
        if (obj && obj.idSalade && obj.nomSalade) {
            return new SaladeDeFruit(obj.nomFruit);
        }
        return null;
    }

    private setupJsonFile(){
        if(!fs.existsSync(this.jsonPath))
        fs.writeFileSync(this.jsonPath,JSON.stringify([]));
        else {
            //si le fichier existe déja, on extrait le dernier salade du tableau pour en 
            //récupérer l'id. Cet id sera utilisé pour définir la valeur
            //de totalFruit
            let rowText = fs.readFileSync(this.jsonPath);
            let data = JSON.parse(rowText.toString());
            console.log(data);
            
            if (Array.isArray(data)) {
                let salades = data.map((obj: any) => this.createSaladeFromObject(obj)).filter((salade: SaladeDeFruit | null) => salade !== null);
            
                // si tableau non vide
                if (salades.length > 0) {
                    let salade = salades[salades.length - 1]; // Accéder au dernier élément sans le retirer
                    if (salade !== null && salade !== undefined) {
                        SaladeDeFruit.setTotalSalade(salade.getIdSalade() + 1);
                        console.log("Le nombre total de salade est de "+ (SaladeDeFruit.getTotalSalade() - 1));
                    } else {
                        console.log("La salade est nul.");
                    }

                } else {
                    console.log("Le tableau de salade est vide.");
                }
            }
        }
    }

    public getSaladesFromJson(): SaladeDeFruit[] {
        let salades: SaladeDeFruit[] = [];
    
        if (fs.existsSync(this.jsonPath)) {
          const rowText = fs.readFileSync(this.jsonPath);
          const data = JSON.parse(rowText.toString());
    
          if (Array.isArray(data)) {
            salades = data
              .map((obj: any) => this.createSaladeFromObject(obj))
              .filter((salade: SaladeDeFruit | null) => salade !== null) as SaladeDeFruit[];
            }
        }
        return salades;
      }

      public getSaladeById(id:number):SaladeDeFruit | null{

        if (fs.existsSync(this.jsonPath)){
            const rowText = fs.readFileSync(this.jsonPath);
            const data = JSON.parse(rowText.toString());

            return data.filter((obj: any) => obj.idSalade == id) as SaladeDeFruit;
        }
        return null;
      }
}