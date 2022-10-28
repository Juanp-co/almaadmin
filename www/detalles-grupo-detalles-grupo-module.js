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
/* harmony import */ var _grupos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../grupos.service */ "ai4U");
/* harmony import */ var _asignar_miembro_asignar_miembro_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../asignar-miembro/asignar-miembro.page */ "G9AF");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");
/* harmony import */ var _Utils_data_static__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../Utils/data.static */ "lmIc");










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
            members1: {
                label: 'Miembros principales',
                show: true
            },
            members2: {
                label: 'Asistentes',
                show: true
            }
        };
        this.members = null;
        this.handleAddMember = (role) => this.modalMember(role);
        this.handleRemove = (id) => this.removeMember(id);
        this.handleSave = (formData) => this.setFormDataAndSave(formData);
        this.handleCancel = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return this.editEnable(); });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            this.id = this.activateRoute.snapshot.paramMap.get('id');
            const data = yield this.gruposService.getGroupDetails(this.id);
            if (data && !data.error) {
                this.group = Object.assign({}, data);
                this.views.data.data = data;
                this.members = data.members;
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
    updateMembers(data = {}) {
        var _a, _b, _c, _d, _e;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Actualizando, por favor espere ...');
            // get ids
            const members = {
                leaderId: ((_a = data.leader) === null || _a === void 0 ? void 0 : _a._id) || null,
                helperId: ((_b = data.helper) === null || _b === void 0 ? void 0 : _b._id) || null,
                hostId: ((_c = data.host) === null || _c === void 0 ? void 0 : _c._id) || null,
                assistantsIds: ((_d = data.assistants) === null || _d === void 0 ? void 0 : _d.map(a => a._id)) || [],
                masterId: ((_e = data.master) === null || _e === void 0 ? void 0 : _e._id) || null,
            };
            const updated = yield this.gruposService.updateMembersGroup(this.id, { members });
            if (updated && !updated.error) {
                this.group.members = Object.assign({}, updated);
                this.members = Object.assign({}, updated);
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
    // async deleteUser() {
    //   await this.globalSer.presentLoading('Eliminando, por favor espere ...');
    //
    //   const deleted = await this.gruposService.deleteGroup(this.id);
    //
    //   if (deleted && !deleted.error) {
    //     await this.globalSer.dismissLoading();
    //     await this.globalSer.presentAlert('¡Éxito!', deleted || 'Se ha eliminado los datos del grupo exitosamente.');
    //     await this.back();
    //   }
    //   else if (deleted && deleted.error) {
    //     await this.globalSer.dismissLoading();
    //     await this.globalSer.errorSession();
    //   }
    //   else await this.globalSer.dismissLoading();
    // }
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
            if (this.views[input].edit)
                yield this.editEnable();
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
                    location: this.views.data.data.location || {
                        type: 'Point',
                        coordinates: _Utils_data_static__WEBPACK_IMPORTED_MODULE_9__["staticCoords"]
                    },
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
    // members
    modalMember(role) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const updateData = (member) => {
                if (member) {
                    const data = Object.assign({}, this.members);
                    if (role === 'assistants')
                        data[role].push(member);
                    else
                        data[role] = member;
                    this.updateMembers(data);
                }
            };
            yield this.globalSer.dismissLoading();
            yield this.globalSer.loadModal(_asignar_miembro_asignar_miembro_page__WEBPACK_IMPORTED_MODULE_7__["AsignarMiembroPage"], { data: Object.assign({}, this.members) }, false, updateData);
        });
    }
    removeMember(id) {
        const confirm = () => {
            var _a, _b, _c, _d, _e;
            const data = this.members ? Object.assign({}, this.members) : null;
            if (data) {
                if (((_a = data.host) === null || _a === void 0 ? void 0 : _a._id) === id)
                    data.host = null;
                if (((_b = data.helper) === null || _b === void 0 ? void 0 : _b._id) === id)
                    data.helper = null;
                if (((_c = data.leader) === null || _c === void 0 ? void 0 : _c._id) === id)
                    data.leader = null;
                if (((_d = data.master) === null || _d === void 0 ? void 0 : _d._id) === id)
                    data.master = null;
                data.assistants = ((_e = data.assistants) === null || _e === void 0 ? void 0 : _e.filter(a => a._id !== id)) || [];
                this.updateMembers(data);
            }
        };
        this.globalSer.alertConfirm({
            header: 'Confirme',
            message: '¿Está seguro qué desea quitar a este miembro del grupo?',
            confirmAction: () => confirm()
        });
    }
    getParamsToMap() {
        return [{ type: 'Feature', geometry: this.group.location }];
    }
    setFormDataAndSave(formData) {
        this.formData = formData;
        this.updateData();
    }
};
DetallesGrupoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"] },
    { type: _grupos_service__WEBPACK_IMPORTED_MODULE_6__["GruposService"] },
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ title }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div *ngIf=\"group\">\r\n    <ion-card *ngIf=\"views.data.data\">\r\n      <ion-card-header class=\"ion-no-padding ion-no-margin\">\r\n        <ion-toolbar color=\"primary\">\r\n          <ion-buttons slot=\"start\">\r\n            <ion-button (click)=\"setShowView('data')\" *ngIf=\"!views.data.edit\">\r\n              <ion-icon name=\"chevron-{{views.data.show ? 'up' : 'down' }}-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button (click)=\"editEnable()\" *ngIf=\"views.data.edit\">\r\n              <ion-icon name=\"close-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n          <ion-title *ngIf=\"!views.data.edit\">{{ views.data.label }}</ion-title>\r\n          <ion-title *ngIf=\"views.data.edit\">Editar grupo familiar</ion-title>\r\n          <ion-buttons slot=\"end\" *ngIf=\"views.data.show\">\r\n            <ion-button color=\"light\" (click)=\"editEnable()\" *ngIf=\"views.data.edit\">\r\n              <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\r\n              <ion-text>Cancelar edición</ion-text>\r\n            </ion-button>\r\n            <ion-button color=\"light\" expand=\"full\" (click)=\"editEnable()\" slot=\"end\" *ngIf=\"!views.data.edit\">\r\n              <ion-icon name=\"create-outline\" slot=\"start\"></ion-icon>\r\n              <ion-text>Editar</ion-text>\r\n            </ion-button>\r\n          </ion-buttons>\r\n        </ion-toolbar>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"{{ views.data.show ? '' : 'ion-hide' }}\">\r\n        <ion-row>\r\n          <ion-col class=\"ion-no-margin\" size=\"12\" *ngIf=\"views.data.edit\">\r\n            <app-family-group-form\r\n              [data]=\"formData\"\r\n              [handleSave]=\"handleSave\"\r\n              [handleCancel]=\"handleCancel\"\r\n            >\r\n            </app-family-group-form>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" size-md=\"6\" *ngIf=\"!views.data.edit\">\r\n            <ion-row>\r\n              <ion-col class=\"ion-no-padding\" size=\"12\">\r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <ion-text><b>Número</b></ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"7\">\r\n                    <ion-text>{{group.number}}</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"5\">\r\n                    <ion-text><b>Sector:</b></ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"7\">\r\n                    <ion-text>{{group.sector || 'No indicado.'}}</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"5\">\r\n                    <ion-text><b>Sub-sector:</b></ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"7\">\r\n                    <ion-text>{{group.subSector || 'No indicado.'}}</ion-text>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col class=\"ion-no-padding\" size=\"12\">\r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <ion-text><b>Dirección</b></ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"7\">\r\n                    <ion-text>{{group.direction || 'No indicado.'}}</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"5\">\r\n                    <ion-text><b>Fecha de creación:</b></ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"7\">\r\n                    <ion-text>{{group.created_at || 'No indicado'}}</ion-text>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" size-md=\"6\" *ngIf=\"!views.data.edit\">\r\n            <div class=\"div-map\">\r\n              <app-map\r\n                [coords]=\"getParamsToMap()\"\r\n                [height]=\"'100%'\"\r\n                [zoom]=\"13\"\r\n              ></app-map>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"{{ views.data.edit ? 'ion-hide' : '' }}\">\r\n      <ion-card-header class=\"ion-no-padding ion-no-margin\">\r\n        <ion-toolbar color=\"primary\">\r\n          <ion-buttons slot=\"start\">\r\n            <ion-button (click)=\"setShowView('members1')\">\r\n              <ion-icon name=\"chevron-{{views.members1.show ? 'up' : 'down' }}-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n          <ion-title>{{ views.members1.label }}</ion-title>\r\n        </ion-toolbar>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"{{ views.members1.show ? '' : 'ion-hide' }}\">\r\n        <ion-row class=\"ion-margin-bottom\" *ngIf=\"members; else noMembers\">\r\n          <ion-col size=\"12\" size-sm=\"6\" class=\"ion-margin-top\">\r\n            <app-members-card\r\n              [data]=\"members.leader\"\r\n              title=\"Líder\"\r\n              role=\"leader\"\r\n              [handleAdd]=\"handleAddMember\"\r\n              [handleRemove]=\"handleRemove\"\r\n            ></app-members-card>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-sm=\"6\" class=\"ion-margin-top\">\r\n            <app-members-card\r\n              [data]=\"members.host\"\r\n              title=\"Anfitrión\"\r\n              role=\"host\"\r\n              [handleAdd]=\"handleAddMember\"\r\n              [handleRemove]=\"handleRemove\"\r\n            ></app-members-card>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-sm=\"6\" class=\"ion-margin-top\">\r\n            <app-members-card\r\n              [data]=\"members.helper\"\r\n              title=\"Auxiliar\"\r\n              role=\"helper\"\r\n              [handleAdd]=\"handleAddMember\"\r\n              [handleRemove]=\"handleRemove\"\r\n            ></app-members-card>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-sm=\"6\" class=\"ion-margin-top\">\r\n            <app-members-card\r\n              [data]=\"members.master\"\r\n              title=\"Maestro\"\r\n              role=\"master\"\r\n              [handleAdd]=\"handleAddMember\"\r\n              [handleRemove]=\"handleRemove\"\r\n            ></app-members-card>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ng-template #noMembers>\r\n          <ion-row class=\"ion-margin-top\">\r\n            <ion-col size=\"12\">\r\n              <ion-text color=\"medium\">\r\n                <p class=\"ion-text-center\">\r\n                  <ion-icon name=\"alert-circle-outline\"></ion-icon>\r\n                  No se logró obtener los miembros de este grupo.\r\n                </p>\r\n              </ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ng-template>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"{{ views.data.edit ? 'ion-hide' : '' }}\">\r\n      <ion-card-header class=\"ion-no-padding ion-no-margin\">\r\n        <ion-toolbar color=\"primary\">\r\n          <ion-buttons slot=\"start\">\r\n            <ion-button (click)=\"setShowView('members2')\">\r\n              <ion-icon name=\"chevron-{{views.members2.show ? 'up' : 'down' }}-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n          <ion-title>{{ views.members2.label }}</ion-title>\r\n          <ion-buttons slot=\"end\">\r\n            <ion-button\r\n              (click)=\"modalMember('assistants')\"\r\n              *ngIf=\"members?.assistants?.length > 0\"\r\n            >\r\n              <ion-icon name=\"add-outline\"></ion-icon>\r\n              <ion-text>Agregar</ion-text>\r\n            </ion-button>\r\n          </ion-buttons>\r\n        </ion-toolbar>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"{{ views.members2.show ? '' : 'ion-hide' }}\">\r\n        <ion-row class=\"ion-margin-bottom\" *ngIf=\"members; else noMembers\">\r\n          <ion-col size=\"12\" class=\"ion-margin-top\">\r\n            <ion-row *ngIf=\"members.assistants?.length > 0; else noAssistants\">\r\n              <ion-col size=\"12\" size-sm=\"6\" *ngFor=\"let data of members.assistants\">\r\n                <app-user-group-card\r\n                  [user]=\"data\"\r\n                  [handleRemove]=\"handleRemove\"\r\n                  [added]=\"true\"\r\n                ></app-user-group-card>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ng-template #noAssistants>\r\n              <ion-card>\r\n                <ion-card-content>\r\n                  <ion-text>\r\n                    <p class=\"ion-text-center\">\r\n                      <ion-icon name=\"alert-circle-outline\"></ion-icon>\r\n                      No se han agregado asistentes.\r\n                      <br>\r\n                      <ion-button class=\"ion-margin-top\" color=\"primary\" (click)=\"modalMember('assistants')\">\r\n                        <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\r\n                        <ion-text>Asignar</ion-text>\r\n                      </ion-button>\r\n                    </p>\r\n                  </ion-text>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </ng-template>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ng-template #noMembers>\r\n          <ion-row class=\"ion-margin-top\">\r\n            <ion-col size=\"12\">\r\n              <ion-text color=\"medium\">\r\n                <p class=\"ion-text-center\">\r\n                  <ion-icon name=\"alert-circle-outline\"></ion-icon>\r\n                  No se logró obtener los miembros de este grupo.\r\n                </p>\r\n              </ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ng-template>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <div class=\"ion-margin\"><br/></div>\r\n  </div>\r\n</ion-content>\r\n");

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