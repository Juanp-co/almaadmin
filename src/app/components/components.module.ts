import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import {BannersLogosCardComponent} from './ajustes/banners-logos-card/banners-logos-card.component';
import {ChartComponent} from './chart/chart.component';
import {CursoscardComponent} from './cursos/cursoscard/cursoscard.component';
import {DevocionalesCardComponent} from './devocionales/devocionales-card/devocionales-card.component';
import {DevocionalesFormComponent} from './devocionales/devocionales-form/devocionales-form.component';
import {EditarInfoCursoComponent} from './cursos/editar-info-curso/editar-info-curso.component';
import {EventcardComponent} from './events/eventcard/eventcard.component';
import {EventsFormComponent} from './events/events-form/events-form.component';
import {FamiliacardComponent} from './familiacard/familiacard.component';
import {FilesUploadComponent} from './files-upload/files-upload.component';
import {GroupcardComponent} from './family-groups/groupcard/groupcard.component';
import {FamilyGroupFormComponent} from './family-groups/family-group-form/family-group-form.component';
import {LoaderListsImagesComponent} from './ajustes/loader-lists-images/loader-lists-images.component';
import {MapComponent} from './maps/map/map.component';
import {Map2Component} from './maps/map2/map2.component';
import {PaginatorComponent} from './paginator/paginator.component';
import {TemarylistComponent} from './cursos/temarylist/temarylist.component';
import {UsercardComponent} from './usercard/usercard.component';
import {UserGroupCardComponent} from './user-group-card/user-group-card.component';
import {VideoPlayerComponent} from './video-player/video-player.component';

@NgModule({
  declarations: [
    BannersLogosCardComponent,
    ChartComponent,
    CursoscardComponent,
    DevocionalesFormComponent,
    DevocionalesCardComponent,
    EditarInfoCursoComponent,
    EventcardComponent,
    EventsFormComponent,
    FamiliacardComponent,
    FamilyGroupFormComponent,
    FilesUploadComponent,
    GroupcardComponent,
    LoaderListsImagesComponent,
    MapComponent,
    Map2Component,
    PaginatorComponent,
    TemarylistComponent,
    UsercardComponent,
    UserGroupCardComponent,
    VideoPlayerComponent,
  ],
  imports: [
    CommonModule, IonicModule, CKEditorModule
  ],
  exports: [
    BannersLogosCardComponent,
    ChartComponent,
    CursoscardComponent,
    DevocionalesFormComponent,
    DevocionalesCardComponent,
    EditarInfoCursoComponent,
    EventcardComponent,
    EventsFormComponent,
    FamiliacardComponent,
    FamilyGroupFormComponent,
    FilesUploadComponent,
    GroupcardComponent,
    LoaderListsImagesComponent,
    MapComponent,
    Map2Component,
    PaginatorComponent,
    TemarylistComponent,
    UsercardComponent,
    UserGroupCardComponent,
    VideoPlayerComponent,
  ]
})
export class ComponentsModule { }
