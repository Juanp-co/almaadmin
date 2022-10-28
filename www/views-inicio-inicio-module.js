(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-inicio-inicio-module"],{

/***/ "F/dl":
/*!*********************************************!*\
  !*** ./src/app/views/inicio/inicio.page.ts ***!
  \*********************************************/
/*! exports provided: InicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPage", function() { return InicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inicio.page.html */ "gbIU");
/* harmony import */ var _inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio.page.scss */ "Y7Th");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _inicio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio.service */ "VYSl");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_cookies_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/cookies.service */ "QTu/");










let InicioPage = class InicioPage {
    constructor(axios, cookieService, globalSer, inicioService, router) {
        this.axios = axios;
        this.cookieService = cookieService;
        this.globalSer = globalSer;
        this.inicioService = inicioService;
        this.router = router;
        this.data = null;
        this.sizeElems = 6;
        this.showFilter = false;
        this.minInitDate = dayjs__WEBPACK_IMPORTED_MODULE_5___default()('2021-01-01').format('YYYY-MM-DD');
        this.maxInitDate = dayjs__WEBPACK_IMPORTED_MODULE_5___default()().format('YYYY-MM-DD');
        this.minEndDate = dayjs__WEBPACK_IMPORTED_MODULE_5___default()('2021-01-01').format('YYYY-MM-DD');
        this.maxEndDate = dayjs__WEBPACK_IMPORTED_MODULE_5___default()().add(2, 'y').format('YYYY-MM-DD');
        this.queryParams = {
            initDate: null,
            endDate: null,
        };
        // check if exist session
        if (!this.globalSer.checkSession())
            this.router.navigate(['/ingresar']);
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.globalSer.checkSession())
                this.router.navigate(['/ingresar']);
            else {
                this.getData();
                this.getChurches();
            }
        });
    }
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.inicioService.getReports(this.queryParams);
            if (data && !data.error) {
                this.data = data;
                yield this.globalSer.dismissLoading();
            }
            else if (data && data.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    getChurches() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield this.inicioService.getChurches();
            yield this.cookieService.setCookie('churches', data || []);
        });
    }
    // actions views
    showListResizeAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const setResizeElements = (value) => {
                this.sizeElems = value;
            };
            yield this.globalSer.alertWithList({
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
        });
    }
    setShowFilter() {
        this.showFilter = !this.showFilter;
    }
    resetQueryParams() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.queryParams.initDate = null;
            this.queryParams.endDate = null;
            this.showFilter = !this.showFilter;
            this.data = null;
            yield this.getData();
        });
    }
    findData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let find = false;
            if (this.queryParams.initDate) {
                this.queryParams.initDate = dayjs__WEBPACK_IMPORTED_MODULE_5___default()(this.queryParams.initDate).format('YYYY-MM-DD');
                find = true;
            }
            if (this.queryParams.endDate) {
                this.queryParams.endDate = dayjs__WEBPACK_IMPORTED_MODULE_5___default()(this.queryParams.endDate).format('YYYY-MM-DD');
                find = this.queryParams.initDate !== null;
            }
            if (find) {
                this.data = null;
                yield this.getData();
            }
            else
                this.globalSer.presentAlert('Alerta', 'Disculpe, pero debe indicar una fecha inicial');
        });
    }
};
InicioPage.ctorParameters = () => [
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_8__["AxiosService"] },
    { type: _services_cookies_service__WEBPACK_IMPORTED_MODULE_9__["CookiesService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _inicio_service__WEBPACK_IMPORTED_MODULE_6__["InicioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
InicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inicio',
        template: _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InicioPage);



/***/ }),

/***/ "FYWJ":
/*!*******************************************************!*\
  !*** ./src/app/views/inicio/inicio-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: InicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageRoutingModule", function() { return InicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio.page */ "F/dl");




const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_3__["InicioPage"]
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InicioPageRoutingModule);



/***/ }),

/***/ "VYSl":
/*!************************************************!*\
  !*** ./src/app/views/inicio/inicio.service.ts ***!
  \************************************************/
/*! exports provided: InicioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioService", function() { return InicioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");




let InicioService = class InicioService {
    constructor(axios, globalSer) {
        this.axios = axios;
        this.globalSer = globalSer;
    }
    // axios actions
    getReports(query = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/admin/reports', query);
            if (res && res.success)
                return res.data.report;
            return this.globalSer.altResponse(res);
        });
    }
    getChurches() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/churches');
            if (res && res.success)
                return res.data.churches || [];
            return [];
        });
    }
};
InicioService.ctorParameters = () => [
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_2__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }
];
InicioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InicioService);



/***/ }),

/***/ "Wtct":
/*!***********************************************!*\
  !*** ./src/app/views/inicio/inicio.module.ts ***!
  \***********************************************/
/*! exports provided: InicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio-routing.module */ "FYWJ");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio.page */ "F/dl");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let InicioPageModule = class InicioPageModule {
};
InicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
    })
], InicioPageModule);



/***/ }),

/***/ "Y7Th":
/*!***********************************************!*\
  !*** ./src/app/views/inicio/inicio.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmljaW8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "gbIU":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/inicio/inicio.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Inicio</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"showListResizeAlert()\">\r\n        <ion-icon name=\"resize-outline\" slot=\"start\"></ion-icon>\r\n        <ion-text>Visualización</ion-text>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row class=\"ion-no-padding ion-margin-start ion-margin-end ion-margin-top\">\r\n    <ion-col size=\"12\">\r\n      <div class=\"ion-margin-bottom\">\r\n        <ion-button color=\"medium\" (click)=\"setShowFilter()\">\r\n          <ion-icon name=\"filter-outline\" slot=\"start\" *ngIf=\"!showFilter\"></ion-icon>\r\n          <ion-icon name=\"close-outline\" slot=\"start\" *ngIf=\"showFilter\"></ion-icon>\r\n          <ion-text>Filtrar</ion-text>\r\n        </ion-button>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"12\" *ngIf=\"showFilter\">\r\n      <ion-card>\r\n        <ion-card-content>\r\n          <ion-row>\r\n            <ion-col size=\"12\" size-sm=\"6\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"medium\">A partir de:</ion-label>\r\n                <ion-datetime\r\n                  [(ngModel)]=\"queryParams.initDate\"\r\n                  displayFormat=\"DD/MM/YYYY\"\r\n                  [min]=\"minInitDate\"\r\n                  [max]=\"maxInitDate\"\r\n                  doneText=\"Listo\"\r\n                  cancelText=\"Cancelar\"\r\n                >\r\n                </ion-datetime>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"6\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"medium\">Hasta:</ion-label>\r\n                <ion-datetime\r\n                  [(ngModel)]=\"queryParams.endDate\"\r\n                  displayFormat=\"DD/MM/YYYY\"\r\n                  [min]=\"minEndDate\"\r\n                  [max]=\"maxEndDate\"\r\n                  doneText=\"Listo\"\r\n                  cancelText=\"Cancelar\"\r\n                >\r\n                </ion-datetime>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"ion-margin-top\">\r\n            <ion-col size=\"6\" class=\"ion-justify-content-center\">\r\n              <ion-button class=\"ion-text-center\" color=\"light\" expand=\"full\" (click)=\"resetQueryParams()\">\r\n                <ion-icon name=\"trash-outline\"></ion-icon>\r\n                <ion-text>Limpiar</ion-text>\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"ion-justify-content-center\">\r\n              <ion-button class=\"ion-text-center\" color=\"primary\" expand=\"full\" (click)=\"findData()\">\r\n                <ion-icon name=\"checkmark-outline\"></ion-icon>\r\n                <ion-text>Aplicar</ion-text>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"ion-justify-content-center ion-margin-bottom ion-padding-bottom\" *ngIf=\"data\">\r\n    <ion-col size=\"12\" [sizeSm]=\"sizeElems\" *ngIf=\"data.users && data.users.gender\">\r\n      <app-chart\r\n        [data]=\"data.users.gender\"\r\n        [sizeElem]=\"sizeElems\"\r\n        title=\"Miembros\"\r\n        typeChart=\"bar\"\r\n      ></app-chart>\r\n    </ion-col>\r\n    <ion-col size=\"12\" [sizeSm]=\"sizeElems\" *ngIf=\"data.users && data.users.families\">\r\n      <app-chart\r\n        [data]=\"data.users.families\"\r\n        [sizeElem]=\"sizeElems\"\r\n        title=\"Miembros en un familias\"\r\n        typeChart=\"bar\"\r\n      ></app-chart>\r\n    </ion-col>\r\n    <ion-col size=\"12\" [sizeSm]=\"sizeElems\" *ngIf=\"data.groups && data.groups\">\r\n      <app-chart\r\n        [data]=\"data.groups\"\r\n        [sizeElem]=\"sizeElems\"\r\n        title=\"Familias\"\r\n        typeChart=\"bar\"\r\n      ></app-chart>\r\n    </ion-col>\r\n    <ion-col size=\"12\" [sizeSm]=\"sizeElems\" *ngIf=\"data.users && data.users.roles\">\r\n      <app-chart\r\n        [data]=\"data.users.roles\"\r\n        [sizeElem]=\"sizeElems\"\r\n        title=\"Roles\"\r\n        typeChart=\"bar\"\r\n      ></app-chart>\r\n    </ion-col>\r\n    <ion-col size=\"12\" [sizeSm]=\"sizeElems\" *ngIf=\"data.users && data.users.ages\">\r\n      <app-chart\r\n        [data]=\"data.users.ages\"\r\n        [sizeElem]=\"sizeElems\"\r\n        title=\"Edades\"\r\n        typeChart=\"bar\"\r\n      ></app-chart>\r\n    </ion-col>\r\n    <ion-col size=\"12\" [sizeSm]=\"sizeElems\" *ngIf=\"data.courses\">\r\n      <app-chart\r\n        [data]=\"data.courses\"\r\n        [sizeElem]=\"sizeElems\"\r\n        title=\"Cursos\"\r\n        typeChart=\"pie\"\r\n      ></app-chart>\r\n    </ion-col>\r\n    <ion-col size=\"12\" [sizeSm]=\"sizeElems\" *ngIf=\"data.events\">\r\n      <app-chart\r\n        [data]=\"data.events\"\r\n        [sizeElem]=\"sizeElems\"\r\n        title=\"Eventos\"\r\n        typeChart=\"bar\"\r\n      ></app-chart>\r\n    </ion-col>\r\n    <ion-col size=\"12\" [sizeSm]=\"sizeElems\" *ngIf=\"data.consolidates\">\r\n      <app-chart\r\n        [data]=\"data.consolidates\"\r\n        [sizeElem]=\"sizeElems\"\r\n        title=\"Consolidaciones\"\r\n        typeChart=\"bar\"\r\n      ></app-chart>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=views-inicio-inicio-module.js.map