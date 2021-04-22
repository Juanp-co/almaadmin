import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CookiesService} from '../../services/cookies.service';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss'],
})
export class UsercardComponent implements OnInit {

  @Input() data: any;
  @Input() list = false;
  @Input() goDetails = true;
  sessionUserId: any;
  showButton = false;
  member: any = null;

  constructor(
    private router: Router,
    private cookiesService: CookiesService,
    public globalSer: GlobalService,
  ) {
    const dataLogin: any = this.cookiesService.getCookie('data');
    if (dataLogin) this.sessionUserId = dataLogin._id;
  }

  ngOnInit() {
    this.member = this.data;
    if (this.member && this.member._id && this.goDetails) {
      this.showButton = this.sessionUserId !== this.member._id;
    }
  }

  async goToDetails(id: string|null = null) {
    await this.router.navigate([`miembros/${id}`]);
  }

}
