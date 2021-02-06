import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaseexamenPageRoutingModule } from './claseexamen-routing.module';

import { ClaseexamenPage } from './claseexamen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaseexamenPageRoutingModule
  ],
  declarations: [ClaseexamenPage]
})
export class ClaseexamenPageModule {}
