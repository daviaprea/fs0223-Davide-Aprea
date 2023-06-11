import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegUser } from '../models/reg-user';
import { environment } from 'src/environments/environment.development';
import { LogUser } from '../models/log-user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, tap } from 'rxjs';
import { LoggedUser } from '../models/logged-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper: JwtHelperService = new JwtHelperService();

  private authSubject = new BehaviorSubject<null | LoggedUser>(null);
  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map((data) => Boolean(data)));

  constructor(private http:HttpClient)
  {
    this.restoreUser();
  }

  register(regUser:RegUser)
  {
    return this.http.post<RegUser>(environment.regUrl, regUser);
  }

  login(logUser:LogUser)
  {
    return this.http.post<LoggedUser>(environment.logUrl, logUser).pipe(
      tap((data) => {
        this.authSubject.next(data);
        localStorage.setItem('user', JSON.stringify(data));

        const expDate = this.jwtHelper.getTokenExpirationDate(data.accessToken) as Date;
      })
    );
  }

  restoreUser()
  {
    const userJson=localStorage.getItem("user");
    if(!userJson) return;
    const user:LoggedUser=JSON.parse(userJson);
    if(this.jwtHelper.isTokenExpired(user.accessToken)) return;
    this.authSubject.next(user);
  }

  logout()
  {
    this.authSubject.next(null);
    localStorage.removeItem("user");

  }
}
