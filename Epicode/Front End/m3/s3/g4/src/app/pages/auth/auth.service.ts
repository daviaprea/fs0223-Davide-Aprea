import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegUser } from './models/reg-user';
import { environment } from 'src/environments/environment.development';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map } from 'rxjs';
import { LoggedUser } from './models/logged-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper: JwtHelperService = new JwtHelperService();

  private authSubj=new BehaviorSubject<null | LoggedUser>(null);
  user$ = this.authSubj.asObservable();
  isLoggedIn$ = this.user$.pipe(map((data) => Boolean(data)));

  constructor(private http:HttpClient){}

  register(user:RegUser)
  {
    return this.http.post<RegUser>(environment.regUrl, user);
  }
}
