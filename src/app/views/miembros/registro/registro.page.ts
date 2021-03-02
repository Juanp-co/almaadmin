import { Component, OnInit } from '@angular/core';
import {AxiosService} from '../../../services/axios.service';
import {GlobalService} from '../../../services/global.service';
import {AlertController, NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {DetallesMiembroService} from '../detalles-miembro/detalles-miembro.service';
import {
  checkEmail, checkIfValueIsNumber,
  checkNameOrLastName, checkPhone, checkTitlesOrDescriptions,
  onlyLettersInputValidation,
  onlyNumbersInputValidation
} from '../../../../Utils/validations.functions';
import {IDetallesMiembro} from '../detalles-miembro/detalles-miembro.model';
import {MiembrosService} from '../miembros.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  roles: string[] = [
    'Administrador',
    'Pastor',
    'Supervisor',
    'Líder',
    'Padre espiritual',
    'Persona',
  ];
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
    const inputs: any = [];
    for (const [i, value] of this.roles.entries()) {
      inputs.push({
        name: `roles`,
        type: 'radio',
        label: value,
        value: i,
        checked: selected !== null && selected === i,
      });
    }

    const alert = await this.alertCtrl.create({
      header: 'Seleccione un rol',
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
            this.formData.role = selectedValue;
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

  async confirmCancel() {
    const alert = await this.alertCtrl.create({
      header: 'Confirme',
      message: '¿Está seguro qué desea cancelar el registro del nuevo miembro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'Sí',
          handler: () => {
            this.back();
          }
        }
      ]
    });

    await alert.present();
  }

  validateData(): string|null {
    if (!/^([CC|CE|PE|TI|PAS]){2,3}/.test(this.formData.documentType)) return 'Disculpe, pero debe indicar el tipo de documento.';
    if (!/[0-9]{5,10}/.test(this.formData.document)) return 'Disculpe, pero debe indicar el número de documento de identidad.';
    if (!checkNameOrLastName(this.formData.names)) return 'Disculpe, pero debe indicar un nombre.';
    if (!checkNameOrLastName(this.formData.lastNames)) return 'Disculpe, pero debe indicar un apellido.';
    if (!checkEmail(this.formData.email)) return 'Disculpe, pero debe indicar un correo electrónico válido.';
    if (this.formData.phone && !checkPhone(this.formData.phone)) return 'Disculpe, pero debe indicar un número de teléfono válido.';
    if (!checkIfValueIsNumber(`${this.formData.role}`)) return 'Disculpe, pero debe seleccionar un rol para el usuario..';

    return null;
  }

  async confirmRegister() {
    const validated = this.validateData();

    if (!validated) {
      const alert = await this.alertCtrl.create({
        header: 'Confirme',
        message: '¿Está seguro qué desea actualizar información de este usuario?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {}
          }, {
            text: 'Sí',
            handler: () => {
              this.registerMember();
            }
          }
        ]
      });
      await alert.present();
    }
    else {
      await this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
    }
  }
}
