import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-list-course',
  templateUrl: './content-list-course.component.html',
  styleUrls: ['./content-list-course.component.scss'],
})
export class ContentListCourseComponent implements OnInit {

  @Input() theme: any;
  @Input() handlePreviewContent: (themeId: string, contentId: string) => void;
  @Input() handleAddOrEditModal: (themeId: string, contentId: string|null) => void;
  @Input() handleBack: () => void;
  content: any = [];

  constructor() { }

  ngOnInit() {
    if (this.theme) {
      this.content = this.theme.content || [];
    }
  }

}
