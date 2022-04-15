import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {GlobalService} from '../../../services/global.service';
import {ActivatedRoute} from '@angular/router';
import {IglesiasService} from '../iglesias.service';
import {CookiesService} from '../../../services/cookies.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  id: any = null;
  church: any = null;
  title = 'Cargando ...';
  showEditForm = false;

  constructor(
    private activateRoute: ActivatedRoute,
    private cookieService: CookiesService,
    private globalSer: GlobalService,
    private iglesiasService: IglesiasService,
    private navCtrl: NavController,
  ) { }

  async ngOnInit() {
    await this.globalSer.presentLoading();
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    const data: any = await this.iglesiasService.getChurch(this.id);

    if (data && !data.error) {
      this.church = data;
      this.title = data.name;
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async updateData(formData) {
    await this.globalSer.presentLoading();
    const data = await this.iglesiasService.updateChurch(this.id, formData);

    if (data && !data.error) {
      this.church = { ...this.church, ...data.church };
      // update data churches list
      const churches = await this.cookieService.getCookie('churches');
      const index = churches.findIndex(c => c._id === this.id);
      if (index > -1) {
        churches[index] = { ...churches[index], ...{ name: data.church.name } };
      }
      else churches.push(data.church);
      await this.cookieService.setCookie('churches', churches);
      await this.globalSer.dismissLoading();
      this.setShowEditForm();
      await this.globalSer.presentAlert(
        '¡Éxito!',
        data.msg || 'Se ha actualizado la información de la iglesia exitosamente.'
      );
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async deleteData() {
    await this.globalSer.presentLoading();
    const data = await this.iglesiasService.removeChurch(this.id);

    if (data && !data.error) {
      const churches = await this.cookieService.getCookie('churches');
      const list = churches.filter(c => c._id !== this.id);
      await this.cookieService.setCookie('churches', list);
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert(
        '¡Éxito!',
        data.msg || 'Se ha eliminado la iglesia exitosamente.'
      );
      this.back();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async back() {
    await this.navCtrl.back();
  }

  setShowEditForm() {
    this.showEditForm = !this.showEditForm;
  }

  getParamsToMap() {
    return [
      {
        type: 'Feature',
        geometry: this.church.location
      }
    ];
  }

  async confirmDeleteAction() {
    await this.globalSer.alertConfirm({
      header: '¡Confirme!',
      message: '¿Está seguro qué desea esta iglesia?' +
        '<br><br>NOTA: Todos los miembros asociados a esta iglesia serán asignados a la iglesia principal.',
      confirmAction: () => this.deleteData()
    });
  }

  handleCancel = (): void => this.setShowEditForm();
  handleSubmit = (data: any) => this.updateData(data);

}
