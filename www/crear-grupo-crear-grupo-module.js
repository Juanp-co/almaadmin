(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crear-grupo-crear-grupo-module"],{

/***/ "IE72":
/*!***************************************************************************!*\
  !*** ./src/app/views/grupos-familiares/crear-grupo/crear-grupo.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhci1ncnVwby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "TtW/":
/*!***********************************************************************************!*\
  !*** ./src/app/views/grupos-familiares/crear-grupo/crear-grupo-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CrearGrupoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearGrupoPageRoutingModule", function() { return CrearGrupoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _crear_grupo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crear-grupo.page */ "z3IH");




const routes = [
    {
        path: '',
        component: _crear_grupo_page__WEBPACK_IMPORTED_MODULE_3__["CrearGrupoPage"]
    }
];
let CrearGrupoPageRoutingModule = class CrearGrupoPageRoutingModule {
};
CrearGrupoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CrearGrupoPageRoutingModule);



/***/ }),

/***/ "dAUQ":
/*!***************************************************************************!*\
  !*** ./src/app/views/grupos-familiares/crear-grupo/crear-grupo.module.ts ***!
  \***************************************************************************/
/*! exports provided: CrearGrupoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearGrupoPageModule", function() { return CrearGrupoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _crear_grupo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crear-grupo-routing.module */ "TtW/");
/* harmony import */ var _crear_grupo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crear-grupo.page */ "z3IH");







let CrearGrupoPageModule = class CrearGrupoPageModule {
};
CrearGrupoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _crear_grupo_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearGrupoPageRoutingModule"]
        ],
        declarations: [_crear_grupo_page__WEBPACK_IMPORTED_MODULE_6__["CrearGrupoPage"]]
    })
], CrearGrupoPageModule);



/***/ }),

/***/ "dVqZ":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/grupos-familiares/crear-grupo/crear-grupo.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"confirmCancel()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Crear grupo familiar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-row>\n        <ion-col class=\"ion-no-margin\" size=\"12\">\n          <ion-row>\n            <ion-col size=\"12\" size-sm=\"4\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Sector (*)</ion-label>\n                <ion-input\n                  [(ngModel)]=\"formData.sector\"\n                  autocomplete=\"off\"\n                  maxlength=\"4\"\n                  (keypress)=\"validateOnlyNumber($event)\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"4\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Sub-sector (*)</ion-label>\n                <ion-input\n                  [(ngModel)]=\"formData.subSector\"\n                  autocomplete=\"off\"\n                  maxlength=\"4\"\n                  (keypress)=\"validateOnlyNumber($event)\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"4\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Número (*)</ion-label>\n                <ion-input\n                  [(ngModel)]=\"formData.number\"\n                  autocomplete=\"off\"\n                  maxlength=\"4\"\n                  (keypress)=\"validateOnlyNumber($event)\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"6\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Dirección (*)</ion-label>\n                <ion-textarea\n                  [(ngModel)]=\"formData.direction\"\n                  rows=\"5\"\n                  class=\"ion-text-uppercase\"\n                ></ion-textarea>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top\">\n              <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top ion-margin-bottom ion-text-center\">\n              <ion-button color=\"light\" (click)=\"confirmCancel()\">\n                <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Cancelar</ion-text>\n              </ion-button>\n              <ion-button color=\"primary\" (click)=\"confirmCreate()\">\n                <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Guardar</ion-text>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "z3IH":
/*!*************************************************************************!*\
  !*** ./src/app/views/grupos-familiares/crear-grupo/crear-grupo.page.ts ***!
  \*************************************************************************/
/*! exports provided: CrearGrupoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearGrupoPage", function() { return CrearGrupoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_crear_grupo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./crear-grupo.page.html */ "dVqZ");
/* harmony import */ var _crear_grupo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crear-grupo.page.scss */ "IE72");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _grupos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../grupos.service */ "ai4U");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../Utils/validations.functions */ "OmbT");








let CrearGrupoPage = class CrearGrupoPage {
    constructor(globalSer, gruposService, navCtrl) {
        this.globalSer = globalSer;
        this.gruposService = gruposService;
        this.navCtrl = navCtrl;
        this.formData = {
            sector: null,
            subSector: null,
            number: null,
            direction: null,
        };
    }
    ngOnInit() {
    }
    createGroup() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Registrando grupo, por favor espere ...');
            const created = yield this.gruposService.saveGroup(Object.assign({}, this.formData));
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
    back() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navCtrl.back();
        });
    }
    validateOnlyNumber(event) {
        Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_7__["onlyNumbersInputValidation2"])(event);
    }
    confirmCancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertConfirm({
                header: 'Confirme',
                message: '¿Está seguro qué desea cancelar el registro del nuevo grupo?',
                confirmAction: () => this.back()
            });
        });
    }
    confirmCreate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validated = this.gruposService.validateDataGroup(this.formData);
            if (validated)
                yield this.globalSer.presentAlert('Alerta', validated);
            else {
                yield this.globalSer.alertConfirm({
                    header: 'Confirme',
                    message: '¿Está seguro qué desea agregar el nuevo grupo con esta información?',
                    confirmAction: () => this.createGroup()
                });
            }
        });
    }
};
CrearGrupoPage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _grupos_service__WEBPACK_IMPORTED_MODULE_5__["GruposService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
CrearGrupoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-crear-grupo',
        template: _raw_loader_crear_grupo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_crear_grupo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CrearGrupoPage);



/***/ })

}]);
//# sourceMappingURL=crear-grupo-crear-grupo-module.js.map