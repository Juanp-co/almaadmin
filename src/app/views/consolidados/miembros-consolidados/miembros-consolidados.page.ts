import {Component, Input, OnInit} from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {AxiosService} from '../../../services/axios.service';
import {GlobalService} from '../../../services/global.service';

@Component({
  selector: 'app-miembros-consolidados',
  templateUrl: './miembros-consolidados.page.html',
  styleUrls: ['./miembros-consolidados.page.scss'],
})
export class MiembrosConsolidadosPage implements OnInit {
  @Input() data: any[];
  @Input() selectedUser: any = null;

  word: string|null = null;
  listFilter: any[] = [];

  handleAdd = (id: string): void => this.addToSelected(id);
  handleRemove = (): void => this.removeOfSelected();


  constructor(
    private alertCtrl: AlertController,
    private axios: AxiosService,
    private globalSer: GlobalService,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.listFilter = this.data || [];
  }

  async closeModal(data: any = null) {
    await this.modalCtrl.dismiss(data);
  }

  addToSelected(id: string) {
    const user = this.data.find(u => u._id === id);
    if (user) this.selectedUser = user;
  }

  removeOfSelected() {
    this.selectedUser = null;
  }

  checkAdded(id: string) {
    return this.selectedUser ? this.selectedUser._id === id : false;
  }

  findMember() {
    if (this.word) {
      const term = new RegExp(this.word, 'i');
      this.listFilter = this.data.filter(d => {
        return term.exec(d.names) || term.exec(d.lastNames) || term.exec(d.phone) || term.exec(d.document);
      });
    }
    else this.listFilter = this.data;
  }

  async confirmAdd() {
    if (this.selectedUser) await this.closeModal(this.selectedUser);
    else {
      await this.globalSer.presentAlert('Alerta', 'Disculpe, pero no debe seleccionar a un miembro.');
    }
  }

}
