import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController, NavController} from '@ionic/angular';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import {IDetallesMiembro, IDetallesMiembroEdit, IDetallesMiembroTotals} from './detalles-miembro.model';
import {DetallesMiembroService} from './detalles-miembro.service';
import {AxiosService} from '../../../services/axios.service';
import {GlobalService} from '../../../services/global.service';
import {rolesListSingleText} from '../../../../Utils/data.static';
import {
  checkDate, checkEmail,
  checkIfValueIsNumber,
  checkNameOrLastName,
  checkPhone,
  onlyLettersInputValidation,
  onlyNumbersInputValidation
} from '../../../../Utils/validations.functions';

@Component({
  selector: 'app-detalles-miembro',
  templateUrl: './detalles-miembro.page.html',
  styleUrls: ['./detalles-miembro.page.scss'],
})
export class DetallesMiembroPage implements OnInit {
  // static data to edit values
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
  editRole = false;
  isAdmin = false;
  showAdminButtons = false;
  showDeleteButton = false;
  formData: IDetallesMiembroEdit | null = null;
  formDataRole: any = {
    roles: []
  };

  views: any = {
    data: {
      label: 'Datos del miembro',
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
      label: 'Hijos espirituales',
      show: false,
      referred: null,
      data: [],
    }
  };

  constructor(
    private activateRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private axios: AxiosService,
    public globalSer: GlobalService,
    private detallesMiembroService: DetallesMiembroService,
    private navCtrl: NavController,
    private router: Router,
  ) {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/ingresar']);
    else {
      this.documentTypes = detallesMiembroService.documentTypesList;
      this.educationLevel = detallesMiembroService.educationLevel;
      this.professions = detallesMiembroService.professionsList;
      this.bloodType = detallesMiembroService.bloodTypeList;
      this.companyType = detallesMiembroService.companyTypeList;
      this.civilStatus = detallesMiembroService.civilStatusList;
      this.gender = detallesMiembroService.genderList;
      this.departments = detallesMiembroService.departmentsList.map(d => d.department);
      this.maxDate = dayjs().format('YYYY-MM-DD');
      this.enableActions = this.globalSer.checkRoleToEnableAddOrUpdate();
    }
  }

  async ngOnInit() {
    await this.globalSer.presentLoading();
    this.isAdmin = this.globalSer.checkRoleIsSuperAdmin();
    this.showAdminButtons = this.globalSer.checkRoleToEnableAddOrUpdate();
    this.id = this.activateRoute.snapshot.paramMap.get('userid');
    const data: any = await this.detallesMiembroService.getUserDetails(this.id);

    if (data && !data.error) {
      this.staticData = {...data} as IDetallesMiembro;
      this.views.data.data = this.staticData;
      this.views.referrals.referred = this.staticData.referred;
      this.totals = this.staticData.totals;
      this.showDeleteButton = (this.isAdmin && !this.globalSer.checkRoles(data.roles, [0]));

      this.setUserParams();
      this.getCourses();
      this.getReferrals();
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async ionViewWillEnter() {
    if (!this.globalSer.checkSession())
      await this.router.navigate(['/ingresar']);
  }

  async updateData() {
    await this.globalSer.presentLoading('Actualizando, por favor espere ...');

    const data: any = {...this.formData};
    if (data.documentType) data.document = `${data.documentType.toUpperCase()}${data.document}`;
    data.company = data.company === 'Si';
    data.baptized = data.baptized === 'Si';
    data.meetingNew = data.meetingNew === 'Si';
    if (data.position) data.position = data.position.trim().toUpperCase();

    const updated = await this.detallesMiembroService.updateDataUser(this.id, data);

    if (updated && !updated.error) {
      this.user = {...updated} as IDetallesMiembro;
      this.staticData = {...updated} as IDetallesMiembro;
      await this.setUserParams();
      await this.showFormEdit(true);
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado su perfil exitosamente.');
    }
    else if (updated && updated.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async updateRole() {
    await this.globalSer.presentLoading('Actualizando, por favor espere ...');
    const data: any = {...this.formDataRole};
    const updated = await this.detallesMiembroService.updateRoleUser(this.id, data);

    if (updated && !updated.error) {
      this.user.roles = data.roles;
      this.staticData.roles = data.roles;
      this.showFormEditRole();
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
    await this.globalSer.presentLoading('Eliminando miembro, por favor espere ...');

    const deleted = await this.detallesMiembroService.deleteUser(this.id);

    if (deleted && !deleted.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', deleted || 'Se ha eliminado los datos del miembro exitosamente.');
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
    if (this.staticData) {

      this.user = {...this.staticData} as IDetallesMiembro;
      this.title = `Detalles: ${this.user.names} ${this.user.lastNames}`;

      this.user.birthday = this.user.birthday ?
        dayjs(this.user.birthday, 'YYYY-MM-DD', true)
          .locale('es')
          .format('DD [de] MMMM [de] YYYY')
        : null;
      this.user.created_at = this.user.created_at ?
        dayjs(this.user.created_at, 'YYYY-MM-DD HH:mm:ss', true)
          .locale('es')
          .format('DD [de] MMMM [de] YYYY')
        : null;
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
  }

  async back() {
    await this.navCtrl.back();
  }

  // actions views
  async setShowView(input: string) {
    this.views[input].show = !this.views[input].show;
    if (this.views[input].edit) {
      await this.showFormEdit();
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
  async showFormEdit(edited = false) {
    if (!edited) await this.globalSer.presentLoading();

    this.views.data.edit = !this.views.data.edit;

    if (this.views.data.edit) {
      this.formData = {documentType: null, ...this.staticData} as IDetallesMiembroEdit;
      this.title = `Editar datos de: ${this.formData.names} ${this.formData.lastNames}`;
      this.formData.documentType = this.formData.document ? this.formData.document.replace(/[0-9]{5,12}/, '') : null;
      this.formData.document = this.formData.document ? this.formData.document.replace(/[A-Za-z]{1,3}/, '') : null;
      this.formData.company = this.formData.company ? 'Si' : 'No';
      this.formData.baptized = this.formData.baptized ? 'Si' : 'No';
      this.formData.meetingNew = this.formData.meetingNew ? 'Si' : 'No';
      if (!this.cities) this.getCity();
    }
    else {
      this.title = `Detalles: ${this.user.names} ${this.user.lastNames}`;
      this.formData = null;
    }

    if (!edited) await this.globalSer.dismissLoading();
  }

  showFormEditRole() {
    this.formDataRole.roles = !this.editRole ? [...this.staticData.roles] : [];
    this.editRole = !this.editRole;
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

  async showRolesListAlert(selected: any = []) {
    const inputs: any[] = [];
    const getValue = (i, v) => ({
      name: `value-${i}`,
      type: 'checkbox',
      label: v,
      value: i,
      checked: selected.includes(i),
    });

    for (const [i, value] of rolesListSingleText.entries()) {
      if (i === 0) {
        if (this.isAdmin) inputs.push(getValue(i, value));
      }
      else inputs.push(getValue(i, value));
    }

    await this.globalSer.alertWithList({
      header: 'Seleccione',
      inputs,
      confirmAction: (selectedValues: number[] = []) => {
        if (this.formDataRole.roles.includes(0)) this.formDataRole.roles = [0, ...selectedValues];
        else this.formDataRole.roles = selectedValues || [];
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
    if (!checkPhone(formData.phone))
      return 'Disculpe, pero debe indicar su número de teléfono.<br><br>NOTA: Recuerde que el número de teléfono es el miembro de acceso para a la cuenta del miembro.';
    if (!checkNameOrLastName(formData.names)) return 'Disculpe, pero debe indicar su nombre.';
    if (!checkNameOrLastName(formData.lastNames)) return 'Disculpe, pero debe indicar su apellido.';
    if (formData.documentType) {
      if (['CC', 'TI', 'PAS', 'CE', 'PE'].indexOf(`${formData.documentType}`) === -1) return 'Disculpe, pero debe seleccionar un tipo de documento.';
      if (!/[0-9]{5,9}/.test(`${formData.document}`)) return 'Disculpe, pero debe indicar su número de documento.';
    }
    if (formData.email) if (!checkEmail(formData.email)) return 'Disculpe, pero debe indicar su correo electrónico.';
    if (formData.birthday) if (!checkDate(formData.birthday)) return 'Disculpe, pero debe indicar su fecha de nacimiento.';
    if (formData.company !== null && formData.company === 'Si')
      if (!checkIfValueIsNumber(`${formData.companyType}`)) return 'Disculpe, pero debe indicar el tipo de empresa que posee.';

    return null;
  }

  validateRoleData(): string|null {
    const { roles } = this.formDataRole;
    if (!roles || roles?.length === 0) return 'Disculpe, pero el rol seleccionado es incorrecto.';
    if (!roles.some(r => [0, 1, 2, 3, 4].includes(r))) return 'Disculpe, pero el rol seleccionado es incorrecto.';
    return null;
  }

  async confirmUpdate() {
    const validated = this.validateData();

    if (validated) await this.globalSer.presentAlert('Alerta', validated);
    else {
      await this.globalSer.alertConfirm({
        header: 'Confirme',
        message: '¿Está seguro qué desea actualizar información de este miembro?',
        confirmAction: () => this.updateData()
      });
    }
  }

  async confirmUpdateRole() {
    const validated = this.validateRoleData();

    if (validated) await this.globalSer.presentAlert('Alerta', validated);
    else {
      await this.globalSer.alertConfirm({
        header: 'Confirme',
        message: '¿Está seguro qué desea cambiar el rol de este miembro?',
        confirmAction: () => this.updateRole()
      });
    }
  }

  async confirmDelete() {
    await this.globalSer.alertConfirm({
      header: 'Confirme',
      message: '¿Está seguro qué desea eliminar toda la información de este miembro?',
      confirmAction: () => this.deleteUser()
    });
  }

}
