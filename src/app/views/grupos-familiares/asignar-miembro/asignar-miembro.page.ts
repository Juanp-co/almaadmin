import {Component, Input, OnInit} from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {IMiembros} from '../../miembros/miembros.model';
import {AxiosService} from '../../../services/axios.service';
import {GlobalService} from '../../../services/global.service';

@Component({
  selector: 'app-asignar-miembro',
  templateUrl: './asignar-miembro.page.html',
  styleUrls: ['./asignar-miembro.page.scss'],
})
export class AsignarMiembroPage implements OnInit {
  @Input() data: any;
  @Input() role: any;
  users: IMiembros[] = [];
  totals = 0;
  pages = 0;
  page = 1;
  selectedUser = null;
  queryParams: any = {
    limit: 100,
    page: 1,
    input: 'names',
    value: 1,
    search: null,
    // admins: 'true',
    ignoreIds: null
  };
  handleAdd = (id: string): void => this.addToSelected(id);
  handleRemove = (): void => this.removeOfSelected();

  constructor(
    private alertCtrl: AlertController,
    private axios: AxiosService,
    private globalSer: GlobalService,
    private modalCtrl: ModalController,
  ) { }

  async ngOnInit() {
    if (this.data) {
      let listIds = [];
      if (this.data.leader) listIds.push(this.data.leader._id);
      if (this.data.helper) listIds.push(this.data.helper._id);
      if (this.data.host) listIds.push(this.data.host._id);
      if (this.data.assistants) listIds = listIds.concat(this.data.assistants?.map(a => a._id) || []);
      if (this.data.master) listIds.push(this.data.master._id);
      if (listIds.length > 0) this.queryParams.ignoreIds = listIds.toString();
    }
    await this.getMembers();
  }

  async closeModal(data: any = null) {
    await this.modalCtrl.dismiss(data);
  }

  async getMembers() {
    // if (this.showFilter) this.showFilter = false;
    await this.globalSer.presentLoading();
    const res: any = await this.axios.getData('/admin/users', this.queryParams);

    if (res && res.success) {
      this.users = res.data.users;
      await this.globalSer.dismissLoading();
    }
    else {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('Alerta', res && res.error ? res.error : 'Error desconocido.');
    }
  }

  async findData() {
    await this.getMembers();
  }

  addToSelected(id: string) {
    const user = this.users.find(u => u._id === id);
    if (user) this.selectedUser = user;
  }

  removeOfSelected() {
    this.selectedUser = null;
  }

  checkAdded(id: string) {
    return this.selectedUser ? this.selectedUser._id === id : false;
  }

  async confirmSaveNewMembers() {
    if (this.selectedUser) {
      await this.globalSer.alertConfirm({
        message: `¿Está seguro qué desea agregar a este miembros al grupo?`,
        confirmAction: async () => { await this.closeModal(this.selectedUser); }
      });
    }
    else {
      await this.globalSer.presentAlert('Alerta', 'Disculpe, pero no debe seleccionar a un miembro.');
    }
  }

}
