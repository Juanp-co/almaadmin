(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-miembros-miembros-module"],{

/***/ "PI0l":
/*!***************************************************!*\
  !*** ./src/app/views/miembros/miembros.module.ts ***!
  \***************************************************/
/*! exports provided: MiembrosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiembrosPageModule", function() { return MiembrosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _miembros_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./miembros-routing.module */ "eOAY");
/* harmony import */ var _miembros_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./miembros.page */ "xc0G");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let MiembrosPageModule = class MiembrosPageModule {
};
MiembrosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _miembros_routing_module__WEBPACK_IMPORTED_MODULE_5__["MiembrosPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
        ],
        declarations: [_miembros_page__WEBPACK_IMPORTED_MODULE_6__["MiembrosPage"]]
    })
], MiembrosPageModule);



/***/ }),

/***/ "SQlU":
/*!***************************************************!*\
  !*** ./src/app/views/miembros/miembros.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaWVtYnJvcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "eOAY":
/*!***********************************************************!*\
  !*** ./src/app/views/miembros/miembros-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MiembrosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiembrosPageRoutingModule", function() { return MiembrosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _miembros_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./miembros.page */ "xc0G");




const routes = [
    {
        path: '',
        component: _miembros_page__WEBPACK_IMPORTED_MODULE_3__["MiembrosPage"]
    },
    {
        path: 'registro',
        loadChildren: () => Promise.all(/*! import() | registro-registro-module */[__webpack_require__.e("common"), __webpack_require__.e("registro-registro-module")]).then(__webpack_require__.bind(null, /*! ./registro/registro.module */ "3V3w")).then(m => m.RegistroPageModule)
    },
    {
        path: ':userid',
        loadChildren: () => __webpack_require__.e(/*! import() | detalles-miembro-detalles-miembro-module */ "detalles-miembro-detalles-miembro-module").then(__webpack_require__.bind(null, /*! ./detalles-miembro/detalles-miembro.module */ "ZMlI")).then(m => m.DetallesMiembroPageModule)
    },
    {
        path: 'asignar-consolidador',
        loadChildren: () => Promise.all(/*! import() | asignar-consolidador-asignar-consolidador-module */[__webpack_require__.e("common"), __webpack_require__.e("asignar-consolidador-asignar-consolidador-module")]).then(__webpack_require__.bind(null, /*! ./asignar-consolidador/asignar-consolidador.module */ "F1ym")).then(m => m.AsignarConsolidadorPageModule)
    },
    {
        path: 'asignar-grupo-familiar',
        loadChildren: () => Promise.all(/*! import() | asignar-grupo-familiar-asignar-grupo-familiar-module */[__webpack_require__.e("common"), __webpack_require__.e("asignar-grupo-familiar-asignar-grupo-familiar-module")]).then(__webpack_require__.bind(null, /*! ./asignar-grupo-familiar/asignar-grupo-familiar.module */ "Cvgr")).then(m => m.AsignarGrupoFamiliarPageModule)
    },
];
let MiembrosPageRoutingModule = class MiembrosPageRoutingModule {
};
MiembrosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MiembrosPageRoutingModule);



/***/ }),

/***/ "iN9u":
/*!*****************************************************************************!*\
  !*** ./src/app/views/miembros/detalles-miembro/detalles-miembro.service.ts ***!
  \*****************************************************************************/
/*! exports provided: DetallesMiembroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesMiembroService", function() { return DetallesMiembroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");
/* harmony import */ var _Utils_profile_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Utils/profile.data */ "0ox5");
/* harmony import */ var _Utils_locations_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Utils/locations.data */ "ZrT4");






let DetallesMiembroService = class DetallesMiembroService {
    constructor(axios, globalSer) {
        this.axios = axios;
        this.globalSer = globalSer;
        this.professionsList = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_4__["professions"];
        this.companyTypeList = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_4__["companyType"];
        this.departmentsList = _Utils_locations_data__WEBPACK_IMPORTED_MODULE_5__["departments"];
        this.educationLevel = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_4__["educationLevels"];
        this.bloodTypeList = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_4__["bloodType"];
        this.civilStatusList = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_4__["civilStatus"];
        this.genderList = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_4__["gender"];
        this.documentTypesList = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_4__["documentType"];
    }
    getUserDetails(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData(`/admin/users/${id}`);
            if (res && res.success)
                return res.data.user;
            return this.globalSer.altResponse(res);
        });
    }
    updateDataUser(id, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.putData(`/admin/users/${id}`, data);
            if (res && res.success)
                return res.data.user;
            return this.globalSer.altResponse(res);
        });
    }
    updateRoleUser(id, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.putData(`/admin/users/${id}/role`, data);
            if (res && res.success)
                return res.data.msg || 'Se asignado el nuevo rol al miembro exitosamente.';
            return this.globalSer.altResponse(res);
        });
    }
    deleteUser(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.deleteData(`/admin/users/${id}`);
            if (res && res.success)
                return res.data.msg;
            return this.globalSer.altResponse(res);
        });
    }
    getUsersCourses(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData(`/admin/users/${id}/courses`);
            if (res && res.success)
                return res.data.courses || [];
            return this.globalSer.altResponse(res);
        });
    }
    getUsersReferrals(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData(`/admin/users/${id}/referrals`);
            if (res && res.success)
                return res.data.referrals || [];
            return this.globalSer.altResponse(res);
        });
    }
};
DetallesMiembroService.ctorParameters = () => [
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_2__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }
];
DetallesMiembroService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DetallesMiembroService);



/***/ }),

/***/ "otgs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/miembros/miembros.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Miembros</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" (click)=\"goToRegister()\" *ngIf=\"showRegisterButton\">\n        <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Registrar miembro</ion-text>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-row>\n          <ion-col [size]=\"12\" size-sm=\"6\">\n            <ion-toolbar>\n              <ion-button color=\"medium\" (click)=\"queryParams.word = null; findData()\" slot=\"start\" *ngIf=\"queryParams.word\">\n                <ion-icon name=\"backspace-outline\"></ion-icon>\n              </ion-button>\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Buscar</ion-label>\n                <ion-input\n                  [(ngModel)]=\"queryParams.search\"\n                  autocomplete=\"off\"\n                  class=\"ion-text-uppercase\"\n                ></ion-input>\n              </ion-item>\n              <ion-button color=\"medium\" (click)=\"queryParams.word !== null || queryParams.word !== '' ? findData() : null\" slot=\"end\">\n                <ion-icon name=\"search-outline\"></ion-icon>\n              </ion-button>\n            </ion-toolbar>\n          </ion-col>\n          <ion-col [size]=\"12\" size-sm=\"6\">\n            <ion-toolbar>\n              <ion-button color=\"medium\" (click)=\"setSortOrder()\">\n                <!--<ion-icon name=\"funnel-outline\" slot=\"start\"></ion-icon>-->\n                <ion-icon name=\"arrow-up-outline\" *ngIf=\"queryParams.value === 1\"></ion-icon>\n                <ion-icon name=\"arrow-down-outline\" *ngIf=\"queryParams.value === -1\"></ion-icon>&nbsp;\n                <ion-text>{{ queryParams.value === 1 ? 'ASC' : 'DES' }}</ion-text>\n              </ion-button>\n              <ion-button color=\"medium\" (click)=\"setQueryValues()\">\n                <ion-icon name=\"filter-outline\"></ion-icon>&nbsp;\n                <ion-text>{{ queryParams.limit }}</ion-text>\n              </ion-button>\n              <ion-button (click)=\"downloadData()\">\n                <ion-icon name=\"download-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Descargar datos</ion-text>\n              </ion-button>\n            </ion-toolbar>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"users && users.length > 0\">\n      <ion-col size=\"12\" size-sm=\"6\" *ngFor=\"let user of users\">\n        <app-usercard [data]=\"user\" [list]=\"true\"></app-usercard>\n      </ion-col>\n    </ion-row>\n\n    <div *ngIf=\"users && users.length > 0 && pages > 0\">\n      <app-paginator\n        [totalPages]=\"pages\"\n        [currentPage]=\"queryParams.page\"\n        [handlePage]=\"handlePage\"\n      ></app-paginator>\n    </div>\n\n    <ion-row *ngIf=\"users !== null && users.length === 0\">\n      <ion-col>\n        <ion-card>\n          <ion-card-content class=\"ion-text-center\">\n            <ion-card-subtitle>\n              <ion-text>\n                <ion-icon name=\"alert-circle-outline\"></ion-icon>&nbsp;\n                No se encontraron resultados.\n              </ion-text>\n            </ion-card-subtitle>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "xc0G":
/*!*************************************************!*\
  !*** ./src/app/views/miembros/miembros.page.ts ***!
  \*************************************************/
/*! exports provided: MiembrosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiembrosPage", function() { return MiembrosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_miembros_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./miembros.page.html */ "otgs");
/* harmony import */ var _miembros_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./miembros.page.scss */ "SQlU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_cookies_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/cookies.service */ "QTu/");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _miembros_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./miembros.service */ "wJOZ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detalles_miembro_detalles_miembro_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./detalles-miembro/detalles-miembro.service */ "iN9u");












let MiembrosPage = class MiembrosPage {
    constructor(alertCtrl, axios, cookieService, detallesMiembroService, globalSer, miembrosServices, router) {
        this.alertCtrl = alertCtrl;
        this.axios = axios;
        this.cookieService = cookieService;
        this.detallesMiembroService = detallesMiembroService;
        this.globalSer = globalSer;
        this.miembrosServices = miembrosServices;
        this.router = router;
        this.professions = [];
        this.companyType = [];
        this.educationLevel = [];
        this.bloodType = [];
        this.departments = [];
        this.cities = [];
        this.civilStatus = [];
        this.gender = [];
        this.documentTypes = [];
        this.yesOrNotValues = ['No', 'Si'];
        this.users = null;
        this.totals = 0;
        this.pages = 0;
        this.page = 1;
        this.showRegisterButton = false;
        this.queryParams = {
            limit: 10,
            page: 1,
            input: 'names',
            value: 1,
            search: null
        };
        this.handlePage = (page) => {
            this.queryParams.page = page;
            this.getData();
        };
        // check if exist session
        if (!this.globalSer.checkSession())
            this.router.navigate(['/ingresar']);
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
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // get role to show register button
            this.showRegisterButton = this.globalSer.checkRoleToEnableAddOrUpdate();
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.globalSer.checkSession())
                this.router.navigate(['/ingresar']);
            else {
                // init get totals
                yield this.getTotals();
            }
        });
    }
    getTotals() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const totals = yield this.miembrosServices.getUsersCounters(this.queryParams);
            if (!!totals && totals >= 0 && !totals.error) {
                this.totals = totals;
                this.pages = this.globalSer.getPagination(totals, this.queryParams.limit);
                if (totals > 0)
                    yield this.getData();
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
                yield this.globalSer.errorSession();
            }
            else {
                this.queryParams.page = 1;
                this.pages = 0;
                this.users = [];
            }
        });
    }
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.miembrosServices.getUsersList(this.queryParams);
            if (data && !data.error) {
                this.users = data;
                yield this.globalSer.dismissLoading();
            }
            else if (data && data.error) {
                this.users = [];
                this.pages = 0;
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else {
                this.users = [];
                this.pages = 0;
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('Alerta', data ? data.error : '¡Error desconocido!');
            }
        });
    }
    downloadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.miembrosServices.getAllUsers();
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
                    const m = {
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
                            if (k.key === 'civilStatus')
                                m[k.key2] = this.civilStatus[d[k.key]];
                            else if (k.key === 'educationLevel')
                                m[k.key2] = this.educationLevel[d[k.key]];
                            else if (k.key === 'profession')
                                m[k.key2] = this.professions[d[k.key]];
                            else if (k.key === 'bloodType')
                                m[k.key2] = this.bloodType[d[k.key]];
                            else if (k.key === 'company')
                                m[k.key2] = d[k.key] ? 'SI' : 'NO';
                            else if (k.key === 'consolidated')
                                m[k.key2] = d[k.key] ? 'SI' : 'NO';
                            else if (k.key === 'baptized')
                                m[k.key2] = d[k.key] ? 'SI' : 'NO';
                            else if (k.key === 'meetingNew')
                                m[k.key2] = d[k.key] ? 'SI' : 'NO';
                            else if (k.key === 'roles')
                                m[k.key2] = this.globalSer.getRoleValue(d[k.key]);
                            else if (k.key === 'companyType')
                                m[k.key2] = this.companyType[d[k.key]];
                            else if (k.key === 'gender')
                                m[k.key2] = this.gender[d[k.key]];
                            else if (k.key === 'department')
                                m[k.key2] = this.departments[d[k.key]];
                            else if (k.key === 'city') {
                                const depto = this.detallesMiembroService.departmentsList[d[k.key]] || null;
                                m[k.key2] = (depto === null || depto === void 0 ? void 0 : depto.cities[d[k.key]]) || null;
                            }
                            else
                                m[k.key2] = d[k.key];
                        }
                    });
                    model.push(m);
                });
                this.globalSer.downloadCSVFromJson(`Miembros_CCADV_${dayjs__WEBPACK_IMPORTED_MODULE_5___default()().format('YYYY-MM-DD[_]HH:mm:ss')}.csv`, model);
                yield this.globalSer.dismissLoading();
            }
            else if (data && data.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else {
                yield this.globalSer.dismissLoading();
            }
        });
    }
    setSortOrder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.queryParams.value = this.queryParams.value === 1 ? -1 : 1;
            this.queryParams.page = 1;
            this.users = null;
            yield this.getData();
        });
    }
    findData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.queryParams.page = 1;
            this.pages = 0;
            this.users = null;
            yield this.getTotals();
        });
    }
    setQueryValues() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const update = (selectedValue) => {
                this.queryParams.limit = selectedValue;
                this.queryParams.page = 1;
                this.pages = this.globalSer.getPagination(this.totals, this.queryParams.limit);
                this.users = null;
                this.getData();
            };
            yield this.globalSer.alertWithList({
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
                confirmAction: (data) => update(data)
            });
        });
    }
    goToRegister() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['/miembros/registro']);
        });
    }
};
MiembrosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"] },
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_6__["AxiosService"] },
    { type: _services_cookies_service__WEBPACK_IMPORTED_MODULE_7__["CookiesService"] },
    { type: _detalles_miembro_detalles_miembro_service__WEBPACK_IMPORTED_MODULE_11__["DetallesMiembroService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"] },
    { type: _miembros_service__WEBPACK_IMPORTED_MODULE_9__["MiembrosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
MiembrosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-miembros',
        template: _raw_loader_miembros_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_miembros_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MiembrosPage);



/***/ })

}]);
//# sourceMappingURL=views-miembros-miembros-module.js.map