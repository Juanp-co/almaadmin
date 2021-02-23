import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamiliasDetallesPage } from './familias-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: FamiliasDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamiliasDetallesPageRoutingModule {}
