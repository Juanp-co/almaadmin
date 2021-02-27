import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEditarTemaPageRoutingModule } from './modal-editar-tema-routing.module';

import { ModalEditarTemaPage } from './modal-editar-tema.page';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEditarTemaPageRoutingModule,
    CKEditorModule
  ],
  declarations: [ModalEditarTemaPage]
})
export class ModalEditarTemaPageModule {}
