(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-ingresar-ingresar-module"],{

/***/ "+xLx":
/*!*************************************************!*\
  !*** ./src/app/views/ingresar/ingresar.page.ts ***!
  \*************************************************/
/*! exports provided: IngresarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresarPage", function() { return IngresarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ingresar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ingresar.page.html */ "nsxg");
/* harmony import */ var _ingresar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ingresar.page.scss */ "RaCq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_cookies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/cookies.service */ "QTu/");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app.component */ "Sy1n");
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Utils/validations.functions */ "OmbT");










let IngresarPage = class IngresarPage {
    constructor(axios, cookieService, globalSer, router, globalComponent) {
        this.axios = axios;
        this.cookieService = cookieService;
        this.globalSer = globalSer;
        this.router = router;
        this.globalComponent = globalComponent;
        this.session = false;
        this.phone = '';
        this.pass = '';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.globalSer.checkSession())
                this.router.navigate(['/inicio']);
            else {
                this.globalComponent.session = false;
                this.globalComponent.userData = null;
            }
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.globalSer.checkSession())
                this.router.navigate(['/inicio']);
            else {
                this.globalComponent.session = false;
                this.globalComponent.userData = null;
            }
        });
    }
    validateOnlyNumbers(event) {
        Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_9__["onlyNumbersInputValidation2"])(event);
    }
    ingresar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.pass && this.phone) {
                yield this.globalSer.presentLoading();
                const res = yield this.axios.postData('/login', { phone: this.phone, password: this.pass, admin: true });
                if (res && res.success) {
                    const { data, token } = res.data;
                    this.cookieService.setCookie('token', token);
                    this.cookieService.setCookie('data', data);
                    this.globalComponent.session = true;
                    this.globalComponent.userData = data;
                    yield this.globalSer.dismissLoading();
                    yield this.router.navigate(['/inicio']);
                }
                else {
                    this.phone = null;
                    this.pass = null;
                    yield this.globalSer.dismissLoading();
                    yield this.globalSer.presentAlert('Alerta', res && res.error ? res.error : 'Error desconocido.');
                }
            }
            else {
                yield this.globalSer.presentAlert('Alerta', 'Asegúrese de indicar su usuario y contraseña.');
            }
        });
    }
};
IngresarPage.ctorParameters = () => [
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_5__["AxiosService"] },
    { type: _services_cookies_service__WEBPACK_IMPORTED_MODULE_6__["CookiesService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"] }
];
IngresarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ingresar',
        template: _raw_loader_ingresar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ingresar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IngresarPage);



/***/ }),

/***/ "OmbT":
/*!********************************************!*\
  !*** ./src/Utils/validations.functions.ts ***!
  \********************************************/
/*! exports provided: checkNameOrLastName, onlyNumbersInputValidation, onlyNumbersInputValidation2, onlyLettersInputValidation, checkRole, checkRoleAdmin, checkIfValueIsNumber, checkDocument, checkInputTypeValueToTest, checkPhone, checkPassword, checkEmail, checkTitlesOrDescriptions, checkCodeValue, checkDate, checkHour, checkDateMonthAndYear, checkBase64, checkSlug, checkUUID, checkHtmlContent, checkUrl, checkFacebookUrl, checkInstagramUrl, checkTwitterUrl, checkYoutubeUrl, setSaltLinesOrBr, replaceNbsp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkNameOrLastName", function() { return checkNameOrLastName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyNumbersInputValidation", function() { return onlyNumbersInputValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyNumbersInputValidation2", function() { return onlyNumbersInputValidation2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyLettersInputValidation", function() { return onlyLettersInputValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRole", function() { return checkRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRoleAdmin", function() { return checkRoleAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIfValueIsNumber", function() { return checkIfValueIsNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDocument", function() { return checkDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkInputTypeValueToTest", function() { return checkInputTypeValueToTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPhone", function() { return checkPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPassword", function() { return checkPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkEmail", function() { return checkEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkTitlesOrDescriptions", function() { return checkTitlesOrDescriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkCodeValue", function() { return checkCodeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDate", function() { return checkDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkHour", function() { return checkHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDateMonthAndYear", function() { return checkDateMonthAndYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkBase64", function() { return checkBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSlug", function() { return checkSlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUUID", function() { return checkUUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkHtmlContent", function() { return checkHtmlContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUrl", function() { return checkUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFacebookUrl", function() { return checkFacebookUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkInstagramUrl", function() { return checkInstagramUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkTwitterUrl", function() { return checkTwitterUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkYoutubeUrl", function() { return checkYoutubeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSaltLinesOrBr", function() { return setSaltLinesOrBr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceNbsp", function() { return replaceNbsp; });
function checkNameOrLastName(value) {
    return (value &&
        /^([A-Z\u00C0-\u024F\u1E00-\u1EFF]?)+([[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]+[,.]?[ ]?|[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]+['-]]?)+$/.test(value));
}
function onlyNumbersInputValidation(event) {
    const pattern = /[0-9.,]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
    }
}
function onlyNumbersInputValidation2(event) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
    }
}
function onlyLettersInputValidation(event) {
    const pattern = /^([A-Z\u00C0-\u024F\u1E00-\u1EFF]?)+([[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]+[,.]?[ ]?|[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]+['-]]?)+$/;
    const { value } = event.target;
    if (!pattern.test(value)) {
        // invalid character, prevent input
        event.target.value = value.substring(0, value.length - 1);
    }
}
function checkRole(value) {
    return value && /^[012345]{1}/.test(`${value}`);
}
function checkRoleAdmin(value) {
    return value && /^[01]{1}/.test(`${value}`);
}
function checkIfValueIsNumber(value) {
    return value && /^[0-9]{1,3}/.test(`${value}`);
}
function checkDocument(value) {
    return value && /^([CC|CE|PE|TI|PAS]){2,3}[0-9]{5,20}$/.test(value);
}
function checkInputTypeValueToTest(value) {
    return value && ['text', 'textarea', 'checkbox', 'radio', 'select'].indexOf(`${value}`) > -1;
}
function checkPhone(value) {
    return (value && /^[\+]?[(]?([0-9]{2})?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value));
}
function checkPassword(value) {
    return (value && /^(?=.*\d)?(?=.*[A-Z]{1})?(?=.*[a-z]{1}?)?(?=.*[^\w\d\s:]?)([^\s]){6,25}$/.test(value));
}
function checkEmail(value) {
    return value && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
}
function checkTitlesOrDescriptions(value) {
    return (value &&
        /^[a-zA-ZÁÉÍÓÚÀÈÌÒÙàèìòùáéíóúÂÊÎÔÛâêîôûÄËÏÖÜäëïöüñÑ0-9\s.,#*?¿¡!()\-+"'/@]{5,2000}/g.test(value));
}
function checkCodeValue(value) {
    return value && /^[a-zA-Z0-9\s.,#*()\-+/@]+$/g.test(value);
}
function checkDate(value) {
    // validate date (YYYY-MM-DD)
    return value && /\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*/.test(`${value}`);
}
function checkHour(value) {
    // validate hour (HH:mm)
    return value && /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(value);
}
function checkDateMonthAndYear(value) {
    // validate date (YYYY-MM-DD)
    return value && /(1[0-2]|0[1-9]|\d)-(20\d{2}|19\d{2}|0(?!0)\d|[1-9]\d)/.test(value);
}
function checkBase64(text, doc = false) {
    if (!text)
        return false;
    if (doc)
        return text.substr(0, 40).indexOf('data:application/pdf') > -1;
    return text.substr(0, 21).indexOf('data:image/') > -1;
}
function checkSlug(value) {
    return value && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(`${value}`);
}
function checkUUID(value) {
    return value && /^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[4][0-9A-Fa-f]{3}-[89AB][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12,13}$/i.test(`${value}`);
}
function checkHtmlContent(value) {
    return value && /<(\"[^\"]*\"|'[^']*'|[^'\">])*>$/gim.test(`${value}`);
}
function checkUrl(value) {
    return /^(?:(?:(?:http?|https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(`${value}`);
}
function checkFacebookUrl(value) {
    return /(?:https?:\/\/)?(?:www|m\.)?(facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/ig.test(`${value}`);
}
function checkInstagramUrl(value) {
    return /(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/([A-Za-z0-9-_\.\/]+)/i.test(`${value}`);
}
function checkTwitterUrl(value) {
    return /^(?:https?:\/\/)?(?:www\.)?twitter\.com\/(#!\/)?[a-zA-Z0-9_]+$/i.test(`${value}`);
}
function checkYoutubeUrl(value) {
    return /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/i.test(`${value}`);
}
function setSaltLinesOrBr(value, changeToBr = false) {
    if (!value)
        return null;
    return changeToBr ? value.replace(/\n/g, '<br/>') : value.replace(/<br ?\/?>|<BR ?\/?>/g, '\n');
}
function replaceNbsp(value) {
    if (!value)
        return null;
    return value.replace(/&NBSP;/g, ' ');
}


/***/ }),

/***/ "RaCq":
/*!***************************************************!*\
  !*** ./src/app/views/ingresar/ingresar.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmdyZXNhci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "nsxg":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/ingresar/ingresar.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Ingresar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row class=\"ion-justify-content-center ion-margin-top ion-padding-top\" *ngIf=\"!session\">\n    <ion-col [size]=\"8\">\n      <div class=\"ion-margin-top ion-padding-top\">\n        <br><br><br>\n\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"auto\">\n            <h4>\n              <ion-text color=\"primary\">\n                Ingresar al panel administrador\n              </ion-text>\n            </h4>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"8\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">Nº de teléfono</ion-label>\n              <ion-input\n                [(ngModel)]=\"phone\"\n                class=\"ion-text-uppercase\"\n                maxlength=\"13\"\n                (keypress)=\"validateOnlyNumbers($event)\"\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"8\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">Contraseña</ion-label>\n              <ion-input type=\"password\" [(ngModel)]=\"pass\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-justify-content-center ion-margin-top\">\n          <ion-col size=\"auto\">\n            <ion-button expand=\"full\" color=\"primary\" (click)=\"ingresar()\">\n              Ingresar\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "qp61":
/*!***********************************************************!*\
  !*** ./src/app/views/ingresar/ingresar-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: IngresarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresarPageRoutingModule", function() { return IngresarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ingresar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ingresar.page */ "+xLx");




const routes = [
    {
        path: '',
        component: _ingresar_page__WEBPACK_IMPORTED_MODULE_3__["IngresarPage"]
    }
];
let IngresarPageRoutingModule = class IngresarPageRoutingModule {
};
IngresarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IngresarPageRoutingModule);



/***/ }),

/***/ "zeWn":
/*!***************************************************!*\
  !*** ./src/app/views/ingresar/ingresar.module.ts ***!
  \***************************************************/
/*! exports provided: IngresarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresarPageModule", function() { return IngresarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ingresar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ingresar-routing.module */ "qp61");
/* harmony import */ var _ingresar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ingresar.page */ "+xLx");







let IngresarPageModule = class IngresarPageModule {
};
IngresarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ingresar_routing_module__WEBPACK_IMPORTED_MODULE_5__["IngresarPageRoutingModule"]
        ],
        declarations: [_ingresar_page__WEBPACK_IMPORTED_MODULE_6__["IngresarPage"]]
    })
], IngresarPageModule);



/***/ })

}]);
//# sourceMappingURL=views-ingresar-ingresar-module.js.map