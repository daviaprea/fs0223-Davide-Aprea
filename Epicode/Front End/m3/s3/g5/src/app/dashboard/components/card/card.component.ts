import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  games:Game[]=[];
  constructor(protected crudSvc:CrudService){}
  ngOnInit()
  {
    this.crudSvc.getData().subscribe(obj=>this.games=obj.games)
  }
}
