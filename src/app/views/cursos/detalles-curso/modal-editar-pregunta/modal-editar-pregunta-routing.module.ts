import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEditarPreguntaPage } from './modal-editar-pregunta.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEditarPreguntaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEditarPreguntaPageRoutingModule {}
