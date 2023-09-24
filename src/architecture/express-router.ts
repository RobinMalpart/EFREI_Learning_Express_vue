import { UserController } from "../user/userController";
import { UserRouter } from "../user/userRouter";
import { UserService } from "../user/userService";
import express from 'express';

export class ExpressRouter{

    router = express();

    private userController!: UserController;
    private userRouter!: UserRouter;

    constructor(private userService: UserService){
        this.setupExpressRouter();
    }

    private setupExpressRouter(){
        this.sertupControllers();
        this.setupRouters();
        this.setupRoutes();
    }

    private sertupControllers(){
        this.userController = new UserController(this.userService);
    }

    private setupRouters(){
        this.userRouter = new UserRouter(this.userController);
    }

    private setupRoutes(){
        this.router.use('/user', this.userRouter.router);
        console.log("setup route /user ok");
    }
}