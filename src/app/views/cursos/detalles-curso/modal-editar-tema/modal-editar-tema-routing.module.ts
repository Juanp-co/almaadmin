import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEditarTemaPage } from './modal-editar-tema.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEditarTemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEditarTemaPageRoutingModule {}
