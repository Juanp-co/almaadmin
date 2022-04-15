(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-familias-familias-module"],{

/***/ "MJQ5":
/*!***************************************************!*\
  !*** ./src/app/views/familias/familias.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYW1pbGlhcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "NA/9":
/*!***********************************************************!*\
  !*** ./src/app/views/familias/familias-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: FamiliasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamiliasPageRoutingModule", function() { return FamiliasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _familias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./familias.page */ "sss9");




const routes = [
    {
        path: '',
        component: _familias_page__WEBPACK_IMPORTED_MODULE_3__["FamiliasPage"]
    },
    {
        path: ':id',
        loadChildren: () => __webpack_require__.e(/*! import() | familias-detalles-familias-detalles-module */ "familias-detalles-familias-detalles-module").then(__webpack_require__.bind(null, /*! ./familias-detalles/familias-detalles.module */ "Rvzy")).then(m => m.FamiliasDetallesPageModule)
    }
];
let FamiliasPageRoutingModule = class FamiliasPageRoutingModule {
};
FamiliasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FamiliasPageRoutingModule);



/***/ }),

/***/ "c341":
/*!****************************************************!*\
  !*** ./src/app/views/familias/familias.service.ts ***!
  \****************************************************/
/*! exports provided: FamiliasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamiliasService", function() { return FamiliasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");




let FamiliasService = class FamiliasService {
    constructor(axios, globalSer) {
        this.axios = axios;
        this.globalSer = globalSer;
    }
    // axios actions
    getGroupsTotals(query = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/admin/groups/counters', query);
            if (res && res.success)
                return res.data.totals;
            return this.globalSer.altResponse(res);
        });
    }
    getGroups(query = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/admin/groups', query);
            if (res && res.success)
                return res.data.groups;
            return this.globalSer.altResponse(res);
        });
    }
    getGroupDetails(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData(`/admin/groups/${id}`);
            if (res && res.success)
                return res.data.group;
            return this.globalSer.altResponse(res);
        });
    }
    addGroup(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.postData(`/admin/groups`, data);
            if (res && res.success)
                return res.data.group;
            return this.globalSer.altResponse(res);
        });
    }
    updateGroup(id, data = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.putData(`/admin/groups/${id}`, data);
            if (res && res.success)
                return res.data.group;
            return this.globalSer.altResponse(res);
        });
    }
    deleteGroup(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.deleteData(`/admin/groups/${id}`);
            if (res && res.success)
                return res.data.msg;
            return this.globalSer.altResponse(res);
        });
    }
    updateMembersListGroup(id, action, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.putData(`/admin/groups/${id}/members/${action}`, data);
            if (res && res.success)
                return res.data.msg;
            return this.globalSer.altResponse(res);
        });
    }
    findMembersToGroup(id, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData(`/admin/groups/${id}/find-members`, data);
            if (res && res.success)
                return res.data.users;
            return this.globalSer.altResponse(res);
        });
    }
};
FamiliasService.ctorParameters = () => [
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_2__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }
];
FamiliasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FamiliasService);



/***/ }),

/***/ "c9Jc":
/*!***************************************************!*\
  !*** ./src/app/views/familias/familias.module.ts ***!
  \***************************************************/
/*! exports provided: FamiliasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamiliasPageModule", function() { return FamiliasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _familias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./familias-routing.module */ "NA/9");
/* harmony import */ var _familias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./familias.page */ "sss9");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let FamiliasPageModule = class FamiliasPageModule {
};
FamiliasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _familias_routing_module__WEBPACK_IMPORTED_MODULE_5__["FamiliasPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_familias_page__WEBPACK_IMPORTED_MODULE_6__["FamiliasPage"]]
    })
], FamiliasPageModule);



/***/ }),

/***/ "gh9K":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/familias/familias.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Familias</ion-title>\r\n    <ion-buttons slot=\"end\" *ngIf=\"showAddButton\">\r\n      <ion-button color=\"primary\" (click)=\"setShowForm()\" *ngIf=\"!showForm\">\r\n        <ion-icon name=\"{{showForm ? 'close' : 'add'}}-outline\" slot=\"start\"></ion-icon>\r\n        <ion-text>{{ showForm ? 'Cancelar' : 'Agregar grupo'}}</ion-text>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row class=\"ion-margin-bottom\">\r\n    <ion-col class=\"ion-no-margin\" size=\"12\" *ngIf=\"showForm && formData\">\r\n      <ion-card>\r\n        <ion-card-content>\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"medium\">Nombre del grupo (*)</ion-label>\r\n                <ion-input [(ngModel)]=\"formData.name\" autocomplete=\"off\" class=\"ion-text-uppercase\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top\">\r\n              <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top ion-margin-bottom ion-text-center\">\r\n              <ion-button color=\"medium\" (click)=\"setShowForm()\">\r\n                <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\r\n                <ion-text>Cancelar</ion-text>\r\n              </ion-button>\r\n              <ion-button color=\"primary\" (click)=\"confirmAction({})\">\r\n                <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\r\n                <ion-text>Guardar</ion-text>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"12\">\r\n      <ion-row>\r\n        <ion-col [size]=\"12\" size-sm=\"7\">\r\n          <ion-searchbar\r\n            (ionChange)=\"searchInput($event)\"\r\n            placeholder=\"Buscar por nombre o código\"\r\n            showCancelButton=\"focus\"\r\n            [debounce]=[200]\r\n            class=\"toUpper\"\r\n          ></ion-searchbar>\r\n        </ion-col>\r\n        <ion-col [size]=\"12\" size-sm=\"5\">\r\n          <ion-toolbar>\r\n            <ion-button color=\"medium\" (click)=\"setSortOrder()\">\r\n              <ion-icon name=\"arrow-up-outline\" *ngIf=\"queryParams.value === 1\"></ion-icon>\r\n              <ion-icon name=\"arrow-down-outline\" *ngIf=\"queryParams.value === -1\"></ion-icon>&nbsp;\r\n              <ion-text>{{ queryParams.value === 1 ? 'ASC' : 'DES' }}</ion-text>\r\n            </ion-button>\r\n            <ion-button color=\"medium\" (click)=\"setQueryValues()\">\r\n              <ion-icon name=\"filter-outline\"></ion-icon>&nbsp;\r\n              <ion-text>{{ queryParams.limit }}</ion-text>\r\n            </ion-button>\r\n          </ion-toolbar>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row *ngIf=\"groups && groups.length > 0; else noGroups\">\r\n    <ion-col size=\"12\" size-sm=\"6\" *ngFor='let g of groups' (click)=\"showGroup(g._id)\">\r\n      <app-familiacard [data]=\"g\"></app-familiacard>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <div class=\"ion-margin-top\" *ngIf=\"groups && groups.length > 0 && pages > 0\">\r\n    <app-paginator\r\n      [totalPages]=\"pages\"\r\n      [currentPage]=\"queryParams.page\"\r\n      [handlePage]=\"handlePage\"\r\n    ></app-paginator>\r\n  </div>\r\n\r\n  <ng-template #noGroups>\r\n    <ion-card class=\"ion-no-padding\">\r\n      <ion-text color=\"medium\">\r\n        <p class=\"ion-text-center\"><ion-icon name=\"alert-circle-outline\"></ion-icon> No existen familias registradas.</p>\r\n      </ion-text>\r\n    </ion-card>\r\n  </ng-template>\r\n</ion-content>\r\n");

/***/ }),

/***/ "sss9":
/*!*************************************************!*\
  !*** ./src/app/views/familias/familias.page.ts ***!
  \*************************************************/
/*! exports provided: FamiliasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamiliasPage", function() { return FamiliasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_familias_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./familias.page.html */ "gh9K");
/* harmony import */ var _familias_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./familias.page.scss */ "MJQ5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_cookies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/cookies.service */ "QTu/");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _familias_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./familias.service */ "c341");
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Utils/validations.functions */ "OmbT");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");











let FamiliasPage = class FamiliasPage {
    constructor(alertCtrl, axios, cookieService, globalSer, router, familiasService) {
        this.alertCtrl = alertCtrl;
        this.axios = axios;
        this.cookieService = cookieService;
        this.globalSer = globalSer;
        this.router = router;
        this.familiasService = familiasService;
        this.showAddButton = false;
        this.showFilter = false;
        this.showForm = false;
        this.groups = [];
        this.totals = 0;
        this.pages = 0;
        this.page = 1;
        this.queryParams = {
            input: 'name',
            value: -1,
            page: 1,
            limit: 10,
            word: null
        };
        this.formData = {
            name: null,
            code: null,
        };
        this.handlePage = (page) => {
            this.queryParams.page = page;
            this.getGroupList();
        };
        // check if exist session
        if (!this.globalSer.checkSession())
            this.router.navigate(['/ingresar']);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // await this.getTotals();
            this.showAddButton = this.globalSer.checkRoleToEnableAddOrUpdate();
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.globalSer.checkSession())
                this.router.navigate(['/ingresar']);
            else
                yield this.getTotals();
        });
    }
    getTotals() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.totals = 0;
            this.pages = 0;
            const totals = yield this.familiasService.getGroupsTotals(this.queryParams);
            if (!!totals && totals >= 0 && !totals.error) {
                this.totals = totals;
                this.pages = this.globalSer.getPagination(totals, this.queryParams.limit);
                if (totals > 0)
                    yield this.getGroupList();
                else {
                    this.queryParams.page = 1;
                    this.pages = 0;
                    this.groups = [];
                }
            }
            else if (!!totals && totals.error) {
                this.queryParams.page = 1;
                this.pages = 0;
                this.groups = [];
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero no se encontró una sesión activa.');
                this.router.navigate(['/ingresar']);
            }
            else {
                this.queryParams.page = 1;
                this.pages = 0;
                this.groups = [];
            }
        });
    }
    getGroupList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.showFilter)
                this.showFilter = false;
            const data = yield this.familiasService.getGroups(this.queryParams);
            if (data && !data.error) {
                this.groups = data;
            }
            else if (data && data.error) {
                yield this.globalSer.errorSession();
            }
        });
    }
    addGroup() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = this.formData;
            const res = yield this.familiasService.addGroup(data);
            if (res && !res.error) {
                this.groups.push(res);
                this.setShowForm();
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', 'Se ha registrado el grupo exitosamente.');
            }
            else if (res && res.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    deleteGroup(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.familiasService.deleteGroup(id);
            if (data && !data.error) {
                this.groups = this.groups.filter(g => g._id !== id);
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', 'Se ha eliminado los datos del grupo exitosamente.');
            }
            else if (data && data.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    // filter actions
    setShowForm() {
        if (this.showForm) {
            this.formData.name = null;
            this.formData.code = null;
            this.showForm = false;
        }
        else
            this.showForm = true;
    }
    searchInput(value) {
        if (this.timer)
            clearTimeout(this.timer);
        this.timer = setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.pages = 0;
            this.queryParams.page = 1;
            this.queryParams.word = value.target.value || null;
            yield this.getTotals();
        }), 200);
    }
    setSortOrder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.queryParams.value = this.queryParams.value === 1 ? -1 : 1;
            this.queryParams.page = 1;
            this.groups = null;
            yield this.getGroupList();
        });
    }
    findData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.queryParams.page = 1;
            this.pages = 0;
            this.groups = null;
            yield this.getTotals();
        });
    }
    setQueryValues() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                confirmAction: (selectedValue) => {
                    this.queryParams.limit = selectedValue;
                    this.queryParams.page = 1;
                    this.pages = this.globalSer.getPagination(this.totals, this.queryParams.limit);
                    this.groups = null;
                    this.getGroupList();
                }
            });
        });
    }
    // actions
    validateForm() {
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_9__["checkTitlesOrDescriptions"])(this.formData.name))
            return 'Disculpe, pero debe indicar un nombre correcto para el grupo.';
        return null;
    }
    showGroup(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const group = this.groups.find(e => e._id === id);
            if (group) {
                const alert = yield this.alertCtrl.create({
                    header: group.name,
                    message: `<b>Código:</b> ${group.code}<br/>
          <b>Total de miembros:</b> ${group.totalMembers || 0}<br/>
        `,
                    buttons: [
                        {
                            text: 'Eliminar',
                            role: 'delete',
                            handler: () => { this.confirmAction({ id: group._id, remove: true }); }
                        },
                        {
                            text: 'Ver detalles',
                            handler: () => { this.router.navigate([`/familias/${id}`]); }
                        },
                    ]
                });
                yield alert.present();
            }
        });
    }
    confirmAction({ id, remove }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let showConfirm = true;
            if (this.showForm) {
                const validate = this.validateForm();
                if (!validate)
                    showConfirm = true;
                else {
                    showConfirm = false;
                    yield this.globalSer.presentAlert('¡Error!', validate || 'Disculpe, pero debe completar el formulario.');
                }
            }
            if (showConfirm) {
                let message = '¿Está seguro qué desea __action__ este grupo?';
                if (remove)
                    message = message.replace('__action__', 'eliminar a');
                else
                    message = message.replace('__action__', 'registrar a');
                this.globalSer.alertConfirm({
                    header: 'Confirme',
                    message,
                    confirmAction: () => {
                        if (remove)
                            this.deleteGroup(id);
                        else
                            this.addGroup();
                    }
                });
            }
        });
    }
};
FamiliasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"] },
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_5__["AxiosService"] },
    { type: _services_cookies_service__WEBPACK_IMPORTED_MODULE_6__["CookiesService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _familias_service__WEBPACK_IMPORTED_MODULE_8__["FamiliasService"] }
];
FamiliasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-familias',
        template: _raw_loader_familias_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_familias_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FamiliasPage);



/***/ })

}]);
//# sourceMappingURL=views-familias-familias-module.js.map