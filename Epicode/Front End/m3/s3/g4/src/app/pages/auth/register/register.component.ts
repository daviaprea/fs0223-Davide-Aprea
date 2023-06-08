import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RegUser } from '../models/reg-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private authSvc:AuthService){}

  sub(f:NgForm)
  {
    this.authSvc.register(new RegUser(f.value.userEmail, f.value.userPass, f.value.userName, f.value.surname)).subscribe(data=>{
      console.log(data);
    });
  }
}
