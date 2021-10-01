(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crear-evento-crear-evento-module"],{

/***/ "27By":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/eventos/crear-evento/crear-evento.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Nuevo evento</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"12\">\n      <app-events-form></app-events-form>\n    </ion-col>\n    <ion-col size=\"12\">\n      <br>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "3+fj":
/*!*****************************************************************!*\
  !*** ./src/app/views/eventos/crear-evento/crear-evento.page.ts ***!
  \*****************************************************************/
/*! exports provided: CrearEventoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearEventoPage", function() { return CrearEventoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_crear_evento_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./crear-evento.page.html */ "27By");
/* harmony import */ var _crear_evento_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crear-evento.page.scss */ "vYVt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let CrearEventoPage = class CrearEventoPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    goBack() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navCtrl.back();
        });
    }
};
CrearEventoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
CrearEventoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-crear-evento',
        template: _raw_loader_crear_evento_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_crear_evento_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CrearEventoPage);



/***/ }),

/***/ "Fs1B":
/*!***************************************************************************!*\
  !*** ./src/app/views/eventos/crear-evento/crear-evento-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: CrearEventoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearEventoPageRoutingModule", function() { return CrearEventoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _crear_evento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crear-evento.page */ "3+fj");




const routes = [
    {
        path: '',
        component: _crear_evento_page__WEBPACK_IMPORTED_MODULE_3__["CrearEventoPage"]
    }
];
let CrearEventoPageRoutingModule = class CrearEventoPageRoutingModule {
};
CrearEventoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CrearEventoPageRoutingModule);



/***/ }),

/***/ "e1V3":
/*!*******************************************************************!*\
  !*** ./src/app/views/eventos/crear-evento/crear-evento.module.ts ***!
  \*******************************************************************/
/*! exports provided: CrearEventoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearEventoPageModule", function() { return CrearEventoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _crear_evento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crear-evento-routing.module */ "Fs1B");
/* harmony import */ var _crear_evento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crear-evento.page */ "3+fj");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "j1ZV");








let CrearEventoPageModule = class CrearEventoPageModule {
};
CrearEventoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _crear_evento_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearEventoPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_crear_evento_page__WEBPACK_IMPORTED_MODULE_6__["CrearEventoPage"]]
    })
], CrearEventoPageModule);



/***/ }),

/***/ "vYVt":
/*!*******************************************************************!*\
  !*** ./src/app/views/eventos/crear-evento/crear-evento.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhci1ldmVudG8ucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=crear-evento-crear-evento-module.js.map