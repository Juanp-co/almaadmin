import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesGrupoPage } from './detalles-grupo.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesGrupoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesGrupoPageRoutingModule {}
