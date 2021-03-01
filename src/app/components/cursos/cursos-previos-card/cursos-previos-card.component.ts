import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cursos-previos-card',
  templateUrl: './cursos-previos-card.component.html',
  styleUrls: ['./cursos-previos-card.component.scss'],
})
export class CursosPreviosCardComponent implements OnInit {

  @Input() course: any;
  @Input() add = false;
  @Input() added = false;
  @Input() handleAddRemove: (levelId: string) => void;
  @Input() handleDelete: (levelId: string) => void;

  constructor() { }

  ngOnInit() {

  }

}
