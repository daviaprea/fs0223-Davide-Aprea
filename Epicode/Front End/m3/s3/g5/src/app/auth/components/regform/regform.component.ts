import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RegUser } from '../../models/reg-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.scss']
})
export class RegformComponent implements OnInit{
  f!:FormGroup;

  constructor(private authSvc:AuthService, private router:Router){}

  ngOnInit(): void {
    this.f=new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    })
  }

  send()
  {
    this.authSvc.register(new RegUser(this.f.value.name, this.f.value.surname, this.f.value.email, this.f.value.password))
    .subscribe(data=>{
      console.log(data);
      this.router.navigate(["/auth", "login"]);
    });
  }
}
