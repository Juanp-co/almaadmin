import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FamiliacardComponent} from './familiacard/familiacard.component';
import {EventcardComponent} from './eventcard/eventcard.component';
import {PaginatorComponent} from './paginator/paginator.component';
import {UsercardComponent} from './usercard/usercard.component';
import {UserGroupCardComponent} from './user-group-card/user-group-card.component';

@NgModule({
  declarations: [
    FamiliacardComponent,
    EventcardComponent,
    PaginatorComponent,
    UsercardComponent,
    UserGroupCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FamiliacardComponent,
    EventcardComponent,
    PaginatorComponent,
    UsercardComponent,
    UserGroupCardComponent,
  ]
})
export class ComponentsModule { }
