import { Injectable } from '@angular/core';
import {AlertController, LoadingController, ModalController, NavController} from '@ionic/angular';
import {CookiesService} from './cookies.service';
import {ModalCursosPreviosPage} from '../views/cursos/detalles-curso/modal-cursos-previos/modal-cursos-previos.page';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  loading;
  configEditor: any = {
    toolbar: [
      'heading', '|',
      'bold', 'italic', '|',
      'outdent', 'indent', '|',
      'bulletedList', 'numberedList', '|',
      'blockQuote', '|',
      'undo', 'redo'
    ],
    heading: {
      options: [
        { model: 'paragraph', title: 'Parrafo', class: 'ck-heading_paragraph' },
        { model: 'heading1', view: 'h1', title: 'Título 1', class: 'ck-heading_heading1' },
        { model: 'heading2', view: 'h2', title: 'Título 2', class: 'ck-heading_heading2' },
        { model: 'heading3', view: 'h3', title: 'Título 3', class: 'ck-heading_heading3' },
        { model: 'heading4', view: 'h4', title: 'Título 4', class: 'ck-heading_heading4' },
        { model: 'heading5', view: 'h5', title: 'Título 5', class: 'ck-heading_heading5' },
      ]
    },
    shouldNotGroupWhenFull: true,
    placeholder: 'Indica la descripción aquí ...'
  };

  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private modalController: ModalController,
    private navCtrl: NavController,
    private cookieService: CookiesService
  ) { }

  /*
    ALERTS
   */
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

  async dismissLoading() {
    await this.loading.dismiss();
  }

  /*
    ALERTS
   */

  /**
   * @param header Title
   * @param message Message
   * @param confirmAction Function confirm
   * @param rejectAction Function reject
   * @return Promise<void>
   */
  async alertConfirm(
    { header, message, confirmAction, rejectAction }:
    { header?: string|null, message: string|null, confirmAction?: any, rejectAction?: any }
  ) {
    const alert = await this.alertCtrl.create({
      header: header || 'Confirme',
      message: message || '¿Está seguro?',
      buttons: [
        { text: 'Cancelar', role: 'cancel', handler: () => { if (!!rejectAction) rejectAction(); } },
        { text: 'Sí', handler: () => { if (!!confirmAction) confirmAction(); }}
      ]
    });
    await alert.present();
  }

  async alertWithList(
    { header, inputs, confirmAction, rejectAction }:
    { header?: string|null, inputs: any[], confirmAction: any, rejectAction?: any }
  ) {
    const alert = await this.alertCtrl.create({
      header: header || 'Seleccione',
      inputs,
      buttons: [
        { text: 'Cancelar', role: 'cancel', handler: () => { if (!!rejectAction) rejectAction(); } },
        { text: 'Ok', handler: (selectedValue) => { if (!!confirmAction) confirmAction(selectedValue); } }
      ]
    });
    await alert.present();
  }

  /*
    GLOBAL ACTION MODAL
   */

  /**
   * @param component Page to show.
   * @param componentProps Data pass to component.
   * @param backdropDismiss Click out modal to close.
   * @param actionUpdatedData Function to do action with data returned when the modal is closed.
   * @return Promise void return
   */
  async loadModal(component: any, componentProps: any = {}, backdropDismiss = true, actionUpdatedData: any = null): Promise<void> {
    if (component) {
      const modal = await this.modalController.create({
        component,
        componentProps,
        backdropDismiss
      });

      modal.present();

      if (!!actionUpdatedData) {
        const { data } = await modal.onWillDismiss();
        if (data) actionUpdatedData(data);
      }
    }
  }

  /*
    COOKIES ACTIONS, SESSION AND RESPONSE AXIOS REDUCE
   */

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
    if (res && res.status && res.status === 401) {
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

  /*
    PAGINATION
   */
  getPagination(totalElements: number, perPage: number): number {
    let pages = totalElements > 0 ? (Math.trunc((totalElements / perPage))) : 0;
    const extraPage = totalElements > 0 ? (totalElements % perPage) > 0 : false;
    if (extraPage) pages += 1;
    return pages;
  }
}
