import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IglesiasPageRoutingModule } from './iglesias-routing.module';

import { IglesiasPage } from './iglesias.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IglesiasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IglesiasPage]
})
export class IglesiasPageModule {}
