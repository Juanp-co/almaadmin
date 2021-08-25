import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearGrupoPageRoutingModule } from './crear-grupo-routing.module';

import { CrearGrupoPage } from './crear-grupo.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearGrupoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CrearGrupoPage]
})
export class CrearGrupoPageModule {}
