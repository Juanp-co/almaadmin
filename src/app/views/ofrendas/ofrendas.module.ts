import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfrendasPageRoutingModule } from './ofrendas-routing.module';

import { OfrendasPage } from './ofrendas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfrendasPageRoutingModule
  ],
  declarations: [OfrendasPage]
})
export class OfrendasPageModule {}
