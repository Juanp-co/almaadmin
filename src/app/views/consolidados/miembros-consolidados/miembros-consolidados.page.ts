import {Component, Input, OnInit} from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {AxiosService} from '../../../services/axios.service';
import {GlobalService} from '../../../services/global.service';
import {MiembrosService} from '../../miembros/miembros.service';

@Component({
  selector: 'app-miembros-consolidados',
  templateUrl: './miembros-consolidados.page.html',
  styleUrls: ['./miembros-consolidados.page.scss'],
})
export class MiembrosConsolidadosPage implements OnInit {
  @Input() data: any[];
  @Input() selectedUser: any = null;

  timer: any;
  word: string|null = null;
  listFilter: any[] = [];
  queryParams: any = {
    limit: 50,
    page: 1,
    word: null,
    input: 'names',
    value: 1
  };
  members: any = [];

  handleAdd = (id: string): void => this.addToSelected(id);
  handleRemove = (): void => this.removeOfSelected();


  constructor(
    private alertCtrl: AlertController,
    private axios: AxiosService,
    private globalSer: GlobalService,
    private modalCtrl: ModalController,
    private miembrosService: MiembrosService,
  ) { }

  ngOnInit() {
    // this.listFilter = this.data || [];
    this.getMembers();
  }

  async getMembers() {
    // if (this.init) this.init = false;
    // this.searching = true;
    const data: any = await this.miembrosService.getUsersList(this.queryParams);

    if (data && !data.error) this.members = data || [];
    else if (data && data.error) {
      await this.globalSer.errorSession();
      this.members = [];
    }
    else this.members = [];

    // this.searching = false;
  }

  async closeModal(data: any = null) {
    await this.modalCtrl.dismiss(data);
  }

  addToSelected(id: string) {
    this.selectedUser = this.members.find(u => u._id === id) || null;
  }

  removeOfSelected() {
    this.selectedUser = null;
  }

  checkAdded(id: string) {
    return this.selectedUser ? this.selectedUser._id === id : false;
  }

  findMember() {
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(async () => {
      if (this.word) {
        this.queryParams.word = this.word.toString().trim();
        await this.getMembers();
      }
      else {
        this.queryParams.word = null;
        this.members = [];
      }
    }, 300);
    // if (this.word) {
    //   const term = new RegExp(this.word, 'i');
    //   this.listFilter = this.data.filter(d => {
    //     return term.exec(d.names) || term.exec(d.lastNames) || term.exec(d.phone) || term.exec(d.document);
    //   });
    // }
    // else this.listFilter = this.data;
  }

  async confirmAdd() {
    if (this.selectedUser) await this.closeModal(this.selectedUser);
    else {
      await this.globalSer.presentAlert('Alerta', 'Disculpe, pero no debe seleccionar a un miembro.');
    }
  }

}
