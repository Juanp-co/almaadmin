import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasevideoPageRoutingModule } from './clasevideo-routing.module';

import { ClasevideoPage } from './clasevideo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasevideoPageRoutingModule
  ],
  declarations: [ClasevideoPage]
})
export class ClasevideoPageModule {}
