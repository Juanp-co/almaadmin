import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-groupcard',
  templateUrl: './groupcard.component.html',
  styleUrls: ['./groupcard.component.scss'],
})
export class GroupcardComponent implements OnInit {

  @Input() data: any;
  group: any = {
    _id: null,
    name: null,
    number: null,
    sector: null,
    subSector: null
  };

  constructor() { }

  ngOnInit() {
    if (this.data) {
      this.group._id = this.data._id;
      this.group.name = this.data.name;
      this.group.number = this.data.number;
      this.group.sector = this.data.sector !== null && this.data.sector !== undefined ? this.data.sector : null;
      this.group.subSector = this.data.subSector !== null && this.data.subSector !== undefined ? this.data.subSector : null;
    }
  }

}
