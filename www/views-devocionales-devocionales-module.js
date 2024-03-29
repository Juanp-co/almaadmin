(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-devocionales-devocionales-module"],{

/***/ "I8jW":
/*!***********************************************************!*\
  !*** ./src/app/views/devocionales/devocionales.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  min-height: 110px !important;\n  display: inline-block;\n  height: 100% !important;\n  white-space: normal;\n}\n\n.card3 {\n  display: inline-block;\n  width: 40%;\n  white-space: normal;\n}\n\n.img_header {\n  height: 120px !important;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.title-card {\n  font-weight: 550 !important;\n}\n\n.description {\n  margin: 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkZXZvY2lvbmFsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBRUEsbUJBQUE7QUFBRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx3QkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUVGOztBQUFBO0VBQ0UsMkJBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7QUFJRiIsImZpbGUiOiJkZXZvY2lvbmFsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIG1pbi1oZWlnaHQ6IDExMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIC8vd2lkdGg6IDc1JTtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcbi5jYXJkMyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxufVxyXG4uaW1nX2hlYWRlcntcclxuICBoZWlnaHQ6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLnRpdGxlLWNhcmQge1xyXG4gIGZvbnQtd2VpZ2h0OiA1NTAgIWltcG9ydGFudDtcclxufVxyXG4uZGVzY3JpcHRpb257XHJcbiAgbWFyZ2luOiA1cHggMDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "L7qa":
/*!*********************************************************!*\
  !*** ./src/app/views/devocionales/devocionales.page.ts ***!
  \*********************************************************/
/*! exports provided: DevocionalesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevocionalesPage", function() { return DevocionalesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_devocionales_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./devocionales.page.html */ "q+9e");
/* harmony import */ var _devocionales_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./devocionales.page.scss */ "I8jW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _devocionales_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./devocionales.service */ "kQ27");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");








let DevocionalesPage = class DevocionalesPage {
    constructor(globalSer, devocionalesService, router) {
        this.globalSer = globalSer;
        this.devocionalesService = devocionalesService;
        this.router = router;
        this.currentMaxDate = dayjs__WEBPACK_IMPORTED_MODULE_5___default()().format('YYYY-MM-DD');
        this.devotionals = null;
        this.showFilter = false;
        this.showAddButton = false;
        this.totals = 0;
        this.pages = 0;
        this.queryParams = {
            search: null,
            initDate: null,
            endDate: null,
            input: 'created_at',
            value: -1,
            limit: 10,
            page: 1,
        };
        this.handlePage = (page) => {
            this.queryParams.page = page;
            this.getDevotionals();
        };
    }
    ngOnInit() {
        this.showAddButton = this.globalSer.checkRoleToEnableAddOrUpdate();
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getTotalsDevotionals();
        });
    }
    getTotalsDevotionals() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.queryParams.page = 1;
            this.totals = 0;
            this.pages = 0;
            this.devotionals = [];
            const data = yield this.devocionalesService.getTotals(this.queryParams);
            if (data && !data.error) {
                this.totals = data;
                this.pages = this.globalSer.getPagination(this.totals, this.queryParams.limit);
                if (this.totals > 0)
                    this.getDevotionals();
            }
            else if (data && data.error) {
                yield this.globalSer.errorSession();
            }
        });
    }
    getDevotionals() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.devocionalesService.getList(this.queryParams);
            if (data && !data.error) {
                this.devotionals = data || [];
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
    /*
    Actions filter
     */
    setSearchParam(ev) {
        var _a;
        this.queryParams.search = ((_a = ev.target) === null || _a === void 0 ? void 0 : _a.value) || null;
    }
    setShowFilter() {
        this.showFilter = !this.showFilter;
    }
    resetQueryParams() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.queryParams.initDate = null;
            this.queryParams.endDate = null;
            this.queryParams.search = null;
            this.queryParams.page = 1;
            this.pages = 0;
            this.totals = 0;
            this.showFilter = !this.showFilter;
            this.getTotalsDevotionals();
        });
    }
    setOrderData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertWithList({
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
        });
    }
    setDate(input, ev) {
        var _a;
        this.queryParams[input] = dayjs__WEBPACK_IMPORTED_MODULE_5___default()((_a = ev.target) === null || _a === void 0 ? void 0 : _a.value).format('YYYY-MM-DD');
    }
    goToCreate() {
        this.router.navigate([`devocionales/crear`]);
    }
};
DevocionalesPage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _devocionales_service__WEBPACK_IMPORTED_MODULE_6__["DevocionalesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DevocionalesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-devocionales',
        template: _raw_loader_devocionales_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_devocionales_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DevocionalesPage);



/***/ }),

/***/ "kQ27":
/*!************************************************************!*\
  !*** ./src/app/views/devocionales/devocionales.service.ts ***!
  \************************************************************/
/*! exports provided: DevocionalesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevocionalesService", function() { return DevocionalesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");




let DevocionalesService = class DevocionalesService {
    constructor(axios, globalSer) {
        this.axios = axios;
        this.globalSer = globalSer;
    }
    getTotals(query = {}) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/admin/devotionals/counters', query);
            if (res && res.success)
                return ((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.totals) || 0;
            return this.globalSer.altResponse(res);
        });
    }
    getList(query = {}) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/admin/devotionals', query);
            if (res && res.success)
                return ((_a = res.data) === null || _a === void 0 ? void 0 : _a.devotionals) || [];
            return this.globalSer.altResponse(res);
        });
    }
    getDetails(id) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData(`/admin/devotionals/${id}`);
            if (res && res.success)
                return ((_a = res.data) === null || _a === void 0 ? void 0 : _a.devotional) || {};
            return this.globalSer.altResponse(res);
        });
    }
    remove(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.deleteData(`/admin/devotionals/${id}`);
            if (res && res.success)
                return res.data || {};
            return this.globalSer.altResponse(res);
        });
    }
};
DevocionalesService.ctorParameters = () => [
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_2__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }
];
DevocionalesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DevocionalesService);



/***/ }),

/***/ "mIqK":
/*!*******************************************************************!*\
  !*** ./src/app/views/devocionales/devocionales-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: DevocionalesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevocionalesPageRoutingModule", function() { return DevocionalesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _devocionales_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./devocionales.page */ "L7qa");




const routes = [
    {
        path: '',
        component: _devocionales_page__WEBPACK_IMPORTED_MODULE_3__["DevocionalesPage"]
    },
    {
        path: 'crear',
        loadChildren: () => __webpack_require__.e(/*! import() | crear-devocionales-crear-devocionales-module */ "crear-devocionales-crear-devocionales-module").then(__webpack_require__.bind(null, /*! ./crear-devocionales/crear-devocionales.module */ "4n9M")).then(m => m.CrearDevocionalesPageModule)
    },
    {
        path: ':id',
        loadChildren: () => __webpack_require__.e(/*! import() | detalles-devocionales-detalles-devocionales-module */ "detalles-devocionales-detalles-devocionales-module").then(__webpack_require__.bind(null, /*! ./detalles-devocionales/detalles-devocionales.module */ "KjC7")).then(m => m.DetallesDevocionalesPageModule)
    },
];
let DevocionalesPageRoutingModule = class DevocionalesPageRoutingModule {
};
DevocionalesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DevocionalesPageRoutingModule);



/***/ }),

/***/ "q+9e":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/devocionales/devocionales.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Devocionales</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"primary\" (click)=\"goToCreate()\" *ngIf=\"showAddButton\">\r\n        <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\r\n        <ion-text>Crear devocional</ion-text>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row>\r\n    <ion-col size=\"12\">\r\n\r\n      <div class=\"ion-margin\">\r\n        <ion-button color=\"medium\" (click)=\"setShowFilter()\">\r\n          <ion-icon name=\"{{showFilter ? 'close' : 'filter'}}-outline\" slot=\"start\"></ion-icon>\r\n          <ion-text>Filtrar</ion-text>\r\n        </ion-button>\r\n      </div>\r\n\r\n      <ion-card *ngIf=\"showFilter\">\r\n        <ion-card-content>\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <h2>Filtrar resultados</h2>\r\n            </ion-col>\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"medium\">Título del devocional</ion-label>\r\n                <ion-input\r\n                  [value]=\"queryParams.search\"\r\n                  autocomplete=\"off\"\r\n                  maxlength=\"50\"\r\n                  (ionChange)=\"setSearchParam($event)\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"4\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"medium\">Orden:</ion-label>\r\n                <ion-input\r\n                  [readonly]=\"true\"\r\n                  class=\"no-selected-text no-selected-text\"\r\n                  [value]=\"queryParams.value === -1 ? 'Descendente' : 'Ascendente'\"\r\n                  (click)=\"setOrderData()\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"4\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"medium\">A partir de:</ion-label>\r\n                <ion-datetime\r\n                  [value]=\"queryParams.initDate\"\r\n                  displayFormat=\"DD/MM/YYYY\"\r\n                  min=\"2021-01-01\"\r\n                  [max]=\"currentMaxDate\"\r\n                  doneText=\"Listo\"\r\n                  cancelText=\"Cancelar\"\r\n                  (ionChange)=\"setDate('initDate', $event)\"\r\n                >\r\n                </ion-datetime>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"4\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"medium\">Hasta:</ion-label>\r\n                <ion-datetime\r\n                  [value]=\"queryParams.endDate\"\r\n                  displayFormat=\"DD/MM/YYYY\"\r\n                  min=\"2021-01-01\"\r\n                  [max]=\"currentMaxDate\"\r\n                  doneText=\"Listo\"\r\n                  cancelText=\"Cancelar\"\r\n                  (ionChange)=\"setDate('endDate', $event)\"\r\n                >\r\n                </ion-datetime>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"ion-margin-top\">\r\n            <ion-col size=\"6\" class=\"ion-justify-content-center\">\r\n              <ion-button class=\"ion-text-center\" color=\"medium\" expand=\"full\" (click)=\"resetQueryParams()\">\r\n                <ion-icon name=\"trash-outline\"></ion-icon>\r\n                <ion-text>Limpiar</ion-text>\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"ion-justify-content-center\">\r\n              <ion-button class=\"ion-text-center\" color=\"primary\" expand=\"full\" (click)=\"getTotalsDevotionals()\">\r\n                <ion-icon name=\"checkmark-outline\"></ion-icon>\r\n                <ion-text>Aplicar</ion-text>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"devotionals?.length > 0; else noDevotionals\">\r\n    <ion-col size=\"12\" size-sm=\"6\" *ngFor=\"let item of devotionals\">\r\n      <app-devocionales-card [item]=\"item\"></app-devocionales-card>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"12\"><br></ion-col>\r\n    <ion-col size=\"12\" *ngIf=\"pages > 1\">\r\n      <app-paginator\r\n        [currentPage]=\"queryParams.page\"\r\n        [totalPages]=\"pages\"\r\n        [handlePage]=\"handlePage\"\r\n      ></app-paginator>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ng-template #noDevotionals>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-card class=\"ion-no-padding ion-margin-top ion-margin-bottom\">\r\n          <ion-text color=\"medium\">\r\n            <p class=\"ion-text-center\">\r\n              <ion-icon name=\"alert-circle-outline\"></ion-icon> No existen devocionales registrados.\r\n            </p>\r\n          </ion-text>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ng-template>\r\n</ion-content>\r\n");

/***/ }),

/***/ "vOhD":
/*!***********************************************************!*\
  !*** ./src/app/views/devocionales/devocionales.module.ts ***!
  \***********************************************************/
/*! exports provided: DevocionalesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevocionalesPageModule", function() { return DevocionalesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _devocionales_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./devocionales-routing.module */ "mIqK");
/* harmony import */ var _devocionales_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./devocionales.page */ "L7qa");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let DevocionalesPageModule = class DevocionalesPageModule {
};
DevocionalesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _devocionales_routing_module__WEBPACK_IMPORTED_MODULE_5__["DevocionalesPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_devocionales_page__WEBPACK_IMPORTED_MODULE_6__["DevocionalesPage"]]
    })
], DevocionalesPageModule);



/***/ })

}]);
//# sourceMappingURL=views-devocionales-devocionales-module.js.map