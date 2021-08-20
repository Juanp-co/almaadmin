import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AxiosService} from './services/axios.service';
import {CookiesService} from './services/cookies.service';
import {GlobalService} from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Miembros', url: '/miembros', icon: 'people' },
    { title: 'Consolidados', url: '/consolidados', icon: 'id-card' },
    { title: 'Familias', url: '/familias', icon: 'people-circle' },
    { title: 'Grupos familiares', url: '/grupos-familiares', icon: 'list' },
    { title: 'Cursos', url: '/cursos', icon: 'desktop' },
    { title: 'Eventos', url: '/eventos', icon: 'calendar-number' },
    { title: 'Cuentas bancarias', url: '/cuentas-bancarias', icon: 'cash' },
    { title: 'Mi cuenta', url: '/mi-cuenta', icon: 'person-circle' },
    { title: 'Ajustes', url: '/ajustes', icon: 'settings' },
    // { title: 'Informes', url: '/informes', icon: 'bar-chart' },
  ];
  session: any = null;
  userData: any = null;

  constructor(
    public axios: AxiosService,
    public cookieService: CookiesService,
    public globalSer: GlobalService,
    public router: Router,
  ) {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/ingresar']);
    else this.getDataLogin();
  }

  async getDataLogin() {
    const data = this.cookieService.getCookie('data');

    if (!data) {
      const res: any = await this.axios.getData('/user');

      if (res && res.success) {
        this.session = true;
        this.userData = res.data.data;
        this.cookieService.setCookie('data', res.data.data);
      }
      else {
        if (res && res.status && res.status === 401) {
          this.session = false;
          this.cookieService.removeCookie('token');
          await this.router.navigate(['/ingresar']);
        }
        await this.globalSer.presentAlert('Alerta', res.error);
      }
    }
    else {
      this.userData = data;
      this.session = true;
    }
  }

  async salir() {
    await this.globalSer.presentLoading();
    await this.axios.deleteData('/logout');
    this.session = false;
    this.userData = null;
    this.cookieService.removeCookie('token');
    this.cookieService.removeCookie('data');
    await this.globalSer.dismissLoading();
    await this.router.navigate(['/ingresar']);
  }

}
