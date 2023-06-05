import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  photoArr:Photo[]=[];
  constructor(private photoSvc:PhotoService){}
  ngOnInit(){
    this.photoSvc.getPhotos().subscribe(data=>{

      this.photoArr=data.filter((el:Photo)=>el.liked==true);
    });
  }
}
