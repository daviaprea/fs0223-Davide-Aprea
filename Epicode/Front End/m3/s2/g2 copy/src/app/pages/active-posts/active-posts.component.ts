import { Component } from '@angular/core';
import { Post } from 'src/app/Models/custom-types';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.css']
})
export class ActivePostsComponent {
  dataArr:Post[]=[];
  constructor(private users:GetDataService)
  {
    users.fetchData().then((res:Post[])=>this.dataArr=res.filter(el=>el.active==true));
  }
}
