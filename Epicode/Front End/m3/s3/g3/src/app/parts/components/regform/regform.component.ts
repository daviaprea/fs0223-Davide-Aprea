import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.scss']
})
export class RegformComponent {

  constructor(private authSvc:AuthService){}

  sub(f:NgForm)
  {
    this.authSvc.register(new User(f.value.userEmail, f.value.userPass)).subscribe(res=>{
      console.log(res);
    });
  }
}
