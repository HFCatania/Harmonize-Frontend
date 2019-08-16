import { Injectable } from '@angular/core';
import { Genre } from '../Model/genre';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { environment } from '../../environments/environment'; 


@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private genreURL = environment.baseURL + 'api/genres'; 

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getAllGenres(): Observable<Genre[]>{
    return this.http.get<Genre[]>(this.genreURL )
  }
}
