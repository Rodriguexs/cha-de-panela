import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent {


  public listaPresente: Array<{codigo: number, nome: string, descricao: string}> = new Array<{codigo: number, nome: string, descricao: string}>()

}
