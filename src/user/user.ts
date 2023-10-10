export class User{

    private static totalUser:number = 1;
    private userId:number;
    private userName:string;
    
    constructor(userName : string){
        this.userId = User.totalUser;
        User.totalUser++;
        this.userName = userName;
    }

    //A mettre dans userService nan ?
    public static increamentTotalUser():void{
        User.totalUser++;
    }

    //Pour debug
    public static getTotalUser():number{
        return User.totalUser;
    }

    public getUserId():number{
        return this.userId;
    }

    public static setTotalUser(int:number) : void{
        this.totalUser = int;
        console.log("total user " + User.getTotalUser());
    }
}