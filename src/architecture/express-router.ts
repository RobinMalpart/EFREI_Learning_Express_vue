import { UserController } from "../user/userController";
import { UserRouter } from "../user/userRouter";
import { UserService } from "../user/userService";
import { FruitController } from "../fruit/fruitController";
import { FruitRouter } from "../fruit/fruitRouter";
import { FruitService } from "../fruit/fruitService";
import express from 'express';

export class ExpressRouter{

    router = express();

    private userController!: UserController;
    private userRouter!: UserRouter;
    private fruitController!:FruitController;
    private fruitRouter!:FruitRouter;

    constructor(private userService: UserService, private fruitService : FruitService){
        this.setupExpressRouter();
    }

    private setupExpressRouter(){
        this.sertupControllers();
        this.setupRouters();
        this.setupRoutes();
    }

    private sertupControllers(){
        this.userController = new UserController(this.userService);
        this.fruitController = new FruitController(this.fruitService);
    }

    private setupRouters(){
        this.userRouter = new UserRouter(this.userController);
        this.fruitRouter = new FruitRouter(this.fruitController);
    }

    private setupRoutes(){
        this.router.use('/user', this.userRouter.router);
        this.router.use('/fruit', this.fruitRouter.router);

        console.log("setup route /user and /route ok");
    }
}