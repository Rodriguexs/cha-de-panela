import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Convidado } from "./model/convidado.model";

@Injectable({
  providedIn: 'root'
})
export class ConvidadoService {
  private baseUrl = 'https://cha-de-panela-api-production.up.railway.app';


  constructor(private http: HttpClient) { }

  getConvidados(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  public addConvidado(convidado: Convidado): Observable<any> {
    return this.http.post(`${this.baseUrl}/convidado/novo`, convidado);
  }

  
}