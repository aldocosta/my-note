import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/app.header';
import { NotasComponent } from './Componentes/notas/app.notas';

import { CustomSlicePipe } from './Componentes/pipes/customSlice.pipe';
import { NotasFilterPipe } from './Componentes/pipes/notasFilter.pipe';
import { NotasdescricaoFilterPipe } from './Componentes/pipes/notasdescricaoFilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,NotasComponent,
    CustomSlicePipe,NotasFilterPipe,
    NotasdescricaoFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 