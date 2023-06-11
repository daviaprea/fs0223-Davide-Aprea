import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { environment } from 'src/environments/environment.development';
import { LoggedUser } from 'src/app/auth/models/logged-user';
import { RegUser } from 'src/app/auth/models/reg-user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  localUser = localStorage.getItem("user");
  loggedUser:LoggedUser=JSON.parse(this.localUser!);

  constructor(private http:HttpClient) { }

  getData()
  {
    return this.http.get<RegUser>(environment.userUrl+"/"+this.loggedUser.user.id);
  }

  add(game:Game)
  {
    this.getData().subscribe(data=>{
      data.games.push(game);
      this.http.put(environment.userUrl+"/"+this.loggedUser.user.id, data).subscribe(data=>console.log(data));
    })
  }
}
