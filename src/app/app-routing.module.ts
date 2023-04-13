import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { EstadoSolicitudComponent } from './pages/estado-solicitud/estado-solicitud.component';
import { HomeComponent } from './pages/home/home.component';
import { IngresarSuplenciaComponent } from './pages/ingresar-suplencia/ingresar-suplencia.component';
import { SolicitudesPendientesComponent } from './pages/solicitudes-pendientes/solicitudes-pendientes.component';




const routes: Routes = [
  {
    path:'',component:HomeComponent,

  },
  {
    path:'login',component:LoginComponent
  },

  {
    path:'suplencia',component:IngresarSuplenciaComponent
  },
  {
    path:'estado',component:EstadoSolicitudComponent
  },
  {
    path:'pendientes',component:SolicitudesPendientesComponent
  },
  {
    path:'admin',
    loadChildren:() =>  import('./admin/admin.module').then(m => m.AdminModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
