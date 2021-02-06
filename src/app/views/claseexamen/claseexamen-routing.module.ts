import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaseexamenPage } from './claseexamen.page';

const routes: Routes = [
  {
    path: '',
    component: ClaseexamenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaseexamenPageRoutingModule {}
