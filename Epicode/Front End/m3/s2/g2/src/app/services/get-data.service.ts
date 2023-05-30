import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  fetchData(){
    return fetch("../../assets/db.json").then(res=>res.json());
  }
}
