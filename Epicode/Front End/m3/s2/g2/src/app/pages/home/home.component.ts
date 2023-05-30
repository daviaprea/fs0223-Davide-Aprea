import { Component } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dataArr:{id:number, name:string, surname:string, email:string, active:boolean}[]=[];
  constructor(private users:GetDataService)
  {
    users.fetchData().then(res=>this.dataArr=res);
  }
}
