import { Injectable } from '@angular/core';
import { Instrument } from '../Model/instrument'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})


export class InstrumentService {
  private instrumentsURL = environment.baseURL + 'api/instruments'
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getAllInstruments(): Observable<Instrument[]>{
    return this.http.get<Instrument[]>(this.instrumentsURL )
  }


}
