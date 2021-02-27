import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPreviewPruebaPage } from './modal-preview-prueba.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPreviewPruebaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPreviewPruebaPageRoutingModule {}
