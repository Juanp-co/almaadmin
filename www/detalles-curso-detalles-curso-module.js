(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detalles-curso-detalles-curso-module"],{

/***/ "/saB":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/cursos/detalles-curso/modal-preview-tema/modal-preview-tema.page.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ titleModal }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf=\"data\">\n    <ion-card-content>\n      <ion-row>\n        <ion-col class=\"ion-margin-bottom\" [size]=\"12\" *ngIf=\"data.urlVideo\">\n          <app-video-player urlVideo=\"{{data.urlVideo}}\"></app-video-player>\n        </ion-col>\n\n        <ion-col [size]=\"12\" *ngIf=\"data.description\">\n          <div [innerHTML]=\"data.description\"></div>\n        </ion-col>\n\n        <ion-col [size]=\"12\"*ngIf=\"!infoToShow.contentView\">\n          <ion-row>\n            <ion-col [size]=\"12\" *ngIf=\"data.content && data.content.length > 0; else noContent\">\n              <ion-text class=\"ion-margin-top\"><b>Lista de contenido:</b></ion-text>\n              <ion-list>\n                <ion-item *ngFor=\"let c of data.content\">\n                  <ion-icon name=\"albums-outline\"></ion-icon>&nbsp;\n                  <ion-text>{{c.title}}</ion-text>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n\n            <ng-template #noContent>\n              <ion-col [size]=\"12\">\n                <ion-text>\n                  <p class=\"ion-margin-top ion-padding-top ion-text-center no-selected-text\">\n                    <ion-icon name=\"alert-circle-outline\"></ion-icon> No se ha registado contenido para este el tema.\n                  </p>\n                </ion-text>\n              </ion-col>\n            </ng-template>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "0Vqz":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/cursos/detalles-curso/modal-editar-tema/modal-editar-tema.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: ModalEditarTemaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditarTemaPage", function() { return ModalEditarTemaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_editar_tema_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-editar-tema.page.html */ "pGab");
/* harmony import */ var _modal_editar_tema_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-editar-tema.page.scss */ "TgFg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "+z1p");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _cursos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../cursos.service */ "BpEJ");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/global.service */ "4WDQ");








let ModalEditarTemaPage = class ModalEditarTemaPage {
    constructor(alertCtrl, globalSer, modalCtrl, cursosService) {
        this.alertCtrl = alertCtrl;
        this.globalSer = globalSer;
        this.modalCtrl = modalCtrl;
        this.cursosService = cursosService;
        this.titleModal = 'Crear tema';
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5__;
        this.configEditor = null;
        this.formData = {
            title: null,
            description: null,
        };
        this.configEditor = this.globalSer.configEditor;
    }
    ngOnInit() {
        if (this.title) {
            this.formData.title = this.title;
            this.titleModal = `Editar: ${this.title}`;
        }
        if (this.description)
            this.formData.description = this.description;
    }
    closeModal(data = null) {
        this.modalCtrl.dismiss(data);
    }
    createTheme() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const updated = yield this.cursosService.createThemeCourse(this.id, this.formData);
            if (updated && !updated.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('Alerta', 'Se ha agregado el tema exitosamente.');
                this.closeModal(updated);
            }
            else if (updated && updated.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    updateTheme() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const updated = yield this.cursosService.updateThemeCourse(this.id, this.themeId, this.formData);
            if (updated && !updated.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('Alerta', 'Se ha actualizado el tema exitosamente.');
                this.closeModal({
                    title: updated.title,
                    description: updated.description,
                });
            }
            else if (updated && updated.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    confirmEdit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validated = this.cursosService.validationEdit('theme', this.formData);
            if (!validated) {
                const alert = yield this.alertCtrl.create({
                    header: 'Confirme',
                    message: `¿Está seguro qué desea ${this.themeId ? 'actualizar' : 'agregar'} este tema?`,
                    buttons: [
                        {
                            text: 'Cancelar',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => { }
                        }, {
                            text: 'Sí',
                            handler: () => {
                                if (this.themeId)
                                    this.updateTheme();
                                else
                                    this.createTheme();
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            else {
                yield this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
            }
        });
    }
};
ModalEditarTemaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _cursos_service__WEBPACK_IMPORTED_MODULE_6__["CursosService"] }
];
ModalEditarTemaPage.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    themeId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ModalEditarTemaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-editar-tema',
        template: _raw_loader_modal_editar_tema_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_editar_tema_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalEditarTemaPage);



/***/ }),

/***/ "9YTG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/cursos/detalles-curso/modal-editar-pregunta/modal-editar-pregunta.page.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n    </ion-buttons>\n    <ion-title>{{ titleModal }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button\n        [disabled]=\"enableButtonSave()\"\n        color=\"primary\"\n        (click)=\"confirmEdit()\"\n      >\n        <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Guardar</ion-text>\n      </ion-button>\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Cancelar</ion-text>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col [size]=\"6\">\n      <ion-row>\n        <ion-col [size]=\"12\">\n          <ion-label>\n            <ion-icon name=\"settings-outline\" slot=\"start\"></ion-icon>&nbsp;\n            <ion-text><b>Generador de pregunta</b></ion-text>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-card class=\"ion-no-padding\">\n        <ion-card-content class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Título de la pregunta (*)</ion-label>\n                <ion-input\n                  [(ngModel)]=\"formData.title\"\n                  maxlength=\"100\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Descripción</ion-label>\n                <ion-textarea\n                  [(ngModel)]=\"formData.description\"\n                  rows=\"4\"\n                  cols=\"20\"\n                  placeholder=\"Ingresa alguna descripción para la pregunta (opcional)...\"\n                  maxlength=\"150\"\n                ></ion-textarea>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Tipo de campo (*)</ion-label>\n                <ion-input\n                  [readonly]=\"true\"\n                  [value]=\"getInputTypeLabel(formData.inputType)\"\n                  autocomplete=\"off\"\n                  (click)=\"showInputsListAlert()\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" *ngIf=\"formData.inputType && ['text', 'textarea'].indexOf(formData.inputType) > -1\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Mensaje de la caja (opcional)</ion-label>\n                <ion-input\n                  [(ngModel)]=\"formData.placeholder\"\n                  maxlength=\"60\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" *ngIf=\"formData.inputType && ['text', 'textarea'].indexOf(formData.inputType) === -1\">\n              <ion-row class=\"ion-align-items-center\">\n                <ion-col [size]=\"12\">\n                  <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">Respuestas (*)</ion-label>\n                    <ion-input\n                      [disabled]=\"formData.values.length >= 5\"\n                      [(ngModel)]=\"word\"\n                      maxlength=\"50\"\n                      (keyup.enter)=\"addValuesInList()\"\n                    ></ion-input>\n                  </ion-item>\n                  <p class=\"ion-text-end\">{{ word ? word.length : 0 }}/50 caracteres.</p>\n                  <p class=\"ion-text-end toSmall\"><i>Presiona ENTER para agregar.</i></p>\n                </ion-col>\n                <ion-col [size]=\"12\">\n                  <ion-chip *ngFor=\"let value of formData.values; let i=index\">\n                    <ion-label>\n                      {{ value }}\n                    </ion-label>\n                    <ion-icon name=\"close\"  (click)=\"removeValueOfList(i)\"></ion-icon>\n                  </ion-chip>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"12\" *ngIf=\"formData.inputType && ['text', 'textarea'].indexOf(formData.inputType) === -1\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Respuesta correcta (*)</ion-label>\n                <ion-select interface=\"alert\" placeholder=\"Selecciona una\" [(ngModel)]=\"formData.correctAnswer\">\n                  <ion-select-option *ngFor=\"let value of formData.values; let i=index\" [value]=\"i\">{{ value }}</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">¿Respuesta obligatoria?</ion-label>\n                <ion-input\n                  [readonly]=\"true\"\n                  [value]=\"formData.require ? 'Si' : 'No'\"\n                  autocomplete=\"off\"\n                  (click)=\"showRequireAlert()\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" class=\"ion-margin-top\">\n              <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col [size]=\"6\" class=\"ion-align-items-center\">\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col [size]=\"12\">\n          <ion-label>\n            <ion-icon name=\"eye-outline\" slot=\"start\"></ion-icon>&nbsp;\n            <ion-text><b>Previsualización</b></ion-text>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>{{ formData.title || 'Sin título' }}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-text class=\"toSmall\" *ngIf=\"formData.description\"><p>{{formData.description}}</p></ion-text>\n\n          <div *ngIf=\"formData.inputType === 'text'\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">{{ formData.placeholder || 'Indique su respuesta' }}</ion-label>\n              <ion-input [required]=\"formData.require\"></ion-input>\n            </ion-item>\n          </div>\n          <div *ngIf=\"formData.inputType === 'textarea'\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">{{ formData.placeholder || 'Indique su respuesta' }}</ion-label>\n              <ion-textarea\n                rows=\"4\"\n                cols=\"20\"\n                [required]=\"formData.require\"\n              ></ion-textarea>\n            </ion-item>\n          </div>\n          <div *ngIf=\"formData.inputType === 'radio'\">\n            <ion-radio-group>\n              <ion-list *ngFor=\"let value of formData.values; let i=index\">\n                <ion-item>\n                  <ion-radio slot=\"start\" value=\"{{i}}\"></ion-radio>\n                  <ion-text>{{ value }}</ion-text>\n                </ion-item>\n              </ion-list>\n            </ion-radio-group>\n          </div>\n          <div *ngIf=\"formData.inputType === 'checkbox'\">\n            <ion-list>\n              <ion-item *ngFor=\"let value of formData.values\">\n                <ion-checkbox slot=\"start\"></ion-checkbox>\n                <ion-text>{{ value }}</ion-text>\n              </ion-item>\n            </ion-list>\n          </div>\n\n          <ion-text *ngIf=\"formData.require\"><i>(*) Obligatoria </i></ion-text>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "DYwa":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/cursos/detalles-curso/modal-cursos-previos/modal-cursos-previos.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: ModalCursosPreviosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCursosPreviosPage", function() { return ModalCursosPreviosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_cursos_previos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-cursos-previos.page.html */ "rIVv");
/* harmony import */ var _modal_cursos_previos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-cursos-previos.page.scss */ "Yj8q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cursos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cursos.service */ "BpEJ");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/global.service */ "4WDQ");







let ModalCursosPreviosPage = class ModalCursosPreviosPage {
    constructor(alertCtrl, globalSer, modalCtrl, cursosService) {
        this.alertCtrl = alertCtrl;
        this.globalSer = globalSer;
        this.modalCtrl = modalCtrl;
        this.cursosService = cursosService;
        this.id = null;
        this.listIdsIgnore = [];
        this.queryParams = {
            input: 'title',
            value: 1,
            page: 1,
            limit: 25,
            ignoreIds: [],
            title: null
        };
        this.courses = [];
        this.listAdded = [];
        this.listAddedObjs = [];
        this.totals = 0;
        this.pages = 0;
        this.page = 1;
        this.handleAddOrRemove = (id) => { this.addOrRemoveId(id); };
        this.handlePage = (page) => {
            this.queryParams.page = page;
            this.getCoursesList();
        };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.listIdsIgnore)
                this.queryParams.ignoreIds = this.listIdsIgnore.toString();
            yield this.getTotals();
        });
    }
    closeModal(data = null) {
        this.modalCtrl.dismiss(data);
    }
    getTotals() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.totals = 0;
            this.pages = 0;
            const totals = yield this.cursosService.getCoursesTotals(this.queryParams);
            if (!!totals && totals >= 0 && !totals.error) {
                this.totals = totals;
                this.pages = this.globalSer.getPagination(totals, this.queryParams.limit);
                if (totals > 0)
                    yield this.getCoursesList();
                else {
                    this.queryParams.page = 1;
                    this.pages = 0;
                    this.courses = [];
                }
            }
            else if (!!totals && totals.error) {
                this.queryParams.page = 1;
                this.pages = 0;
                this.courses = [];
                if (totals.status && totals.status === 401) {
                    yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero no se encontró una sesión activa.');
                    this.closeModal();
                }
            }
            else {
                this.queryParams.page = 1;
                this.pages = 0;
                this.courses = [];
            }
        });
    }
    getCoursesList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // if (this.showFilter) this.showFilter = false;
            yield this.globalSer.presentLoading();
            const data = yield this.cursosService.getCourses(this.queryParams);
            if (data && !data.error) {
                this.courses = data;
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
    addCourses() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const added = yield this.cursosService.addLevelCourse(this.id, { listIds: this.listAdded });
            if (added && !added.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', added || 'Se ha cambiado la imagen el curso exitosamente.');
                yield this.closeModal(this.listAddedObjs);
            }
            else if (added && added.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    // actions
    addOrRemoveId(id) {
        const index = this.listAdded.indexOf(id);
        if (index === -1) {
            const course = this.courses.find(c => c._id === id);
            if (course) {
                this.listAdded.push(id);
                this.listAddedObjs.push(course);
            }
        }
        else {
            this.listAdded.splice(index, 1);
            this.listAddedObjs.splice(index, 1);
        }
    }
    checkAddedId(id) {
        return this.listAdded.indexOf(id) > -1;
    }
    // query actions
    findData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.queryParams.page = 1;
            this.pages = 0;
            this.courses = null;
            yield this.getTotals();
        });
    }
    setSortOrder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.queryParams.value = this.queryParams.value === 1 ? -1 : 1;
            this.queryParams.page = 1;
            this.courses = null;
            yield this.getCoursesList();
        });
    }
    setQueryValues() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Cursos por página',
                inputs: [
                    {
                        name: `results-per-page`,
                        type: 'radio',
                        label: `5`,
                        value: 5,
                        checked: this.queryParams.limit === 5,
                    },
                    {
                        name: `results-per-page`,
                        type: 'radio',
                        label: `10`,
                        value: 10,
                        checked: this.queryParams.limit === 10,
                    },
                    {
                        name: `results-per-page`,
                        type: 'radio',
                        label: `25`,
                        value: 25,
                        checked: this.queryParams.limit === 25,
                    },
                    {
                        name: `results-per-page`,
                        type: 'radio',
                        label: `50`,
                        value: 50,
                        checked: this.queryParams.limit === 50,
                    },
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => { }
                    },
                    {
                        text: 'Ok',
                        handler: (selectedValue) => {
                            this.queryParams.limit = selectedValue;
                            this.queryParams.page = 1;
                            this.pages = this.globalSer.getPagination(this.totals, this.queryParams.limit);
                            this.courses = null;
                            this.getCoursesList();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    confirmAdd() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let showConfirm = true;
            if (this.listAdded.length === 0) {
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero debe seleccionar al menos un curso.');
                showConfirm = false;
            }
            let message = '¿Está seguro qué desea agregar los siguientes cursos al listado?<br>';
            this.listAddedObjs.forEach(a => {
                message += `<br>- <b>${a.title}.</b>`;
            });
            if (showConfirm) {
                const alert = yield this.alertCtrl.create({
                    cssClass: 'max-width-640',
                    header: 'Confirme',
                    message,
                    buttons: [
                        {
                            text: 'Cancelar',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => { }
                        }, {
                            text: 'Sí',
                            handler: () => {
                                this.addCourses();
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
};
ModalCursosPreviosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _cursos_service__WEBPACK_IMPORTED_MODULE_5__["CursosService"] }
];
ModalCursosPreviosPage.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    listIdsIgnore: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ModalCursosPreviosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-cursos-previos',
        template: _raw_loader_modal_cursos_previos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_cursos_previos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalCursosPreviosPage);



/***/ }),

/***/ "EGjg":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/cursos/detalles-curso/modal-editar-pregunta/modal-editar-pregunta.page.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1lZGl0YXItcHJlZ3VudGEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "ErHH":
/*!********************************************************************!*\
  !*** ./src/app/views/cursos/detalles-curso/detalles-curso.page.ts ***!
  \********************************************************************/
/*! exports provided: DetallesCursoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesCursoPage", function() { return DetallesCursoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalles_curso_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalles-curso.page.html */ "hGwj");
/* harmony import */ var _detalles_curso_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalles-curso.page.scss */ "drB1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");
/* harmony import */ var _cursos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cursos.service */ "BpEJ");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/data.service */ "EnSQ");
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../Utils/validations.functions */ "OmbT");
/* harmony import */ var _modal_editar_tema_modal_editar_tema_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal-editar-tema/modal-editar-tema.page */ "0Vqz");
/* harmony import */ var _modal_preview_tema_modal_preview_tema_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal-preview-tema/modal-preview-tema.page */ "HJ1C");
/* harmony import */ var _modal_editar_contenido_modal_editar_contenido_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal-editar-contenido/modal-editar-contenido.page */ "W7Q1");
/* harmony import */ var _modal_editar_pregunta_modal_editar_pregunta_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modal-editar-pregunta/modal-editar-pregunta.page */ "xGAF");
/* harmony import */ var _modal_preview_prueba_modal_preview_prueba_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modal-preview-prueba/modal-preview-prueba.page */ "h6VQ");
/* harmony import */ var _modal_cursos_previos_modal_cursos_previos_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modal-cursos-previos/modal-cursos-previos.page */ "DYwa");

















let DetallesCursoPage = class DetallesCursoPage {
    constructor(activateRoute, alertCtrl, axios, dataService, globalSer, cursosService, modalController, navCtrl, router) {
        this.activateRoute = activateRoute;
        this.alertCtrl = alertCtrl;
        this.axios = axios;
        this.dataService = dataService;
        this.globalSer = globalSer;
        this.cursosService = cursosService;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.roles = [];
        this.title = 'Cargando...';
        this.id = null;
        this.staticData = null;
        this.course = null;
        this.edit = false;
        this.editBanner = false;
        this.banner = null;
        this.totalsUsers = 0;
        this.views = {
            info: {
                show: true,
                edit: false,
                title: 'Información del curso',
                data: {
                    title: null,
                    description: null,
                    toRoles: null,
                    speaker: null,
                    speakerPosition: null,
                }
            },
            temary: { show: false, title: 'Temas', data: [] },
            test: { show: false, title: 'Pruebas', data: [] },
            levels: { show: false, title: 'Cursos previos requeridos', data: [] },
            publish: { show: false, title: 'Publicar curso', enable: false },
        };
        this.formData = {
            temary: { show: false, title: 'Temas del curso' },
            test: { show: false, title: 'Pruebas' },
            levels: { show: false, title: 'Niveles previos al curso' },
        };
        this.formDataInfo = null;
        // handles to components
        this.cancelEditInfo = () => { this.setShowEditInfo('info'); };
        this.saveEditInfo = (data) => { this.updateCourse(data); };
        this.cancelEditBanner = () => { this.setShowBannerEdit(); };
        this.saveEditBanner = (data) => { this.updateBanner(data); };
        this.showPreviewModal = (themeId, contentId = null) => { this.modalPreviewTheme(themeId, contentId); };
        this.showEditTheme = (id) => { this.modalTheme(id); };
        this.showEditContent = (themeId, contentId = null) => { this.modalEditContent(themeId, contentId); };
        this.showDeleteConfirmTheme = (themeId) => { this.deleteThemeConfirm(themeId); };
        this.showDeleteConfirmContent = (themeId, contentId) => { this.deleteContentConfirm(themeId, contentId); };
        this.showPreviewTest = (themeId) => { this.modalPreviewTest(themeId); };
        this.showEditQuestion = (themeId, questionId = null) => { this.modalEditQuestion(themeId, questionId); };
        this.showDeleteConfirmQuestion = (themeId, questionId) => { this.deleteQuestionConfirm(themeId, questionId); };
        this.showDeleteConfirmLevel = (levelId) => { this.deleteLevelConfirm(levelId); };
        // check if exist session
        if (!this.globalSer.checkSession())
            this.router.navigate(['/ingresar']);
        else {
            this.roles = this.cursosService.roles;
        }
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.id = this.activateRoute.snapshot.paramMap.get('id');
            yield this.globalSer.presentLoading();
            const data = yield this.cursosService.getCourse(this.id);
            if (data && !data.error) {
                this.staticData = Object.assign({}, data);
                this.course = Object.assign({}, this.staticData);
                this.banner = this.course.banner;
                if (this.banner) {
                    this.staticData.banner = this.banner;
                    this.course.banner = this.course;
                }
                this.views.publish.enable = this.course.enable;
                this.totalsUsers = this.course.totalsUsers || 0;
                this.setDataToView('info', this.course);
                this.setDataToView('temary', this.course.temary);
                this.setDataToView('test', this.course.temary);
                this.setDataToView('levels', this.course.levels);
                this.title = `Detalles: ${this.course.title}`;
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
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.globalSer.checkSession())
                this.router.navigate(['/ingresar']);
        });
    }
    back() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navCtrl.back();
        });
    }
    // actions services
    updateCourse(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const updated = yield this.cursosService.updateCourse('info', this.id, data);
            if (updated && !updated.error) {
                this.staticData = Object.assign(Object.assign({}, this.staticData), updated);
                this.course = Object.assign({}, this.staticData);
                this.setDataToView('info', updated);
                this.views.info.edit = false;
                this.title = `Detalles: ${this.course.title}`;
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado  la información del curso exitosamente.');
            }
            else if (updated && updated.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    deleteCourse() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const deleted = yield this.cursosService.deleteCourse(this.id);
            if (deleted && !deleted.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', deleted || 'Se ha eliminado toda la información del curso exitosamente.');
                this.back();
            }
            else if (deleted && deleted.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    updateBanner(banner) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const updated = yield this.cursosService.updateBannerCourse(this.id, { banner });
            if (updated && !updated.error) {
                this.banner = updated;
                if (this.banner) {
                    this.staticData.banner = this.banner;
                    this.course.banner = this.banner;
                }
                this.editBanner = false;
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', 'Se ha cambiado la imagen el curso exitosamente.');
            }
            else if (updated && updated.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    deleteTheme(themeId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const deleted = yield this.cursosService.deleteThemeCourse(this.id, themeId);
            if (deleted && !deleted.error) {
                this.staticData.temary = this.staticData.temary.filter(c => c._id !== themeId);
                this.course = this.staticData;
                this.setDataToView('temary', this.staticData.temary);
                this.setDataToView('test', this.staticData.temary);
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', deleted || 'Se ha eliminado el tema y su contenido exitosamente.');
            }
            else if (deleted && deleted.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    deleteContent({ themeId, contentId, index1 }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const deleted = yield this.cursosService.deleteContentThemeCourse(this.id, themeId, contentId);
            if (deleted && !deleted.error) {
                this.staticData.temary[index1].content = this.staticData.temary[index1].content.filter(c => c._id !== contentId);
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', 'Se ha eliminado el contenido del tema exitosamente.');
            }
            else if (deleted && deleted.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    deleteQuestion({ themeId, questionId, index1 }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const deleted = yield this.cursosService.deleteQuestionTestThemeCourse(this.id, themeId, questionId);
            if (deleted && !deleted.error) {
                this.staticData.temary[index1].test = this.staticData.temary[index1].test.filter(c => c._id !== questionId);
                this.course.temary[index1].test = this.course.temary[index1].test.filter(c => c._id !== questionId);
                this.views.test.data[index1].test = this.views.test.data[index1].test.filter(c => c._id !== questionId);
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', 'Se ha eliminado la pregunta exitosamente.');
            }
            else if (deleted && deleted.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    deleteLevel(levelId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const deleted = yield this.cursosService.deleteLevelCourse(this.id, levelId);
            if (deleted && !deleted.error) {
                this.staticData.levels = this.staticData.levels.filter(l => l._id !== levelId);
                this.course.levels = this.course.levels.filter(l => l._id !== levelId);
                this.views.levels.data = this.views.levels.data.filter(l => l._id !== levelId);
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', deleted || 'Se ha removido el curso del listado exitosamente.');
            }
            else if (deleted && deleted.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    publishCourse() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.cursosService.publishCourse(this.id);
            if (data && !data.error) {
                this.staticData.enable = data.enable;
                this.course.enable = data.enable;
                this.views.publish.enable = data.enable;
                if (!data.enable) {
                    this.staticData.levels = data.levels || [];
                    this.course.levels = data.levels || [];
                    this.views.levels.data = data.levels || [];
                }
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', data.enable ? 'Se ha publicado el curso exitosamente.' : 'Se ha retirado el curso de la sección pública exitosamente.');
            }
            else if (data && data.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    // views actions
    setShowView(input) {
        this.views[input].show = !this.views[input].show;
    }
    setShowEditInfo(group) {
        if (this.views[group].edit) {
            this.formDataInfo = null;
            this.views[group].edit = false;
        }
        else {
            this.formDataInfo = Object.assign({}, this.views.info.data);
            this.views[group].edit = true;
        }
    }
    setShowBannerEdit() {
        this.editBanner = !this.editBanner;
    }
    // getters and setters
    setDataToView(group, data = []) {
        if (group === 'info') {
            const keys = Object.keys(this.views[group].data);
            keys.forEach(k => {
                if (k === 'description')
                    this.views[group].data[k] = Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["setSaltLinesOrBr"])(data[k], true);
                else
                    this.views[group].data[k] = data[k];
            });
        }
        else if (['levels', 'temary'].indexOf(group) > -1) {
            this.views[group].data = data || [];
        }
        else if (group === 'test') {
            this.views[group].data = data ? data.map(d => {
                return {
                    _id: d._id,
                    title: d.title,
                    test: d.test,
                };
            }) : [];
        }
    }
    // getters and setters
    getRoles(roles) {
        return this.cursosService.getRoles(roles);
    }
    /*
     Information, banner and delete actions
      */
    confirmCourseDelete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertConfirm({
                message: `¿Está seguro qué desea eliminar este curso?<br/><br/>
        <b>NOTA:</b> Se eliminará toda la información registrada.<br/><br/>
        <b><i>ESTA ACCIÓN ES IRREVERSIBLE</i></b>.`,
                confirmAction: () => this.deleteCourse()
            });
        });
    }
    /*
    Content of theme actions
     */
    modalTheme(themeId = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const updateData = (data) => {
                if (data) {
                    const index = this.views.temary.data.findIndex(d => d._id === themeId);
                    if (index > -1) {
                        this.views.temary.data[index].title = data.title;
                        this.views.temary.data[index].description = data.description;
                    }
                    else {
                        this.staticData.temary.push(data);
                        this.views.test.data.push({
                            _id: data._id,
                            title: data.title,
                            test: data.test,
                        });
                    }
                }
            };
            const content = {
                id: this.id,
                themeId,
                title: null,
                description: null,
            };
            let openModal = true;
            if (themeId) {
                const theme = this.views.temary.data.find(d => d._id === themeId);
                if (theme) {
                    content.title = theme.title;
                    content.description = theme.description;
                }
                else {
                    yield this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener el tema a editar.');
                    openModal = false;
                }
            }
            if (openModal) {
                yield this.globalSer.loadModal(_modal_editar_tema_modal_editar_tema_page__WEBPACK_IMPORTED_MODULE_11__["ModalEditarTemaPage"], content, false, updateData);
            }
        });
    }
    modalPreviewTheme(themeId, contentId = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = {
                contentView: false,
                theme: null,
                content: null,
            };
            let openModal = false;
            if (themeId && !contentId) {
                const index = this.views.temary.data.findIndex(d => d._id === themeId);
                if (index > -1) {
                    data.theme = this.views.temary.data[index];
                    openModal = true;
                }
                else
                    yield this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener el tema.');
            }
            else if (themeId && contentId) {
                const index = this.views.temary.data.findIndex(d => d._id === themeId);
                if (index > -1) {
                    const index2 = this.views.temary.data[index].content.findIndex(c => c._id === contentId);
                    if (index2 > -1) {
                        data.content = this.views.temary.data[index].content[index2];
                        data.contentView = true;
                        openModal = true;
                    }
                    else
                        yield this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener el contenido a mostrar.');
                }
                else
                    yield this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener el tema.');
            }
            else
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero la acción es inválida.');
            if (openModal) {
                yield this.globalSer.loadModal(_modal_preview_tema_modal_preview_tema_page__WEBPACK_IMPORTED_MODULE_12__["ModalPreviewTemaPage"], { infoToShow: data }, false);
            }
        });
    }
    deleteThemeConfirm(themeId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let showConfirm = true;
            const index1 = this.views.temary.data.findIndex(d => d._id === themeId);
            if (index1 === -1) {
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener los datos.');
                showConfirm = false;
            }
            if (showConfirm) {
                yield this.globalSer.alertConfirm({
                    message: '¿Está seguro qué desea eliminar este tema?<br/><br/>NOTA: Se eliminará todo el contenido que este posea.',
                    confirmAction: () => this.deleteTheme(themeId)
                });
            }
        });
    }
    modalEditContent(themeId, contentId = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const updateData = (data) => {
                if (data) {
                    if (themeId && contentId) {
                        this.views.temary.data[index1].content[index2].title = data.title;
                        this.views.temary.data[index1].content[index2].description = data.description;
                        this.views.temary.data[index1].content[index2].urlVideo = data.urlVideo;
                    }
                    else {
                        this.staticData.temary[index1].content.push(data);
                    }
                }
            };
            const content = {
                id: this.id,
                themeId,
                contentId,
                title: null,
                description: null,
                urlVideo: null,
            };
            let openModal = true;
            const index1 = this.views.temary.data.findIndex(d => d._id === themeId);
            let index2 = -1;
            if (index1 > -1) {
                if (contentId) {
                    index2 = this.views.temary.data[index1].content.findIndex(c => c._id === contentId);
                    if (index2 > -1) {
                        content.title = this.views.temary.data[index1].content[index2].title;
                        content.description = this.views.temary.data[index1].content[index2].description;
                        content.urlVideo = this.views.temary.data[index1].content[index2].urlVideo;
                    }
                    else {
                        yield this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener el contenido a editar.');
                        openModal = false;
                    }
                }
            }
            else {
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener el tema a editar.');
                openModal = false;
            }
            if (openModal) {
                yield this.globalSer.loadModal(_modal_editar_contenido_modal_editar_contenido_page__WEBPACK_IMPORTED_MODULE_13__["ModalEditarContenidoPage"], content, false, updateData);
            }
        });
    }
    deleteContentConfirm(themeId, contentId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let showConfirm = true;
            const index1 = this.views.temary.data.findIndex(d => d._id === themeId);
            let index2 = -1;
            if (index1 > -1) {
                index2 = this.views.temary.data[index1].content.findIndex(c => c._id === contentId);
                if (index2 === -1) {
                    yield this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener el contenido a eliminar.');
                    showConfirm = false;
                }
            }
            else {
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener los datos.');
                showConfirm = false;
            }
            if (showConfirm) {
                yield this.globalSer.alertConfirm({
                    message: '¿Está seguro qué desea eliminar este contenido?',
                    confirmAction: () => this.deleteContent({ themeId, contentId, index1 })
                });
            }
        });
    }
    /*
    Questions
     */
    modalPreviewTest(themeId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = {
                title: null,
                test: null,
            };
            let openModal = false;
            if (themeId) {
                const index = this.views.test.data.findIndex(d => d._id === themeId);
                if (index > -1) {
                    if (!this.views.test.data[index].test || this.views.test.data[index].test.length === 0)
                        yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero la prueba a visualizar no contiene preguntas.');
                    else {
                        data.test = this.views.test.data[index].test;
                        data.title = this.views.test.data[index].title;
                        openModal = true;
                    }
                }
                else
                    yield this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener el tema.');
            }
            else
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero la acción es inválida.');
            if (openModal)
                yield this.globalSer.loadModal(_modal_preview_prueba_modal_preview_prueba_page__WEBPACK_IMPORTED_MODULE_15__["ModalPreviewPruebaPage"], data, false);
        });
    }
    modalEditQuestion(themeId, questionId = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const updateData = (data) => {
                if (data) {
                    if (themeId && questionId)
                        this.views.test.data[index1].test[index2] = data;
                    else
                        this.views.test.data[index1].test.push(data);
                }
            };
            const content = {
                id: this.id,
                themeId,
                questionId,
                title: null,
                description: null,
                placeholder: null,
                extra: null,
                inputType: null,
                require: true,
                values: [],
                correctAnswer: null,
            };
            let openModal = true;
            const index1 = this.views.test.data.findIndex(d => d._id === themeId);
            let index2 = -1;
            if (index1 > -1) {
                if (questionId) {
                    index2 = this.views.test.data[index1].test.findIndex(c => c._id === questionId);
                    if (index2 > -1) {
                        content.title = this.views.test.data[index1].test[index2].title;
                        content.description = this.views.test.data[index1].test[index2].description;
                        content.placeholder = this.views.test.data[index1].test[index2].placeholder;
                        content.extra = this.views.test.data[index1].test[index2].extra;
                        content.inputType = this.views.test.data[index1].test[index2].inputType;
                        content.require = this.views.test.data[index1].test[index2].require;
                        content.values = this.views.test.data[index1].test[index2].values;
                        content.correctAnswer = this.views.test.data[index1].test[index2].correctAnswer;
                    }
                    else {
                        yield this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener la pregunta a editar.');
                        openModal = false;
                    }
                }
            }
            else {
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener la información.');
                openModal = false;
            }
            if (openModal) {
                yield this.globalSer.loadModal(_modal_editar_pregunta_modal_editar_pregunta_page__WEBPACK_IMPORTED_MODULE_14__["ModalEditarPreguntaPage"], { data: content }, false, updateData);
            }
        });
    }
    deleteQuestionConfirm(themeId, questionId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let showConfirm = false;
            const index1 = this.views.test.data.findIndex(d => d._id === themeId);
            let index2 = -1;
            if (index1 > -1) {
                index2 = this.views.test.data[index1].test.findIndex(t => t._id === questionId);
                if (index2 > -1)
                    showConfirm = true;
                else
                    yield this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener la pregunta a eliminar.');
            }
            else
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener los datos.');
            if (showConfirm) {
                yield this.globalSer.alertConfirm({
                    message: '¿Está seguro qué desea eliminar esta pregunta?',
                    confirmAction: () => this.deleteQuestion({ themeId, questionId, index1 })
                });
            }
        });
    }
    /*
    Levels
     */
    modalAddPreviousCourses() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const updateListLevels = (data) => {
                if (data && data.length > 0)
                    this.views.levels.data = this.views.levels.data.concat(data);
            };
            const content = {
                id: this.id,
                listIdsIgnore: [],
            };
            // get ids registered
            content.listIdsIgnore = this.views.levels.data.map(l => l._id);
            content.listIdsIgnore.push(this.id);
            yield this.globalSer.loadModal(_modal_cursos_previos_modal_cursos_previos_page__WEBPACK_IMPORTED_MODULE_16__["ModalCursosPreviosPage"], content, false, updateListLevels);
        });
    }
    deleteLevelConfirm(levelId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let showConfirm = true;
            const index1 = this.views.levels.data.findIndex(d => d._id === levelId);
            if (index1 === -1) {
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero no se ha encontrado el curso a remover.');
                showConfirm = false;
            }
            if (showConfirm) {
                yield this.globalSer.alertConfirm({
                    message: '¿Está seguro qué desea remover este curso del listado?',
                    confirmAction: () => this.deleteLevel(levelId)
                });
            }
        });
    }
    /*
    Publish
     */
    confirmPublish() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const message = this.views.publish.enable ?
                '¿Está seguro qué desea quitar este curso de la sección pública?' +
                    '<br><br>NOTA: Si algún miembro agrega este curso a su lista, este no podrá ser modificado.' :
                '¿Está seguro qué desea publicar este curso?<br><br>NOTA: Asegúrese que el contenido del curso esté completo.';
            yield this.globalSer.alertConfirm({ message, confirmAction: () => this.publishCourse() });
        });
    }
};
DetallesCursoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_6__["AxiosService"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _cursos_service__WEBPACK_IMPORTED_MODULE_8__["CursosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
DetallesCursoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalles-curso',
        template: _raw_loader_detalles_curso_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalles_curso_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetallesCursoPage);



/***/ }),

/***/ "HJ1C":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/cursos/detalles-curso/modal-preview-tema/modal-preview-tema.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: ModalPreviewTemaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPreviewTemaPage", function() { return ModalPreviewTemaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_preview_tema_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-preview-tema.page.html */ "/saB");
/* harmony import */ var _modal_preview_tema_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-preview-tema.page.scss */ "h11Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/global.service */ "4WDQ");






let ModalPreviewTemaPage = class ModalPreviewTemaPage {
    constructor(globalSer, modalCtrl) {
        this.globalSer = globalSer;
        this.modalCtrl = modalCtrl;
        this.titleModal = 'Cargando...';
        this.data = null;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.infoToShow) {
                if (!this.infoToShow.contentView && this.infoToShow.theme) {
                    this.data = this.infoToShow.theme;
                    this.titleModal = `Previsualizando: ${this.data.title}`;
                }
                else if (this.infoToShow.contentView && this.infoToShow.content) {
                    this.data = this.infoToShow.content;
                    this.titleModal = `Previsualizando: ${this.data.title}`;
                }
                else {
                    yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero no existe información que mostrar.');
                    this.closeModal();
                }
            }
            else {
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener la información a mostrar.');
                this.closeModal();
            }
        });
    }
    closeModal() {
        this.modalCtrl.dismiss();
    }
};
ModalPreviewTemaPage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ModalPreviewTemaPage.propDecorators = {
    infoToShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ModalPreviewTemaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-preview-tema',
        template: _raw_loader_modal_preview_tema_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_preview_tema_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalPreviewTemaPage);



/***/ }),

/***/ "S6Jo":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/cursos/detalles-curso/modal-preview-prueba/modal-preview-prueba.page.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon name=\"close-outline\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-text class=\"ion-margin-top ion-margin-bottom\">{{ titleModal }}</ion-text>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"questionsView\">\n    <ion-list *ngFor=\"let item of questionsView\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>{{ item.title }}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <div *ngIf=\"item.description\" [innerHTML]=\"item.description\"></div>\n          <div *ngIf=\"item.inputType === 'text'\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">{{ item.placeholder || 'Indique su respuesta' }}</ion-label>\n              <ion-input [(ngModel)]=\"questionsModel[item._id]\" [required]=\"item.require\"></ion-input>\n            </ion-item>\n          </div>\n          <div *ngIf=\"item.inputType === 'textarea'\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">{{ item.placeholder || 'Indique su respuesta' }}</ion-label>\n              <ion-textarea\n                rows=\"4\"\n                cols=\"20\"\n                [(ngModel)]=\"questionsModel[item._id]\"\n                [required]=\"item.require\"\n              ></ion-textarea>\n            </ion-item>\n          </div>\n          <div *ngIf=\"item.inputType === 'radio'\">\n            <ion-radio-group [(ngModel)]=\"questionsModel[item._id]\" value=\"{{questionsModel[item._id]}}\">\n              <ion-list *ngFor=\"let value of item.values; let i=index\">\n                <ion-item>\n                  <ion-label>{{ value }}</ion-label>\n                  <ion-radio slot=\"start\" value=\"{{i}}\"></ion-radio>\n                </ion-item>\n              </ion-list>\n            </ion-radio-group>\n          </div>\n          <div *ngIf=\"item.inputType === 'checkbox'\">\n            <ion-list>\n              <ion-item *ngFor=\"let value of questionsModel[item._id]\">\n                <ion-label>{{ value.val }}</ion-label>\n                <ion-checkbox\n                  slot=\"start\"\n                  [(ngModel)]=\"value.isChecked\"\n                ></ion-checkbox>\n              </ion-item>\n            </ion-list>\n          </div>\n        </ion-card-content>\n        <ion-card-content>\n          <ion-text *ngIf=\"item.require\"><i>(*) Obligatoria </i></ion-text>\n          <div *ngIf=\"item.extra\">\n            <div [innerHTML]=\"item.extra\"></div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n    <ion-card>\n      <ion-card-content>\n        <div *ngIf=\"viewSelected === 0; else nextButtons\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-button\n                color=\"light\"\n                expand=\"full\"\n                (click)=\"close()\"\n              >\n                <ion-text>CERRAR</ion-text>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button\n                color=\"primary\"\n                expand=\"full\"\n                (click)=\"getQuestionsFromList(true)\"\n              >\n                <ion-text>SIGUIENTE</ion-text>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </div>\n        <ng-template #nextButtons>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-button\n                color=\"light\"\n                expand=\"full\"\n                (click)=\"getQuestionsFromList()\"\n              >\n                <ion-text>ATRÁS</ion-text>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"6\" *ngIf=\"viewSelected > 0 && viewSelected < totalsViews\">\n              <ion-button\n                color=\"primary\"\n                expand=\"full\"\n                (click)=\"getQuestionsFromList(true)\"\n              >\n                <ion-text>SIGUIENTE</ion-text>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"6\" *ngIf=\"viewSelected === totalsViews\">\n              <ion-button\n                color=\"primary\"\n                expand=\"full\"\n                (click)=\"close()\"\n              >\n                <ion-text>CERRAR</ion-text>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ng-template>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "ShyS":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/cursos/detalles-curso/modal-preview-prueba/modal-preview-prueba.page.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1wcmV2aWV3LXBydWViYS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "TgFg":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/cursos/detalles-curso/modal-editar-tema/modal-editar-tema.page.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .ck-editor__editable_inline {\n  min-height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZGFsLWVkaXRhci10ZW1hLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoibW9kYWwtZWRpdGFyLXRlbWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSB7XHJcbiAgbWluLWhlaWdodDogMjUwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "VfQg":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/cursos/detalles-curso/modal-editar-contenido/modal-editar-contenido.page.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .ck-editor__editable_inline {\n  min-height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZGFsLWVkaXRhci1jb250ZW5pZG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJtb2RhbC1lZGl0YXItY29udGVuaWRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuY2stZWRpdG9yX19lZGl0YWJsZV9pbmxpbmUge1xyXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "W7Q1":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/cursos/detalles-curso/modal-editar-contenido/modal-editar-contenido.page.ts ***!
  \***************************************************************************************************/
/*! exports provided: ModalEditarContenidoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditarContenidoPage", function() { return ModalEditarContenidoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_editar_contenido_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-editar-contenido.page.html */ "xr8p");
/* harmony import */ var _modal_editar_contenido_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-editar-contenido.page.scss */ "VfQg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "+z1p");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cursos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../cursos.service */ "BpEJ");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/global.service */ "4WDQ");








let ModalEditarContenidoPage = class ModalEditarContenidoPage {
    constructor(alertCtrl, globalSer, modalCtrl, cursosService) {
        this.alertCtrl = alertCtrl;
        this.globalSer = globalSer;
        this.modalCtrl = modalCtrl;
        this.cursosService = cursosService;
        this.titleModal = 'Agregar contenido';
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__;
        this.configEditor = null;
        this.formData = {
            title: null,
            description: null,
            urlVideo: null,
        };
        this.configEditor = this.globalSer.configEditor;
    }
    ngOnInit() {
        if (this.title) {
            this.formData.title = this.title;
            this.titleModal = `Editar: ${this.title}`;
        }
        if (this.description)
            this.formData.description = this.description;
        if (this.urlVideo)
            this.formData.urlVideo = this.urlVideo;
    }
    closeModal(data = null) {
        this.modalCtrl.dismiss(data);
    }
    disableButton() {
        const val1 = [null, ''];
        let counter = 0;
        if (val1.indexOf(this.formData.title) > -1)
            counter += 1;
        if (val1.indexOf(this.formData.urlVideo) > -1 && val1.indexOf(this.formData.description) > -1)
            counter += 1;
        return counter > 0;
    }
    createContent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const created = yield this.cursosService.createContentThemeCourse(this.id, this.themeId, this.formData);
            if (created && !created.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', 'Se ha agregado el contenido al tema exitosamente.');
                this.closeModal(created);
            }
            else if (created && created.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    updateContent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const updated = yield this.cursosService.updateContentThemeCourse(this.id, this.themeId, this.contentId, this.formData);
            if (updated && !updated.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado el contenido del tema exitosamente.');
                this.closeModal({
                    title: updated.title,
                    description: updated.description,
                    urlVideo: updated.urlVideo,
                });
            }
            else if (updated && updated.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    confirmEdit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validated = this.cursosService.validationEdit('content', this.formData);
            if (!validated) {
                const alert = yield this.alertCtrl.create({
                    header: 'Confirme',
                    message: `¿Está seguro qué desea ${this.contentId ? 'actualizar' : 'agregar'} este contenido?`,
                    buttons: [
                        {
                            text: 'Cancelar',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => { }
                        }, {
                            text: 'Sí',
                            handler: () => {
                                if (this.themeId && this.contentId)
                                    this.updateContent();
                                else
                                    this.createContent();
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            else {
                yield this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
            }
        });
    }
};
ModalEditarContenidoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _cursos_service__WEBPACK_IMPORTED_MODULE_6__["CursosService"] }
];
ModalEditarContenidoPage.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    themeId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    contentId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    urlVideo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ModalEditarContenidoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-editar-contenido',
        template: _raw_loader_modal_editar_contenido_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_editar_contenido_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalEditarContenidoPage);



/***/ }),

/***/ "Yj8q":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/cursos/detalles-curso/modal-cursos-previos/modal-cursos-previos.page.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .max-width-640 {\n  --max-width: 640px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZGFsLWN1cnNvcy1wcmV2aW9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0FBQUoiLCJmaWxlIjoibW9kYWwtY3Vyc29zLXByZXZpb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuICAubWF4LXdpZHRoLTY0MCB7XHJcbiAgICAtLW1heC13aWR0aDogNjQwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "byra":
/*!******************************************************************************!*\
  !*** ./src/app/views/cursos/detalles-curso/detalles-curso-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: DetallesCursoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesCursoPageRoutingModule", function() { return DetallesCursoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detalles_curso_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalles-curso.page */ "ErHH");




const routes = [
    {
        path: '',
        component: _detalles_curso_page__WEBPACK_IMPORTED_MODULE_3__["DetallesCursoPage"]
    },
    {
        path: 'modal-editar-tema',
        loadChildren: () => Promise.all(/*! import() | modal-editar-tema-modal-editar-tema-module */[__webpack_require__.e("default~crear-crear-module~modal-editar-contenido-modal-editar-contenido-module~modal-editar-tema-mo~23c6fd20"), __webpack_require__.e("modal-editar-tema-modal-editar-tema-module")]).then(__webpack_require__.bind(null, /*! ./modal-editar-tema/modal-editar-tema.module */ "3EpC")).then(m => m.ModalEditarTemaPageModule)
    },
    {
        path: 'modal-editar-contenido',
        loadChildren: () => Promise.all(/*! import() | modal-editar-contenido-modal-editar-contenido-module */[__webpack_require__.e("default~crear-crear-module~modal-editar-contenido-modal-editar-contenido-module~modal-editar-tema-mo~23c6fd20"), __webpack_require__.e("modal-editar-contenido-modal-editar-contenido-module")]).then(__webpack_require__.bind(null, /*! ./modal-editar-contenido/modal-editar-contenido.module */ "pHo5")).then(m => m.ModalEditarContenidoPageModule)
    },
    {
        path: 'modal-preview-tema',
        loadChildren: () => __webpack_require__.e(/*! import() | modal-preview-tema-modal-preview-tema-module */ "modal-preview-tema-modal-preview-tema-module").then(__webpack_require__.bind(null, /*! ./modal-preview-tema/modal-preview-tema.module */ "YjHY")).then(m => m.ModalPreviewTemaPageModule)
    },
    {
        path: 'modal-editar-pregunta',
        loadChildren: () => __webpack_require__.e(/*! import() | modal-editar-pregunta-modal-editar-pregunta-module */ "modal-editar-pregunta-modal-editar-pregunta-module").then(__webpack_require__.bind(null, /*! ./modal-editar-pregunta/modal-editar-pregunta.module */ "iUDc")).then(m => m.ModalEditarPreguntaPageModule)
    },
    {
        path: 'modal-preview-prueba',
        loadChildren: () => __webpack_require__.e(/*! import() | modal-preview-prueba-modal-preview-prueba-module */ "modal-preview-prueba-modal-preview-prueba-module").then(__webpack_require__.bind(null, /*! ./modal-preview-prueba/modal-preview-prueba.module */ "UW5/")).then(m => m.ModalPreviewPruebaPageModule)
    },
    {
        path: 'modal-cursos-previos',
        loadChildren: () => __webpack_require__.e(/*! import() | modal-cursos-previos-modal-cursos-previos-module */ "modal-cursos-previos-modal-cursos-previos-module").then(__webpack_require__.bind(null, /*! ./modal-cursos-previos/modal-cursos-previos.module */ "oteP")).then(m => m.ModalCursosPreviosPageModule)
    },
];
let DetallesCursoPageRoutingModule = class DetallesCursoPageRoutingModule {
};
DetallesCursoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetallesCursoPageRoutingModule);



/***/ }),

/***/ "drB1":
/*!**********************************************************************!*\
  !*** ./src/app/views/cursos/detalles-curso/detalles-curso.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mini-title {\n  font-size: 0.9em !important;\n  font-weight: bold;\n}\n\n.h-100 {\n  height: 100% !important;\n}\n\n.big-number {\n  font-size: 4em !important;\n}\n\n.title-or-description {\n  font-size: 1.2em !important;\n}\n\n.banner {\n  width: auto !important;\n  min-height: auto !important;\n  max-height: 450px !important;\n  border-radius: 5px;\n}\n\n.min-height-description {\n  max-height: 250px !important;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2RldGFsbGVzLWN1cnNvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBR0E7RUFDRSw0QkFBQTtFQUNBLGNBQUE7QUFBRiIsImZpbGUiOiJkZXRhbGxlcy1jdXJzby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWluaS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaC0xMDAge1xyXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmlnLW51bWJlciB7XHJcbiAgZm9udC1zaXplOiA0ZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRpdGxlLW9yLWRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iYW5uZXIge1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIG1heC1oZWlnaHQ6IDQ1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC8vbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1pbi1oZWlnaHQtZGVzY3JpcHRpb24ge1xyXG4gIG1heC1oZWlnaHQ6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgLy9tYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "h11Z":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/cursos/detalles-curso/modal-preview-tema/modal-preview-tema.page.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1wcmV2aWV3LXRlbWEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "h6VQ":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/cursos/detalles-curso/modal-preview-prueba/modal-preview-prueba.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: ModalPreviewPruebaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPreviewPruebaPage", function() { return ModalPreviewPruebaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_preview_prueba_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-preview-prueba.page.html */ "S6Jo");
/* harmony import */ var _modal_preview_prueba_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-preview-prueba.page.scss */ "ShyS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/global.service */ "4WDQ");






let ModalPreviewPruebaPage = class ModalPreviewPruebaPage {
    constructor(alertController, globalSer, modalController) {
        this.alertController = alertController;
        this.globalSer = globalSer;
        this.modalController = modalController;
        this.test = [];
        this.title = null;
        this.titleModal = 'Cargando ...';
        this.totalsViews = 0;
        this.viewSelected = 0;
        this.questions = [];
        this.questionsView = null;
        this.questionsModel = {};
    }
    ngOnInit() {
        if (this.title)
            this.titleModal = `Previsualizando prueba: ${this.title}`;
        this.setSectionsQuestions();
    }
    close() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    setSectionsQuestions() {
        const totals = this.test.length;
        // const totalSeparations = totals > 0 ? totals / 2 : 0;
        this.totalsViews = this.globalSer.getPagination(totals, 2);
        for (let i = 0; i < this.totalsViews; i++) {
            const jump = i === 0 ? 0 : i * 2;
            const selected = this.test.slice(jump, jump + 2);
            this.questions.push(selected);
        }
        for (let j = 0; j < totals; j++) {
            if (this.test[j].inputType === 'checkbox') {
                this.questionsModel[`${this.test[j]._id}`] = []; // create a new value with Question ID
                // set data with the new object
                this.test[j].values.forEach(v => {
                    this.questionsModel[`${this.test[j]._id}`].push({
                        val: v,
                        isChecked: false
                    });
                });
            }
            else
                this.questionsModel[`${this.test[j]._id}`] = null;
        }
        if (this.totalsViews > 0) {
            this.totalsViews = this.totalsViews - 1;
            if (!!this.questions[0])
                this.questionsView = this.questions[0];
        }
    }
    checkAnswerSections(view) {
        // check required answer
        const totals = this.questions[view].length;
        let showMsg = false;
        for (let i = 0; i < totals; i++) {
            if (this.questions[view][i].require) {
                if (this.questions[view][i].inputType === 'checkbox') {
                    const answered = this.questionsModel[this.questions[view][i]._id].filter(a => a.isChecked);
                    showMsg = answered.length === 0;
                }
                else
                    showMsg = this.questionsModel[this.questions[view][i]._id] === null;
            }
            if (showMsg)
                break;
        }
        return showMsg;
    }
    getQuestionsFromList(next = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // await this.globalSer.presentLoading();
            // check required answer
            if (next && this.checkAnswerSections(this.viewSelected)) {
                // await this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero debe asegurarse de responder las preguntas obligatorias de esta sección.');
            }
            else {
                this.viewSelected += next ? 1 : -1;
                this.questionsView = this.questions[this.viewSelected] || null;
                // await this.globalSer.dismissLoading();
            }
        });
    }
};
ModalPreviewPruebaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ModalPreviewPruebaPage.propDecorators = {
    test: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ModalPreviewPruebaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-preview-prueba',
        template: _raw_loader_modal_preview_prueba_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_preview_prueba_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalPreviewPruebaPage);



/***/ }),

/***/ "hGwj":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/cursos/detalles-curso/detalles-curso.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" *ngIf=\"!views.info.edit && !editBanner\">\n      <ion-button (click)=\"back()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ title }}</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"staticData && !views.info.edit && !editBanner && !staticData.enable && staticData.totalsUsers === 0\">\n      <ion-button color=\"danger\" (click)=\"confirmCourseDelete()\">\n        <ion-icon name=\"trash-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Eliminar curso</ion-text>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row *ngIf=\"staticData\">\n    <ion-col [size]=\"12\">\n      <ion-card>\n        <ion-card-header class=\"ion-no-padding ion-no-margin\">\n          <ion-toolbar color=\"primary\">\n            <ion-buttons slot=\"start\" *ngIf=\"!views.info.edit && !editBanner\">\n              <ion-button (click)=\"setShowView('info')\">\n                <ion-icon name=\"chevron-{{views.info.show ? 'up' : 'down' }}-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-title *ngIf=\"!views.info.edit && !editBanner\">{{ views.info.title }}</ion-title>\n            <ion-title *ngIf=\"!views.info.edit && editBanner\">Cambiar imagen del curso</ion-title>\n            <ion-title *ngIf=\"views.info.edit && !editBanner\">Editar datos principales del curso</ion-title>\n            <ion-buttons slot=\"end\" *ngIf=\"views.info.show && !staticData.enable && staticData.totalsUsers === 0\">\n              <ion-button (click)=\"setShowEditInfo('info')\" *ngIf=\"!views.info.edit && !editBanner\">\n                <ion-icon name=\"create-outline\"></ion-icon>\n                <ion-text>Editar</ion-text>\n              </ion-button>\n              <ion-button (click)=\"setShowBannerEdit()\" *ngIf=\"!views.info.edit && !editBanner\">\n                <ion-icon name=\"image-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Cambiar imagen</ion-text>\n              </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-card-header>\n        <ion-card-content class=\"{{views.info.show ? '' : 'ion-hide'}}\">\n\n          <div *ngIf=\"!views.info.edit && !editBanner\">\n            <ion-row>\n              <ion-col [size]=\"12\" class=\"ion-text-center\">\n                <img class=\"banner\" [src]=\"banner || 'assets/icon/escuela.svg'\"/>\n              </ion-col>\n              <ion-col [size]=\"12\" size-sm=\"6\">\n                <ion-row>\n                  <ion-col [size]=\"12\">\n                    <ion-text><b class=\"mini-title no-selected-text\">Título curso</b></ion-text><br/>\n                    <ion-text class=\"title-or-description ion-margin-bottom\">{{views.info.data.title}}</ion-text>\n                  </ion-col>\n                  <ion-col [size]=\"12\">\n                    <ion-text><b class=\"mini-title no-selected-text\">Dirigido a</b></ion-text><br/>\n                    <ion-text class=\"title-or-description ion-margin-bottom\">{{views.info.data.toRoles ? this.getRoles(views.info.data.toRoles) : 'No especificado' }}</ion-text>\n                  </ion-col>\n                  <ion-col [size]=\"12\">\n                    <ion-text><b class=\"mini-title no-selected-text\">Ponente</b></ion-text><br/>\n                    <ion-text class=\"title-or-description ion-margin-bottom\">{{views.info.data.speaker || 'No especificado'}}</ion-text>\n                  </ion-col>\n                  <ion-col [size]=\"12\">\n                    <ion-text><b class=\"mini-title no-selected-text\">Cargo o posición del ponente</b></ion-text><br/>\n                    <ion-text class=\"title-or-description ion-margin-bottom\">{{views.info.data.speakerPosition || 'No especificado'}}</ion-text>\n                  </ion-col>\n                  <ion-col [size]=\"12\">\n                    <ion-text><b class=\"mini-title no-selected-text\">Miembros actualmente con el curso</b></ion-text><br/>\n                    <ion-text class=\"title-or-description ion-margin-bottom\">{{totalsUsers}}</ion-text>\n                  </ion-col>\n                  <ion-col [size]=\"12\">\n                    <ion-text><b class=\"mini-title no-selected-text\">Estado del curso</b></ion-text><br/>\n                    <ion-text class=\"title-or-description ion-margin-bottom\">{{staticData.enable ? 'Publicado' : 'No publicado'}}</ion-text>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col [size]=\"12\" size-sm=\"6\">\n                <ion-row>\n                  <ion-col [size]=\"12\">\n                    <ion-text><b class=\"mini-title no-selected-text\">Descripción</b></ion-text><br/>\n                    <div class=\"min-height-description\">\n                      <div [innerHTML]=\"views.info.data.description\"></div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </div>\n\n          <div *ngIf=\"views.info.edit && formDataInfo && !staticData.enable && staticData.totalsUsers === 0\">\n            <app-editar-info-curso\n              [data]=\"formDataInfo\"\n              [handleCancel]=\"cancelEditInfo\"\n              [handleSave]=\"saveEditInfo\"\n            ></app-editar-info-curso>\n          </div>\n\n          <div *ngIf=\"editBanner && !staticData.enable && staticData.totalsUsers === 0\">\n            <app-editar-banner-curso\n              [handleCancel]=\"cancelEditBanner\"\n              [handleSave]=\"saveEditBanner\"\n              [banner]=\"banner\"\n            ></app-editar-banner-curso>\n          </div>\n\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n    <ion-col [size]=\"12\" *ngIf=\"!views.info.edit && !editBanner\">\n      <ion-card>\n        <ion-card-header class=\"ion-no-padding ion-no-margin\">\n          <ion-toolbar color=\"primary\">\n            <ion-buttons slot=\"start\">\n              <ion-button (click)=\"setShowView('temary')\">\n                <ion-icon name=\"chevron-{{views.temary.show ? 'up' : 'down' }}-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-title>\n              {{ views.temary.title }} ({{ views.temary.data.length }})\n            </ion-title>\n            <ion-buttons slot=\"end\" *ngIf=\"views.temary.show && !staticData.enable && staticData.totalsUsers === 0\">\n              <ion-button (click)=\"modalTheme()\">\n                <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Agregar</ion-text>\n              </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-card-header>\n        <ion-card-content class=\"{{views.temary.show ? '' : 'ion-hide'}}\">\n          <app-temarylist\n            [temary]=\"views.temary.data\"\n            [enableActions]=\"!staticData.enable && staticData.totalsUsers === 0\"\n            [handlePreview]=\"showPreviewModal\"\n            [handleEditTheme]=\"showEditTheme\"\n            [handleDeleteTheme]=\"showDeleteConfirmTheme\"\n            [handleEditContent]=\"showEditContent\"\n            [handleDeleteContent]=\"showDeleteConfirmContent\"\n            *ngIf=\"views.temary.data.length > 0; else noTemaries\"\n          ></app-temarylist>\n\n          <ng-template #noTemaries>\n            <ion-row>\n              <ion-col [size]=\"12\" class=\"ion-text-center\">\n                <ion-text>\n                  <p class=\"ion-margin-top ion-padding-top ion-text-center no-selected-text\">\n                    <ion-icon name=\"alert-circle-outline\"></ion-icon> Este curso no posee temas.\n                  </p>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n          </ng-template>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n    <ion-col [size]=\"12\" *ngIf=\"!views.info.edit && !editBanner\">\n      <ion-card>\n        <ion-card-header class=\"ion-no-padding ion-no-margin\">\n          <ion-toolbar color=\"primary\">\n            <ion-buttons slot=\"start\">\n              <ion-button (click)=\"setShowView('test')\">\n                <ion-icon name=\"chevron-{{views.test.show ? 'up' : 'down' }}-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-title>\n              {{ views.test.title }} ({{ views.test.data.length }})\n            </ion-title>\n          </ion-toolbar>\n        </ion-card-header>\n        <ion-card-content class=\"{{views.test.show ? '' : 'ion-hide'}}\">\n          <app-test-list\n            [data]=\"views.test.data\"\n            [enableActions]=\"!staticData.enable && staticData.totalsUsers === 0\"\n            [handlePreview]=\"showPreviewTest\"\n            [handleEditQuestion]=\"showEditQuestion\"\n            [handleDeleteQuestion]=\"showDeleteConfirmQuestion\"\n            *ngIf=\"views.test.data.length > 0; else noTests\"\n          ></app-test-list>\n\n          <ng-template #noTests>\n            <ion-row>\n              <ion-col [size]=\"12\" class=\"ion-text-center\">\n                <ion-text>\n                  <p class=\"ion-margin-top ion-padding-top ion-text-center no-selected-text\">\n                    <ion-icon name=\"alert-circle-outline\"></ion-icon> Debes registrar temas para poder visualizar la sección de pruebas.\n                  </p>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n          </ng-template>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n    <ion-col [size]=\"12\" *ngIf=\"!views.info.edit && !editBanner\">\n      <ion-card>\n        <ion-card-header class=\"ion-no-padding ion-no-margin\">\n          <ion-toolbar color=\"primary\">\n            <ion-buttons slot=\"start\">\n              <ion-button (click)=\"setShowView('levels')\">\n                <ion-icon name=\"chevron-{{views.levels.show ? 'up' : 'down' }}-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-title>{{ views.levels.title }} {{ views.levels.data.length > 0 ? '(' + views.levels.data.length + ')' : '' }}</ion-title>\n            <ion-buttons slot=\"end\" *ngIf=\"views.levels.show && !staticData.enable && staticData.totalsUsers === 0\">\n              <ion-button (click)=\"modalAddPreviousCourses()\">\n                <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Agregar</ion-text>\n              </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-card-header>\n        <ion-card-content class=\"{{views.levels.show ? '' : 'ion-hide'}} ion-no-padding\">\n          <ion-row *ngIf=\"views.levels.data && views.levels.data.length > 0; else noLevels\">\n            <ion-col [size]=\"12\" size-sm=\"4\" *ngFor=\"let d of views.levels.data\">\n              <app-cursos-previos-card\n                [course]=\"d\"\n                [handleDelete]=\"showDeleteConfirmLevel\"\n              ></app-cursos-previos-card>\n            </ion-col>\n          </ion-row>\n\n          <ng-template #noLevels>\n            <ion-row>\n              <ion-col [size]=\"12\" class=\"ion-text-center ion-margin-bottom\">\n                <ion-text>\n                  <p class=\"ion-margin-top ion-padding-top ion-text-center no-selected-text\">\n                    <ion-icon name=\"alert-circle-outline\"></ion-icon> No existen cursos previos en el listado.\n                  </p>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n          </ng-template>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n    <ion-col class=\"ion-margin-bottom ion-padding-bottom\" [size]=\"12\" *ngIf=\"!views.info.edit && !editBanner\">\n      <ion-card>\n        <ion-card-header class=\"ion-no-padding ion-no-margin\">\n          <ion-toolbar color=\"primary\">\n            <ion-buttons slot=\"start\">\n              <ion-button (click)=\"setShowView('publish')\">\n                <ion-icon name=\"chevron-{{views.publish.show ? 'up' : 'down' }}-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-title>{{ views.publish.title }}</ion-title>\n          </ion-toolbar>\n        </ion-card-header>\n        <ion-card-content class=\"{{views.publish.show ? '' : 'ion-hide'}}\">\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col class=\"ion-margin-top\" size=\"12\">\n              <h2><b>IMPORTANTE</b></h2>\n              <ul>\n                <li>Puede publicar el curso a los miembros con solo presionar el botón: <b>\"PUBLICAR CURSO\"</b>.</li>\n                <li>Puede retirar el curso del listado público con solo presionar el botón <b>\"QUITAR CURSO DE LA SECCIÓN PÚBLICA\"</b>.</li>\n                <li>El curso una vez publicado, <b>NO PUEDE SER EDITADO</b> en ninguna de las secciones.</li>\n                <li>Puede editar un curso siempre y cuando este no se encuentre publicado y ningún miembro lo tenga en su lista.</li>\n                <li>Puede retirar el curso del listado público incluso si algún miembro lo tiene agregado en su lista.</li>\n                <li>Si el curso requiere de otros cursos, estos deberán estar publicados previamente antes de publicar este curso para miembros.</li>\n                <li>Si retira el curso del listado público y este se encuentra asociados otros cursos previos, estos pasarán también a <b>NO PUBLICADOS</b>.</li>\n              </ul>\n              <h3>\n                <b>NOTA:</b> ASEGÚRESE DE VERIFICAR EL CONTENIDO DEL CURSO ANTES DE PUBLICARLO.\n                UNA VEZ REALIZADA ESTA ACCIÓN Y ALGÚN USUARIO AGREGA EL CURSO A SU LISTA,\n                NO PODRÁ VOLVER A <b><i>EDITARLO</i></b>, NI PODRÁ <b><i>ELIMINARLO</i></b>.\n              </h3>\n            </ion-col>\n            <ion-col class=\"ion-margin-top ion-padding-top ion-text-center\" size=\"12\">\n              <ion-button\n                size=\"large\"\n                [color]=\"views.publish.enable ? 'danger' : 'primary'\"\n                (click)=\"confirmPublish()\"\n              >\n                <ion-icon name=\"alert-circle-outline\" slot=\"start\" *ngIf=\"views.publish.enable\"></ion-icon>\n                <ion-icon name=\"earth-outline\" slot=\"start\" *ngIf=\"!views.publish.enable\"></ion-icon>\n                <ion-text>{{ views.publish.enable ? 'Quitar curso de la sección pública' : 'Publicar curso' }}</ion-text>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "pGab":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/cursos/detalles-curso/modal-editar-tema/modal-editar-tema.page.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <!--<ion-buttons slot=\"start\">-->\n    <!--</ion-buttons>-->\n    <ion-title>{{ titleModal }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button\n        [disabled]=\"formData.title === null || formData.title === ''\"\n        color=\"primary\"\n        (click)=\"confirmEdit()\">\n        <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Guardar</ion-text>\n      </ion-button>\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Cancelar</ion-text>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item>\n        <ion-label position=\"floating\" color=\"medium\">Título del tema (*)</ion-label>\n        <ion-input\n          [(ngModel)]=\"formData.title\"\n          class=\"ion-text-uppercase\"\n          maxlength=\"25\"\n        ></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ckeditor\n        [(ngModel)]=\"formData.description\"\n        [editor]=\"Editor\"\n        [config]=\"configEditor\"\n      ></ckeditor>\n    </ion-col>\n    <ion-col size=\"12\" class=\"ion-margin-top\">\n      <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "rIVv":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/cursos/detalles-curso/modal-cursos-previos/modal-cursos-previos.page.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Agregar cursos previos</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button\n        [disabled]=\"listAdded.length === 0\"\n        color=\"primary\"\n        (click)=\"confirmAdd()\"\n      >\n        <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Guardar</ion-text>\n      </ion-button>\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Cancelar</ion-text>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-row>\n        <ion-col [size]=\"12\" size-sm=\"7\">\n          <ion-toolbar>\n            <ion-button color=\"light\" (click)=\"queryParams.title = null; findData()\" slot=\"start\" *ngIf=\"queryParams.title\">\n              <ion-icon name=\"backspace-outline\"></ion-icon>\n            </ion-button>\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">Buscar por título</ion-label>\n              <ion-input\n                [(ngModel)]=\"queryParams.title\"\n                autocomplete=\"off\"\n                class=\"ion-text-uppercase\"\n              ></ion-input>\n            </ion-item>\n            <ion-button color=\"light\" (click)=\"findData()\" slot=\"end\">\n              <ion-icon name=\"search-outline\"></ion-icon>\n            </ion-button>\n          </ion-toolbar>\n        </ion-col>\n        <ion-col [size]=\"12\" size-sm=\"5\">\n          <ion-toolbar>\n            <ion-button color=\"light\" (click)=\"setSortOrder()\">\n              <ion-icon name=\"arrow-up-outline\" *ngIf=\"queryParams.value === 1\"></ion-icon>\n              <ion-icon name=\"arrow-down-outline\" *ngIf=\"queryParams.value === -1\"></ion-icon>&nbsp;\n              <ion-text>{{ queryParams.value === 1 ? 'ASC' : 'DES' }}</ion-text>\n            </ion-button>\n            <ion-button color=\"light\" (click)=\"setQueryValues()\">\n              <ion-icon name=\"filter-outline\"></ion-icon>&nbsp;\n              <ion-text>{{ queryParams.limit }}</ion-text>\n            </ion-button>\n          </ion-toolbar>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n\n\n  <ion-row *ngIf=\"courses && courses.length > 0; else noCourses\">\n    <ion-col [size]=\"12\" size-sm=\"6\" *ngFor=\"let course of courses\">\n      <app-cursos-previos-card\n        [course]=\"course\"\n        [added]=\"checkAddedId(course._id)\"\n        [add]=\"true\"\n        [handleAddRemove]=\"handleAddOrRemove\"\n      ></app-cursos-previos-card>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"ion-margin-top\" *ngIf=\"courses && courses.length > 0 && pages > 0\">\n    <app-paginator\n      [totalPages]=\"pages\"\n      [currentPage]=\"queryParams.page\"\n      [handlePage]=\"handlePage\"\n    ></app-paginator>\n  </div>\n\n  <ng-template #noCourses>\n    <ion-card class=\"ion-no-padding\">\n      <ion-text>\n        <p class=\"ion-text-center\">No existen cursos para agregar.</p>\n      </ion-text>\n    </ion-card>\n  </ng-template>\n\n</ion-content>\n\n");

/***/ }),

/***/ "v0qv":
/*!**********************************************************************!*\
  !*** ./src/app/views/cursos/detalles-curso/detalles-curso.module.ts ***!
  \**********************************************************************/
/*! exports provided: DetallesCursoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesCursoPageModule", function() { return DetallesCursoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detalles_curso_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalles-curso-routing.module */ "byra");
/* harmony import */ var _detalles_curso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalles-curso.page */ "ErHH");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "j1ZV");








let DetallesCursoPageModule = class DetallesCursoPageModule {
};
DetallesCursoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detalles_curso_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetallesCursoPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
        ],
        declarations: [_detalles_curso_page__WEBPACK_IMPORTED_MODULE_6__["DetallesCursoPage"]]
    })
], DetallesCursoPageModule);



/***/ }),

/***/ "xGAF":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/cursos/detalles-curso/modal-editar-pregunta/modal-editar-pregunta.page.ts ***!
  \*************************************************************************************************/
/*! exports provided: ModalEditarPreguntaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditarPreguntaPage", function() { return ModalEditarPreguntaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_editar_pregunta_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-editar-pregunta.page.html */ "9YTG");
/* harmony import */ var _modal_editar_pregunta_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-editar-pregunta.page.scss */ "EGjg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cursos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cursos.service */ "BpEJ");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/global.service */ "4WDQ");







let ModalEditarPreguntaPage = class ModalEditarPreguntaPage {
    constructor(alertCtrl, globalSer, modalCtrl, cursosService) {
        this.alertCtrl = alertCtrl;
        this.globalSer = globalSer;
        this.modalCtrl = modalCtrl;
        this.cursosService = cursosService;
        this.id = null;
        this.themeId = null;
        this.questionId = null;
        this.titleModal = 'Agregar pregunta';
        this.inputsList = [];
        this.word = null;
        this.formData = {
            title: null,
            description: null,
            placeholder: null,
            extra: null,
            inputType: null,
            require: true,
            values: [],
            correctAnswer: null,
        };
        this.inputsList = this.cursosService.inputTypeList;
    }
    ngOnInit() {
        if (this.data) {
            // set title
            if (this.data.title)
                this.titleModal = `Editar: ${this.data.title}`;
            // set principal params
            this.id = this.data.id;
            this.themeId = this.data.themeId;
            this.questionId = this.data.questionId;
            // set data
            this.formData.title = this.data.title;
            this.formData.description = this.data.description;
            this.formData.placeholder = this.data.placeholder;
            this.formData.extra = this.data.extra;
            this.formData.inputType = this.data.inputType;
            this.formData.require = this.data.require;
            this.formData.values = this.data.values;
            this.formData.correctAnswer = this.data.correctAnswer;
        }
    }
    closeModal(data = null) {
        this.modalCtrl.dismiss(data);
    }
    /*
      actions service
     */
    addQuestion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const add = yield this.cursosService.addQuestionTestThemeCourse(this.id, this.themeId, this.formData);
            if (add && !add.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('Alerta', 'Se ha agregado el pregunta exitosamente.');
                this.closeModal(add);
            }
            else if (add && add.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    updateQuestion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const updated = yield this.cursosService.updateQuestionTestThemeCourse(this.id, this.themeId, this.questionId, this.formData);
            if (updated && !updated.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('Alerta', 'Se ha actualizado la pregunta exitosamente.');
                this.closeModal(updated);
            }
            else if (updated && updated.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    /*
      Actions forms
     */
    getInputTypeLabel(inputType) {
        if (!inputType)
            return null;
        const input = this.inputsList.find(i => i.val === inputType);
        if (input)
            return input.label;
        return null;
    }
    addValuesInList() {
        if (this.word)
            this.formData.values.push(this.word);
        this.word = null;
    }
    enableButtonSave() {
        const val1 = [null, ''];
        const val2 = ['text', 'textarea'];
        let counter = 0;
        if (val1.indexOf(this.formData.title) > -1)
            counter += 1;
        if (val1.indexOf(this.formData.inputType) > -1)
            counter += 1;
        if (val2.indexOf(this.formData.inputType) === -1
            && (this.formData.values.length === 0 || val1.indexOf(this.formData.correctAnswer) > -1))
            counter += 1;
        return counter > 0;
    }
    removeValueOfList(index) {
        this.formData.values.splice(index, 1);
        this.formData.correctAnswer = null;
        this.word = null;
    }
    showInputsListAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputs = [];
            for (const value of this.inputsList) {
                inputs.push({
                    name: `input-type`,
                    type: 'radio',
                    label: value.label,
                    value: value.val,
                    checked: this.formData.inputType === value.val,
                });
            }
            yield this.globalSer.alertWithList({
                header: 'Tipo de campo',
                inputs,
                confirmAction: (selectedValue) => {
                    if (['text', 'textarea'].indexOf(selectedValue) > -1) {
                        this.formData.values = [];
                        this.formData.placeholder = null;
                        this.formData.correctAnswer = null;
                    }
                    this.formData.inputType = selectedValue;
                }
            });
        });
    }
    showRequireAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputs = [];
            for (const value of [true, false]) {
                inputs.push({
                    name: `require`,
                    type: 'radio',
                    label: value ? 'Si' : 'No',
                    value,
                    checked: value === this.formData.require,
                });
            }
            yield this.globalSer.alertWithList({
                header: '¿Respuesta obligatoria?',
                inputs,
                confirmAction: (selectedValue) => { this.formData.require = selectedValue; }
            });
        });
    }
    confirmEdit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validated = this.cursosService.validationEdit('question', this.formData);
            if (!validated) {
                yield this.globalSer.alertConfirm({
                    header: 'Confirme',
                    message: `¿Está seguro qué desea ${this.questionId ? 'actualizar' : 'agregar'} este pregunta?`,
                    confirmAction: () => {
                        if (this.themeId && this.questionId)
                            this.updateQuestion();
                        else
                            this.addQuestion();
                    }
                });
            }
            else {
                yield this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
            }
        });
    }
};
ModalEditarPreguntaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _cursos_service__WEBPACK_IMPORTED_MODULE_5__["CursosService"] }
];
ModalEditarPreguntaPage.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ModalEditarPreguntaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-editar-pregunta',
        template: _raw_loader_modal_editar_pregunta_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_editar_pregunta_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalEditarPreguntaPage);



/***/ }),

/***/ "xr8p":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/cursos/detalles-curso/modal-editar-contenido/modal-editar-contenido.page.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ titleModal }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button\n        color=\"primary\"\n        (click)=\"confirmEdit()\"\n        [disabled]=\"disableButton()\"\n      >\n        <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Guardar</ion-text>\n      </ion-button>\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Cancelar</ion-text>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item>\n        <ion-label position=\"floating\" color=\"medium\">Título del contenido (*)</ion-label>\n        <ion-input\n          [(ngModel)]=\"formData.title\"\n          class=\"ion-text-uppercase\"\n          maxlength=\"30\"\n        ></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-item>\n        <ion-label position=\"floating\" color=\"medium\">Enlace de YouTube</ion-label>\n        <ion-input\n          [(ngModel)]=\"formData.urlVideo\"\n          maxlength=\"150\"\n        ></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ckeditor\n        [(ngModel)]=\"formData.description\"\n        [editor]=\"Editor\"\n        [config]=\"configEditor\"\n      ></ckeditor>\n    </ion-col>\n    <ion-col size=\"12\" class=\"ion-margin-top\">\n      <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=detalles-curso-detalles-curso-module.js.map