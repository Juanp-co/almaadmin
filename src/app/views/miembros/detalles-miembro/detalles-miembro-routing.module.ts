import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesMiembroPage } from './detalles-miembro.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesMiembroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesMiembroPageRoutingModule {}
