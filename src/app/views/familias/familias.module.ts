import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamiliasPageRoutingModule } from './familias-routing.module';

import { FamiliasPage } from './familias.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamiliasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FamiliasPage]
})
export class FamiliasPageModule {}
