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
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../Utils/validations.functions */ "OmbT");











let RegistrarVisitaPage = class RegistrarVisitaPage {
    constructor(globalSer, consolidadosService, navCtrl, modalCtrl, router) {
        this.globalSer = globalSer;
        this.consolidadosService = consolidadosService;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.formData = {
            userId: null,
            visitor: null,
            observation: null,
            action: 0,
            date: null,
        };
        this.iAmVisitor = true;
        this.listActions = ['Visita', 'Llamada'];
        this.memberSelected = null;
        this.memberVisitor = null;
        this.members = [];
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
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Guardando, por favor espere...');
            const data = Object.assign({}, this.formData);
            data.date = data.date.substr(0, 10);
            data.observation = `${Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["setSaltLinesOrBr"])(data.observation, true)}`.toUpperCase();
            data.userId = (_a = this.memberSelected) === null || _a === void 0 ? void 0 : _a._id;
            data.visitor = ((_b = this.memberVisitor) === null || _b === void 0 ? void 0 : _b._id) || null;
            const created = yield this.consolidadosService.saveConsolidateReport(data);
            if (created && !created.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', created || 'Se ha registrado la visita exitosamente.');
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
    setCheckedValue() {
        if (!this.iAmVisitor) {
            this.formData.visitor = null;
            this.memberVisitor = null;
        }
        this.iAmVisitor = !this.iAmVisitor;
    }
    showMembersModal(type = 'member') {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const update = (data) => {
                if (data) {
                    if (type === 'member')
                        this.memberSelected = data;
                    else
                        this.memberVisitor = data;
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
    getMemberVisitorNames() {
        return this.memberVisitor ?
            `${this.memberVisitor.names} ${this.memberVisitor.lastNames}`
            : null;
    }
    validate() {
        const { action, date, observation } = this.formData;
        if (!this.memberSelected)
            return 'Disculpe, pero seleccionar al miembro que fue visitado.';
        if (!date)
            return 'Disculpe, pero debe indicar la fecha en la que se realizó la visita.';
        if (action === null)
            return 'Disculpe, pero debe seleccionar la acción realizda en la visita.';
        if (!observation || (observation === null || observation === void 0 ? void 0 : observation.length) < 5)
            return 'Disculpe, pero debe indicar una observación válida para la visita.';
        if (!this.iAmVisitor && !this.memberVisitor)
            return 'Disculpe, pero debe seleccionar al miembro que realizó la visita.';
        return null;
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
            const validated = this.validate();
            if (!validated) {
                yield this.globalSer.alertConfirm({
                    message: `¿Está seguro qué desea guardar la información suministrada de la visita?`,
                    confirmAction: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { yield this.saveVisit(); })
                });
            }
            else
                yield this.globalSer.presentAlert('Alerta', validated);
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"confirmClose()\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Registrar visita</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-row>\r\n        <ion-col class=\"\" size=\"12\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" size-sm=\"6\">\r\n              <ion-row class=\"ion-no-padding\">\r\n                <ion-col size=\"12\">\r\n                  <ion-item>\r\n                    <ion-label position=\"floating\" color=\"medium\">Miembro (*)</ion-label>\r\n                    <ion-input\r\n                      [readonly]=\"true\"\r\n                      [value]=\"getConsolidatorsNames()\"\r\n                      autocomplete=\"off\"\r\n                      class=\"no-selected-text\"\r\n                      (click)=\"showMembersModal()\"\r\n                    ></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"12\">\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-item lines=\"none\">\r\n                        <ion-label color=\"medium\">Soy el visitador</ion-label>\r\n                        <ion-checkbox\r\n                          slot=\"start\"\r\n                          [checked]=\"iAmVisitor\"\r\n                          (ionChange)=\"setCheckedValue()\"\r\n                        ></ion-checkbox>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                    <ion-col *ngIf=\"!iAmVisitor\">\r\n                      <ion-item>\r\n                        <ion-label position=\"floating\" color=\"medium\">Miembro visitante (*)</ion-label>\r\n                        <ion-input\r\n                          [readonly]=\"true\"\r\n                          [value]=\"getMemberVisitorNames()\"\r\n                          autocomplete=\"off\"\r\n                          (click)=\"showMembersModal('visitor')\"\r\n                        ></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"6\">\r\n              <ion-row class=\"ion-no-padding\">\r\n                <ion-col size=\"12\">\r\n                  <ion-item>\r\n                    <ion-label position=\"floating\" color=\"medium\">Fecha de la visita (*)</ion-label>\r\n                    <ion-datetime\r\n                      [(ngModel)]=\"formData.date\"\r\n                      displayFormat=\"DD/MM/YYYY\"\r\n                      min=\"2021-01-01\"\r\n                      [max]=\"maxInitDate\"\r\n                      doneText=\"Listo\"\r\n                      cancelText=\"Cancelar\"\r\n                    ></ion-datetime>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"12\">\r\n                  <ion-list>\r\n                    <ion-radio-group [(ngModel)]=\"formData.action\">\r\n                      <ion-list-header>\r\n                        <ion-label>Acción</ion-label>\r\n                      </ion-list-header>\r\n                      <ion-item *ngFor=\"let a of listActions; let i=index\">\r\n                        <ion-label>{{a}}</ion-label>\r\n                        <ion-radio slot=\"start\" [value]=\"i\"></ion-radio>\r\n                      </ion-item>\r\n                    </ion-radio-group>\r\n                  </ion-list>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"medium\">Observaciones (*)</ion-label>\r\n                <ion-textarea\r\n                  [(ngModel)]=\"formData.observation\"\r\n                  rows=\"5\"\r\n                  class=\"ion-text-uppercase\"\r\n                  placeholder=\"Indica alguna observación...\"\r\n                ></ion-textarea>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"ion-margin-top\">\r\n              <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"ion-margin-top ion-margin-bottom ion-text-center\">\r\n              <ion-button color=\"medium\" (click)=\"confirmClose()\">\r\n                <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\r\n                <ion-text>Cancelar</ion-text>\r\n              </ion-button>\r\n              <ion-button color=\"primary\" (click)=\"confirmSave()\">\r\n                <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\r\n                <ion-text>Guardar</ion-text>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=registrar-visita-registrar-visita-module.js.map