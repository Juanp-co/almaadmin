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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Registrar miembro</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-row>\r\n    <ion-col class=\"ion-no-margin\" size=\"12\" *ngIf=\"!successRegister\">\r\n      <ion-card>\r\n        <ion-card-content>\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <ion-text color=\"medium\">\r\n                <p>\r\n                  <ion-icon name=\"alert-circle-outline\"></ion-icon>\r\n                  Todos los miembros registrados dispondrán de la siguiente contraseña para el acceso: <b><i>alma1234</i></b>.\r\n                  Estos podrán cambiarla (si lo desean) desde la Aplicación Móvil o desde el Panel Administrador (en caso disponga del rol).\r\n                </p>\r\n              </ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"6\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"medium\">Nº de Teléfono (*)</ion-label>\r\n                <ion-input\r\n                  [(ngModel)]=\"formData.phone\"\r\n                  autocomplete=\"off\"\r\n                  maxlength=\"13\"\r\n                  (keypress)=\"validateOnlyNumbers($event)\"\r\n                  class=\"ion-text-uppercase\"\r\n                ></ion-input>\r\n              </ion-item>\r\n              <ion-text color=\"medium\">\r\n                <i class=\"toSmall\">El valor de este campo será el usuario para el acceso a la plataforma.</i>\r\n              </ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"6\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"medium\">Nombre(s) (*)</ion-label>\r\n                <ion-input\r\n                  [(ngModel)]=\"formData.names\"\r\n                  autocomplete=\"off\"\r\n                  (keyup)=\"validateOnlyLetters($event)\"\r\n                  class=\"ion-text-uppercase\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"6\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"medium\">Apellido(s) (*)</ion-label>\r\n                <ion-input\r\n                  [(ngModel)]=\"formData.lastNames\"\r\n                  autocomplete=\"off\"\r\n                  (keyup)=\"validateOnlyLetters($event)\"\r\n                  class=\"ion-text-uppercase\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"6\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"medium\">Correo electrónico</ion-label>\r\n                <ion-input [(ngModel)]=\"formData.email\" autocomplete=\"off\" class=\"ion-text-uppercase\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"6\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"medium\">Fecha de nacimiento (*)</ion-label>\r\n                <ion-datetime\r\n                  [(ngModel)]=\"formData.birthday\"\r\n                  displayFormat=\"DD/MM/YYYY\"\r\n                  min=\"1910-03-14\"\r\n                  max=\"{{maxDate}}\"\r\n                  doneText=\"Listo\"\r\n                  cancelText=\"Cancelar\"\r\n                  (ionChange)=\"setDate()\"\r\n                >\r\n                </ion-datetime>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"6\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"medium\">Sexo (*)</ion-label>\r\n                <ion-input\r\n                  [readonly]=\"true\"\r\n                  [value]=\"gender[formData.gender] || ''\"\r\n                  autocomplete=\"off\"\r\n                  class=\"no-selected-text\"\r\n                  (click)=\"showAlertList('gender', 'gender', formData.gender)\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"6\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"medium\">Estado civil</ion-label>\r\n                <ion-input\r\n                  [readonly]=\"true\"\r\n                  [value]=\"civilStatus[formData.civilStatus] || ''\"\r\n                  autocomplete=\"off\"\r\n                  class=\"no-selected-text\"\r\n                  (click)=\"showAlertList('civilStatus', 'civilStatus', formData.civilStatus)\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"6\" *ngIf=\"churches?.length > 1\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"medium\">Iglesia a la que asiste</ion-label>\r\n                <ion-input\r\n                  [readonly]=\"true\"\r\n                  [value]=\"church?.name || ''\"\r\n                  autocomplete=\"off\"\r\n                  class=\"ion-text-uppercase\"\r\n                  (click)=\"showListChurches()\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\" [sizeSm]=\"churches?.length > 1 ? 4 : 6\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"medium\">Barrio o localidad</ion-label>\r\n                <ion-input [(ngModel)]=\"formData.locality\" autocomplete=\"off\" maxlength=\"100\" class=\"ion-text-uppercase\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\" [sizeSm]=\"churches?.length > 1 ? 4 : 6\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"medium\">Dirección</ion-label>\r\n                <ion-input [(ngModel)]=\"formData.direction\" autocomplete=\"off\" maxlength=\"250\" class=\"ion-text-uppercase\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\" [sizeSm]=\"churches?.length > 1 ? 4 : 6\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"medium\">Fecha de incorporación</ion-label>\r\n                <ion-datetime\r\n                  [(ngModel)]=\"formData.created_at\"\r\n                  displayFormat=\"DD/MM/YYYY\"\r\n                  min=\"2010-01-01\"\r\n                  max=\"{{maxDate}}\"\r\n                  doneText=\"Listo\"\r\n                  cancelText=\"Cancelar\"\r\n                  (ionChange)=\"setDate()\"\r\n                >\r\n                </ion-datetime>\r\n              </ion-item>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\">&nbsp;</ion-col>\r\n\r\n            <ion-col size=\"12\" size-sm=\"6\">\r\n              <ion-item lines=\"none\">\r\n                <ion-label color=\"medium\">¿Asiste a un grupo familiar?</ion-label>\r\n                <ion-checkbox\r\n                  slot=\"start\"\r\n                  [checked]=\"formData.attendGroup\"\r\n                  (ionChange)=\"setCheckedValue('attendGroup')\"\r\n                ></ion-checkbox>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"6\" *ngIf=\"formData.attendGroup\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"medium\">Seleccione un grupo familiar (*)</ion-label>\r\n                <ion-input\r\n                  [readonly]=\"true\"\r\n                  [value]=\"getGroupLabel()\"\r\n                  autocomplete=\"off\"\r\n                  class=\"no-selected-text\"\r\n                  (click)=\"modalGroups()\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\"></ion-col>\r\n            <ion-col size=\"12\" size-sm=\"6\">\r\n              <ion-item lines=\"none\">\r\n                <ion-label color=\"medium\">El miembro fue consolidado</ion-label>\r\n                <ion-checkbox\r\n                  slot=\"start\"\r\n                  [checked]=\"formData.consolidated\"\r\n                  (ionChange)=\"setCheckedValue('consolidated')\"\r\n                ></ion-checkbox>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\" *ngIf=\"formData.consolidated\">\r\n              <ion-row>\r\n                <ion-col size=\"12\" size-sm=\"6\" *ngIf=\"formData.consolidated\">\r\n                  <ion-item>\r\n                    <ion-label position=\"floating\" color=\"medium\">Petición (opcional)</ion-label>\r\n                    <ion-input [(ngModel)]=\"formData.petition\" autocomplete=\"off\" class=\"ion-text-uppercase\"></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"12\" size-sm=\"6\">\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label color=\"medium\">Soy el consolidador</ion-label>\r\n                    <ion-checkbox\r\n                      slot=\"start\"\r\n                      [checked]=\"formData.iAmConsolidator\"\r\n                      (ionChange)=\"setCheckedValue('iAmConsolidator')\"\r\n                    ></ion-checkbox>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"12\" size-sm=\"6\" *ngIf=\"formData.consolidated && !formData.iAmConsolidator\">\r\n                  <ion-item>\r\n                    <ion-label position=\"floating\" color=\"medium\">Seleccione un miembro (*)</ion-label>\r\n                    <ion-input\r\n                      [readonly]=\"true\"\r\n                      [value]=\"getReferredNames()\"\r\n                      autocomplete=\"off\"\r\n                      class=\"no-selected-text\"\r\n                      (click)=\"modalMember()\"\r\n                    ></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"ion-margin-top\">\r\n              <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top ion-padding-top ion-padding-bottom ion-margin-bottom ion-text-center\">\r\n              <ion-button color=\"medium\" (click)=\"confirmCancel()\">\r\n                <ion-icon name=\"close-outline\"></ion-icon>&nbsp;\r\n                <ion-text>Cancelar</ion-text>\r\n              </ion-button>\r\n              <ion-button color=\"primary\" (click)=\"confirmRegister()\">\r\n                <ion-icon name=\"save-outline\"></ion-icon>&nbsp;\r\n                <ion-text>Guardar</ion-text>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n\r\n    <ion-col class=\"ion-no-margin\" size=\"12\" *ngIf=\"successRegister && successData\">\r\n      <ion-card>\r\n        <ion-card-content>\r\n          <ion-row>\r\n            <ion-col [size]=\"12\" class=\"ion-text-center\">\r\n              <ion-img class=\"pictureLogo2\" [src]=\"'/assets/icon/check.svg'\"></ion-img>\r\n              <ion-card-title class=\"ion-margin-top\">{{ successData.msg }}</ion-card-title>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top ion-padding-top ion-padding-bottom ion-margin-bottom ion-text-center\">\r\n              <ion-button color=\"primary\" (click)=\"back()\">\r\n                <ion-icon name=\"chevron-back-outline\" slot=\"start\"></ion-icon>&nbsp;\r\n                <ion-text>Regresar al listado de miembros</ion-text>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ "sH/h":
/*!************************************************************!*\
  !*** ./src/app/views/miembros/registro/registro.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".password-text {\n  font-size: 2em !important;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVnaXN0cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6InJlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXNzd29yZC10ZXh0IHtcclxuICBmb250LXNpemU6IDJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _miembros_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../miembros.service */ "wJOZ");
/* harmony import */ var _asignar_consolidador_asignar_consolidador_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../asignar-consolidador/asignar-consolidador.page */ "FA8q");
/* harmony import */ var _asignar_grupo_familiar_asignar_grupo_familiar_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../asignar-grupo-familiar/asignar-grupo-familiar.page */ "Hx5O");
/* harmony import */ var _detalles_miembro_detalles_miembro_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../detalles-miembro/detalles-miembro.service */ "iN9u");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../Utils/validations.functions */ "OmbT");
/* harmony import */ var _services_cookies_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/cookies.service */ "QTu/");















let RegistroPage = class RegistroPage {
    constructor(axios, cookiesService, globalSer, navCtrl, detallesMiembroService, miembrosService, router) {
        this.axios = axios;
        this.cookiesService = cookiesService;
        this.globalSer = globalSer;
        this.navCtrl = navCtrl;
        this.detallesMiembroService = detallesMiembroService;
        this.miembrosService = miembrosService;
        this.router = router;
        this.civilStatus = [];
        this.gender = [];
        this.myId = null;
        this.successRegister = false;
        this.successData = null;
        this.referralData = null;
        this.groupData = null;
        this.maxDate = null;
        this.churches = [];
        this.church = null;
        this.formData = {
            phone: null,
            names: null,
            lastNames: null,
            email: null,
            birthday: null,
            civilStatus: null,
            gender: null,
            locality: null,
            direction: null,
            petition: null,
            attendGroup: false,
            groupId: null,
            roles: [4],
            referred: null,
            consolidated: false,
            church: null,
            iAmConsolidator: true,
            created_at: null
        };
        this.maxDate = dayjs__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYY-MM-DD');
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield this.cookiesService.getCookie('data');
            if (data)
                this.myId = data._id;
            // check if exist session
            if (!this.globalSer.checkSession())
                yield this.router.navigate(['/ingresar']);
            else if (!this.globalSer.checkRoleToEnableAddOrUpdate()) {
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero no cuenta con privilegios para registrar nuevos miembros.');
                yield this.navCtrl.back();
            }
            else {
                this.civilStatus = this.detallesMiembroService.civilStatusList;
                this.gender = this.detallesMiembroService.genderList;
            }
            yield this.getChurches();
        });
    }
    getChurches() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.churches = yield this.miembrosService.getChurches();
            yield this.cookiesService.setCookie('churches', this.churches);
            if (this.churches.length === 1) {
                this.formData.church = this.churches[0]._id;
                this.church = this.churches[0];
            }
        });
    }
    registerMember() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Registrando, por favor espere ...');
            const data = Object.assign({}, this.formData);
            if (data.iAmConsolidator)
                data.referred = this.myId;
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
            else
                yield this.globalSer.dismissLoading();
        });
    }
    back() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navCtrl.back();
        });
    }
    setCheckedValue(input) {
        this.formData[input] = !this.formData[input];
        if (input === 'attendGroup' && !this.formData.attendGroup) {
            this.formData.groupId = null;
            this.groupData = null;
        }
        if (input === 'consolidated' && !this.formData.consolidated) {
            this.formData.iAmConsolidator = true;
            this.formData.petition = null;
            this.formData.referred = null;
            this.referralData = null;
        }
        if (input === 'iAmConsolidator' && !this.formData.iAmConsolidator) {
            this.formData.referred = null;
            this.referralData = null;
        }
    }
    getReferredNames() {
        return this.referralData ? `${this.referralData.names} ${this.referralData.lastNames}` : null;
    }
    getGroupLabel() {
        return this.groupData ?
            `Sector: ${this.groupData.sector} / Sub-sector: ${this.groupData.subSector} / Grupo #: ${this.groupData.number}`
            : null;
    }
    setDate() {
        if (this.formData.birthday) {
            this.formData.birthday = dayjs__WEBPACK_IMPORTED_MODULE_6___default()(this.formData.birthday).format('YYYY-MM-DD');
        }
    }
    validateOnlyNumbers(event) {
        Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_13__["onlyNumbersInputValidation"])(event);
    }
    validateOnlyLetters(event) {
        Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_13__["onlyLettersInputValidation"])(event);
    }
    // Alerts
    showListChurches() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputs = [];
            for (const [index, value] of this.churches.entries()) {
                inputs.push({
                    name: `documentType`,
                    type: 'radio',
                    label: value.name,
                    value: index,
                    checked: ((_a = this.church) === null || _a === void 0 ? void 0 : _a._id) === value._id,
                });
            }
            yield this.globalSer.alertWithList({
                header: 'Seleccione',
                inputs,
                confirmAction: (selectedValue) => {
                    var _a;
                    this.formData.church = ((_a = this.churches[selectedValue]) === null || _a === void 0 ? void 0 : _a._id) || null;
                    this.church = this.churches[selectedValue] || null;
                }
            });
        });
    }
    showAlertList(input, nameArray, selected = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputs = [];
            for (const [i, value] of this[nameArray].entries()) {
                inputs.push({
                    name: `value-${i}`,
                    type: 'radio',
                    label: value,
                    value: i,
                    checked: selected !== null && selected.toString() === i.toString(),
                });
            }
            yield this.globalSer.alertWithList({
                header: 'Seleccione',
                inputs,
                confirmAction: (selectedValue) => {
                    this.formData[input] = selectedValue;
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
    // Modals
    modalMember() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const updateData = (member) => {
                this.referralData = member || null;
                this.formData.referred = member ? member._id : null;
            };
            yield this.globalSer.loadModal(_asignar_consolidador_asignar_consolidador_page__WEBPACK_IMPORTED_MODULE_8__["AsignarConsolidadorPage"], { selectedId: this.formData.referred }, false, updateData);
        });
    }
    modalGroups() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const updateData = (group) => {
                this.groupData = group || null;
                this.formData.groupId = group ? group._id : null;
            };
            yield this.globalSer.loadModal(_asignar_grupo_familiar_asignar_grupo_familiar_page__WEBPACK_IMPORTED_MODULE_9__["AsignarGrupoFamiliarPage"], { selectedId: this.formData.groupId }, false, updateData);
        });
    }
    validateData() {
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_13__["checkPhone"])(this.formData.phone))
            return 'Disculpe, pero debe indicar un número de teléfono válido.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_13__["checkNameOrLastName"])(this.formData.names))
            return 'Disculpe, pero debe indicar un nombre válido.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_13__["checkNameOrLastName"])(this.formData.lastNames))
            return 'Disculpe, pero debe indicar un apellido válido.';
        // if (!checkIfValueIsNumber(`${this.formData.role}`)) return 'Disculpe, pero debe seleccionar un rol para el miembro.';
        if (this.formData.consolidated && !this.formData.iAmConsolidator && !this.formData.referred)
            return 'Disculpe, pero debe seleccionar un miembro consolidador.';
        if (this.formData.attendGroup && !this.formData.groupId)
            return 'Disculpe, pero debe seleccionar un grupo familiar.';
        return null;
    }
    confirmRegister() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validated = this.validateData();
            if (!validated) {
                yield this.globalSer.alertConfirm({
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
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_11__["AxiosService"] },
    { type: _services_cookies_service__WEBPACK_IMPORTED_MODULE_14__["CookiesService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_12__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _detalles_miembro_detalles_miembro_service__WEBPACK_IMPORTED_MODULE_10__["DetallesMiembroService"] },
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