import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Todointerface } from '../models/todointerface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiUrl="http://localhost:3000/todo";

  constructor(){}

  getTodos():Promise<Todointerface[]>
  {
    return fetch(this.apiUrl).then(res=>res.json());
  }

  addTodo(newTodo:Todo):Promise<Response>
  {
    return fetch(this.apiUrl, {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {"Content-type": "application/json"}
    })
    .then(res=>res.json());
  }

  deleteTodo(id?:number):Promise<Response>
  {
    return fetch(this.apiUrl+"/"+id, {method: "DELETE"})
    .then(res=>res.json());
  }

  completeTodo(item:Todo):Promise<Response>
  {
    return fetch(this.apiUrl+"/"+item.id, {
      method: "PUT",
      body: JSON.stringify(item),
      headers: {"Content-type": "application/json"}
    })
    .then(res=>res.json());
  }
}
