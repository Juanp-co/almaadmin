import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController, NavController} from '@ionic/angular';
import {DetallesMiembroService} from '../detalles-miembro/detalles-miembro.service';
import {MiembrosService} from '../miembros.service';
import {AsignarConsolidadorPage} from '../asignar-consolidador/asignar-consolidador.page';
import {AxiosService} from '../../../services/axios.service';
import {GlobalService} from '../../../services/global.service';
import {
  checkEmail, checkIfValueIsNumber,
  checkNameOrLastName, checkPhone,
  onlyLettersInputValidation,
  onlyNumbersInputValidation
} from '../../../../Utils/validations.functions';

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
  consolidatorMember: any = null;
  formData: any = {
    documentType: null,
    document: null,
    email: null,
    phone: null,
    names: null,
    lastNames: null,
    role: null,
    referred: null,
    consolidator: false,
  };

  constructor(
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
    else await this.globalSer.dismissLoading();
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

  checkConsolidator() {
    if (this.formData.consolidator) {
      this.consolidatorMember = null;
    }
    this.formData.consolidator = !this.formData.consolidator;
  }

  getReferredNames() {
    return this.consolidatorMember ? `${this.consolidatorMember.names} ${this.consolidatorMember.lastNames}` : null;
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

  // members
  async modalMember() {
    const updateData = (member: any) => {
      this.consolidatorMember = member || null;
      this.formData.referred = member ? member._id : null;
    };

    await this.globalSer.loadModal(
      AsignarConsolidadorPage,
      { selectedId: this.consolidatorMember ? this.consolidatorMember._id : null },
      false,
      updateData
    );
  }

  validateData(): string|null {
    if (!/^([CC|CE|PE|TI|PAS]){2,3}/.test(this.formData.documentType)) return 'Disculpe, pero debe indicar el tipo de documento.';
    if (!/[0-9]{5,9}/.test(this.formData.document)) return 'Disculpe, pero debe indicar el número de documento de identidad.';
    if (!checkNameOrLastName(this.formData.names)) return 'Disculpe, pero debe indicar un nombre válido.';
    if (!checkNameOrLastName(this.formData.lastNames)) return 'Disculpe, pero debe indicar un apellido válido.';
    if (!checkPhone(this.formData.phone)) return 'Disculpe, pero debe indicar un número de teléfono válido.';
    // if (this.formData.email && !checkEmail(this.formData.email)) return 'Disculpe, pero debe indicar un correo electrónico válido.';
    if (!checkIfValueIsNumber(`${this.formData.role}`)) return 'Disculpe, pero debe seleccionar un rol para el miembro.';
    if (this.formData.consolidator && (!this.formData.referred || (this.formData.referred && this.formData.referred.length < 5)))
      return 'Disculpe, pero debe seleccionar un miembro consolidador.';

    return null;
  }

  async confirmRegister() {
    const validated = this.validateData();

    if (!validated) {
      await this.globalSer.alertConfirm({
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
