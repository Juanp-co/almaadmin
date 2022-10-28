(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-documentos-documentos-module"],{

/***/ "7/PX":
/*!*****************************************************!*\
  !*** ./src/app/views/documentos/documentos.page.ts ***!
  \*****************************************************/
/*! exports provided: DocumentosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentosPage", function() { return DocumentosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_documentos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./documentos.page.html */ "o91o");
/* harmony import */ var _documentos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./documentos.page.scss */ "ethh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _documentos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentos.service */ "VEy+");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_cookies_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/cookies.service */ "QTu/");








let DocumentosPage = class DocumentosPage {
    constructor(documentosService, globalSer, navCtrl, cookiesService) {
        this.documentosService = documentosService;
        this.globalSer = globalSer;
        this.navCtrl = navCtrl;
        this.cookiesService = cookiesService;
        this.documents = null;
        this.list = null;
        this.showOwn = false;
        this.userData = null;
        this.removeDocument = (id) => { this.deleteDocument(id); };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.userData)
                this.userData = yield this.cookiesService.getCookie('data');
            this.getDocuments();
        });
    }
    getDocuments() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.documentosService.getResources();
            if (data && !data.error) {
                this.documents = data;
                this.getListToShow();
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
    deleteDocument(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.documentosService.deleteResources(id);
            if (data && !data.error) {
                this.documents = this.documents.filter(d => d._id !== id);
                this.getListToShow();
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', 'Se ha eliminado el documento exitosamente.');
            }
            else if (data && data.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    getListToShow() {
        if (this.showOwn)
            this.list = this.documents.filter(d => { var _a; return ((_a = d.user) === null || _a === void 0 ? void 0 : _a._id) === this.userData._id; });
        else
            this.list = this.documents;
    }
    goToCreate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navCtrl.navigateForward(`/documentos/subir`);
        });
    }
};
DocumentosPage.ctorParameters = () => [
    { type: _documentos_service__WEBPACK_IMPORTED_MODULE_4__["DocumentosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _services_cookies_service__WEBPACK_IMPORTED_MODULE_7__["CookiesService"] }
];
DocumentosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-documentos',
        template: _raw_loader_documentos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_documentos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DocumentosPage);



/***/ }),

/***/ "UXv1":
/*!***************************************************************!*\
  !*** ./src/app/views/documentos/documentos-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DocumentosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentosPageRoutingModule", function() { return DocumentosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _documentos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documentos.page */ "7/PX");




const routes = [
    {
        path: '',
        component: _documentos_page__WEBPACK_IMPORTED_MODULE_3__["DocumentosPage"]
    },
    {
        path: 'subir',
        loadChildren: () => __webpack_require__.e(/*! import() | subir-subir-module */ "subir-subir-module").then(__webpack_require__.bind(null, /*! ./subir/subir.module */ "hGtv")).then(m => m.SubirPageModule)
    }
];
let DocumentosPageRoutingModule = class DocumentosPageRoutingModule {
};
DocumentosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DocumentosPageRoutingModule);



/***/ }),

/***/ "VEy+":
/*!********************************************************!*\
  !*** ./src/app/views/documentos/documentos.service.ts ***!
  \********************************************************/
/*! exports provided: DocumentosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentosService", function() { return DocumentosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");




let DocumentosService = class DocumentosService {
    constructor(axios, globalSer) {
        this.axios = axios;
        this.globalSer = globalSer;
    }
    getResources() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/admin/resources');
            return res && res.success ? (res.data.resources || []) : [];
        });
    }
    saveResources(data = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.postData('/admin/resources', data);
            if (res && res.success)
                return res.data;
            return this.globalSer.altResponse(res);
        });
    }
    deleteResources(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.deleteData(`/admin/resources/${id}`);
            if (res && res.success)
                return res.data;
            return this.globalSer.altResponse(res);
        });
    }
};
DocumentosService.ctorParameters = () => [
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_3__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }
];
DocumentosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DocumentosService);



/***/ }),

/***/ "ethh":
/*!*******************************************************!*\
  !*** ./src/app/views/documentos/documentos.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudG9zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "o91o":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/documentos/documentos.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Documentos compartidos</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"primary\" (click)=\"goToCreate()\">\r\n        <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\r\n        <ion-text>Agregar</ion-text>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-row *ngIf=\"list?.length > 0; else noDocs\">\r\n    <ion-col size=\"12\" sizeSm=\"6\" *ngFor=\"let doc of list\">\r\n      <app-documentos-card\r\n        [data]=\"doc\"\r\n        [showButtonsOwn]=\"true\"\r\n        [handleRemove]=\"removeDocument\"\r\n      ></app-documentos-card>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ng-template #noDocs>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-card class=\"ion-no-padding ion-margin-top ion-margin-bottom\">\r\n          <ion-text color=\"medium\">\r\n            <p class=\"ion-text-center\">\r\n              <ion-icon name=\"alert-circle-outline\"></ion-icon> No se ha compartido ningún documento.\r\n            </p>\r\n          </ion-text>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ng-template>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "sZOn":
/*!*******************************************************!*\
  !*** ./src/app/views/documentos/documentos.module.ts ***!
  \*******************************************************/
/*! exports provided: DocumentosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentosPageModule", function() { return DocumentosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _documentos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./documentos-routing.module */ "UXv1");
/* harmony import */ var _documentos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documentos.page */ "7/PX");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let DocumentosPageModule = class DocumentosPageModule {
};
DocumentosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _documentos_routing_module__WEBPACK_IMPORTED_MODULE_5__["DocumentosPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_documentos_page__WEBPACK_IMPORTED_MODULE_6__["DocumentosPage"]]
    })
], DocumentosPageModule);



/***/ })

}]);
//# sourceMappingURL=views-documentos-documentos-module.js.map