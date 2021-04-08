(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detalles-grupo-detalles-grupo-module"],{

/***/ "B5Gd":
/*!*******************************************************************************!*\
  !*** ./src/app/views/grupos-familiares/detalles-grupo/detalles-grupo.page.ts ***!
  \*******************************************************************************/
/*! exports provided: DetallesGrupoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesGrupoPage", function() { return DetallesGrupoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalles_grupo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalles-grupo.page.html */ "C5MA");
/* harmony import */ var _detalles_grupo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalles-grupo.page.scss */ "ybGL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _asignar_miembro_asignar_miembro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../asignar-miembro/asignar-miembro.page */ "G9AF");
/* harmony import */ var _grupos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../grupos.service */ "ai4U");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../Utils/validations.functions */ "OmbT");










let DetallesGrupoPage = class DetallesGrupoPage {
    constructor(activateRoute, globalSer, gruposService, navCtrl) {
        this.activateRoute = activateRoute;
        this.globalSer = globalSer;
        this.gruposService = gruposService;
        this.navCtrl = navCtrl;
        // info profile
        this.title = 'Cargando...';
        this.id = null;
        this.group = null;
        this.formData = null;
        this.views = {
            data: {
                label: 'Datos del grupo',
                show: true,
                edit: false,
                data: null,
            },
            members: {
                label: 'Miembros',
                show: false,
                edit: false,
                data: {
                    leader: null,
                    host: null,
                    assistant: null,
                    master: null,
                },
            }
        };
        this.handleRemove = (id) => this.removeMember(id);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.id = this.activateRoute.snapshot.paramMap.get('id');
            yield this.globalSer.presentLoading();
            const data = yield this.gruposService.getGroupDetails(this.id);
            if (data && !data.error) {
                this.group = Object.assign({}, data);
                this.views.data.data = data;
                this.views.members.data = data.members;
                this.title = this.getTitle();
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
    updateData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Actualizando, por favor espere ...');
            const updated = yield this.gruposService.updateGroup(this.id, this.formData);
            if (updated && !updated.error) {
                this.group = Object.assign({}, updated);
                this.views.data.data = Object.assign({}, updated);
                this.title = this.getTitle();
                yield this.editEnable(true);
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado la información exitosamente.');
            }
            else if (updated && updated.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    updateMembers(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Actualizando, por favor espere ...');
            // get ids
            const members = {
                leaderId: data.leader ? (data.leader._id || null) : null,
                hostId: data.host ? (data.host._id || null) : null,
                assistantId: data.assistant ? (data.assistant._id || null) : null,
                masterId: data.master ? (data.master._id || null) : null,
            };
            const updated = yield this.gruposService.updateMembersGroup(this.id, { members });
            if (updated && !updated.error) {
                this.group.members = Object.assign({}, updated);
                this.views.members.data = Object.assign({}, updated);
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado la información exitosamente.');
            }
            else if (updated && updated.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    deleteUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Eliminando, por favor espere ...');
            const deleted = yield this.gruposService.deleteGroup(this.id);
            if (deleted && !deleted.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', deleted || 'Se ha eliminado los datos del grupo exitosamente.');
                yield this.back();
            }
            else if (deleted && deleted.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    getTitle(edit = false) {
        return `${edit ? 'Editando' : 'Detalles'}: Sector #${this.group.sector}, Sub-sector #${this.group.subSector}, Grupo #${this.group.number}`;
    }
    back() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navCtrl.back();
        });
    }
    // actions views
    setShowView(input) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.views[input].show = !this.views[input].show;
            if (this.views[input].edit) {
                yield this.editEnable();
            }
        });
    }
    // actions
    editEnable(edited = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!edited)
                yield this.globalSer.presentLoading();
            this.views.data.edit = !this.views.data.edit;
            if (this.views.data.edit) {
                this.formData = {
                    sector: this.views.data.data.sector,
                    subSector: this.views.data.data.subSector,
                    number: this.views.data.data.number,
                    direction: this.views.data.data.direction,
                };
                this.title = this.getTitle(true);
            }
            else {
                this.title = this.getTitle();
                this.formData = null;
            }
            if (!edited)
                yield this.globalSer.dismissLoading();
        });
    }
    validateOnlyNumber(event) {
        Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_9__["onlyNumbersInputValidation2"])(event);
    }
    confirmUpdate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validated = this.gruposService.validateDataGroup(this.formData);
            if (validated)
                yield this.globalSer.presentAlert('Alerta', validated);
            else {
                yield this.globalSer.alertConfirm({
                    header: 'Confirme',
                    message: '¿Está seguro qué desea actualizar información de este grupo?',
                    confirmAction: () => this.updateData()
                });
            }
        });
    }
    // members
    modalMember(role) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const updateData = (member) => {
                if (member) {
                    const data = Object.assign({}, this.views.members.data);
                    data[role] = member;
                    this.updateMembers(data);
                }
            };
            yield this.globalSer.dismissLoading();
            yield this.globalSer.loadModal(_asignar_miembro_asignar_miembro_page__WEBPACK_IMPORTED_MODULE_6__["AsignarMiembroPage"], { data: Object.assign({}, this.views.members.data) }, false, updateData);
        });
    }
    removeMember(id) {
        const confirm = () => {
            const data = Object.assign({}, this.views.members.data);
            if (data.assistant && data.assistant._id === id)
                data.assistant = null;
            if (data.host && data.host._id === id)
                data.host = null;
            if (data.leader && data.leader._id === id)
                data.leader = null;
            if (data.master && data.master._id === id)
                data.master = null;
            this.updateMembers(data);
        };
        this.globalSer.alertConfirm({
            header: 'Confirme',
            message: '¿Está seguro qué desea quitar a este miembro del grupo?',
            confirmAction: () => confirm()
        });
    }
};
DetallesGrupoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"] },
    { type: _grupos_service__WEBPACK_IMPORTED_MODULE_7__["GruposService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
DetallesGrupoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalles-grupo',
        template: _raw_loader_detalles_grupo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalles_grupo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetallesGrupoPage);



/***/ }),

/***/ "C5MA":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/grupos-familiares/detalles-grupo/detalles-grupo.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"group\">\n    <ion-card *ngIf=\"views.data.data\">\n      <ion-card-header class=\"ion-no-padding ion-no-margin\">\n        <ion-toolbar color=\"primary\">\n          <ion-buttons slot=\"start\">\n            <ion-button (click)=\"setShowView('data')\" *ngIf=\"!views.data.edit\">\n              <ion-icon name=\"chevron-{{views.data.show ? 'up' : 'down' }}-outline\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"editEnable()\" *ngIf=\"views.data.edit\">\n              <ion-icon name=\"close-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n          <ion-title *ngIf=\"!views.data.edit\">{{ views.data.label }}</ion-title>\n          <ion-title *ngIf=\"views.data.edit\">Editar grupo familiar</ion-title>\n          <ion-buttons slot=\"end\" *ngIf=\"views.data.show\">\n            <ion-button color=\"primary\" (click)=\"editEnable()\" *ngIf=\"views.data.edit\">\n              <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n              <ion-text>Cancelar edición</ion-text>\n            </ion-button>\n            <ion-button color=\"light\" expand=\"full\" (click)=\"editEnable()\" slot=\"end\" *ngIf=\"!views.data.edit\">\n              <ion-icon name=\"create-outline\" slot=\"start\"></ion-icon>\n              <ion-text>Editar</ion-text>\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-card-header>\n      <ion-card-content class=\"{{ views.data.show ? '' : 'ion-hide' }}\">\n        <ion-row>\n          <ion-col class=\"ion-no-margin\" size=\"12\" *ngIf=\"views.data.edit && formData\">\n            <ion-row>\n              <ion-col size=\"12\" size-sm=\"4\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"medium\">Sector (*)</ion-label>\n                  <ion-input\n                    [(ngModel)]=\"formData.sector\"\n                    autocomplete=\"off\"\n                    maxlength=\"4\"\n                    (keypress)=\"validateOnlyNumber($event)\"\n                  ></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"4\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"medium\">Sub-sector (*)</ion-label>\n                  <ion-input\n                    [(ngModel)]=\"formData.subSector\"\n                    autocomplete=\"off\"\n                    maxlength=\"4\"\n                    (keypress)=\"validateOnlyNumber($event)\"\n                  ></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"4\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"medium\">Número (*)</ion-label>\n                  <ion-input\n                    [(ngModel)]=\"formData.number\"\n                    autocomplete=\"off\"\n                    maxlength=\"4\"\n                    (keypress)=\"validateOnlyNumber($event)\"\n                  ></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"medium\">Dirección (*)</ion-label>\n                  <ion-textarea\n                    [(ngModel)]=\"formData.direction\"\n                    rows=\"5\"\n                    class=\"ion-text-uppercase\"\n                    placeholder=\"Indica la dirección del grupo familiar...\"\n                  ></ion-textarea>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top\">\n                <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top ion-margin-bottom ion-text-center\">\n                <ion-button color=\"light\" (click)=\"editEnable()\">\n                  <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n                  <ion-text>Cancelar</ion-text>\n                </ion-button>\n                <ion-button color=\"primary\" (click)=\"confirmUpdate()\">\n                  <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\n                  <ion-text>Guardar</ion-text>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <ion-col size=\"12\" *ngIf=\"!views.data.edit\">\n            <ion-row>\n              <ion-col class=\"ion-no-padding\" size=\"12\" size-sm=\"6\">\n                <ion-row>\n                  <ion-col size=\"5\">\n                    <ion-text><b>Número</b></ion-text>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <ion-text>{{group.number}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"5\">\n                    <ion-text><b>Sector:</b></ion-text>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <ion-text>{{group.sector || 'No indicado.'}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"5\">\n                    <ion-text><b>Sub-sector:</b></ion-text>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <ion-text>{{group.subSector || 'No indicado.'}}</ion-text>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col class=\"ion-no-padding\" size=\"12\" size-sm=\"6\">\n                <ion-row>\n                  <ion-col size=\"5\">\n                    <ion-text><b>Dirección</b></ion-text>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <ion-text>{{group.direction || 'No indicado.'}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"5\">\n                    <ion-text><b>Fecha de creación:</b></ion-text>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <ion-text>{{group.created_at || 'No indicado'}}</ion-text>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class=\"{{ views.data.edit ? 'ion-hide' : '' }}\">\n      <ion-card-header class=\"ion-no-padding ion-no-margin\">\n        <ion-toolbar color=\"primary\">\n          <ion-buttons slot=\"start\">\n            <ion-button (click)=\"setShowView('members')\">\n              <ion-icon name=\"chevron-{{views.members.show ? 'up' : 'down' }}-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n          <ion-title>{{ views.members.label }}</ion-title>\n        </ion-toolbar>\n      </ion-card-header>\n      <ion-card-content class=\"{{ views.members.show ? '' : 'ion-hide' }}\">\n        <ion-row class=\"ion-margin-bottom\" *ngIf=\"views.members.data; else noMembers\">\n          <ion-col size=\"12\" size-sm=\"6\" class=\"ion-margin-top\">\n            <ion-text class=\"ion-margin-top\"><h2><b>Líder:</b></h2></ion-text>\n            <app-user-group-card\n              [user]=\"views.members.data.leader\"\n              [handleRemove]=\"handleRemove\"\n              [added]=\"true\"\n              *ngIf=\"views.members.data.leader; else noleader\"\n            ></app-user-group-card>\n            <ng-template #noleader>\n              <ion-card>\n                <ion-card-content>\n                  <ion-text>\n                    <p class=\"ion-text-center\">\n                      <ion-icon name=\"alert-circle-outline\"></ion-icon>\n                      No se ha asignado ningún miembro a este rol.\n                      <br>\n                      <ion-button color=\"primary\" (click)=\"modalMember('leader')\">\n                        <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\n                        <ion-text>Asignar</ion-text>\n                      </ion-button>\n                    </p>\n                  </ion-text>\n                </ion-card-content>\n              </ion-card>\n            </ng-template>\n          </ion-col>\n          <ion-col size=\"12\" size-sm=\"6\" class=\"ion-margin-top\">\n            <ion-text class=\"ion-margin-top\"><h2><b>Anfitrión:</b></h2></ion-text>\n            <app-user-group-card\n              [user]=\"views.members.data.host\"\n              [handleRemove]=\"handleRemove\"\n              [added]=\"true\"\n              *ngIf=\"views.members.data.host; else nohost\"\n            ></app-user-group-card>\n            <ng-template #nohost>\n              <ion-card>\n                <ion-card-content>\n                  <ion-text>\n                    <p class=\"ion-text-center\">\n                      <ion-icon name=\"alert-circle-outline\"></ion-icon>\n                      No se ha asignado ningún miembro a este rol.\n                      <br>\n                      <ion-button color=\"primary\" (click)=\"modalMember('host')\">\n                        <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\n                        <ion-text>Asignar</ion-text>\n                      </ion-button>\n                    </p>\n                  </ion-text>\n                </ion-card-content>\n              </ion-card>\n            </ng-template>\n          </ion-col>\n          <ion-col size=\"12\" size-sm=\"6\" class=\"ion-margin-top\">\n            <ion-text class=\"ion-margin-top\"><h2><b>Asistente:</b></h2></ion-text>\n            <app-user-group-card\n              [user]=\"views.members.data.assistant\"\n              [handleRemove]=\"handleRemove\"\n              [added]=\"true\"\n              *ngIf=\"views.members.data.assistant; else noassistant\"\n            ></app-user-group-card>\n            <ng-template #noassistant>\n              <ion-card>\n                <ion-card-content>\n                  <ion-text>\n                    <p class=\"ion-text-center\">\n                      <ion-icon name=\"alert-circle-outline\"></ion-icon>\n                      No se ha asignado ningún miembro a este rol.\n                      <br>\n                      <ion-button color=\"primary\" (click)=\"modalMember('assistant')\">\n                        <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\n                        <ion-text>Asignar</ion-text>\n                      </ion-button>\n                    </p>\n                  </ion-text>\n                </ion-card-content>\n              </ion-card>\n            </ng-template>\n          </ion-col>\n          <ion-col size=\"12\" size-sm=\"6\" class=\"ion-margin-top\">\n            <ion-text class=\"ion-margin-top\"><h2><b>Maestro:</b></h2></ion-text>\n            <app-user-group-card\n              [user]=\"views.members.data.master\"\n              [handleRemove]=\"handleRemove\"\n              [added]=\"true\"\n              *ngIf=\"views.members.data.master; else nomaster\"\n            ></app-user-group-card>\n            <ng-template #nomaster>\n              <ion-card>\n                <ion-card-content>\n                  <ion-text>\n                    <p class=\"ion-text-center\">\n                      <ion-icon name=\"alert-circle-outline\"></ion-icon>\n                      No se ha asignado ningún miembro a este rol.\n                      <br>\n                      <ion-button color=\"primary\" (click)=\"modalMember('master')\">\n                        <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\n                        <ion-text>Asignar</ion-text>\n                      </ion-button>\n                    </p>\n                  </ion-text>\n                </ion-card-content>\n              </ion-card>\n            </ng-template>\n          </ion-col>\n        </ion-row>\n\n        <ng-template #noMembers>\n          <ion-row class=\"ion-margin-top\">\n            <ion-col size=\"12\">\n              <ion-text>\n                <p class=\"ion-text-center\">\n                  <ion-icon name=\"alert-circle-outline\"></ion-icon>\n                  No se logró obtener los miembros de este grupo.\n                </p>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n        </ng-template>\n      </ion-card-content>\n    </ion-card>\n\n    <div class=\"ion-margin\"><br/></div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "WMYx":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/grupos-familiares/detalles-grupo/detalles-grupo-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: DetallesGrupoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesGrupoPageRoutingModule", function() { return DetallesGrupoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detalles_grupo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalles-grupo.page */ "B5Gd");




const routes = [
    {
        path: '',
        component: _detalles_grupo_page__WEBPACK_IMPORTED_MODULE_3__["DetallesGrupoPage"]
    }
];
let DetallesGrupoPageRoutingModule = class DetallesGrupoPageRoutingModule {
};
DetallesGrupoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetallesGrupoPageRoutingModule);



/***/ }),

/***/ "r9SS":
/*!*********************************************************************************!*\
  !*** ./src/app/views/grupos-familiares/detalles-grupo/detalles-grupo.module.ts ***!
  \*********************************************************************************/
/*! exports provided: DetallesGrupoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesGrupoPageModule", function() { return DetallesGrupoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detalles_grupo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalles-grupo-routing.module */ "WMYx");
/* harmony import */ var _detalles_grupo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalles-grupo.page */ "B5Gd");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "j1ZV");








let DetallesGrupoPageModule = class DetallesGrupoPageModule {
};
DetallesGrupoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detalles_grupo_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetallesGrupoPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_detalles_grupo_page__WEBPACK_IMPORTED_MODULE_6__["DetallesGrupoPage"]]
    })
], DetallesGrupoPageModule);



/***/ }),

/***/ "ybGL":
/*!*********************************************************************************!*\
  !*** ./src/app/views/grupos-familiares/detalles-grupo/detalles-grupo.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhbGxlcy1ncnVwby5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=detalles-grupo-detalles-grupo-module.js.map