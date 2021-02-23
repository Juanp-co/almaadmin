import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesMiembroPageRoutingModule } from './detalles-miembro-routing.module';

import { DetallesMiembroPage } from './detalles-miembro.page';

import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesMiembroPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetallesMiembroPage]
})
export class DetallesMiembroPageModule {}
