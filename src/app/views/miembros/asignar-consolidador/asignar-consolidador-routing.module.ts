import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignarConsolidadorPage } from './asignar-consolidador.page';

const routes: Routes = [
  {
    path: '',
    component: AsignarConsolidadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignarConsolidadorPageRoutingModule {}
