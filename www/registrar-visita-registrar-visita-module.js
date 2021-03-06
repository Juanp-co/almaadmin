(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registrar-visita-registrar-visita-module"],{

/***/ "9smr":
/*!********************************************************************************!*\
  !*** ./src/app/views/consolidados/registrar-visita/registrar-visita.module.ts ***!
  \********************************************************************************/
/*! exports provided: RegistrarVisitaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarVisitaPageModule", function() { return RegistrarVisitaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _registrar_visita_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registrar-visita-routing.module */ "kO2H");
/* harmony import */ var _registrar_visita_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registrar-visita.page */ "PIuC");







let RegistrarVisitaPageModule = class RegistrarVisitaPageModule {
};
RegistrarVisitaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registrar_visita_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrarVisitaPageRoutingModule"]
        ],
        declarations: [_registrar_visita_page__WEBPACK_IMPORTED_MODULE_6__["RegistrarVisitaPage"]]
    })
], RegistrarVisitaPageModule);



/***/ }),

/***/ "PIuC":
/*!******************************************************************************!*\
  !*** ./src/app/views/consolidados/registrar-visita/registrar-visita.page.ts ***!
  \******************************************************************************/
/*! exports provided: RegistrarVisitaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarVisitaPage", function() { return RegistrarVisitaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registrar_visita_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registrar-visita.page.html */ "rTQl");
/* harmony import */ var _registrar_visita_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registrar-visita.page.scss */ "RVKy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");
/* harmony import */ var _consolidados_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../consolidados.service */ "l2JI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _miembros_consolidados_miembros_consolidados_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../miembros-consolidados/miembros-consolidados.page */ "uAKu");










let RegistrarVisitaPage = class RegistrarVisitaPage {
    constructor(globalSer, consolidadosService, navCtrl, modalCtrl, router) {
        this.globalSer = globalSer;
        this.consolidadosService = consolidadosService;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.formData = {
            userId: null,
            observation: null,
            date: null
        };
        this.memberSelected = null;
        this.members = [];
        this.minInitDate = dayjs__WEBPACK_IMPORTED_MODULE_5___default()('2020-01-01').format('YYYY-MM-DD');
        this.maxInitDate = dayjs__WEBPACK_IMPORTED_MODULE_5___default()().format('YYYY-MM-DD');
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.globalSer.checkSession())
                yield this.router.navigate(['/ingresar']);
            else
                yield this.getMembers();
        });
    }
    getMembers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.consolidadosService.getConsolidatesMembers();
            if (data && !data.error) {
                this.members = data;
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
    saveVisit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Guardando, por favor espere...');
            const data = Object.assign({}, this.formData);
            data.date = dayjs__WEBPACK_IMPORTED_MODULE_5___default()(data.date).format('YYYY-MM-DD');
            const created = yield this.consolidadosService.saveConsolidateReport(data);
            if (created && !created.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', created || 'Se ha registrado el grupo exitosamente.');
                yield this.back();
            }
            else if (created && created.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss();
        });
    }
    back() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navCtrl.back();
        });
    }
    showMembersModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const update = (data) => {
                if (data) {
                    this.memberSelected = data;
                    this.formData.userId = data._id;
                }
            };
            yield this.globalSer.dismissLoading();
            yield this.globalSer.loadModal(_miembros_consolidados_miembros_consolidados_page__WEBPACK_IMPORTED_MODULE_9__["MiembrosConsolidadosPage"], {
                data: this.members,
                selectedUser: this.memberSelected || null,
            }, true, update);
        });
    }
    getConsolidatorsNames() {
        return this.memberSelected ? `${this.memberSelected.names} ${this.memberSelected.lastNames}` : null;
    }
    confirmClose() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertConfirm({
                message: `¿Está seguro qué desea cancelar el registro de la visita?`,
                confirmAction: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { yield this.back(); })
            });
        });
    }
    confirmSave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertConfirm({
                message: `¿Está seguro qué desea guardar la información suministrada de la visita?`,
                confirmAction: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { yield this.saveVisit(); })
            });
        });
    }
};
RegistrarVisitaPage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _consolidados_service__WEBPACK_IMPORTED_MODULE_7__["ConsolidadosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
RegistrarVisitaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registrar-visita',
        template: _raw_loader_registrar_visita_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registrar_visita_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegistrarVisitaPage);



/***/ }),

/***/ "RVKy":
/*!********************************************************************************!*\
  !*** ./src/app/views/consolidados/registrar-visita/registrar-visita.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3RyYXItdmlzaXRhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "kO2H":
/*!****************************************************************************************!*\
  !*** ./src/app/views/consolidados/registrar-visita/registrar-visita-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: RegistrarVisitaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarVisitaPageRoutingModule", function() { return RegistrarVisitaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _registrar_visita_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registrar-visita.page */ "PIuC");




const routes = [
    {
        path: '',
        component: _registrar_visita_page__WEBPACK_IMPORTED_MODULE_3__["RegistrarVisitaPage"]
    }
];
let RegistrarVisitaPageRoutingModule = class RegistrarVisitaPageRoutingModule {
};
RegistrarVisitaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistrarVisitaPageRoutingModule);



/***/ }),

/***/ "rTQl":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/consolidados/registrar-visita/registrar-visita.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"confirmClose()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Registrar visita</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-row>\n        <ion-col class=\"\" size=\"12\">\n          <ion-row>\n            <ion-col size=\"12\" size-sm=\"6\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Miembro (*)</ion-label>\n                <ion-input\n                  [readonly]=\"true\"\n                  [value]=\"getConsolidatorsNames()\"\n                  autocomplete=\"off\"\n                  class=\"no-selected-text\"\n                  (click)=\"showMembersModal()\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"6\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Fecha de la visita (*)</ion-label>\n                <ion-datetime\n                  [(ngModel)]=\"formData.date\"\n                  displayFormat=\"DD/MM/YYYY\"\n                  [min]=\"minInitDate\"\n                  [max]=\"maxInitDate\"\n                  doneText=\"Listo\"\n                  cancelText=\"Cancelar\"\n                ></ion-datetime>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"6\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Observaciones (*)</ion-label>\n                <ion-textarea\n                  [(ngModel)]=\"formData.observation\"\n                  rows=\"5\"\n                  class=\"ion-text-uppercase\"\n                  placeholder=\"Indica alguna observación...\"\n                ></ion-textarea>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" class=\"ion-margin-top\">\n              <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\n            </ion-col>\n            <ion-col size=\"12\" class=\"ion-margin-top ion-margin-bottom ion-text-center\">\n              <ion-button color=\"light\" (click)=\"confirmClose()\">\n                <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Cancelar</ion-text>\n              </ion-button>\n              <ion-button color=\"primary\" (click)=\"confirmSave()\">\n                <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Guardar</ion-text>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=registrar-visita-registrar-visita-module.js.map