import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {AxiosService} from '../../../services/axios.service';
import {GlobalService} from '../../../services/global.service';
import {CursosService} from '../cursos.service';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  formData: any = {
    title: null,
    description: null,
    banner: null,
    toRoles: []
  };
  roles: string[] = [
    'Pastores',
    'Supervisores',
    'Líderes',
    'Padres espirituales',
    'Personas',
  ];

  constructor(
    private activateRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private axios: AxiosService,
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private cursosService: CursosService,
    private router: Router,
    private dataService: DataService
  ) {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/ingresar']);
  }

  async ngOnInit() {
    // check if exist session
    if (!this.globalSer.checkSession()) await this.router.navigate(['/ingresar']);
  }

  async back() {
    await this.navCtrl.back();
  }

  async registerCourse() {
    await this.globalSer.presentLoading('Agregando curso, por favor espere ...');

    const data: any = {...this.formData};

    const res = await this.cursosService.createCourse(data);

    if (res && !res.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('Éxito', res || 'Se ha registrado el nuevo cuso exitosamente.');
      await this.back();
    }
    else if (res && res.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else {
      await this.globalSer.dismissLoading();
    }
  }

  // getters and setters

  getRoles(rolesList: number[]): string {
    let ret = '';
    if (rolesList.length > 0) {
      for (const v of rolesList) {
        if (ret === '') ret = this.roles[v - 1];
        else ret += `, ${this.roles[v - 1]}`;
      }
    }

    return ret;
  }

  // actions form
  openFile(event) {
    const files = event.target.files;

    if (typeof files[0] !== 'object') return false;
    else {
      this.dataService.resizePhoto(files[0], 900, 'dataURL',  (resizedFile) => {
        this.formData.banner = resizedFile;
      });
    }
  }

  async showRoleListAlert(selected: any = []) {
    const inputs: any = [];
    for (const [i, value] of this.roles.entries()) {
      inputs.push({
        name: `roles`,
        type: 'checkbox',
        label: value,
        value: i + 1,
        checked: selected.indexOf(i + 1) > -1,
      });
    }

    await this.globalSer.alertWithList({
      header: 'Seleccione los roles',
      inputs,
      confirmAction: (selectedValue) => {
        this.formData.toRoles = selectedValue;
      }
    });
  }

  async confirmCancel() {
    await this.globalSer.alertConfirm({
      header: 'Confirme',
      message: '¿Está seguro qué desea cancelar el registro del nuevo curso?',
      confirmAction: () => this.back()
    });
  }

  async confirmRegister() {
    const validated = this.cursosService.validationRegister(this.formData);

    if (!validated) {
      await this.globalSer.alertConfirm({
        header: 'Confirme',
        message: '¿Está seguro qué desea registrar este curso?',
        confirmAction: () => this.registerCourse()
      });
    }
    else {
      await this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
    }
  }

}
