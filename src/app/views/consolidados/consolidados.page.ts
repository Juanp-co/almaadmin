import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import {ConsolidadosService} from './consolidados.service';
import {DetallesConsolidadoPage} from './detalles-consolidado/detalles-consolidado.page';
import {GlobalService} from '../../services/global.service';
import {setSaltLinesOrBr} from '../../../Utils/validations.functions';

@Component({
  selector: 'app-consolidados',
  templateUrl: './consolidados.page.html',
  styleUrls: ['./consolidados.page.scss'],
})
export class ConsolidadosPage implements OnInit {

  reports: any[]|null = null;
  members: any[] = [];
  consolidates: any[] = [];
  pendingMembers: any[] = [];
  consolidatesPreview: any[] = [];
  pendingVisitsTotals = 0;

  sizeElems = 12;
  minInitDate: string = dayjs('2021-01-01').format('YYYY-MM-DD');
  maxInitDate: string = dayjs().format('YYYY-MM-DD');
  minEndDate: string = dayjs('2021-01-01').format('YYYY-MM-DD');
  maxEndDate: string = dayjs().format('YYYY-MM-DD');
  queryParams: any = {
    initDate: null,
    endDate: null,
    input: 'date',
    value: '-1'
  };
  views: any = {
    filter: false,
    totals: true,
    visits: true,
    members: true,
    pending: true,
  };

  constructor(
    private globalSer: GlobalService,
    private consolidadosService: ConsolidadosService,
    private router: Router,
  ) {
    dayjs.extend(duration);
    dayjs.extend(relativeTime);
  }

  async ngOnInit() {
    if (!this.globalSer.checkSession()) await this.router.navigate(['/ingresar']);
    // else await this.getData();
  }

  async ionViewWillEnter() {
    await this.getData();
  }

  async getData() {
    await this.globalSer.presentLoading();
    this.reports = null;
    this.pendingVisitsTotals = null;
    this.consolidates = [];
    this.consolidatesPreview = [];

    const data = await this.consolidadosService.getConsolidatesReport(this.queryParams);

    if (data && !data.error) {
      this.reports = data;
      this.members = data.members || [];
      this.setConsolidatesValues(data.consolidates || []);
      this.setPendingMembers(data.pendingVisits || []);
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async showListResizeAlert() {
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
      confirmAction: (value) => {
        this.sizeElems = value;
      }
    });
  }

  setView(key) {
    this.views[key] = !this.views[key];
  }

  async resetQueryParams() {
    this.queryParams.initDate = null;
    this.queryParams.endDate = null;
    this.views.filter = !this.views.filter;
    await this.getData();
  }

  async findData() {
    let find = false;
    if (!!this.queryParams.initDate) {
      this.queryParams.initDate = dayjs(this.queryParams.initDate).format('YYYY-MM-DD');
      find = true;
    }
    if (!!this.queryParams.endDate) {
      this.queryParams.endDate = dayjs(this.queryParams.endDate).format('YYYY-MM-DD');
      find = this.queryParams.initDate !== null;
    }

    if (find) await this.getData();
    else this.globalSer.presentAlert('Alerta', 'Disculpe, pero debe indicar una fecha inicial');
  }

  setConsolidatesValues(data: any) {
    this.consolidates = [];
    this.consolidatesPreview = [];
    if (data && data.length > 0) {
      this.consolidates = data;
      data.forEach(c => {
        this.consolidatesPreview.push({
          member: c.member,
          observation: c.observation.length > 50 ?
            `${setSaltLinesOrBr(c.observation.substr(0, 50))} ...`
            : (setSaltLinesOrBr(c.observation) || 'No indicada.'),
          date: c.date ?
            dayjs(c.date, 'YYYY-MM-DD', true)
              .locale('es')
              .format('dddd, DD [de] MMMM [de] YYYY')
            : 'No encontrada.',
        });
      });
    }
  }

  setPendingMembers(data) {
    this.pendingMembers = [];
    this.pendingVisitsTotals = data.length;
    if (this.pendingVisitsTotals > 0 && this.members.length > 0) {
      data.forEach((userid: string) => {
        const member = this.members.find(m => m._id === userid);
        if (member) this.pendingMembers.push(member);
      });
    }
  }

  // details
  async showDetails(index: number|null = null) {
    if (index !== null) {
      await this.globalSer.presentLoading();
      const data = this.consolidates[index] || null;
      if (data) {
        await this.globalSer.loadModal(
          DetallesConsolidadoPage,
          { data },
          true,
        );
        await this.globalSer.dismissLoading();
      }
      else {
        await this.globalSer.dismissLoading();
        await this.globalSer.presentAlert('Error', 'No se ha logrado determinar el elemento a visualizar.');
      }
    }
    else
      await this.globalSer.presentAlert('Error', 'No se ha logrado determinar el elemento a visualizar.');
  }

  // register visit
  async goToVisitRegisterForm() {
    await this.router.navigate([`consolidados/registrar-visita`]);
  }

}
