import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCursosPreviosPage } from './modal-cursos-previos.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCursosPreviosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCursosPreviosPageRoutingModule {}
