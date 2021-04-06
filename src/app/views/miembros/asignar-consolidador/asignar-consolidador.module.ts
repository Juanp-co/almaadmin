import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignarConsolidadorPageRoutingModule } from './asignar-consolidador-routing.module';

import { AsignarConsolidadorPage } from './asignar-consolidador.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignarConsolidadorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AsignarConsolidadorPage]
})
export class AsignarConsolidadorPageModule {}
