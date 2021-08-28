import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import dayjs from 'dayjs';
import {GlobalService} from '../../../services/global.service';
import {ConsolidadosService} from '../consolidados.service';
import {Router} from '@angular/router';
import {MiembrosConsolidadosPage} from '../miembros-consolidados/miembros-consolidados.page';
import {setSaltLinesOrBr} from '../../../../Utils/validations.functions';

@Component({
  selector: 'app-registrar-visita',
  templateUrl: './registrar-visita.page.html',
  styleUrls: ['./registrar-visita.page.scss'],
})
export class RegistrarVisitaPage implements OnInit {

  formData: any = {
    userId: null,
    visitor: null,
    observation: null,
    action: 0,
    date: null,
  };
  iAmVisitor = true;
  listActions: string[] = ['Visita', 'Llamada'];
  memberSelected: any = null;
  memberVisitor: any = null;
  members: any[] = [];
  maxInitDate: string = dayjs().format('YYYY-MM-DD');

  constructor(
    private globalSer: GlobalService,
    private consolidadosService: ConsolidadosService,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private router: Router,
  ) { }

  async ngOnInit() {
    if (!this.globalSer.checkSession()) await this.router.navigate(['/ingresar']);
    else await this.getMembers();
  }

  async getMembers() {
    await this.globalSer.presentLoading();

    const data = await this.consolidadosService.getConsolidatesMembers();

    if (data && !data.error) {
      this.members = data;
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async saveVisit() {
    await this.globalSer.presentLoading('Guardando, por favor espere...');
    const data: any = {...this.formData};
    data.date = data.date.substr(0, 10);
    data.observation = `${setSaltLinesOrBr(data.observation, true)}`.toUpperCase();
    data.userId = this.memberSelected?._id;
    data.visitor = this.memberVisitor?._id || null;

    const created = await this.consolidadosService.saveConsolidateReport(data);

    if (created && !created.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', created || 'Se ha registrado la visita exitosamente.');
      await this.back();
    }
    else if (created && created.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

  async back() {
    await this.navCtrl.back();
  }

  setCheckedValue() {
    this.iAmVisitor = !this.iAmVisitor;
  }

  async showMembersModal(type = 'member') {
    await this.globalSer.presentLoading();
    const update = (data: any) => {
      if (data) {
        if (type === 'member') this.memberSelected = data;
        else this.memberVisitor = data;
      }
    };
    await this.globalSer.dismissLoading();
    await this.globalSer.loadModal(
      MiembrosConsolidadosPage,
      {
        data: this.members,
        selectedUser: this.memberSelected || null,
      },
      true,
      update
    );
  }

  getConsolidatorsNames() {
    return this.memberSelected ? `${this.memberSelected.names} ${this.memberSelected.lastNames}` : null;
  }

  getMemberVisitorNames() {
    return this.memberVisitor ?
      `${this.memberVisitor.names} ${this.memberVisitor.lastNames}`
      : null;
  }

  validate() {
    const { action, date, observation } = this.formData;
    if (!this.memberSelected) return 'Disculpe, pero seleccionar al miembro que fue visitado.';
    if (!date) return 'Disculpe, pero debe indicar la fecha en la que se realizó la visita.';
    if (action === null) return 'Disculpe, pero debe seleccionar la acción realizda en la visita.';
    if (!observation || observation?.length < 5) return 'Disculpe, pero debe indicar una observación válida para la visita.';
    if (!this.iAmVisitor && !this.memberVisitor) return 'Disculpe, pero debe seleccionar al miembro que realizó la visita.';
    return null;
  }

  async confirmClose() {
    await this.globalSer.alertConfirm({
      message: `¿Está seguro qué desea cancelar el registro de la visita?`,
      confirmAction: async () => { await this.back(); }
    });
  }

  async confirmSave() {
    const validated = this.validate();

    if (!validated) {
      await this.globalSer.alertConfirm({
        message: `¿Está seguro qué desea guardar la información suministrada de la visita?`,
        confirmAction: async () => { await this.saveVisit(); }
      });
    }
    else await this.globalSer.presentAlert('Alerta', validated);
  }
}
