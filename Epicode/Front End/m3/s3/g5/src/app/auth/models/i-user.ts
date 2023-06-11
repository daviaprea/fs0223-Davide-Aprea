import { Game } from "src/app/dashboard/models/game";

export interface IUser {
  games:Game[];
  id:number;
  email:string;
  name:string;
  surname:string;
}
