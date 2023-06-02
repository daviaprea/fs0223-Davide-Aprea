import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit{
  todoArr:Todo[]=[]
  constructor(private todoSvc:TodosService){}
  ngOnInit(){
    this.todoSvc.getTodos().then(res=>{
      console.log(res);
      this.todoArr=res;
    });
  }
}
