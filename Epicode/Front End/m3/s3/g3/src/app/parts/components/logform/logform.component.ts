import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logform',
  templateUrl: './logform.component.html',
  styleUrls: ['./logform.component.scss']
})
export class LogformComponent {
  constructor(private authSvc:AuthService){}

  sub(f:NgForm)
  {
    this.authSvc.login(new User(f.value.userEmail, f.value.userPass)).subscribe(res=>{
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res));
    });
  }
}
