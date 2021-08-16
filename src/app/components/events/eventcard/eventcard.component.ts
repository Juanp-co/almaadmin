import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import 'dayjs/locale/es';
import relativeTime from 'dayjs/plugin/relativeTime';

@Component({
  selector: 'app-eventcard',
  templateUrl: './eventcard.component.html',
  styleUrls: ['./eventcard.component.scss'],
})
export class EventcardComponent implements OnInit {

  @Input() data: any;
  eventData: any = {
    _id: null,
    title: null,
    titleLarge: null,
    user: null,
    description: null,
    date: null,
    initHour: null,
    endHour: null,
  };

  constructor(
    private router: Router,
  ) {
    dayjs.extend(duration);
    dayjs.extend(relativeTime);
  }

  ngOnInit() {
    if (this.data) {
      if (this.data.title?.length > 40) this.eventData.title = `${this.data.title.substr(0, 40)}...`;
      else this.eventData.title = this.data.title;

      this.eventData._id = this.data._id;
      this.eventData.titleLarge = this.data.title;
      this.eventData.user = this.data.user;
      this.eventData.description = this.data.description;
      this.eventData.picture = this.data.picture;
      this.eventData.date = dayjs(this.data.date).locale('es').format('dddd, DD [de] MMMM [de] YYYY');
      this.eventData.initHour = dayjs(`${this.data.date} ${this.eventData.initHour}`).format('hh:mm a');
      this.eventData.endHour = this.data.endHour ?
        dayjs(`${this.data.date} ${this.data.endHour}`).format('hh:mm a')
        : null;
    }
  }

  async goToDetails(id: string|null = null) {
    await this.router.navigate([`eventos/${id}`]);
  }
}
