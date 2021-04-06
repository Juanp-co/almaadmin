import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsolidadosPageRoutingModule } from './consolidados-routing.module';

import { ConsolidadosPage } from './consolidados.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsolidadosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConsolidadosPage]
})
export class ConsolidadosPageModule {}
