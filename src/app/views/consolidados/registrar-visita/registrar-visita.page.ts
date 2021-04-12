import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import dayjs from 'dayjs';
import {GlobalService} from '../../../services/global.service';
import {ConsolidadosService} from '../consolidados.service';
import {Router} from '@angular/router';
import {MiembrosConsolidadosPage} from '../miembros-consolidados/miembros-consolidados.page';

@Component({
  selector: 'app-registrar-visita',
  templateUrl: './registrar-visita.page.html',
  styleUrls: ['./registrar-visita.page.scss'],
})
export class RegistrarVisitaPage implements OnInit {

  formData: any = {
    userId: null,
    observation: null,
    date: null
  };
  memberSelected: any = null;
  members: any[] = [];
  minInitDate: string = dayjs('2020-01-01').format('YYYY-MM-DD');
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
    data.date = dayjs(data.date).format('YYYY-MM-DD');

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

  async showMembersModal() {
    await this.globalSer.presentLoading();
    const update = (data: any) => {
      if (data) {
        this.memberSelected = data;
        this.formData.userId = data._id;
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

  async confirmClose() {
    await this.globalSer.alertConfirm({
      message: `¿Está seguro qué desea cancelar el registro de la visita?`,
      confirmAction: async () => { await this.back(); }
    });
  }

  async confirmSave() {
    await this.globalSer.alertConfirm({
      message: `¿Está seguro qué desea guardar la información suministrada de la visita?`,
      confirmAction: async () => { await this.saveVisit(); }
    });
  }
}
