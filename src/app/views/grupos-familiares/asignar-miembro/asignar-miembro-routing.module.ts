import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignarMiembroPage } from './asignar-miembro.page';

const routes: Routes = [
  {
    path: '',
    component: AsignarMiembroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignarMiembroPageRoutingModule {}
