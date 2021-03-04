import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ChartComponent} from './chart/chart.component';
import {ContentListCourseComponent} from './cursos/content-list-course/content-list-course.component';
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
    ContentListCourseComponent,
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
    CommonModule
  ],
  exports: [
    ChartComponent,
    ContentListCourseComponent,
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
