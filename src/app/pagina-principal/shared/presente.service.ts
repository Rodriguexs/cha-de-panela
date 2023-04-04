import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";
import { Presente } from "./model/presente.model";

@Injectable({
    providedIn: 'root'
  })
export class PresenteService{
  private baseUrl = 'https://cha-de-panela-api-production.up.railway.app';

  constructor(private http: HttpClient) { }


 public getPresentes(): Observable<Array<Presente>>{
    return this.http.get<Array<Presente>>(`${this.baseUrl}/presentes`); 
 }
  
}