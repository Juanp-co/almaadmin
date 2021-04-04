import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignarMiembroPageRoutingModule } from './asignar-miembro-routing.module';

import { AsignarMiembroPage } from './asignar-miembro.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignarMiembroPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AsignarMiembroPage]
})
export class AsignarMiembroPageModule {}
