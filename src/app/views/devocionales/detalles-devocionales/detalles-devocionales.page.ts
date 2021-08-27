import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DevocionalesService} from '../devocionales.service';
import {GlobalService} from '../../../services/global.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-detalles-devocionales',
  templateUrl: './detalles-devocionales.page.html',
  styleUrls: ['./detalles-devocionales.page.scss'],
})
export class DetallesDevocionalesPage implements OnInit {

  id: string|null = null;
  showEditForm = false;
  devotional: any = null;

  constructor(
    private activateRoute: ActivatedRoute,
    private devocionalesService: DevocionalesService,
    private globalSer: GlobalService,
    private navCtrl: NavController,
  ) { }

  async ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');

    if (this.id) await this.getDevotionalData();
    else {
      await this.globalSer.presentAlert(
        'Alerta',
        'Disculpe, pero ha ocurrido un error al momento de obtener la información.'
      );
      await this.navCtrl.back();
    }
  }

  async getDevotionalData() {
    await this.globalSer.presentLoading();
    const data: any = await this.devocionalesService.getDetails(this.id);

    if (data && !data.error) {
      this.devotional = data;
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async remove() {
    await this.globalSer.presentLoading();
    const data: any = await this.devocionalesService.remove(this.id);

    if (data && !data.error) {
      const { msg } = data || {};
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert(
        '¡Éxito!',
        msg || 'Se ha eliminado el devocional exitosamente.'
      );
      await this.goBack();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  setShowEditForm() {
    this.showEditForm = !this.showEditForm;
  }

  async confirmCancel() {
    await this.globalSer.alertConfirm({
      header: 'Confirme',
      message: '¿Está seguro qué desea salir del formulario sin guardar los cambios?',
      confirmAction: () => this.setShowEditForm()
    });
  }

  async confirmRemove() {
    await this.globalSer.alertConfirm({
      header: 'Confirme',
      message: '¿Está seguro qué desea eliminar este devocional?',
      confirmAction: () => this.remove()
    });
  }

  async goBack() {
    await this.navCtrl.back();
  }

  handleCancel = (): void => this.setShowEditForm();
  handleSave = (data: any): void => {
    this.devotional = {...this.devotional, ...data};
    this.setShowEditForm();
  };

}
