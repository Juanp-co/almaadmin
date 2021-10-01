(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-ajustes-ajustes-module"],{

/***/ "PGY5":
/*!***********************************************!*\
  !*** ./src/app/views/ajustes/ajustes.page.ts ***!
  \***********************************************/
/*! exports provided: AjustesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjustesPage", function() { return AjustesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ajustes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ajustes.page.html */ "hRmM");
/* harmony import */ var _ajustes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajustes.page.scss */ "ap0U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ajustes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ajustes.service */ "W6Ut");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Utils/validations.functions */ "OmbT");







let AjustesPage = class AjustesPage {
    constructor(ajustesService, globalSer) {
        this.ajustesService = ajustesService;
        this.globalSer = globalSer;
        this.views = {
            links: true,
            logos: true,
            banners: true,
        };
        this.params = {
            facebook: null,
            instagram: null,
            twitter: null,
            web: null,
            youtube: null,
            logos: null,
            banners: null,
        };
        this.formLinks = {
            facebook: null,
            instagram: null,
            twitter: null,
            web: null,
            youtube: null,
        };
        this.formPic = {
            picture: null,
            active: false
        };
        this.formBanners = false;
        this.formLogos = false;
        this.updatePictureValueForm = (picture) => this.setPictureValue(picture);
        this.handleChangeStatusLogoOrBanner = (type, id, action) => this.changeStatusLogoOrBanner(type, id, action);
        this.handleDeleteLogoOrBanner = (type, id) => this.deleteLogoOrBanner(type, id);
    }
    ngOnInit() {
        this.getSettings();
    }
    getSettings() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.ajustesService.getSettings();
            if (data && !data.error) {
                this.params = Object.assign(Object.assign({}, this.params), data);
                this.formLinks.facebook = this.params.facebook;
                this.formLinks.instagram = this.params.instagram;
                this.formLinks.twitter = this.params.twitter;
                this.formLinks.web = this.params.web;
                this.formLinks.youtube = this.params.youtube;
                yield this.globalSer.dismissLoading();
            }
            else if (data && data.error)
                yield this.globalSer.errorSession();
            else
                yield this.globalSer.dismissLoading();
        });
    }
    updateLinks() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const res = yield this.ajustesService.updateLinksSettings(Object.assign({}, this.formLinks));
            if (res && !res.error) {
                const { data, msg } = res;
                this.params = Object.assign(Object.assign({}, this.params), data);
                this.params.banners = yield this.params.banners.reverse();
                this.params.logos = yield this.params.logos.reverse();
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', msg || 'Se han actualizado la información exitosamente.');
            }
            else if (res && res.error)
                yield this.globalSer.errorSession();
            else
                yield this.globalSer.dismissLoading();
        });
    }
    uploadLogoOrBanner(type) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const res = yield this.ajustesService.uploadLogosOrBannerSettings(type, Object.assign({}, this.formPic));
            if (res && !res.error) {
                const { data, msg } = res;
                if (this.params[type])
                    this.params[type] = [data, ...this.params[type]];
                else
                    this.params[type] = [data];
                (_a = this.params[type]) === null || _a === void 0 ? void 0 : _a.forEach(i => {
                    if (data.active && i._id !== data._id)
                        i.active = false;
                });
                this.setShowFormLogosOrBanners(type === 'logos' ? 'formLogos' : 'formBanners');
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', msg || 'Se han subido la imagen exitosamente.');
            }
            else if (res && res.error)
                yield this.globalSer.errorSession();
            else
                yield this.globalSer.dismissLoading();
        });
    }
    changeStatusLogoOrBanner(type, id, action) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const res = yield this.ajustesService.changeStatusLogosOrBannerSettings(id, type, action);
            if (res && !res.error) {
                const { data, msg } = res;
                (_a = this.params[type]) === null || _a === void 0 ? void 0 : _a.forEach(i => {
                    if (i._id === id)
                        i.active = data.active;
                    else
                        i.active = false;
                });
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', msg || 'Se han actualizado la información exitosamente.');
            }
            else if (res && res.error)
                yield this.globalSer.errorSession();
            else
                yield this.globalSer.dismissLoading();
        });
    }
    deleteLogoOrBanner(type, id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const res = yield this.ajustesService.deleteLogosOrBannerSettings(id, type);
            if (res && !res.error) {
                this.params[type] = this.params[type].filter((i) => i._id !== id);
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', (res === null || res === void 0 ? void 0 : res.msg) || 'Se ha eliminado la imagen exitosamente.');
            }
            else if (res && res.error)
                yield this.globalSer.errorSession();
            else
                yield this.globalSer.dismissLoading();
        });
    }
    setPictureValue(picture) {
        this.formPic.picture = picture;
    }
    setShowView(view) {
        this.views[view] = !this.views[view];
    }
    setShowFormLogosOrBanners(formParam) {
        if (this[formParam]) {
            this.formPic = {
                picture: null,
                active: false
            };
        }
        this[formParam] = !this[formParam];
    }
    /* Actions links */
    validateLinks() {
        const { facebook, instagram, twitter, web, youtube } = this.formLinks;
        let msg = null;
        if (facebook && !Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_6__["checkFacebookUrl"])(facebook))
            msg = 'La URL de facebook es incorrecta.';
        else if (instagram && !Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_6__["checkInstagramUrl"])(instagram))
            msg = 'La URL de instagram es incorrecta.';
        else if (twitter && !Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_6__["checkTwitterUrl"])(twitter))
            msg = 'La URL de twitter es incorrecta.';
        else if (web && !Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_6__["checkUrl"])(web))
            msg = 'La URL del sitio web es incorrecta.';
        else if (youtube && !Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_6__["checkYoutubeUrl"])(youtube))
            msg = 'La URL de youtube es incorrecta.';
        return msg;
    }
    confirmUpdateLinks() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validate = this.validateLinks();
            if (validate)
                yield this.globalSer.presentAlert('Error', validate);
            else {
                yield this.globalSer.alertConfirm({
                    header: 'Confirme',
                    message: `¿Está seguro qué desea actualizar los enlaces de las redes sociales?`,
                    confirmAction: () => this.updateLinks(),
                });
            }
        });
    }
    /* Actions logos */
    validateFormPic() {
        if (!this.formPic.picture)
            return `Disculpe, pero debe cargar una imagen.`;
        return null;
    }
    confirmUploadPicture(type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validate = this.validateFormPic();
            if (validate)
                yield this.globalSer.presentAlert('Error', validate);
            else {
                yield this.globalSer.alertConfirm({
                    header: 'Confirme',
                    message: `¿Está seguro qué desea subir ${type === 'formLogos' ? 'este logo' : 'esta portada'}?`,
                    confirmAction: () => this.uploadLogoOrBanner(type === 'formLogos' ? 'logos' : 'banners'),
                });
            }
        });
    }
};
AjustesPage.ctorParameters = () => [
    { type: _ajustes_service__WEBPACK_IMPORTED_MODULE_4__["AjustesService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] }
];
AjustesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ajustes',
        template: _raw_loader_ajustes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ajustes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AjustesPage);



/***/ }),

/***/ "W6Ut":
/*!**************************************************!*\
  !*** ./src/app/views/ajustes/ajustes.service.ts ***!
  \**************************************************/
/*! exports provided: AjustesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjustesService", function() { return AjustesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");




let AjustesService = class AjustesService {
    constructor(axios, globalSer) {
        this.axios = axios;
        this.globalSer = globalSer;
    }
    getSettings() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/admin/settings');
            if (res && res.success)
                return res.data.data || {};
            return this.globalSer.altResponse(res);
        });
    }
    updateLinksSettings(data = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.putData('/admin/settings', data);
            if (res && res.success)
                return res.data || {};
            return this.globalSer.altResponse(res);
        });
    }
    uploadLogosOrBannerSettings(link, data = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.postData(`/admin/settings/${link}`, data);
            if (res && res.success)
                return res.data || {};
            return this.globalSer.altResponse(res);
        });
    }
    changeStatusLogosOrBannerSettings(_id, link, action = 'disable') {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.putData(`/admin/settings/${link}/${_id}/${action}`);
            if (res && res.success)
                return res.data || {};
            return this.globalSer.altResponse(res);
        });
    }
    deleteLogosOrBannerSettings(_id, link) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.deleteData(`/admin/settings/${link}/${_id}`);
            if (res && res.success)
                return res.data || {};
            return this.globalSer.altResponse(res);
        });
    }
};
AjustesService.ctorParameters = () => [
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_2__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }
];
AjustesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AjustesService);



/***/ }),

/***/ "ap0U":
/*!*************************************************!*\
  !*** ./src/app/views/ajustes/ajustes.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".max-height-400 {\n  max-height: 400px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FqdXN0ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBQ0YiLCJmaWxlIjoiYWp1c3Rlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF4LWhlaWdodC00MDAge1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4iXX0= */");

/***/ }),

/***/ "hRmM":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/ajustes/ajustes.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Ajustes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-card>\n        <ion-card-header class=\"ion-no-padding ion-no-margin\">\n          <ion-toolbar color=\"primary\">\n            <ion-buttons slot=\"start\">\n              <ion-button (click)=\"setShowView('links')\">\n                <ion-icon name=\"chevron-{{views.links ? 'up' : 'down' }}-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-title>Enlaces redes sociales</ion-title>\n          </ion-toolbar>\n        </ion-card-header>\n        <ion-card-content class=\"{{views.links ? '' : 'ion-hide'}} ion-no-padding\">\n          <ion-row class=\"ion-margin-top\">\n            <ion-col size=\"12\" class=\"ion-padding\">\n              <ion-text>\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <i>\n                  Agregue en este apartado los enlaces a redes sociales que se mostrarán en la app.\n                  Asegúrese que las URLs que proporcione se encuentren activas antes de guardar los cambios.\n                </i>\n              </ion-text>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"4\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">URL Facebook</ion-label>\n                <ion-input [(ngModel)]=\"formLinks.facebook\" type=\"url\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"4\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">URL Instagram</ion-label>\n                <ion-input [(ngModel)]=\"formLinks.instagram\" type=\"url\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"4\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">URL Twitter</ion-label>\n                <ion-input [(ngModel)]=\"formLinks.twitter\" type=\"url\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"6\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">URL Sitio Web</ion-label>\n                <ion-input [(ngModel)]=\"formLinks.web\" type=\"url\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"6\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">URL Youtube</ion-label>\n                <ion-input [(ngModel)]=\"formLinks.youtube\" type=\"url\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" class=\"ion-margin-top ion-margin-bottom ion-text-center\">\n              <ion-button color=\"primary\" (click)=\"confirmUpdateLinks()\">\n                <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Guardar</ion-text>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n    <ion-col size=\"12\" size-md=\"6\">\n      <ion-card>\n        <ion-card-header class=\"ion-no-padding ion-no-margin\">\n          <ion-toolbar color=\"primary\">\n            <ion-buttons slot=\"start\" *ngIf=\"!formLogos\">\n              <ion-button (click)=\"setShowView('logos')\">\n                <ion-icon name=\"chevron-{{views.logos ? 'up' : 'down' }}-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-title>Logos</ion-title>\n            <ion-buttons slot=\"end\" *ngIf=\"!formBanners && views.logos\">\n              <ion-button (click)=\"setShowFormLogosOrBanners('formLogos')\">\n                <ion-icon name=\"{{formLogos ? 'close' : 'create'}}-outline\" slot=\"start\"></ion-icon>\n                <ion-text *ngIf=\"!formLogos\">Nuevo logo</ion-text>\n                <ion-text *ngIf=\"formLogos\">Cancelar</ion-text>\n              </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-card-header>\n        <ion-card-content class=\"{{views.logos ? '' : 'ion-hide'}} ion-no-padding\">\n          <ion-row>\n            <ion-col size=\"12\" class=\"ion-margin-top ion-margin-bottom ion-text-center\" *ngIf=\"formLogos && !formBanners\">\n              <ion-row class=\"ion-align-items-center\">\n                <ion-col size=\"12\" class=\"ion-padding\">\n                  <ion-text>\n                    <ion-icon name=\"information-circle-outline\"></ion-icon>\n                    <i>\n                      En esta sección, deberá cargar el logo principal que se mostrará en la aplicación.\n                    </i>\n                  </ion-text>\n                </ion-col>\n                <ion-col size=\"12\">\n                  <app-files-upload\n                    [picture]=\"formPic.picture\"\n                    [showInImg]=\"true\"\n                    [height]=\"150\"\n                    [handleSave]=\"updatePictureValueForm\"\n                  >\n                  </app-files-upload>\n                </ion-col>\n                <ion-col size=\"12\">\n                  <ion-item>\n                    <ion-toggle [(ngModel)]=\"formPic.active\" slot=\"start\" color=\"primary\"></ion-toggle>\n                    <ion-label>Activar logo para mostrar en app.</ion-label>\n                  </ion-item>\n                </ion-col>\n\n                <ion-col size=\"12\" class=\"ion-margin-top ion-margin-bottom ion-text-center\">\n                  <ion-button color=\"primary\" (click)=\"confirmUploadPicture('formLogos')\">\n                    <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\n                    <ion-text>Guardar</ion-text>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"12\" *ngIf=\"!formLogos\">\n              <ion-row>\n                <ion-col *ngIf=\"!params.logos\">\n                  <app-loader-lists-images></app-loader-lists-images>\n                </ion-col>\n                <ion-col class=\"ion-no-margin ion-no-padding \" *ngIf=\"params.banners\">\n                  <ion-row>\n                    <ion-col *ngIf=\"params.logos.length > 0; else noLogos\">\n                      <div class=\"max-height-400\">\n                        <ion-list>\n                          <app-banners-logos-card\n                            *ngFor=\"let l of params.logos\"\n                            [data]=\"l\"\n                            [handleChangeStatus]=\"handleChangeStatusLogoOrBanner\"\n                            [handleDeleteLogoOrBanner]=\"handleDeleteLogoOrBanner\"\n                          ></app-banners-logos-card>\n                        </ion-list>\n                      </div>\n                    </ion-col>\n                    <ng-template #noLogos>\n                      <ion-col size=\"12\" class=\"ion-margin-top ion-margin-bottom\">\n                        <ion-text color=\"medium\">\n                          <p class=\"ion-text-center\">\n                            <ion-icon name=\"alert-circle-outline\"></ion-icon> No se han cargado logos.\n                          </p>\n                        </ion-text>\n                      </ion-col>\n                    </ng-template>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n    <ion-col size=\"12\" size-md=\"6\">\n      <ion-card>\n        <ion-card-header class=\"ion-no-padding ion-no-margin\">\n          <ion-toolbar color=\"primary\">\n            <ion-buttons slot=\"start\" *ngIf=\"!formBanners\">\n              <ion-button (click)=\"setShowView('banners')\">\n                <ion-icon name=\"chevron-{{views.banners ? 'up' : 'down' }}-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-title>Portadas</ion-title>\n            <ion-buttons slot=\"end\" *ngIf=\"!formLogos && views.banners\">\n              <ion-button (click)=\"setShowFormLogosOrBanners('formBanners')\">\n                <ion-icon name=\"{{formBanners ? 'close' : 'create'}}-outline\" slot=\"start\"></ion-icon>\n                <ion-text *ngIf=\"!formBanners\">Nueva portada</ion-text>\n                <ion-text *ngIf=\"formBanners\">Cancelar</ion-text>\n              </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-card-header>\n        <ion-card-content class=\"{{views.banners ? '' : 'ion-hide'}} ion-no-padding\">\n          <ion-row>\n            <ion-col size=\"12\" class=\"ion-margin-top ion-margin-bottom ion-text-center\" *ngIf=\"!formLogos && formBanners\">\n              <ion-row class=\"ion-align-items-center\">\n                <ion-col size=\"12\" class=\"ion-padding\">\n                  <ion-text>\n                    <ion-icon name=\"information-circle-outline\"></ion-icon>\n                    <i>\n                      En esta sección, deberá cargar la foto de portada que se mostrará en la aplicación.\n                    </i>\n                  </ion-text>\n                </ion-col>\n                <ion-col size=\"12\">\n                  <app-files-upload\n                    [picture]=\"formPic.picture\"\n                    [showInImg]=\"true\"\n                    [height]=\"150\"\n                    [handleSave]=\"updatePictureValueForm\"\n                  >\n                  </app-files-upload>\n                </ion-col>\n                <ion-col size=\"12\">\n                  <ion-item>\n                    <ion-toggle [(ngModel)]=\"formPic.active\" slot=\"start\" color=\"primary\"></ion-toggle>\n                    <ion-label>Activar portada para mostrarla en app.</ion-label>\n                  </ion-item>\n                </ion-col>\n\n                <ion-col size=\"12\" class=\"ion-margin-top ion-margin-bottom ion-text-center\">\n                  <ion-button color=\"primary\" (click)=\"confirmUploadPicture('formBanners')\">\n                    <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\n                    <ion-text>Guardar</ion-text>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"12\" *ngIf=\"!formBanners\">\n              <ion-row>\n                <ion-col *ngIf=\"!params.banners\">\n                  <app-loader-lists-images></app-loader-lists-images>\n                </ion-col>\n                <ion-col class=\"ion-no-margin ion-no-padding \" *ngIf=\"params.banners\">\n                  <ion-row>\n                    <ion-col *ngIf=\"params.banners.length > 0;else noBanners\">\n                      <div class=\"max-height-400\">\n                        <ion-list>\n                          <app-banners-logos-card\n                            *ngFor=\"let b of params.banners\"\n                            [data]=\"b\"\n                            type=\"portada\"\n                            [handleChangeStatus]=\"handleChangeStatusLogoOrBanner\"\n                            [handleDeleteLogoOrBanner]=\"handleDeleteLogoOrBanner\"\n                          ></app-banners-logos-card>\n                        </ion-list>\n                      </div>\n                    </ion-col>\n                    <ng-template #noBanners>\n                      <ion-col size=\"12\" class=\"ion-margin-top ion-margin-bottom\">\n                        <ion-text color=\"medium\">\n                          <p class=\"ion-text-center\">\n                            <ion-icon name=\"alert-circle-outline\"></ion-icon> No se han cargado portadas.\n                          </p>\n                        </ion-text>\n                      </ion-col>\n                    </ng-template>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n    <ion-col size=\"12\" class=\"ion-margin-top ion-margin-bottom\">\n      <br>\n    </ion-col>\n  </ion-row>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "kqz/":
/*!*********************************************************!*\
  !*** ./src/app/views/ajustes/ajustes-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AjustesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjustesPageRoutingModule", function() { return AjustesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ajustes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajustes.page */ "PGY5");




const routes = [
    {
        path: '',
        component: _ajustes_page__WEBPACK_IMPORTED_MODULE_3__["AjustesPage"]
    }
];
let AjustesPageRoutingModule = class AjustesPageRoutingModule {
};
AjustesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AjustesPageRoutingModule);



/***/ }),

/***/ "tY4H":
/*!*************************************************!*\
  !*** ./src/app/views/ajustes/ajustes.module.ts ***!
  \*************************************************/
/*! exports provided: AjustesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjustesPageModule", function() { return AjustesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ajustes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ajustes-routing.module */ "kqz/");
/* harmony import */ var _ajustes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ajustes.page */ "PGY5");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let AjustesPageModule = class AjustesPageModule {
};
AjustesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ajustes_routing_module__WEBPACK_IMPORTED_MODULE_5__["AjustesPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_ajustes_page__WEBPACK_IMPORTED_MODULE_6__["AjustesPage"]]
    })
], AjustesPageModule);



/***/ })

}]);
//# sourceMappingURL=views-ajustes-ajustes-module.js.map