import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggedUser, User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly regUrl="http://localhost:3000/users/register";
  readonly logUrl="http://localhost:3000/login";

  constructor(private http:HttpClient){}

  register(user:User)
  {
    return this.http.post(this.regUrl, user);
  }

  login(user:User):Observable<LoggedUser>
  {
    return this.http.post<LoggedUser>(this.logUrl, user);
  }
}
