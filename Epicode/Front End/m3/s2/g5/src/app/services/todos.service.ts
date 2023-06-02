import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiUrl="http://localhost:3000/todo";

  constructor(){}

  getTodos():Promise<any>
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
}
