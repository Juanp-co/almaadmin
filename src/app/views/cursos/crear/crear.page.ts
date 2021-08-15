import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {GlobalService} from '../../../services/global.service';
import {CursosService} from '../cursos.service';
import {rolesListTextWithoutAdmin} from '../../../../Utils/data.static';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  levels: any = [];
  formData: any = {
    title: null,
    description: null,
    level: null,
    toRoles: []
  };

  constructor(
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private cursosService: CursosService,
    private router: Router
  ) { }

  async ngOnInit() {
    // check if exist session
    if (!this.globalSer.checkSession()) await this.router.navigate(['/ingresar']);
    else this.levels = this.cursosService.levelsList;
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

  getLevel(level: number[]): string|null {
    const lvl = this.levels.find(l => l.val === level) || null;
    return lvl ? lvl.label : null;
  }

  getRoles(rolesList: number[]): string {
    let ret = '';
    if (rolesList.length > 0) {
      for (const v of rolesList) {
        if (ret === '') ret = rolesListTextWithoutAdmin[v - 1];
        else ret += `, ${rolesListTextWithoutAdmin[v - 1]}`;
      }
    }
    return ret;
  }

  // actions form
  async showLevelsListAlert(selected: any = []) {
    const inputs: any[] = [];
    for (const lvl of this.levels) {
      inputs.push({
        name: `lvls`,
        type: 'radio',
        label: lvl.label,
        value: lvl.val,
        checked: lvl.val === selected,
      });
    }

    await this.globalSer.alertWithList({
      inputs,
      confirmAction: (selectedValue) => { this.formData.level = selectedValue; }
    });
  }

  async showRoleListAlert(selected: any = []) {
    const inputs: any[] = [];
    for (const [i, value] of rolesListTextWithoutAdmin.entries()) {
      inputs.push({
        name: `roles`,
        type: 'checkbox',
        label: value,
        value: i + 1,
        checked: selected.indexOf(i + 1) > -1,
      });
    }

    await this.globalSer.alertWithList({
      inputs,
      confirmAction: (selectedValue) => { this.formData.toRoles = selectedValue; }
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
