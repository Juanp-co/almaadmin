import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPreviewPruebaPageRoutingModule } from './modal-preview-prueba-routing.module';

import { ModalPreviewPruebaPage } from './modal-preview-prueba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPreviewPruebaPageRoutingModule
  ],
  declarations: [ModalPreviewPruebaPage]
})
export class ModalPreviewPruebaPageModule {}
