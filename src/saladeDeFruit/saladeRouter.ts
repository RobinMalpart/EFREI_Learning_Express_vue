import { SaladeController } from "./saladeController";
import express from 'express';

export class SaladeRouter{
    router = express();

    constructor (private saladeController:SaladeController){
        this.setupRoutes();
    }

    private setupRoutes(){
        // this.setupGetByIdRoute();
        this.setupGetSaladesFromJson();
    }

    private setupGetSaladesFromJson(){
        this.router.get('/tous',(req,res) => {
            res.json(this.saladeController.getSaladesFromJson())
        })
    }

    private setupGetSaladeById(id:number){
        this.router.get('/:id', (req, res) => {
            res.json(this.saladeController.getSaladeById(parseInt(req.params.id)));
        })
    }

}