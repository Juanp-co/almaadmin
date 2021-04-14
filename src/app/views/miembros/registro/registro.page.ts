import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
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

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  roles = [];
  successRegister = false;
  successData: any = null;
  referralData: any = null;
  formData: any = {
    phone: null,
    names: null,
    lastNames: null,
    role: null,
    referred: null,
    addReferral: false,
    consolidated: false,
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

  checkReferralMember() {
    if (this.formData.addReferral) this.referralData = null;
    this.formData.addReferral = !this.formData.addReferral;
  }

  setConsolidatedValue() {
    this.formData.consolidated = !this.formData.consolidated;
  }

  getReferredNames() {
    return this.referralData ? `${this.referralData.names} ${this.referralData.lastNames}` : null;
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
      this.referralData = member || null;
      this.formData.referred = member ? member._id : null;
    };

    await this.globalSer.loadModal(
      AsignarConsolidadorPage,
      { selectedId: this.referralData ? this.referralData._id : null },
      false,
      updateData
    );
  }

  validateData(): string|null {
    if (!checkPhone(this.formData.phone)) return 'Disculpe, pero debe indicar un número de teléfono válido.';
    if (!checkNameOrLastName(this.formData.names)) return 'Disculpe, pero debe indicar un nombre válido.';
    if (!checkNameOrLastName(this.formData.lastNames)) return 'Disculpe, pero debe indicar un apellido válido.';
    if (!checkIfValueIsNumber(`${this.formData.role}`)) return 'Disculpe, pero debe seleccionar un rol para el miembro.';
    if (this.formData.addReferral && (!this.formData.referred || (this.formData.referred && this.formData.referred.length < 5)))
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
