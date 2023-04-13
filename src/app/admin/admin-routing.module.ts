import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';

import { ModificablesComponent } from './component/modificables/modificables.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'modificables', component:ModificablesComponent},
      {path:'dashboard', component:DashboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
