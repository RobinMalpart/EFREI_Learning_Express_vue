export class User{

    private static totalUser:number = 1;
    private userId:number;
    private userName:string;
    
    constructor(userName : string){
        this.userId = User.totalUser
        User.totalUser++,
        this.userName = userName
    }
}