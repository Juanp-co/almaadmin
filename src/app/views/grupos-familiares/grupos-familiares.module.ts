import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GruposFamiliaresPageRoutingModule } from './grupos-familiares-routing.module';

import { GruposFamiliaresPage } from './grupos-familiares.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GruposFamiliaresPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [GruposFamiliaresPage],
})
export class GruposFamiliaresPageModule {}
