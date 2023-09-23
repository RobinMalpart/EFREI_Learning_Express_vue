
import { UserJsonService } from '../user/userJsonService'
import { ExpressRouter } from './express-router';
import { ExpressServer } from './express-server';
import * as dotenv from 'dotenv';

export class ExpressApplication{

    private expressRouter!:ExpressRouter;
    private port!: string;
    private userService!: UserJsonService;
    private expressServer!: ExpressServer;

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
        this.setupRouter(this.userService);
        this.setupServer(this.expressRouter, this.port);
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
    }

    private setupRouter(userService: UserJsonService){
        this.expressRouter = new ExpressRouter(userService);
    }

    private setupServer(expressRouter: ExpressRouter,port:string ){
        this.expressServer = new ExpressServer(expressRouter, port);
    }

    private getPort(): string {
        const port = process.env.PORT;
        if (!port) {
            throw new Error('No port was found in env file.');
        }

        return port;
    }
}