import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga.model';
@Injectable({
  providedIn: 'root'
})
export class VagasService {
  private apiUrl = "http://localhost:3006/vagas";

  constructor(private http: HttpClient) { }



//criar o metodos para conexão com apiRest

  getVagas(): Observable<Vaga[]>{ //abservable -> rxjs =.tradut
    return this.http.get<Vaga[]>(this.apiUrl);
  }

//post

//put

//delete

}
