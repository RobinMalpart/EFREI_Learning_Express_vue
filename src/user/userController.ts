import { UserService } from "./userService";

export class UserController{

    constructor(private userService: UserService){
        
    }

    show(){
        this.userService.show();
    }
    add(userName:string){
        this.userService.add(userName);
    }
}