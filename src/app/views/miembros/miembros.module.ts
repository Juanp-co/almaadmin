import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiembrosPageRoutingModule } from './miembros-routing.module';

import { MiembrosPage } from './miembros.page';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiembrosPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [MiembrosPage]
})
export class MiembrosPageModule {}
