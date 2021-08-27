import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevocionalesPageRoutingModule } from './devocionales-routing.module';

import { DevocionalesPage } from './devocionales.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevocionalesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DevocionalesPage]
})
export class DevocionalesPageModule {}
