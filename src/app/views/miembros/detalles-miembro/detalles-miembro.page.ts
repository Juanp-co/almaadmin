import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import dayjs from 'dayjs';
import {AxiosService} from '../../../services/axios.service';
import {GlobalService} from '../../../services/global.service';
import {DetallesMiembroService} from './detalles-miembro.service';
import {AlertController, NavController} from '@ionic/angular';
import {
  checkDate, checkEmail,
  checkIfValueIsNumber,
  checkNameOrLastName,
  checkPhone,
  checkTitlesOrDescriptions, onlyLettersInputValidation,
  onlyNumbersInputValidation
} from '../../../../Utils/validations.functions';
import {IDetallesMiembro, IDetallesMiembroEdit, IDetallesMiembroTotals} from './detalles-miembro.model';

@Component({
  selector: 'app-detalles-miembro',
  templateUrl: './detalles-miembro.page.html',
  styleUrls: ['./detalles-miembro.page.scss'],
})
export class DetallesMiembroPage implements OnInit {
  // static data to edit values
  roles = [];
  professions = [];
  companyType = [];
  educationLevel = [];
  bloodType = [];
  departments = [];
  cities = [];
  civilStatus = [];
  gender = [];
  documentTypes = [];
  yesOrNotValues = ['No', 'Si'];
  maxDate: any = null;

  // info profile
  title = 'Cargando...';
  id: string|null = null;
  user: IDetallesMiembro | null = null;
  staticData: IDetallesMiembro | null = null;
  totals: IDetallesMiembroTotals | null = null;
  enableActions = false;
  formData: IDetallesMiembroEdit | null = null;

  views: any = {
    data: {
      label: 'Datos del usuario',
      show: true,
      edit: false,
      data: null,
    },
    courses: {
      label: 'Cursos',
      show: false,
      data: [],
    },
    referrals: {
      label: 'Referidos',
      show: false,
      referred: null,
      data: [],
    }
  };

  constructor(
    private activateRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private axios: AxiosService,
    private globalSer: GlobalService,
    private detallesMiembroService: DetallesMiembroService,
    private navCtrl: NavController,
    private router: Router,
  ) {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/ingresar']);
    else {
      this.roles = this.globalSer.roles;
      this.documentTypes = detallesMiembroService.documentTypesList;
      this.educationLevel = detallesMiembroService.educationLevel;
      this.professions = detallesMiembroService.professionsList;
      this.bloodType = detallesMiembroService.bloodTypeList;
      this.companyType = detallesMiembroService.companyTypeList;
      this.civilStatus = detallesMiembroService.civilStatusList;
      this.gender = detallesMiembroService.genderList;
      this.departments = detallesMiembroService.departmentsList.map(d => d.department);
      this.maxDate = dayjs().format('YYYY-MM-DD');

      if (this.globalSer.checkRoleToEnableAddOrUpdate()) this.enableActions = true;
    }
  }

  async ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('userid');
    await this.globalSer.presentLoading();
    const data: any = await this.detallesMiembroService.getUserDetails(this.id);

    if (data && !data.error) {
      this.staticData = {...data} as IDetallesMiembro;
      this.views.data.data = this.staticData;
      this.views.referrals.referred = this.staticData.referred;
      this.totals = this.staticData.totals;

      this.setUserParams();
      this.getCourses();
      this.getReferrals();
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else {
      await this.globalSer.dismissLoading();
    }
  }

  async ionViewWillEnter() {
    if (!this.globalSer.checkSession())
      this.router.navigate(['/ingresar']);
  }

  async updateData() {
    await this.globalSer.presentLoading('Actualizando, por favor espere ...');

    const data: any = {...this.formData};
    data.document = `${data.documentType}${data.document}`;
    data.company = data.company === 'Si';
    data.baptized = data.baptized === 'Si';
    data.birthday = dayjs(data.birthday).format('YYYY-MM-DD');

    const updated = await this.detallesMiembroService.updateDataUser(this.id, data);

    if (updated && !updated.error) {
      this.user = {...updated} as IDetallesMiembro;
      this.staticData = {...updated} as IDetallesMiembro;
      await this.setUserParams();
      await this.editEnable(true);
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado su perfil exitosamente.');
    }
    else if (updated && updated.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async deleteUser() {
    await this.globalSer.presentLoading('Eliminando usuario, por favor espere ...');

    const deleted = await this.detallesMiembroService.deleteUser(this.id);

    if (deleted && !deleted.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', deleted || 'Se ha eliminado los datos del usuario exitosamente.');
      await this.back();
    }
    else if (deleted && deleted.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async getCourses() {
    const data: any = await this.detallesMiembroService.getUsersCourses(this.id);

    if (data && !data.error) this.views.courses.data = data;
    else if (data && data.error) await this.globalSer.errorSession();
    else await this.globalSer.dismissLoading();
  }

  async getReferrals() {
    const data: any = await this.detallesMiembroService.getUsersReferrals(this.id);

    if (data && !data.error) this.views.referrals.data = data;
    else if (data && data.error) await this.globalSer.errorSession();
    else await this.globalSer.dismissLoading();
  }

  setUserParams() {
    this.user = {...this.staticData} as IDetallesMiembro;
    this.title = `Detalles: ${this.user.names} ${this.user.lastNames}`;

    this.user.birthday = this.user.birthday ? dayjs(this.user.birthday).format('DD-MM-YYYY') : null;
    this.user.bloodType = this.bloodType[this.user.bloodType] || null;
    this.user.profession = this.professions[this.user.profession] || null;
    this.user.educationLevel = this.educationLevel[this.user.educationLevel] || null;
    this.user.companyType = this.companyType[this.user.companyType] || null;
    this.user.civilStatus = this.civilStatus[this.user.civilStatus] || null;
    this.user.gender = this.gender[this.user.gender] || null;

    const depto: any = this.detallesMiembroService.departmentsList[this.user.department] || null;
    this.user.department = depto ? depto.department : null;
    if (depto) {
      this.cities = depto.cities || null;
      this.user.city = depto.cities[this.user.city] || null;
    }
  }

  async back() {
    await this.navCtrl.back();
  }

  // actions views
  async setShowView(input: string) {
    this.views[input].show = !this.views[input].show;
    if (this.views[input].edit) {
      await this.editEnable();
    }
  }

  // getters and setters

  getCity(clearCity = false) {
    const filter = this.detallesMiembroService.departmentsList[this.formData.department] || null;
    if (filter) this.cities = filter.cities || [];
    if (clearCity) this.formData.city = null;
  }

  getDocumentLabel(value: any) {
    if (!value) return null;
    const da = this.documentTypes.find(d => d.val === value);
    return da ? da.label : null;
  }

  validateOnlyNumber(event: any) {
    onlyNumbersInputValidation(event);
  }

  validateOnlyLetters(event: any) {
    onlyLettersInputValidation(event);
  }

  setDate() {
    if (this.formData.birthday) {
      this.formData.birthday = dayjs(this.formData.birthday).format('YYYY-MM-DD');
    }
  }

  // actions
  async editEnable(edited = false) {
    if (!edited) await this.globalSer.presentLoading();

    this.views.data.edit = !this.views.data.edit;

    if (this.views.data.edit ) {
      this.formData = {documentType: null, ...this.staticData} as IDetallesMiembroEdit;
      this.title = `Editar datos de: ${this.formData.names} ${this.formData.lastNames}`;
      this.formData.documentType = this.formData.document ? this.formData.document.replace(/[0-9]{5,12}/, '') : null;
      this.formData.document = this.formData.document ? this.formData.document.replace(/[A-Za-z]{1,3}/, '') : null;
      this.formData.company = this.formData.company ? 'Si' : 'No';
      this.formData.baptized = this.formData.baptized ? 'Si' : 'No';
      if (!this.cities) this.getCity();
    }
    else {
      this.title = `Detalles: ${this.user.names} ${this.user.lastNames}`;
      this.formData = null;
    }

    if (!edited) await this.globalSer.dismissLoading();
  }

  async showAlertList(input: string, nameArray: string, selected: any = null) {
    const inputs: any = [];
    for (const [i, value] of this[nameArray].entries()) {
      inputs.push({
        name: `value-${i}`,
        type: 'radio',
        label: value,
        value: i,
        checked: selected !== null && selected.toString() === i.toString(),
      });
    }

    const alert = await this.alertCtrl.create({
      header: 'Seleccione',
      inputs,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        },
        {
          text: 'Ok',
          handler: (selectedValue) => {
            this.formData[input] = selectedValue;
            if (input === 'department') this.getCity(true);
          }
        }
      ]
    });

    await alert.present();
  }

  async showAlertDocumentList(selected: any = null) {
    const inputs: any = [];
    for (const value of this.documentTypes) {
      inputs.push({
        name: `documentType`,
        type: 'radio',
        label: value.label,
        value: value.val,
        checked: selected !== null && selected === value.val,
      });
    }

    const alert = await this.alertCtrl.create({
      header: 'Seleccione',
      inputs,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        },
        {
          text: 'Ok',
          handler: (selectedValue) => {
            this.formData.documentType = selectedValue;
          }
        }
      ]
    });

    await alert.present();
  }

  async showAlertYesOrNotList(input: string, selected: any = null) {
    const inputs: any = [];
    for (const [i, value] of this.yesOrNotValues.entries()) {
      inputs.push({
        name: `value-${i}`,
        type: 'radio',
        label: value,
        value,
        checked: value === selected,
      });
    }

    const alert = await this.alertCtrl.create({
      header: 'Seleccione',
      inputs,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        },
        {
          text: 'Ok',
          handler: (selectedValue) => { this.formData[input] = selectedValue; }
        }
      ]
    });

    await alert.present();
  }

  validateData(): string|null {
    const { formData } = this;
    if (!checkEmail(formData.email)) return 'Disculpe, pero debe indicar su correo electrónico.';
    if (!checkNameOrLastName(formData.names)) return 'Disculpe, pero debe indicar su nombre.';
    if (!checkNameOrLastName(formData.lastNames)) return 'Disculpe, pero debe indicar su apellido.';
    if (!checkPhone(formData.phone)) return 'Disculpe, pero debe indicar su número de teléfono.';
    if (!checkDate(formData.birthday)) return 'Disculpe, pero debe indicar su fecha de nacimiento.';
    if (!checkIfValueIsNumber(`${formData.gender}`)) return 'Disculpe, pero debe indicar su sexo.';
    if (!checkIfValueIsNumber(`${formData.bloodType}`)) return 'Disculpe, pero debe indicar su tipo de sangre.';
    if (!checkIfValueIsNumber(`${formData.civilStatus}`)) return 'Disculpe, pero debe indicar su estado civil.';
    if (!checkIfValueIsNumber(`${formData.educationLevel}`)) return 'Disculpe, pero debe indicar su nivel educativo.';
    if (!checkIfValueIsNumber(`${formData.profession}`)) return 'Disculpe, pero debe indicar su profesión.';
    if (formData.company === null || formData.company === undefined) return 'Disculpe, pero debe indicar si posee una empresa.';
    if (formData.company !== null && formData.company === 'Si')
      if (!checkIfValueIsNumber(`${formData.companyType}`)) return 'Disculpe, pero debe indicar el tipo de empresa que posee.';
    if (formData.baptized === null || formData.baptized === undefined)
      return 'Disculpe, pero debe indicar si usted se encuentra bautizado.';
    if (!checkIfValueIsNumber(`${formData.department}`)) return 'Disculpe, pero debe indicar el departamento de residencia.';
    if (!checkIfValueIsNumber(`${formData.city}`)) return 'Disculpe, pero debe indicar la ciudad de residencia.';
    if (!checkTitlesOrDescriptions(formData.locality)) return 'Disculpe, pero debe indicar el nombre de la localidad de residencia.';
    if (!checkTitlesOrDescriptions(formData.direction)) return 'Disculpe, pero debe indicar su dirección de residencia.';

    return null;
  }

  async confirmUpdate() {
    const validated = this.validateData();

    if (validated) await this.globalSer.presentAlert('Alerta', validated);
    else {
      this.globalSer.alertConfirm({
        header: 'Confirme',
        message: '¿Está seguro qué desea actualizar información de este usuario?',
        confirmAction: () => this.updateData()
      });
    }
  }

  async confirmDelete() {
    this.globalSer.alertConfirm({
      header: 'Confirme',
      message: '¿Está seguro qué desea eliminar toda la información de este usuario?',
      confirmAction: () => this.deleteUser()
    });
  }

}
