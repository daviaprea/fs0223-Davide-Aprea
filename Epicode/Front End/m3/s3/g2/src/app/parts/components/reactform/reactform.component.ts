import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.scss']
})
export class ReactformComponent implements OnInit{
  f!:FormGroup;

  ngOnInit(): void {
    this.f=new FormGroup({
      heroName: new FormControl(null, Validators.required),
      alterEgo: new FormControl(null, Validators.required),
      power: new FormControl(null, Validators.required),
      enemy: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      planet: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      weakness: new FormControl(null)
    })
  }

  send()
  {

  }
}
