import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesDevocionalesPageRoutingModule } from './detalles-devocionales-routing.module';

import { DetallesDevocionalesPage } from './detalles-devocionales.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesDevocionalesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetallesDevocionalesPage]
})
export class DetallesDevocionalesPageModule {}
