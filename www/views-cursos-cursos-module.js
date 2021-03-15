(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-cursos-cursos-module"],{

/***/ "8C+O":
/*!***********************************************!*\
  !*** ./src/app/views/cursos/cursos.module.ts ***!
  \***********************************************/
/*! exports provided: CursosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosPageModule", function() { return CursosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cursos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cursos-routing.module */ "GTGI");
/* harmony import */ var _cursos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cursos.page */ "ijen");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let CursosPageModule = class CursosPageModule {
};
CursosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cursos_routing_module__WEBPACK_IMPORTED_MODULE_5__["CursosPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_cursos_page__WEBPACK_IMPORTED_MODULE_6__["CursosPage"]]
    })
], CursosPageModule);



/***/ }),

/***/ "GTGI":
/*!*******************************************************!*\
  !*** ./src/app/views/cursos/cursos-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CursosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosPageRoutingModule", function() { return CursosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cursos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cursos.page */ "ijen");




const routes = [
    {
        path: '',
        component: _cursos_page__WEBPACK_IMPORTED_MODULE_3__["CursosPage"]
    },
    {
        path: 'crear',
        loadChildren: () => Promise.all(/*! import() | crear-crear-module */[__webpack_require__.e("default~crear-crear-module~modal-editar-contenido-modal-editar-contenido-module~modal-editar-tema-mo~23c6fd20"), __webpack_require__.e("crear-crear-module")]).then(__webpack_require__.bind(null, /*! ./crear/crear.module */ "PDbM")).then(m => m.CrearPageModule)
    },
    {
        path: ':id',
        loadChildren: () => Promise.all(/*! import() | detalles-curso-detalles-curso-module */[__webpack_require__.e("default~detalles-curso-detalles-curso-module~views-cuentas-bancarias-cuentas-bancarias-module~views-~916dc538"), __webpack_require__.e("detalles-curso-detalles-curso-module")]).then(__webpack_require__.bind(null, /*! ./detalles-curso/detalles-curso.module */ "v0qv")).then(m => m.DetallesCursoPageModule)
    },
];
let CursosPageRoutingModule = class CursosPageRoutingModule {
};
CursosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CursosPageRoutingModule);



/***/ }),

/***/ "LBIK":
/*!***********************************************!*\
  !*** ./src/app/views/cursos/cursos.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXJzb3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "ijen":
/*!*********************************************!*\
  !*** ./src/app/views/cursos/cursos.page.ts ***!
  \*********************************************/
/*! exports provided: CursosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosPage", function() { return CursosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cursos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cursos.page.html */ "xCur");
/* harmony import */ var _cursos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cursos.page.scss */ "LBIK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cursos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cursos.service */ "BpEJ");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_cookies_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/cookies.service */ "QTu/");










let CursosPage = class CursosPage {
    constructor(alertCtrl, axios, cookieService, cursosService, globalSer, modalController, navCtrl, router) {
        this.alertCtrl = alertCtrl;
        this.axios = axios;
        this.cookieService = cookieService;
        this.cursosService = cursosService;
        this.globalSer = globalSer;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.courses = [];
        this.totals = 0;
        this.pages = 0;
        this.page = 1;
        this.queryParams = {
            input: 'title',
            value: 1,
            page: 1,
            limit: 10,
            title: null
        };
        this.handlePage = (page) => {
            this.queryParams.page = page;
            this.getCoursesList();
        };
        // check if exist session
        if (!this.globalSer.checkSession())
            this.router.navigate(['/ingresar']);
    }
    ngOnInit() { }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.globalSer.checkSession())
                this.router.navigate(['/ingresar']);
            else
                yield this.getTotals();
        });
    }
    getTotals() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.totals = 0;
            this.pages = 0;
            const totals = yield this.cursosService.getCoursesTotals(this.queryParams);
            if (!!totals && totals >= 0 && !totals.error) {
                this.totals = totals;
                this.pages = this.globalSer.getPagination(totals, this.queryParams.limit);
                if (totals > 0)
                    yield this.getCoursesList();
                else {
                    this.queryParams.page = 1;
                    this.pages = 0;
                    this.courses = [];
                }
            }
            else if (!!totals && totals.error) {
                this.queryParams.page = 1;
                this.pages = 0;
                this.courses = [];
                yield this.globalSer.errorSession();
            }
            else {
                this.queryParams.page = 1;
                this.pages = 0;
                this.courses = [];
            }
        });
    }
    getCoursesList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // if (this.showFilter) this.showFilter = false;
            yield this.globalSer.presentLoading();
            const data = yield this.cursosService.getCourses(this.queryParams);
            if (data && !data.error) {
                this.courses = data;
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
    // query actions
    findData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.queryParams.page = 1;
            this.pages = 0;
            this.courses = null;
            yield this.getTotals();
        });
    }
    setSortOrder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.queryParams.value = this.queryParams.value === 1 ? -1 : 1;
            this.queryParams.page = 1;
            this.courses = null;
            yield this.getCoursesList();
        });
    }
    setQueryValues() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const updated = (selectedValue) => {
                this.queryParams.limit = selectedValue;
                this.queryParams.page = 1;
                this.pages = this.globalSer.getPagination(this.totals, this.queryParams.limit);
                this.courses = null;
                this.getCoursesList();
            };
            yield this.globalSer.alertWithList({
                header: 'Resultados por página',
                inputs: [
                    {
                        name: `results-per-page`,
                        type: 'radio',
                        label: `10`,
                        value: 10,
                        checked: this.queryParams.limit === 10,
                    },
                    {
                        name: `results-per-page`,
                        type: 'radio',
                        label: `25`,
                        value: 25,
                        checked: this.queryParams.limit === 25,
                    },
                    {
                        name: `results-per-page`,
                        type: 'radio',
                        label: `50`,
                        value: 50,
                        checked: this.queryParams.limit === 50,
                    },
                ],
                confirmAction: updated
            });
        });
    }
    // others actions
    goToCreate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['/cursos/crear']);
        });
    }
};
CursosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_8__["AxiosService"] },
    { type: _services_cookies_service__WEBPACK_IMPORTED_MODULE_9__["CookiesService"] },
    { type: _cursos_service__WEBPACK_IMPORTED_MODULE_6__["CursosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CursosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cursos',
        template: _raw_loader_cursos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cursos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CursosPage);



/***/ }),

/***/ "xCur":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/cursos/cursos.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Cursos</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" (click)=\"goToCreate()\">\n        <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\n        Nuevo curso\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-row>\n        <ion-col [size]=\"12\" size-sm=\"7\">\n          <ion-toolbar>\n            <ion-button color=\"light\" (click)=\"queryParams.title = null; findData()\" slot=\"start\" *ngIf=\"queryParams.title\">\n              <ion-icon name=\"backspace-outline\"></ion-icon>\n            </ion-button>\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">Buscar por título</ion-label>\n              <ion-input\n                [(ngModel)]=\"queryParams.title\"\n                autocomplete=\"off\"\n                class=\"ion-text-uppercase\"\n              ></ion-input>\n            </ion-item>\n            <ion-button color=\"light\" (click)=\"findData()\" slot=\"end\">\n              <ion-icon name=\"search-outline\"></ion-icon>\n            </ion-button>\n          </ion-toolbar>\n        </ion-col>\n        <ion-col [size]=\"12\" size-sm=\"5\">\n          <ion-toolbar>\n            <ion-button color=\"light\" (click)=\"setSortOrder()\">\n              <ion-icon name=\"arrow-up-outline\" *ngIf=\"queryParams.value === 1\"></ion-icon>\n              <ion-icon name=\"arrow-down-outline\" *ngIf=\"queryParams.value === -1\"></ion-icon>&nbsp;\n              <ion-text>{{ queryParams.value === 1 ? 'ASC' : 'DES' }}</ion-text>\n            </ion-button>\n            <ion-button color=\"light\" (click)=\"setQueryValues()\">\n              <ion-icon name=\"filter-outline\"></ion-icon>&nbsp;\n              <ion-text>{{ queryParams.limit }}</ion-text>\n            </ion-button>\n          </ion-toolbar>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"courses && courses.length > 0; else noCourses\">\n    <ion-col size=\"12\" size-sm=\"6\" size-md=\"4\" *ngFor=\"let course of courses\">\n      <app-cursoscard [course]=\"course\" [list]=\"true\"></app-cursoscard>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"ion-margin-top\" *ngIf=\"courses && courses.length > 0 && pages > 0\">\n    <app-paginator\n      [totalPages]=\"pages\"\n      [currentPage]=\"queryParams.page\"\n      [handlePage]=\"handlePage\"\n    ></app-paginator>\n  </div>\n\n  <ng-template #noCourses>\n    <ion-card class=\"ion-no-padding\">\n      <ion-text>\n        <p class=\"ion-text-center\">No existen cursos registrados.</p>\n      </ion-text>\n    </ion-card>\n  </ng-template>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=views-cursos-cursos-module.js.map