import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GruposFamiliaresPage } from './grupos-familiares.page';

const routes: Routes = [
  {
    path: '',
    component: GruposFamiliaresPage
  },
  {
    path: 'crear-grupo',
    loadChildren: () => import('./crear-grupo/crear-grupo.module').then( m => m.CrearGrupoPageModule)
  },
  {
    path: 'asignar-miembro',
    loadChildren: () => import('./asignar-miembro/asignar-miembro.module').then( m => m.AsignarMiembroPageModule)
  },
  {
    path: 'reportes',
    loadChildren: () => import('./reportes/reportes.module').then( m => m.ReportesPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./detalles-grupo/detalles-grupo.module').then( m => m.DetallesGrupoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GruposFamiliaresPageRoutingModule {}
