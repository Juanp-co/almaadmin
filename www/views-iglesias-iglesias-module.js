(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-iglesias-iglesias-module"],{

/***/ "EOe0":
/*!****************************************************!*\
  !*** ./src/app/views/iglesias/iglesias.service.ts ***!
  \****************************************************/
/*! exports provided: IglesiasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IglesiasService", function() { return IglesiasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");




let IglesiasService = class IglesiasService {
    constructor(axios, globalSer) {
        this.axios = axios;
        this.globalSer = globalSer;
    }
    getChurches() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/admin/churches');
            if (res && res.success)
                return res.data.churches || [];
            return this.globalSer.altResponse(res);
        });
    }
    getChurch(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData(`/admin/churches/${id}`);
            if (res && res.success)
                return res.data.church || null;
            return this.globalSer.altResponse(res);
        });
    }
    saveChurch(formData = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.postData(`/admin/churches`, formData);
            if (res && res.success)
                return res.data;
            return this.globalSer.altResponse(res);
        });
    }
    updateChurch(id, formData = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.putData(`/admin/churches/${id}`, formData);
            if (res && res.success)
                return res.data;
            return this.globalSer.altResponse(res);
        });
    }
    removeChurch(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.deleteData(`/admin/churches/${id}`);
            if (res && res.success)
                return res.data;
            return this.globalSer.altResponse(res);
        });
    }
};
IglesiasService.ctorParameters = () => [
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_3__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }
];
IglesiasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IglesiasService);



/***/ }),

/***/ "GFT8":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/iglesias/iglesias.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ showForm ? 'Agregar iglesia' : 'Iglesias' }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"medium\" (click)=\"setShowForm()\" *ngIf=\"showForm\">\n        <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Cancelar</ion-text>\n      </ion-button>\n      <ion-button color=\"primary\" (click)=\"setShowForm()\" *ngIf=\"!showForm\">\n        <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Agregar</ion-text>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row *ngIf=\"!showForm\">\n    <ion-col size=\"12\" size-sm=\"6\" *ngFor=\"let church of churches\">\n      <app-iglesias-card\n        [church]=\"church\"\n      ></app-iglesias-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"showForm\">\n    <ion-col size=\"12\">\n      <app-iglesias-form\n        [handleCancel]=\"handleCancel\"\n        [handleSave]=\"handleSubmit\"\n      ></app-iglesias-form>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "L8Ev":
/*!***********************************************************!*\
  !*** ./src/app/views/iglesias/iglesias-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: IglesiasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IglesiasPageRoutingModule", function() { return IglesiasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _iglesias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iglesias.page */ "zR8T");




const routes = [
    {
        path: '',
        component: _iglesias_page__WEBPACK_IMPORTED_MODULE_3__["IglesiasPage"]
    },
    {
        path: ':id',
        loadChildren: () => __webpack_require__.e(/*! import() | detalles-detalles-module */ "detalles-detalles-module").then(__webpack_require__.bind(null, /*! ./detalles/detalles.module */ "+IIn")).then(m => m.DetallesPageModule)
    }
];
let IglesiasPageRoutingModule = class IglesiasPageRoutingModule {
};
IglesiasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IglesiasPageRoutingModule);



/***/ }),

/***/ "aALv":
/*!***************************************************!*\
  !*** ./src/app/views/iglesias/iglesias.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpZ2xlc2lhcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "l/Mk":
/*!***************************************************!*\
  !*** ./src/app/views/iglesias/iglesias.module.ts ***!
  \***************************************************/
/*! exports provided: IglesiasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IglesiasPageModule", function() { return IglesiasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _iglesias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iglesias-routing.module */ "L8Ev");
/* harmony import */ var _iglesias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iglesias.page */ "zR8T");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let IglesiasPageModule = class IglesiasPageModule {
};
IglesiasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _iglesias_routing_module__WEBPACK_IMPORTED_MODULE_5__["IglesiasPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_iglesias_page__WEBPACK_IMPORTED_MODULE_6__["IglesiasPage"]]
    })
], IglesiasPageModule);



/***/ }),

/***/ "zR8T":
/*!*************************************************!*\
  !*** ./src/app/views/iglesias/iglesias.page.ts ***!
  \*************************************************/
/*! exports provided: IglesiasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IglesiasPage", function() { return IglesiasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_iglesias_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./iglesias.page.html */ "GFT8");
/* harmony import */ var _iglesias_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iglesias.page.scss */ "aALv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _iglesias_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iglesias.service */ "EOe0");
/* harmony import */ var _services_cookies_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/cookies.service */ "QTu/");








let IglesiasPage = class IglesiasPage {
    constructor(cookieService, globalSer, iglesiasService, router) {
        this.cookieService = cookieService;
        this.globalSer = globalSer;
        this.iglesiasService = iglesiasService;
        this.router = router;
        this.churches = null;
        this.showForm = false;
        this.handleCancel = () => this.setShowForm();
        this.handleSubmit = (data) => this.saveData(data);
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.globalSer.checkSession())
                this.router.navigate(['/ingresar']);
            else
                this.getChurches();
        });
    }
    getChurches() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.iglesiasService.getChurches();
            if (data && !data.error) {
                this.churches = data;
                yield this.cookieService.setCookie('churches', data.map(d => ({ _id: d._id, name: d.name })));
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
    saveData(formData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.iglesiasService.saveChurch(formData);
            if (data && !data.error) {
                this.churches.push(data.church);
                // update data churches list
                const churches = yield this.cookieService.getCookie('churches');
                churches.push(data.church);
                yield this.cookieService.setCookie('churches', churches);
                yield this.globalSer.dismissLoading();
                this.setShowForm();
                yield this.globalSer.presentAlert('¡Éxito!', data.msg || 'Se ha agregado la iglesia exitosamente.');
            }
            else if (data && data.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    setShowForm() {
        this.showForm = !this.showForm;
    }
};
IglesiasPage.ctorParameters = () => [
    { type: _services_cookies_service__WEBPACK_IMPORTED_MODULE_7__["CookiesService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: _iglesias_service__WEBPACK_IMPORTED_MODULE_6__["IglesiasService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
IglesiasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-iglesias',
        template: _raw_loader_iglesias_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_iglesias_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IglesiasPage);



/***/ })

}]);
//# sourceMappingURL=views-iglesias-iglesias-module.js.map