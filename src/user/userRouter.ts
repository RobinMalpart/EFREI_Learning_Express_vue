import { UserController } from "./userController";
import express from 'express';

export class UserRouter{

    router = express();

    constructor(private userController: UserController){

    }

}