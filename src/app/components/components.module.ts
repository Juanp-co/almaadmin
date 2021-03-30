import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {ChartComponent} from './chart/chart.component';
import {CursoscardComponent} from './cursos/cursoscard/cursoscard.component';
import {EditarInfoCursoComponent} from './cursos/editar-info-curso/editar-info-curso.component';
import {EventcardComponent} from './eventcard/eventcard.component';
import {FamiliacardComponent} from './familiacard/familiacard.component';
import {PaginatorComponent} from './paginator/paginator.component';
import {TemarylistComponent} from './cursos/temarylist/temarylist.component';
import {UsercardComponent} from './usercard/usercard.component';
import {UserGroupCardComponent} from './user-group-card/user-group-card.component';
import {VideoPlayerComponent} from './video-player/video-player.component';

@NgModule({
  declarations: [
    ChartComponent,
    CursoscardComponent,
    EditarInfoCursoComponent,
    EventcardComponent,
    FamiliacardComponent,
    PaginatorComponent,
    TemarylistComponent,
    UsercardComponent,
    UserGroupCardComponent,
    VideoPlayerComponent,
  ],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [
    ChartComponent,
    CursoscardComponent,
    EditarInfoCursoComponent,
    EventcardComponent,
    FamiliacardComponent,
    PaginatorComponent,
    TemarylistComponent,
    UsercardComponent,
    UserGroupCardComponent,
    VideoPlayerComponent,
  ]
})
export class ComponentsModule { }
