import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AxiosService} from '../../services/axios.service';
import {CookiesService} from '../../services/cookies.service';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-ofrendas',
  templateUrl: './ofrendas.page.html',
  styleUrls: ['./ofrendas.page.scss'],
})
export class OfrendasPage implements OnInit {

  constructor(
    private axios: AxiosService,
    private cookieService: CookiesService,
    private globalSer: GlobalService,
    private router: Router,
  ) {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/ingresar']);
  }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    if (!this.globalSer.checkSession())
      this.router.navigate(['/ingresar']);
  }

}
