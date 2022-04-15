import {Component, Input, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import dayjs from 'dayjs';
import {EventsFormService} from './events-form.service';
import {DataService} from '../../../services/data.service';
import {GlobalService} from '../../../services/global.service';
import {checkDate, checkHour, checkTitlesOrDescriptions, replaceNbsp} from '../../../../Utils/validations.functions';

@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.scss'],
})
export class EventsFormComponent implements OnInit {

  @Input() eventData: any;
  @Input() goBack: any;
  @Input() handleCancel: () => void;
  @Input() handleSave: (data: any) => void;
  Editor = ClassicEditor;
  configEditor: any = null;
  formData: any = {
    _id: null,
    title: null,
    description: null,
    date: null,
    dateEnd: null,
    initHour: null,
    endHour: null,
    picture: null,
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
  minDate: string = dayjs().add(1, 'd').format('YYYY-MM-DD');
  minDateEnd: string = this.minDate;
  maxDate: string = dayjs().add(5, 'y').format('YYYY-MM-DD');
  minInitHour: string = dayjs().add(1, 'd').startOf('d').format('HH:[00]');
  minEndHour: string = dayjs().startOf('d').add(1, 'd').format('HH:[00]');

  constructor(
    private dataService: DataService,
    private eventsFormService: EventsFormService,
    private globalSer: GlobalService,
    private navCtrl: NavController,
  ) {
    this.configEditor = this.globalSer.configEditor;
    this.configEditor.description = 'Indica una descripción para el evento ...';
  }

  ngOnInit() {
    if (this.eventData) {
      this.setDataForm();
    }
  }

  async addEvent(dataToSend: any) {
    await this.globalSer.presentLoading('Agregando evento, por favor espere ...');
    const data: any = await this.eventsFormService.addEvent(dataToSend);

    if (data && !data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', data.msg || 'Se ha agregado el evento exitosamente.');
      await this.navCtrl.back();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async updateEvent(dataToSend: any) {
    await this.globalSer.presentLoading('Actualizando evento, por favor espere ...');
    const res: any = await this.eventsFormService.updateEvent(this.eventData._id || null, dataToSend);

    if (res && !res.error) {
      const { event, msg } = res;
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', msg || 'Se ha actualizado el evento exitosamente.');
      this.save(event);
    }
    else if (res && res.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  setDataForm() {
    if (this.eventData) {
      const ev: any = {...this.eventData};
      this.formData._id = ev ? ev._id : null;
      this.formData.title = ev ? ev.title : null;
      this.formData.description = ev ? replaceNbsp(ev.description) : null;
      this.formData.date = ev ? ev.date : null;
      this.formData.dateEnd = ev ? ev.dateEnd : null;
      this.formData.initHour = ev ? ev.initHour : null;
      this.formData.endHour = ev ? ev.endHour : null;
      this.formData.toRoles = ev ? ev.toRoles : [];
      this.formData.picture = ev ? ev.picture : [];
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
          this.formData.endHour = dayjs(`${this.formData.dateEnd} ${this.formData.endHour}`)
            .format('YYYY-MM-DDTHH:mm:ssZ');
        }
        else {
          this.formData.endHour = dayjs(`${this.formData.date}`)
            .format('YYYY-MM-DDTHH:mm:ssZ');
        }
      }
    }
    else {
      const dayjsCurrentDate = dayjs().add(1, 'd');
      this.formData.date = dayjsCurrentDate.startOf('d').format('YYYY-MM-DDTHH:[00]:ssZ');
      this.formData.dateEnd = dayjsCurrentDate.endOf('d').format('YYYY-MM-DDTHH:mm:ssZ');
      this.formData.initHour = dayjsCurrentDate.startOf('d').format('YYYY-MM-DDTHH:[00]:ssZ');
      this.formData.endHour = dayjs(`${this.formData.initHour}`).add(1, 'h').format('YYYY-MM-DDTHH:[00]:ssZ');
      // reset min limit
      this.minInitHour = dayjsCurrentDate.startOf('d').format('HH:[00]');
      this.minEndHour = dayjs(`${this.formData.initHour}`).add(1, 'h').format('HH:[00]');
      this.minDateEnd = dayjsCurrentDate.startOf('d').format('YYYY-MM-DD');
    }
  }

  getHours(hours: string|null|undefined) {
    if (!hours || hours === 'Invalid Date') return null;
    if (/^([0-9]{2}:[0-9]{2})/.test(hours)) return hours;
    return hours ? dayjs(hours).format('HH:mm') : null;
  }

  cancel() {
    if (!!this.handleCancel) this.handleCancel();
    else this.navCtrl.back();
  }

  save(data: any) {
    if (!!this.handleSave) this.handleSave(data);
  }

  onChangeEditor({ editor }: ChangeEvent ) {
    this.formData.description = editor.getData();
  }

  setFormData(input: string, ev: any) {
    this.formData[input] = ev.target.value || null;
  }

  openFile(event) {
    const files = event.target.files;

    if (typeof files[0] !== 'object') return false;
    else {
      this.dataService.resizePhoto(files[0], 900, 'dataURL',  (resizedFile) => {
        this.formData.picture = resizedFile;
      });
    }
  }

  setMinEndHour(input: string, ev: any) {
    if (['date', 'dateEnd', 'initHour', 'endHour'].includes(input)) {
      const date = ev.target.value;

      if (input === 'date') {
        const dayjsCurrentDate = dayjs(date);
        // set new params
        this.formData.date = date;
        this.formData.dateEnd = dayjsCurrentDate.endOf('d').format('YYYY-MM-DDTHH:mm:ssZ');
        this.formData.initHour = dayjsCurrentDate.startOf('d').format('YYYY-MM-DDTHH:[00]:ssZ');
        this.formData.endHour = dayjs(`${this.formData.initHour}`).add(1, 'h').format('YYYY-MM-DDTHH:[00]:ssZ');
        // reset min limit
        this.minInitHour = dayjsCurrentDate.startOf('d').format('HH:[00]');
        this.minEndHour = dayjs(`${this.formData.initHour}`).add(1, 'h').format('HH:[00]');
        this.minDateEnd = dayjsCurrentDate.startOf('d').format('YYYY-MM-DD');
      }
      else if (input === 'dateEnd') {
        this.minEndHour = null;
        const initD = dayjs(this.formData.date);
        const endD = dayjs(date);

        if (initD.format('YYYY-MM-DD') === endD.format('YYYY-MM-DD')) {
          this.formData.dateEnd = date;
          this.formData.endHour = endD.startOf('d').add(1, 'h').format('YYYY-MM-DDTHH:[00]:ssZ');
          this.minEndHour = endD.startOf('d').add(1, 'h').format('HH:[00]');
        }
        else {
          this.formData.dateEnd = endD.endOf('d').format('YYYY-MM-DDTHH:mm:ssZ');
          this.formData.endHour = endD.startOf('d').format('YYYY-MM-DDTHH:[00]:ssZ');
          this.minEndHour = endD.startOf('d').format('HH:[00]');
        }
      }
      else if (input === 'initHour') {
        const initD = dayjs(date);
        const endD = dayjs(this.formData.endHour);

        if (initD.isSame(endD) || initD.isAfter(endD)) {
          this.minEndHour = null;
          this.formData.endHour = initD.add(1, 'h').format('YYYY-MM-DDTHH:[00]:ssZ');
          this.minEndHour = initD.add(1, 'h').format('HH:[00]');
        }
        else this.formData.initHour = date;
      }
      else if (input === 'endHour') {
        const initD = dayjs(this.formData.initHour);
        const endD = dayjs(date);

        if (initD.isSame(endD)) {
          this.formData.endHour = initD.add(1, 'h').format('YYYY-MM-DDTHH:[00]:ssZ');
          this.minEndHour = initD.add(1, 'h').format('HH:[00]');
          ev.target.value = this.formData.endHour;
        }
        else this.formData.endHour = date;
      }
    }
    else this.formData[input] = ev.target.value;
  }

  setDateFormToSend() {
    return {
      title: this.formData.title?.toUpperCase() || null,
      description: replaceNbsp(this.formData.description?.toUpperCase()) || null,
      date: this.formData.date ? dayjs(this.formData.date).format('YYYY-MM-DD') : null,
      dateEnd: this.formData.date ? dayjs(this.formData.dateEnd).format('YYYY-MM-DD') : null,
      initHour: this.getHours(this.formData.initHour),
      endHour: this.getHours(this.formData.endHour),
      toRoles: this.formData.toRoles || [],
      picture: this.formData.picture,
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

  validateForm(validate: any): string|null {
    if (!checkTitlesOrDescriptions(validate.title)) return 'Disculpe, pero debe indicar el título correcto para el evento.';
    if (!validate.description || validate.description?.length < 5)
      return 'Disculpe, pero debe indicar una descripción para el evento válida.';
    if (!checkDate(validate.date)) return 'Disculpe, pero debe indicar la inicial fecha del evento.';
    if (!checkDate(validate.dateEnd)) return 'Disculpe, pero debe indicar la final fecha del evento.';
    if (!checkHour(validate.initHour)) return 'Disculpe, pero debe indicar la hora de inicio del evento.';
    if (!checkHour(validate.endHour))
      return 'Disculpe, pero debe indicar una hora correcta para la finalización del evento.';
    if (!validate.toRoles || validate.toRoles.length === 0)
      return 'Disculpe, pero debe seleccionar los roles a los que va dirigido el evento.';

    return null;
  }

  // actions alerts
  async showAlertRolesList(selected: number[]) {
    const inputs: any[] = [];

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

  async confirmAction(update = false) {
    const dataToSend: any = this.setDateFormToSend();

    const validate = this.validateForm(dataToSend);

    if (!validate) {
      let message = '¿Está seguro qué desea __action__ este evento?';

      if (update) message = message.replace('__action__', 'actualizar');
      else message = message.replace('__action__', 'agregar');

      await this.globalSer.alertConfirm({
        header: '¡Confirme!',
        message,
        confirmAction: () => {
          if (update) this.updateEvent(dataToSend);
          else this.addEvent(dataToSend);
        }
      });
    }
    else {
      await this.globalSer.presentAlert('¡Error!', validate || 'Disculpe, pero debe completar el formulario.');
    }
  }

}
