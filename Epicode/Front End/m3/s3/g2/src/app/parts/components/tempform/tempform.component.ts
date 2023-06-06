import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tempform',
  templateUrl: './tempform.component.html',
  styleUrls: ['./tempform.component.scss']
})
export class TempformComponent {
  sub(f:NgForm)
  {
    console.log(f);
  }
}
