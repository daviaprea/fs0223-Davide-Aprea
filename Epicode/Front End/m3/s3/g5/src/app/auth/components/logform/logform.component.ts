import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LogUser } from '../../models/log-user';

@Component({
  selector: 'app-logform',
  templateUrl: './logform.component.html',
  styleUrls: ['./logform.component.scss']
})
export class LogformComponent implements OnInit{
  f!:FormGroup;

  constructor(private authSvc:AuthService){}

  ngOnInit(): void {
    this.f=new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    })
  }

  send()
  {
    this.authSvc.login(new LogUser(this.f.value.email, this.f.value.password))
    .subscribe(data=>console.log(data));
  }
}
