(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "0/6H":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "A36C");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "7Odz":
/*!****************************************************************************************!*\
  !*** ./src/app/views/miembros/asignar-grupo-familiar/asignar-grupo-familiar.page.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc2lnbmFyLWdydXBvLWZhbWlsaWFyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "CV5h":
/*!************************************************************************************!*\
  !*** ./src/app/views/miembros/asignar-consolidador/asignar-consolidador.page.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc2lnbmFyLWNvbnNvbGlkYWRvci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "F+Ct":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/miembros/asignar-grupo-familiar/asignar-grupo-familiar.page.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Asignar grupo familiar</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" (click)=\"confirmSaveNewMembers()\" [disabled]=\"!group\">\n        <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Seleccionar</ion-text>\n      </ion-button>\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Cancelar</ion-text>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-row>\n        <ion-col [size]=\"12\">\n          <ion-toolbar>\n            <ion-button color=\"medium\" (click)=\"setFindFor()\" slot=\"start\">\n              <ion-icon name=\"list-outline\" slot=\"start\"></ion-icon>\n              <ion-text>{{ findFor.label }}</ion-text>\n            </ion-button>\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">Buscar por {{ findFor.label }}</ion-label>\n              <ion-input\n                [(ngModel)]=\"queryParams[findFor.key]\"\n                autocomplete=\"off\"\n                maxlength=\"4\"\n                (keypress)=\"validateOnlyNumber($event)\"\n              ></ion-input>\n            </ion-item>\n            <ion-button color=\"medium\" (click)=\"findData()\" slot=\"end\">\n              <ion-icon name=\"search-outline\"></ion-icon>\n            </ion-button>\n            <ion-button color=\"medium\" (click)=\"cleanFilter()\" slot=\"end\">\n              <ion-icon name=\"trash-outline\" slot=\"start\"></ion-icon>\n              <ion-text>Limpiar</ion-text>\n            </ion-button>\n          </ion-toolbar>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"groups && groups.length > 0; else noGroups\">\n    <ion-col size=\"12\" size-sm=\"6\" *ngFor=\"let group of groups; let i=index\">\n      <ion-card>\n        <ion-card-content class=\"\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-text><b>Grupo #:</b> {{ group.number }}</ion-text><br/>\n              <ion-text><b>Sector:</b> {{ group.sector }}</ion-text><br/>\n              <ion-text><b>Sub-Sector:</b> {{ group.subSector }}</ion-text><br/>\n              <ion-button\n                [color]=\"selected !== i ? 'primary' : 'light'\"\n                (click)=\"selected !== i ? selectGroup(i) : removeSelected()\"\n              >\n                <ion-icon name=\"{{ selected !== i ? 'add' : 'close' }}-outline\"></ion-icon>\n                <ion-text>{{ selected !== i ? 'Agregar' : 'Remover'}}</ion-text>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ng-template #noGroups>\n    <ion-card>\n      <ion-card-content class=\"\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-text color=\"medium\">\n              <p class=\"ion-text-center\">\n                <ion-icon name=\"alert-circle-outline\"></ion-icon>\n                {{ init ? 'Busque a un grupo por sector, sub-sector o número y seleccionelo.' : 'No se encontraron grupos.' }}\n              </p>\n            </ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ng-template>\n</ion-content>\n\n");

/***/ }),

/***/ "FA8q":
/*!**********************************************************************************!*\
  !*** ./src/app/views/miembros/asignar-consolidador/asignar-consolidador.page.ts ***!
  \**********************************************************************************/
/*! exports provided: AsignarConsolidadorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignarConsolidadorPage", function() { return AsignarConsolidadorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_asignar_consolidador_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./asignar-consolidador.page.html */ "G4yk");
/* harmony import */ var _asignar_consolidador_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asignar-consolidador.page.scss */ "CV5h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _miembros_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../miembros.service */ "wJOZ");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");








let AsignarConsolidadorPage = class AsignarConsolidadorPage {
    constructor(alertCtrl, axios, globalSer, miembrosService, modalCtrl) {
        this.alertCtrl = alertCtrl;
        this.axios = axios;
        this.globalSer = globalSer;
        this.miembrosService = miembrosService;
        this.modalCtrl = modalCtrl;
        this.users = [];
        this.selectedUser = null;
        this.init = true;
        this.queryParams = {
            limit: 100,
            page: 1,
            input: 'names',
            value: 1,
            word: null,
            admins: 'true',
            ignoreIds: null
        };
        this.handleAdd = (id) => this.addToSelected(id);
        this.handleRemove = () => this.removeOfSelected();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.selectedId)
                this.queryParams.ignoreIds = this.selectedId;
        });
    }
    closeModal(data = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss(data);
        });
    }
    getMembers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            if (this.init)
                this.init = false;
            this.users = [];
            this.selectedUser = null;
            const data = yield this.miembrosService.getMembersList(this.queryParams);
            if (data && !data.error) {
                this.users = data || [];
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
    findData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getMembers();
        });
    }
    addToSelected(id) {
        const user = this.users.find(u => u._id === id);
        if (user)
            this.selectedUser = user;
    }
    removeOfSelected() {
        this.selectedUser = null;
    }
    cleanData() {
        this.users = [];
        this.queryParams.word = null;
        this.selectedUser = null;
        this.init = true;
    }
    checkAdded(id) {
        return this.selectedUser ? this.selectedUser._id === id : false;
    }
    confirmSaveNewMembers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.selectedUser)
                yield this.closeModal(this.selectedUser);
            else
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero debe seleccionar a un miembro.');
        });
    }
};
AsignarConsolidadorPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_6__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _miembros_service__WEBPACK_IMPORTED_MODULE_5__["MiembrosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
AsignarConsolidadorPage.propDecorators = {
    selectedId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    role: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AsignarConsolidadorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-asignar-consolidador',
        template: _raw_loader_asignar_consolidador_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_asignar_consolidador_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AsignarConsolidadorPage);



/***/ }),

/***/ "G4yk":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/miembros/asignar-consolidador/asignar-consolidador.page.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Asignar miembro</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" (click)=\"confirmSaveNewMembers()\" [disabled]=\"!selectedUser\">\n        <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Seleccionar</ion-text>\n      </ion-button>\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Cancelar</ion-text>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-row>\n        <ion-col [size]=\"12\">\n          <ion-toolbar>\n            <ion-button color=\"medium\" (click)=\"cleanData()\" slot=\"start\" *ngIf=\"queryParams.word\">\n              <ion-icon name=\"backspace-outline\"></ion-icon>\n            </ion-button>\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">Buscar por teléfono o nombre</ion-label>\n              <ion-input\n                [(ngModel)]=\"queryParams.word\"\n                autocomplete=\"off\"\n                class=\"ion-text-uppercase\"\n              ></ion-input>\n            </ion-item>\n            <ion-button color=\"medium\" (click)=\"queryParams.word ? findData() : null\" slot=\"end\">\n              <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon>\n              <ion-text>Buscar</ion-text>\n            </ion-button>\n          </ion-toolbar>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"users && users.length > 0; else noMembers\">\n    <ion-col size=\"12\" size-sm=\"6\" *ngFor=\"let u of users\">\n      <app-user-group-card\n        [user]=\"u\"\n        [handleAdd]=\"handleAdd\"\n        [handleRemove]=\"handleRemove\"\n        [added]=\"checkAdded(u._id)\"\n      ></app-user-group-card>\n    </ion-col>\n  </ion-row>\n\n  <ng-template #noMembers>\n    <ion-card>\n      <ion-card-content class=\"\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-text color=\"medium\">\n              <p class=\"ion-text-center\">\n                <ion-icon name=\"alert-circle-outline\"></ion-icon>\n                {{ init ? 'Busque a un miembro por número de teléfono o por su nomber y seleccionelo.' : 'No se encontraron grupos.' }}\n              </p>\n            </ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ng-template>\n</ion-content>\n");

/***/ }),

/***/ "G9AF":
/*!*********************************************************************************!*\
  !*** ./src/app/views/grupos-familiares/asignar-miembro/asignar-miembro.page.ts ***!
  \*********************************************************************************/
/*! exports provided: AsignarMiembroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignarMiembroPage", function() { return AsignarMiembroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_asignar_miembro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./asignar-miembro.page.html */ "izRr");
/* harmony import */ var _asignar_miembro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asignar-miembro.page.scss */ "tFUu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");







let AsignarMiembroPage = class AsignarMiembroPage {
    constructor(alertCtrl, axios, globalSer, modalCtrl) {
        this.alertCtrl = alertCtrl;
        this.axios = axios;
        this.globalSer = globalSer;
        this.modalCtrl = modalCtrl;
        this.users = [];
        this.totals = 0;
        this.pages = 0;
        this.page = 1;
        this.showRegisterButton = false;
        this.selectedUser = null;
        this.queryParams = {
            limit: 100,
            page: 1,
            input: 'names',
            value: 1,
            word: null,
            admins: 'true',
            ignoreIds: null
        };
        this.handleAdd = (id) => this.addToSelected(id);
        this.handleRemove = () => this.removeOfSelected();
    }
    ngOnInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.data) {
                let listIds = [];
                if (this.data.leader)
                    listIds.push(this.data.leader._id);
                if (this.data.helper)
                    listIds.push(this.data.helper._id);
                if (this.data.host)
                    listIds.push(this.data.host._id);
                if (this.data.assistants)
                    listIds = listIds.concat(((_a = this.data.assistants) === null || _a === void 0 ? void 0 : _a.map(a => a._id)) || []);
                if (this.data.master)
                    listIds.push(this.data.master._id);
                if (listIds.length > 0)
                    this.queryParams.ignoreIds = listIds.toString();
            }
            yield this.getMembers();
        });
    }
    closeModal(data = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss(data);
        });
    }
    getMembers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // if (this.showFilter) this.showFilter = false;
            yield this.globalSer.presentLoading();
            const res = yield this.axios.getData('/admin/users', this.queryParams);
            if (res && res.success) {
                this.users = res.data.users;
                yield this.globalSer.dismissLoading();
            }
            else {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('Alerta', res && res.error ? res.error : 'Error desconocido.');
            }
        });
    }
    findData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getMembers();
        });
    }
    addToSelected(id) {
        const user = this.users.find(u => u._id === id);
        if (user)
            this.selectedUser = user;
    }
    removeOfSelected() {
        this.selectedUser = null;
    }
    checkAdded(id) {
        return this.selectedUser ? this.selectedUser._id === id : false;
    }
    confirmSaveNewMembers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.selectedUser) {
                yield this.globalSer.alertConfirm({
                    message: `¿Está seguro qué desea agregar a este miembros al grupo?`,
                    confirmAction: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { yield this.closeModal(this.selectedUser); })
                });
            }
            else {
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero no debe seleccionar a un miembro.');
            }
        });
    }
};
AsignarMiembroPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_5__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
AsignarMiembroPage.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    role: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AsignarMiembroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-asignar-miembro',
        template: _raw_loader_asignar_miembro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_asignar_miembro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AsignarMiembroPage);



/***/ }),

/***/ "Hx5O":
/*!**************************************************************************************!*\
  !*** ./src/app/views/miembros/asignar-grupo-familiar/asignar-grupo-familiar.page.ts ***!
  \**************************************************************************************/
/*! exports provided: AsignarGrupoFamiliarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignarGrupoFamiliarPage", function() { return AsignarGrupoFamiliarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_asignar_grupo_familiar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./asignar-grupo-familiar.page.html */ "F+Ct");
/* harmony import */ var _asignar_grupo_familiar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asignar-grupo-familiar.page.scss */ "7Odz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _miembros_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../miembros.service */ "wJOZ");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../Utils/validations.functions */ "OmbT");









let AsignarGrupoFamiliarPage = class AsignarGrupoFamiliarPage {
    constructor(alertCtrl, axios, globalSer, miembrosService, modalCtrl) {
        this.alertCtrl = alertCtrl;
        this.axios = axios;
        this.globalSer = globalSer;
        this.miembrosService = miembrosService;
        this.modalCtrl = modalCtrl;
        this.list = [
            { key: 'sector', label: 'sector' },
            { key: 'subSector', label: 'sub-sector' },
            { key: 'number', label: 'número' },
        ];
        this.selected = null;
        this.groups = [];
        this.group = null;
        this.init = true;
        this.findFor = { key: 'sector', label: 'sector' };
        this.queryParams = {
            input: 'number',
            value: 1,
            page: 1,
            limit: 50,
            sector: null,
            subSector: null,
            number: null
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { });
    }
    closeModal(data = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss(data);
        });
    }
    getFamiliesGroups() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            if (this.init)
                this.init = false;
            this.groups = [];
            this.group = null;
            this.selected = null;
            const data = yield this.miembrosService.getFamiliesGroupsList(this.queryParams);
            if (data && !data.error) {
                this.groups = data || [];
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
    findData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getFamiliesGroups();
        });
    }
    validateOnlyNumber(event) {
        Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_8__["onlyNumbersInputValidation2"])(event);
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
                    this.findFor = this.list[index];
                    this.queryParams.sector = null;
                    this.queryParams.subSector = null;
                    this.queryParams.number = null;
                }
            });
        });
    }
    cleanFilter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.queryParams.input = 'sector';
            this.findFor = this.list[0];
            this.queryParams.sector = null;
            this.queryParams.subSector = null;
            this.queryParams.number = null;
            this.selected = null;
            this.group = null;
            this.groups = [];
            this.init = true;
        });
    }
    selectGroup(index) {
        this.group = this.groups[index] || null;
        this.selected = this.group ? index : null;
    }
    removeSelected() {
        this.group = null;
        this.selected = null;
    }
    confirmSaveNewMembers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.group)
                yield this.closeModal(this.group);
            else
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero debe seleccionar un grupo.');
        });
    }
};
AsignarGrupoFamiliarPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_6__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _miembros_service__WEBPACK_IMPORTED_MODULE_5__["MiembrosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
AsignarGrupoFamiliarPage.propDecorators = {
    selectedId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AsignarGrupoFamiliarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-asignar-grupo-familiar',
        template: _raw_loader_asignar_grupo_familiar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_asignar_grupo_familiar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AsignarGrupoFamiliarPage);



/***/ }),

/***/ "R3bu":
/*!******************************************************************************************!*\
  !*** ./src/app/views/consolidados/miembros-consolidados/miembros-consolidados.page.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaWVtYnJvcy1jb25zb2xpZGFkb3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "ZaV5":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "f6+L":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/consolidados/miembros-consolidados/miembros-consolidados.page.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Seleccionar miembro</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" (click)=\"confirmAdd()\" [disabled]=\"!selectedUser\">\n        <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Seleccionar</ion-text>\n      </ion-button>\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Cancelar</ion-text>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-row>\n        <ion-col [size]=\"12\" size-sm=\"7\">\n          <ion-toolbar>\n            <!--<ion-button color=\"medium\" (click)=\"word = null; findData()\" slot=\"start\" *ngIf=\"word\">-->\n              <!--<ion-icon name=\"backspace-outline\"></ion-icon>-->\n            <!--</ion-button>-->\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">Buscar</ion-label>\n              <ion-input\n                [(ngModel)]=\"word\"\n                autocomplete=\"off\"\n                class=\"ion-text-uppercase\"\n                (keyup)=\"findMember()\"\n              ></ion-input>\n            </ion-item>\n            <!--<ion-button color=\"medium\" (click)=\"word !== null || word !== '' ?  : null\" slot=\"end\">-->\n              <!--<ion-icon name=\"search-outline\"></ion-icon>-->\n            <!--</ion-button>-->\n          </ion-toolbar>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"members?.length > 0\">\n    <ion-col size=\"12\" size-sm=\"6\" *ngFor=\"let member of members\">\n      <app-user-group-card\n        [user]=\"member\"\n        [handleAdd]=\"handleAdd\"\n        [handleRemove]=\"handleRemove\"\n        [added]=\"checkAdded(member._id)\"\n      ></app-user-group-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"members?.length === 0\">\n    <ion-col>\n      <ion-card>\n        <ion-card-content class=\"ion-text-center\">\n          <ion-text>\n            <p class=\"ion-text-center\">\n              <ion-icon name=\"alert-circle-outline\"></ion-icon>\n              No se encontraron resultados.\n            </p>\n          </ion-text>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "izRr":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/grupos-familiares/asignar-miembro/asignar-miembro.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Asignar miembro</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" (click)=\"confirmSaveNewMembers()\" [disabled]=\"!selectedUser\">\n        <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Guardar</ion-text>\n      </ion-button>\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Cancelar</ion-text>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-row>\n        <ion-col [size]=\"12\" size-sm=\"7\">\n          <ion-toolbar>\n            <ion-button color=\"medium\" (click)=\"queryParams.word = null; findData()\" slot=\"start\" *ngIf=\"queryParams.word\">\n              <ion-icon name=\"backspace-outline\"></ion-icon>\n            </ion-button>\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">Buscar</ion-label>\n              <ion-input\n                [(ngModel)]=\"queryParams.word\"\n                autocomplete=\"off\"\n                class=\"ion-text-uppercase\"\n              ></ion-input>\n            </ion-item>\n            <ion-button color=\"medium\" (click)=\"queryParams.word !== null || queryParams.word !== '' ? findData() : null\" slot=\"end\">\n              <ion-icon name=\"search-outline\"></ion-icon>\n            </ion-button>\n          </ion-toolbar>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"users && users.length > 0\">\n    <ion-col size=\"12\" size-sm=\"6\" *ngFor=\"let u of users\">\n      <app-user-group-card\n        [user]=\"u\"\n        [handleAdd]=\"handleAdd\"\n        [handleRemove]=\"handleRemove\"\n        [added]=\"checkAdded(u._id)\"\n      ></app-user-group-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"users.length === 0\">\n    <ion-col>\n      <ion-card>\n        <ion-card-content class=\"ion-text-center\">\n          <ion-text>\n            <p class=\"ion-text-center\">\n              <ion-icon name=\"alert-circle-outline\"></ion-icon>\n              No se encontraron resultados.\n            </p>\n          </ion-text>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "tFUu":
/*!***********************************************************************************!*\
  !*** ./src/app/views/grupos-familiares/asignar-miembro/asignar-miembro.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc2lnbmFyLW1pZW1icm8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "uAKu":
/*!****************************************************************************************!*\
  !*** ./src/app/views/consolidados/miembros-consolidados/miembros-consolidados.page.ts ***!
  \****************************************************************************************/
/*! exports provided: MiembrosConsolidadosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiembrosConsolidadosPage", function() { return MiembrosConsolidadosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_miembros_consolidados_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./miembros-consolidados.page.html */ "f6+L");
/* harmony import */ var _miembros_consolidados_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./miembros-consolidados.page.scss */ "R3bu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");
/* harmony import */ var _miembros_miembros_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../miembros/miembros.service */ "wJOZ");








let MiembrosConsolidadosPage = class MiembrosConsolidadosPage {
    constructor(alertCtrl, axios, globalSer, modalCtrl, miembrosService) {
        this.alertCtrl = alertCtrl;
        this.axios = axios;
        this.globalSer = globalSer;
        this.modalCtrl = modalCtrl;
        this.miembrosService = miembrosService;
        this.selectedUser = null;
        this.word = null;
        this.listFilter = [];
        this.queryParams = {
            limit: 50,
            page: 1,
            word: null,
            input: 'names',
            value: 1
        };
        this.members = [];
        this.handleAdd = (id) => this.addToSelected(id);
        this.handleRemove = () => this.removeOfSelected();
    }
    ngOnInit() {
        // this.listFilter = this.data || [];
        this.getMembers();
    }
    getMembers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // if (this.init) this.init = false;
            // this.searching = true;
            const data = yield this.miembrosService.getUsersList(this.queryParams);
            if (data && !data.error)
                this.members = data || [];
            else if (data && data.error) {
                yield this.globalSer.errorSession();
                this.members = [];
            }
            else
                this.members = [];
            // this.searching = false;
        });
    }
    closeModal(data = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss(data);
        });
    }
    addToSelected(id) {
        this.selectedUser = this.members.find(u => u._id === id) || null;
    }
    removeOfSelected() {
        this.selectedUser = null;
    }
    checkAdded(id) {
        return this.selectedUser ? this.selectedUser._id === id : false;
    }
    findMember() {
        if (this.timer)
            clearTimeout(this.timer);
        this.timer = setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.word) {
                this.queryParams.word = this.word.toString().trim();
                yield this.getMembers();
            }
            else {
                this.queryParams.word = null;
                this.members = [];
            }
        }), 300);
        // if (this.word) {
        //   const term = new RegExp(this.word, 'i');
        //   this.listFilter = this.data.filter(d => {
        //     return term.exec(d.names) || term.exec(d.lastNames) || term.exec(d.phone) || term.exec(d.document);
        //   });
        // }
        // else this.listFilter = this.data;
    }
    confirmAdd() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.selectedUser)
                yield this.closeModal(this.selectedUser);
            else {
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero no debe seleccionar a un miembro.');
            }
        });
    }
};
MiembrosConsolidadosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_5__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _miembros_miembros_service__WEBPACK_IMPORTED_MODULE_7__["MiembrosService"] }
];
MiembrosConsolidadosPage.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    selectedUser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
MiembrosConsolidadosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-miembros-consolidados',
        template: _raw_loader_miembros_consolidados_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_miembros_consolidados_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MiembrosConsolidadosPage);



/***/ }),

/***/ "wJOZ":
/*!****************************************************!*\
  !*** ./src/app/views/miembros/miembros.service.ts ***!
  \****************************************************/
/*! exports provided: MiembrosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiembrosService", function() { return MiembrosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");




let MiembrosService = class MiembrosService {
    constructor(axios, globalSer) {
        this.axios = axios;
        this.globalSer = globalSer;
    }
    getUsersCounters(query = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/admin/users/counters', query);
            if (res && res.success)
                return res.data.totals;
            return this.globalSer.altResponse(res);
        });
    }
    getUsersList(query = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/admin/users', query);
            if (res && res.success)
                return res.data.users || [];
            return this.globalSer.altResponse(res);
        });
    }
    getAllUsers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/admin/users/download');
            if (res && res.success)
                return res.data.members || null;
            return this.globalSer.altResponse(res);
        });
    }
    registerUser(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.postData('/admin/users', data);
            if (res && res.success)
                return res.data;
            return this.globalSer.altResponse(res);
        });
    }
    // to register member modals
    getMembersList(query = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/members', query);
            if (res && res.success)
                return res.data.members || [];
            return this.globalSer.altResponse(res);
        });
    }
    getFamiliesGroupsList(query = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/families-groups', query);
            if (res && res.success)
                return res.data.groups || [];
            return this.globalSer.altResponse(res);
        });
    }
};
MiembrosService.ctorParameters = () => [
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_2__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }
];
MiembrosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MiembrosService);



/***/ })

}]);
//# sourceMappingURL=common.js.map