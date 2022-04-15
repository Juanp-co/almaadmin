import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-iglesias-card',
  templateUrl: './iglesias-card.component.html',
  styleUrls: ['./iglesias-card.component.scss'],
})
export class IglesiasCardComponent implements OnInit {

  @Input() church;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  goTo(id: string) {
    this.router.navigate([`iglesias/${id}`]);
  }

}
