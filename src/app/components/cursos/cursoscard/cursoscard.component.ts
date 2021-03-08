import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {setSaltLinesOrBr} from '../../../../Utils/validations.functions';

@Component({
  selector: 'app-cursoscard',
  templateUrl: './cursoscard.component.html',
  styleUrls: ['./cursoscard.component.scss'],
})
export class CursoscardComponent implements OnInit {

  @Input() course: any;
  @Input() list: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if (this.course) {
      this.course.description = this.changePerBr(this.course.description);
    }
  }

  async goToDetails(id: string) {
    await this.router.navigate([`cursos/${id}`]);
  }

  changePerBr(value: string|null) {
    return value ? setSaltLinesOrBr(value) : 'SIN DESCRIPCIÓN';
  }

}
