import {Component, Input, OnInit} from '@angular/core';
import {IMiembros} from '../miembros.model';
import {AlertController, ModalController} from '@ionic/angular';
import {AxiosService} from '../../../services/axios.service';
import {GlobalService} from '../../../services/global.service';

@Component({
  selector: 'app-asignar-consolidador',
  templateUrl: './asignar-consolidador.page.html',
  styleUrls: ['./asignar-consolidador.page.scss'],
})
export class AsignarConsolidadorPage implements OnInit {
  @Input() selectedId: any;
  @Input() role: any;
  users: IMiembros[] = [];
  totals = 0;
  pages = 0;
  page = 1;
  showRegisterButton = false;
  selectedUser = null;
  queryParams: any = {
    limit: 100,
    page: 1,
    input: 'names',
    value: 1,
    word: null,
    admins: 'true',
    ignoreIds: null
  };
  handleAdd = (id: string): void => this.addToSelected(id);
  handleRemove = (): void => this.removeOfSelected();

  constructor(
    private alertCtrl: AlertController,
    private axios: AxiosService,
    private globalSer: GlobalService,
    private modalCtrl: ModalController,
  ) {
  }

  async ngOnInit() {
    if (this.selectedId) this.queryParams.ignoreIds = this.selectedId;
    await this.getMembers();
  }

  async closeModal(data: any = null) {
    await this.modalCtrl.dismiss(data);
  }

  async getMembers() {
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
      await this.closeModal(this.selectedUser);
    }
    else {
      await this.globalSer.presentAlert('Alerta', 'Disculpe, pero no debe seleccionar a un miembro.');
    }
  }
}
