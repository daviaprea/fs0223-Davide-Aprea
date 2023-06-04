import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit{
  todoArr:Todo[]=[]
  constructor(private todoSvc:TodosService, public route:ActivatedRoute){}
  ngOnInit(){
    console.log(this.route.snapshot.routeConfig?.path);
    this.todoSvc.getTodos().then(res=>{
      console.log(res);

      if(this.route.snapshot.routeConfig?.path=="")this.todoArr=res.filter(el=>!el.completed);
      else this.todoArr=res.filter(el=>el.completed);
    });
  }

  deleteTask(id?:number)
  {
    this.todoSvc.deleteTodo(id).then(res=>console.log(res));
    window.location.reload();
  }

  completeTask(item:Todo)
  {
    item.completed=true;
    this.todoSvc.completeTodo(item).then(res=>console.log(res));
    window.location.reload();
  }
}
