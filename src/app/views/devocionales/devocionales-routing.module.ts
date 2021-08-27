import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevocionalesPage } from './devocionales.page';

const routes: Routes = [
  {
    path: '',
    component: DevocionalesPage
  },
  {
    path: 'crear',
    loadChildren: () => import('./crear-devocionales/crear-devocionales.module').then( m => m.CrearDevocionalesPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./detalles-devocionales/detalles-devocionales.module').then( m => m.DetallesDevocionalesPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevocionalesPageRoutingModule {}
