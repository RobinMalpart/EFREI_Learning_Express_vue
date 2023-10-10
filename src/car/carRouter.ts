import express from "express";
import { CarController } from "./carController";

export class CarRouter{

    router = express();

    constructor(private userController: CarController){
        this.setupRoutes();
    }
    
    setupRoutes() {
        throw new Error("Method not implemented.");
    }
}