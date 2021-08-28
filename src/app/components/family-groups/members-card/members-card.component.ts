import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-members-card',
  templateUrl: './members-card.component.html',
  styleUrls: ['./members-card.component.scss'],
})
export class MembersCardComponent implements OnInit {

  @Input() data: any;
  @Input() title: string|null;
  @Input() role: string|null;
  @Input() handleDelete: (args: string) => void;
  @Input() handleAdd: (args: string) => void;
  @Input() handleRemove: (args: string) => void;

  constructor() { }

  ngOnInit() {}

}
