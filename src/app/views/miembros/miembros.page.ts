import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import dayjs from 'dayjs';
import {AxiosService} from '../../services/axios.service';
import {CookiesService} from '../../services/cookies.service';
import {GlobalService} from '../../services/global.service';
import {MiembrosService} from './miembros.service';
import {AlertController} from '@ionic/angular';
import {IMiembros} from './miembros.model';
import {DetallesMiembroService} from './detalles-miembro/detalles-miembro.service';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.page.html',
  styleUrls: ['./miembros.page.scss'],
})
export class MiembrosPage implements OnInit {
  timer;
  professions = [];
  companyType = [];
  educationLevel = [];
  bloodType = [];
  departments = [];
  cities = [];
  civilStatus = [];
  gender = [];
  documentTypes = [];

  users: IMiembros[] | null = null;
  totals = 0;
  pages = 0;
  page = 1;
  showRegisterButton = false;
  queryParams: any = {
    limit: 10,
    page: 1,
    input: 'names',
    value: 1,
    search: null
  };

  handlePage = (page: number): void => {
    this.queryParams.page = page;
    this.getData();
  };

  constructor(
    private alertCtrl: AlertController,
    private axios: AxiosService,
    private cookieService: CookiesService,
    private detallesMiembroService: DetallesMiembroService,
    private globalSer: GlobalService,
    private miembrosServices: MiembrosService,
    private router: Router,
  ) {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/ingresar']);
    else {

      this.documentTypes = detallesMiembroService.documentTypesList;
      this.educationLevel = detallesMiembroService.educationLevel;
      this.professions = detallesMiembroService.professionsList;
      this.bloodType = detallesMiembroService.bloodTypeList;
      this.companyType = detallesMiembroService.companyTypeList;
      this.civilStatus = detallesMiembroService.civilStatusList;
      this.gender = detallesMiembroService.genderList;
      this.departments = detallesMiembroService.departmentsList.map(d => d.department);
    }
  }

  async ngOnInit() {
    // get role to show register button
    this.showRegisterButton = this.globalSer.checkRoleToEnableAddOrUpdate();
  }

  async ionViewWillEnter() {
    if (!this.globalSer.checkSession())
      this.router.navigate(['/ingresar']);
    else {
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
    // await this.globalSer.presentLoading();
    const data: any = await this.miembrosServices.getUsersList(this.queryParams);

    if (data && !data.error) {
      this.users = data as IMiembros[];
    }
    else if (data && data.error) {
      this.users = [];
      this.pages = 0;
      await this.globalSer.dismissLoading();
    }
    else {
      this.users = [];
      this.pages = 0;
      await this.globalSer.presentAlert('Alerta', data?.error || '¡Error desconocido!');
    }
  }

  async downloadData() {
    await this.globalSer.presentLoading();
    const data: any = await this.miembrosServices.getAllUsers();

    if (data && !data.error) {
      const keys = [
        { key: 'phone', key2: 'Telefono' },
        { key: 'document', key2: 'NumDocumento' },
        { key: 'names', key2: 'Nombres' },
        { key: 'lastNames', key2: 'Apellidos' },
        { key: 'email', key2: 'Correo' },
        { key: 'gender', key2: 'Genero' },
        { key: 'birthday', key2: 'FechaNacimiento' },
        { key: 'civilStatus', key2: 'EstadoCivil' },
        { key: 'educationLevel', key2: 'NivelEducativo' },
        { key: 'profession', key2: 'Profesion' },
        { key: 'bloodType', key2: 'TipoSangre' },
        { key: 'company', key2: 'Empresa' },
        { key: 'companyType', key2: 'TipoEmpresa' },
        { key: 'baptized', key2: 'Bautizado' },
        { key: 'roles', key2: 'CargoIglesia' },
        { key: 'consolidated', key2: 'Consolidado' },
        { key: 'petition', key2: 'Peticion' },
        { key: 'meetingNew', key2: 'ReunionIngreso' },
        { key: 'department', key2: 'Departamento' },
        { key: 'city', key2: 'Ciudad' },
        { key: 'locality', key2: 'Localidad' },
        { key: 'direction', key2: 'Direccion' },
        { key: 'created_at', key2: 'FechaRegistro' },
      ];

      const model = [];

      data.forEach((d, i) => {
        const m: any = {
          Number: i + 1,
          Telefono: null,
          NumDocumento: null,
          Nombres: null,
          Apellidos: null,
          Correo: null,
          Genero: null,
          FechaNacimiento: null,
          EstadoCivil: null,
          NivelEducativo: null,
          Profesion: null,
          TipoSangre: null,
          Empresa: null,
          TipoEmpresa: null,
          Bautizado: null,
          CargoIglesia: null,
          Consolidado: null,
          Peticion: null,
          ReunionIngreso: null,
          Departamento: null,
          Ciudad: null,
          Localidad: null,
          Direccion: null,
          FechaRegistro: null,
        };

        keys.forEach(k => {
          if (d[k.key]) {
            if (k.key === 'civilStatus') m[k.key2] = this.civilStatus[d[k.key]];
            else if (k.key === 'educationLevel') m[k.key2] = this.educationLevel[d[k.key]];
            else if (k.key === 'profession') m[k.key2] = this.professions[d[k.key]];
            else if (k.key === 'bloodType') m[k.key2] = this.bloodType[d[k.key]];
            else if (k.key === 'company') m[k.key2] = d[k.key] ? 'SI' : 'NO';
            else if (k.key === 'consolidated') m[k.key2] = d[k.key] ? 'SI' : 'NO';
            else if (k.key === 'baptized') m[k.key2] = d[k.key] ? 'SI' : 'NO';
            else if (k.key === 'meetingNew') m[k.key2] = d[k.key] ? 'SI' : 'NO';
            else if (k.key === 'roles') m[k.key2] = this.globalSer.getRoleValue(d[k.key]);
            else if (k.key === 'companyType') m[k.key2] = this.companyType[d[k.key]];
            else if (k.key === 'gender') m[k.key2] = this.gender[d[k.key]];
            else if (k.key === 'department') m[k.key2] = this.departments[d[k.key]];
            else if (k.key === 'city')  {
              const depto = this.detallesMiembroService.departmentsList[d[k.key]] || null;
              m[k.key2] = depto?.cities[d[k.key]] || null;
            }
            else m[k.key2] = d[k.key];
          }
        });

        model.push(m);
      });

      this.globalSer.downloadCSVFromJson(
        `Miembros_CCADV_${dayjs().format('YYYY-MM-DD[_]HH:mm:ss')}.csv`,
        model
      );
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else {
      await this.globalSer.dismissLoading();
    }
  }

  async setSortOrder() {
    this.queryParams.value = this.queryParams.value === 1 ? -1 : 1;
    this.queryParams.page = 1;
    this.users = null;
    await this.getData();
  }

  searchInput(value) {
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(async () => {
      this.pages = 0;
      this.queryParams.page = 1;
      this.queryParams.search = value.target.value || null ;
      await this.getTotals();
    }, 200);
  }

  async findData() {
    this.queryParams.page = 1;
    this.pages = 0;
    this.users = null;
    await this.getTotals();
  }

  async setQueryValues() {
    const update = (selectedValue) => {
      this.queryParams.limit = selectedValue;
      this.queryParams.page = 1;
      this.pages = this.globalSer.getPagination(this.totals, this.queryParams.limit);
      this.users = null;
      this.getData();
    };

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
      confirmAction: (data: any) => update(data)
    });
  }

  async goToRegister() {
    await this.router.navigate(['/miembros/registro']);
  }

}
