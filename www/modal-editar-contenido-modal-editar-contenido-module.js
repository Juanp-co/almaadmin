(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-editar-contenido-modal-editar-contenido-module"],{

/***/ "ciYx":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/cursos/detalles-curso/modal-editar-contenido/modal-editar-contenido-routing.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ModalEditarContenidoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditarContenidoPageRoutingModule", function() { return ModalEditarContenidoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_editar_contenido_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-editar-contenido.page */ "W7Q1");




const routes = [
    {
        path: '',
        component: _modal_editar_contenido_page__WEBPACK_IMPORTED_MODULE_3__["ModalEditarContenidoPage"]
    }
];
let ModalEditarContenidoPageRoutingModule = class ModalEditarContenidoPageRoutingModule {
};
ModalEditarContenidoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalEditarContenidoPageRoutingModule);



/***/ }),

/***/ "pHo5":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/cursos/detalles-curso/modal-editar-contenido/modal-editar-contenido.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ModalEditarContenidoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditarContenidoPageModule", function() { return ModalEditarContenidoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_editar_contenido_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-editar-contenido-routing.module */ "ciYx");
/* harmony import */ var _modal_editar_contenido_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-editar-contenido.page */ "W7Q1");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");








let ModalEditarContenidoPageModule = class ModalEditarContenidoPageModule {
};
ModalEditarContenidoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_editar_contenido_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalEditarContenidoPageRoutingModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__["CKEditorModule"],
        ],
        declarations: [_modal_editar_contenido_page__WEBPACK_IMPORTED_MODULE_6__["ModalEditarContenidoPage"]]
    })
], ModalEditarContenidoPageModule);



/***/ })

}]);
//# sourceMappingURL=modal-editar-contenido-modal-editar-contenido-module.js.map