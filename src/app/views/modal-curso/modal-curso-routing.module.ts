import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCursoPage } from './modal-curso.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCursoPageRoutingModule {}
