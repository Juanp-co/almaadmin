(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-ofrendas-ofrendas-module"],{

/***/ "EDhg":
/*!***************************************************!*\
  !*** ./src/app/views/ofrendas/ofrendas.module.ts ***!
  \***************************************************/
/*! exports provided: OfrendasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfrendasPageModule", function() { return OfrendasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ofrendas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ofrendas-routing.module */ "oXqd");
/* harmony import */ var _ofrendas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ofrendas.page */ "RGt4");







let OfrendasPageModule = class OfrendasPageModule {
};
OfrendasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ofrendas_routing_module__WEBPACK_IMPORTED_MODULE_5__["OfrendasPageRoutingModule"]
        ],
        declarations: [_ofrendas_page__WEBPACK_IMPORTED_MODULE_6__["OfrendasPage"]]
    })
], OfrendasPageModule);



/***/ }),

/***/ "RGt4":
/*!*************************************************!*\
  !*** ./src/app/views/ofrendas/ofrendas.page.ts ***!
  \*************************************************/
/*! exports provided: OfrendasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfrendasPage", function() { return OfrendasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ofrendas_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ofrendas.page.html */ "dgaI");
/* harmony import */ var _ofrendas_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ofrendas.page.scss */ "kpSv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_cookies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/cookies.service */ "QTu/");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");








let OfrendasPage = class OfrendasPage {
    constructor(axios, cookieService, globalSer, router) {
        this.axios = axios;
        this.cookieService = cookieService;
        this.globalSer = globalSer;
        this.router = router;
        // check if exist session
        if (!this.globalSer.checkSession())
            this.router.navigate(['/ingresar']);
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.globalSer.checkSession())
                this.router.navigate(['/ingresar']);
        });
    }
};
OfrendasPage.ctorParameters = () => [
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_5__["AxiosService"] },
    { type: _services_cookies_service__WEBPACK_IMPORTED_MODULE_6__["CookiesService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
OfrendasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ofrendas',
        template: _raw_loader_ofrendas_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ofrendas_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OfrendasPage);



/***/ }),

/***/ "dgaI":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/ofrendas/ofrendas.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>ofrendas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "kpSv":
/*!***************************************************!*\
  !*** ./src/app/views/ofrendas/ofrendas.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZnJlbmRhcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "oXqd":
/*!***********************************************************!*\
  !*** ./src/app/views/ofrendas/ofrendas-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: OfrendasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfrendasPageRoutingModule", function() { return OfrendasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ofrendas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ofrendas.page */ "RGt4");




const routes = [
    {
        path: '',
        component: _ofrendas_page__WEBPACK_IMPORTED_MODULE_3__["OfrendasPage"]
    }
];
let OfrendasPageRoutingModule = class OfrendasPageRoutingModule {
};
OfrendasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OfrendasPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-ofrendas-ofrendas-module.js.map