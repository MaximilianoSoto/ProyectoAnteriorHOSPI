import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IngresarSuplenciaComponent } from './pages/ingresar-suplencia/ingresar-suplencia.component';
import { EstadoSolicitudComponent } from './pages/estado-solicitud/estado-solicitud.component';
import { HistorialSolicitudesComponent } from './pages/historial-solicitudes/historial-solicitudes.component';
import { HomeComponent } from './pages/home/home.component';
import { SolicitudesPendientesComponent } from './pages/solicitudes-pendientes/solicitudes-pendientes.component';
import { VistaSolicitudComponent } from './components/vista-solicitud/vista-solicitud.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    IngresarSuplenciaComponent,
    EstadoSolicitudComponent,
    HistorialSolicitudesComponent,
    HomeComponent,
    SolicitudesPendientesComponent,

    VistaSolicitudComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
