import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss'],
})
export class TestListComponent implements OnInit {

  @Input() data: any = [];
  @Input() enableActions = false;
  @Input() handlePreview: (themeId: string) => void;
  @Input() handleEditQuestion: (themeId: string, questionId: string) => void;
  @Input() handleDeleteQuestion: (themeId: string, questionId: string) => void;
  viewsT: any = {};
  listsIdsForViews: any = [];

  constructor() { }

  ngOnInit() {
    if (this.data.length > 0) {
      this.listsIdsForViews = this.data.map(t => t._id);
      this.listsIdsForViews.forEach(i => this.viewsT[i] = false);
    }
  }

}
