import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../models/photo';
import { Subject, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  apiUrl="http://localhost:3000/photos";
  constructor(private http:HttpClient){}

  getPhotos()
  {
    return this.http.get<Photo[]>(this.apiUrl);
  }

  like(obj:Photo)
  {
    return this.http.put(this.apiUrl+"/"+obj.id, obj);
  }

  subFunc()
  {
    const subject = new Subject<number>();

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });
    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    const observable = from([1, 2, 3]);

    observable.subscribe(subject);
  }
}
