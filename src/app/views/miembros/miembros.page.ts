import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AxiosService} from '../../services/axios.service';
import {CookiesService} from '../../services/cookies.service';
import {GlobalService} from '../../services/global.service';
import {MiembrosService} from './miembros.service';
import {AlertController} from '@ionic/angular';
import {IMiembros} from './miembros.model';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.page.html',
  styleUrls: ['./miembros.page.scss'],
})
export class MiembrosPage implements OnInit {
  users: IMiembros[] | null = null;
  totals = 0;
  pages = 0;
  page = 1;
  showRegisterButton = false;
  queryParams: any = {
    limit: 10,
    page: 1,
    input: 'document',
    value: -1,
    word: null
  };

  handlePage = (page: number): void => {
    this.queryParams.page = page;
    this.getData();
  }

  constructor(
    private alertCtrl: AlertController,
    private axios: AxiosService,
    private cookieService: CookiesService,
    private globalSer: GlobalService,
    private miembrosServices: MiembrosService,
    private router: Router,
  ) {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/ingresar']);
  }

  async ngOnInit() {
  }

  async ionViewWillEnter() {
    if (!this.globalSer.checkSession())
      this.router.navigate(['/ingresar']);
    else {
      // get role to show register button
      if (this.globalSer.getRole() === 0) {
        this.showRegisterButton = true;
      }
      // init get totals
      await this.getTotals();
    }
  }

  async getTotals() {
    const totals: any = await this.miembrosServices.getUsersCounters(this.queryParams);

    if (!!totals && totals >= 0 && !totals.error) {
      this.totals = totals;
      this.pages = this.globalSer.getPagination(totals, this.queryParams.limit);

      if (totals > 0) await this.getData();
      else {
        this.queryParams.page = 1;
        this.pages = 0;
        this.users = [];
      }
    }
    else if (!!totals && totals.error) {
      this.queryParams.page = 1;
      this.pages = 0;
      this.users = [];
      await this.globalSer.errorSession();
    }
    else {
      this.queryParams.page = 1;
      this.pages = 0;
      this.users = [];
    }
  }

  async getData() {
    await this.globalSer.presentLoading();
    const data: any = await this.miembrosServices.getUsersList(this.queryParams);

    if (data && !data.error) {
      this.users = data as IMiembros[];
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      this.users = [];
      this.pages = 0;
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else {
      this.users = [];
      this.pages = 0;
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('Alerta', data ? data.error : '¡Error desconocido!');
    }

  }

  async setSortOrder() {
    this.queryParams.value = this.queryParams.value === 1 ? -1 : 1;
    this.queryParams.page = 1;
    this.users = null;
    await this.getData();
  }

  async findData() {
    this.queryParams.page = 1;
    this.pages = 0;
    this.users = null;
    await this.getTotals();
  }

  async setQueryValues() {
    const alert = await this.alertCtrl.create({
      header: 'Miembros por página',
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
            this.users = null;
            this.getData();
          }
        }
      ]
    });
    await alert.present();
  }

  async goToRegister() {
    await this.router.navigate(['/miembros/registro']);
  }

}
