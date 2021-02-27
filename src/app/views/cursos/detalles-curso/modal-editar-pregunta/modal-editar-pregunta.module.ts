import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEditarPreguntaPageRoutingModule } from './modal-editar-pregunta-routing.module';

import { ModalEditarPreguntaPage } from './modal-editar-pregunta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEditarPreguntaPageRoutingModule
  ],
  declarations: [ModalEditarPreguntaPage]
})
export class ModalEditarPreguntaPageModule {}
