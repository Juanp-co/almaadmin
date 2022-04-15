(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detalles-consolidado-detalles-consolidado-module"],{

/***/ "9JAs":
/*!************************************************************************************************!*\
  !*** ./src/app/views/consolidados/detalles-consolidado/detalles-consolidado-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: DetallesConsolidadoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesConsolidadoPageRoutingModule", function() { return DetallesConsolidadoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detalles_consolidado_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalles-consolidado.page */ "1Zva");




const routes = [
    {
        path: '',
        component: _detalles_consolidado_page__WEBPACK_IMPORTED_MODULE_3__["DetallesConsolidadoPage"]
    }
];
let DetallesConsolidadoPageRoutingModule = class DetallesConsolidadoPageRoutingModule {
};
DetallesConsolidadoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetallesConsolidadoPageRoutingModule);



/***/ }),

/***/ "r0o7":
/*!****************************************************************************************!*\
  !*** ./src/app/views/consolidados/detalles-consolidado/detalles-consolidado.module.ts ***!
  \****************************************************************************************/
/*! exports provided: DetallesConsolidadoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesConsolidadoPageModule", function() { return DetallesConsolidadoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detalles_consolidado_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalles-consolidado-routing.module */ "9JAs");
/* harmony import */ var _detalles_consolidado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalles-consolidado.page */ "1Zva");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "j1ZV");








let DetallesConsolidadoPageModule = class DetallesConsolidadoPageModule {
};
DetallesConsolidadoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detalles_consolidado_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetallesConsolidadoPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_detalles_consolidado_page__WEBPACK_IMPORTED_MODULE_6__["DetallesConsolidadoPage"]]
    })
], DetallesConsolidadoPageModule);



/***/ })

}]);
//# sourceMappingURL=detalles-consolidado-detalles-consolidado-module.js.map