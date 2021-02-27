import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesCursoPageRoutingModule } from './detalles-curso-routing.module';

import { DetallesCursoPage } from './detalles-curso.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesCursoPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [DetallesCursoPage]
})
export class DetallesCursoPageModule {}
