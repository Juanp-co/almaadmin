import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import dayjs from 'dayjs';
import {DetallesMiembroService} from '../detalles-miembro/detalles-miembro.service';
import {MiembrosService} from '../miembros.service';
import {AsignarConsolidadorPage} from '../asignar-consolidador/asignar-consolidador.page';
import {AxiosService} from '../../../services/axios.service';
import {GlobalService} from '../../../services/global.service';
import {
  checkIfValueIsNumber,
  checkNameOrLastName, checkPhone,
  onlyLettersInputValidation,
  onlyNumbersInputValidation
} from '../../../../Utils/validations.functions';
import {AsignarGrupoFamiliarPage} from '../asignar-grupo-familiar/asignar-grupo-familiar.page';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  roles = [];
  civilStatus = [];
  gender = [];
  successRegister = false;
  successData: any = null;
  referralData: any = null;
  groupData: any = null;
  maxDate: any = null;
  formData: any = {
    phone: null,
    names: null,
    lastNames: null,
    email: null,
    birthday: null,
    civilStatus: null,
    gender: null,
    locality: null,
    direction: null,
    petition: null,
    attendGroup: false,
    groupId: null,
    role: 5,
    referred: null,
    consolidated: false,
    iAmConsolidator: true,
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
      this.roles = this.globalSer.roles;
      this.civilStatus = detallesMiembroService.civilStatusList;
      this.gender = detallesMiembroService.genderList;
      this.maxDate = dayjs().format('YYYY-MM-DD');
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
    const res = await this.miembrosService.registerUser({...this.formData});

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

  setCheckedValue(input) {
    this.formData[input] = !this.formData[input];
    if (input === 'attendGroup' && !this.formData.attendGroup) {
      this.formData.groupId = null;
      this.groupData = null;
    }
    if (input === 'consolidated' && !this.formData.consolidated) {
      this.formData.iAmConsolidator = true;
      this.formData.petition = null;
      this.formData.referred = null;
      this.referralData = null;
    }
    if (input === 'iAmConsolidator' && !this.formData.iAmConsolidator) {
      this.formData.referred = null;
      this.referralData = null;
    }
  }

  getReferredNames() {
    return this.referralData ? `${this.referralData.names} ${this.referralData.lastNames}` : null;
  }

  getGroupLabel() {
    return this.groupData ?
      `Sector: ${this.groupData.sector} / Sub-sector: ${this.groupData.subSector} / Grupo #: ${this.groupData.number}`
      : null;
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

  // Modals
  async modalMember() {
    const updateData = (member: any) => {
      this.referralData = member || null;
      this.formData.referred = member ? member._id : null;
    };

    await this.globalSer.loadModal(
      AsignarConsolidadorPage,
      { selectedId: this.formData.referred },
      false,
      updateData
    );
  }

  async modalGroups() {
    const updateData = (group: any) => {
      this.groupData = group || null;
      this.formData.groupId = group ? group._id : null;
    };

    await this.globalSer.loadModal(
      AsignarGrupoFamiliarPage,
      { selectedId: this.formData.groupId },
      false,
      updateData
    );
  }

  validateData(): string|null {
    if (!checkPhone(this.formData.phone)) return 'Disculpe, pero debe indicar un número de teléfono válido.';
    if (!checkNameOrLastName(this.formData.names)) return 'Disculpe, pero debe indicar un nombre válido.';
    if (!checkNameOrLastName(this.formData.lastNames)) return 'Disculpe, pero debe indicar un apellido válido.';
    // if (!checkIfValueIsNumber(`${this.formData.role}`)) return 'Disculpe, pero debe seleccionar un rol para el miembro.';
    if (this.formData.consolidated && !this.formData.iAmConsolidator && !this.formData.referred)
      return 'Disculpe, pero debe seleccionar un miembro consolidador.';
    if (this.formData.attendGroup && !this.formData.groupId)
      return 'Disculpe, pero debe seleccionar un grupo familiar.';

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
