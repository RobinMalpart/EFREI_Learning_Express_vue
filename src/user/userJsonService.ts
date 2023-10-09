import { User } from "./user";
import { UserService } from "./userService";
import *  as fs from 'fs';
export class UserJsonService implements UserService {

    private readonly jsonPath = './src/user/users.json'
    
    constructor(
    ){
        this.setupJsonFile();
    }

    public add(userName:string):User{
        //check if user already exists
        const usersList = JSON.parse(fs.readFileSync(this.jsonPath, 'utf-8'));

        //if not, create new user 
        let newUser = new User(userName);

        //add new user to extracted list
        usersList.push(newUser);

        //replace new list by the extracted one
        fs.writeFileSync(this.jsonPath, JSON.stringify(usersList));

        //return added user
        return newUser;   
    }

    show(){
        console.log(fs.readFileSync(this.jsonPath, 'utf-8'))
    }

    private setupJsonFile(){
        if(!fs.existsSync(this.jsonPath))
        fs.writeFileSync(this.jsonPath,JSON.stringify([]));
        else {
            //si le fichier existe déja, on extrait le dernier user du tableau pour en 
            //récupérer l'id. Cet id sera utilisé pour définir la valeur
            //de totalUser
            let rowText = fs.readFileSync(this.jsonPath);
            let data = JSON.parse(rowText.toString());
            
            if (Array.isArray(data)) {
                let users = data.map((obj: any) => this.createUserFromObject(obj)).filter((user: User | null) => user !== null);
            
                // si tableau non vide
                if (users.length > 0) {
                    let user = users[users.length - 1]; // Accéder au dernier élément sans le retirer
                    if (user !== null && user !== undefined) {
                        User.setTotalUser(user.getUserId() + 1);
                    } else {
                        console.log("L'utilisateur est nul.");
                    }

                } else {
                    console.log("Le tableau d'utilisateurs est vide.");
                }
            }
        }
    }

    getById(id:number):User | null{
        console.log("service value id = " + id + " type :" + typeof (id));
        let rowText = fs.readFileSync(this.jsonPath);
        let users = JSON.parse(rowText.toString()) as User[];
        const user = users.find((u: any) => u.userId === id) as User;
        if (!user) {
          return null; // L'utilisateur n'a pas été trouvé
        }
        return user;
    }

    private createUserFromObject(obj: any): User | null {
        if (obj && obj.userId && obj.userName) {
            return new User(obj.userName);
        }
        return null;
    }
}