import { User } from "./user";

export interface UserService{

    add(userName:string):User;
    //getById(id:number):User | null;
    show():void;
}