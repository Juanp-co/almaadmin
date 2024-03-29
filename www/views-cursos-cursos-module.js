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
        loadChildren: () => __webpack_require__.e(/*! import() | crear-crear-module */ "crear-crear-module").then(__webpack_require__.bind(null, /*! ./crear/crear.module */ "PDbM")).then(m => m.CrearPageModule)
    },
    {
        path: ':id',
        loadChildren: () => __webpack_require__.e(/*! import() | detalles-curso-detalles-curso-module */ "detalles-curso-detalles-curso-module").then(__webpack_require__.bind(null, /*! ./detalles-curso/detalles-curso.module */ "v0qv")).then(m => m.DetallesCursoPageModule)
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cursos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cursos.service */ "BpEJ");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");







let CursosPage = class CursosPage {
    constructor(cursosService, globalSer, router) {
        this.cursosService = cursosService;
        this.globalSer = globalSer;
        this.router = router;
        this.courses = [];
        this.totals = 0;
        this.page = 1;
        this.showAddButton = false;
        this.queryParams = {
            input: 'level',
            value: 1,
            page: 1,
            limit: 100,
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
    ngOnInit() {
        this.showAddButton = this.globalSer.checkRoleToEnableAddOrUpdate();
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.globalSer.checkSession())
                this.router.navigate(['/ingresar']);
            else
                yield this.getCoursesList();
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
    goToCreate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['/cursos/crear']);
        });
    }
};
CursosPage.ctorParameters = () => [
    { type: _cursos_service__WEBPACK_IMPORTED_MODULE_5__["CursosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Cursos</ion-title>\r\n    <ion-buttons slot=\"end\" *ngIf=\"showAddButton\">\r\n      <ion-button color=\"primary\" (click)=\"goToCreate()\">\r\n        <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\r\n        Nuevo curso\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-row class=\"ion-justify-content-center\" *ngIf=\"courses && courses.length > 0; else noCourses\">\r\n    <ion-col size=\"12\" size-sm=\"6\" size-md=\"4\" *ngFor=\"let course of courses\">\r\n      <app-cursoscard [course]=\"course\" [list]=\"true\"></app-cursoscard>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ng-template #noCourses>\r\n    <ion-card class=\"ion-no-padding\">\r\n      <ion-text color=\"medium\">\r\n        <p class=\"ion-text-center\">\r\n          <ion-icon name=\"alert-circle-outline\"></ion-icon> No existen cursos registrados.\r\n        </p>\r\n      </ion-text>\r\n    </ion-card>\r\n  </ng-template>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=views-cursos-cursos-module.js.map