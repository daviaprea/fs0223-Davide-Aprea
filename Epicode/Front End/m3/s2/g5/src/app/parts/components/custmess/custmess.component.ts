import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-custmess',
  templateUrl: './custmess.component.html',
  styleUrls: ['./custmess.component.scss']
})
export class CustmessComponent {
  todoArr:Todo[]=[]
  customMess="";
  constructor(private todoSvc:TodosService, public route:ActivatedRoute){}
  ngOnInit(){
    console.log(this.route.snapshot.routeConfig?.path);
    this.todoSvc.getTodos().then(res=>{
      setTimeout(()=>{
        console.log(res);

        if(this.route.snapshot.routeConfig?.path=="")
        {
          this.todoArr=res.filter(el=>!el.completed);
          this.customMess=`You have ${this.todoArr.length} tasks left.`;
        }
        else
        {
          this.todoArr=res.filter(el=>el.completed);
          this.customMess=`You have completed ${this.todoArr.length} tasks.`;
        }
      } ,2000);
    });
  }
}
