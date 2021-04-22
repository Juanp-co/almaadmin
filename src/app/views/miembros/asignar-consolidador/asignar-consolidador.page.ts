import {Component, Input, OnInit} from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {IMiembros} from '../miembros.model';
import {MiembrosService} from '../miembros.service';
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
  selectedUser = null;
  init = true;
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
    private miembrosService: MiembrosService,
    private modalCtrl: ModalController,
  ) { }

  async ngOnInit() {
    if (this.selectedId) this.queryParams.ignoreIds = this.selectedId;
  }

  async closeModal(data: any = null) {
    await this.modalCtrl.dismiss(data);
  }

  async getMembers() {
    await this.globalSer.presentLoading();
    if (this.init) this.init = false;
    this.users = [];
    this.selectedUser = null;
    const data: any = await this.miembrosService.getMembersList(this.queryParams);

    if (data && !data.error) {
      this.users = data || [];
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
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

  cleanData() {
    this.users = [];
    this.queryParams.word = null;
    this.selectedUser = null;
    this.init = true;
  }

  checkAdded(id: string) {
    return this.selectedUser ? this.selectedUser._id === id : false;
  }

  async confirmSaveNewMembers() {
    if (this.selectedUser) await this.closeModal(this.selectedUser);
    else await this.globalSer.presentAlert('Alerta', 'Disculpe, pero debe seleccionar a un miembro.');
  }
}
