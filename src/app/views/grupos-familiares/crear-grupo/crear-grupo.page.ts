import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {GruposService} from '../grupos.service';
import {GlobalService} from '../../../services/global.service';
import {onlyNumbersInputValidation2} from '../../../../Utils/validations.functions';

@Component({
  selector: 'app-crear-grupo',
  templateUrl: './crear-grupo.page.html',
  styleUrls: ['./crear-grupo.page.scss'],
})
export class CrearGrupoPage implements OnInit {

  formData: any = {
    sector: null,
    subSector: null,
    number: null,
    direction: null,
  };

  constructor(
    private globalSer: GlobalService,
    private gruposService: GruposService,
    private navCtrl: NavController,
  ) {}

  ngOnInit() {
  }

  async createGroup() {
    await this.globalSer.presentLoading('Registrando grupo, por favor espere ...');
    const created = await this.gruposService.saveGroup({...this.formData});

    if (created && !created.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', created || 'Se ha registrado el grupo exitosamente.');
      await this.back();
    }
    else if (created && created.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async back() {
    await this.navCtrl.back();
  }

  validateOnlyNumber(event: any) {
    onlyNumbersInputValidation2(event);
  }

  async confirmCancel() {
    await this.globalSer.alertConfirm({
      header: 'Confirme',
      message: '¿Está seguro qué desea cancelar el registro del nuevo grupo?',
      confirmAction: () => this.back()
    });
  }

  async confirmCreate() {
    const validated = this.gruposService.validateDataGroup(this.formData);

    if (validated) await this.globalSer.presentAlert('Alerta', validated);
    else {
      await this.globalSer.alertConfirm({
        header: 'Confirme',
        message: '¿Está seguro qué desea agregar el nuevo grupo con esta información?',
        confirmAction: () => this.createGroup()
      });
    }
  }

}
