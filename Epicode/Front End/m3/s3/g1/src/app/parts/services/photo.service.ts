import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  apiUrl="http://localhost:3000/photos";
  constructor(private http:HttpClient){}

  getPhotos():Observable<Photo[]>
  {
    return this.http.get<Photo[]>(this.apiUrl);
  }

  like(obj:Photo)
  {
    return this.http.put(this.apiUrl+"/"+obj.id, obj);
  }

}
