import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPreviewTemaPage } from './modal-preview-tema.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPreviewTemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPreviewTemaPageRoutingModule {}
