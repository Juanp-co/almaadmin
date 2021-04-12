(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registro-registro-module"],{

/***/ "/mUX":
/*!********************************************************************!*\
  !*** ./src/app/views/miembros/registro/registro-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: RegistroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageRoutingModule", function() { return RegistroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registro.page */ "t7h5");




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPage"]
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ "3V3w":
/*!************************************************************!*\
  !*** ./src/app/views/miembros/registro/registro.module.ts ***!
  \************************************************************/
/*! exports provided: RegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro-routing.module */ "/mUX");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro.page */ "t7h5");







let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPageRoutingModule"]
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
    })
], RegistroPageModule);



/***/ }),

/***/ "rtVd":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/miembros/registro/registro.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Registrar miembro</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row>\n    <ion-col class=\"ion-no-margin\" size=\"12\" *ngIf=\"!successRegister\">\n      <ion-card>\n        <ion-card-content>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-text color=\"medium\">\n                <p>\n                  <ion-icon name=\"alert-circle-outline\"></ion-icon>\n                  Todos los miembros registrados dispondrán de la siguiente contraseña para el acceso: <b><i>alma1234</i></b>.\n                  Estos podrán cambiarla (si lo desean) desde la Aplicación Móvil o desde el Panel Administrador (en caso de disponga del rol).\n                </p>\n              </ion-text>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"6\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Tipo de documento (*)</ion-label>\n                <ion-input\n                  [readonly]=\"true\"\n                  [value]=\"formData.documentType ? getDocumentLabel(formData.documentType) : ''\"\n                  autocomplete=\"off\"\n                  class=\"no-selected-text\"\n                  (click)=\"showAlertDocumentList(formData.documentType)\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"6\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Número de documento (*)</ion-label>\n                <ion-input\n                  [(ngModel)]=\"formData.document\"\n                  autocomplete=\"off\"\n                  maxlength=\"10\"\n                  (keypress)=\"validateOnlyNumbers($event)\"\n                  class=\"ion-text-uppercase\"\n                >\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"6\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Nombre(s) (*)</ion-label>\n                <ion-input\n                  [(ngModel)]=\"formData.names\"\n                  autocomplete=\"off\"\n                  (keyup)=\"validateOnlyLetters($event)\"\n                  class=\"ion-text-uppercase\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"6\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Apellido(s) (*)</ion-label>\n                <ion-input\n                  [(ngModel)]=\"formData.lastNames\"\n                  autocomplete=\"off\"\n                  (keyup)=\"validateOnlyLetters($event)\"\n                  class=\"ion-text-uppercase\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"6\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Nº de Teléfono (usuario) (*)</ion-label>\n                <ion-input\n                  [(ngModel)]=\"formData.phone\"\n                  autocomplete=\"off\"\n                  maxlength=\"13\"\n                  (keypress)=\"validateOnlyNumbers($event)\"\n                  class=\"ion-text-uppercase\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"6\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Correo electrónico</ion-label>\n                <ion-input [(ngModel)]=\"formData.email\" autocomplete=\"off\" class=\"ion-text-uppercase\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"6\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Rol (*)</ion-label>\n                <ion-input\n                  [readonly]=\"true\"\n                  [value]=\"roles[formData.role] || ''\"\n                  autocomplete=\"off\"\n                  class=\"no-selected-text\"\n                  (click)=\"showRoleListAlert(formData.role)\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"6\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Nº de documento padre espiritual (opcional)</ion-label>\n                <ion-input\n                  [(ngModel)]=\"formData.referred\"\n                  autocomplete=\"off\"\n                  maxlength=\"15\"\n                  class=\"ion-text-uppercase\"\n                >\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label color=\"medium\">Asignar miembro consolidador</ion-label>\n                <ion-checkbox\n                  slot=\"start\"\n                  [checked]=\"formData.consolidator\"\n                  (ionChange)=\"checkConsolidator()\"\n                ></ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"6\" *ngIf=\"formData.consolidator\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Seleccione un miembro (*)</ion-label>\n                <ion-input\n                  [readonly]=\"true\"\n                  [value]=\"getConsolidatorsNames()\"\n                  autocomplete=\"off\"\n                  class=\"no-selected-text\"\n                  (click)=\"modalMember()\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" class=\"ion-margin-top\">\n              <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top ion-padding-top ion-padding-bottom ion-margin-bottom ion-text-center\">\n              <ion-button color=\"light\" (click)=\"confirmCancel()\">\n                <ion-icon name=\"close-outline\"></ion-icon>&nbsp;\n                <ion-text>Cancelar</ion-text>\n              </ion-button>\n              <ion-button color=\"primary\" (click)=\"confirmRegister()\">\n                <ion-icon name=\"save-outline\"></ion-icon>&nbsp;\n                <ion-text>Guardar</ion-text>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n    <ion-col class=\"ion-no-margin\" size=\"12\" *ngIf=\"successRegister && successData\">\n      <ion-card>\n        <ion-card-content>\n          <ion-row>\n            <ion-col [size]=\"12\" class=\"ion-text-center\">\n              <ion-img class=\"pictureLogo2\" [src]=\"'/assets/icon/check.svg'\"></ion-img>\n              <ion-card-title class=\"ion-margin-top\">{{ successData.msg }}</ion-card-title>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top ion-padding-top ion-padding-bottom ion-margin-bottom ion-text-center\">\n              <ion-button color=\"primary\" (click)=\"back()\">\n                <ion-icon name=\"chevron-back-outline\" slot=\"start\"></ion-icon>&nbsp;\n                <ion-text>Regresar al listado de miembros</ion-text>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "sH/h":
/*!************************************************************!*\
  !*** ./src/app/views/miembros/registro/registro.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".password-text {\n  font-size: 2em !important;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUFDRiIsImZpbGUiOiJyZWdpc3Ryby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFzc3dvcmQtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAyZW0gIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "t7h5":
/*!**********************************************************!*\
  !*** ./src/app/views/miembros/registro/registro.page.ts ***!
  \**********************************************************/
/*! exports provided: RegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPage", function() { return RegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registro.page.html */ "rtVd");
/* harmony import */ var _registro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registro.page.scss */ "sH/h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detalles_miembro_detalles_miembro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../detalles-miembro/detalles-miembro.service */ "iN9u");
/* harmony import */ var _miembros_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../miembros.service */ "wJOZ");
/* harmony import */ var _asignar_consolidador_asignar_consolidador_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../asignar-consolidador/asignar-consolidador.page */ "FA8q");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../Utils/validations.functions */ "OmbT");












let RegistroPage = class RegistroPage {
    constructor(activateRoute, alertCtrl, axios, globalSer, navCtrl, detallesMiembroService, miembrosService, router) {
        this.activateRoute = activateRoute;
        this.alertCtrl = alertCtrl;
        this.axios = axios;
        this.globalSer = globalSer;
        this.navCtrl = navCtrl;
        this.detallesMiembroService = detallesMiembroService;
        this.miembrosService = miembrosService;
        this.router = router;
        this.roles = [];
        this.documentTypes = [];
        this.successRegister = false;
        this.successData = null;
        this.consolidatorMember = null;
        this.formData = {
            documentType: null,
            document: null,
            email: null,
            phone: null,
            names: null,
            lastNames: null,
            role: null,
            referred: null,
            consolidator: false,
            consolidatorId: null,
        };
        // check if exist session
        if (!this.globalSer.checkSession())
            this.router.navigate(['/ingresar']);
        else {
            this.documentTypes = detallesMiembroService.documentTypesList;
            this.roles = this.globalSer.roles;
        }
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // check if exist session
            if (!this.globalSer.checkSession())
                yield this.router.navigate(['/ingresar']);
            else if (!this.globalSer.checkRoleToEnableAddOrUpdate()) {
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero no cuenta con privilegios para registrar nuevos miembros.');
                yield this.navCtrl.back();
            }
        });
    }
    registerMember() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Registrando, por favor espere ...');
            const data = Object.assign({}, this.formData);
            data.document = `${data.documentType}${data.document}`;
            const res = yield this.miembrosService.registerUser(data);
            if (res && !res.error) {
                this.successData = res;
                this.successRegister = true;
                yield this.globalSer.dismissLoading();
            }
            else if (res && res.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else {
                yield this.globalSer.dismissLoading();
            }
        });
    }
    back() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navCtrl.back();
        });
    }
    // getters and setters
    getDocumentLabel(value) {
        if (!value)
            return null;
        const da = this.documentTypes.find(d => d.val === value);
        return da ? da.label : null;
    }
    checkConsolidator() {
        if (this.formData.consolidator) {
            this.consolidatorMember = null;
        }
        this.formData.consolidator = !this.formData.consolidator;
    }
    getConsolidatorsNames() {
        return this.consolidatorMember ? `${this.consolidatorMember.names} ${this.consolidatorMember.lastNames}` : null;
    }
    validateOnlyNumbers(event) {
        Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_11__["onlyNumbersInputValidation"])(event);
    }
    validateOnlyLetters(event) {
        Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_11__["onlyLettersInputValidation"])(event);
    }
    // Alerts
    showRoleListAlert(selected = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputs = [];
            for (const [i, value] of this.roles.entries()) {
                inputs.push({
                    name: `roles`,
                    type: 'radio',
                    label: value,
                    value: i,
                    checked: selected !== null && selected === i,
                });
            }
            yield this.globalSer.alertWithList({
                header: 'Seleccione un rol',
                inputs,
                confirmAction: (selectedValue) => {
                    this.formData.role = selectedValue;
                }
            });
        });
    }
    showAlertDocumentList(selected = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputs = [];
            for (const value of this.documentTypes) {
                inputs.push({
                    name: `documentType`,
                    type: 'radio',
                    label: value.label,
                    value: value.val,
                    checked: selected !== null && selected === value.val,
                });
            }
            yield this.globalSer.alertWithList({
                header: 'Seleccione',
                inputs,
                confirmAction: (selectedValue) => {
                    this.formData.documentType = selectedValue;
                }
            });
        });
    }
    confirmCancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertConfirm({
                header: 'Confirme',
                message: '¿Está seguro qué desea cancelar el registro?',
                confirmAction: () => this.back()
            });
        });
    }
    // members
    modalMember() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const updateData = (member) => {
                this.consolidatorMember = member || null;
                this.formData.consolidatorId = member ? member._id : null;
            };
            yield this.globalSer.loadModal(_asignar_consolidador_asignar_consolidador_page__WEBPACK_IMPORTED_MODULE_8__["AsignarConsolidadorPage"], { selectedId: this.formData.consolidatorId }, false, updateData);
        });
    }
    validateData() {
        if (!/^([CC|CE|PE|TI|PAS]){2,3}/.test(this.formData.documentType))
            return 'Disculpe, pero debe indicar el tipo de documento.';
        if (!/[0-9]{5,9}/.test(this.formData.document))
            return 'Disculpe, pero debe indicar el número de documento de identidad.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_11__["checkNameOrLastName"])(this.formData.names))
            return 'Disculpe, pero debe indicar un nombre válido.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_11__["checkNameOrLastName"])(this.formData.lastNames))
            return 'Disculpe, pero debe indicar un apellido válido.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_11__["checkPhone"])(this.formData.phone))
            return 'Disculpe, pero debe indicar un número de teléfono válido.';
        if (this.formData.email && !Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_11__["checkEmail"])(this.formData.email))
            return 'Disculpe, pero debe indicar un correo electrónico válido.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_11__["checkIfValueIsNumber"])(`${this.formData.role}`))
            return 'Disculpe, pero debe seleccionar un rol para el miembro.';
        if (this.formData.referred && !Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_11__["checkDocument"])(`${this.formData.referred.toUpperCase()}`))
            return 'Disculpe, pero debe indicar un número de documento correcto del miemro referente (ejm: CC12345678).';
        return null;
    }
    confirmRegister() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validated = this.validateData();
            if (!validated) {
                this.globalSer.alertConfirm({
                    header: 'Confirme',
                    message: '¿Está seguro qué desea registar a este nuevo miembro?',
                    confirmAction: () => this.registerMember()
                });
            }
            else {
                yield this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
            }
        });
    }
};
RegistroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_9__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_10__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _detalles_miembro_detalles_miembro_service__WEBPACK_IMPORTED_MODULE_6__["DetallesMiembroService"] },
    { type: _miembros_service__WEBPACK_IMPORTED_MODULE_7__["MiembrosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registro',
        template: _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegistroPage);



/***/ })

}]);
//# sourceMappingURL=registro-registro-module.js.map