import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosPage } from './eventos.page';

const routes: Routes = [
  {
    path: '',
    component: EventosPage
  },
  {
    path: 'crear-evento',
    loadChildren: () => import('./crear-evento/crear-evento.module').then( m => m.CrearEventoPageModule)
  },
  {
    path: ':_id',
    loadChildren: () => import('./detalles-evento/detalles-evento.module').then( m => m.DetallesEventoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosPageRoutingModule {}
