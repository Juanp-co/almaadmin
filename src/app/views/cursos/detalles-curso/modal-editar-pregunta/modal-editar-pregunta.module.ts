import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEditarPreguntaPageRoutingModule } from './modal-editar-pregunta-routing.module';

import { ModalEditarPreguntaPage } from './modal-editar-pregunta.page';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEditarPreguntaPageRoutingModule,
    CKEditorModule,
  ],
  declarations: [ModalEditarPreguntaPage]
})
export class ModalEditarPreguntaPageModule {}
