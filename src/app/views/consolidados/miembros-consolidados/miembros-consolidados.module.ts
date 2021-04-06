import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiembrosConsolidadosPageRoutingModule } from './miembros-consolidados-routing.module';

import { MiembrosConsolidadosPage } from './miembros-consolidados.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiembrosConsolidadosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MiembrosConsolidadosPage]
})
export class MiembrosConsolidadosPageModule {}
