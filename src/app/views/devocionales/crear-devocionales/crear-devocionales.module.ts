import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearDevocionalesPageRoutingModule } from './crear-devocionales-routing.module';

import { CrearDevocionalesPage } from './crear-devocionales.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearDevocionalesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CrearDevocionalesPage]
})
export class CrearDevocionalesPageModule {}
