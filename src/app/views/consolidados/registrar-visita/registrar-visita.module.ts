import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarVisitaPageRoutingModule } from './registrar-visita-routing.module';

import { RegistrarVisitaPage } from './registrar-visita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarVisitaPageRoutingModule
  ],
  declarations: [RegistrarVisitaPage]
})
export class RegistrarVisitaPageModule {}
