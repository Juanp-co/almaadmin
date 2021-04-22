import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignarGrupoFamiliarPageRoutingModule } from './asignar-grupo-familiar-routing.module';

import { AsignarGrupoFamiliarPage } from './asignar-grupo-familiar.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignarGrupoFamiliarPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AsignarGrupoFamiliarPage]
})
export class AsignarGrupoFamiliarPageModule {}
