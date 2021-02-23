import { Injectable } from '@angular/core';
import {AlertController, LoadingController, NavController} from '@ionic/angular';
import {CookiesService} from './cookies.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  loading;

  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private cookieService: CookiesService
  ) { }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentLoading(message: string | null = null )  {
    this.loading = await this.loadingCtrl.create({ message: message || 'Cargando...' });
    return this.loading.present();
  }

  async dismissLoading(){
    await this.loading.dismiss();
  }

  checkSession() {
    const token = this.cookieService.getCookie('token');
    if (!token) this.clearAllData();
    return !!token;
  }

  getRole() {
    const data = this.cookieService.getCookie('data');
    return data && data.role !== null && data.role !== undefined ? data.role : null;
  }

  clearAllData() {
    this.cookieService.removeCookie('token');
    this.cookieService.removeCookie('data');
    // this.presentAlert('Alerta', 'Disculpe, pero no se encontró una sesión activa.');
    // this.navCtrl.navigateBack(['/ingresar']);
  }

  async altResponse(res: any): Promise<any> {
    if (res.status && res.status === 401) {
      this.clearAllData();
      return { error: 401 };
    }

    await this.presentAlert('Alerta', res && res.error ? res.error : 'Error desconocido.');
    return null;
  }

  async errorSession() {
    await this.presentAlert('Alerta', 'Disculpe, pero no se encontró una sesión activa.');
    await this.navCtrl.navigateBack(['/ingresar']);
  }

  // get pagination
  getPagination(totalElements: number, perPage: number): number {
    let pages = totalElements > 0 ? (Math.trunc((totalElements / perPage))) : 0;
    const extraPage = totalElements > 0 ? (totalElements % perPage) > 0 : false;
    if (extraPage) pages += 1;
    return pages;
  }
}
