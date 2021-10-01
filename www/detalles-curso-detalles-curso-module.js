(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detalles-curso-detalles-curso-module"],{

/***/ "/saB":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/cursos/detalles-curso/modal-preview-tema/modal-preview-tema.page.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ titleModal }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf=\"data\">\n    <ion-card-content>\n      <ion-row>\n        <ion-col class=\"ion-margin-bottom\" [size]=\"12\" *ngIf=\"data.urlVideo\">\n          <app-video-player urlVideo=\"{{data.urlVideo}}\"></app-video-player>\n        </ion-col>\n\n        <ion-col [size]=\"12\" *ngIf=\"data.description\">\n          <div [innerHTML]=\"data.description\"></div>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "9YTG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/cursos/detalles-curso/modal-editar-pregunta/modal-editar-pregunta.page.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n    </ion-buttons>\n    <ion-title>{{ titleModal }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button\n        [disabled]=\"enableButtonSave()\"\n        color=\"primary\"\n        (click)=\"confirmEdit()\"\n      >\n        <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Guardar</ion-text>\n      </ion-button>\n      <ion-button (click)=\"confirmCloseModal()\">\n        <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Cancelar</ion-text>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header class=\"ion-no-padding ion-no-margin\">\n      <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n          <ion-button (click)=\"setShowInfoView()\">\n            <ion-icon name=\"chevron-{{showInfoForm ? 'up' : 'down' }}-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <ion-title>\n          Título y descripción\n        </ion-title>\n      </ion-toolbar>\n    </ion-card-header>\n    <ion-card-content class=\"{{showInfoForm ? '' : 'ion-hide'}} ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\" color=\"medium\">Título para el Quiz (*)</ion-label>\n            <ion-input\n              [(ngModel)]=\"formData.title\"\n              class=\"ion-text-uppercase\"\n              maxlength=\"30\"\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ckeditor\n            [(ngModel)]=\"formData.description\"\n            [editor]=\"Editor\"\n            [config]=\"configEditor\"\n          ></ckeditor>\n        </ion-col>\n        <ion-col size=\"12\" class=\"ion-margin-top\">\n          <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-row *ngIf=\"quiz && quiz.length > 0; else noQuiz\">\n    <ion-col size=\"12\" class=\"ion-text-end\">\n      <ion-button color=\"medium\" (click)=\"addItem()\">\n        <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Agregar pregunta</ion-text>\n      </ion-button>\n    </ion-col>\n    <ion-col [size]=\"12\" *ngFor=\"let q of quiz; let i=index\">\n      <ion-card>\n        <ion-card-header class=\"ion-no-padding ion-no-margin\">\n          <ion-toolbar color=\"primary\">\n            <ion-buttons slot=\"start\">\n              <ion-button (click)=\"setShowView(i)\">\n                <ion-icon name=\"chevron-{{quizViews[i] ? 'up' : 'down' }}-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-title>\n              {{ q.title || 'Título no indicado' }}\n            </ion-title>\n            <ion-buttons slot=\"end\">\n              <ion-button (click)=\"removeItem(i)\">\n                <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Quitar</ion-text>\n              </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-card-header>\n        <ion-card-content class=\"{{quizViews[i] ? '' : 'ion-hide'}} ion-no-padding\">\n          <ion-row>\n            <ion-col [size]=\"6\">\n              <ion-row>\n                <ion-col [size]=\"12\">\n                  <ion-label>\n                    <ion-icon name=\"settings-outline\" slot=\"start\"></ion-icon>&nbsp;\n                    <ion-text><b>Generador de pregunta</b></ion-text>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-card class=\"ion-no-padding\">\n                <ion-card-content class=\"ion-no-padding\">\n                  <ion-row>\n                    <ion-col size=\"12\">\n                      <ion-item>\n                        <ion-label position=\"floating\" color=\"medium\">Título de la pregunta (*)</ion-label>\n                        <ion-input\n                          [(ngModel)]=\"quiz[i].title\"\n                          maxlength=\"100\"\n                        ></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"12\">\n                      <ion-item>\n                        <ion-label position=\"floating\" color=\"medium\">Descripción</ion-label>\n                        <ion-textarea\n                          [(ngModel)]=\"quiz[i].description\"\n                          rows=\"4\"\n                          cols=\"20\"\n                          placeholder=\"Ingresa alguna descripción para la pregunta (opcional)...\"\n                          maxlength=\"150\"\n                        ></ion-textarea>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"12\">\n                      <ion-item>\n                        <ion-label position=\"floating\" color=\"medium\">Tipo de campo (*)</ion-label>\n                        <ion-input\n                          [readonly]=\"true\"\n                          [value]=\"getInputTypeLabel(q.inputType)\"\n                          autocomplete=\"off\"\n                          class=\"no-selected-text\"\n                          (click)=\"showInputsListAlert(i)\"\n                        ></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"12\" *ngIf=\"q.inputType && ['text', 'textarea'].indexOf(q.inputType) > -1\">\n                      <ion-item>\n                        <ion-label position=\"floating\" color=\"medium\">Mensaje de la caja (opcional)</ion-label>\n                        <ion-input\n                          [(ngModel)]=\"quiz[i].placeholder\"\n                          maxlength=\"60\"\n                        ></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"12\" *ngIf=\"q.inputType && ['text', 'textarea'].indexOf(q.inputType) === -1\">\n                      <ion-row class=\"ion-align-items-center\">\n                        <ion-col [size]=\"12\">\n                          <ion-item>\n                            <ion-label position=\"floating\" color=\"medium\">Respuestas (*)</ion-label>\n                            <ion-input\n                              [disabled]=\"q.values.length >= 5\"\n                              [(ngModel)]=\"word\"\n                              maxlength=\"50\"\n                              (keyup.enter)=\"addValuesInList(i)\"\n                            ></ion-input>\n                          </ion-item>\n                          <p class=\"ion-text-end\">{{ word ? word.length : 0 }}/50 caracteres.</p>\n                          <p class=\"ion-text-end toSmall\"><i>Presiona ENTER para agregar.</i></p>\n                        </ion-col>\n                        <ion-col [size]=\"12\">\n                          <ion-chip *ngFor=\"let value of q.values; let i2=index\">\n                            <ion-label>\n                              {{ value }}\n                            </ion-label>\n                            <ion-icon name=\"close\"  (click)=\"removeValueOfList(i, i2)\"></ion-icon>\n                          </ion-chip>\n                        </ion-col>\n                      </ion-row>\n                    </ion-col>\n                    <ion-col size=\"12\" *ngIf=\"q.inputType && ['text', 'textarea'].indexOf(q.inputType) === -1\">\n                      <ion-item>\n                        <ion-label position=\"floating\" color=\"medium\">Respuesta correcta (*)</ion-label>\n                        <ion-select interface=\"alert\" placeholder=\"Selecciona una\" [(ngModel)]=\"quiz[i].correctAnswer\">\n                          <ion-select-option *ngFor=\"let value of q.values; let i=index\" [value]=\"i\">{{ value }}</ion-select-option>\n                        </ion-select>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"12\">\n                      <ion-item>\n                        <ion-label position=\"floating\" color=\"medium\">¿Respuesta obligatoria?</ion-label>\n                        <ion-input\n                          [readonly]=\"true\"\n                          [value]=\"q.require ? 'Si' : 'No'\"\n                          autocomplete=\"off\"\n                          class=\"no-selected-text\"\n                          (click)=\"showRequireAlert(i)\"\n                        ></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"12\" class=\"ion-margin-top\">\n                      <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\n                    </ion-col>\n                  </ion-row>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n            <ion-col [size]=\"6\" class=\"ion-align-items-center\">\n              <ion-row class=\"ion-align-items-center\">\n                <ion-col [size]=\"12\">\n                  <ion-label>\n                    <ion-icon name=\"eye-outline\" slot=\"start\"></ion-icon>&nbsp;\n                    <ion-text><b>Previsualización</b></ion-text>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-card>\n                <ion-card-header>\n                  <ion-card-title>{{ q.title || 'Sin título' }}</ion-card-title>\n                </ion-card-header>\n                <ion-card-content>\n                  <ion-text class=\"toSmall\" *ngIf=\"q.description\"><p>{{q.description}}</p></ion-text>\n\n                  <div *ngIf=\"q.inputType === 'text'\">\n                    <ion-item>\n                      <ion-label position=\"floating\" color=\"medium\">{{ q.placeholder || 'Indique su respuesta' }}</ion-label>\n                      <ion-input [required]=\"q.require\"></ion-input>\n                    </ion-item>\n                  </div>\n                  <div *ngIf=\"q.inputType === 'textarea'\">\n                    <ion-item>\n                      <ion-label position=\"floating\" color=\"medium\">{{ q.placeholder || 'Indique su respuesta' }}</ion-label>\n                      <ion-textarea\n                        rows=\"4\"\n                        cols=\"20\"\n                        [required]=\"q.require\"\n                      ></ion-textarea>\n                    </ion-item>\n                  </div>\n                  <div *ngIf=\"q.inputType === 'radio'\">\n                    <ion-radio-group>\n                      <ion-list *ngFor=\"let value of q.values; let i=index\">\n                        <ion-item>\n                          <ion-radio slot=\"start\" value=\"{{i}}\"></ion-radio>\n                          <ion-text>{{ value }}</ion-text>\n                        </ion-item>\n                      </ion-list>\n                    </ion-radio-group>\n                  </div>\n                  <div *ngIf=\"q.inputType === 'checkbox'\">\n                    <ion-list>\n                      <ion-item *ngFor=\"let value of q.values\">\n                        <ion-checkbox slot=\"start\"></ion-checkbox>\n                        <ion-text>{{ value }}</ion-text>\n                      </ion-item>\n                    </ion-list>\n                  </div>\n\n                  <ion-text *ngIf=\"q.require\"><i>(*) Obligatoria </i></ion-text>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ng-template #noQuiz>\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <ion-card>\n          <ion-card-content>\n            <ion-text color=\"medium\">\n              <p class=\"ion-text-center no-selected-text\">\n                <ion-icon name=\"alert-circle-outline\"></ion-icon> Agregue preguntas para el Quiz.\n              </p>\n            </ion-text>\n            <ion-button color=\"medium\" (click)=\"addItem()\">\n              <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\n              <ion-text>Agregar pregunta</ion-text>\n            </ion-button>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ng-template>\n  <br>\n</ion-content>\n");

/***/ }),

/***/ "EGjg":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/cursos/detalles-curso/modal-editar-pregunta/modal-editar-pregunta.page.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .ck-editor__editable_inline {\n  min-height: 200px;\n  color: #333333 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZGFsLWVkaXRhci1wcmVndW50YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FBQ0YiLCJmaWxlIjoibW9kYWwtZWRpdGFyLXByZWd1bnRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuY2stZWRpdG9yX19lZGl0YWJsZV9pbmxpbmUge1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIGNvbG9yOiAjMzMzMzMzICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

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
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");
/* harmony import */ var _cursos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cursos.service */ "BpEJ");
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../Utils/validations.functions */ "OmbT");
/* harmony import */ var _modal_preview_tema_modal_preview_tema_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal-preview-tema/modal-preview-tema.page */ "HJ1C");
/* harmony import */ var _modal_editar_pregunta_modal_editar_pregunta_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal-editar-pregunta/modal-editar-pregunta.page */ "xGAF");
/* harmony import */ var _modal_preview_prueba_modal_preview_prueba_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal-preview-prueba/modal-preview-prueba.page */ "h6VQ");
/* harmony import */ var _modal_editar_contenido_modal_editar_contenido_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal-editar-contenido/modal-editar-contenido.page */ "W7Q1");













let DetallesCursoPage = class DetallesCursoPage {
    constructor(activateRoute, cursosService, globalSer, navCtrl, router) {
        this.activateRoute = activateRoute;
        this.cursosService = cursosService;
        this.globalSer = globalSer;
        this.navCtrl = navCtrl;
        this.router = router;
        this.title = 'Cargando...';
        this.id = null;
        this.staticData = null;
        this.course = null;
        this.edit = false;
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
                    level: null,
                }
            },
            temary: { show: false, title: 'Temas', data: [] },
            publish: { show: false, title: 'Publicar curso', enable: false },
        };
        this.formData = {
            temary: { show: false, title: 'Temas del curso' },
            test: { show: false, title: 'Pruebas' },
        };
        this.showAddButton = false;
        this.formDataInfo = null;
        // handles to components
        this.cancelEditInfo = () => { this.setShowEditInfo('info'); };
        this.saveEditInfo = (data) => { this.updateCourse(data); };
        this.showPreviewModal = (themeId) => { this.modalPreviewTheme(themeId); };
        this.showEditTheme = (id, quiz = false) => { this.modalTheme(id, quiz); };
        this.showDeleteConfirmTheme = (themeId) => { this.deleteThemeConfirm(themeId); };
        this.showEditQuestion = (themeId, questionId = null) => { this.modalEditQuestion(themeId, questionId); };
        // check if exist session
        if (!this.globalSer.checkSession())
            this.router.navigate(['/ingresar']);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.showAddButton = this.globalSer.checkRoleToEnableAddOrUpdate();
            this.id = this.activateRoute.snapshot.paramMap.get('id');
            yield this.globalSer.presentLoading();
            const data = yield this.cursosService.getCourse(this.id);
            if (data && !data.error) {
                this.staticData = Object.assign({}, data);
                this.course = Object.assign({}, this.staticData);
                this.views.publish.enable = this.course.enable;
                this.totalsUsers = this.course.totalsUsers || 0;
                this.setDataToView('info', this.course);
                this.setDataToView('temary', this.course.temary);
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
    publishCourse() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.cursosService.publishCourse(this.id);
            if (data && !data.error) {
                this.staticData.enable = data.enable;
                this.course.enable = data.enable;
                this.views.publish.enable = data.enable;
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
    // getters and setters
    setDataToView(group, data = []) {
        if (group === 'info') {
            const keys = Object.keys(this.views[group].data);
            keys.forEach(k => {
                this.views[group].data[k] = k === 'description' ? Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_8__["setSaltLinesOrBr"])(data[k], true) : data[k];
            });
        }
        else if (group === 'temary') {
            this.views[group].data = data || [];
        }
    }
    // getters and setters
    getRoles(roles) {
        return this.cursosService.getRoles(roles);
    }
    /*
     Information and delete actions
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
    modalTheme(themeId = null, quiz = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const updateData = (data) => {
                if (data) {
                    const index = this.views.temary.data.findIndex(d => d._id === themeId);
                    if (index > -1) {
                        this.views.temary.data[index].title = data.title;
                        this.views.temary.data[index].description = data.description;
                        this.views.temary.data[index].urlVideo = data.urlVideo;
                        this.views.temary.data[index].quiz = data.quiz;
                    }
                    else
                        this.staticData.temary.push(data);
                }
            };
            if (themeId) {
                const theme = this.views.temary.data.find(d => d._id === themeId);
                if (theme) {
                    if (quiz) {
                        yield this.globalSer.loadModal(_modal_editar_pregunta_modal_editar_pregunta_page__WEBPACK_IMPORTED_MODULE_10__["ModalEditarPreguntaPage"], {
                            data: {
                                id: this.id,
                                themeId: theme._id,
                                title: theme.title,
                                description: theme.description,
                                quiz: theme.quiz
                            }
                        }, false, updateData);
                    }
                    else {
                        yield this.globalSer.loadModal(_modal_editar_contenido_modal_editar_contenido_page__WEBPACK_IMPORTED_MODULE_12__["ModalEditarContenidoPage"], {
                            id: this.id,
                            themeId,
                            title: theme.title || null,
                            description: theme.description || null,
                            urlVideo: theme.urlVideo || null,
                            quiz: theme.quiz || null,
                        }, false, updateData);
                    }
                }
                else {
                    yield this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener el tema a editar.');
                }
            }
            else if (quiz) {
                yield this.globalSer.loadModal(_modal_editar_pregunta_modal_editar_pregunta_page__WEBPACK_IMPORTED_MODULE_10__["ModalEditarPreguntaPage"], {
                    data: {
                        id: this.id,
                        themeId: null,
                        title: null,
                        description: null,
                        quiz: []
                    }
                }, false, updateData);
            }
            else {
                yield this.globalSer.loadModal(_modal_editar_contenido_modal_editar_contenido_page__WEBPACK_IMPORTED_MODULE_12__["ModalEditarContenidoPage"], {
                    id: this.id,
                    themeId: null,
                    title: null,
                    description: null,
                    urlVideo: null,
                    quiz: null,
                }, false, updateData);
            }
        });
    }
    modalPreviewTheme(themeId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (themeId) {
                const data = this.views.temary.data.find(d => d._id === themeId);
                if (data) {
                    if (data.quiz) {
                        yield this.globalSer.loadModal(_modal_preview_prueba_modal_preview_prueba_page__WEBPACK_IMPORTED_MODULE_11__["ModalPreviewPruebaPage"], {
                            test: data.quiz,
                            title: data.title,
                            description: data.description
                        }, false);
                    }
                    else
                        yield this.globalSer.loadModal(_modal_preview_tema_modal_preview_tema_page__WEBPACK_IMPORTED_MODULE_9__["ModalPreviewTemaPage"], { data }, false);
                }
                else
                    yield this.globalSer.presentAlert('Alerta', 'Disculpe, ha ocurrido un error al momento de obtener el tema.');
            }
            else
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero la acción es inválida.');
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
                    message: '¿Está seguro qué desea eliminar este tema?',
                    confirmAction: () => this.deleteTheme(themeId)
                });
            }
        });
    }
    /*
    Questions
     */
    modalEditQuestion(themeId, questionId = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const updateData = (data) => {
                if (data) {
                    if (themeId)
                        this.views.test.data[index1].test[index2] = data;
                    else
                        this.views.temary.data.push(data);
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
                yield this.globalSer.loadModal(_modal_editar_pregunta_modal_editar_pregunta_page__WEBPACK_IMPORTED_MODULE_10__["ModalEditarPreguntaPage"], { data: content }, false, updateData);
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
    { type: _cursos_service__WEBPACK_IMPORTED_MODULE_7__["CursosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
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
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.data) {
                this.titleModal = `Previsualizando: ${this.data.title}`;
            }
            else {
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero no existe información que mostrar.');
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
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon name=\"close-outline\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-text class=\"ion-margin-top ion-margin-bottom\">{{ titleModal }}</ion-text>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-row>\n    <ion-col size=\"12\" *ngIf=\"description\">\n      <div [innerHTML]=\"description\" color=\"medium\"></div>\n    </ion-col>\n  </ion-row>\n\n  <div *ngIf=\"questionsView\">\n    <ion-list *ngFor=\"let item of questionsView\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>{{ item.title }}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <div *ngIf=\"item.description\" [innerHTML]=\"item.description\"></div>\n          <div *ngIf=\"item.inputType === 'text'\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">{{ item.placeholder || 'Indique su respuesta' }}</ion-label>\n              <ion-input [(ngModel)]=\"questionsModel[item._id]\" [required]=\"item.require\"></ion-input>\n            </ion-item>\n          </div>\n          <div *ngIf=\"item.inputType === 'textarea'\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">{{ item.placeholder || 'Indique su respuesta' }}</ion-label>\n              <ion-textarea\n                rows=\"4\"\n                cols=\"20\"\n                [(ngModel)]=\"questionsModel[item._id]\"\n                [required]=\"item.require\"\n              ></ion-textarea>\n            </ion-item>\n          </div>\n          <div *ngIf=\"item.inputType === 'radio'\">\n            <ion-radio-group [(ngModel)]=\"questionsModel[item._id]\" value=\"{{questionsModel[item._id]}}\">\n              <ion-list *ngFor=\"let value of item.values; let i=index\">\n                <ion-item>\n                  <ion-label>{{ value }}</ion-label>\n                  <ion-radio slot=\"start\" value=\"{{i}}\"></ion-radio>\n                </ion-item>\n              </ion-list>\n            </ion-radio-group>\n          </div>\n          <div *ngIf=\"item.inputType === 'checkbox'\">\n            <ion-list>\n              <ion-item *ngFor=\"let value of questionsModel[item._id]\">\n                <ion-label>{{ value.val }}</ion-label>\n                <ion-checkbox\n                  slot=\"start\"\n                  [(ngModel)]=\"value.isChecked\"\n                ></ion-checkbox>\n              </ion-item>\n            </ion-list>\n          </div>\n        </ion-card-content>\n        <ion-card-content>\n          <ion-text *ngIf=\"item.require\"><i>(*) Obligatoria </i></ion-text>\n          <div *ngIf=\"item.extra\">\n            <div [innerHTML]=\"item.extra\"></div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n    <ion-card>\n      <ion-card-content>\n        <div *ngIf=\"viewSelected === 0; else nextButtons\">\n          <ion-row>\n            <ion-col size=\"6\" *ngIf=\"viewSelected !== totalsViews\">\n              <ion-button\n                color=\"light\"\n                expand=\"full\"\n                (click)=\"close()\"\n              >\n                <ion-text>CERRAR</ion-text>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"6\" *ngIf=\"viewSelected !== totalsViews\">\n              <ion-button\n                color=\"primary\"\n                expand=\"full\"\n                (click)=\"getQuestionsFromList(true)\"\n              >\n                <ion-text>SIGUIENTE</ion-text>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"12\" class=\"ion-text-center\" *ngIf=\"viewSelected === totalsViews\">\n              <ion-button\n                color=\"primary\"\n                (click)=\"close()\"\n              >\n                <ion-text>FINALIZAR</ion-text>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </div>\n        <ng-template #nextButtons>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-button\n                color=\"light\"\n                expand=\"full\"\n                (click)=\"getQuestionsFromList()\"\n              >\n                <ion-text>ATRÁS</ion-text>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"6\" *ngIf=\"viewSelected > 0 && viewSelected < totalsViews\">\n              <ion-button\n                color=\"primary\"\n                expand=\"full\"\n                (click)=\"getQuestionsFromList(true)\"\n              >\n                <ion-text>SIGUIENTE</ion-text>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"6\" *ngIf=\"viewSelected === totalsViews\">\n              <ion-button\n                color=\"primary\"\n                expand=\"full\"\n                (click)=\"close()\"\n              >\n                <ion-text>CERRAR</ion-text>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ng-template>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>\n");

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

/***/ "VfQg":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/cursos/detalles-curso/modal-editar-contenido/modal-editar-contenido.page.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .ck-editor__editable_inline {\n  min-height: 250px;\n  color: #333333 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZGFsLWVkaXRhci1jb250ZW5pZG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQUNGIiwiZmlsZSI6Im1vZGFsLWVkaXRhci1jb250ZW5pZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSB7XHJcbiAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

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
    constructor(globalSer, modalCtrl, cursosService) {
        this.globalSer = globalSer;
        this.modalCtrl = modalCtrl;
        this.cursosService = cursosService;
        this.titleModal = 'Agregar tema';
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
    confirmCloseModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertConfirm({
                header: 'Confirme',
                message: '¿Está seguro qué cerrar la ventana?<br><br>NOTA: Todos los cambios se perderán.',
                confirmAction: () => this.closeModal()
            });
        });
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
            const created = yield this.cursosService.createThemeCourse(this.id, this.formData);
            if (created && !created.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', 'Se ha agregado el tema exitosamente.');
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
            const updated = yield this.cursosService.updateThemeCourse(this.id, this.themeId, this.formData);
            if (updated && !updated.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado el tema exitosamente.');
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
                yield this.globalSer.alertConfirm({
                    header: 'Confirme',
                    message: `¿Está seguro qué desea ${this.contentId ? 'actualizar' : 'agregar'} este tema?`,
                    confirmAction: () => {
                        if (this.themeId && this.contentId)
                            this.updateContent();
                        else
                            this.createContent();
                    }
                });
            }
            else {
                yield this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
            }
        });
    }
};
ModalEditarContenidoPage.ctorParameters = () => [
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
        path: 'modal-editar-contenido',
        loadChildren: () => __webpack_require__.e(/*! import() | modal-editar-contenido-modal-editar-contenido-module */ "modal-editar-contenido-modal-editar-contenido-module").then(__webpack_require__.bind(null, /*! ./modal-editar-contenido/modal-editar-contenido.module */ "pHo5")).then(m => m.ModalEditarContenidoPageModule)
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
/* harmony default export */ __webpack_exports__["default"] = (".mini-title {\n  font-size: 0.9em !important;\n  font-weight: bold;\n}\n\n.h-100 {\n  height: 100% !important;\n}\n\n.big-number {\n  font-size: 4em !important;\n}\n\n.title-or-description {\n  font-size: 1.2em !important;\n}\n\n.icon-courses {\n  width: 100% !important;\n  height: 200px !important;\n  margin: 0 auto !important;\n}\n\n.min-height-description {\n  max-height: 250px !important;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2RldGFsbGVzLWN1cnNvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7QUFDRjs7QUFDQTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQUVGOztBQUNBO0VBQ0UsNEJBQUE7RUFDQSxjQUFBO0FBRUYiLCJmaWxlIjoiZGV0YWxsZXMtY3Vyc28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pbmktdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmgtMTAwIHtcclxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJpZy1udW1iZXIge1xyXG4gIGZvbnQtc2l6ZTogNGVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aXRsZS1vci1kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5pY29uLWNvdXJzZXN7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1pbi1oZWlnaHQtZGVzY3JpcHRpb24ge1xyXG4gIG1heC1oZWlnaHQ6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgLy9tYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */");

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
    constructor(globalSer, modalController) {
        this.globalSer = globalSer;
        this.modalController = modalController;
        this.test = [];
        this.title = null;
        this.description = null;
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
            this.viewSelected += next ? 1 : -1;
            this.questionsView = this.questions[this.viewSelected] || null;
        });
    }
};
ModalPreviewPruebaPage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ModalPreviewPruebaPage.propDecorators = {
    test: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" *ngIf=\"!views.info.edit\">\n      <ion-button (click)=\"back()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ title }}</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"showAddButton && staticData && !views.info.edit && !staticData.enable\">\n      <ion-button color=\"danger\" (click)=\"confirmCourseDelete()\">\n        <ion-icon name=\"trash-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Eliminar curso</ion-text>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row *ngIf=\"staticData\">\n    <ion-col [size]=\"12\">\n      <ion-card>\n        <ion-card-header class=\"ion-no-padding ion-no-margin\">\n          <ion-toolbar color=\"primary\">\n            <ion-buttons slot=\"start\" *ngIf=\"!views.info.edit\">\n              <ion-button (click)=\"setShowView('info')\">\n                <ion-icon name=\"chevron-{{views.info.show ? 'up' : 'down' }}-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-title *ngIf=\"!views.info.edit\">{{ views.info.title }}</ion-title>\n            <ion-title *ngIf=\"views.info.edit\">Editar datos principales del curso</ion-title>\n            <ion-buttons slot=\"end\" *ngIf=\"showAddButton && views.info.show && !staticData.enable\">\n              <ion-button (click)=\"setShowEditInfo('info')\" *ngIf=\"!views.info.edit\">\n                <ion-icon name=\"create-outline\"></ion-icon>\n                <ion-text>Editar</ion-text>\n              </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-card-header>\n        <ion-card-content class=\"{{views.info.show ? '' : 'ion-hide'}}\">\n\n          <div *ngIf=\"!views.info.edit\">\n            <ion-row>\n              <ion-col size=\"12\" class=\"ion-text-center\">\n                <img src=\"assets/icon/level-{{views.info.data.level}}.svg\" class=\"icon-courses\">\n              </ion-col>\n              <ion-col [size]=\"12\" size-sm=\"6\">\n                <ion-row>\n                  <ion-col [size]=\"12\">\n                    <ion-text><b class=\"mini-title no-selected-text\">Título curso</b></ion-text><br/>\n                    <ion-text class=\"title-or-description ion-margin-bottom\">{{views.info.data.title}}</ion-text>\n                  </ion-col>\n                  <ion-col [size]=\"12\">\n                    <ion-text><b class=\"mini-title no-selected-text\">Nivel</b></ion-text><br/>\n                    <ion-text class=\"title-or-description ion-margin-bottom\">{{views.info.data.level || 'No especificado' }}</ion-text>\n                  </ion-col>\n                  <ion-col [size]=\"12\">\n                    <ion-text><b class=\"mini-title no-selected-text\">Dirigido a</b></ion-text><br/>\n                    <ion-text class=\"title-or-description ion-margin-bottom\">{{views.info.data.toRoles ? this.getRoles(views.info.data.toRoles) : 'No especificado' }}</ion-text>\n                  </ion-col>\n                  <ion-col [size]=\"12\">\n                    <ion-text><b class=\"mini-title no-selected-text\">Ponente</b></ion-text><br/>\n                    <ion-text class=\"title-or-description ion-margin-bottom\">{{views.info.data.speaker || 'No especificado'}}</ion-text>\n                  </ion-col>\n                  <ion-col [size]=\"12\">\n                    <ion-text><b class=\"mini-title no-selected-text\">Cargo o posición del ponente</b></ion-text><br/>\n                    <ion-text class=\"title-or-description ion-margin-bottom\">{{views.info.data.speakerPosition || 'No especificado'}}</ion-text>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col [size]=\"12\" size-sm=\"6\">\n                <ion-row>\n                  <ion-col [size]=\"12\">\n                    <ion-text><b class=\"mini-title no-selected-text\">Descripción</b></ion-text><br/>\n                    <div class=\"min-height-description\">\n                      <div [innerHTML]=\"views.info.data.description\"></div>\n                    </div>\n                  </ion-col>\n                  <ion-col [size]=\"12\">\n                    <ion-text><b class=\"mini-title no-selected-text\">Miembros actualmente con el curso</b></ion-text><br/>\n                    <ion-text class=\"title-or-description ion-margin-bottom\">{{totalsUsers}}</ion-text>\n                  </ion-col>\n                  <ion-col [size]=\"12\">\n                    <ion-text><b class=\"mini-title no-selected-text\">Estado del curso</b></ion-text><br/>\n                    <ion-text class=\"title-or-description ion-margin-bottom\">{{staticData.enable ? 'Publicado' : 'No publicado'}}</ion-text>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </div>\n\n          <div *ngIf=\"showAddButton && views.info.edit && formDataInfo && !staticData.enable\">\n            <app-editar-info-curso\n              [data]=\"formDataInfo\"\n              [handleCancel]=\"cancelEditInfo\"\n              [handleSave]=\"saveEditInfo\"\n            ></app-editar-info-curso>\n          </div>\n\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n    <ion-col [size]=\"12\" *ngIf=\"!views.info.edit\">\n      <ion-card>\n        <ion-card-header class=\"ion-no-padding ion-no-margin\">\n          <ion-toolbar color=\"primary\">\n            <ion-buttons slot=\"start\">\n              <ion-button (click)=\"setShowView('temary')\">\n                <ion-icon name=\"chevron-{{views.temary.show ? 'up' : 'down' }}-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-title>\n              {{ views.temary.title }} ({{ views.temary.data.length }})\n            </ion-title>\n            <ion-buttons slot=\"end\" *ngIf=\"showAddButton && views.temary.show && !staticData.enable\">\n              <ion-button (click)=\"modalTheme()\">\n                <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Agregar tema</ion-text>\n              </ion-button>\n              <ion-button (click)=\"modalTheme(null, true)\">\n                <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Agregar Quiz</ion-text>\n              </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-card-header>\n        <ion-card-content class=\"{{views.temary.show ? '' : 'ion-hide'}}\">\n          <app-temarylist\n            [temary]=\"views.temary.data\"\n            [enableActions]=\"!staticData.enable\"\n            [handlePreview]=\"showPreviewModal\"\n            [handleEditTheme]=\"showEditTheme\"\n            [handleDeleteTheme]=\"showDeleteConfirmTheme\"\n            *ngIf=\"views.temary.data.length > 0; else noTemaries\"\n          ></app-temarylist>\n\n          <ng-template #noTemaries>\n            <ion-row>\n              <ion-col [size]=\"12\" class=\"ion-text-center\">\n                <ion-text color=\"medium\">\n                  <p class=\"ion-margin-top ion-padding-top ion-text-center no-selected-text\">\n                    <ion-icon name=\"alert-circle-outline\"></ion-icon> Este curso no posee temas.\n                  </p>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n          </ng-template>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n    <ion-col class=\"ion-margin-bottom ion-padding-bottom\" [size]=\"12\" *ngIf=\"showAddButton && !views.info.edit\">\n      <ion-card>\n        <ion-card-header class=\"ion-no-padding ion-no-margin\">\n          <ion-toolbar color=\"primary\">\n            <ion-buttons slot=\"start\">\n              <ion-button (click)=\"setShowView('publish')\">\n                <ion-icon name=\"chevron-{{views.publish.show ? 'up' : 'down' }}-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-title>{{ views.publish.title }}</ion-title>\n          </ion-toolbar>\n        </ion-card-header>\n        <ion-card-content class=\"{{views.publish.show ? '' : 'ion-hide'}}\">\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col class=\"ion-margin-top\" size=\"12\">\n              <h2><b>IMPORTANTE</b></h2>\n              <ul>\n                <li>Puede publicar el curso a los miembros con solo presionar el botón: <b>\"PUBLICAR CURSO\"</b>.</li>\n                <li>Puede retirar el curso del listado público con solo presionar el botón <b>\"QUITAR CURSO DE LA SECCIÓN PÚBLICA\"</b>.</li>\n                <li>El curso una vez publicado, <b>NO PUEDE SER EDITADO</b> en ninguna de las secciones.</li>\n                <li>Puede editar un curso siempre y cuando este no se encuentre publicado.</li>\n              </ul>\n              <h3>\n                <b>NOTA:</b> ASEGÚRESE DE VERIFICAR EL CONTENIDO DEL CURSO ANTES DE PUBLICARLO.\n              </h3>\n            </ion-col>\n            <ion-col class=\"ion-margin-top ion-padding-top ion-text-center\" size=\"12\">\n              <ion-button\n                size=\"large\"\n                [color]=\"views.publish.enable ? 'danger' : 'primary'\"\n                (click)=\"confirmPublish()\"\n              >\n                <ion-icon name=\"alert-circle-outline\" slot=\"start\" *ngIf=\"views.publish.enable\"></ion-icon>\n                <ion-icon name=\"earth-outline\" slot=\"start\" *ngIf=\"!views.publish.enable\"></ion-icon>\n                <ion-text>{{ views.publish.enable ? 'Quitar curso de la sección pública' : 'Publicar curso' }}</ion-text>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

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
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "+z1p");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _cursos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../cursos.service */ "BpEJ");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/global.service */ "4WDQ");








let ModalEditarPreguntaPage = class ModalEditarPreguntaPage {
    constructor(globalSer, modalCtrl, cursosService) {
        this.globalSer = globalSer;
        this.modalCtrl = modalCtrl;
        this.cursosService = cursosService;
        this.id = null;
        this.themeId = null;
        this.quiz = [];
        this.quizViews = [];
        this.showInfoForm = true;
        this.titleModal = 'Agregar Quiz';
        this.inputsList = [];
        this.word = null;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5__;
        this.configEditor = null;
        this.formData = {
            title: null,
            description: null,
        };
        this.inputsList = this.cursosService.inputTypeList;
        this.configEditor = this.globalSer.configEditor;
    }
    ngOnInit() {
        if (this.data) {
            // set title
            if (this.data.title)
                this.titleModal = `Editar: ${this.data.title}`;
            this.formData.title = this.data.title;
            this.formData.description = this.data.description;
            // set principal params
            this.id = this.data.id;
            this.themeId = this.data.themeId;
            this.quiz = [...this.data.quiz] || false;
            if (this.quiz.length > 0)
                this.quiz.forEach(_ => { this.quizViews.push(false); });
        }
    }
    closeModal(data = null) {
        this.modalCtrl.dismiss(data);
    }
    confirmCloseModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertConfirm({
                header: 'Confirme',
                message: '¿Está seguro qué cerrar la ventana?<br><br>NOTA: Todos los cambios se perderán.',
                confirmAction: () => this.closeModal()
            });
        });
    }
    setShowView(index) {
        this.quizViews[index] = !this.quizViews[index];
    }
    setShowInfoView() {
        this.showInfoForm = !this.showInfoForm;
    }
    addItem() {
        this.quiz.push({
            title: null,
            description: null,
            placeholder: null,
            extra: null,
            inputType: null,
            require: true,
            values: [],
            correctAnswer: null,
        });
        this.quizViews.push(true);
    }
    removeItem(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertConfirm({
                header: 'Confirme',
                message: '¿Está seguro qué desea quitar esta pregunta?',
                confirmAction: () => {
                    this.quiz.splice(index, 1);
                    this.quizViews.splice(index, 1);
                }
            });
        });
    }
    /*
      actions service
     */
    addQuestion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = {
                title: this.formData.title,
                description: this.formData.description,
                urlVideo: null,
                quiz: this.quiz,
            };
            const add = yield this.cursosService.createThemeCourse(this.id, data);
            if (add && !add.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', 'Se ha agregado el Quiz exitosamente.');
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
            const data = {
                title: this.formData.title,
                description: this.formData.description,
                urlVideo: this.formData.description,
                quiz: this.quiz,
            };
            const updated = yield this.cursosService.updateThemeCourse(this.id, this.themeId, data);
            if (updated && !updated.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado el Quiz exitosamente.');
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
    addValuesInList(index) {
        if (this.word)
            this.quiz[index].values.push(this.word);
        this.word = null;
    }
    removeValueOfList(elem, index) {
        if (!!this.quiz[elem]) {
            this.quiz[elem].values.splice(index, 1);
            this.quiz[elem].correctAnswer = null;
        }
        this.word = null;
    }
    enableButtonSave() {
        const val1 = [null, ''];
        let counter = 0;
        if (val1.indexOf(this.formData.title) > -1)
            counter += 1;
        // if (val1.indexOf(this.formData.description) > -1) counter += 1;
        if (this.quiz.length === 0)
            counter += 1;
        return counter > 0;
    }
    showInputsListAlert(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputs = [];
            for (const value of this.inputsList) {
                inputs.push({
                    name: `input-type`,
                    type: 'radio',
                    label: value.label,
                    value: value.val,
                    checked: this.quiz[index].inputType === value.val,
                });
            }
            yield this.globalSer.alertWithList({
                header: 'Tipo de campo',
                inputs,
                confirmAction: (selectedValue) => {
                    if (['text', 'textarea'].indexOf(selectedValue) > -1) {
                        this.quiz[index].values = [];
                        this.quiz[index].placeholder = null;
                        this.quiz[index].correctAnswer = null;
                    }
                    this.quiz[index].inputType = selectedValue;
                }
            });
        });
    }
    showRequireAlert(index) {
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
                confirmAction: (selectedValue) => { this.quiz[index].require = selectedValue; }
            });
        });
    }
    confirmEdit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validated = this.cursosService.validationEdit('question', Object.assign(Object.assign({}, this.formData), { quiz: this.quiz }));
            if (!validated) {
                yield this.globalSer.alertConfirm({
                    header: 'Confirme',
                    message: `¿Está seguro qué desea ${this.themeId ? 'actualizar' : 'agregar'} este Quiz?`,
                    confirmAction: () => {
                        if (this.themeId)
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
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _cursos_service__WEBPACK_IMPORTED_MODULE_6__["CursosService"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ titleModal }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button\n        color=\"primary\"\n        (click)=\"confirmEdit()\"\n        [disabled]=\"disableButton()\"\n      >\n        <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Guardar</ion-text>\n      </ion-button>\n      <ion-button (click)=\"confirmCloseModal()\">\n        <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Cancelar</ion-text>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item>\n        <ion-label position=\"floating\" color=\"medium\">Título del contenido (*)</ion-label>\n        <ion-input\n          [(ngModel)]=\"formData.title\"\n          class=\"ion-text-uppercase\"\n          maxlength=\"30\"\n        ></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-item>\n        <ion-label position=\"floating\" color=\"medium\">Enlace de YouTube</ion-label>\n        <ion-input\n          [(ngModel)]=\"formData.urlVideo\"\n          maxlength=\"150\"\n        ></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ckeditor\n        [(ngModel)]=\"formData.description\"\n        [editor]=\"Editor\"\n        [config]=\"configEditor\"\n      ></ckeditor>\n    </ion-col>\n    <ion-col size=\"12\" class=\"ion-margin-top\">\n      <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=detalles-curso-detalles-curso-module.js.map