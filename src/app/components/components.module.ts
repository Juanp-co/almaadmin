import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {ChartComponent} from './chart/chart.component';
import {CursoscardComponent} from './cursos/cursoscard/cursoscard.component';
import {CursosPreviosCardComponent} from './cursos/cursos-previos-card/cursos-previos-card.component';
import {EditarBannerCursoComponent} from './cursos/editar-banner-curso/editar-banner-curso.component';
import {EditarInfoCursoComponent} from './cursos/editar-info-curso/editar-info-curso.component';
import {EventcardComponent} from './eventcard/eventcard.component';
import {FamiliacardComponent} from './familiacard/familiacard.component';
import {PaginatorComponent} from './paginator/paginator.component';
import {TemarylistComponent} from './cursos/temarylist/temarylist.component';
import {TestListComponent} from './cursos/test-list/test-list.component';
import {UsercardComponent} from './usercard/usercard.component';
import {UserGroupCardComponent} from './user-group-card/user-group-card.component';
import {VideoPlayerComponent} from './video-player/video-player.component';

@NgModule({
  declarations: [
    ChartComponent,
    CursoscardComponent,
    CursosPreviosCardComponent,
    EditarBannerCursoComponent,
    EditarInfoCursoComponent,
    EventcardComponent,
    FamiliacardComponent,
    PaginatorComponent,
    TemarylistComponent,
    TestListComponent,
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
    CursosPreviosCardComponent,
    EditarBannerCursoComponent,
    EditarInfoCursoComponent,
    EventcardComponent,
    FamiliacardComponent,
    PaginatorComponent,
    TemarylistComponent,
    TestListComponent,
    UsercardComponent,
    UserGroupCardComponent,
    VideoPlayerComponent,
  ]
})
export class ComponentsModule { }
