import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConvidadoService } from './shared/convidado.service';
import { Convidado } from './shared/model/convidado.model';
import { Presente } from './shared/model/presente.model';
import { PresenteService } from './shared/presente.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  presentes: Array<Presente> = new Array<Presente>();
  convidado: Convidado = new Convidado();

  constructor( private convidadoService: ConvidadoService, private presenteService: PresenteService) {

  }

  ngOnInit() {

    this.carregarPresentes();

  }

  carregarPresentes(){
    this.presenteService.getPresentes().subscribe((data) => {
      this.presentes = data;
      this.presentes = this.presentes.filter(item => item.disponivel === true);
    })
  }

  confirmarPresenca() {

    this.convidado.presente.disponivel = false;
    this.convidadoService.addConvidado(this.convidado).subscribe((resp) =>
    this.carregarPresentes() );
  }
}
