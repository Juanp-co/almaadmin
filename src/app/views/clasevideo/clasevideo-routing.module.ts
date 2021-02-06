import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasevideoPage } from './clasevideo.page';

const routes: Routes = [
  {
    path: '',
    component: ClasevideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasevideoPageRoutingModule {}
