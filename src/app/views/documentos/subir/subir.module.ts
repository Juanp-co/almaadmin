import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubirPageRoutingModule } from './subir-routing.module';

import { SubirPage } from './subir.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubirPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SubirPage]
})
export class SubirPageModule {}
