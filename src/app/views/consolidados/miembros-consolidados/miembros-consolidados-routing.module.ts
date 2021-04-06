import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiembrosConsolidadosPage } from './miembros-consolidados.page';

const routes: Routes = [
  {
    path: '',
    component: MiembrosConsolidadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiembrosConsolidadosPageRoutingModule {}
