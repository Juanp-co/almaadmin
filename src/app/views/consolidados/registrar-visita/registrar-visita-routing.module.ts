import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarVisitaPage } from './registrar-visita.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarVisitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarVisitaPageRoutingModule {}
