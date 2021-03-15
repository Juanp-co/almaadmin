(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Velantcode\Documents\projects\Juan\alma\almaadmin\src\main.ts */"zUnb");


/***/ }),

/***/ "1Ldg":
/*!*******************************************!*\
  !*** ./src/app/services/axios.service.ts ***!
  \*******************************************/
/*! exports provided: AxiosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxiosService", function() { return AxiosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cookies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cookies.service */ "QTu/");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
var AxiosService_1;





let AxiosService = AxiosService_1 = class AxiosService {
    constructor(cookiesService) {
        this.cookiesService = cookiesService;
        this.axios = null;
        this.axios = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
            baseURL: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].urlApi,
            withCredentials: false
        });
        this.setToken();
    }
    static getErrorCatch(error) {
        const ret = {
            error: 'Error desconocido.',
            status: null,
            extraData: null
        };
        if (error) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            if (error.response) {
                if (error.response.status)
                    ret.status = error.response.status;
                if (error.response.data) {
                    const { data } = error.response;
                    if (ret.status === 401)
                        ret.error = data.msg ? data.msg : error.toString();
                    else if (data.errors && data.errors.length > 0)
                        ret.error = data.errors[0].msg || 'No se logró determinar el problema.';
                    else
                        ret.error = data.msg ? data.msg : error.toString();
                    ret.extraData = data; // if exist other data assignate;
                    delete ret.extraData.msg;
                }
            }
            else if (error.request) {
                /*
                 * The request was made but no response was received, `error.request`
                 * is an instance of XMLHttpRequest in the browser and an instance
                 * of http.ClientRequest in Node.js
                 */
                // console.log('Error msg', error.message);
                ret.error = error.toString();
            }
            else {
                // Something happened in setting up the request and triggered an Error
                // console.log('Error msg', error.message);
                ret.error = error.toString();
            }
        }
        return ret;
    }
    setToken() {
        if (this.axios) {
            const token = this.cookiesService.getCookie('token');
            if (token)
                this.axios.defaults.headers.common['x-access-token'] = token;
            else {
                this.cookiesService.removeCookie('data');
                this.cookiesService.removeCookie('token');
                delete this.axios.defaults.headers.common['x-access-token'];
            }
        }
    }
    getData(endpoint, data = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.setToken();
                const res = yield this.axios.get(endpoint, { params: data });
                return { success: true, data: res.data };
            }
            catch (e) {
                return AxiosService_1.getErrorCatch(e);
            }
        });
    }
    postData(endpoint, data = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.setToken();
                const res = yield this.axios.post(endpoint, data);
                return { success: true, data: res.data };
            }
            catch (e) {
                return AxiosService_1.getErrorCatch(e);
            }
        });
    }
    putData(endpoint, data = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.setToken();
                const res = yield this.axios.put(endpoint, data);
                return { success: true, data: res.data };
            }
            catch (e) {
                return AxiosService_1.getErrorCatch(e);
            }
        });
    }
    deleteData(endpoint) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.setToken();
                const res = yield this.axios.delete(endpoint);
                return { success: true, data: res.data };
            }
            catch (e) {
                return AxiosService_1.getErrorCatch(e);
            }
        });
    }
};
AxiosService.ctorParameters = () => [
    { type: _cookies_service__WEBPACK_IMPORTED_MODULE_3__["CookiesService"] }
];
AxiosService = AxiosService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AxiosService);



/***/ }),

/***/ "4WDQ":
/*!********************************************!*\
  !*** ./src/app/services/global.service.ts ***!
  \********************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cookies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cookies.service */ "QTu/");




let GlobalService = class GlobalService {
    constructor(alertCtrl, loadingCtrl, modalController, navCtrl, cookieService) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.cookieService = cookieService;
        this.configEditor = {
            toolbar: [
                'heading', '|',
                'bold', 'italic', '|',
                'outdent', 'indent', '|',
                'bulletedList', 'numberedList', '|',
                // 'blockQuote', '|',
                'undo', 'redo'
            ],
            heading: {
                options: [
                    { model: 'paragraph', title: 'Parrafo', class: 'ck-heading_paragraph' },
                    { model: 'heading1', view: 'h1', title: 'Título 1', class: 'ck-heading_heading1' },
                    { model: 'heading2', view: 'h2', title: 'Título 2', class: 'ck-heading_heading2' },
                    { model: 'heading3', view: 'h3', title: 'Título 3', class: 'ck-heading_heading3' },
                    { model: 'heading4', view: 'h4', title: 'Título 4', class: 'ck-heading_heading4' },
                    { model: 'heading5', view: 'h5', title: 'Título 5', class: 'ck-heading_heading5' },
                ]
            },
            shouldNotGroupWhenFull: true,
            placeholder: 'Indica la descripción aquí ...'
        };
        this.roles = [
            'Administrador',
            'Pastor',
            'Supervisor',
            'Líder',
            'Padre espiritual',
            'Persona',
        ];
    }
    /*
      ALERTS
     */
    presentAlert(header, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header,
                message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentLoading(message = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({ message: message || 'Cargando...' });
            return this.loading.present();
        });
    }
    dismissLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading.dismiss();
        });
    }
    /*
      ALERTS
     */
    /**
     * @param header Title
     * @param message Message
     * @param confirmAction Function confirm
     * @param rejectAction Function reject
     * @return Promise<void>
     */
    alertConfirm({ header, message, confirmAction, rejectAction }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: header || 'Confirme',
                message: message || '¿Está seguro?',
                buttons: [
                    { text: 'Cancelar', role: 'cancel', handler: () => { if (!!rejectAction)
                            rejectAction(); } },
                    { text: 'Sí', handler: () => { if (!!confirmAction)
                            confirmAction(); } }
                ]
            });
            yield alert.present();
        });
    }
    alertWithList({ header, inputs, confirmAction, rejectAction }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: header || 'Seleccione',
                inputs,
                buttons: [
                    { text: 'Cancelar', role: 'cancel', handler: () => { if (!!rejectAction)
                            rejectAction(); } },
                    { text: 'Ok', handler: (selectedValue) => { if (!!confirmAction)
                            confirmAction(selectedValue); } }
                ]
            });
            yield alert.present();
        });
    }
    /*
      GLOBAL ACTION MODAL
     */
    /**
     * @param component Page to show.
     * @param componentProps Data pass to component.
     * @param backdropDismiss Click out modal to close.
     * @param actionUpdatedData Function to do action with data returned when the modal is closed.
     * @return Promise void return
     */
    loadModal(component, componentProps = {}, backdropDismiss = true, actionUpdatedData = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (component) {
                const modal = yield this.modalController.create({
                    component,
                    componentProps,
                    backdropDismiss
                });
                modal.present();
                if (!!actionUpdatedData) {
                    const { data } = yield modal.onWillDismiss();
                    if (data)
                        actionUpdatedData(data);
                }
            }
        });
    }
    /*
      COOKIES ACTIONS, SESSION AND RESPONSE AXIOS REDUCE
     */
    checkSession() {
        const token = this.cookieService.getCookie('token');
        if (!token)
            this.clearAllData();
        return !!token;
    }
    getRole() {
        const data = this.cookieService.getCookie('data');
        return data && data.role !== null && data.role !== undefined ? data.role : null;
    }
    getRoleValue(role) {
        if (role === null || role === undefined)
            return 'No se encontró el rol.';
        return this.roles[role] || 'No se encontró el rol.';
    }
    checkRoleToEnableAddOrUpdate() {
        const limits = ['0', '1'];
        return limits.indexOf(`${this.getRole()}`) > -1;
    }
    clearAllData() {
        this.cookieService.removeCookie('token');
        this.cookieService.removeCookie('data');
        // this.presentAlert('Alerta', 'Disculpe, pero no se encontró una sesión activa.');
        // this.navCtrl.navigateBack(['/ingresar']);
    }
    altResponse(res) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (res && res.status && res.status === 401) {
                this.clearAllData();
                return { error: 401 };
            }
            yield this.presentAlert('Alerta', res && res.error ? res.error : 'Error desconocido.');
            return null;
        });
    }
    errorSession() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.presentAlert('Alerta', 'Disculpe, pero no se encontró una sesión activa.');
            yield this.navCtrl.navigateBack(['/ingresar']);
        });
    }
    /*
      PAGINATION
     */
    getPagination(totalElements, perPage) {
        let pages = totalElements > 0 ? (Math.trunc((totalElements / perPage))) : 0;
        const extraPage = totalElements > 0 ? (totalElements % perPage) > 0 : false;
        if (extraPage)
            pages += 1;
        return pages;
    }
};
GlobalService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _cookies_service__WEBPACK_IMPORTED_MODULE_3__["CookiesService"] }
];
GlobalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GlobalService);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    urlApi: 'http://192.168.250.29:7000/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "QTu/":
/*!*********************************************!*\
  !*** ./src/app/services/cookies.service.ts ***!
  \*********************************************/
/*! exports provided: CookiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookiesService", function() { return CookiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "p46w");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);



let CookiesService = class CookiesService {
    constructor() { }
    getCookie(key) {
        const data = js_cookie__WEBPACK_IMPORTED_MODULE_2__["get"](key);
        if (data && data.indexOf('{') > -1)
            return JSON.parse(data);
        return js_cookie__WEBPACK_IMPORTED_MODULE_2__["get"](key) || null;
    }
    removeCookie(key) {
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["remove"](key, { expires: 1 });
    }
    setCookie(key, value) {
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["set"](key, value, {
            expires: 1,
            path: '/'
        });
    }
};
CookiesService.ctorParameters = () => [];
CookiesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CookiesService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/axios.service */ "1Ldg");
/* harmony import */ var _services_cookies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/cookies.service */ "QTu/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/global.service */ "4WDQ");








let AppComponent = class AppComponent {
    constructor(axios, cookieService, globalSer, router) {
        this.axios = axios;
        this.cookieService = cookieService;
        this.globalSer = globalSer;
        this.router = router;
        this.appPages = [
            { title: 'Inicio', url: '/inicio', icon: 'home' },
            { title: 'Miembros', url: '/miembros', icon: 'people' },
            { title: 'Grupos familiares', url: '/familias', icon: 'people-circle' },
            { title: 'Cursos', url: '/cursos', icon: 'desktop' },
            { title: 'Eventos', url: '/eventos', icon: 'calendar-number' },
            { title: 'Cuentas bancarias', url: '/cuentas-bancarias', icon: 'cash' },
            { title: 'Mi cuenta', url: '/mi-cuenta', icon: 'person-circle' },
        ];
        this.session = null;
        this.userData = null;
        // check if exist session
        if (!this.globalSer.checkSession())
            this.router.navigate(['/ingresar']);
        else
            this.getDataLogin();
    }
    getDataLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = this.cookieService.getCookie('data');
            if (!data) {
                const res = yield this.axios.getData('/user');
                if (res && res.success) {
                    this.session = true;
                    this.userData = res.data.data;
                    this.cookieService.setCookie('data', res.data.data);
                }
                else {
                    if (res && res.status && res.status === 401) {
                        this.session = false;
                        this.cookieService.removeCookie('token');
                        yield this.router.navigate(['/ingresar']);
                    }
                    yield this.globalSer.presentAlert('Alerta', res.error);
                }
            }
            else {
                this.userData = data;
                this.session = true;
            }
        });
    }
    salir() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            yield this.axios.deleteData('/logout');
            this.session = false;
            this.userData = null;
            this.cookieService.removeCookie('token');
            this.cookieService.removeCookie('data');
            yield this.globalSer.dismissLoading();
            yield this.router.navigate(['/ingresar']);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_4__["AxiosService"] },
    { type: _services_cookies_service__WEBPACK_IMPORTED_MODULE_5__["CookiesService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content >\n        <ion-row class=\"fondoCool ion-justify-content-end ion-padding \">\n          <ion-col size=\"8\" class=\"ion-margin-top ion-padding-top no-selected-text\">\n            <br><br><br><br>\n            <ion-text color=\"light\" class=\"titulo1\">Bienvenido</ion-text> <br>\n            <ion-text color=\"light\" class=\"titulo2\" *ngIf=\"!userData\">Usuario anonimo</ion-text>\n            <ion-text color=\"light\" class=\"titulo2\" *ngIf=\"userData\">{{ userData.names }} {{ userData.lastNames }}</ion-text>\n          </ion-col>\n          <ion-col size=\"4\">\n            <img src=\"assets/logo.png\" class=\"logo\">\n          </ion-col>\n        </ion-row>\n        <br>\n        <br>\n        <br>\n        <ion-menu-toggle auto-hide=\"false\" *ngIf=\"session\">\n          <ion-item\n            *ngFor=\"let p of appPages; let i = index\"\n            routerDirection=\"root\"\n            [routerLink]=\"[p.url]\"\n            lines=\"none\"\n            detail=\"false\"\n            routerLinkActive=\"selected\"\n          >\n            <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n            <ion-label>{{ p.title }}</ion-label>\n          </ion-item>\n          <ion-item button (click)=\"salir()\" lines=\"none\">\n            <ion-icon slot=\"start\" name=\"log-out\"></ion-icon>\n            <ion-label>Salir</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle auto-hide=\"false\" *ngIf=\"!session\">\n          <ion-item\n            button\n            lines=\"none\"\n            [routerLink]=\"['/ingresar']\"\n            routerLinkActive=\"selected\"\n          >\n            <ion-icon slot=\"start\" name=\"log-in\"></ion-icon>\n            <ion-label>Ingresar</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "AytR");









let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production })
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        loadChildren: () => Promise.all(/*! import() | views-inicio-inicio-module */[__webpack_require__.e("default~views-cuentas-bancarias-cuentas-bancarias-module~views-cursos-cursos-module~views-eventos-ev~f8026faa"), __webpack_require__.e("views-inicio-inicio-module")]).then(__webpack_require__.bind(null, /*! ./views/inicio/inicio.module */ "Wtct")).then(m => m.InicioPageModule)
    },
    {
        path: 'familias',
        loadChildren: () => Promise.all(/*! import() | views-familias-familias-module */[__webpack_require__.e("default~views-cuentas-bancarias-cuentas-bancarias-module~views-cursos-cursos-module~views-eventos-ev~f8026faa"), __webpack_require__.e("views-familias-familias-module")]).then(__webpack_require__.bind(null, /*! ./views/familias/familias.module */ "c9Jc")).then(m => m.FamiliasPageModule)
    },
    {
        path: 'eventos',
        loadChildren: () => Promise.all(/*! import() | views-eventos-eventos-module */[__webpack_require__.e("default~views-cuentas-bancarias-cuentas-bancarias-module~views-cursos-cursos-module~views-eventos-ev~f8026faa"), __webpack_require__.e("default~crear-crear-module~modal-editar-contenido-modal-editar-contenido-module~modal-editar-tema-mo~23c6fd20"), __webpack_require__.e("default~detalles-curso-detalles-curso-module~views-cuentas-bancarias-cuentas-bancarias-module~views-~916dc538"), __webpack_require__.e("views-eventos-eventos-module")]).then(__webpack_require__.bind(null, /*! ./views/eventos/eventos.module */ "TjVE")).then(m => m.EventosPageModule)
    },
    {
        path: 'cursos',
        loadChildren: () => Promise.all(/*! import() | views-cursos-cursos-module */[__webpack_require__.e("default~views-cuentas-bancarias-cuentas-bancarias-module~views-cursos-cursos-module~views-eventos-ev~f8026faa"), __webpack_require__.e("views-cursos-cursos-module")]).then(__webpack_require__.bind(null, /*! ./views/cursos/cursos.module */ "8C+O")).then(m => m.CursosPageModule)
    },
    {
        path: 'ofrendas',
        loadChildren: () => __webpack_require__.e(/*! import() | views-ofrendas-ofrendas-module */ "views-ofrendas-ofrendas-module").then(__webpack_require__.bind(null, /*! ./views/ofrendas/ofrendas.module */ "EDhg")).then(m => m.OfrendasPageModule)
    },
    // {
    //   path: 'informes',
    //   loadChildren: () => import('./views/informes/informes.module').then( m => m.InformesPageModule)
    // },
    {
        path: 'miembros',
        loadChildren: () => Promise.all(/*! import() | views-miembros-miembros-module */[__webpack_require__.e("default~views-cuentas-bancarias-cuentas-bancarias-module~views-cursos-cursos-module~views-eventos-ev~f8026faa"), __webpack_require__.e("views-miembros-miembros-module")]).then(__webpack_require__.bind(null, /*! ./views/miembros/miembros.module */ "PI0l")).then(m => m.MiembrosPageModule)
    },
    {
        path: 'ingresar',
        loadChildren: () => __webpack_require__.e(/*! import() | views-ingresar-ingresar-module */ "views-ingresar-ingresar-module").then(__webpack_require__.bind(null, /*! ./views/ingresar/ingresar.module */ "zeWn")).then(m => m.IngresarPageModule)
    },
    {
        path: 'cuentas-bancarias',
        loadChildren: () => Promise.all(/*! import() | views-cuentas-bancarias-cuentas-bancarias-module */[__webpack_require__.e("default~views-cuentas-bancarias-cuentas-bancarias-module~views-cursos-cursos-module~views-eventos-ev~f8026faa"), __webpack_require__.e("default~crear-crear-module~modal-editar-contenido-modal-editar-contenido-module~modal-editar-tema-mo~23c6fd20"), __webpack_require__.e("default~detalles-curso-detalles-curso-module~views-cuentas-bancarias-cuentas-bancarias-module~views-~916dc538"), __webpack_require__.e("views-cuentas-bancarias-cuentas-bancarias-module")]).then(__webpack_require__.bind(null, /*! ./views/cuentas-bancarias/cuentas-bancarias.module */ "Y16Y")).then(m => m.CuentasBancariasPageModule)
    },
    {
        path: 'mi-cuenta',
        loadChildren: () => Promise.all(/*! import() | views-mi-cuenta-mi-cuenta-module */[__webpack_require__.e("default~views-cuentas-bancarias-cuentas-bancarias-module~views-cursos-cursos-module~views-eventos-ev~f8026faa"), __webpack_require__.e("default~detalles-miembro-detalles-miembro-module~registro-registro-module~views-mi-cuenta-mi-cuenta-module"), __webpack_require__.e("views-mi-cuenta-mi-cuenta-module")]).then(__webpack_require__.bind(null, /*! ./views/mi-cuenta/mi-cuenta.module */ "1LWO")).then(m => m.MiCuentaPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fondoCool {\n  background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\"/assets/cruz.png\");\n  background-size: cover;\n  background-position: center center;\n}\n\n.logo {\n  margin-bottom: -190px !important;\n  z-index: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUhBQUE7RUFJQSxzQkFBQTtFQUNBLGtDQUFBO0FBRkY7O0FBT0E7RUFDRSxnQ0FBQTtFQUNBLHFCQUFBO0FBSkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbmRvQ29vbHtcbiAgYmFja2dyb3VuZC1pbWFnZTogICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLFxuICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC41KSxcbiAgICAgICAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuNSkpLFxuICAgICAgICAgICAgICAgICAgICAgIHVybChcIi9hc3NldHMvY3J1ei5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIC8vIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAxMDAlIDAsIDEwMCUgMTAwJSwgNTAlIDg2JSwgMCUgMTAwJSk7XG4gIC8vIGNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgMTAwJSAwLCAxMDAlIDEwMCUsIDUwJSA4NiUsIDAlIDEwMCUpO1xufVxuXG4ubG9nb3tcbiAgbWFyZ2luLWJvdHRvbTogLTE5MHB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDEgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map