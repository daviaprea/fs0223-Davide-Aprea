import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  todoArr:Todo[]=[];
  constructor(private todoSvc:TodosService){}
  ngOnInit(){
    this.todoSvc.getTodos().then(res=>{
      console.log(res);
      this.todoArr=res.filter(el=>el.completed);
    });
  }

  deleteTask(id?:number)
  {
    this.todoSvc.deleteTodo(id).then(res=>console.log(res));
    window.location.reload();
  }
}
