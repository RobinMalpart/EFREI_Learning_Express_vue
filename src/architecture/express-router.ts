import { CarController } from "../car/carController";
import { CarRouter } from "../car/carRouter";
import { CarService } from "../car/carService";
import { UserController } from "../user/userController";
import { UserRouter } from "../user/userRouter";
import { UserService } from "../user/userService";
import express from 'express';

export class ExpressRouter{

    router = express();

    private userController!: UserController;
    private userRouter!: UserRouter;
    private carController !: CarController;
    private carRouter !: CarRouter;

    constructor(private userService: UserService, private carService : CarService){
        this.setupExpressRouter();
    }

    private setupExpressRouter(){
        this.sertupControllers();
        this.setupRouters();
        this.setupRoutes();
    }

    private sertupControllers(){
        this.userController = new UserController(this.userService);
        this.carController = new CarController(this.carService);
    }

    private setupRouters(){
        this.userRouter = new UserRouter(this.userController);
        this.carRouter = new CarRouter(this.carController);
    }

    private setupRoutes(){
        this.router.use('/user', this.userRouter.router);
        this.router.use('/car', this.carRouter.router);
        console.log("setup route /user ok");
    }
}