import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import dayjs from 'dayjs';
import {DevocionalesService} from './devocionales.service';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-devocionales',
  templateUrl: './devocionales.page.html',
  styleUrls: ['./devocionales.page.scss'],
})
export class DevocionalesPage implements OnInit {

  currentMaxDate = dayjs().format('YYYY-MM-DD');
  devotionals: any = null;
  showFilter = false;
  totals = 0;
  pages = 0;
  queryParams: any = {
    search: null,
    initDate: null,
    endDate: null,
    input: 'created_at',
    value: -1,
    limit: 10,
    page: 1,
  };

  handlePage = (page: number): void => {
    this.queryParams.page = page;
    this.getDevotionals();
  };

  constructor(
    private globalSer: GlobalService,
    private devocionalesService: DevocionalesService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    this.getTotalsDevotionals();
  }

  async getTotalsDevotionals() {
    this.queryParams.page = 1;
    this.totals = 0;
    this.pages = 0;
    this.devotionals = [];
    const data = await this.devocionalesService.getTotals(this.queryParams);

    if (data && !data.error) {
      this.totals = data;
      this.pages = this.globalSer.getPagination(this.totals, this.queryParams.limit);
      if (this.totals > 0) this.getDevotionals();
    }
    else if (data && data.error) {
      await this.globalSer.errorSession();
    }
  }

  async getDevotionals() {
    await this.globalSer.presentLoading();
    const data = await this.devocionalesService.getList(this.queryParams);

    if (data && !data.error) {
      this.devotionals = data || [];
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  /*
  Actions filter
   */
  setSearchParam(ev) {
    this.queryParams.search = ev.target?.value || null;
  }

  setShowFilter() {
    this.showFilter = !this.showFilter;
  }

  async resetQueryParams() {
    this.queryParams.initDate = null;
    this.queryParams.endDate = null;
    this.queryParams.search = null;
    this.queryParams.page = 1;
    this.pages = 0;
    this.totals = 0;
    this.showFilter = !this.showFilter;
    this.getTotalsDevotionals();
  }

  async setOrderData() {
    await this.globalSer.alertWithList({
      header: 'Seleccione',
      inputs: [
        {
          name: `order-asc`,
          type: 'radio',
          label: `Ascendente`,
          value: 1,
          checked: this.queryParams.value === 1,
        },
        {
          name: `order-desc`,
          type: 'radio',
          label: 'Descendente',
          value: -1,
          checked: this.queryParams.value === -1,
        }
      ],
      confirmAction: (selectedValue) => {
        this.queryParams.value = selectedValue;
      }
    });
  }

  setDate(input: string, ev: any) {
    this.queryParams[input] = dayjs(ev.target?.value).format('YYYY-MM-DD');
  }

  goToCreate() {
    this.router.navigate([`devocionales/crear`]);
  }

}
