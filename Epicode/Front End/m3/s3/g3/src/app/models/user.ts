export class User {
  constructor(public email:string, public password:string){}
}

export class LoggedUser{
  constructor(public accToken:number, public user:{email:string, id:number}){}
}
