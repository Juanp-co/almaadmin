(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-grupos-familiares-grupos-familiares-module"],{

/***/ "CprF":
/*!*****************************************************************************!*\
  !*** ./src/app/views/grupos-familiares/grupos-familiares-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: GruposFamiliaresPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposFamiliaresPageRoutingModule", function() { return GruposFamiliaresPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _grupos_familiares_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grupos-familiares.page */ "qM4D");




const routes = [
    {
        path: '',
        component: _grupos_familiares_page__WEBPACK_IMPORTED_MODULE_3__["GruposFamiliaresPage"]
    },
    {
        path: 'crear-grupo',
        loadChildren: () => __webpack_require__.e(/*! import() | crear-grupo-crear-grupo-module */ "crear-grupo-crear-grupo-module").then(__webpack_require__.bind(null, /*! ./crear-grupo/crear-grupo.module */ "dAUQ")).then(m => m.CrearGrupoPageModule)
    },
    {
        path: 'asignar-miembro',
        loadChildren: () => Promise.all(/*! import() | asignar-miembro-asignar-miembro-module */[__webpack_require__.e("common"), __webpack_require__.e("asignar-miembro-asignar-miembro-module")]).then(__webpack_require__.bind(null, /*! ./asignar-miembro/asignar-miembro.module */ "662x")).then(m => m.AsignarMiembroPageModule)
    },
    {
        path: 'reportes',
        loadChildren: () => __webpack_require__.e(/*! import() | reportes-reportes-module */ "reportes-reportes-module").then(__webpack_require__.bind(null, /*! ./reportes/reportes.module */ "qmMc")).then(m => m.ReportesPageModule)
    },
    {
        path: ':id',
        loadChildren: () => Promise.all(/*! import() | detalles-grupo-detalles-grupo-module */[__webpack_require__.e("common"), __webpack_require__.e("detalles-grupo-detalles-grupo-module")]).then(__webpack_require__.bind(null, /*! ./detalles-grupo/detalles-grupo.module */ "r9SS")).then(m => m.DetallesGrupoPageModule)
    }
];
let GruposFamiliaresPageRoutingModule = class GruposFamiliaresPageRoutingModule {
};
GruposFamiliaresPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GruposFamiliaresPageRoutingModule);



/***/ }),

/***/ "DOPO":
/*!*********************************************************************!*\
  !*** ./src/app/views/grupos-familiares/grupos-familiares.module.ts ***!
  \*********************************************************************/
/*! exports provided: GruposFamiliaresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposFamiliaresPageModule", function() { return GruposFamiliaresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _grupos_familiares_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grupos-familiares-routing.module */ "CprF");
/* harmony import */ var _grupos_familiares_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grupos-familiares.page */ "qM4D");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let GruposFamiliaresPageModule = class GruposFamiliaresPageModule {
};
GruposFamiliaresPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _grupos_familiares_routing_module__WEBPACK_IMPORTED_MODULE_5__["GruposFamiliaresPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
        ],
        declarations: [_grupos_familiares_page__WEBPACK_IMPORTED_MODULE_6__["GruposFamiliaresPage"]],
    })
], GruposFamiliaresPageModule);



/***/ }),

/***/ "DmEa":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/grupos-familiares/grupos-familiares.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Grupos familiares</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" (click)=\"goToCreate()\">\n        <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Agregar grupo</ion-text>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-margin\">\n    <ion-col size=\"12\">\n      <ion-button color=\"medium\" (click)=\"setShowFilter()\">\n        <ion-icon name=\"{{ showFilter ? 'close' : 'filter'}}-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Filtrar</ion-text>\n      </ion-button>\n      <ion-button (click)=\"goToReports()\">\n        <ion-icon name=\"bar-chart-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Ver reportes</ion-text>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"12\" class=\"{{ showFilter ? '' : 'ion-hide' }}\">\n      <ion-row>\n        <ion-col [size]=\"12\" size-sm=\"9\">\n          <ion-toolbar>\n            <ion-button color=\"medium\" (click)=\"setFindFor()\" slot=\"start\">\n              <ion-icon name=\"list-outline\" slot=\"start\"></ion-icon>\n              <ion-text>Buscar por: {{ findFor.label }}</ion-text>\n            </ion-button>\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\"># de {{ findFor.label }}</ion-label>\n              <ion-input\n                [(ngModel)]=\"queryParams[findFor.key]\"\n                autocomplete=\"off\"\n                maxlength=\"4\"\n                (keypress)=\"validateOnlyNumber($event)\"\n              ></ion-input>\n            </ion-item>\n            <ion-button color=\"medium\" (click)=\"findData()\" slot=\"end\">\n              <ion-icon name=\"search-outline\"></ion-icon>\n            </ion-button>\n            <ion-button color=\"medium\" (click)=\"cleanFilter()\" slot=\"end\">\n              <ion-icon name=\"trash-outline\" slot=\"start\"></ion-icon>\n              <ion-text>Limpiar</ion-text>\n            </ion-button>\n          </ion-toolbar>\n        </ion-col>\n        <ion-col [size]=\"12\" size-sm=\"3\">\n          <ion-toolbar>\n            <ion-button color=\"medium\" (click)=\"setSortOrder()\">\n              <ion-icon name=\"arrow-up-outline\" *ngIf=\"queryParams.value === 1\" slot=\"start\"></ion-icon>\n              <ion-icon name=\"arrow-down-outline\" *ngIf=\"queryParams.value === -1\" slot=\"start\"></ion-icon>\n              <ion-text>{{ queryParams.value === 1 ? 'ASC' : 'DES' }}</ion-text>\n            </ion-button>\n            <ion-button color=\"medium\" (click)=\"setQueryValues()\">\n              <ion-icon name=\"filter-outline\" slot=\"start\"></ion-icon>&nbsp;\n              <ion-text>{{ queryParams.limit }}</ion-text>\n            </ion-button>\n          </ion-toolbar>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"groups && groups.length > 0; else noGroups\">\n    <ion-col size=\"12\" size-sm=\"3\" *ngFor='let g of groups' (click)=\"goToDetails(g._id)\">\n      <app-groupcard [data]=\"g\"></app-groupcard>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"ion-margin-top\" *ngIf=\"groups && groups.length > 0 && pages > 0\">\n    <app-paginator\n      [totalPages]=\"pages\"\n      [currentPage]=\"queryParams.page\"\n      [handlePage]=\"handlePage\"\n    ></app-paginator>\n  </div>\n\n  <ng-template #noGroups>\n    <ion-card class=\"ion-no-padding\">\n      <ion-text color=\"medium\">\n        <p class=\"ion-text-center\"><ion-icon name=\"alert-circle-outline\"></ion-icon> No existen grupos familiares registrados.</p>\n      </ion-text>\n    </ion-card>\n  </ng-template>\n</ion-content>\n");

/***/ }),

/***/ "KdbL":
/*!*********************************************************************!*\
  !*** ./src/app/views/grupos-familiares/grupos-familiares.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n  This stylesheet uses scss valiables for most of the colors / background-colors of the table\n  to enable the customization of the displayed table without cloning the stylesheet into the\n  own application.\n\n  To modify table colors, add the following lines to the scss file of your application\n  (this example modifies the color of the selected row - selectionType = single, multi or multiClick):\n\n  $ngx-datatable-selected-active-background: yellow;\n  $ngx-datatable-selected-active-background-hover: rgba(yellow, 0.2);\n\n  @import '~@swimlane/ngx-datatable/index.css';\n  @import '~@swimlane/ngx-datatable/themes/material.scss';\n  @import '~@swimlane/ngx-datatable/assets/icons.css';\n\nThat's all.\n*/\n@charset \"UTF-8\";\n@font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n[data-icon]::before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n[class^='datatable-icon-']::before,\n[class*=' datatable-icon-']::before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.datatable-icon-filter::before {\n  content: '\\62';\n}\n.datatable-icon-collapse::before {\n  content: '\\61';\n}\n.datatable-icon-expand::before {\n  content: '\\63';\n}\n.datatable-icon-close::before {\n  content: '\\64';\n}\n.datatable-icon-up::before {\n  content: '\\65';\n}\n.datatable-icon-down::before {\n  content: '\\66';\n}\n.datatable-icon-sort-unset::before {\n  content: '\\63';\n  opacity: 0.5;\n}\n.datatable-icon-sort::before {\n  content: '\\67';\n}\n.datatable-icon-done::before {\n  content: '\\68';\n}\n.datatable-icon-done-all::before {\n  content: '\\69';\n}\n.datatable-icon-search::before {\n  content: '\\6a';\n}\n.datatable-icon-pin::before {\n  content: '\\6b';\n}\n.datatable-icon-add::before {\n  content: '\\6d';\n}\n.datatable-icon-left::before {\n  content: '\\6f';\n}\n.datatable-icon-right::before {\n  content: '\\70';\n}\n.datatable-icon-skip::before {\n  content: '\\71';\n}\n.datatable-icon-prev::before {\n  content: '\\72';\n}\n.ngx-datatable.material {\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  /**\n  * Shared Styles\n  */\n  /**\n  * Global Row Styles\n  */\n  /**\n  * Header Styles\n  */\n  /**\n  * Body Styles\n  */\n  /**\n  * Footer Styles\n  */\n}\n.ngx-datatable.material.striped .datatable-row-odd {\n  background: #eee;\n}\n.ngx-datatable.material.single-selection .datatable-body-row.active, .ngx-datatable.material.single-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active, .ngx-datatable.material.multi-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active, .ngx-datatable.material.multi-click-selection .datatable-body-row.active .datatable-row-group {\n  background-color: #304ffe;\n  color: #fff;\n}\n.ngx-datatable.material.single-selection .datatable-body-row.active:hover, .ngx-datatable.material.single-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active:hover, .ngx-datatable.material.multi-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover .datatable-row-group {\n  background-color: #193ae4;\n  color: #fff;\n}\n.ngx-datatable.material.single-selection .datatable-body-row.active:focus, .ngx-datatable.material.single-selection .datatable-body-row.active:focus .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active:focus, .ngx-datatable.material.multi-selection .datatable-body-row.active:focus .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus .datatable-row-group {\n  background-color: #2041ef;\n  color: #fff;\n}\n.ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover, .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group {\n  background-color: #eee;\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: linear;\n}\n.ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus, .ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus .datatable-row-group {\n  background-color: #ddd;\n}\n.ngx-datatable.material.cell-selection .datatable-body-cell:hover, .ngx-datatable.material.cell-selection .datatable-body-cell:hover .datatable-row-group {\n  background-color: #eee;\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: linear;\n}\n.ngx-datatable.material.cell-selection .datatable-body-cell:focus, .ngx-datatable.material.cell-selection .datatable-body-cell:focus .datatable-row-group {\n  background-color: #ddd;\n}\n.ngx-datatable.material.cell-selection .datatable-body-cell.active, .ngx-datatable.material.cell-selection .datatable-body-cell.active .datatable-row-group {\n  background-color: #304ffe;\n  color: #fff;\n}\n.ngx-datatable.material.cell-selection .datatable-body-cell.active:hover, .ngx-datatable.material.cell-selection .datatable-body-cell.active:hover .datatable-row-group {\n  background-color: #193ae4;\n  color: #fff;\n}\n.ngx-datatable.material.cell-selection .datatable-body-cell.active:focus, .ngx-datatable.material.cell-selection .datatable-body-cell.active:focus .datatable-row-group {\n  background-color: #2041ef;\n  color: #fff;\n}\n.ngx-datatable.material .empty-row {\n  height: 50px;\n  text-align: left;\n  padding: 0.5rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n}\n.ngx-datatable.material .loading-row {\n  text-align: left;\n  padding: 0.5rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n}\n.ngx-datatable.material .datatable-header .datatable-row-left,\n.ngx-datatable.material .datatable-body .datatable-row-left {\n  background-color: #fff;\n  background-position: 100% 0;\n  background-repeat: repeat-y;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==);\n}\n.ngx-datatable.material .datatable-header .datatable-row-right,\n.ngx-datatable.material .datatable-body .datatable-row-right {\n  background-position: 0 0;\n  background-color: #fff;\n  background-repeat: repeat-y;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==);\n}\n.ngx-datatable.material .datatable-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.ngx-datatable.material .datatable-header .datatable-header-cell {\n  text-align: left;\n  padding: 0.9rem 1.2rem;\n  font-weight: 400;\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.54);\n  vertical-align: bottom;\n  font-size: 12px;\n  font-weight: 500;\n}\n.ngx-datatable.material .datatable-header .datatable-header-cell .datatable-header-cell-wrapper {\n  position: relative;\n}\n.ngx-datatable.material .datatable-header .datatable-header-cell.longpress .draggable::after {\n  transition: transform 400ms ease, opacity 400ms ease;\n  opacity: 0.5;\n  transform: scale(1);\n}\n.ngx-datatable.material .datatable-header .datatable-header-cell .draggable::after {\n  content: \" \";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -30px 0 0 -30px;\n  height: 60px;\n  width: 60px;\n  background: #eee;\n  border-radius: 100%;\n  opacity: 1;\n  filter: none;\n  transform: scale(0);\n  z-index: 9999;\n  pointer-events: none;\n}\n.ngx-datatable.material .datatable-header .datatable-header-cell.dragging .resize-handle {\n  border-right: none;\n}\n.ngx-datatable.material .datatable-header .resize-handle {\n  border-right: solid 1px #eee;\n}\n.ngx-datatable.material .datatable-body {\n  position: relative;\n}\n.ngx-datatable.material .datatable-body .datatable-row-detail {\n  background: #f5f5f5;\n  padding: 10px;\n}\n.ngx-datatable.material .datatable-body .datatable-group-header {\n  background: #f5f5f5;\n  border-bottom: solid 1px #d9d8d9;\n  border-top: solid 1px #d9d8d9;\n}\n.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-cell {\n  text-align: left;\n  padding: 0.9rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n  color: rgba(0, 0, 0, 0.87);\n  transition: width 0.3s ease;\n  font-size: 14px;\n  font-weight: 400;\n}\n.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-group-cell {\n  text-align: left;\n  padding: 0.9rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n  color: rgba(0, 0, 0, 0.87);\n  transition: width 0.3s ease;\n  font-size: 14px;\n  font-weight: 400;\n}\n.ngx-datatable.material .datatable-body .progress-linear {\n  display: block;\n  position: sticky;\n  width: 100%;\n  height: 5px;\n  padding: 0;\n  margin: 0;\n  top: 0;\n}\n.ngx-datatable.material .datatable-body .progress-linear .container {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 5px;\n  transform: translate(0, 0) scale(1, 1);\n  background-color: #aad1f9;\n}\n.ngx-datatable.material .datatable-body .progress-linear .container .bar {\n  transition: all 0.2s linear;\n  animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n  transition: transform 0.2s linear;\n  background-color: #106cc8;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 5px;\n}\n.ngx-datatable.material .datatable-footer {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n}\n.ngx-datatable.material .datatable-footer .page-count {\n  line-height: 50px;\n  height: 50px;\n  padding: 0 1.2rem;\n}\n.ngx-datatable.material .datatable-footer .datatable-pager {\n  margin: 0 10px;\n}\n.ngx-datatable.material .datatable-footer .datatable-pager li {\n  vertical-align: middle;\n}\n.ngx-datatable.material .datatable-footer .datatable-pager li.disabled a {\n  color: rgba(0, 0, 0, 0.26) !important;\n  background-color: transparent !important;\n}\n.ngx-datatable.material .datatable-footer .datatable-pager li.active a {\n  background-color: rgba(158, 158, 158, 0.2);\n  font-weight: bold;\n}\n.ngx-datatable.material .datatable-footer .datatable-pager a {\n  height: 22px;\n  min-width: 24px;\n  line-height: 22px;\n  padding: 0 6px;\n  border-radius: 3px;\n  margin: 6px 3px;\n  text-align: center;\n  vertical-align: top;\n  color: rgba(0, 0, 0, 0.54);\n  text-decoration: none;\n  vertical-align: bottom;\n}\n.ngx-datatable.material .datatable-footer .datatable-pager a:hover {\n  color: rgba(0, 0, 0, 0.75);\n  background-color: rgba(158, 158, 158, 0.2);\n}\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-prev {\n  font-size: 20px;\n  line-height: 20px;\n  padding: 0 3px;\n}\n.ngx-datatable.material .datatable-summary-row .datatable-body-row {\n  background-color: #ddd;\n}\n.ngx-datatable.material .datatable-summary-row .datatable-body-row:hover {\n  background-color: #ddd;\n}\n.ngx-datatable.material .datatable-summary-row .datatable-body-row .datatable-body-cell {\n  font-weight: bold;\n}\n/**\n * Checkboxes\n**/\n.datatable-checkbox {\n  position: relative;\n  margin: 0;\n  cursor: pointer;\n  vertical-align: middle;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0;\n}\n.datatable-checkbox input[type=checkbox] {\n  position: relative;\n  margin: 0 1rem 0 0;\n  cursor: pointer;\n  outline: none;\n}\n.datatable-checkbox input[type=checkbox]:before {\n  transition: all 0.3s ease-in-out;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  width: 1rem;\n  height: 1rem;\n  border: 2px solid #f2f2f2;\n}\n.datatable-checkbox input[type=checkbox]:checked:before {\n  transform: rotate(-45deg);\n  height: 0.5rem;\n  border-color: #009688;\n  border-top-style: none;\n  border-right-style: none;\n}\n.datatable-checkbox input[type=checkbox]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1rem;\n  height: 1rem;\n  background: #fff;\n  cursor: pointer;\n}\n/**\n * Progress bar animations\n */\n@keyframes query {\n  0% {\n    opacity: 1;\n    transform: translateX(35%) scale(0.3, 1);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(-50%) scale(0, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvbWF0ZXJpYWwuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwiLi4vLi4vLi4vLi4vZ3J1cG9zLWZhbWlsaWFyZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QUNBQSxnQkFBZ0I7QUFFaEI7RUFDRSx5QkFBeUI7RUFDekIsMEJBQWdDO0VBQ2hDOzRGQUNzRztFQUN0RyxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsd0JBQXdCO0VBQ3hCLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEM7QUFFQTs7RUFFRSxvQ0FBb0M7RUFDcEMsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQztBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VB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QSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUV2SU47QUY0SUE7O0VBQUE7QUFHQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHdDQUFBO0VFeklGO0VGNElBO0lBQ0UsVUFBQTtJQUNBLHVDQUFBO0VFMUlGO0FBQ0YiLCJmaWxlIjoiZ3J1cG9zLWZhbWlsaWFyZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgVGhpcyBzdHlsZXNoZWV0IHVzZXMgc2NzcyB2YWxpYWJsZXMgZm9yIG1vc3Qgb2YgdGhlIGNvbG9ycyAvIGJhY2tncm91bmQtY29sb3JzIG9mIHRoZSB0YWJsZVxuICB0byBlbmFibGUgdGhlIGN1c3RvbWl6YXRpb24gb2YgdGhlIGRpc3BsYXllZCB0YWJsZSB3aXRob3V0IGNsb25pbmcgdGhlIHN0eWxlc2hlZXQgaW50byB0aGVcbiAgb3duIGFwcGxpY2F0aW9uLlxuXG4gIFRvIG1vZGlmeSB0YWJsZSBjb2xvcnMsIGFkZCB0aGUgZm9sbG93aW5nIGxpbmVzIHRvIHRoZSBzY3NzIGZpbGUgb2YgeW91ciBhcHBsaWNhdGlvblxuICAodGhpcyBleGFtcGxlIG1vZGlmaWVzIHRoZSBjb2xvciBvZiB0aGUgc2VsZWN0ZWQgcm93IC0gc2VsZWN0aW9uVHlwZSA9IHNpbmdsZSwgbXVsdGkgb3IgbXVsdGlDbGljayk6XG5cbiAgJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQ6IHllbGxvdztcbiAgJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtaG92ZXI6IHJnYmEoeWVsbG93LCAwLjIpO1xuXG4gIEBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9pbmRleC5jc3MnO1xuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvdGhlbWVzL21hdGVyaWFsLnNjc3MnO1xuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvYXNzZXRzL2ljb25zLmNzcyc7XG5cblRoYXQncyBhbGwuXG4qL1xuXG4vLyBjb21tb24gZGF0YXRhYmxlIGNvbG9yc1xuJG5neC1kYXRhdGFibGUtYmFja2dyb3VuZDogI2ZmZiAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLWJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKSAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZDogI2VlZSAhZGVmYXVsdDtcblxuLy8gZGVmYXVsdCByb3cgYW5kIGNlbGwgYmFja2dyb3VuZCBjb2xvcnNcbiRuZ3gtZGF0YXRhYmxlLWRlZmF1bHQtYmFja2dyb3VuZDogI2ZmZiAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLWRlZmF1bHQtYmFja2dyb3VuZC1ob3ZlcjogI2VlZSAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLWRlZmF1bHQtYmFja2dyb3VuZC1mb2N1czogI2RkZCAhZGVmYXVsdDtcblxuLy8gZGVmYXVsdCBiYWNrZ3JvdW5kIGNvbG9ycyBmb3IgY2VsbCBzZWxlY3Rpb24gc3R5bGVcbiRuZ3gtZGF0YXRhYmxlLWNlbGxzZWxlY3Rpb24tYmFja2dyb3VuZC1ob3ZlcjogI2VlZSAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLWNlbGxzZWxlY3Rpb24tYmFja2dyb3VuZC1mb2N1czogI2RkZCAhZGVmYXVsdDtcblxuLy8gYmFja2dyb3VuZCBhbmQgdGV4dCBjb2xvcnMgZm9yIHNlbGVjdGVkIGNlbGwgLyByb3dcbiRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMzA0ZmZlICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yOiAjZmZmICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtaG92ZXI6ICMxOTNhZTQgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3ItaG92ZXI6ICNmZmYgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1mb2N1czogIzIwNDFlZiAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvci1mb2N1czogI2ZmZiAhZGVmYXVsdDtcblxuLy8gY29sb3JzIGZvciBoZWFkZXIgZWxlbWVudHNcbiRkYXRhdGFibGUtaGVhZGVyLWNlbGwtYmFja2dyb3VuZDogI2ZmZiAhZGVmYXVsdDtcbiRkYXRhdGFibGUtaGVhZGVyLWNlbGwtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCkgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLWhlYWRlci1ib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1oZWFkZXItcmVzaXplLWhhbmRsZS1jb2xvcjogI2VlZSAhZGVmYXVsdDtcblxuLy8gY29sb3JzIGZvciB0YWJsZSBib2R5IGVsZW1lbnRzXG4kZGF0YXRhYmxlLXJvdy1kZXRhaWwtYmFja2dyb3VuZDogI2Y1ZjVmNSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtYm9keS1jZWxsLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1ncm91cC1oZWFkZXItYmFja2dyb3VuZDogI2Y1ZjVmNSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtZ3JvdXAtaGVhZGVyLWJvcmRlci10b3AtY29sb3I6ICNkOWQ4ZDkgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLWdyb3VwLWhlYWRlci1ib3JkZXItYm90dG9tLWNvbG9yOiAjZDlkOGQ5ICFkZWZhdWx0O1xuXG4vLyBjb2xvcnMgZm9yIGZvb3RlciBlbGVtZW50c1xuJGRhdGF0YWJsZS1mb290ZXItY2VsbC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtZm9vdGVyLWJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMikgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLXBhZ2VyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1wYWdlci1jb2xvci1ob3ZlcjogcmdiYSgwLCAwLCAwLCAwLjc1KSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtcGFnZXItYmFja2dyb3VuZC1ob3ZlcjogcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjIpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1wYWdlci1kaXNhYmxlZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtcGFnZXItZGlzYWJsZWQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLXBhZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kOiByZ2JhKDE1OCwgMTU4LCAxNTgsIDAuMikgIWRlZmF1bHQ7XG5cbi8vIGNvbG9ycyBmb3Igc3VtbWFyeSByb3cgZWxlbWVudHNcbiRkYXRhdGFibGUtc3VtbWFyeS1yb3ctYmFja2dyb3VuZDogI2RkZCAhZGVmYXVsdDtcbiRkYXRhdGFibGUtc3VtbWFyeS1yb3ctYmFja2dyb3VuZC1ob3ZlcjogI2RkZCAhZGVmYXVsdDtcblxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwge1xuICBiYWNrZ3JvdW5kOiAkbmd4LWRhdGF0YWJsZS1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAkbmd4LWRhdGF0YWJsZS1ib3gtc2hhZG93O1xuXG4gICYuc3RyaXBlZCB7XG4gICAgLmRhdGF0YWJsZS1yb3ctb2RkIHtcbiAgICAgIGJhY2tncm91bmQ6ICRuZ3gtZGF0YXRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZDtcbiAgICB9XG4gIH1cblxuICAmLnNpbmdsZS1zZWxlY3Rpb24sXG4gICYubXVsdGktc2VsZWN0aW9uLFxuICAmLm11bHRpLWNsaWNrLXNlbGVjdGlvbiB7XG4gICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICAmLmFjdGl2ZSxcbiAgICAgICYuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQ7XG4gICAgICAgIGNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3I7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlOmhvdmVyLFxuICAgICAgJi5hY3RpdmU6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1ob3ZlcjtcbiAgICAgICAgY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvci1ob3ZlcjtcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmU6Zm9jdXMsXG4gICAgICAmLmFjdGl2ZTpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWZvY3VzO1xuICAgICAgICBjb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yLWZvY3VzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6bm90KC5jZWxsLXNlbGVjdGlvbikge1xuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgJjpob3ZlcixcbiAgICAgICY6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1kZWZhdWx0LWJhY2tncm91bmQtaG92ZXI7XG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICB9XG5cbiAgICAgICY6Zm9jdXMsXG4gICAgICAmOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtZGVmYXVsdC1iYWNrZ3JvdW5kLWZvY3VzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuY2VsbC1zZWxlY3Rpb24ge1xuICAgIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtY2VsbHNlbGVjdGlvbi1iYWNrZ3JvdW5kLWhvdmVyO1xuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgICAgfVxuXG4gICAgICAmOmZvY3VzLFxuICAgICAgJjpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLWNlbGxzZWxlY3Rpb24tYmFja2dyb3VuZC1mb2N1cztcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmUsXG4gICAgICAmLmFjdGl2ZSAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kO1xuICAgICAgICBjb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZTpob3ZlcixcbiAgICAgICYuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtaG92ZXI7XG4gICAgICAgIGNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3ItaG92ZXI7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlOmZvY3VzLFxuICAgICAgJi5hY3RpdmU6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1mb2N1cztcbiAgICAgICAgY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvci1mb2N1cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcblx0ICogU2hhcmVkIFN0eWxlc1xuXHQgKi9cbiAgLmVtcHR5LXJvdyB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJvcmRlci10b3A6IDA7XG4gIH1cblxuICAubG9hZGluZy1yb3cge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJvcmRlci10b3A6IDA7XG4gIH1cblxuICAvKipcblx0ICogR2xvYmFsIFJvdyBTdHlsZXNcblx0ICovXG4gIC5kYXRhdGFibGUtaGVhZGVyLFxuICAuZGF0YXRhYmxlLWJvZHkge1xuICAgIC5kYXRhdGFibGUtcm93LWxlZnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtYmFja2dyb3VuZDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFRQUFBQUJDQVlBQUFENVBBL05BQUFBRmtsRVFWUUlIV1BTa05lU0JtSmhUUVZ0YmlETkNnQVNhZ0lJdUpYOE9nQUFBQUJKUlU1RXJrSmdnZz09KTtcbiAgICB9XG5cbiAgICAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1iYWNrZ3JvdW5kO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVFBQUFBQkNBWUFBQUQ1UEEvTkFBQUFGa2xFUVZRSTEyUFFrTmRpMVZUUTVnYlN3a0FzRFFBUkxBSUd0T1NGVUFBQUFBQkpSVTVFcmtKZ2dnPT0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuXHQgKiBIZWFkZXIgU3R5bGVzXG5cdCAqL1xuICAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRkYXRhdGFibGUtaGVhZGVyLWJvcmRlci1ib3R0b20tY29sb3I7XG5cbiAgICAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAwLjlyZW0gMS4ycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhdGFibGUtaGVhZGVyLWNlbGwtYmFja2dyb3VuZDtcbiAgICAgIGNvbG9yOiAkZGF0YXRhYmxlLWhlYWRlci1jZWxsLWNvbG9yO1xuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAgIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtd3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgJi5sb25ncHJlc3Mge1xuICAgICAgICAuZHJhZ2dhYmxlOjphZnRlciB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zIGVhc2UsIG9wYWNpdHkgNDAwbXMgZWFzZTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZHJhZ2dhYmxlOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBtYXJnaW46IC0zMHB4IDAgMCAtMzBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJi5kcmFnZ2luZyB7XG4gICAgICAgIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmVzaXplLWhhbmRsZSB7XG4gICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAkZGF0YXRhYmxlLWhlYWRlci1yZXNpemUtaGFuZGxlLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuXHQgKiBCb2R5IFN0eWxlc1xuXHQgKi9cbiAgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuZGF0YXRhYmxlLXJvdy1kZXRhaWwge1xuICAgICAgYmFja2dyb3VuZDogJGRhdGF0YWJsZS1yb3ctZGV0YWlsLWJhY2tncm91bmQ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cblxuICAgIC5kYXRhdGFibGUtZ3JvdXAtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICRkYXRhdGFibGUtZ3JvdXAtaGVhZGVyLWJhY2tncm91bmQ7XG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggJGRhdGF0YWJsZS1ncm91cC1oZWFkZXItYm9yZGVyLWJvdHRvbS1jb2xvcjtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAkZGF0YXRhYmxlLWdyb3VwLWhlYWRlci1ib3JkZXItdG9wLWNvbG9yO1xuICAgIH1cblxuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAwLjlyZW0gMS4ycmVtO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgICBjb2xvcjogJGRhdGF0YWJsZS1ib2R5LWNlbGwtY29sb3I7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgICAgIC8vIGNlbGwgYWN0aXZlIGNsYXNzXG4gICAgICAgIC8vICYuYWN0aXZlIHtcbiAgICAgICAgLy8gIGJhY2tncm91bmQ6ICMwODI5ZTBcbiAgICAgICAgLy8gfVxuICAgICAgfVxuICAgICAgLmRhdGF0YWJsZS1ib2R5LWdyb3VwLWNlbGwge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAwLjlyZW0gMS4ycmVtO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgICBjb2xvcjogJGRhdGF0YWJsZS1ib2R5LWNlbGwtY29sb3I7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wcm9ncmVzcy1saW5lYXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDVweDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB0b3A6IDA7XG5cbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEsIDEpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcwLCAyMDksIDI0OSk7XG5cbiAgICAgICAgLmJhciB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBxdWVyeSAwLjhzIGluZmluaXRlIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xuICAgICAgICAgIGFuaW1hdGlvbjogcXVlcnkgMC44cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcblxuICAgICAgICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYsIDEwOCwgMjAwKTtcblxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcblx0ICogRm9vdGVyIFN0eWxlc1xuXHQgKi9cbiAgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkZGF0YXRhYmxlLWZvb3Rlci1ib3JkZXItdG9wLWNvbG9yO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAkZGF0YXRhYmxlLWZvb3Rlci1jZWxsLWNvbG9yO1xuXG4gICAgLnBhZ2UtY291bnQge1xuICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwYWRkaW5nOiAwIDEuMnJlbTtcbiAgICB9XG5cbiAgICAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xuXG4gICAgICBsaSB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgJi5kaXNhYmxlZCBhIHtcbiAgICAgICAgICBjb2xvcjogJGRhdGF0YWJsZS1wYWdlci1kaXNhYmxlZC1jb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhdGFibGUtcGFnZXItZGlzYWJsZWQtYmFja2dyb3VuZCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hY3RpdmUgYSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZS1wYWdlci1hY3RpdmUtYmFja2dyb3VuZDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICBwYWRkaW5nOiAwIDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW46IDZweCAzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgY29sb3I6ICRkYXRhdGFibGUtcGFnZXItY29sb3I7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogJGRhdGF0YWJsZS1wYWdlci1jb2xvci1ob3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0YXRhYmxlLXBhZ2VyLWJhY2tncm91bmQtaG92ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRhdGF0YWJsZS1pY29uLWxlZnQsXG4gICAgICAuZGF0YXRhYmxlLWljb24tc2tpcCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1wcmV2IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgcGFkZGluZzogMCAzcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU3VtbWFyeSByb3cgc3R5bGVzXG4gIC5kYXRhdGFibGUtc3VtbWFyeS1yb3cge1xuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZS1zdW1tYXJ5LXJvdy1iYWNrZ3JvdW5kO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZS1zdW1tYXJ5LXJvdy1iYWNrZ3JvdW5kLWhvdmVyO1xuICAgICAgfVxuXG4gICAgICAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrYm94ZXNcbioqL1xuLmRhdGF0YWJsZS1jaGVja2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcblxuICBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIDFyZW0gMCAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICB3aWR0aDogMXJlbTtcbiAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMmYyZjI7XG4gICAgfVxuXG4gICAgJjpjaGVja2VkOmJlZm9yZSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICBoZWlnaHQ6IDAuNXJlbTtcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwOTY4ODtcbiAgICAgIGJvcmRlci10b3Atc3R5bGU6IG5vbmU7XG4gICAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMXJlbTtcbiAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUHJvZ3Jlc3MgYmFyIGFuaW1hdGlvbnNcbiAqL1xuQGtleWZyYW1lcyBxdWVyeSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzNSUpIHNjYWxlKDAuMywgMSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgwLCAxKTtcbiAgfVxufVxuIiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJztcbiAgc3JjOiB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuZW90Jyk7XG4gIHNyYzogdXJsKCdmb250cy9kYXRhLXRhYmxlLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIHVybCgnZm9udHMvZGF0YS10YWJsZS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgdXJsKCdmb250cy9kYXRhLXRhYmxlLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKCdmb250cy9kYXRhLXRhYmxlLnN2ZyNkYXRhLXRhYmxlJykgZm9ybWF0KCdzdmcnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5bZGF0YS1pY29uXTo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJyAhaW1wb3J0YW50O1xuICBjb250ZW50OiBhdHRyKGRhdGEtaWNvbik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbltjbGFzc149J2RhdGF0YWJsZS1pY29uLSddOjpiZWZvcmUsXG5bY2xhc3MqPScgZGF0YXRhYmxlLWljb24tJ106OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZScgIWltcG9ydGFudDtcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC12YXJpYW50OiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLmRhdGF0YWJsZS1pY29uLWZpbHRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjInO1xufVxuXG4uZGF0YXRhYmxlLWljb24tY29sbGFwc2U6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYxJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWV4cGFuZDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjMnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tY2xvc2U6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY0Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXVwOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2NSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1kb3duOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Nic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1zb3J0LXVuc2V0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Myc7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNvcnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY3Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWRvbmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY4Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWRvbmUtYWxsOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2OSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1zZWFyY2g6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZhJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXBpbjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmInO1xufVxuXG4uZGF0YXRhYmxlLWljb24tYWRkOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2ZCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1sZWZ0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Zic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1yaWdodDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNzAnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tc2tpcDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNzEnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tcHJldjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNzInO1xufVxuIiwiLy9AaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvaW5kZXguY3NzJztcclxuQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL3RoZW1lcy9tYXRlcmlhbC5zY3NzJztcclxuQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2Fzc2V0cy9pY29ucy5jc3MnO1xyXG4iXX0= */");

/***/ }),

/***/ "ai4U":
/*!***********************************************************!*\
  !*** ./src/app/views/grupos-familiares/grupos.service.ts ***!
  \***********************************************************/
/*! exports provided: GruposService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposService", function() { return GruposService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");




let GruposService = class GruposService {
    constructor(axios, globalSer) {
        this.axios = axios;
        this.globalSer = globalSer;
    }
    // axios actions
    getTotalsGroups(query = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/admin/families-groups/counters', query);
            if (res && res.success)
                return res.data.totals;
            return this.globalSer.altResponse(res);
        });
    }
    getGroups(query = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/admin/families-groups', query);
            if (res && res.success)
                return res.data.groups;
            return this.globalSer.altResponse(res);
        });
    }
    getGroupDetails(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData(`/admin/families-groups/${id}`);
            if (res && res.success)
                return res.data.group;
            return this.globalSer.altResponse(res);
        });
    }
    saveGroup(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.postData(`/admin/families-groups`, data);
            if (res && res.success)
                return res.data.msg;
            return this.globalSer.altResponse(res);
        });
    }
    updateGroup(id, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.putData(`/admin/families-groups/${id}`, data);
            if (res && res.success)
                return res.data.group;
            return this.globalSer.altResponse(res);
        });
    }
    deleteGroup(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.deleteData(`/admin/families-groups/${id}`);
            if (res && res.success)
                return res.data.msg;
            return this.globalSer.altResponse(res);
        });
    }
    // members
    updateMembersGroup(id, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.putData(`/admin/families-groups/${id}/members`, data);
            if (res && res.success)
                return res.data.members;
            return this.globalSer.altResponse(res);
        });
    }
    // reports
    getFamiliesGroupsReports(query = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/admin/reports/families-groups', query);
            if (res && res.success)
                return res.data.reports;
            return this.globalSer.altResponse(res);
        });
    }
};
GruposService.ctorParameters = () => [
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_2__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }
];
GruposService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GruposService);



/***/ }),

/***/ "qM4D":
/*!*******************************************************************!*\
  !*** ./src/app/views/grupos-familiares/grupos-familiares.page.ts ***!
  \*******************************************************************/
/*! exports provided: GruposFamiliaresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposFamiliaresPage", function() { return GruposFamiliaresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_grupos_familiares_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./grupos-familiares.page.html */ "DmEa");
/* harmony import */ var _grupos_familiares_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grupos-familiares.page.scss */ "KdbL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _grupos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grupos.service */ "ai4U");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Utils/validations.functions */ "OmbT");








let GruposFamiliaresPage = class GruposFamiliaresPage {
    constructor(globalSer, gruposService, router) {
        this.globalSer = globalSer;
        this.gruposService = gruposService;
        this.router = router;
        this.list = [
            { key: 'sector', label: 'sector' },
            { key: 'subSector', label: 'sub-sector' },
            { key: 'number', label: 'número' },
        ];
        this.showFilter = false;
        this.groups = [];
        this.totals = 0;
        this.pages = 0;
        this.page = 1;
        this.findFor = { key: 'sector', label: 'sector' };
        this.queryParams = {
            input: 'sector',
            value: 1,
            page: 1,
            limit: 10,
            sector: null,
            subSector: null,
            number: null
        };
        this.formData = {
            name: null,
            code: null,
        };
        this.handlePage = (page) => {
            this.queryParams.page = page;
            this.getGroupList();
        };
        // check if exist session
        if (!this.globalSer.checkSession())
            this.router.navigate(['/ingresar']);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.globalSer.checkSession())
                yield this.router.navigate(['/ingresar']);
            else
                yield this.getTotals();
        });
    }
    getTotals() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.totals = 0;
            this.pages = 0;
            const data = yield this.gruposService.getTotalsGroups(this.queryParams);
            if (!!data && data >= 0 && !data.error) {
                this.totals = data;
                this.pages = this.globalSer.getPagination(data, this.queryParams.limit);
                if (data > 0)
                    yield this.getGroupList();
                else {
                    this.queryParams.page = 1;
                    this.pages = 0;
                    this.groups = [];
                }
            }
            else if (!!data && data.error) {
                this.queryParams.page = 1;
                this.pages = 0;
                this.groups = [];
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero no se encontró una sesión activa.');
                yield this.router.navigate(['/ingresar']);
            }
            else {
                this.queryParams.page = 1;
                this.pages = 0;
                this.groups = [];
            }
        });
    }
    getGroupList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.gruposService.getGroups(this.queryParams);
            if (data && !data.error) {
                this.groups = data;
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
    setShowFilter() {
        this.showFilter = !this.showFilter;
    }
    setSortOrder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.queryParams.value = this.queryParams.value === 1 ? -1 : 1;
            this.queryParams.page = 1;
            this.groups = null;
            yield this.getTotals();
        });
    }
    cleanFilter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.queryParams.input = 'sector';
            this.findFor = this.list[0];
            this.queryParams.sector = null;
            this.queryParams.subSector = null;
            this.queryParams.number = null;
            yield this.getTotals();
        });
    }
    validateOnlyNumber(event) {
        Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_7__["onlyNumbersInputValidation2"])(event);
    }
    findData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.queryParams.page = 1;
            this.pages = 0;
            this.groups = null;
            yield this.getTotals();
        });
    }
    setFindFor() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputs = [];
            for (const value of this.list) {
                inputs.push({
                    name: `find-for`,
                    type: 'radio',
                    label: value.label.toUpperCase(),
                    value: value.key,
                    checked: this.findFor.key === value.key,
                });
            }
            yield this.globalSer.alertWithList({
                header: 'Seleccione',
                inputs,
                confirmAction: (selectedValue) => {
                    const index = this.list.findIndex(l => l.key === selectedValue);
                    this.queryParams.input = selectedValue;
                    this.findFor = this.list[index];
                    this.queryParams.sector = null;
                    this.queryParams.subSector = null;
                    this.queryParams.number = null;
                }
            });
        });
    }
    setQueryValues() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                confirmAction: (selectedValue) => {
                    this.queryParams.limit = selectedValue;
                    this.queryParams.page = 1;
                    this.pages = this.globalSer.getPagination(this.totals, this.queryParams.limit);
                    this.groups = null;
                    this.getGroupList();
                }
            });
        });
    }
    goToCreate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate([`grupos-familiares/crear-grupo`]);
        });
    }
    goToDetails(id = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate([`grupos-familiares/${id}`]);
        });
    }
    goToReports() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate([`grupos-familiares/reportes`]);
        });
    }
};
GruposFamiliaresPage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _grupos_service__WEBPACK_IMPORTED_MODULE_5__["GruposService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
GruposFamiliaresPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-grupos-familiares',
        template: _raw_loader_grupos_familiares_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_grupos_familiares_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GruposFamiliaresPage);



/***/ })

}]);
//# sourceMappingURL=views-grupos-familiares-grupos-familiares-module.js.map