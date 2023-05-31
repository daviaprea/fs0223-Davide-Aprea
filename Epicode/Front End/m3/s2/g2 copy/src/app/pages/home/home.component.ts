import { Component } from '@angular/core';
import { Post } from 'src/app/Models/custom-types';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dataArr:Post[]=[];
  constructor(private users:GetDataService)
  {
    users.fetchData().then(res=>this.dataArr=res);
  }
}
