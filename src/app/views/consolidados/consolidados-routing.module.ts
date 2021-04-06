import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsolidadosPage } from './consolidados.page';

const routes: Routes = [
  {
    path: '',
    component: ConsolidadosPage
  },
  {
    path: 'detalles-consolidado',
    loadChildren: () => import('./detalles-consolidado/detalles-consolidado.module').then( m => m.DetallesConsolidadoPageModule)
  },
  {
    path: 'registrar-visita',
    loadChildren: () => import('./registrar-visita/registrar-visita.module').then( m => m.RegistrarVisitaPageModule)
  },
  {
    path: 'miembros-consolidados',
    loadChildren: () => import('./miembros-consolidados/miembros-consolidados.module').then( m => m.MiembrosConsolidadosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsolidadosPageRoutingModule {}
