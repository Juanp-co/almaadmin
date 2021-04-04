import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesGrupoPageRoutingModule } from './detalles-grupo-routing.module';

import { DetallesGrupoPage } from './detalles-grupo.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesGrupoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetallesGrupoPage]
})
export class DetallesGrupoPageModule {}
