import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesConsolidadoPage } from './detalles-consolidado.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesConsolidadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesConsolidadoPageRoutingModule {}
