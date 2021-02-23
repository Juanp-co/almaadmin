import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamiliasDetallesPageRoutingModule } from './familias-detalles-routing.module';

import { FamiliasDetallesPage } from './familias-detalles.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamiliasDetallesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FamiliasDetallesPage]
})
export class FamiliasDetallesPageModule {}
