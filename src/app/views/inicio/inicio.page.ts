import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import dayjs from 'dayjs';
import {InicioService} from './inicio.service';
import {GlobalService} from '../../services/global.service';
import {AxiosService} from '../../services/axios.service';
import {CookiesService} from '../../services/cookies.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  data: any = null;
  sizeElems = 6;
  showFilter = false;
  minInitDate: string = dayjs('2020-01-01').format('YYYY-MM-DD');
  maxInitDate: string = dayjs().format('YYYY-MM-DD');
  minEndDate: string = dayjs('2020-01-01').format('YYYY-MM-DD');
  maxEndDate: string = dayjs().add(2, 'y').format('YYYY-MM-DD');
  queryParams: any = {
    initDate: null,
    endDate: null,
  };

  constructor(
    private axios: AxiosService,
    private cookieService: CookiesService,
    private globalSer: GlobalService,
    private inicioService: InicioService,
    private router: Router,
  ) {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/ingresar']);
  }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    if (!this.globalSer.checkSession()) this.router.navigate(['/ingresar']);
    else await this.getData();
  }

  async getData() {
    await this.globalSer.presentLoading();

    const data = await this.inicioService.getReports(this.queryParams);

    if (data && !data.error) {
      this.data = data;
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  // actions views
  async showListResizeAlert() {
    const setResizeElements = (value) => {
      this.sizeElems = value;
    };
    await this.globalSer.alertWithList({
      header: 'Tamaños de las gráficas',
      inputs: [
        {
          name: `resize`,
          type: 'radio',
          label: `Mediano`,
          value: 6,
          checked: this.sizeElems === 6,
        },
        {
          name: `resize`,
          type: 'radio',
          label: `Grande`,
          value: 12,
          checked: this.sizeElems === 12,
        },
      ],
      confirmAction: setResizeElements
    });
  }

  setShowFilter() {
    this.showFilter = !this.showFilter;
  }

  async resetQueryParams() {
    this.queryParams.initDate = null;
    this.queryParams.endDate = null;
    this.showFilter = !this.showFilter;

    this.data = null;
    await this.getData();
  }

  async findData() {
    let find = false;
    if (this.queryParams.initDate) {
      this.queryParams.initDate = dayjs(this.queryParams.initDate).format('YYYY-MM-DD');
      find = true;
    }
    if (this.queryParams.endDate) {
      this.queryParams.endDate = dayjs(this.queryParams.endDate).format('YYYY-MM-DD');
      find = this.queryParams.initDate !== null;
    }

    if (find) {
      this.data = null;
      await this.getData();
    }
    else this.globalSer.presentAlert('Alerta', 'Disculpe, pero debe indicar una fecha inicial');
  }
}
