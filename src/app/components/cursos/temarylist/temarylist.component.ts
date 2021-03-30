import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-temarylist',
  templateUrl: './temarylist.component.html',
  styleUrls: ['./temarylist.component.scss'],
})
export class TemarylistComponent implements OnInit {

  @Input() temary: any = [];
  @Input() enableActions = false;
  @Input() handlePreview: (themeId: string) => void;
  @Input() handleEditTheme: (themeId: string, quiz: boolean) => void;
  @Input() handleDeleteTheme: (themeId: string) => void;
  @Input() handleEditContent: (themeId: string, contentId: string|null) => void;
  @Input() handleDeleteContent: (themeId: string, contentId: string) => void;
  viewsT: any = {};
  listsIdsForViews: any = [];

  constructor() { }

  ngOnInit() {
    if (this.temary.length > 0) {
      this.listsIdsForViews = this.temary.map(t => t._id);
      this.listsIdsForViews.forEach(i => this.viewsT[i] = false);
    }
  }

}
