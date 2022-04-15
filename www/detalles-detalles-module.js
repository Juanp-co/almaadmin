(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detalles-detalles-module"],{

/***/ "+IIn":
/*!************************************************************!*\
  !*** ./src/app/views/iglesias/detalles/detalles.module.ts ***!
  \************************************************************/
/*! exports provided: DetallesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesPageModule", function() { return DetallesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detalles_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalles-routing.module */ "cG+x");
/* harmony import */ var _detalles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalles.page */ "2qPJ");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "j1ZV");








let DetallesPageModule = class DetallesPageModule {
};
DetallesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detalles_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetallesPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_detalles_page__WEBPACK_IMPORTED_MODULE_6__["DetallesPage"]]
    })
], DetallesPageModule);



/***/ }),

/***/ "2qPJ":
/*!**********************************************************!*\
  !*** ./src/app/views/iglesias/detalles/detalles.page.ts ***!
  \**********************************************************/
/*! exports provided: DetallesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesPage", function() { return DetallesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalles_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalles.page.html */ "af7o");
/* harmony import */ var _detalles_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalles.page.scss */ "Nx6p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _iglesias_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../iglesias.service */ "EOe0");
/* harmony import */ var _services_cookies_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/cookies.service */ "QTu/");









let DetallesPage = class DetallesPage {
    constructor(activateRoute, cookieService, globalSer, iglesiasService, navCtrl) {
        this.activateRoute = activateRoute;
        this.cookieService = cookieService;
        this.globalSer = globalSer;
        this.iglesiasService = iglesiasService;
        this.navCtrl = navCtrl;
        this.id = null;
        this.church = null;
        this.title = 'Cargando ...';
        this.showEditForm = false;
        this.handleCancel = () => this.setShowEditForm();
        this.handleSubmit = (data) => this.updateData(data);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            this.id = this.activateRoute.snapshot.paramMap.get('id');
            const data = yield this.iglesiasService.getChurch(this.id);
            if (data && !data.error) {
                this.church = data;
                this.title = data.name;
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
    updateData(formData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.iglesiasService.updateChurch(this.id, formData);
            if (data && !data.error) {
                this.church = Object.assign(Object.assign({}, this.church), data.church);
                // update data churches list
                const churches = yield this.cookieService.getCookie('churches');
                const index = churches.findIndex(c => c._id === this.id);
                if (index > -1) {
                    churches[index] = Object.assign(Object.assign({}, churches[index]), { name: data.church.name });
                }
                else
                    churches.push(data.church);
                yield this.cookieService.setCookie('churches', churches);
                yield this.globalSer.dismissLoading();
                this.setShowEditForm();
                yield this.globalSer.presentAlert('¡Éxito!', data.msg || 'Se ha actualizado la información de la iglesia exitosamente.');
            }
            else if (data && data.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    deleteData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.iglesiasService.removeChurch(this.id);
            if (data && !data.error) {
                const churches = yield this.cookieService.getCookie('churches');
                const list = churches.filter(c => c._id !== this.id);
                yield this.cookieService.setCookie('churches', list);
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', data.msg || 'Se ha eliminado la iglesia exitosamente.');
                this.back();
            }
            else if (data && data.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    back() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navCtrl.back();
        });
    }
    setShowEditForm() {
        this.showEditForm = !this.showEditForm;
    }
    getParamsToMap() {
        return [
            {
                type: 'Feature',
                geometry: this.church.location
            }
        ];
    }
    confirmDeleteAction() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertConfirm({
                header: '¡Confirme!',
                message: '¿Está seguro qué desea esta iglesia?' +
                    '<br><br>NOTA: Todos los miembros asociados a esta iglesia serán asignados a la iglesia principal.',
                confirmAction: () => this.deleteData()
            });
        });
    }
};
DetallesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _services_cookies_service__WEBPACK_IMPORTED_MODULE_8__["CookiesService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _iglesias_service__WEBPACK_IMPORTED_MODULE_7__["IglesiasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
DetallesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalles',
        template: _raw_loader_detalles_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalles_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetallesPage);



/***/ }),

/***/ "Nx6p":
/*!************************************************************!*\
  !*** ./src/app/views/iglesias/detalles/detalles.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-church-card {\n  height: 160px;\n  width: 100%;\n  border-radius: 5px;\n  background-repeat: no-repeat;\n  background-size: contain !important;\n  background-position: center !important;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGV0YWxsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJkZXRhbGxlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWNodXJjaC1jYXJkIHtcclxuICBoZWlnaHQ6IDE2MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "af7o":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/iglesias/detalles/detalles.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" *ngIf=\"!showEditForm\">\r\n      <ion-button (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ showEditForm ? 'Editar iglesia' : title }}</ion-title>\r\n    <ion-buttons slot=\"end\" *ngIf=\"church\">\r\n      <ion-button color=\"medium\" (click)=\"setShowEditForm()\" *ngIf=\"showEditForm\">\r\n        <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\r\n        <ion-text>Cancelar</ion-text>\r\n      </ion-button>\r\n      <ion-button color=\"primary\" (click)=\"setShowEditForm()\" *ngIf=\"!showEditForm\">\r\n        <ion-icon name=\"create-outline\" slot=\"start\"></ion-icon>\r\n        <ion-text>Editar</ion-text>\r\n      </ion-button>\r\n      <ion-button color=\"danger\" (click)=\"confirmDeleteAction()\" *ngIf=\"!showEditForm && id !== '624a357644f15f3ce8200c2f'\">\r\n        <ion-icon name=\"trash-outline\" slot=\"start\"></ion-icon>\r\n        <ion-text>Eliminar</ion-text>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-row class=\"ion-margin\" *ngIf=\"church && !showEditForm\">\r\n    <ion-col size=\"12\">\r\n      <div\r\n        class=\"img-church-card\"\r\n        [ngStyle]=\"{height: '300px', 'background-image': 'url('+church.picture+'), url(/assets/cruz.png)'}\"\r\n        *ngIf=\"church.picture\"\r\n      >\r\n      </div>\r\n      <div\r\n        class=\"img-church-card\"\r\n        [ngStyle]=\"{height: '300px', 'background-image': 'url(/assets/cruz.png)'}\"\r\n        *ngIf=\"!church.picture\"\r\n      ></div>\r\n    </ion-col>\r\n\r\n\r\n    <ion-col size=\"12\">\r\n      <ion-row>\r\n\r\n        <ion-col size=\"12\" [sizeSm]=\"8\">\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <ion-text color=\"primary\">\r\n                <h2>{{ church.name || '????' }}</h2>\r\n              </ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"12\">\r\n              <ion-text color=\"medium\"><b>Teléfono(s):</b></ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"12\">\r\n              <ion-text color=\"medium\">{{ church.phone1 || 'No indicado'}}{{ church.phone2 ? (' - ' + church.phone2) : ''}}</ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"12\">\r\n              <ion-text color=\"medium\"><b>Resumen:</b></ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"12\">\r\n              <ion-text color=\"medium\">{{ church?.description || 'No indicado.' }}</ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"12\">\r\n              <ion-text color=\"medium\"><b>Dirección:</b></ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"12\">\r\n              <ion-text color=\"medium\">{{ church.address || 'No indicado'}}</ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" size-sm=\"4\">\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <ion-text color=\"medium\"><b>Ubicación:</b></ion-text>\r\n            </ion-col>\r\n            <ion-col>\r\n              <div class=\"div-map\">\r\n                <app-map\r\n                  [coords]=\"getParamsToMap()\"\r\n                  [height]=\"'100%'\"\r\n                  [zoom]=\"13\"\r\n                ></app-map>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n\r\n  <app-iglesias-form\r\n    [data]=\"church\"\r\n    [handleCancel]=\"handleCancel\"\r\n    [handleSave]=\"handleSubmit\"\r\n    *ngIf=\"church && showEditForm\"\r\n  ></app-iglesias-form>\r\n\r\n  <ion-row class=\"ion-margin\" *ngIf=\"church && !showEditForm\">\r\n\r\n  </ion-row>\r\n\r\n  <ion-row class=\"ion-margin\" *ngIf=\"!church && !showEditForm\">\r\n    <ion-col size=\"12\">\r\n      <ion-card class=\"ion-no-margin ion-no-padding\">\r\n        <ion-card-content>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"ion-text-center\">\r\n              <ion-text>\r\n                <p><ion-icon name=\"alert-circle-outline\"></ion-icon> Disculpe, pero no se logró obtener la información de la iglesia.</p>\r\n              </ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "cG+x":
/*!********************************************************************!*\
  !*** ./src/app/views/iglesias/detalles/detalles-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: DetallesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesPageRoutingModule", function() { return DetallesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detalles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalles.page */ "2qPJ");




const routes = [
    {
        path: '',
        component: _detalles_page__WEBPACK_IMPORTED_MODULE_3__["DetallesPage"]
    }
];
let DetallesPageRoutingModule = class DetallesPageRoutingModule {
};
DetallesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetallesPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=detalles-detalles-module.js.map