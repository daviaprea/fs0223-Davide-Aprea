import { Todointerface } from "./todointerface";

export class Todo implements Todointerface{
  id?: number;
  title: string;
  completed:boolean;
  constructor(title:string, completed:boolean, id?:number)
  {
    this.title=title;
    this.completed=completed;
    this.id=id;
  }
}
