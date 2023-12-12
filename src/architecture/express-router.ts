import { UserController } from "../user/userController";
import { UserRouter } from "../user/userRouter";
import { UserService } from "../user/userService";
import { FruitController } from "../fruit/fruitController";
import { FruitRouter } from "../fruit/fruitRouter";
import { FruitService } from "../fruit/fruitService";
import { SaladeRouter } from "../saladeDeFruit/saladeRouter";
import express from 'express';
import { SaladeController } from "../saladeDeFruit/saladeController";
import { SaladeService } from "../saladeDeFruit/saladeService";

export class ExpressRouter{

    router = express();

    private userController!: UserController;
    private userRouter!: UserRouter;
    private fruitController!:FruitController;
    private fruitRouter!:FruitRouter;
    private saladeRouter!: SaladeRouter;
    private saladeController!: SaladeController;

    constructor(private userService: UserService, private fruitService : FruitService, private saladeService : SaladeService){
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
        this.saladeController = new SaladeController(this.saladeController);
    }

    private setupRouters(){
        this.userRouter = new UserRouter(this.userController);
        this.fruitRouter = new FruitRouter(this.fruitController);
        this.saladeController = new SaladeController(this.saladeController);
    }

    private setupRoutes(){
        this.router.use('/user', this.userRouter.router);
        this.router.use('/fruit', this.fruitRouter.router);
        this.router.use('/salade', this.saladeRouter.router)

        console.log("setup route /user and /route ok");
    }
}