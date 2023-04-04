import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";
import { Presente } from "./model/presente.model";

@Injectable({
    providedIn: 'root'
  })
export class PresenteService{
  private baseUrl = 'http://localhost:4200/api';

  constructor(private http: HttpClient) { }


 public getPresentes(): Observable<Array<Presente>>{
    return this.http.get<Array<Presente>>(`${this.baseUrl}/presentes`); 
 }

//   updateGift(id: number, disponivel: boolean): Observable<any> {
//     return this.http.get<any>(this.presenteURL)
//       .pipe(
//         map((presentes: [
//             {id: number ,nome: string, disponivel: boolean},
//             ]) => {
//           const index = presentes.findIndex(gift => gift.id === id);
//           if (index !== -1) {
//             presentes[index].disponivel = disponivel; 
//             this.http.put(this.presenteURL, presentes).subscribe();
//           }
//         }),
//         catchError(this.handleError<any>('atualizar Presente'))
//       );
//   }

//   private handleError<T>(operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
//       console.error(`${operation} failed: ${error.message}`);
//       return of(result as T);
//     };
//   }
  
}