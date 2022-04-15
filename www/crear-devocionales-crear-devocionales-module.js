(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crear-devocionales-crear-devocionales-module"],{

/***/ "39Su":
/*!************************************************************************************!*\
  !*** ./src/app/views/devocionales/crear-devocionales/crear-devocionales.page.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhci1kZXZvY2lvbmFsZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "4n9M":
/*!************************************************************************************!*\
  !*** ./src/app/views/devocionales/crear-devocionales/crear-devocionales.module.ts ***!
  \************************************************************************************/
/*! exports provided: CrearDevocionalesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearDevocionalesPageModule", function() { return CrearDevocionalesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _crear_devocionales_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crear-devocionales-routing.module */ "quaR");
/* harmony import */ var _crear_devocionales_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crear-devocionales.page */ "oHNO");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "j1ZV");








let CrearDevocionalesPageModule = class CrearDevocionalesPageModule {
};
CrearDevocionalesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _crear_devocionales_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearDevocionalesPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_crear_devocionales_page__WEBPACK_IMPORTED_MODULE_6__["CrearDevocionalesPage"]]
    })
], CrearDevocionalesPageModule);



/***/ }),

/***/ "GNbd":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/devocionales/crear-devocionales/crear-devocionales.page.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"confirmCancel()\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Crear devocional</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"12\">\r\n      <app-devocionales-form\r\n        [handleCancel]=\"handleCancel\"\r\n      ></app-devocionales-form>\r\n    </ion-col>\r\n    <ion-col size=\"12\"><br><br></ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ "oHNO":
/*!**********************************************************************************!*\
  !*** ./src/app/views/devocionales/crear-devocionales/crear-devocionales.page.ts ***!
  \**********************************************************************************/
/*! exports provided: CrearDevocionalesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearDevocionalesPage", function() { return CrearDevocionalesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_crear_devocionales_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./crear-devocionales.page.html */ "GNbd");
/* harmony import */ var _crear_devocionales_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crear-devocionales.page.scss */ "39Su");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");






let CrearDevocionalesPage = class CrearDevocionalesPage {
    constructor(globalSer, navCtrl) {
        this.globalSer = globalSer;
        this.navCtrl = navCtrl;
        this.handleCancel = () => this.back();
    }
    ngOnInit() {
        if (!this.globalSer.checkRoleToEnableAddOrUpdate())
            this.back();
    }
    confirmCancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertConfirm({
                header: 'Confirme',
                message: '¿Está seguro qué desea salir del formulario?',
                confirmAction: () => {
                    if (!!this.handleCancel)
                        this.handleCancel();
                }
            });
        });
    }
    back() { this.navCtrl.back(); }
};
CrearDevocionalesPage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
CrearDevocionalesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-crear-devocionales',
        template: _raw_loader_crear_devocionales_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_crear_devocionales_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CrearDevocionalesPage);



/***/ }),

/***/ "quaR":
/*!********************************************************************************************!*\
  !*** ./src/app/views/devocionales/crear-devocionales/crear-devocionales-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: CrearDevocionalesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearDevocionalesPageRoutingModule", function() { return CrearDevocionalesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _crear_devocionales_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crear-devocionales.page */ "oHNO");




const routes = [
    {
        path: '',
        component: _crear_devocionales_page__WEBPACK_IMPORTED_MODULE_3__["CrearDevocionalesPage"]
    }
];
let CrearDevocionalesPageRoutingModule = class CrearDevocionalesPageRoutingModule {
};
CrearDevocionalesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CrearDevocionalesPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=crear-devocionales-crear-devocionales-module.js.map