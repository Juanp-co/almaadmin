import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {GruposService} from './grupos.service';
import {GlobalService} from '../../services/global.service';
import {onlyNumbersInputValidation2} from '../../../Utils/validations.functions';

@Component({
  selector: 'app-grupos-familiares',
  templateUrl: './grupos-familiares.page.html',
  styleUrls: ['./grupos-familiares.page.scss']
})
export class GruposFamiliaresPage implements OnInit {
  list: any[] = [
    { key: 'sector', label: 'sector' },
    { key: 'subSector', label: 'sub-sector' },
    { key: 'number', label: 'número' },
  ];
  showAddButton = false;
  showFilter = false;
  groups: any = [];
  totals = 0;
  pages = 0;
  page = 1;
  findFor: any = { key: 'sector', label: 'sector' };
  queryParams: any = {
    input: 'sector',
    value: 1,
    page: 1,
    limit: 10,
    sector: null,
    subSector: null,
    number: null
  };
  formData: any = {
    name: null,
    code: null,
  };

  handlePage = (page: number): void => {
    this.queryParams.page = page;
    this.getGroupList();
  };

  constructor(
    private globalSer: GlobalService,
    private gruposService: GruposService,
    private router: Router,
  ) {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/ingresar']);
  }

  async ngOnInit() {
    this.showAddButton = this.globalSer.checkRoleToEnableAddOrUpdate();
  }

  async ionViewWillEnter() {
    if (!this.globalSer.checkSession())
      await this.router.navigate(['/ingresar']);
    else await this.getTotals();
  }

  async getTotals() {
    this.totals = 0;
    this.pages = 0;
    const data: any = await this.gruposService.getTotalsGroups(this.queryParams);

    if (!!data && data >= 0 && !data.error) {
      this.totals = data;
      this.pages = this.globalSer.getPagination(data, this.queryParams.limit);

      if (data > 0) await this.getGroupList();
      else {
        this.queryParams.page = 1;
        this.pages = 0;
        this.groups = [];
      }
    }
    else if (!!data && data.error) {
      this.queryParams.page = 1;
      this.pages = 0;
      this.groups = [];
      await this.globalSer.presentAlert('Alerta', 'Disculpe, pero no se encontró una sesión activa.');
      await this.router.navigate(['/ingresar']);
    }
    else {
      this.queryParams.page = 1;
      this.pages = 0;
      this.groups = [];
    }
  }

  async getGroupList() {
    await this.globalSer.presentLoading();
    const data: any = await this.gruposService.getGroups(this.queryParams);

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

  setShowFilter() {
    this.showFilter = !this.showFilter;
  }

  async setSortOrder() {
    this.queryParams.value = this.queryParams.value === 1 ? -1 : 1;
    this.queryParams.page = 1;
    this.groups = null;
    await this.getTotals();
  }

  async cleanFilter() {
    this.queryParams.input = 'sector';
    this.findFor = this.list[0];
    this.queryParams.sector = null;
    this.queryParams.subSector = null;
    this.queryParams.number = null;
    await this.getTotals();
  }

  validateOnlyNumber(event: any) {
    onlyNumbersInputValidation2(event);
  }

  async findData() {
    this.queryParams.page = 1;
    this.pages = 0;
    this.groups = null;
    await this.getTotals();
  }

  async setFindFor() {
    const inputs: any[] = [];

    for (const value of this.list) {
      inputs.push({
        name: `find-for`,
        type: 'radio',
        label: value.label.toUpperCase(),
        value: value.key,
        checked: this.findFor.key === value.key,
      });
    }

    await this.globalSer.alertWithList({
      header: 'Seleccione',
      inputs,
      confirmAction: (selectedValue) => {
        const index = this.list.findIndex(l => l.key === selectedValue);
        this.queryParams.input = selectedValue;
        this.findFor = this.list[index];
        this.queryParams.sector = null;
        this.queryParams.subSector = null;
        this.queryParams.number = null;
      }
    });
  }

  async setQueryValues() {
    await this.globalSer.alertWithList({
      header: 'Resultados por página',
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
      confirmAction: (selectedValue) => {
        this.queryParams.limit = selectedValue;
        this.queryParams.page = 1;
        this.pages = this.globalSer.getPagination(this.totals, this.queryParams.limit);
        this.groups = null;
        this.getGroupList();
      }
    });
  }

  async goToCreate() {
    await this.router.navigate([`grupos-familiares/crear-grupo`]);
  }

  async goToDetails(id: string|null = null) {
    await this.router.navigate([`grupos-familiares/${id}`]);
  }

  async goToReports() {
    await this.router.navigate([`grupos-familiares/reportes`]);
  }

}
