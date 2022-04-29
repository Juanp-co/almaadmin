import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DocumentosService} from './documentos.service';
import {GlobalService} from '../../services/global.service';
import {NavController} from '@ionic/angular';
import {CookiesService} from '../../services/cookies.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.page.html',
  styleUrls: ['./documentos.page.scss'],
})
export class DocumentosPage implements OnInit {

  documents: any = null;
  list: any = null;
  showOwn = false;
  userData: any = null;

  constructor(
    private documentosService: DocumentosService,
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private cookiesService: CookiesService
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    if (!this.userData) this.userData = await this.cookiesService.getCookie('data');
    this.getDocuments();
  }

  async getDocuments() {
    await this.globalSer.presentLoading();
    const data: any = await this.documentosService.getResources();

    if (data && !data.error) {
      this.documents = data;
      this.getListToShow();
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async deleteDocument(id) {
    await this.globalSer.presentLoading();
    const data: any = await this.documentosService.deleteResources(id);

    if (data && !data.error) {
      this.documents = this.documents.filter(d => d._id !== id);
      this.getListToShow();
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', 'Se ha eliminado el documento exitosamente.');
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  getListToShow() {
    if (this.showOwn) this.list = this.documents.filter(d => d.user?._id === this.userData._id);
    else this.list = this.documents;
  }

  async goToCreate() {
    await this.navCtrl.navigateForward(`/documentos/subir`);
  }

  removeDocument = (id: any): void => { this.deleteDocument(id); };
}
