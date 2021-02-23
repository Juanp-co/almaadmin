import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AxiosService} from '../../services/axios.service';
import {CookiesService} from '../../services/cookies.service';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage implements OnInit {

  nombreCurso: string = "Nombre del Curso";

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
