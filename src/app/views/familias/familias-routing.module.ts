import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamiliasPage } from './familias.page';

const routes: Routes = [
  {
    path: '',
    component: FamiliasPage
  },
  {
    path: ':id',
    loadChildren: () => import('./familias-detalles/familias-detalles.module').then( m => m.FamiliasDetallesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamiliasPageRoutingModule {}
