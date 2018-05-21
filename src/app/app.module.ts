import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColegioComponent } from './colegio/colegio.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    ColegioComponent,
    ProfesoresComponent,
    UbicacionComponent,
    GaleriaComponent,
    ContenidoComponent,
    FooterComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
