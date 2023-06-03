import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-inputtodo',
  templateUrl: './inputtodo.component.html',
  styleUrls: ['./inputtodo.component.scss']
})
export class InputTodoComponent {

  todoObj=new Todo("", false);

  constructor(private todoSvc:TodosService){}

  createTodo()
  {
    this.todoSvc.addTodo(this.todoObj).then(res=>console.log(res));
    window.location.reload();
  }
}
