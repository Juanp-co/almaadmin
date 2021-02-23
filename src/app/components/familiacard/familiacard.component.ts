import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-familiacard',
  templateUrl: './familiacard.component.html',
  styleUrls: ['./familiacard.component.scss'],
})
export class FamiliacardComponent implements OnInit {

  @Input() data: any;
  group: any = {
    _id: null,
    name: null,
    code: null,
    totalMembers: 0
  };

  constructor() { }

  ngOnInit() {
    if (this.data) {
      this.group._id = this.data._id;
      this.group.name = this.data.name;
      this.group.code = this.data.code;
      this.group.totalMembers = this.data.totalMembers || 0;
    }
  }

}
