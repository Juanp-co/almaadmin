(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detalles-miembro-detalles-miembro-module"],{

/***/ "1zh6":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/miembros/detalles-miembro/detalles-miembro.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" *ngIf=\"!views.data.edit\">\n      <ion-button (click)=\"back()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ title }}</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"user && enableActions\">\n      <ion-button expand=\"full\" (click)=\"confirmDelete()\" slot=\"end\" *ngIf=\"!views.data.edit\">\n        <ion-icon name=\"trash-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Eliminar miembro</ion-text>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"user\">\n    <ion-card *ngIf=\"views.data.data\">\n      <ion-card-header class=\"ion-no-padding ion-no-margin\">\n        <ion-toolbar color=\"primary\">\n          <ion-buttons slot=\"start\">\n            <ion-button (click)=\"setShowView('data')\" *ngIf=\"!views.data.edit\">\n              <ion-icon name=\"chevron-{{views.data.show ? 'up' : 'down' }}-outline\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"editEnable()\" *ngIf=\"views.data.edit\">\n              <ion-icon name=\"close-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n          <ion-title *ngIf=\"!views.data.edit\">{{ views.data.label }}</ion-title>\n          <ion-title *ngIf=\"views.data.edit\">Editar perfil del usuario</ion-title>\n          <ion-buttons slot=\"end\" *ngIf=\"views.data.show\">\n            <ion-button color=\"primary\" (click)=\"editEnable()\" *ngIf=\"views.data.edit\">\n              <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n              <ion-text>Cancelar edición</ion-text>\n            </ion-button>\n            <ion-button color=\"light\" expand=\"full\" (click)=\"editEnable()\" slot=\"end\" *ngIf=\"!views.data.edit\">\n              <ion-icon name=\"create-outline\" slot=\"start\"></ion-icon>\n              <ion-text>Editar</ion-text>\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-card-header>\n      <ion-card-content class=\"{{ views.data.show ? '' : 'ion-hide' }}\">\n        <ion-row>\n          <ion-col class=\"ion-no-margin\" size=\"12\" *ngIf=\"views.data.edit && formData\">\n            <ion-row>\n              <ion-col size=\"12\" size-sm=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"medium\">Tipo de documento (*)</ion-label>\n                  <ion-input\n                    [readonly]=\"true\"\n                    [value]=\"formData.documentType ? getDocumentLabel(formData.documentType) : ''\"\n                    autocomplete=\"off\"\n                    (click)=\"showAlertDocumentList(formData.documentType)\"\n                  ></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"medium\">Número de documento (*)</ion-label>\n                  <ion-input\n                    [(ngModel)]=\"formData.document\"\n                    autocomplete=\"off\"\n                    maxlength=\"10\"\n                    (keypress)=\"validateOnlyNumber($event)\"\n                    class=\"ion-text-uppercase\"\n                  >\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"medium\">Nombre(s) (*)</ion-label>\n                  <ion-input\n                    [(ngModel)]=\"formData.names\"\n                    autocomplete=\"off\"\n                    maxlength=\"50\"\n                    (keyup)=\"validateOnlyLetters($event)\"\n                    class=\"ion-text-uppercase\"\n                  ></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"medium\">Apellidos(s) (*)</ion-label>\n                  <ion-input\n                    [(ngModel)]=\"formData.lastNames\"\n                    autocomplete=\"off\"\n                    maxlength=\"50\"\n                    (keyup)=\"validateOnlyLetters($event)\"\n                    class=\"ion-text-uppercase\"\n                  ></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"medium\">Correo electrónico (*)</ion-label>\n                  <ion-input [(ngModel)]=\"formData.email\" autocomplete=\"off\" class=\"ion-text-uppercase\"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"medium\">Teléfono (*)</ion-label>\n                  <ion-input\n                    [(ngModel)]=\"formData.phone\"\n                    autocomplete=\"off\"\n                    maxlength=\"13\"\n                    (keypress)=\"validateOnlyNumber($event)\"\n                  ></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\">Fecha de nacimiento (*)</ion-label>\n                  <ion-datetime\n                    [(ngModel)]=\"formData.birthday\"\n                    displayFormat=\"DD/MM/YYYY\"\n                    min=\"1910-03-14\"\n                    max=\"{{maxDate}}\"\n                    doneText=\"Listo\"\n                    cancelText=\"Cancelar\"\n                    (change)=\"setDate()\"\n                  >\n                  </ion-datetime>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"medium\">Sexo (*)</ion-label>\n                  <ion-input\n                    [readonly]=\"true\"\n                    [value]=\"gender[formData.gender] || ''\"\n                    autocomplete=\"off\"\n                    (click)=\"showAlertList('gender', 'gender', formData.gender)\"\n                  ></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"medium\">Tipo de sangre (*)</ion-label>\n                  <ion-input\n                    [readonly]=\"true\"\n                    [value]=\"bloodType[formData.bloodType] || ''\"\n                    autocomplete=\"off\"\n                    (click)=\"showAlertList('bloodType', 'bloodType', formData.bloodType)\"\n                  ></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"medium\">Estado civil (*)</ion-label>\n                  <ion-input\n                    [readonly]=\"true\"\n                    [value]=\"civilStatus[formData.civilStatus] || ''\"\n                    autocomplete=\"off\"\n                    (click)=\"showAlertList('civilStatus', 'civilStatus', formData.civilStatus)\"\n                  ></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"medium\">Nivel educativo (*)</ion-label>\n                  <ion-input\n                    [readonly]=\"true\"\n                    [value]=\"educationLevel[formData.educationLevel] || ''\"\n                    autocomplete=\"off\"\n                    (click)=\"showAlertList('educationLevel', 'educationLevel', formData.educationLevel)\"\n                  ></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"medium\">Profesión (*)</ion-label>\n                  <ion-input\n                    [readonly]=\"true\"\n                    [value]=\"professions[formData.profession] || ''\"\n                    autocomplete=\"off\"\n                    (click)=\"showAlertList('profession', 'professions', formData.profession)\"\n                  ></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"medium\">¿Posee una empresa? (*)</ion-label>\n                  <ion-input\n                    [readonly]=\"true\"\n                    [value]=\"formData.company\"\n                    autocomplete=\"off\"\n                    (click)=\"showAlertYesOrNotList('company', formData.company)\"\n                  ></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\" size-sm=\"6\" *ngIf=\"formData.company === 'Si';\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"medium\">Tipo de empresa (*)</ion-label>\n                  <ion-input\n                    [readonly]=\"true\"\n                    [value]=\"companyType[formData.companyType] || ''\"\n                    autocomplete=\"off\"\n                    class=\"ion-text-uppercase\"\n                    (click)=\"showAlertList('companyType', 'companyType', formData.companyType)\"\n                  ></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"medium\">¿Estás bautizado?</ion-label>\n                  <ion-input\n                    [readonly]=\"true\"\n                    [value]=\"formData.baptized\"\n                    autocomplete=\"off\"\n                    (click)=\"showAlertYesOrNotList('baptized', formData.baptized)\"\n                  ></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"medium\">Departamento (*)</ion-label>\n                  <ion-input\n                    [readonly]=\"true\"\n                    [value]=\"departments[formData.department] || ''\"\n                    autocomplete=\"off\"\n                    class=\"ion-text-uppercase\"\n                    (click)=\"showAlertList('department', 'departments', formData.department)\"\n                  ></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"medium\">Ciudad (*)</ion-label>\n                  <ion-input\n                    [readonly]=\"true\"\n                    [value]=\"cities[formData.city] || ''\"\n                    autocomplete=\"off\"\n                    class=\"ion-text-uppercase\"\n                    (click)=\"showAlertList('city', 'cities', formData.city)\"\n                  ></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"medium\">Barrio o localidad (*)</ion-label>\n                  <ion-input [(ngModel)]=\"formData.locality\" autocomplete=\"off\" maxlength=\"100\" class=\"ion-text-uppercase\"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"medium\">Dirección (*)</ion-label>\n                  <ion-input [(ngModel)]=\"formData.direction\" autocomplete=\"off\" maxlength=\"250\" class=\"ion-text-uppercase\"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top ion-margin-bottom ion-text-center\">\n                <ion-button color=\"light\" (click)=\"editEnable()\">\n                  <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n                  <ion-text>Cancelar</ion-text>\n                </ion-button>\n                <ion-button color=\"primary\" (click)=\"confirmUpdate()\">\n                  <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\n                  <ion-text>Guardar</ion-text>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <ion-col size=\"12\" *ngIf=\"!views.data.edit\">\n            <ion-row>\n              <ion-col class=\"ion-no-padding\" size=\"12\" size-sm=\"6\">\n                <ion-row>\n                  <ion-col size=\"5\">\n                    <ion-text><b>Rol</b></ion-text>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <ion-text>{{this.globalSer.getRoleValue(user.role)}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"5\">\n                    <ion-text><b>Nº de documento</b></ion-text>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <ion-text>{{user.document}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"5\">\n                    <ion-text><b>Nombre(s)</b></ion-text>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <ion-text>{{user.names}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"5\">\n                    <ion-text><b>Apellido(s)</b></ion-text>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <ion-text>{{user.lastNames}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"5\">\n                    <ion-text><b>Correo electrónico:</b></ion-text>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <ion-text>{{user.email || 'No indicado'}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"5\">\n                    <ion-text><b>Teléfono:</b></ion-text>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <ion-text>{{user.phone || 'No indicado'}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"5\">\n                    <ion-text><b>Fecha de nac.:</b></ion-text>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <ion-text>{{user.birthday || 'No indicado'}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"5\">\n                    <ion-text><b>Sexo:</b></ion-text>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <ion-text>{{user.gender || 'No indicado'}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"5\">\n                    <ion-text><b>Estado civil:</b></ion-text>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <ion-text>{{user.civilStatus || 'No indicado'}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"5\">\n                    <ion-text><b>Nivel educativo:</b></ion-text>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <ion-text>{{user.educationLevel || 'No indicado'}}</ion-text>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n\n              <ion-col class=\"ion-no-padding\" size=\"12\" size-sm=\"6\">\n                <ion-row>\n                  <ion-col size=\"5\">\n                    <ion-text><b>Profesión:</b></ion-text>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <ion-text>{{user.profession || 'No indicado'}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"5\">\n                    <ion-text><b>Tipo de sangre:</b></ion-text>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <ion-text>{{user.bloodType || 'No indicado'}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"5\">\n                    <ion-text><b>Empresa:</b></ion-text>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <ion-text>{{user.company ? 'Si' : 'No'}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"5\" *ngIf=\"user.company\">\n                    <ion-text><b>Tipo de empresa:</b></ion-text>\n                  </ion-col>\n                  <ion-col size=\"7\" *ngIf=\"user.company\">\n                    <ion-text>{{user.companyType}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"5\">\n                    <ion-text><b>Bautizado:</b></ion-text>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <ion-text>{{user.baptized ? 'Si' : 'No'}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"5\">\n                    <ion-text><b>Departamento:</b></ion-text>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <ion-text>{{user.department || 'No indicado'}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"5\">\n                    <ion-text><b>Cuidad:</b></ion-text>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <ion-text>{{user.city || 'No indicado'}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"5\">\n                    <ion-text><b>Barrio:</b></ion-text>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <ion-text>{{user.locality || 'No indicado'}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"5\">\n                    <ion-text><b>Dirección:</b></ion-text>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <ion-text>{{user.direction || 'No indicado'}}</ion-text>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class=\"{{ views.data.edit ? 'ion-hide' : '' }}\">\n      <ion-card-header class=\"ion-no-padding ion-no-margin\">\n        <ion-toolbar color=\"primary\">\n          <ion-buttons slot=\"start\">\n            <ion-button (click)=\"setShowView('referrals')\">\n              <ion-icon name=\"chevron-{{views.referrals.show ? 'up' : 'down' }}-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n          <ion-title>{{ views.referrals.label }} ({{ views.referrals.data.length }})</ion-title>\n        </ion-toolbar>\n      </ion-card-header>\n      <ion-card-content class=\"{{ views.referrals.show ? '' : 'ion-hide' }}\">\n        <ion-row class=\"ion-margin-bottom\" *ngIf=\"views.referrals.referred\">\n          <ion-col size=\"12\" >\n            <ion-text><h2><b>Referido por:</b></h2></ion-text>\n          </ion-col>\n          <ion-col size=\"6\">\n            <app-usercard [data]=\"views.referrals.referred\"></app-usercard>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-margin-bottom\" *ngIf=\"views.referrals.data.length > 0; else noReferrals\">\n          <ion-col size=\"12\">\n            <ion-text><h2><b>Listado de referidos</b></h2></ion-text>\n          </ion-col>\n          <ion-col size=\"4\" *ngFor=\"let ref of views.referrals.data\">\n            <app-usercard [data]=\"ref\"></app-usercard>\n          </ion-col>\n        </ion-row>\n\n        <ng-template #noReferrals>\n          <ion-row class=\"ion-margin-top\">\n            <ion-col size=\"12\">\n              <ion-text>\n                <p class=\"ion-text-center\">\n                  <ion-icon name=\"alert-circle-outline\"></ion-icon>\n                  Este miembro no posee referidos asociados.\n                </p>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n        </ng-template>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class=\"{{ views.data.edit ? 'ion-hide' : '' }}\">\n      <ion-card-header class=\"ion-no-padding ion-no-margin\">\n        <ion-toolbar color=\"primary\">\n          <ion-buttons slot=\"start\">\n            <ion-button (click)=\"setShowView('courses')\">\n              <ion-icon name=\"chevron-{{views.courses.show ? 'up' : 'down' }}-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n          <ion-title>{{ views.courses.label }} ({{views.courses.data.length}})</ion-title>\n        </ion-toolbar>\n      </ion-card-header>\n      <ion-card-content class=\"{{ views.courses.show ? '' : 'ion-hide' }}\">\n        <ion-row *ngIf=\"views.courses.data.length > 0; else noCourses\">\n          <ion-col size=\"4\" *ngFor=\"let c of views.courses.data\">\n            <app-cursoscard [course]=\"c\"></app-cursoscard>\n          </ion-col>\n        </ion-row>\n\n        <ng-template #noCourses>\n          <ion-row class=\"ion-margin-top\">\n            <ion-col size=\"12\">\n              <ion-text>\n                <p class=\"ion-text-center\">\n                  <ion-icon name=\"alert-circle-outline\"></ion-icon>\n                  Este miembro no posee cursos en su cuenta.\n                </p>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n        </ng-template>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "2rLx":
/*!************************************************************************************!*\
  !*** ./src/app/views/miembros/detalles-miembro/detalles-miembro-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: DetallesMiembroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesMiembroPageRoutingModule", function() { return DetallesMiembroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detalles_miembro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalles-miembro.page */ "9RYP");




const routes = [
    {
        path: '',
        component: _detalles_miembro_page__WEBPACK_IMPORTED_MODULE_3__["DetallesMiembroPage"]
    }
];
let DetallesMiembroPageRoutingModule = class DetallesMiembroPageRoutingModule {
};
DetallesMiembroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetallesMiembroPageRoutingModule);



/***/ }),

/***/ "9RYP":
/*!**************************************************************************!*\
  !*** ./src/app/views/miembros/detalles-miembro/detalles-miembro.page.ts ***!
  \**************************************************************************/
/*! exports provided: DetallesMiembroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesMiembroPage", function() { return DetallesMiembroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalles_miembro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalles-miembro.page.html */ "1zh6");
/* harmony import */ var _detalles_miembro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalles-miembro.page.scss */ "x8dN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");
/* harmony import */ var _detalles_miembro_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detalles-miembro.service */ "iN9u");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../Utils/validations.functions */ "OmbT");











let DetallesMiembroPage = class DetallesMiembroPage {
    constructor(activateRoute, alertCtrl, axios, globalSer, detallesMiembroService, navCtrl, router) {
        this.activateRoute = activateRoute;
        this.alertCtrl = alertCtrl;
        this.axios = axios;
        this.globalSer = globalSer;
        this.detallesMiembroService = detallesMiembroService;
        this.navCtrl = navCtrl;
        this.router = router;
        // static data to edit values
        this.roles = [];
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
        this.maxDate = null;
        // info profile
        this.title = 'Cargando...';
        this.id = null;
        this.user = null;
        this.staticData = null;
        this.totals = null;
        this.enableActions = false;
        this.formData = null;
        this.views = {
            data: {
                label: 'Datos del usuario',
                show: true,
                edit: false,
                data: null,
            },
            courses: {
                label: 'Cursos',
                show: false,
                data: [],
            },
            referrals: {
                label: 'Referidos',
                show: false,
                referred: null,
                data: [],
            }
        };
        // check if exist session
        if (!this.globalSer.checkSession())
            this.router.navigate(['/ingresar']);
        else {
            this.roles = this.globalSer.roles;
            this.documentTypes = detallesMiembroService.documentTypesList;
            this.educationLevel = detallesMiembroService.educationLevel;
            this.professions = detallesMiembroService.professionsList;
            this.bloodType = detallesMiembroService.bloodTypeList;
            this.companyType = detallesMiembroService.companyTypeList;
            this.civilStatus = detallesMiembroService.civilStatusList;
            this.gender = detallesMiembroService.genderList;
            this.departments = detallesMiembroService.departmentsList.map(d => d.department);
            this.maxDate = dayjs__WEBPACK_IMPORTED_MODULE_5___default()().format('YYYY-MM-DD');
            if (this.globalSer.checkRoleToEnableAddOrUpdate())
                this.enableActions = true;
        }
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.id = this.activateRoute.snapshot.paramMap.get('userid');
            yield this.globalSer.presentLoading();
            const data = yield this.detallesMiembroService.getUserDetails(this.id);
            if (data && !data.error) {
                this.staticData = Object.assign({}, data);
                this.views.data.data = this.staticData;
                this.views.referrals.referred = this.staticData.referred;
                this.totals = this.staticData.totals;
                this.setUserParams();
                this.getCourses();
                this.getReferrals();
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
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.globalSer.checkSession())
                this.router.navigate(['/ingresar']);
        });
    }
    updateData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Actualizando, por favor espere ...');
            const data = Object.assign({}, this.formData);
            data.document = `${data.documentType}${data.document}`;
            data.company = data.company === 'Si';
            data.baptized = data.baptized === 'Si';
            data.birthday = dayjs__WEBPACK_IMPORTED_MODULE_5___default()(data.birthday).format('YYYY-MM-DD');
            const updated = yield this.detallesMiembroService.updateDataUser(this.id, data);
            if (updated && !updated.error) {
                this.user = Object.assign({}, updated);
                this.staticData = Object.assign({}, updated);
                yield this.setUserParams();
                yield this.editEnable(true);
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado su perfil exitosamente.');
            }
            else if (updated && updated.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    deleteUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Eliminando usuario, por favor espere ...');
            const deleted = yield this.detallesMiembroService.deleteUser(this.id);
            if (deleted && !deleted.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', deleted || 'Se ha eliminado los datos del usuario exitosamente.');
                yield this.back();
            }
            else if (deleted && deleted.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    getCourses() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield this.detallesMiembroService.getUsersCourses(this.id);
            if (data && !data.error)
                this.views.courses.data = data;
            else if (data && data.error)
                yield this.globalSer.errorSession();
            else
                yield this.globalSer.dismissLoading();
        });
    }
    getReferrals() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield this.detallesMiembroService.getUsersReferrals(this.id);
            if (data && !data.error)
                this.views.referrals.data = data;
            else if (data && data.error)
                yield this.globalSer.errorSession();
            else
                yield this.globalSer.dismissLoading();
        });
    }
    setUserParams() {
        this.user = Object.assign({}, this.staticData);
        this.title = `Detalles: ${this.user.names} ${this.user.lastNames}`;
        this.user.birthday = this.user.birthday ? dayjs__WEBPACK_IMPORTED_MODULE_5___default()(this.user.birthday).format('DD-MM-YYYY') : null;
        this.user.bloodType = this.bloodType[this.user.bloodType] || null;
        this.user.profession = this.professions[this.user.profession] || null;
        this.user.educationLevel = this.educationLevel[this.user.educationLevel] || null;
        this.user.companyType = this.companyType[this.user.companyType] || null;
        this.user.civilStatus = this.civilStatus[this.user.civilStatus] || null;
        this.user.gender = this.gender[this.user.gender] || null;
        const depto = this.detallesMiembroService.departmentsList[this.user.department] || null;
        this.user.department = depto ? depto.department : null;
        if (depto) {
            this.cities = depto.cities || null;
            this.user.city = depto.cities[this.user.city] || null;
        }
    }
    back() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navCtrl.back();
        });
    }
    // actions views
    setShowView(input) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.views[input].show = !this.views[input].show;
            if (this.views[input].edit) {
                yield this.editEnable();
            }
        });
    }
    // getters and setters
    getCity(clearCity = false) {
        const filter = this.detallesMiembroService.departmentsList[this.formData.department] || null;
        if (filter)
            this.cities = filter.cities || [];
        if (clearCity)
            this.formData.city = null;
    }
    getDocumentLabel(value) {
        if (!value)
            return null;
        const da = this.documentTypes.find(d => d.val === value);
        return da ? da.label : null;
    }
    validateOnlyNumber(event) {
        Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["onlyNumbersInputValidation"])(event);
    }
    validateOnlyLetters(event) {
        Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["onlyLettersInputValidation"])(event);
    }
    setDate() {
        if (this.formData.birthday) {
            this.formData.birthday = dayjs__WEBPACK_IMPORTED_MODULE_5___default()(this.formData.birthday).format('YYYY-MM-DD');
        }
    }
    // actions
    editEnable(edited = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!edited)
                yield this.globalSer.presentLoading();
            this.views.data.edit = !this.views.data.edit;
            if (this.views.data.edit) {
                this.formData = Object.assign({ documentType: null }, this.staticData);
                this.title = `Editar datos de: ${this.formData.names} ${this.formData.lastNames}`;
                this.formData.documentType = this.formData.document ? this.formData.document.replace(/[0-9]{5,12}/, '') : null;
                this.formData.document = this.formData.document ? this.formData.document.replace(/[A-Za-z]{1,3}/, '') : null;
                this.formData.company = this.formData.company ? 'Si' : 'No';
                this.formData.baptized = this.formData.baptized ? 'Si' : 'No';
                if (!this.cities)
                    this.getCity();
            }
            else {
                this.title = `Detalles: ${this.user.names} ${this.user.lastNames}`;
                this.formData = null;
            }
            if (!edited)
                yield this.globalSer.dismissLoading();
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
            const alert = yield this.alertCtrl.create({
                header: 'Seleccione',
                inputs,
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => { }
                    },
                    {
                        text: 'Ok',
                        handler: (selectedValue) => {
                            this.formData[input] = selectedValue;
                            if (input === 'department')
                                this.getCity(true);
                        }
                    }
                ]
            });
            yield alert.present();
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
            const alert = yield this.alertCtrl.create({
                header: 'Seleccione',
                inputs,
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => { }
                    },
                    {
                        text: 'Ok',
                        handler: (selectedValue) => {
                            this.formData.documentType = selectedValue;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    showAlertYesOrNotList(input, selected = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputs = [];
            for (const [i, value] of this.yesOrNotValues.entries()) {
                inputs.push({
                    name: `value-${i}`,
                    type: 'radio',
                    label: value,
                    value,
                    checked: value === selected,
                });
            }
            const alert = yield this.alertCtrl.create({
                header: 'Seleccione',
                inputs,
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => { }
                    },
                    {
                        text: 'Ok',
                        handler: (selectedValue) => { this.formData[input] = selectedValue; }
                    }
                ]
            });
            yield alert.present();
        });
    }
    validateData() {
        const { formData } = this;
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkEmail"])(formData.email))
            return 'Disculpe, pero debe indicar su correo electrónico.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkNameOrLastName"])(formData.names))
            return 'Disculpe, pero debe indicar su nombre.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkNameOrLastName"])(formData.lastNames))
            return 'Disculpe, pero debe indicar su apellido.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkPhone"])(formData.phone))
            return 'Disculpe, pero debe indicar su número de teléfono.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkDate"])(formData.birthday))
            return 'Disculpe, pero debe indicar su fecha de nacimiento.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkIfValueIsNumber"])(`${formData.gender}`))
            return 'Disculpe, pero debe indicar su sexo.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkIfValueIsNumber"])(`${formData.bloodType}`))
            return 'Disculpe, pero debe indicar su tipo de sangre.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkIfValueIsNumber"])(`${formData.civilStatus}`))
            return 'Disculpe, pero debe indicar su estado civil.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkIfValueIsNumber"])(`${formData.educationLevel}`))
            return 'Disculpe, pero debe indicar su nivel educativo.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkIfValueIsNumber"])(`${formData.profession}`))
            return 'Disculpe, pero debe indicar su profesión.';
        if (formData.company === null || formData.company === undefined)
            return 'Disculpe, pero debe indicar si posee una empresa.';
        if (formData.company !== null && formData.company === 'Si')
            if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkIfValueIsNumber"])(`${formData.companyType}`))
                return 'Disculpe, pero debe indicar el tipo de empresa que posee.';
        if (formData.baptized === null || formData.baptized === undefined)
            return 'Disculpe, pero debe indicar si usted se encuentra bautizado.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkIfValueIsNumber"])(`${formData.department}`))
            return 'Disculpe, pero debe indicar el departamento de residencia.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkIfValueIsNumber"])(`${formData.city}`))
            return 'Disculpe, pero debe indicar la ciudad de residencia.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkTitlesOrDescriptions"])(formData.locality))
            return 'Disculpe, pero debe indicar el nombre de la localidad de residencia.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkTitlesOrDescriptions"])(formData.direction))
            return 'Disculpe, pero debe indicar su dirección de residencia.';
        return null;
    }
    confirmUpdate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validated = this.validateData();
            if (validated)
                yield this.globalSer.presentAlert('Alerta', validated);
            else {
                this.globalSer.alertConfirm({
                    header: 'Confirme',
                    message: '¿Está seguro qué desea actualizar información de este usuario?',
                    confirmAction: () => this.updateData()
                });
            }
        });
    }
    confirmDelete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.globalSer.alertConfirm({
                header: 'Confirme',
                message: '¿Está seguro qué desea eliminar toda la información de este usuario?',
                confirmAction: () => this.deleteUser()
            });
        });
    }
};
DetallesMiembroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] },
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_6__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _detalles_miembro_service__WEBPACK_IMPORTED_MODULE_8__["DetallesMiembroService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DetallesMiembroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalles-miembro',
        template: _raw_loader_detalles_miembro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalles_miembro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetallesMiembroPage);



/***/ }),

/***/ "ZMlI":
/*!****************************************************************************!*\
  !*** ./src/app/views/miembros/detalles-miembro/detalles-miembro.module.ts ***!
  \****************************************************************************/
/*! exports provided: DetallesMiembroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesMiembroPageModule", function() { return DetallesMiembroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detalles_miembro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalles-miembro-routing.module */ "2rLx");
/* harmony import */ var _detalles_miembro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalles-miembro.page */ "9RYP");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "j1ZV");








let DetallesMiembroPageModule = class DetallesMiembroPageModule {
};
DetallesMiembroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detalles_miembro_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetallesMiembroPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_detalles_miembro_page__WEBPACK_IMPORTED_MODULE_6__["DetallesMiembroPage"]]
    })
], DetallesMiembroPageModule);



/***/ }),

/***/ "x8dN":
/*!****************************************************************************!*\
  !*** ./src/app/views/miembros/detalles-miembro/detalles-miembro.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhbGxlcy1taWVtYnJvLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=detalles-miembro-detalles-miembro-module.js.map