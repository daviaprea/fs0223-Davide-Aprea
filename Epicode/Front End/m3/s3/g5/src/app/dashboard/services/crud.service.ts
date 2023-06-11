import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { environment } from 'src/environments/environment.development';
import { LoggedUser } from 'src/app/auth/models/logged-user';
import { IUser } from 'src/app/auth/models/i-user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  localUser = localStorage.getItem("user");
  loggedUser:LoggedUser=JSON.parse(this.localUser!);

  constructor(private http:HttpClient) { }

  getData()
  {
    return this.http.get<IUser>(environment.userUrl+"/"+this.loggedUser.user.id);
  }

  add(game:Game)
  {
    this.loggedUser.user.games.push(game);
    return this.http.put(environment.userUrl+"/"+this.loggedUser.user.id, this.loggedUser);
  }
}
