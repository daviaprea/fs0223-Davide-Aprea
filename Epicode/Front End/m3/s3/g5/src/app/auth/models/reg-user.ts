import { Game } from "src/app/dashboard/models/game";

export class RegUser {
  games:Game[]=[];
  constructor(
    private name:string,
    private surname:string,
    private email:string,
    private password:string
  ){}
}
