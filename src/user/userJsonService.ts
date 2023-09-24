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
    }

}