import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesConsolidadoPageRoutingModule } from './detalles-consolidado-routing.module';

import { DetallesConsolidadoPage } from './detalles-consolidado.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesConsolidadoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetallesConsolidadoPage]
})
export class DetallesConsolidadoPageModule {}
