import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController, NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {CursosService} from './cursos.service';
import {GlobalService} from '../../services/global.service';
import {AxiosService} from '../../services/axios.service';
import {CookiesService} from '../../services/cookies.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  courses: any = [];
  totals = 0;
  pages = 0;
  page = 1;
  queryParams: any = {
    input: 'title',
    value: 1,
    page: 1,
    limit: 10,
    title: null
  };

  handlePage = (page: number): void => {
    this.queryParams.page = page;
    this.getCoursesList();
  }

  constructor(
    private alertCtrl: AlertController,
    private axios: AxiosService,
    private cookieService: CookiesService,
    private cursosService: CursosService,
    private globalSer: GlobalService,
    private modalController: ModalController,
    private navCtrl: NavController,
    private router: Router,
  ) {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/ingresar']);
  }

  ngOnInit() {

  }

  async ionViewWillEnter() {
    if (!this.globalSer.checkSession())
      this.router.navigate(['/ingresar']);
    else await this.getTotals();
  }

  async getTotals() {
    this.totals = 0;
    this.pages = 0;
    const totals: any = await this.cursosService.getCoursesTotals(this.queryParams);

    if (!!totals && totals >= 0 && !totals.error) {
      this.totals = totals;
      this.pages = this.globalSer.getPagination(totals, this.queryParams.limit);

      if (totals > 0) await this.getCoursesList();
      else {
        this.queryParams.page = 1;
        this.pages = 0;
        this.courses = [];
      }
    }
    else if (!!totals && totals.error) {
      this.queryParams.page = 1;
      this.pages = 0;
      this.courses = [];
      if (totals.status && totals.status === 401) {
        await this.globalSer.presentAlert('Alerta', 'Disculpe, pero no se encontró una sesión activa.');
        this.router.navigate(['/ingresar']);
      }
    }
    else {
      this.queryParams.page = 1;
      this.pages = 0;
      this.courses = [];
    }
  }

  async getCoursesList() {
    // if (this.showFilter) this.showFilter = false;
    await this.globalSer.presentLoading();
    const data: any = await this.cursosService.getCourses(this.queryParams);

    if (data && !data.error) {
      this.courses = data;
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  // query actions
  async findData() {
    this.queryParams.page = 1;
    this.pages = 0;
    this.courses = null;
    await this.getTotals();
  }

  async setSortOrder() {
    this.queryParams.value = this.queryParams.value === 1 ? -1 : 1;
    this.queryParams.page = 1;
    this.courses = null;
    await this.getCoursesList();
  }

  async setQueryValues() {
    const alert = await this.alertCtrl.create({
      header: 'Cursos por página',
      inputs: [
        {
          name: `results-per-page`,
          type: 'radio',
          label: `5`,
          value: 5,
          checked: this.queryParams.limit === 5,
        },
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
            this.courses = null;
            this.getCoursesList();
          }
        }
      ]
    });
    await alert.present();
  }

  // others actions
  async goToCreate() {
    await this.router.navigate(['/cursos/crear']);
  }

}
