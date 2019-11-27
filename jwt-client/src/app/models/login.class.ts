export class Login {
    username : string;
    password : string;
}

export class Registration{
    username : string;
    password : string;
    mobile : string;
    firstName : string;
}



export class LoginResponse{
    status:number;
    error:string;
    token:string;
    expiresIn:number;
}
