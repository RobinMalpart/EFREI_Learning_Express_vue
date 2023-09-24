import { stringify } from "querystring";
import { UserController } from "./userController";
import express from 'express';

export class UserRouter{

    router = express();

    constructor(private userController: UserController){
        this.setupRoutes();
    }

    private setupRoutes(){
        this.setupAddRoute();
        this.setupShowUsersRoute();
    }

    private setupAddRoute(){
        this.router.post('/add', (req, res) => {
            console.log(req.body); // Affiche les données du corps de la requête dans la console
            if (!req.body || Object.keys(req.body).length === 0) {
              res.status(400).json({ error: 'Données JSON invalides ou manquantes dans le corps de la requête' });
            }

            this.userController.add(req.body);
        })
    }

    private setupShowUsersRoute(){
        this.router.get('/show', (req, res, next) =>{
            res.send(this.userController.show());
            next();
        })
    }
}