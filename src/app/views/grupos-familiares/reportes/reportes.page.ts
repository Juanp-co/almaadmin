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

  opts = ['Ninguno', 'Sub-sector', 'Sector'];
  reports: any[]|null = null;
  reportsAlt: any[]|null = null;
  listGroups: any[]|null = null;
  selected: any|null = null;
  report: any|null = null;
  observations: any[]|null = null;
  observationsPreview: any[]|null = null;
  dataToReport: any|null = null;

  totalityOpt = 0;
  sizeElems = 6;
  showFilter = false;
  showTotals = true;
  showObservations = true;
  minInitDate: string = dayjs('2021-01-01').format('YYYY-MM-DD');
  maxInitDate: string = dayjs().format('YYYY-MM-DD');
  minEndDate: string = dayjs('2021-01-01').format('YYYY-MM-DD');
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
      await this.globalSer.dismissLoading();
      await this.setTotalityData(true);
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

  // actions inputs
  validateOnlyNumber(event: any) {
    onlyNumbersInputValidation2(event);
  }

  async showListTotality() {
    const inputs: any[] = [];
    for (const [index, value] of this.opts.entries()) {
      inputs.push( {
        name: `list-opts`,
        type: 'radio',
        label: value,
        value: index,
        checked: index === this.totalityOpt,
      });
    }

    await this.globalSer.alertWithList({
      header: 'Totalizar por',
      inputs,
      confirmAction: async (value) => {
        this.totalityOpt = value;
        this.reportsAlt = null;
        await this.setTotalityData(true);
      }
    });
  }

  async setTotalityData(showLoader = false) {
    if (showLoader) await this.globalSer.presentLoading();
    const data: any[] = [];
    const model = () => ({
      _id: null,
      groupName: null,
      observations: [],
      report: {
        bibleReading: 0,
        brethren: 0,
        brethrenPlanning: 0,
        christianChildren: 0,
        christianChildrenFriends: 0,
        churchAttendance: 0,
        churchAttendanceChildren: 0,
        consolidated: 0,
        conversions: 0,
        conversionsChildren: 0,
        discipleshipVisits: 0,
        friends: 0,
        offering: 0,
        reconciliations: 0,
        scheduledVisits: 0,
        total: 0,
      }
    });
    const getReportCounter = (report: any, rData: any) => {
      report.bibleReading += rData?.bibleReading || 0;
      report.brethren += rData?.brethren || 0;
      report.brethrenPlanning += rData?.brethrenPlanning || 0;
      report.christianChildren += rData?.christianChildren || 0;
      report.christianChildrenFriends += rData?.christianChildrenFriends || 0;
      report.churchAttendance += rData?.churchAttendance || 0;
      report.churchAttendanceChildren += rData?.churchAttendanceChildren || 0;
      report.consolidated += rData?.consolidated || 0;
      report.conversions += rData?.conversions || 0;
      report.conversionsChildren += rData?.conversionsChildren || 0;
      report.discipleshipVisits += rData?.discipleshipVisits || 0;
      report.friends += rData?.friends || 0;
      report.offering += rData?.offering || 0;
      report.reconciliations += rData?.reconciliations || 0;
      report.scheduledVisits += rData?.scheduledVisits || 0;
      report.total += rData?.total || 0;
      return report;
    };
    let currentGroup: number|null = null;
    this.reportsAlt = null;
    const { length } = this.reports;

    if (length > 0) {
      if (this.totalityOpt !== 0) {
        let modelData: any = model();
        this.reports.forEach((d: any, i: number) => {
          if (d.group[this.totalityOpt === 1 ? 'subSector' : 'sector'] !== currentGroup) {
            if (currentGroup !== null) data.push(modelData);
            currentGroup = d.group[this.totalityOpt === 1 ? 'subSector' : 'sector'];
            modelData = model();
            modelData._id = i;
            modelData.groupName = `Sector: ${d.group.sector}`;
            if (this.totalityOpt === 1)
              modelData.groupName += ` - SS: ${d.group.subSector}`;
          }

          // concat observations list
          modelData.observations = modelData.observations?.concat(d.observations || []);
          // set data reports
          modelData.report = getReportCounter(modelData.report, d.report);
        });

        if (length > 0 && data.length === 0 && modelData) data.push(modelData);
      }
      else {
        let modelData: any = model();
        this.reports.forEach(d => {
          modelData = model();
          modelData._id = d.group._id;
          modelData.groupName = `S: ${d.group.sector}`;
          modelData.groupName += ` - SS: ${d.group.subSector}`;
          modelData.groupName += ` - #: ${d.group.number}`;

          // concat observations list
          modelData.observations = modelData.observations?.concat(d.observations || []);

          // set data reports
          modelData.report = getReportCounter(modelData.report, d.report);
          data.push(modelData);
        });
      }
      this.reportsAlt = data;
    }

    if (showLoader) await this.globalSer.dismissLoading();
  }

}
