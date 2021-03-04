import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController, ModalController} from '@ionic/angular';
import dayjs from 'dayjs';
import {EventosService} from './eventos.service';
import {GlobalService} from '../../services/global.service';
import {checkDate, checkHour, checkTitlesOrDescriptions} from '../../../Utils/validations.functions';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {
  queryParams: any = {
    input: 'date',
    value: -1,
    initDate: dayjs().format('YYYY-MM-DD'),
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
  showForm = false;
  edit = false;
  disableEdit = false;
  rolesSelected = '';
  minDate: string = dayjs().add(1, 'd').format('YYYY-MM-DD');
  maxDate: string = dayjs().add(5, 'y').format('YYYY-MM-DD');
  minInitHour: string = dayjs().add(1, 'd').startOf('d').format('HH:[00]');
  minEndHour: string = dayjs().startOf('d').add(1, 'd').format('HH:[00]');

  constructor(
    public alertCtrl: AlertController,
    private eventsService: EventosService,
    private globalSer: GlobalService,
    private modalController: ModalController,
    private router: Router,
  ) {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/ingresar']);
  }

  async ngOnInit() {
    await this.getEventsList();
  }

  async ionViewWillEnter() {
    if (!this.globalSer.checkSession()) await this.router.navigate(['/ingresar']);
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

  async addEvent(dataToSend: any) {
    await this.globalSer.presentLoading('Agregando evento, por favor espere ...');
    const data: any = await this.eventsService.addEvent(dataToSend);

    if (data && !data.error) {
      this.events = [data.event, ...this.events];
      await this.setShowForm({ id: null, edit: false, show: false });
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', data.msg || 'Se ha agregado el evento exitosamente.');
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async updateEvent(id, dataToSend: any) {
    await this.globalSer.presentLoading('Actualizando evento, por favor espere ...');
    const data: any = await this.eventsService.updateEvent(id, dataToSend);

    if (data && !data.error) {
      const index = this.events.findIndex(e => e._id === id);
      if (index > -1) this.events[index] = {...this.events[index], ...dataToSend};
      await this.setShowForm({ id: null, edit: false, show: false, disable: true });
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', data || 'Se ha actualizado el evento exitosamente.');
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async deleteEvent(id) {
    await this.globalSer.presentLoading('Eliminando evento, por favor espere ...');
    const data: any = await this.eventsService.deleteEvent(id);

    if (data && !data.error) {
      this.events = this.events.filter(e => e._id !== id);
      await this.setShowForm({ id: null, edit: false, show: false });
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', data || 'Se ha eliminado el evento exitosamente.');
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  // getters and setters

  validateForm(validate: any): string|null {
    if (!checkTitlesOrDescriptions(validate.title)) return 'Disculpe, pero debe indicar el título correcto para el evento.';
    if (!checkTitlesOrDescriptions(validate.description)) return 'Disculpe, pero debe indicar una descripción para el evento.';
    if (!checkDate(validate.date)) return 'Disculpe, pero debe indicar la fecha del evento.';
    if (!checkHour(validate.initHour)) return 'Disculpe, pero debe indicar la hora de inicio del evento.';
    if (!checkHour(validate.endHour))
      return 'Disculpe, pero debe indicar una hora correcta para la finalización del evento.';
    if (!validate.toRoles || validate.toRoles.length === 0)
      return 'Disculpe, pero debe seleccionar los roles a los que va dirigido el evento.';

    return null;
  }

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

  setDate(input: string) {
    if (this.queryParams[input]) {
      this.queryParams[input] = dayjs(this.queryParams[input]).format('YYYY-MM-DD');
    }
  }

  setDataForm(id: string|null = null) {
    const ev = id ? this.events.find(e => e._id === id) : null;
    this.formData._id = ev ? ev._id : null;
    this.formData.title = ev ? ev.title : null;
    this.formData.description = ev ? ev.description : null;
    this.formData.date = ev ? ev.date : null;
    this.formData.initHour = ev ? ev.initHour : null;
    this.formData.endHour = ev ? ev.endHour : null;
    this.formData.toRoles = ev ? ev.toRoles : [];
    this.formData.rolesSelected = this.formData.toRoles.length > 0 ? this.getRoles(this.formData.toRoles) : '';

    if (ev) {
      if (ev.initHour) {
        this.formData.initHour = dayjs(`${this.formData.date} ${this.formData.initHour}`)
          .format('YYYY-MM-DDTHH:mm:ssZ');
      }
      else {
        this.formData.initHour = dayjs(`${this.formData.date}`)
          .format('YYYY-MM-DDTHH:mm:ssZ');
      }
      if (ev.endHour) {
        this.formData.endHour = dayjs(`${this.formData.date} ${this.formData.endHour}`)
          .format('YYYY-MM-DDTHH:mm:ssZ');
      }
      else {
        this.formData.endHour = dayjs(`${this.formData.date}`)
          .format('YYYY-MM-DDTHH:mm:ssZ');
      }
    }
  }

  checkIfEdit(ev: any): boolean {
    if (dayjs().isSame(dayjs(`${ev.date} ${ev.initHour}`), 'd')) {
      this.disableEdit = true;
    }
    else this.disableEdit = dayjs(`${ev.date} ${ev.initHour}`).isBefore(dayjs(), 'd');

    return this.disableEdit;
  }

  getHours(hours) {
    if (hours.length === 5) return hours;
    if (hours === 'Invalid Date') return null;
    return hours ? dayjs(hours).format('HH:mm') : null;
  }

  setMinEndHour(input: string) {

    if (input === 'date') {
      this.minInitHour = dayjs(`${this.formData[input]}`).startOf('d').format('HH:[00]');

      if (!this.formData.initHour) {
        this.formData.initHour = dayjs(`${this.formData[input]}`).startOf('d').format('YYYY-MM-DDTHH:[00]:ssZ');
      }
      if (!this.formData.endHour) {
        this.minEndHour = dayjs(`${this.formData.initHour}`).startOf('d').add(1, 'h').format('HH:[00]');
        this.formData.endHour = dayjs(`${this.formData.initHour}`)
          .add(1, 'h')
          .format('YYYY-MM-DDTHH:[00]:ssZ');
      }
      else {
        this.minEndHour = dayjs(`${this.formData.initHour}`).add(1, 'h').format('HH:[00]');
      }
    }
    else if (input === 'initHour') {
      if (dayjs(`${this.formData[input]}`).isAfter(dayjs(`${this.formData.endHour}`))) {
        this.minEndHour = dayjs(`${this.formData[input]}`)
          .add(1, 'h')
          .format('HH:[00]');
        this.formData.endHour = dayjs(`${this.formData.initHour}`)
          .add(1, 'h')
          .format('YYYY-MM-DDTHH:[00]:ssZ');
      }
      else {
        this.minEndHour = dayjs(`${this.formData[input]}`)
          .add(1, 'h')
          .format('HH:[00]');
      }
    }
  }

  setDateFormToSend() {
    return {
      title: this.formData.title ? this.formData.title.toUpperCase() : null,
      description: this.formData.description ? this.formData.description.toUpperCase() : null,
      date: this.formData.date ? dayjs(this.formData.date).format('YYYY-MM-DD') : null,
      initHour: this.getHours(this.formData.initHour),
      endHour: this.getHours(this.formData.endHour),
      toRoles: this.formData.toRoles || [],
    };
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
    this.queryParams.initDate = dayjs().format('YYYY-MM-DD');
    this.queryParams.endDate = null;
  }

  // actions form

  async setShowForm({ id, show, edit, disable }: any) {
    this.setDataForm(id);
    this.showForm = show;
    this.edit = edit || false;
    this.disableEdit = disable || false;
    if (id) this.setMinEndHour('date');
  }

  // actions alerts
  async showAlertRolesList(selected: number[]) {
    const inputs: any = [];

    for (const [i, value] of this.roles.entries()) {
      inputs.push({
        name: `roles`,
        type: 'checkbox',
        label: value,
        value: i,
        checked: selected.indexOf(i) > -1,
      });
    }
    await this.globalSer.alertWithList({
      header: 'Seleccione',
      inputs,
      confirmAction: (selectedValue) => {
        this.formData.toRoles = selectedValue;
        this.formData.rolesSelected = this.getRoles(selectedValue);
      }
    });
  }

  async showEvent(id: string) {
    const ev = this.events.find(e => e._id === id);

    if (ev) {
      const disableEdit = this.checkIfEdit(ev);
      const buttons: any = [];
      const btns = [
        {
          text: 'Eliminar',
          handler: () => { this.confirmAction({ id: ev._id, update: false, remove: true }); }
        },
        {
          text: 'Editar',
          handler: () => { this.setShowForm({ id: ev._id, edit: true, show: true, disable: disableEdit }); }
        },
        {
          text: 'Cerrar',
          role: 'cancel',
          handler: () => { }
        }
      ];

      for (const b of btns) {
        if (disableEdit && b.text !== 'Editar') buttons.push(b);
        else if (!disableEdit) buttons.push(b);
      }

      const alert = await this.alertCtrl.create({
        header: ev.title,
        subHeader: `Por: ${ev.user ? `${ev.user.names} ${ev.user.lastNames}` : 'Anónimo'}`,
        message: `
          <b>Fecha:</b> ${ev.date}<br/>
          <b>Hora de inicio:</b> ${ev.initHour}<br/>
          ${ev.endHour ? `<b>Hora fin:</b> ${ev.endHour}<br/>` : ''}
          <b>Descripción:</b> ${ev.description || 'No especificada.'}<br/>
        `,
        buttons
      });

      await alert.present();
    }
  }

  async confirmAction({ id, update, remove }: any) {
    let showConfirm = true;
    let dataToSend: any = null;

    if (this.showForm) {
      dataToSend = this.setDateFormToSend();
      const validate = this.validateForm(dataToSend);
      if (!validate) showConfirm = true;
      else {
        showConfirm = false;
        await this.globalSer.presentAlert('¡Error!', validate || 'Disculpe, pero debe completar el formulario.');
      }
    }

    if (showConfirm) {
      let message = '¿Está seguro qué desea __action__ este evento?';

      if (update) message = message.replace('__action__', 'actualizar');
      else if (remove) message = message.replace('__action__', 'eliminar');
      else message = message.replace('__action__', 'agregar');

      const dAlert = await this.alertCtrl.create({
        header: '¡Confirme!',
        message,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => { }
          }, {
            text: 'Si',
            handler: () => {
              if (update) this.updateEvent(id, dataToSend);
              else if (remove) this.deleteEvent(id);
              else this.addEvent(dataToSend);
            }
          }
        ]
      });
      await dAlert.present();
    }
  }

}
