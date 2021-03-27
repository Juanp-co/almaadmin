import { Component, OnInit } from '@angular/core';
import dayjs from 'dayjs';
import {
  checkDate,
  checkEmail,
  checkIfValueIsNumber, checkNameOrLastName,
  checkPassword,
  checkPhone,
  checkTitlesOrDescriptions, onlyLettersInputValidation, onlyNumbersInputValidation
} from '../../../Utils/validations.functions';
import {GlobalService} from '../../services/global.service';
import {MiCuentaService} from './mi-cuenta.service';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {CookiesService} from '../../services/cookies.service';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.page.html',
  styleUrls: ['./mi-cuenta.page.scss'],
})
export class MiCuentaPage implements OnInit {

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
  staticData: any = null;
  userData: any = null;

  views: any = {
    info: {
      show: true,
      edit: false,
      title: 'Mis datos',
      data: null
    },
    pass: { show: false, title: 'Cambiar contraseña' },
  };

  formData: any = {
    typeDocument: null,
    document: null,
    email: null,
    phone: null,
    names: null,
    lastNames: null,
    gender: null,
    birthday: null,
    civilStatus: null,
    educationLevel: null,
    profession: null,
    bloodType: null,
    company: null,
    companyType: null,
    baptized: null,
    department: null,
    city: null,
    locality: null,
    direction: null,
  };

  formPass: any = {
    password: null,
    newPassword: null,
    repPassword: []
  };

  constructor(
    private cookieService: CookiesService,
    private globalSer: GlobalService,
    private miCuentaService: MiCuentaService,
    private navCtrl: NavController,
    private router: Router,
  ) {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/ingresar']);
    else {
      this.roles = this.globalSer.roles;
      this.documentTypes = miCuentaService.documentTypesList;
      this.educationLevel = miCuentaService.educationLevel;
      this.professions = miCuentaService.professionsList;
      this.bloodType = miCuentaService.bloodTypeList;
      this.companyType = miCuentaService.companyTypeList;
      this.civilStatus = miCuentaService.civilStatusList;
      this.gender = miCuentaService.genderList;
      this.departments = miCuentaService.departmentsList.map(d => d.department);
      this.maxDate = dayjs().format('YYYY-MM-DD');
    }
  }

  async ngOnInit() {
    await this.globalSer.presentLoading();
    const token = this.cookieService.getCookie('token');
    if (token) {
      let data: any = this.cookieService.getCookie('data');

      if (!data) {
        const res = await this.miCuentaService.getData();

        if (res && !res.error) data = res;
        else if (res && res.error) {
          await this.globalSer.dismissLoading();
          await this.globalSer.errorSession();
        }
        else {
          await this.globalSer.dismissLoading();
          await this.globalSer.presentAlert('Error', 'Disculpe, pero ha ocurrido un error inesperado.');
        }
      }

      if (data) {
        this.staticData = {...data};
        this.userData = {...data};
        this.setDataView();
        await this.globalSer.dismissLoading();
      }
    }
    else {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
  }

  // services actions
  async updateData() {
    await this.globalSer.presentLoading('Actualizando datos del perfil, por favor espere ...');
    const data: any = { ...this.formData };
    data.document = `${data.documentType}${data.document}`;
    data.company = data.company === 'Si';
    data.baptized = data.baptized === 'Si';
    data.birthday = dayjs(data.birthday).format('YYYY-MM-DD');
    const updated: any = await this.miCuentaService.updateData(data);

    if (updated && !updated.error) {
      this.cleanFormPassword();
      this.staticData = {...this.staticData, ...updated}; // { a: 1 } { a: 3 }
      this.userData = { ...this.userData, ...this.staticData };
      const dataCookie: any = this.cookieService.getCookie('data');
      this.cookieService.setCookie('data', {...dataCookie, ...this.staticData});
      this.setDataView();
      this.editEnable();
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado los datos de su cuenta exitosamente.');
    }
    else if (updated && updated.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  // services actions
  async updatePassword() {
    await this.globalSer.presentLoading('Cambiando contraseña, por favor espere ...');
    const updated: any = await this.miCuentaService.changePassword(this.formPass);

    if (updated && !updated.error) {
      this.cleanFormPassword();
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', updated || 'Se ha actualizado la contraseña de su cuenta exitosamente.');
    }
    else if (updated && updated.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  setDataView() {
    this.userData.birthday = this.userData.birthday ? dayjs(this.userData.birthday).format('DD-MM-YYYY') : null;
    this.userData.bloodType = this.bloodType[this.userData.bloodType] || null;
    this.userData.profession = this.professions[this.userData.profession] || null;
    this.userData.educationLevel = this.educationLevel[this.userData.educationLevel] || null;
    this.userData.companyType = this.companyType[this.userData.companyType] || null;
    this.userData.civilStatus = this.civilStatus[this.userData.civilStatus] || null;
    this.userData.gender = this.gender[this.userData.gender] || null;
    if (this.userData.department !== null) {
      const depto = this.miCuentaService.departmentsList[this.userData.department] || null;
      if (depto) {
        this.userData.department = depto.department;
        if (this.userData.city !== null) this.userData.city = depto.cities[this.userData.city] || null;
      }
    }
    this.views.info.data = this.userData;
  }

  // views actions
  editEnable() {
    if (!this.views.info.edit) {
      this.formData = {documentType: null, ...this.staticData};
      this.formData.documentType = this.formData.document ? this.formData.document.replace(/[0-9]{5,12}/, '') : null;
      this.formData.document = this.formData.document ? this.formData.document.replace(/[A-Za-z]{1,3}/, '') : null;
      this.formData.company = this.formData.company ? 'Si' : 'No';
      this.formData.baptized = this.formData.baptized ? 'Si' : 'No';
      this.getCity();
    }
    else {
      this.formData = null;
      this.cities = [];
    }
    this.views.info.edit = !this.views.info.edit;
  }

  setShowView(input: string) {
    this.views[input].show = !this.views[input].show;
  }

  getCity(clearCity = false) {
    const filter = this.miCuentaService.departmentsList[this.formData.department] || null;
    this.cities = filter ? filter.cities : [];
    if (clearCity) this.formData.city = null;
  }

  getDocumentLabel(value: any) {
    if (!value) return null;
    const da = this.documentTypes.find(d => d.val === value);
    return da ? da.label : null;
  }

  setDate() {
    if (this.formData.birthday) {
      this.formData.birthday = dayjs(this.formData.birthday).format('YYYY-MM-DD');
    }
  }

  validateOnlyNumbers(event: any) {
    onlyNumbersInputValidation(event);
  }

  validateOnlyLetters(event: any) {
    onlyLettersInputValidation(event);
  }

  async showAlertList(input: string, nameArray: string, selected: any = null) {
    const inputs: any[] = [];
    for (const [i, value] of this[nameArray].entries()) {
      inputs.push({
        name: `value-${i}`,
        type: 'radio',
        label: value,
        value: i,
        checked: selected !== null && selected.toString() === i.toString(),
      });
    }

    await this.globalSer.alertWithList({
      header: 'Seleccione',
      inputs,
      confirmAction: (selectedValue) => {
        this.formData[input] = selectedValue;
        if (input === 'department') this.getCity(true);
      }
    });
  }

  async showAlertDocumentList(selected: any = null) {
    const inputs: any[] = [];
    for (const value of this.documentTypes) {
      inputs.push({
        name: `documentType`,
        type: 'radio',
        label: value.label,
        value: value.val,
        checked: selected !== null && selected === value.val,
      });
    }

    await this.globalSer.alertWithList({
      header: 'Seleccione',
      inputs,
      confirmAction: (selectedValue) => {
        this.formData.documentType = selectedValue;
      }
    });
  }

  async showAlertYesOrNotList(input: string, selected: any = null) {
    const inputs: any[] = [];
    for (const [i, value] of this.yesOrNotValues.entries()) {
      inputs.push({
        name: `value-${i}`,
        type: 'radio',
        label: value,
        value,
        checked: value === selected,
      });
    }

    await this.globalSer.alertWithList({
      header: 'Seleccione',
      inputs,
      confirmAction: (selectedValue) => { this.formData[input] = selectedValue; }
    });
  }

  validateData(): string|null {
    const { formData } = this;
    if (['CC', 'TI', 'PAS', 'CE', 'PE'].indexOf(`${formData.documentType}`) === -1) return 'Disculpe, pero debe seleccionar un tipo de documento.';
    if (!/[0-9]{5,9}/.test(`${formData.document}`)) return 'Disculpe, pero debe indicar su número de documento.';
    if (!checkNameOrLastName(formData.names)) return 'Disculpe, pero debe indicar su nombre.';
    if (!checkNameOrLastName(formData.lastNames)) return 'Disculpe, pero debe indicar su apellido.';
    if (!checkEmail(formData.email)) return 'Disculpe, pero debe indicar su correo electrónico.';
    if (!checkPhone(formData.phone))
      return 'Disculpe, pero debe indicar su número de teléfono.<br><br>NOTA: Recuerde que el número de teléfono es su usuario de acceso para a su cuenta.';
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
      await this.globalSer.alertConfirm({
        header: 'Confirme',
        message: '¿Está seguro qué desea actualizar la información de su perfil?',
        confirmAction: () => this.updateData()
      });
    }
  }

  // actions passwords
  cleanFormPassword() {
    this.formPass.password = null;
    this.formPass.newPassword = null;
    this.formPass.repPassword = null;
  }

  validatePassword() {
    const { formPass } = this;
    if (!formPass.password) return 'Disculpe, pero debe indicar su contraseña actual.';
    if (formPass.password && formPass.password.length < 5) return 'Disculpe, pero debe puede que su contraseña actual no sea correcta.';
    if (!checkPassword(formPass.newPassword)) return 'Disculpe, pero debe indicar una nueva contraseña válida.';
    if (formPass.newPassword !== formPass.repPassword) return 'Disculpe, pero las nuevas contraseñas no coinciden.';

    return null;
  }

  async confirmChangePassword() {
    const validated = this.validatePassword();

    if (validated) await this.globalSer.presentAlert('Alerta', validated);
    else {
      await this.globalSer.alertConfirm({
        header: 'Cambiar contraseña',
        message: '¿Está seguro qué desea cambiar la contraseña de su cuenta?',
        confirmAction: () => this.updatePassword()
      });
    }
  }
}
