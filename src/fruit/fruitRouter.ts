import { FruitController } from "./fruitController";
import express from 'express';

export class FruitRouter{

    router = express();

    constructor(private fruitController: FruitController){
        this.setupRoutes();
    }

    private setupRoutes(){
        this.setupGetByIdRoute();
    }

    private setupGetByIdRoute(){
        this.router.get('/:id', (req, res) => {
            res.json(this.fruitController.getById(parseInt(req.params.id)));
        })
    }
}