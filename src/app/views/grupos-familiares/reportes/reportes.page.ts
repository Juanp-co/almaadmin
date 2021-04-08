import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import dayjs from 'dayjs';
import {GruposService} from '../grupos.service';
import {GlobalService} from '../../../services/global.service';
import {onlyNumbersInputValidation2} from '../../../../Utils/validations.functions';
import {formatCurrency} from '@angular/common';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {

  reports: any[]|null = null;
  listGroups: any[]|null = null;
  selected: any|null = null;
  report: any|null = null;
  observations: any[]|null = null;
  observationsPreview: any[]|null = null;
  dataToReport: any|null = null;

  sizeElems = 6;
  showFilter = false;
  showTotals = true;
  showObservations = true;
  minInitDate: string = dayjs('2020-01-01').format('YYYY-MM-DD');
  maxInitDate: string = dayjs().format('YYYY-MM-DD');
  minEndDate: string = dayjs('2020-01-01').format('YYYY-MM-DD');
  maxEndDate: string = dayjs().format('YYYY-MM-DD');
  queryParams: any = {
    sector: null,
    subSector: null,
    number: null,
    initDate: null,
    endDate: null,
  };

  constructor(
    public globalSer: GlobalService,
    private gruposService: GruposService,
    private navCtrl: NavController,
    private router: Router,
  ) {}

  async ngOnInit() {
    if (!this.globalSer.checkSession()) this.router.navigate(['/ingresar']);
    else await this.getData();
  }

  async getData() {
    await this.globalSer.presentLoading();
    this.reports = null;
    this.listGroups = null;
    this.selected = null;
    this.dataToReport = null;
    this.observations = [];
    this.observationsPreview = [];
    const data = await this.gruposService.getFamiliesGroupsReports(this.queryParams);
    if (data && !data.error) {
      this.reports = data;
      this.listGroups = this.reports.map(r => r.group);
      if (this.listGroups.length > 0) {
        this.selected = this.listGroups[0];
      }
      await this.setObservationsValues(this.reports.length > 0 ? this.reports[0].observations : null);
      await this.globalSer.dismissLoading();
      await this.setDataToReport(this.selected ? this.reports[0].report : null);
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async back() {
    await this.navCtrl.back();
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

  setShowFilter() {
    this.showFilter = !this.showFilter;
  }

  setShowTotals() {
    this.showTotals = !this.showTotals;
  }

  setShowObservations() {
    this.showObservations = !this.showObservations;
  }

  async resetQueryParams() {
    this.queryParams.initDate = null;
    this.queryParams.endDate = null;
    this.queryParams.sector = null;
    this.queryParams.subSector = null;
    this.queryParams.number = null;
    this.showFilter = !this.showFilter;
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
    if (/[0-9]{1,4}/.test(this.queryParams.sector)) find = true;
    if (/[0-9]{1,4}/.test(this.queryParams.subSector)) find = true;
    if (/[0-9]{1,4}/.test(this.queryParams.number)) find = true;

    if (find) await this.getData();
    else this.globalSer.presentAlert('Alerta', 'Disculpe, pero debe indicar una fecha inicial');
  }

  async setDataToReport(data: any) {
    await this.globalSer.presentLoading();
    this.dataToReport = null;
    this.dataToReport = !data ? null : {
      data1: {
        title: 'Hermanos',
        data: [
          {
            label: 'Hermanos',
            qty: data.brethren
          },
          {
            label: 'Amigos',
            qty: data.friends
          }
        ]
      },
      data2: {
        title: 'Niños',
        data: [
          {
            label: 'Niños',
            qty: data.christianChildren
          },
          {
            label: 'Amigos',
            qty: data.christianChildrenFriends
          },
        ]
      },
      data3: {
        title: 'Visitas',
        data: [
          {
            label: 'Programadas',
            qty: data.scheduledVisits
          },
          {
            label: 'Disipulado',
            qty: data.discipleshipVisits
          },
        ]
      },
      data4: {
        title: 'Asistencia',
        data: [
          {
            label: 'Hermanos',
            qty: data.churchAttendance
          },
          {
            label: 'Niños',
            qty: data.churchAttendanceChildren
          },
        ]
      },
      data5: {
        title: 'Conversiones y reconcilaciones',
        data: [
          {
            label: 'Reconciliaciones',
            qty: data.reconciliations
          },
          {
            label: 'Conversiones',
            qty: data.conversions
          },
          {
            label: 'Conversiones de niños',
            qty: data.conversionsChildren
          },
        ]
      },
      data6: {
        title: 'Otros',
        data: [
          {
            label: 'Planificación de hnos.',
            qty: data.brethrenPlanning
          },
          {
            label: 'Lectura bíblica',
            qty: data.bibleReading
          },
          {
            label: 'Consolidados',
            qty: data.consolidated
          },
        ]
      },
      totals: {
        title: 'Total de hermanos y niños',
        qty: data.total
      },
      offering: {
        title: 'Total de ofrendas',
        qty: formatCurrency(data.offering, 'es-CO', 'COP')
      },
    };
    await this.globalSer.dismissLoading();
  }

  async setObservationsValues(data: any) {
    this.observations = [];
    this.observationsPreview = [];
    if (data && data.length > 0) {
      this.observations = data;
      data.forEach(o => {
        this.observationsPreview.push({
          observation: o.observations.length > 50 ? `${o.observations.substr(0, 50)} ...` : o.observations,
          date: dayjs(o.date).format('DD-MM-YYYY HH:mm'),
        });
      });
    }
  }

  async showObservation(index: number) {
    const ob = this.observations[index] || null;
    if (ob) {
      await this.globalSer.presentAlert(
        'Observación',
        `<b>Fecha: </b>${dayjs(ob.date).format('DD-MM-YYYY HH:mm')} <br><br> ${ob.observations}`
      );
    }
    else
      await this.globalSer.presentAlert(
        'Error',
        `Disculpe, pero ha ocurrido un error al momento de cargar la observación.`
      );
  }

  // actions inputs
  validateOnlyNumber(event: any) {
    onlyNumbersInputValidation2(event);
  }

  getNumberGroup() {
    return this.selected ?
      `Sector #${this.selected.sector} / Sub-sector #${this.selected.subSector} / Grupo #${this.selected.number}`
      : null;
  }

  async showListGroups(id: string|null) {
    const inputs: any[] = [];
    for (const lg of this.listGroups) {
      inputs.push( {
        name: `list-groups`,
        type: 'radio',
        label: `S: ${lg.sector} / SS: ${lg.subSector} Nº ${lg.number}`,
        value: lg._id,
        checked: lg._id === id,
      });
    }

    await this.globalSer.alertWithList({
      header: 'Seleccione un grupo',
      inputs,
      confirmAction: async (value) => {
        if (value !== id) {
          this.dataToReport = null;
          const data = this.reports.find(r => r.group && r.group._id === value) || null;
          await this.setDataToReport(data ? data.report : null);
          this.selected = data ? data.group : null;
          await this.setObservationsValues(data ? data.observations : null);
        }
      }
    });
  }

}
