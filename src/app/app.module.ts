import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ConvidadoService } from './pagina-principal/shared/convidado.service';
import { PresenteService } from './pagina-principal/shared/presente.service';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 

  ],
  providers: [HttpClient, ConvidadoService, PresenteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
