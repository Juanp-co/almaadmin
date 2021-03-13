import { Component, OnInit } from '@angular/core';
import {AxiosService} from '../../../services/axios.service';
import {GlobalService} from '../../../services/global.service';
import {AlertController, NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {DetallesMiembroService} from '../detalles-miembro/detalles-miembro.service';
import {
  checkDocument,
  checkEmail, checkIfValueIsNumber,
  checkNameOrLastName, checkPhone,
  onlyLettersInputValidation,
  onlyNumbersInputValidation
} from '../../../../Utils/validations.functions';
import {MiembrosService} from '../miembros.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  roles = [];
  documentTypes = [];
  successRegister = false;
  successData: any = null;
  formData: any = {
    documentType: null,
    document: null,
    email: null,
    phone: null,
    names: null,
    lastNames: null,
    role: null,
    referred: null,
  };

  constructor(
    private activateRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private axios: AxiosService,
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private detallesMiembroService: DetallesMiembroService,
    private miembrosService: MiembrosService,
    private router: Router,
  ) {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/ingresar']);
    else {
      this.documentTypes = detallesMiembroService.documentTypesList;
      this.roles = this.globalSer.roles;
    }
  }

  async ngOnInit() {
    // check if exist session
    if (!this.globalSer.checkSession()) await this.router.navigate(['/ingresar']);
    else if (!this.globalSer.checkRoleToEnableAddOrUpdate()) {
      await this.globalSer.presentAlert('Alerta', 'Disculpe, pero no cuenta con privilegios para registrar nuevos miembros.');
      await this.navCtrl.back();
    }
  }

  async registerMember() {
    await this.globalSer.presentLoading('Registrando, por favor espere ...');

    const data: any = {...this.formData};
    data.document = `${data.documentType}${data.document}`;

    const res = await this.miembrosService.registerUser(data);

    if (res && !res.error) {
      this.successData = res;
      this.successRegister = true;
      await this.globalSer.dismissLoading();
    }
    else if (res && res.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else {
      await this.globalSer.dismissLoading();
    }
  }

  async back() {
    await this.navCtrl.back();
  }

  // getters and setters
  getDocumentLabel(value: any) {
    if (!value) return null;
    const da = this.documentTypes.find(d => d.val === value);
    return da ? da.label : null;
  }

  validateOnlyNumbers(event: any) {
    onlyNumbersInputValidation(event);
  }

  validateOnlyLetters(event: any) {
    onlyLettersInputValidation(event);
  }

  // Alerts

  async showRoleListAlert(selected: any = null) {
    const inputs: any[] = [];
    for (const [i, value] of this.roles.entries()) {
      inputs.push({
        name: `roles`,
        type: 'radio',
        label: value,
        value: i,
        checked: selected !== null && selected === i,
      });
    }

    await this.globalSer.alertWithList({
      header: 'Seleccione un rol',
      inputs,
      confirmAction: (selectedValue) => {
        this.formData.role = selectedValue;
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

  async confirmCancel() {
    await this.globalSer.alertConfirm({
      header: 'Confirme',
      message: '¿Está seguro qué desea cancelar el registro?',
      confirmAction: () => this.back()
    });
  }

  validateData(): string|null {
    if (!/^([CC|CE|PE|TI|PAS]){2,3}/.test(this.formData.documentType)) return 'Disculpe, pero debe indicar el tipo de documento.';
    if (!/[0-9]{5,10}/.test(this.formData.document)) return 'Disculpe, pero debe indicar el número de documento de identidad.';
    if (!checkNameOrLastName(this.formData.names)) return 'Disculpe, pero debe indicar un nombre válido.';
    if (!checkNameOrLastName(this.formData.lastNames)) return 'Disculpe, pero debe indicar un apellido válido.';
    if (!checkEmail(this.formData.email)) return 'Disculpe, pero debe indicar un correo electrónico válido.';
    if (this.formData.phone && !checkPhone(this.formData.phone)) return 'Disculpe, pero debe indicar un número de teléfono válido.';
    if (!checkIfValueIsNumber(`${this.formData.role}`)) return 'Disculpe, pero debe seleccionar un rol para el usuario.';
    if (this.formData.referred && !checkDocument(`${this.formData.referred.toUpperCase()}`))
      return 'Disculpe, pero debe indicar un número de documento correcto del usuario referido (ejm: CC12345678).';

    return null;
  }

  async confirmRegister() {
    const validated = this.validateData();

    if (!validated) {
      this.globalSer.alertConfirm({
        header: 'Confirme',
        message: '¿Está seguro qué desea registar a este nuevo miembro?',
        confirmAction: () => this.registerMember()
      });
    }
    else {
      await this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
    }
  }
}
