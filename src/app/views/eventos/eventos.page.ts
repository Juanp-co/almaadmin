import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController, ModalController} from '@ionic/angular';
import {EventosService} from './eventos.service';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  queryParams: any = {
    input: 'date',
    value: -1,
    limit: 50,
    initDate: null,
    endDate: null,
  };
  formData: any = {
    _id: null,
    title: null,
    description: null,
    date: null,
    initHour: null,
    endHour: null,
    toRoles: [],
    rolesSelected: '',
  };
  roles = [
    'Administradores',
    'Pastores',
    'Supervisores',
    'Líderes',
    'Personas',
  ];
  events: any = [];
  showFilter = false;
  rolesSelected = '';

  constructor(
    private alertCtrl: AlertController,
    private eventsService: EventosService,
    private globalSer: GlobalService,
    private modalController: ModalController,
    private router: Router,
  ) { }

  async ngOnInit() {
  }

  async ionViewDidEnter() {
    // check if exist session
    if (!this.globalSer.checkSession()) await this.router.navigate(['/ingresar']);
    else await this.getEventsList();
  }

  // actions services
  async getEventsList() {
    if (this.showFilter) this.showFilter = false;
    await this.globalSer.presentLoading();
    const data: any = await this.eventsService.getEvents(this.queryParams);

    if (data && !data.error) {
      this.events = data;
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) await this.globalSer.errorSession();
    else await this.globalSer.dismissLoading();
  }

  // getters and setters

  setShowFilter() {
    this.showFilter = !this.showFilter;
  }

  async setOrderData() {
    await this.globalSer.alertWithList({
      header: 'Seleccione',
      inputs: [
        {
          name: `order-asc`,
          type: 'radio',
          label: `Antíguas primero`,
          value: 1,
          checked: this.queryParams.value === 1,
        },
        {
          name: `order-desc`,
          type: 'radio',
          label: 'Próximas primero',
          value: -1,
          checked: this.queryParams.value === -1,
        }
      ],
      confirmAction: (selectedValue) => {
        this.queryParams.value = selectedValue;
      }
    });
  }

  setDate(input: string, value) {
    this.queryParams[input] = `${value}`.substr(0, 10);
  }

  getRoles(rolesList: number[]): string {
    let ret = '';
    if (rolesList.length > 0) {
      for (const v of rolesList) {
        if (ret === '') ret = this.roles[v];
        else ret += `, ${this.roles[v]}`;
      }
    }
    return ret;
  }

  resetQueryParams() {
    this.queryParams.input = 'date';
    this.queryParams.value = -1;
    this.queryParams.initDate = null;
    this.queryParams.endDate = null;
  }

  async goToCreate() {
    await this.router.navigate([`eventos/crear-evento`]);
  }

}
