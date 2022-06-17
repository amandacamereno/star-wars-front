import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaDadosComponent } from './tabela-dados/tabela-dados.component';
import { HttpClientModule } from '@angular/common/http';
import { TableFilmComponent } from './table-film/table-film.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaDadosComponent,
    TableFilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }