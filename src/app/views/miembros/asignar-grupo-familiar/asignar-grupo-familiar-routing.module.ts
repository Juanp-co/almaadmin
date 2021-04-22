import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignarGrupoFamiliarPage } from './asignar-grupo-familiar.page';

const routes: Routes = [
  {
    path: '',
    component: AsignarGrupoFamiliarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignarGrupoFamiliarPageRoutingModule {}
