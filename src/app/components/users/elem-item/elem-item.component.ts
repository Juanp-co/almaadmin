import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-elem-item',
  templateUrl: './elem-item.component.html',
  styleUrls: ['./elem-item.component.scss'],
})
export class ElemItemComponent implements OnInit {

  @Input() label: any;
  @Input() value: any;
  @Input() show = true;

  constructor() { }

  ngOnInit() {}

}
