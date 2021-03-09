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
  showButton = false;
  member: any = null;

  constructor(
    private router: Router,
    private cookiesService: CookiesService,
    public globalSer: GlobalService,
  ) { }

  ngOnInit() {
    this.member = this.data;
    if (this.member && this.member._id) {
      this.showButton = this.checkIdMember(this.member._id);
    }
  }

  checkIdMember(id: string): boolean {
    const dataLogin: any = this.cookiesService.getCookie('data');
    if (dataLogin) {
      return dataLogin._id !== id;
    }
    return false;
  }

  async goToDetails(id: string|null = null) {
    await this.router.navigate([`miembros/${id}`]);
  }

}
