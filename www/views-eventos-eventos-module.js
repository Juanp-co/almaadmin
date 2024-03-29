(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-eventos-eventos-module"],{

/***/ "9qU5":
/*!*************************************************!*\
  !*** ./src/app/views/eventos/eventos.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .max-width-640 {\n  --max-width: 640px;\n}\n::ng-deep .ck-editor__editable_inline {\n  min-height: 250px;\n  color: #333333 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxldmVudG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0FBQUo7QUFFRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUFBSiIsImZpbGUiOiJldmVudG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgLm1heC13aWR0aC02NDAge1xyXG4gICAgLS1tYXgtd2lkdGg6IDY0MHB4O1xyXG4gIH1cclxuICAuY2stZWRpdG9yX19lZGl0YWJsZV9pbmxpbmUge1xyXG4gICAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgICBjb2xvcjogIzMzMzMzMyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "KBR1":
/*!***********************************************!*\
  !*** ./src/app/views/eventos/eventos.page.ts ***!
  \***********************************************/
/*! exports provided: EventosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosPage", function() { return EventosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_eventos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./eventos.page.html */ "xCRN");
/* harmony import */ var _eventos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventos.page.scss */ "9qU5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _eventos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventos.service */ "ykbS");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");








let EventosPage = class EventosPage {
    constructor(alertCtrl, eventsService, globalSer, modalController, router) {
        this.alertCtrl = alertCtrl;
        this.eventsService = eventsService;
        this.globalSer = globalSer;
        this.modalController = modalController;
        this.router = router;
        this.queryParams = {
            input: 'date',
            value: -1,
            limit: 50,
            initDate: null,
            endDate: null,
        };
        this.formData = {
            _id: null,
            title: null,
            description: null,
            date: null,
            initHour: null,
            endHour: null,
            toRoles: [],
            rolesSelected: '',
        };
        this.roles = [
            'Administradores',
            'Pastores',
            'Supervisores',
            'Líderes',
            'Personas',
        ];
        this.events = [];
        this.showFilter = false;
        this.showAddButton = false;
        this.rolesSelected = '';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.showAddButton = this.globalSer.checkRoleToEnableAddOrUpdate();
        });
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // check if exist session
            if (!this.globalSer.checkSession())
                yield this.router.navigate(['/ingresar']);
            else
                yield this.getEventsList();
        });
    }
    // actions services
    getEventsList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.showFilter)
                this.showFilter = false;
            yield this.globalSer.presentLoading();
            const data = yield this.eventsService.getEvents(this.queryParams);
            if (data && !data.error) {
                this.events = data;
                yield this.globalSer.dismissLoading();
            }
            else if (data && data.error)
                yield this.globalSer.errorSession();
            else
                yield this.globalSer.dismissLoading();
        });
    }
    // getters and setters
    setShowFilter() {
        this.showFilter = !this.showFilter;
    }
    setOrderData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertWithList({
                header: 'Seleccione',
                inputs: [
                    {
                        name: `order-asc`,
                        type: 'radio',
                        label: `Antíguas primero`,
                        value: 1,
                        checked: this.queryParams.value === 1,
                    },
                    {
                        name: `order-desc`,
                        type: 'radio',
                        label: 'Próximas primero',
                        value: -1,
                        checked: this.queryParams.value === -1,
                    }
                ],
                confirmAction: (selectedValue) => {
                    this.queryParams.value = selectedValue;
                }
            });
        });
    }
    setDate(input, ev) {
        var _a, _b;
        this.queryParams[input] = ((_a = ev === null || ev === void 0 ? void 0 : ev.target) === null || _a === void 0 ? void 0 : _a.value) ? `${(_b = ev === null || ev === void 0 ? void 0 : ev.target) === null || _b === void 0 ? void 0 : _b.value}`.substr(0, 10) : null;
    }
    getRoles(rolesList) {
        let ret = '';
        if (rolesList.length > 0) {
            for (const v of rolesList) {
                if (ret === '')
                    ret = this.roles[v];
                else
                    ret += `, ${this.roles[v]}`;
            }
        }
        return ret;
    }
    resetQueryParams() {
        this.queryParams.input = 'date';
        this.queryParams.value = -1;
        this.queryParams.initDate = null;
        this.queryParams.endDate = null;
    }
    goToCreate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate([`eventos/crear-evento`]);
        });
    }
};
EventosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _eventos_service__WEBPACK_IMPORTED_MODULE_6__["EventosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
EventosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-eventos',
        template: _raw_loader_eventos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_eventos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EventosPage);



/***/ }),

/***/ "TjVE":
/*!*************************************************!*\
  !*** ./src/app/views/eventos/eventos.module.ts ***!
  \*************************************************/
/*! exports provided: EventosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosPageModule", function() { return EventosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _eventos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eventos-routing.module */ "mURV");
/* harmony import */ var _eventos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventos.page */ "KBR1");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");









let EventosPageModule = class EventosPageModule {
};
EventosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _eventos_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventosPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_8__["CKEditorModule"]
        ],
        declarations: [_eventos_page__WEBPACK_IMPORTED_MODULE_6__["EventosPage"]]
    })
], EventosPageModule);



/***/ }),

/***/ "mURV":
/*!*********************************************************!*\
  !*** ./src/app/views/eventos/eventos-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: EventosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosPageRoutingModule", function() { return EventosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _eventos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventos.page */ "KBR1");




const routes = [
    {
        path: '',
        component: _eventos_page__WEBPACK_IMPORTED_MODULE_3__["EventosPage"]
    },
    {
        path: 'crear-evento',
        loadChildren: () => __webpack_require__.e(/*! import() | crear-evento-crear-evento-module */ "crear-evento-crear-evento-module").then(__webpack_require__.bind(null, /*! ./crear-evento/crear-evento.module */ "e1V3")).then(m => m.CrearEventoPageModule)
    },
    {
        path: ':_id',
        loadChildren: () => __webpack_require__.e(/*! import() | detalles-evento-detalles-evento-module */ "detalles-evento-detalles-evento-module").then(__webpack_require__.bind(null, /*! ./detalles-evento/detalles-evento.module */ "Tmey")).then(m => m.DetallesEventoPageModule)
    }
];
let EventosPageRoutingModule = class EventosPageRoutingModule {
};
EventosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventosPageRoutingModule);



/***/ }),

/***/ "xCRN":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/eventos/eventos.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Eventos</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"primary\" (click)=\"goToCreate()\" *ngIf=\"showAddButton\">\r\n        <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\r\n        <ion-text>Agregar evento</ion-text>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row class=\"ion-margin\">\r\n\r\n    <ion-col [size]=\"12\">\r\n      <div>\r\n        <div class=\"ion-margin-bottom\">\r\n          <ion-button color=\"medium\" (click)=\"setShowFilter()\">\r\n            <ion-icon name=\"filter-outline\" slot=\"start\" *ngIf=\"!showFilter\"></ion-icon>\r\n            <ion-icon name=\"close-outline\" slot=\"start\" *ngIf=\"showFilter\"></ion-icon>\r\n            <ion-text>Filtrar</ion-text>\r\n          </ion-button>\r\n        </div>\r\n\r\n        <ion-card *ngIf=\"showFilter\">\r\n          <ion-card-content>\r\n            <ion-row>\r\n              <ion-col size=\"12\" size-sm=\"4\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">Ordenar por:</ion-label>\r\n                  <ion-input\r\n                    [readonly]=\"true\"\r\n                    class=\"no-selected-text no-selected-text\"\r\n                    [value]=\"queryParams.value === -1 ? 'Fecha ascendente' : 'Fecha descendente'\"\r\n                    (click)=\"setOrderData()\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"4\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">A partir de:</ion-label>\r\n                  <ion-datetime\r\n                    [value]=\"queryParams.initDate\"\r\n                    displayFormat=\"DD/MM/YYYY\"\r\n                    min=\"2021-01-01\"\r\n                    doneText=\"Listo\"\r\n                    cancelText=\"Cancelar\"\r\n                    (ionChange)=\"setDate('initDate', $event)\"\r\n                  >\r\n                  </ion-datetime>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"4\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">Hasta:</ion-label>\r\n                  <ion-datetime\r\n                    [value]=\"queryParams.endDate\"\r\n                    displayFormat=\"DD/MM/YYYY\"\r\n                    min=\"2021-01-01\"\r\n                    doneText=\"Listo\"\r\n                    cancelText=\"Cancelar\"\r\n                    (ionChange)=\"setDate('endDate', $event)\"\r\n                  >\r\n                  </ion-datetime>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row class=\"ion-margin-top\">\r\n              <ion-col size=\"6\" class=\"ion-justify-content-center\">\r\n                <ion-button class=\"ion-text-center\" color=\"medium\" expand=\"full\" (click)=\"resetQueryParams()\">\r\n                  <ion-icon name=\"trash-outline\"></ion-icon>\r\n                  <ion-text>Limpiar</ion-text>\r\n                </ion-button>\r\n              </ion-col>\r\n              <ion-col size=\"6\" class=\"ion-justify-content-center\">\r\n                <ion-button class=\"ion-text-center\" color=\"primary\" expand=\"full\" (click)=\"getEventsList()\">\r\n                  <ion-icon name=\"checkmark-outline\"></ion-icon>\r\n                  <ion-text>Aplicar</ion-text>\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <div *ngIf=\"events && events.length > 0; else noEvents\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" size-sm=\"6\" size-md=\"4\" *ngFor='let e of events'>\r\n              <app-eventcard [data]=\"e\"> </app-eventcard>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n        <ng-template #noEvents>\r\n          <ion-card class=\"ion-no-padding\">\r\n            <ion-text color=\"medium\">\r\n              <p class=\"ion-margin-top ion-padding-top ion-text-center no-selected-text\">\r\n                <ion-icon name=\"alert-circle-outline\"></ion-icon> No se encontraron eventos.\r\n              </p>\r\n            </ion-text>\r\n          </ion-card>\r\n        </ng-template>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ "ykbS":
/*!**************************************************!*\
  !*** ./src/app/views/eventos/eventos.service.ts ***!
  \**************************************************/
/*! exports provided: EventosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosService", function() { return EventosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");




let EventosService = class EventosService {
    constructor(axios, globalSer) {
        this.axios = axios;
        this.globalSer = globalSer;
    }
    getEvents(query = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/admin/events', query);
            if (res && res.success)
                return res.data.events;
            return this.globalSer.altResponse(res);
        });
    }
    getDetailsEvent(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData(`/admin/events/${id}`);
            if (res && res.success)
                return res.data.event || {};
            return this.globalSer.altResponse(res);
        });
    }
    addEvent(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.postData(`/admin/events`, data);
            if (res && res.success)
                return res.data;
            return this.globalSer.altResponse(res);
        });
    }
    updateEvent(id, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.putData(`/admin/events/${id}`, data);
            if (res && res.success)
                return res.data.msg;
            return this.globalSer.altResponse(res);
        });
    }
    deleteEvent(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.deleteData(`/admin/events/${id}`);
            if (res && res.success)
                return res.data.msg;
            return this.globalSer.altResponse(res);
        });
    }
};
EventosService.ctorParameters = () => [
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_2__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }
];
EventosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EventosService);



/***/ })

}]);
//# sourceMappingURL=views-eventos-eventos-module.js.map