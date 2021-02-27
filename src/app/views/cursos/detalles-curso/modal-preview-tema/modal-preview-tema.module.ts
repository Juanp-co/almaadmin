import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPreviewTemaPageRoutingModule } from './modal-preview-tema-routing.module';

import { ModalPreviewTemaPage } from './modal-preview-tema.page';
import {ComponentsModule} from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPreviewTemaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalPreviewTemaPage]
})
export class ModalPreviewTemaPageModule {}
