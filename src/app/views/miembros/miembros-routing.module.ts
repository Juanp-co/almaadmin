import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiembrosPage } from './miembros.page';

const routes: Routes = [
  {
    path: '',
    component: MiembrosPage
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: ':userid',
    loadChildren: () => import('./detalles-miembro/detalles-miembro.module').then(m => m.DetallesMiembroPageModule)
  },
  {
    path: 'asignar-consolidador',
    loadChildren: () => import('./asignar-consolidador/asignar-consolidador.module').then( m => m.AsignarConsolidadorPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiembrosPageRoutingModule {}
