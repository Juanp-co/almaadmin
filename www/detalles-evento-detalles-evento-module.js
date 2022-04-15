(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detalles-evento-detalles-evento-module"],{

/***/ "IrZb":
/*!*************************************************************************!*\
  !*** ./src/app/views/eventos/detalles-evento/detalles-evento.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhbGxlcy1ldmVudG8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "Tmey":
/*!*************************************************************************!*\
  !*** ./src/app/views/eventos/detalles-evento/detalles-evento.module.ts ***!
  \*************************************************************************/
/*! exports provided: DetallesEventoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesEventoPageModule", function() { return DetallesEventoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detalles_evento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalles-evento-routing.module */ "fgde");
/* harmony import */ var _detalles_evento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalles-evento.page */ "x+dN");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "j1ZV");








let DetallesEventoPageModule = class DetallesEventoPageModule {
};
DetallesEventoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detalles_evento_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetallesEventoPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_detalles_evento_page__WEBPACK_IMPORTED_MODULE_6__["DetallesEventoPage"]]
    })
], DetallesEventoPageModule);



/***/ }),

/***/ "XOI+":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/eventos/detalles-evento/detalles-evento.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" *ngIf=\"!showEditForm\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{showEditForm ? 'Editar' : 'Detalles' }} del evento</ion-title>\r\n    <ion-buttons slot=\"end\" *ngIf=\"eventData\">\r\n      <ion-button color=\"medium\" (click)=\"cancelEditInfo()\" *ngIf=\"showEditForm\">\r\n        <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\r\n        <ion-text>Cancelar</ion-text>\r\n      </ion-button>\r\n      <ion-button color=\"primary\" (click)=\"setShowEditForm()\" *ngIf=\"!showEditForm\">\r\n        <ion-icon name=\"create-outline\" slot=\"start\"></ion-icon>\r\n        <ion-text>Editar</ion-text>\r\n      </ion-button>\r\n      <ion-button color=\"danger\" (click)=\"confirmDeleteAction()\" *ngIf=\"!showEditForm\">\r\n        <ion-icon name=\"trash-outline\" slot=\"start\"></ion-icon>\r\n        <ion-text>Borrar evento</ion-text>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n  <ion-row *ngIf=\"eventDataForm && showEditForm\">\r\n    <ion-col size=\"12\">\r\n      <app-events-form\r\n        [eventData]=\"eventDataForm\"\r\n        [handleCancel]=\"cancelEditInfo\"\r\n        [handleSave]=\"saveEditInfo\"\r\n      ></app-events-form>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"ion-margin\" *ngIf=\"eventData && !showEditForm\">\r\n    <ion-col size=\"12\" size-sm=\"4\">\r\n      <ion-row>\r\n        <ion-col\r\n          size=\"12\"\r\n          class=\"banner-event\"\r\n          [ngStyle]=\"{backgroundImage: 'url('+eventData.picture+')', height: '300px'}\"\r\n          *ngIf=\"eventData.picture\"\r\n        >\r\n        </ion-col>\r\n        <ion-col size=\"12\" *ngIf=\"!eventData.picture\">\r\n          <ion-img class=\"pictureIcon\" [src]=\"'/assets/icon/evento_lista.svg'\" height=\"150\"></ion-img>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n\r\n\r\n    <ion-col size=\"12\" size-sm=\"8\">\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-text color=\"primary\">\r\n            <h2 class=\"title-event\">{{ eventData.title ? eventData.title : '' }}</h2>\r\n          </ion-text>\r\n          <hr class=\"border\">\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" [sizeSm]=\"6\">\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <ion-text color=\"medium\"><b>Fecha:</b></ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"12\">\r\n              <ion-text color=\"medium\">{{ eventData.date ? eventData.date : '????' }}</ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n        <ion-col size=\"12\" [sizeSm]=\"3\">\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <ion-text color=\"medium\"><b>Hora inicio:</b></ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"12\">\r\n              <ion-text color=\"medium\">{{ eventData?.initHour || '????' }}</ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n        <ion-col size=\"12\" [sizeSm]=\"3\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" *ngIf=\"eventData?.endHour\">\r\n              <ion-text color=\"medium\"><b>Hora fin:</b></ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"12\" *ngIf=\"eventData?.endHour\">\r\n              <ion-text color=\"medium\">{{ eventData.endHour || '????' }}</ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" [sizeSm]=\"6\">\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <ion-text color=\"medium\"><b>Creado por:</b></ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"12\">\r\n              <ion-text color=\"medium\">{{ eventData.user ? this.eventData.user.names + ' ' + this.eventData.user.lastNames : 'Anónimo' }}</ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" [sizeSm]=\"6\">\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <ion-text color=\"medium\"><b>Dirigido a:</b></ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"12\">\r\n              <ion-text color=\"medium\">{{ getRoleValue() }}</ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n\r\n    <ion-col [size]=\"12\" class=\"ion-margin-top\">\r\n      <ion-text><b class=\"no-selected-text\">Descripción:</b></ion-text>\r\n      <ion-text color=\"medium\">\r\n        <div [innerHTML]=\"eventData.description\"></div>\r\n      </ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"ion-margin\" *ngIf=\"!eventData && !showEditForm\">\r\n    <ion-col size=\"12\">\r\n      <ion-card class=\"ion-no-margin ion-no-padding\">\r\n        <ion-card-content>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"ion-text-center\">\r\n              <ion-text>\r\n                <p><ion-icon name=\"alert-circle-outline\"></ion-icon> Disculpe, pero no se logró obtener la información del evento.</p>\r\n              </ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"ion-margin\" *ngIf=\"!showEditForm\">\r\n    <ion-col size=\"12\" class=\"ion-margin-top ion-margin-bottom\">\r\n      <br>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "fgde":
/*!*********************************************************************************!*\
  !*** ./src/app/views/eventos/detalles-evento/detalles-evento-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: DetallesEventoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesEventoPageRoutingModule", function() { return DetallesEventoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detalles_evento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalles-evento.page */ "x+dN");




const routes = [
    {
        path: '',
        component: _detalles_evento_page__WEBPACK_IMPORTED_MODULE_3__["DetallesEventoPage"]
    }
];
let DetallesEventoPageRoutingModule = class DetallesEventoPageRoutingModule {
};
DetallesEventoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetallesEventoPageRoutingModule);



/***/ }),

/***/ "x+dN":
/*!***********************************************************************!*\
  !*** ./src/app/views/eventos/detalles-evento/detalles-evento.page.ts ***!
  \***********************************************************************/
/*! exports provided: DetallesEventoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesEventoPage", function() { return DetallesEventoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalles_evento_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalles-evento.page.html */ "XOI+");
/* harmony import */ var _detalles_evento_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalles-evento.page.scss */ "IrZb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dayjs/plugin/duration */ "13Ln");
/* harmony import */ var dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var dayjs_locale_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dayjs/locale/es */ "4HKe");
/* harmony import */ var dayjs_locale_es__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_es__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "QgiU");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _eventos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../eventos.service */ "ykbS");
/* harmony import */ var _services_cookies_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/cookies.service */ "QTu/");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");













let DetallesEventoPage = class DetallesEventoPage {
    constructor(activateRoute, cookiesService, eventsService, globalSer, navCtrl) {
        this.activateRoute = activateRoute;
        this.cookiesService = cookiesService;
        this.eventsService = eventsService;
        this.globalSer = globalSer;
        this.navCtrl = navCtrl;
        this.eventData = null;
        this.eventDataForm = null;
        this.id = null;
        this.showEditForm = false;
        this.roles = [
            'Administradores',
            'Pastores',
            'Supervisores',
            'Líderes',
            'Personas',
        ];
        this.cancelEditInfo = () => { this.setShowEditForm(); };
        this.saveEditInfo = (data) => { this.setDataToParams(data); };
        dayjs__WEBPACK_IMPORTED_MODULE_6___default.a.extend(dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_7___default.a);
        dayjs__WEBPACK_IMPORTED_MODULE_6___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_9___default.a);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.id = this.activateRoute.snapshot.paramMap.get('_id');
            if (this.id)
                yield this.getDataEvent();
            else {
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero ha ocurrido un error al momento de obtener la información del evento.');
                yield this.navCtrl.back();
            }
        });
    }
    getDataEvent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.eventsService.getDetailsEvent(this.id);
            if (data && !data.error) {
                yield this.setDataToParams(data);
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
    deleteEvent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.eventsService.deleteEvent(this.id);
            if (data && !data.error) {
                const { msg } = data || {};
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', msg || 'Se ha eliminado el evento exitosamente.');
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
    goBack() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navCtrl.back();
        });
    }
    setDataToParams(data) {
        this.eventDataForm = Object.assign(Object.assign({}, this.eventDataForm), data);
        this.eventData = Object.assign(Object.assign({}, this.eventData), data);
        this.eventData.date = dayjs__WEBPACK_IMPORTED_MODULE_6___default()(data.date, 'YYYY-MM-DD', true).locale('es').format('dddd, DD [de] MMMM [de] YYYY');
        this.eventData.initHour = dayjs__WEBPACK_IMPORTED_MODULE_6___default()(`${data.date} ${data.initHour}`, 'YYYY-MM-DD HH:mm', true).format('hh:mm a');
        this.eventData.endHour = data.endHour ?
            dayjs__WEBPACK_IMPORTED_MODULE_6___default()(`${data.date} ${data.endHour}`, 'YYYY-MM-DD HH:mm', true).format('hh:mm a')
            : null;
        if (this.showEditForm)
            this.showEditForm = false;
    }
    setShowEditForm() {
        this.showEditForm = !this.showEditForm;
    }
    getRoleValue() {
        const { toRoles } = this.eventData || {};
        let ret = 'CUALQUIER PÚBLICO';
        if ((toRoles === null || toRoles === void 0 ? void 0 : toRoles.length) > 0) {
            ret = '';
            for (const v of toRoles) {
                if (ret === '')
                    ret = this.roles[v];
                else
                    ret += `, ${this.roles[v]}`;
            }
        }
        return `${ret}`.toUpperCase();
    }
    confirmDeleteAction() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertConfirm({
                header: '¡Confirme!',
                message: '¿Está seguro qué desea eliminar este evento?',
                confirmAction: () => this.deleteEvent()
            });
        });
    }
};
DetallesEventoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_cookies_service__WEBPACK_IMPORTED_MODULE_11__["CookiesService"] },
    { type: _eventos_service__WEBPACK_IMPORTED_MODULE_10__["EventosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_12__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
DetallesEventoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalles-evento',
        template: _raw_loader_detalles_evento_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalles_evento_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetallesEventoPage);



/***/ })

}]);
//# sourceMappingURL=detalles-evento-detalles-evento-module.js.map