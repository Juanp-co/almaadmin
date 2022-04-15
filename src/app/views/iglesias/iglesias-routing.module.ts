import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IglesiasPage } from './iglesias.page';

const routes: Routes = [
  {
    path: '',
    component: IglesiasPage
  },
  {
    path: ':id',
    loadChildren: () => import('./detalles/detalles.module').then( m => m.DetallesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IglesiasPageRoutingModule {}
