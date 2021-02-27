import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCursosPreviosPageRoutingModule } from './modal-cursos-previos-routing.module';

import { ModalCursosPreviosPage } from './modal-cursos-previos.page';
import {ComponentsModule} from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCursosPreviosPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ModalCursosPreviosPage]
})
export class ModalCursosPreviosPageModule {}
