import { Component, OnInit } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {AlertController, NavController} from '@ionic/angular';
import {CookiesService} from '../../services/cookies.service';
import {Router} from '@angular/router';
import {GlobalService} from '../../services/global.service';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {

  session: any = false;
  phone = '';
  pass = '';

  constructor(
    private alertCtrl: AlertController,
    private axios: AxiosService,
    private cookieService: CookiesService,
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private router: Router,
    private globalComponent: AppComponent,
  ) {
  }

  async ngOnInit() {
    if (this.globalSer.checkSession())
      this.router.navigate(['/inicio']);
    else {
      this.globalComponent.session = false;
      this.globalComponent.userData = null;
    }
  }

  async ionViewWillEnter() {
    if (this.globalSer.checkSession())
      this.router.navigate(['/inicio']);
    else {
      this.globalComponent.session = false;
      this.globalComponent.userData = null;
    }
  }

  async ingresar() {
    if (this.pass && this.phone) {
      await this.globalSer.presentLoading();

      const res: any = await this.axios.postData(
        '/login',
        { phone: this.phone, password: this.pass, admin: true }
      );

      if (res && res.success) {
        const { data, token } = res.data;
        this.cookieService.setCookie('token', token);
        this.cookieService.setCookie('data', data);
        this.globalComponent.session = true;
        this.globalComponent.userData = data;
        await this.globalSer.dismissLoading();
        await this.router.navigate(['/inicio']);
      }
      else {
        this.phone = null;
        this.pass = null;
        await this.globalSer.dismissLoading();
        await this.globalSer.presentAlert('Alerta', res && res.error ? res.error : 'Error desconocido.');
      }
    } else {
      await this.globalSer.presentAlert('Alerta', 'Asegúrese de indicar su usuario y contraseña.');
    }
  }

}
