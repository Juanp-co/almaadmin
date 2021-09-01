(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-consolidados-consolidados-module"],{

/***/ "1Zva":
/*!**************************************************************************************!*\
  !*** ./src/app/views/consolidados/detalles-consolidado/detalles-consolidado.page.ts ***!
  \**************************************************************************************/
/*! exports provided: DetallesConsolidadoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesConsolidadoPage", function() { return DetallesConsolidadoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalles_consolidado_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalles-consolidado.page.html */ "aPgz");
/* harmony import */ var _detalles_consolidado_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalles-consolidado.page.scss */ "rfJf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dayjs_locale_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs/locale/es */ "4HKe");
/* harmony import */ var dayjs_locale_es__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_es__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dayjs/plugin/duration */ "13Ln");
/* harmony import */ var dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "QgiU");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_8__);









let DetallesConsolidadoPage = class DetallesConsolidadoPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        dayjs__WEBPACK_IMPORTED_MODULE_5___default.a.extend(dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_7___default.a);
        dayjs__WEBPACK_IMPORTED_MODULE_5___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_8___default.a);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.data)
                yield this.closeModal();
            else
                this.data.date = this.data.date ?
                    dayjs__WEBPACK_IMPORTED_MODULE_5___default()(this.data.date, 'YYYY-MM-DD', true)
                        .locale('es')
                        .format('dddd, DD [de] MMMM [de] YYYY')
                    : 'No encontrada.';
        });
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss();
        });
    }
};
DetallesConsolidadoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
DetallesConsolidadoPage.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DetallesConsolidadoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalles-consolidado',
        template: _raw_loader_detalles_consolidado_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalles_consolidado_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetallesConsolidadoPage);



/***/ }),

/***/ "3loA":
/*!*********************************************************!*\
  !*** ./src/app/views/consolidados/consolidados.page.ts ***!
  \*********************************************************/
/*! exports provided: ConsolidadosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolidadosPage", function() { return ConsolidadosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_consolidados_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./consolidados.page.html */ "HyJZ");
/* harmony import */ var _consolidados_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consolidados.page.scss */ "AKJf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dayjs_locale_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs/locale/es */ "4HKe");
/* harmony import */ var dayjs_locale_es__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_es__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dayjs/plugin/duration */ "13Ln");
/* harmony import */ var dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "QgiU");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _consolidados_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./consolidados.service */ "l2JI");
/* harmony import */ var _detalles_consolidado_detalles_consolidado_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./detalles-consolidado/detalles-consolidado.page */ "1Zva");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../Utils/validations.functions */ "OmbT");













let ConsolidadosPage = class ConsolidadosPage {
    constructor(globalSer, consolidadosService, router) {
        this.globalSer = globalSer;
        this.consolidadosService = consolidadosService;
        this.router = router;
        this.reports = null;
        this.members = [];
        this.consolidates = [];
        this.pendingMembers = [];
        this.consolidatesPreview = [];
        this.pendingVisitsTotals = 0;
        this.sizeElems = 12;
        this.minInitDate = dayjs__WEBPACK_IMPORTED_MODULE_5___default()('2021-01-01').format('YYYY-MM-DD');
        this.maxInitDate = dayjs__WEBPACK_IMPORTED_MODULE_5___default()().format('YYYY-MM-DD');
        this.minEndDate = dayjs__WEBPACK_IMPORTED_MODULE_5___default()('2021-01-01').format('YYYY-MM-DD');
        this.maxEndDate = dayjs__WEBPACK_IMPORTED_MODULE_5___default()().format('YYYY-MM-DD');
        this.queryParams = {
            initDate: null,
            endDate: null,
            input: 'date',
            value: '-1'
        };
        this.views = {
            filter: false,
            totals: true,
            visits: true,
            members: true,
            pending: true,
        };
        dayjs__WEBPACK_IMPORTED_MODULE_5___default.a.extend(dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_7___default.a);
        dayjs__WEBPACK_IMPORTED_MODULE_5___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_8___default.a);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.globalSer.checkSession())
                yield this.router.navigate(['/ingresar']);
            // else await this.getData();
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getData();
        });
    }
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            this.reports = null;
            this.pendingVisitsTotals = null;
            this.consolidates = [];
            this.consolidatesPreview = [];
            const data = yield this.consolidadosService.getConsolidatesReport(this.queryParams);
            if (data && !data.error) {
                this.reports = data;
                this.members = data.members || [];
                this.setConsolidatesValues(data.consolidates || []);
                this.setPendingMembers(data.pendingVisits || []);
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
    showListResizeAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                confirmAction: (value) => {
                    this.sizeElems = value;
                }
            });
        });
    }
    setView(key) {
        this.views[key] = !this.views[key];
    }
    resetQueryParams() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.queryParams.initDate = null;
            this.queryParams.endDate = null;
            this.views.filter = !this.views.filter;
            yield this.getData();
        });
    }
    findData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let find = false;
            if (!!this.queryParams.initDate) {
                this.queryParams.initDate = dayjs__WEBPACK_IMPORTED_MODULE_5___default()(this.queryParams.initDate).format('YYYY-MM-DD');
                find = true;
            }
            if (!!this.queryParams.endDate) {
                this.queryParams.endDate = dayjs__WEBPACK_IMPORTED_MODULE_5___default()(this.queryParams.endDate).format('YYYY-MM-DD');
                find = this.queryParams.initDate !== null;
            }
            if (find)
                yield this.getData();
            else
                this.globalSer.presentAlert('Alerta', 'Disculpe, pero debe indicar una fecha inicial');
        });
    }
    setConsolidatesValues(data) {
        this.consolidates = [];
        this.consolidatesPreview = [];
        if (data && data.length > 0) {
            this.consolidates = data;
            data.forEach(c => {
                this.consolidatesPreview.push({
                    member: c.member,
                    observation: c.observation.length > 50 ?
                        `${Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_12__["setSaltLinesOrBr"])(c.observation.substr(0, 50))} ...`
                        : (Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_12__["setSaltLinesOrBr"])(c.observation) || 'No indicada.'),
                    date: c.date ?
                        dayjs__WEBPACK_IMPORTED_MODULE_5___default()(c.date, 'YYYY-MM-DD', true)
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
            data.forEach((userid) => {
                const member = this.members.find(m => m._id === userid);
                if (member)
                    this.pendingMembers.push(member);
            });
        }
    }
    // details
    showDetails(index = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (index !== null) {
                yield this.globalSer.presentLoading();
                const data = this.consolidates[index] || null;
                if (data) {
                    yield this.globalSer.loadModal(_detalles_consolidado_detalles_consolidado_page__WEBPACK_IMPORTED_MODULE_10__["DetallesConsolidadoPage"], { data }, true);
                    yield this.globalSer.dismissLoading();
                }
                else {
                    yield this.globalSer.dismissLoading();
                    yield this.globalSer.presentAlert('Error', 'No se ha logrado determinar el elemento a visualizar.');
                }
            }
            else
                yield this.globalSer.presentAlert('Error', 'No se ha logrado determinar el elemento a visualizar.');
        });
    }
    // register visit
    goToVisitRegisterForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate([`consolidados/registrar-visita`]);
        });
    }
};
ConsolidadosPage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_11__["GlobalService"] },
    { type: _consolidados_service__WEBPACK_IMPORTED_MODULE_9__["ConsolidadosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ConsolidadosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-consolidados',
        template: _raw_loader_consolidados_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_consolidados_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ConsolidadosPage);



/***/ }),

/***/ "AKJf":
/*!***********************************************************!*\
  !*** ./src/app/views/consolidados/consolidados.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".max-height-250 {\n  max-height: 260px !important;\n  overflow-y: auto;\n}\n\n.max-height-450 {\n  max-height: 450px !important;\n  overflow-y: auto;\n}\n\n.bigNumber {\n  font-size: 1.5em !important;\n}\n\n.bigIcon {\n  font-size: 3em !important;\n}\n\n.textTotals {\n  font-size: 1.1em !important;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbnNvbGlkYWRvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0EsaUJBQUE7QUFDRiIsImZpbGUiOiJjb25zb2xpZGFkb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1heC1oZWlnaHQtMjUwIHtcclxuICBtYXgtaGVpZ2h0OiAyNjBweCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5tYXgtaGVpZ2h0LTQ1MCB7XHJcbiAgbWF4LWhlaWdodDogNDUwcHggIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uYmlnTnVtYmVyIHtcclxuICBmb250LXNpemU6IDEuNWVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iaWdJY29uIHtcclxuICBmb250LXNpemU6IDNlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dFRvdGFscyB7XHJcbiAgZm9udC1zaXplOiAxLjFlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "HyJZ":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/consolidados/consolidados.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Consolidados</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"showListResizeAlert()\">\n        <ion-icon name=\"resize-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Visualización</ion-text>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-no-padding ion-margin-start ion-margin-end ion-margin-top\">\n    <ion-col size=\"12\">\n      <div class=\"\">\n        <ion-button color=\"medium\" (click)=\"setView('filter')\">\n          <ion-icon name=\"filter-outline\" slot=\"start\" *ngIf=\"!views.filter\"></ion-icon>\n          <ion-icon name=\"close-outline\" slot=\"start\" *ngIf=\"views.filter\"></ion-icon>\n          <ion-text>Filtrar</ion-text>\n        </ion-button>\n        <ion-button (click)=\"goToVisitRegisterForm()\">\n          <ion-icon name=\"clipboard-outline\" slot=\"start\"></ion-icon>\n          <ion-text>Registrar visita</ion-text>\n        </ion-button>\n      </div>\n    </ion-col>\n    <ion-col size=\"12\" *ngIf=\"views.filter\">\n      <ion-card>\n        <ion-card-content>\n          <ion-row>\n            <ion-col size=\"12\" size-sm=\"6\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">A partir de:</ion-label>\n                <ion-datetime\n                  [(ngModel)]=\"queryParams.initDate\"\n                  displayFormat=\"DD/MM/YYYY\"\n                  [min]=\"minInitDate\"\n                  [max]=\"maxInitDate\"\n                  doneText=\"Listo\"\n                  cancelText=\"Cancelar\"\n                ></ion-datetime>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"6\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Hasta:</ion-label>\n                <ion-datetime\n                  [(ngModel)]=\"queryParams.endDate\"\n                  displayFormat=\"DD/MM/YYYY\"\n                  [min]=\"minEndDate\"\n                  [max]=\"maxEndDate\"\n                  doneText=\"Listo\"\n                  cancelText=\"Cancelar\"\n                ></ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-margin-top\">\n            <ion-col size=\"6\" class=\"ion-justify-content-center\">\n              <ion-button class=\"ion-text-center\" color=\"medium\" expand=\"full\" (click)=\"resetQueryParams()\">\n                <ion-icon name=\"trash-outline\"></ion-icon>\n                <ion-text>Limpiar</ion-text>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-justify-content-center\">\n              <ion-button class=\"ion-text-center\" color=\"primary\" expand=\"full\" (click)=\"findData()\">\n                <ion-icon name=\"checkmark-outline\"></ion-icon>\n                <ion-text>Aplicar</ion-text>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"ion-margin-top ion-margin-bottom ion-padding-bottom\" *ngIf=\"reports\">\n    <ion-col size=\"12\">\n      <ion-card class=\"ion-no-padding\">\n        <ion-card-header class=\"ion-no-padding\">\n          <ion-toolbar color=\"primary\">\n            <ion-buttons slot=\"start\">\n              <ion-button (click)=\"setView('totals')\">\n                <ion-icon name=\"chevron-{{views.totals  ? 'up' : 'down' }}-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-title>Resumen</ion-title>\n          </ion-toolbar>\n        </ion-card-header>\n        <ion-card-content class=\"{{ views.totals ? '' : 'ion-hide'}} ion-no-padding no-selected-text\">\n          <ion-row class=\"ion-margin-top ion-margin-bottom\">\n            <ion-col size=\"12\" [sizeSm]=\"4\" class=\"ion-text-center\">\n              <ion-text>\n                <span class=\"bigIcon\">{{ members.length }}</span>\n                <br>\n              </ion-text>\n              <ion-text>\n                <p class=\"textTotals\">\n                  <ion-icon name=\"body-outline\" class=\"textTotals\"></ion-icon>\n                  Miembros consolidados\n                </p>\n              </ion-text>\n            </ion-col>\n            <ion-col size=\"12\" [sizeSm]=\"4\" class=\"ion-text-center\">\n              <ion-text>\n                <span class=\"bigIcon\">{{ consolidates.length }}</span>\n                <br>\n              </ion-text>\n              <ion-text>\n                <p class=\"textTotals\">\n                  <ion-icon name=\"footsteps-outline\" class=\"textTotals\"></ion-icon>\n                  Visitas realizadas\n                </p>\n              </ion-text>\n            </ion-col>\n            <ion-col size=\"12\" [sizeSm]=\"4\" class=\"ion-text-center\">\n              <ion-text>\n                <span class=\"bigIcon\">{{ pendingVisitsTotals || 0 }}</span>\n                <br>\n              </ion-text>\n              <ion-text>\n                <p class=\"textTotals\">\n                  <ion-icon name=\"timer-outline\" class=\"textTotals\"></ion-icon>\n                  Visitas pendientes\n                </p>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"12\" [sizeSm]=\"sizeElems\">\n      <ion-card class=\"ion-no-padding\">\n        <ion-card-header class=\"ion-no-padding\">\n          <ion-toolbar color=\"primary\">\n            <ion-buttons slot=\"start\">\n              <ion-button (click)=\"setView('visits')\">\n                <ion-icon name=\"chevron-{{views.visits ? 'up' : 'down' }}-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-title>Visitas</ion-title>\n          </ion-toolbar>\n        </ion-card-header>\n        <ion-card-content class=\"{{ views.visits ? '' : 'ion-hide'}} ion-no-padding\">\n          <ion-row *ngIf=\"consolidatesPreview && consolidatesPreview.length > 0; else noConsolidates\" class=\"{{ sizeElems === 6 ? 'max-height-250' : 'max-height-450'}}\">\n            <ion-col size=\"12\" [sizeSm]=\"sizeElems === 6 ? 12 : 6\" *ngFor=\"let c of consolidatesPreview; let i=index\">\n              <ion-card (click)=\"showDetails(i)\">\n                <ion-card-content class=\"no-selected-text\">\n                  <ion-text>\n                    <p><b>{{ c.member ? c.member.names + ' ' + c.member.lastNames : 'Desconocido' }}</b></p>\n                  </ion-text>\n                  <ion-text>\n                    <p>{{ c.observation }}</p>\n                  </ion-text>\n                  <ion-text>\n                    <span><b>Fecha: </b>{{ c.date }}</span><br>\n                  </ion-text>\n                  <ion-text>\n                    <i class=\"toSmall\">Clic para más detalles.</i>\n                  </ion-text>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n          <ng-template #noConsolidates>\n            <ion-row class=\"ion-margin-top ion-margin-bottom\">\n              <ion-col size=\"12\">\n                <ion-text color=\"medium\">\n                  <p class=\"ion-text-center\">\n                    <ion-icon name=\"alert-circle-outline\"></ion-icon> No se encontraron visitas.\n                  </p>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n          </ng-template>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"12\" [sizeSm]=\"sizeElems\">\n      <ion-card class=\"ion-no-padding\">\n        <ion-card-header class=\"ion-no-padding\">\n          <ion-toolbar color=\"primary\">\n            <ion-buttons slot=\"start\">\n              <ion-button (click)=\"setView('members')\">\n                <ion-icon name=\"chevron-{{views.members ? 'up' : 'down' }}-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-title>Miembros consolidados</ion-title>\n          </ion-toolbar>\n        </ion-card-header>\n        <ion-card-content class=\"{{ views.members ? '' : 'ion-hide'}} ion-no-padding\">\n          <ion-row *ngIf=\"members && members.length > 0; else noMembers\" class=\"{{ sizeElems === 6 ? 'max-height-250' : 'max-height-450'}}\">\n            <ion-col size=\"12\" [sizeSm]=\"sizeElems === 6 ? 12 : 4\" *ngFor=\"let member of members;\">\n              <app-usercard [data]=\"member\"></app-usercard>\n            </ion-col>\n          </ion-row>\n          <ng-template #noMembers>\n            <ion-row class=\"ion-margin-top ion-margin-bottom\">\n              <ion-col size=\"12\">\n                <ion-text color=\"medium\">\n                  <p class=\"ion-text-center\">\n                    <ion-icon name=\"alert-circle-outline\"></ion-icon> No existen miembros.\n                  </p>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n          </ng-template>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"12\" [sizeSm]=\"sizeElems\">\n      <ion-card class=\"ion-no-padding\">\n        <ion-card-header class=\"ion-no-padding\">\n          <ion-toolbar color=\"primary\">\n            <ion-buttons slot=\"start\">\n              <ion-button (click)=\"setView('pending')\">\n                <ion-icon name=\"chevron-{{views.pending ? 'up' : 'down' }}-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-title>Miembros pendientes por visita</ion-title>\n          </ion-toolbar>\n        </ion-card-header>\n        <ion-card-content class=\"{{ views.pending ? '' : 'ion-hide'}} ion-no-padding\">\n          <ion-row *ngIf=\"pendingMembers && pendingMembers.length > 0; else noPending\" class=\"{{ sizeElems === 6 ? 'max-height-250' : 'max-height-450'}}\">\n            <ion-col size=\"12\" [sizeSm]=\"sizeElems === 6 ? 12 : 4\" *ngFor=\"let pm of pendingMembers;\">\n              <app-usercard [data]=\"pm\" [goDetails]=\"false\"></app-usercard>\n            </ion-col>\n          </ion-row>\n          <ng-template #noPending>\n            <ion-row class=\"ion-margin-top ion-margin-bottom\">\n              <ion-col size=\"12\">\n                <ion-text color=\"medium\">\n                  <p class=\"ion-text-center\">\n                    <ion-icon name=\"alert-circle-outline\"></ion-icon> No existen miembros pendientes por visitas.\n                  </p>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n          </ng-template>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "V5HN":
/*!***********************************************************!*\
  !*** ./src/app/views/consolidados/consolidados.module.ts ***!
  \***********************************************************/
/*! exports provided: ConsolidadosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolidadosPageModule", function() { return ConsolidadosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _consolidados_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consolidados-routing.module */ "vTBA");
/* harmony import */ var _consolidados_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consolidados.page */ "3loA");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let ConsolidadosPageModule = class ConsolidadosPageModule {
};
ConsolidadosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _consolidados_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConsolidadosPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_consolidados_page__WEBPACK_IMPORTED_MODULE_6__["ConsolidadosPage"]]
    })
], ConsolidadosPageModule);



/***/ }),

/***/ "aPgz":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/consolidados/detalles-consolidado/detalles-consolidado.page.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Detalle de la visita</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row *ngIf=\"data\" class=\"ion-padding\">\n    <ion-col size=\"12\" size-sm=\"6\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-text><b>Consolidador:</b></ion-text>\n        </ion-col>\n        <ion-col size=\"12\">\n          <app-usercard [data]=\"data.consolidator\" (click)=\"closeModal()\"></app-usercard>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col size=\"12\" size-sm=\"6\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-text><b>Miembro visitado:</b></ion-text>\n        </ion-col>\n        <ion-col size=\"12\">\n          <app-usercard [data]=\"data.member\" (click)=\"closeModal()\"></app-usercard>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-row>\n        <ion-col size=\"12\" size-sm=\"6\">\n          <ion-text color=\"medium\">\n            <b>Fecha de la visita: </b>\n            <br><br>\n            {{ data.date }}\n            <br>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"12\" size-sm=\"6\">\n          <ion-text color=\"medium\">\n            <b>Acción: </b>\n            <br><br>\n            {{ data.action }}\n            <br>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"12\" class=\"ion-margin-top\">\n          <ion-text>\n            <b>Observación: </b>\n            <br><br>\n          </ion-text>\n          <div [innerHTML]=\"data.observation\"></div>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n  <br>\n  <br>\n</ion-content>\n");

/***/ }),

/***/ "l2JI":
/*!************************************************************!*\
  !*** ./src/app/views/consolidados/consolidados.service.ts ***!
  \************************************************************/
/*! exports provided: ConsolidadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolidadosService", function() { return ConsolidadosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");




let ConsolidadosService = class ConsolidadosService {
    constructor(axios, globalSer) {
        this.axios = axios;
        this.globalSer = globalSer;
    }
    // axios actions
    getConsolidatesReport(query = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/admin/consolidates', query);
            if (res && res.success)
                return res.data.data || null;
            return this.globalSer.altResponse(res);
        });
    }
    saveConsolidateReport(data = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.postData('/admin/consolidates/report', data);
            if (res && res.success)
                return res.data.msg;
            return this.globalSer.altResponse(res);
        });
    }
    getConsolidatesMembers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/admin/consolidates/members');
            if (res && res.success)
                return res.data.members;
            return this.globalSer.altResponse(res);
        });
    }
};
ConsolidadosService.ctorParameters = () => [
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_2__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }
];
ConsolidadosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConsolidadosService);



/***/ }),

/***/ "rfJf":
/*!****************************************************************************************!*\
  !*** ./src/app/views/consolidados/detalles-consolidado/detalles-consolidado.page.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhbGxlcy1jb25zb2xpZGFkby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "vTBA":
/*!*******************************************************************!*\
  !*** ./src/app/views/consolidados/consolidados-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ConsolidadosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolidadosPageRoutingModule", function() { return ConsolidadosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _consolidados_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consolidados.page */ "3loA");




const routes = [
    {
        path: '',
        component: _consolidados_page__WEBPACK_IMPORTED_MODULE_3__["ConsolidadosPage"]
    },
    {
        path: 'detalles-consolidado',
        loadChildren: () => __webpack_require__.e(/*! import() | detalles-consolidado-detalles-consolidado-module */ "detalles-consolidado-detalles-consolidado-module").then(__webpack_require__.bind(null, /*! ./detalles-consolidado/detalles-consolidado.module */ "r0o7")).then(m => m.DetallesConsolidadoPageModule)
    },
    {
        path: 'registrar-visita',
        loadChildren: () => Promise.all(/*! import() | registrar-visita-registrar-visita-module */[__webpack_require__.e("common"), __webpack_require__.e("registrar-visita-registrar-visita-module")]).then(__webpack_require__.bind(null, /*! ./registrar-visita/registrar-visita.module */ "9smr")).then(m => m.RegistrarVisitaPageModule)
    },
    {
        path: 'miembros-consolidados',
        loadChildren: () => Promise.all(/*! import() | miembros-consolidados-miembros-consolidados-module */[__webpack_require__.e("common"), __webpack_require__.e("miembros-consolidados-miembros-consolidados-module")]).then(__webpack_require__.bind(null, /*! ./miembros-consolidados/miembros-consolidados.module */ "SScQ")).then(m => m.MiembrosConsolidadosPageModule)
    }
];
let ConsolidadosPageRoutingModule = class ConsolidadosPageRoutingModule {
};
ConsolidadosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConsolidadosPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-consolidados-consolidados-module.js.map