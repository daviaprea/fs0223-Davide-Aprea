import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../services/crud.service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-gameform',
  templateUrl: './gameform.component.html',
  styleUrls: ['./gameform.component.scss']
})
export class GameformComponent implements OnInit{
  f!:FormGroup;

  ngOnInit(): void {
    this.f=new FormGroup({
      title: new FormControl(null, Validators.required),
      cover: new FormControl(null, Validators.required),
      price: new FormControl(null, [Validators.required, Validators.min(0)])
    })
  }

  constructor(private gameSvc:CrudService){}

  addGame()
  {
    this.gameSvc.add(new Game(this.f.value.title, this.f.value.cover, this.f.value.price));
  }
}
