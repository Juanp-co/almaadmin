import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfrendasPage } from './ofrendas.page';

const routes: Routes = [
  {
    path: '',
    component: OfrendasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfrendasPageRoutingModule {}
