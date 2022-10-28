(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detalles-devocionales-detalles-devocionales-module"],{

/***/ "0NmK":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/devocionales/detalles-devocionales/detalles-devocionales-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: DetallesDevocionalesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesDevocionalesPageRoutingModule", function() { return DetallesDevocionalesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detalles_devocionales_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalles-devocionales.page */ "SazI");




const routes = [
    {
        path: '',
        component: _detalles_devocionales_page__WEBPACK_IMPORTED_MODULE_3__["DetallesDevocionalesPage"]
    }
];
let DetallesDevocionalesPageRoutingModule = class DetallesDevocionalesPageRoutingModule {
};
DetallesDevocionalesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetallesDevocionalesPageRoutingModule);



/***/ }),

/***/ "HURx":
/*!******************************************************************************************!*\
  !*** ./src/app/views/devocionales/detalles-devocionales/detalles-devocionales.page.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".banner-devotional {\n  border-radius: 5px 5px 0 0;\n  background-size: cover !important;\n  background-position: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGV0YWxsZXMtZGV2b2Npb25hbGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQ0FBQTtBQUNGIiwiZmlsZSI6ImRldGFsbGVzLWRldm9jaW9uYWxlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyLWRldm90aW9uYWwge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "KjC7":
/*!******************************************************************************************!*\
  !*** ./src/app/views/devocionales/detalles-devocionales/detalles-devocionales.module.ts ***!
  \******************************************************************************************/
/*! exports provided: DetallesDevocionalesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesDevocionalesPageModule", function() { return DetallesDevocionalesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detalles_devocionales_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalles-devocionales-routing.module */ "0NmK");
/* harmony import */ var _detalles_devocionales_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalles-devocionales.page */ "SazI");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "j1ZV");








let DetallesDevocionalesPageModule = class DetallesDevocionalesPageModule {
};
DetallesDevocionalesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detalles_devocionales_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetallesDevocionalesPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_detalles_devocionales_page__WEBPACK_IMPORTED_MODULE_6__["DetallesDevocionalesPage"]]
    })
], DetallesDevocionalesPageModule);



/***/ }),

/***/ "SazI":
/*!****************************************************************************************!*\
  !*** ./src/app/views/devocionales/detalles-devocionales/detalles-devocionales.page.ts ***!
  \****************************************************************************************/
/*! exports provided: DetallesDevocionalesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesDevocionalesPage", function() { return DetallesDevocionalesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalles_devocionales_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalles-devocionales.page.html */ "m2fv");
/* harmony import */ var _detalles_devocionales_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalles-devocionales.page.scss */ "HURx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _devocionales_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../devocionales.service */ "kQ27");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let DetallesDevocionalesPage = class DetallesDevocionalesPage {
    constructor(activateRoute, devocionalesService, globalSer, navCtrl) {
        this.activateRoute = activateRoute;
        this.devocionalesService = devocionalesService;
        this.globalSer = globalSer;
        this.navCtrl = navCtrl;
        this.id = null;
        this.showEditForm = false;
        this.devotional = null;
        this.handleCancel = () => this.setShowEditForm();
        this.handleSave = (data) => {
            this.devotional = Object.assign(Object.assign({}, this.devotional), data);
            this.setShowEditForm();
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.id = this.activateRoute.snapshot.paramMap.get('id');
            if (this.id)
                yield this.getDevotionalData();
            else {
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero ha ocurrido un error al momento de obtener la información.');
                yield this.navCtrl.back();
            }
        });
    }
    getDevotionalData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.devocionalesService.getDetails(this.id);
            if (data && !data.error) {
                this.devotional = data;
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
    remove() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.devocionalesService.remove(this.id);
            if (data && !data.error) {
                const { msg } = data || {};
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', msg || 'Se ha eliminado el devocional exitosamente.');
                yield this.goBack();
            }
            else if (data && data.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    setShowEditForm() {
        this.showEditForm = !this.showEditForm;
    }
    confirmCancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertConfirm({
                header: 'Confirme',
                message: '¿Está seguro qué desea salir del formulario sin guardar los cambios?',
                confirmAction: () => this.setShowEditForm()
            });
        });
    }
    confirmRemove() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertConfirm({
                header: 'Confirme',
                message: '¿Está seguro qué desea eliminar este devocional?',
                confirmAction: () => this.remove()
            });
        });
    }
    goBack() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navCtrl.back();
        });
    }
};
DetallesDevocionalesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _devocionales_service__WEBPACK_IMPORTED_MODULE_5__["DevocionalesService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] }
];
DetallesDevocionalesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalles-devocionales',
        template: _raw_loader_detalles_devocionales_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalles_devocionales_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetallesDevocionalesPage);



/***/ }),

/***/ "m2fv":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/devocionales/detalles-devocionales/detalles-devocionales.page.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" *ngIf=\"!showEditForm\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{!showEditForm ? 'Detalles del' : 'Editar datos del'}} Devocional</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"success\" (click)=\"setShowEditForm()\" *ngIf=\"!showEditForm\">\r\n        <ion-icon name=\"pencil-outline\" slot=\"start\"></ion-icon>\r\n        <ion-text>Editar</ion-text>\r\n      </ion-button>\r\n      <ion-button color=\"danger\" (click)=\"confirmRemove()\" *ngIf=\"!showEditForm\">\r\n        <ion-icon name=\"trash-outline\" slot=\"start\"></ion-icon>\r\n        <ion-text>Eliminar</ion-text>\r\n      </ion-button>\r\n      <ion-button color=\"danger\" (click)=\"confirmCancel()\" *ngIf=\"showEditForm\">\r\n        <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\r\n        <ion-text>Cancelar</ion-text>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row *ngIf=\"devotional\">\r\n    <ion-col size=\"12\" *ngIf=\"!showEditForm\">\r\n      <ion-card>\r\n        <div\r\n          class=\"banner-devotional\"\r\n          [ngStyle]=\"{backgroundImage: 'url(' + (devotional.picture || 'assets/cruz.png') + '), url(assets/cruz.png)', height: '260px'}\"\r\n        >\r\n        </div>\r\n        <ion-card-content>\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <ion-card-title>{{devotional.title}}</ion-card-title>\r\n              <ion-card-subtitle>\r\n                <span *ngIf=\"devotional.user\">Por: {{devotional.user?.names}} {{devotional.user?.lastNames}} - </span>\r\n                {{devotional.created_at}}\r\n              </ion-card-subtitle>\r\n            </ion-col>\r\n            <ion-col size=\"12\" *ngIf=\"devotional.urlVideo\">\r\n              <app-video-player [urlVideo]=\"devotional.urlVideo\"></app-video-player>\r\n            </ion-col>\r\n            <ion-col size=\"12\">\r\n              <div [innerHTML]=\"devotional.description\"></div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col size=\"12\" *ngIf=\"showEditForm\">\r\n      <app-devocionales-form\r\n        [data]=\"devotional\"\r\n        [handleCancel]=\"handleCancel\"\r\n        [handleSave]=\"handleSave\"\r\n      ></app-devocionales-form>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=detalles-devocionales-detalles-devocionales-module.js.map