import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ContentListCourseComponent} from './content-list-course/content-list-course.component';
import {CursoscardComponent} from './cursoscard/cursoscard.component';
import {CursosPreviosCardComponent} from './cursos-previos-card/cursos-previos-card.component';
import {EventcardComponent} from './eventcard/eventcard.component';
import {FamiliacardComponent} from './familiacard/familiacard.component';
import {PaginatorComponent} from './paginator/paginator.component';
import {TemarylistComponent} from './temarylist/temarylist.component';
import {TestListComponent} from './test-list/test-list.component';
import {UsercardComponent} from './usercard/usercard.component';
import {UserGroupCardComponent} from './user-group-card/user-group-card.component';
import {VideoPlayerComponent} from './video-player/video-player.component';

@NgModule({
  declarations: [
    ContentListCourseComponent,
    CursoscardComponent,
    CursosPreviosCardComponent,
    FamiliacardComponent,
    EventcardComponent,
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
    ContentListCourseComponent,
    CursoscardComponent,
    CursosPreviosCardComponent,
    FamiliacardComponent,
    EventcardComponent,
    PaginatorComponent,
    TemarylistComponent,
    TestListComponent,
    UsercardComponent,
    UserGroupCardComponent,
    VideoPlayerComponent,
  ]
})
export class ComponentsModule { }
