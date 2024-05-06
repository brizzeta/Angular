import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApifilmService {

  constructor(private http:HttpClient) { }
  getFilms(title: string, type: string): Observable<any>{
    const url = `http://www.omdbapi.com/?apikey=54990599&s=${title}&type=${type}`;
    return this.http.get(url);
  }
  getFilmsById(ID: string):Observable<any>{
    const url = `http://www.omdbapi.com/?apikey=54990599&i=${ID}`;
    return this.http.get(url);
  }
}
