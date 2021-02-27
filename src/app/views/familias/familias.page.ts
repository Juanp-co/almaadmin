import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AxiosService} from '../../services/axios.service';
import {CookiesService} from '../../services/cookies.service';
import {GlobalService} from '../../services/global.service';
import {FamiliasService} from './familias.service';
import {checkCodeValue, checkTitlesOrDescriptions} from '../../../Utils/validations.functions';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-familias',
  templateUrl: './familias.page.html',
  styleUrls: ['./familias.page.scss'],
})
export class FamiliasPage implements OnInit {
  showFilter = false;
  showForm = false;
  groups: any = [];
  totals = 0;
  pages = 0;
  page = 1;
  queryParams: any = {
    input: 'name',
    value: -1,
    page: 1,
    limit: 10,
    word: null
  };
  formData: any = {
    name: null,
    code: null,
  };

  handlePage = (page: number): void => {
    this.queryParams.page = page;
    this.getGroupList();
  }

  constructor(
    private alertCtrl: AlertController,
    private axios: AxiosService,
    private cookieService: CookiesService,
    private globalSer: GlobalService,
    private router: Router,
    private familiasService: FamiliasService,
  ) {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/ingresar']);
  }

  async ngOnInit() {
    // await this.getTotals();
  }

  async ionViewWillEnter() {
    if (!this.globalSer.checkSession())
      this.router.navigate(['/ingresar']);
    else await this.getTotals();
  }

  async getTotals() {
    this.totals = 0;
    this.pages = 0;
    const totals: any = await this.familiasService.getGroupsTotals(this.queryParams);

    if (!!totals && totals >= 0 && !totals.error) {
      this.totals = totals;
      this.pages = this.globalSer.getPagination(totals, this.queryParams.limit);

      if (totals > 0) await this.getGroupList();
      else {
        this.queryParams.page = 1;
        this.pages = 0;
        this.groups = [];
      }
    }
    else if (!!totals && totals.error) {
      this.queryParams.page = 1;
      this.pages = 0;
      this.groups = [];
      if (totals.status && totals.status === 401) {
        await this.globalSer.presentAlert('Alerta', 'Disculpe, pero no se encontró una sesión activa.');
        this.router.navigate(['/ingresar']);
      }
    }
    else {
      this.queryParams.page = 1;
      this.pages = 0;
      this.groups = [];
    }
  }

  async getGroupList() {
    if (this.showFilter) this.showFilter = false;
    await this.globalSer.presentLoading();
    const data: any = await this.familiasService.getGroups(this.queryParams);

    if (data && !data.error) {
      this.groups = data;
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async addGroup() {
    await this.globalSer.presentLoading();
    const data = this.formData;
    const res: any = await this.familiasService.addGroup(data);

    if (res && !res.error) {
      this.groups.push(res);
      this.setShowForm();
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', 'Se ha agregado el grupo exitosamente.');
    }
    else if (res && res.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async deleteGroup(id: string) {
    await this.globalSer.presentLoading();
    const data: any = await this.familiasService.deleteGroup(id);

    if (data && !data.error) {
      this.groups = this.groups.filter(g => g._id !== id);
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', 'Se ha eliminado los datos del grupo exitosamente.');
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  // filter actions
  setShowForm() {
    if (this.showForm) {
      this.formData.name = null;
      this.formData.code = null;
      this.showForm = false;
    }
    else this.showForm = true;
  }

  async setSortOrder() {
    this.queryParams.value = this.queryParams.value === 1 ? -1 : 1;
    this.queryParams.page = 1;
    this.groups = null;
    await this.getGroupList();
  }

  async findData() {
    this.queryParams.page = 1;
    this.pages = 0;
    this.groups = null;
    await this.getTotals();
  }

  async setQueryValues() {
    const alert = await this.alertCtrl.create({
      header: 'Cursos por página',
      inputs: [
        {
          name: `results-per-page`,
          type: 'radio',
          label: `10`,
          value: 10,
          checked: this.queryParams.limit === 10,
        },
        {
          name: `results-per-page`,
          type: 'radio',
          label: `25`,
          value: 25,
          checked: this.queryParams.limit === 25,
        },
        {
          name: `results-per-page`,
          type: 'radio',
          label: `50`,
          value: 50,
          checked: this.queryParams.limit === 50,
        },
      ],
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
            this.queryParams.limit = selectedValue;
            this.queryParams.page = 1;
            this.pages = this.globalSer.getPagination(this.totals, this.queryParams.limit);
            this.groups = null;
            this.getGroupList();
          }
        }
      ]
    });
    await alert.present();
  }

  // actions

  validateForm(): string|null {
    if (!checkTitlesOrDescriptions(this.formData.name)) return 'Disculpe, pero debe indicar un nombre correcto para el grupo.';
    if (this.formData.code && !checkCodeValue(this.formData.code))
      return 'Disculpe, pero el código indicado es incorrecto. Ejemplos de código: COD-01 ó GRUPO-NUEVO-1';
    return null;
  }

  async showGroup(id: string) {
    const group = this.groups.find(e => e._id === id);

    if (group) {
      const alert = await this.alertCtrl.create({
        header: group.name,
        message: `<b>Código:</b> ${group.code}<br/>
          <b>Total de miembros:</b> ${group.totalMembers || 0}<br/>
        `,
        buttons: [
          {
            text: 'Eliminar',
            role: 'delete',
            handler: () => { this.confirmAction({ id: group._id, remove: true }); }
          },
          {
            text: 'Ver detalles',
            handler: () => { this.router.navigate([`/familias/${id}`]); }
          },
        ]
      });

      await alert.present();
    }
  }

  async confirmAction({ id, remove }: any) {
    let showConfirm = true;

    if (this.showForm) {
      const validate = this.validateForm();
      if (!validate) showConfirm = true;
      else {
        showConfirm = false;
        await this.globalSer.presentAlert('¡Error!', validate || 'Disculpe, pero debe completar el formulario.');
      }
    }

    if (showConfirm) {
      let message = '¿Está seguro qué desea __action__ este grupo?';

      if (remove) message = message.replace('__action__', 'eliminar');
      else message = message.replace('__action__', 'registrar');

      const dAlert = await this.alertCtrl.create({
        header: '¡Confirme!',
        message,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => { }
          }, {
            text: 'Si',
            handler: () => {
              if (remove) this.deleteGroup(id);
              else this.addGroup();
            }
          }
        ]
      });
      await dAlert.present();
    }
  }

}
