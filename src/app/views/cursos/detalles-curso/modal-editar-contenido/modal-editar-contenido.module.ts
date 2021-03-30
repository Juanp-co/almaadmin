import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEditarContenidoPageRoutingModule } from './modal-editar-contenido-routing.module';

import { ModalEditarContenidoPage } from './modal-editar-contenido.page';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEditarContenidoPageRoutingModule,
    CKEditorModule,
  ],
  declarations: [ModalEditarContenidoPage]
})
export class ModalEditarContenidoPageModule {}
