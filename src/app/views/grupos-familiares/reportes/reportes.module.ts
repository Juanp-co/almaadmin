import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData  } from '@angular/common';
import localeCo from '@angular/common/locales/es-CO';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReportesPageRoutingModule } from './reportes-routing.module';
import { ReportesPage } from './reportes.page';
import {ComponentsModule} from '../../../components/components.module';
registerLocaleData(localeCo);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ReportesPage]
})
export class ReportesPageModule {}
