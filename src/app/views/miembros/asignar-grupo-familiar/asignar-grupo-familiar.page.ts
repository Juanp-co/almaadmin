import {Component, Input, OnInit} from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {MiembrosService} from '../miembros.service';
import {AxiosService} from '../../../services/axios.service';
import {GlobalService} from '../../../services/global.service';
import {onlyNumbersInputValidation2} from '../../../../Utils/validations.functions';

@Component({
  selector: 'app-asignar-grupo-familiar',
  templateUrl: './asignar-grupo-familiar.page.html',
  styleUrls: ['./asignar-grupo-familiar.page.scss'],
})
export class AsignarGrupoFamiliarPage implements OnInit {
  @Input() selectedId: any;
  list: any[] = [
    { key: 'sector', label: 'sector' },
    { key: 'subSector', label: 'sub-sector' },
    { key: 'number', label: 'número' },
  ];
  selected: any = null;
  groups: any = [];
  group: any = null;
  init = true;
  findFor: any = { key: 'sector', label: 'sector' };
  queryParams: any = {
    input: 'number',
    value: 1,
    page: 1,
    limit: 50,
    sector: null,
    subSector: null,
    number: null
  };

  constructor(
    private alertCtrl: AlertController,
    private axios: AxiosService,
    private globalSer: GlobalService,
    private miembrosService: MiembrosService,
    private modalCtrl: ModalController,
  ) { }

  async ngOnInit() { }

  async closeModal(data: any = null) {
    await this.modalCtrl.dismiss(data);
  }

  async getFamiliesGroups() {
    await this.globalSer.presentLoading();
    if (this.init) this.init = false;
    this.groups = [];
    this.group = null;
    this.selected = null;
    const data: any = await this.miembrosService.getFamiliesGroupsList(this.queryParams);

    if (data && !data.error) {
      this.groups = data || [];
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async findData() {
    await this.getFamiliesGroups();
  }

  validateOnlyNumber(event: any) {
    onlyNumbersInputValidation2(event);
  }

  async setFindFor() {
    const inputs: any[] = [];

    for (const value of this.list) {
      inputs.push({
        name: `find-for`,
        type: 'radio',
        label: value.label.toUpperCase(),
        value: value.key,
        checked: this.findFor.key === value.key,
      });
    }

    await this.globalSer.alertWithList({
      header: 'Seleccione',
      inputs,
      confirmAction: (selectedValue) => {
        const index = this.list.findIndex(l => l.key === selectedValue);
        this.findFor = this.list[index];
        this.queryParams.sector = null;
        this.queryParams.subSector = null;
        this.queryParams.number = null;
      }
    });
  }

  async cleanFilter() {
    this.queryParams.input = 'sector';
    this.findFor = this.list[0];
    this.queryParams.sector = null;
    this.queryParams.subSector = null;
    this.queryParams.number = null;
    this.selected = null;
    this.group = null;
    this.groups = [];
    this.init = true;
  }

  selectGroup(index: any) {
    this.group = this.groups[index] || null;
    this.selected = this.group ? index : null;
  }

  removeSelected() {
    this.group = null;
    this.selected = null;
  }

  async confirmSaveNewMembers() {
    if (this.group) await this.closeModal(this.group);
    else await this.globalSer.presentAlert('Alerta', 'Disculpe, pero debe seleccionar un grupo.');
  }

}
