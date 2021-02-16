import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCursoPageRoutingModule } from './modal-curso-routing.module';

import { ModalCursoPage } from './modal-curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCursoPageRoutingModule
  ],
  declarations: [ModalCursoPage]
})
export class ModalCursoPageModule {}
