import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  /* photoArr:Photo[]=[]; */
  photoArr:any=[];
  constructor(private photoSvc:PhotoService){}
  ngOnInit(){
    this.photoSvc.getPhotos().subscribe(data=>{

      this.photoArr=data;
      console.log(this.photoArr)
      console.log(data)
    });
  }

  likePhoto(pic:Photo)
  {
    pic.liked == true ? pic.liked=false : pic.liked=true;
    this.photoSvc.like(pic).subscribe(data=>console.log(data));
  }
}
