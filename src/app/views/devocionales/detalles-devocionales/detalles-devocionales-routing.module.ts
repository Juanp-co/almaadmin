import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesDevocionalesPage } from './detalles-devocionales.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesDevocionalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesDevocionalesPageRoutingModule {}
