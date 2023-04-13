import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ModificablesComponent } from './component/modificables/modificables.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';



@NgModule({
  declarations: [
    ModificablesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
