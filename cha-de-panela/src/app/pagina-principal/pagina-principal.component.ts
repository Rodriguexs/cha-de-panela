import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent {

  name: string = '';
  guests: number = 0;
  presente: string = '';
  attending: boolean = false;
  presentes: string[] = [];

  constructor(private http: HttpClient) {
    this.http.get<string[]>('/assets/arquivos/presentes.json').subscribe(data => {
      this.presentes = data;
    });
  }

  confirmarPresenca() {
    const data = {
      name: this.name,
      guests: this.guests,
      presentes: this.presentes,
      attending: this.attending
    };
    this.http.post('/api/rsvp', data).subscribe(() => {
      alert('RSVP enviado com sucesso!');
    });
  }
}
