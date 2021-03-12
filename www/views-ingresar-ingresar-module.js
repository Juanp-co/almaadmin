(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-ingresar-ingresar-module"],{

/***/ "+xLx":
/*!*************************************************!*\
  !*** ./src/app/views/ingresar/ingresar.page.ts ***!
  \*************************************************/
/*! exports provided: IngresarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresarPage", function() { return IngresarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ingresar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ingresar.page.html */ "nsxg");
/* harmony import */ var _ingresar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ingresar.page.scss */ "RaCq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_cookies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/cookies.service */ "QTu/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app.component */ "Sy1n");










let IngresarPage = class IngresarPage {
    constructor(alertCtrl, axios, cookieService, globalSer, navCtrl, router, globalComponent) {
        this.alertCtrl = alertCtrl;
        this.axios = axios;
        this.cookieService = cookieService;
        this.globalSer = globalSer;
        this.navCtrl = navCtrl;
        this.router = router;
        this.globalComponent = globalComponent;
        this.session = false;
        this.user = 'CC123456789';
        this.pass = 'password';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.globalSer.checkSession())
                this.router.navigate(['/inicio']);
            else {
                this.globalComponent.session = false;
                this.globalComponent.userData = null;
            }
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.globalSer.checkSession())
                this.router.navigate(['/inicio']);
            else {
                this.globalComponent.session = false;
                this.globalComponent.userData = null;
            }
        });
    }
    ingresar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.pass && this.user) {
                yield this.globalSer.presentLoading();
                const res = yield this.axios.postData('/login', { document: this.user, password: this.pass, admin: true });
                if (res && res.success) {
                    const { data, token } = res.data;
                    this.cookieService.setCookie('token', token);
                    this.cookieService.setCookie('data', data);
                    this.globalComponent.session = true;
                    this.globalComponent.userData = data;
                    yield this.globalSer.dismissLoading();
                    yield this.router.navigate(['/inicio']);
                }
                else {
                    this.user = null;
                    this.pass = null;
                    yield this.globalSer.dismissLoading();
                    yield this.globalSer.presentAlert('Alerta', res && res.error ? res.error : 'Error desconocido.');
                }
            }
            else {
                yield this.globalSer.presentAlert('Alerta', 'Asegúrese de indicar su usuario y contraseña.');
            }
        });
    }
};
IngresarPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_4__["AxiosService"] },
    { type: _services_cookies_service__WEBPACK_IMPORTED_MODULE_6__["CookiesService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"] }
];
IngresarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ingresar',
        template: _raw_loader_ingresar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ingresar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IngresarPage);



/***/ }),

/***/ "RaCq":
/*!***************************************************!*\
  !*** ./src/app/views/ingresar/ingresar.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmdyZXNhci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "nsxg":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/ingresar/ingresar.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Ingresar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row class=\"ion-justify-content-center ion-margin-top ion-padding-top\" *ngIf=\"!session\">\n    <ion-col [size]=\"8\">\n      <div *ngIf=\"!login\" class=\"ion-margin-top ion-padding-top\">\n        <br><br><br>\n\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"auto\">\n            <h4>\n              <ion-text color=\"primary\">\n                Acceder al panel administrador\n              </ion-text>\n            </h4>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"8\">\n            <ion-item>\n              <ion-label position=\"floating\">Usuario</ion-label>\n              <ion-input [(ngModel)]=\"user\" class=\"ion-text-uppercase\" maxlength=\"12\" placeholder=\"Ejm: CC12345678\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"8\">\n            <ion-item>\n              <ion-label position=\"floating\">Contraseña</ion-label>\n              <ion-input type=\"password\" [(ngModel)]=\"pass\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-justify-content-center ion-margin-top\">\n          <ion-col size=\"auto\">\n            <ion-button expand=\"full\" color=\"primary\" (click)=\"ingresar()\">\n              Ingresar\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "qp61":
/*!***********************************************************!*\
  !*** ./src/app/views/ingresar/ingresar-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: IngresarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresarPageRoutingModule", function() { return IngresarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ingresar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ingresar.page */ "+xLx");




const routes = [
    {
        path: '',
        component: _ingresar_page__WEBPACK_IMPORTED_MODULE_3__["IngresarPage"]
    }
];
let IngresarPageRoutingModule = class IngresarPageRoutingModule {
};
IngresarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IngresarPageRoutingModule);



/***/ }),

/***/ "zeWn":
/*!***************************************************!*\
  !*** ./src/app/views/ingresar/ingresar.module.ts ***!
  \***************************************************/
/*! exports provided: IngresarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresarPageModule", function() { return IngresarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ingresar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ingresar-routing.module */ "qp61");
/* harmony import */ var _ingresar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ingresar.page */ "+xLx");







let IngresarPageModule = class IngresarPageModule {
};
IngresarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ingresar_routing_module__WEBPACK_IMPORTED_MODULE_5__["IngresarPageRoutingModule"]
        ],
        declarations: [_ingresar_page__WEBPACK_IMPORTED_MODULE_6__["IngresarPage"]]
    })
], IngresarPageModule);



/***/ })

}]);
//# sourceMappingURL=views-ingresar-ingresar-module.js.map