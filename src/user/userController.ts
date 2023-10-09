import { UserService } from "./userService";

export class UserController{

    constructor(private userService: UserService){
        
    }

    show(){
        this.userService.show();
    }

    add(userName:string){

        if (!userName || userName.trim() === '') {
            throw new Error('Le nom d\'utilisateur ne peut pas être vide ou nul.');
        }

        if (userName.length > 20) {
            throw new Error('Le nom d\'utilisateur ne peut pas avoir plus de 20 caractères.');
        }

        this.userService.add(userName);
    }

    getById(id:number){

        if (typeof id !== 'number' || id <= 1) {
            throw new Error('L\'ID doit être un nombre entier positif.');
        }
        console.log("controller value id = " + id +typeof (id));
        return this.userService.getById(id);
    }
}