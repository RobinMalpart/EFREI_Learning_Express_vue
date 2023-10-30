
import { UserJsonService } from '../user/userJsonService'
import { ExpressRouter } from './express-router';
import { ExpressServer } from './express-server';
import { FruitJsonService } from '../fruit/fruitJsonService';

import * as dotenv from 'dotenv';

export class ExpressApplication{

    private expressRouter!:ExpressRouter;
    private port!: string;
    private expressServer!: ExpressServer;
    private userService!: UserJsonService;
    private fruitService!: FruitJsonService;

    constructor(){
        this.setupApplication();
    }

    bootstrap(): void {
        this.expressServer.bootstrap();
    }
    private setupApplication(){
        this.setupEnv();
        this.setupPort();
        this.setupServices();
        this.setupRouter();
        this.setupServer();
    }

    private setupEnv(): void{
        dotenv.config({
            path: '.env',
        })
    }

    private setupPort(){
        this.port = this.getPort();
    }

    private setupServices(){
        this.userService = new UserJsonService(); 
        this.fruitService = new FruitJsonService();
    }

    private setupRouter(){
        this.expressRouter = new ExpressRouter(this.userService, this.fruitService);
    }

    private setupServer(){
        this.expressServer = new ExpressServer(this.expressRouter, this.port);
    }

    private getPort(): string {
        const port = process.env.PORT;
        if (!port) {
            throw new Error('No port was found in env file.');
        }

        return port;
    }
}