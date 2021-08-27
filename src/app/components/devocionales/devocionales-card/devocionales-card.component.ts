import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

@Component({
  selector: 'app-devocionales-card',
  templateUrl: './devocionales-card.component.html',
  styleUrls: ['./devocionales-card.component.scss'],
})
export class DevocionalesCardComponent implements OnInit {

  @Input() item: any;

  model: any = {
    _id: null,
    picture: null,
    title: null,
    sortTitle: null,
    created_at: null,
  };

  constructor(
    private router: Router
  ) {
    dayjs.extend(duration);
    dayjs.extend(relativeTime);
  }

  ngOnInit() {
    if (this.item) {
      this.model._id = this.item._id;
      this.model.title = this.item.title;
      this.model.sortTitle = this.item.title?.length > 25 ? `${this.item.title.substr(0, 25)} ...` : this.item.title;
      this.model.picture = this.item.picture || null;
      this.model.created_at = dayjs(this.item.created_at, 'YYYY-MM-DD HH:mm:ss', true)
        .locale('es')
        .format('dddd, DD [de] MMMM [de] YYYY hh:mm a');
    }
  }

  goTo(id: string) {
    this.router.navigate([`devocionales/${id}`]);
  }

}
