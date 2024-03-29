(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["familias-detalles-familias-detalles-module"],{

/***/ "Rvzy":
/*!******************************************************************************!*\
  !*** ./src/app/views/familias/familias-detalles/familias-detalles.module.ts ***!
  \******************************************************************************/
/*! exports provided: FamiliasDetallesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamiliasDetallesPageModule", function() { return FamiliasDetallesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _familias_detalles_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./familias-detalles-routing.module */ "wuqc");
/* harmony import */ var _familias_detalles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./familias-detalles.page */ "ndL8");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "j1ZV");








let FamiliasDetallesPageModule = class FamiliasDetallesPageModule {
};
FamiliasDetallesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _familias_detalles_routing_module__WEBPACK_IMPORTED_MODULE_5__["FamiliasDetallesPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_familias_detalles_page__WEBPACK_IMPORTED_MODULE_6__["FamiliasDetallesPage"]]
    })
], FamiliasDetallesPageModule);



/***/ }),

/***/ "ndL8":
/*!****************************************************************************!*\
  !*** ./src/app/views/familias/familias-detalles/familias-detalles.page.ts ***!
  \****************************************************************************/
/*! exports provided: FamiliasDetallesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamiliasDetallesPage", function() { return FamiliasDetallesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_familias_detalles_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./familias-detalles.page.html */ "oE6T");
/* harmony import */ var _familias_detalles_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./familias-detalles.page.scss */ "ol7F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _familias_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../familias.service */ "c341");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/axios.service */ "1Ldg");
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../Utils/validations.functions */ "OmbT");










let FamiliasDetallesPage = class FamiliasDetallesPage {
    constructor(activateRoute, alertCtrl, axios, globalSer, familiasService, navCtrl, router) {
        this.activateRoute = activateRoute;
        this.alertCtrl = alertCtrl;
        this.axios = axios;
        this.globalSer = globalSer;
        this.familiasService = familiasService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.title = 'Cargando...';
        this.id = null;
        this.staticData = null;
        this.group = null;
        this.edit = false;
        this.formData = null;
        this.findMembers = false;
        this.users = [];
        this.selectedUsers = [];
        this.selectedUsersIds = [];
        this.queryParams = {
            limit: 100,
            page: 1,
            input: 'name',
            value: 1,
            word: null
        };
        this.handleAdd = (id) => this.addToSelected(id);
        this.handleRemove = (id) => this.removeOfSelected(id);
        this.handleDelete = (id) => this.confirmRemoveMember(id);
        // check if exist session
        if (!this.globalSer.checkSession())
            this.router.navigate(['/ingresar']);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.id = this.activateRoute.snapshot.paramMap.get('id');
            yield this.globalSer.presentLoading();
            const data = yield this.familiasService.getGroupDetails(this.id);
            if (data && !data.error) {
                this.staticData = Object.assign({}, data);
                this.group = Object.assign({}, this.staticData);
                this.title = `Grupo: ${this.group.name}`;
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
    // actions
    updateData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Actualizando, por favor espere ...');
            const data = Object.assign({}, this.formData);
            const updated = yield this.familiasService.updateGroup(this.id, data);
            if (updated && !updated.error) {
                this.group = Object.assign(Object.assign({}, this.group), updated);
                this.staticData = Object.assign({}, updated);
                yield this.editEnable(true);
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado los datos del grupo exitosamente.');
            }
            else if (updated && updated.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    deleteGroup() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Eliminando, por favor espere ...');
            const deleted = yield this.familiasService.deleteGroup(this.id);
            if (deleted && !deleted.error) {
                yield this.globalSer.presentAlert('¡Éxito!', 'Se ha eliminado los datos del grupo exitosamente.');
                yield this.navCtrl.back();
                yield this.globalSer.dismissLoading();
            }
            else if (deleted && deleted.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    addOrRemoveMembersGroup(action) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Actualizando listado de miembros, por favor espere ...');
            const data = {
                members: action === 'remove' ? this.group.members.map(m => m._id) : this.selectedUsersIds
            };
            const res = yield this.familiasService.updateMembersListGroup(this.id, action, data);
            if (res && !res.error) {
                if (action === 'add') {
                    this.group.members = this.group.members.concat(this.selectedUsers);
                    this.staticData.members = this.group.members;
                    this.users = [];
                    this.selectedUsers = [];
                    this.selectedUsersIds = [];
                    this.findMembers = false;
                }
                else {
                    this.staticData.members = this.group.members;
                }
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado el listado de miembros exitosamente.');
            }
            else if (res && res.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else {
                this.group.members = this.staticData.members;
                yield this.globalSer.dismissLoading();
            }
        });
    }
    findMembersList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Cargando, por favor espere ...');
            const data = yield this.familiasService.findMembersToGroup(this.id, this.queryParams);
            if (data && !data.error) {
                this.users = data;
                yield this.globalSer.dismissLoading();
            }
            else if (data && data.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else {
                this.findMembers = false;
                yield this.globalSer.dismissLoading();
            }
        });
    }
    // actions and validations
    validateData() {
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_9__["checkTitlesOrDescriptions"])(this.formData.name))
            return 'Disculpe, pero debe indicar un nombre correcto para el grupo.';
        return null;
    }
    back() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navCtrl.back();
        });
    }
    showFindUsers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.users = [];
            this.selectedUsers = [];
            this.selectedUsersIds = [];
            this.findMembers = !this.findMembers;
            if (this.findMembers)
                yield this.findMembersList();
            else
                this.queryParams.word = null;
        });
    }
    addToSelected(id) {
        const user = this.users.find(u => u._id === id);
        if (user) {
            this.selectedUsers.push(user);
            this.selectedUsersIds.push(id);
        }
    }
    removeOfSelected(id) {
        this.selectedUsers = this.selectedUsers.filter(s => s._id !== id);
        this.selectedUsersIds = this.selectedUsersIds.filter(u => u !== id);
    }
    checkAdded(id) {
        return this.selectedUsersIds.indexOf(id) > -1;
    }
    editEnable(edited = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!edited)
                yield this.globalSer.presentLoading();
            this.edit = !this.edit;
            if (this.edit) {
                this.formData = {
                    _id: this.group._id,
                    name: this.group.name,
                    code: this.group.code,
                };
                this.title = `Editar datos de: ${this.formData.name}`;
            }
            else {
                this.title = `Grupo: ${this.group.name}`;
                this.formData = null;
            }
            if (!edited)
                yield this.globalSer.dismissLoading();
        });
    }
    // alerts
    confirmSaveNewMembers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.selectedUsers.length > 0) {
                let message = `¿Está seguro qué desea agregar a estos miembros en el grupo?`;
                for (const m of this.selectedUsers) {
                    message += `<br/><br/>- <b>${m.names} ${m.lastNames}</b> - <i>${m.document}</i>`;
                }
                const alert = yield this.alertCtrl.create({
                    cssClass: 'max-width-640',
                    header: 'Agregar miembros',
                    message,
                    buttons: [
                        {
                            text: 'Cancelar',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => {
                            }
                        }, {
                            text: 'Sí',
                            handler: () => {
                                this.addOrRemoveMembersGroup('add');
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            else {
                yield this.globalSer.presentAlert('Alerta', 'Nada que agregar.');
                this.showFindUsers();
            }
        });
    }
    confirmRemoveMember(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirme',
                message: `¿Está seguro qué desea remover a este miembro de este grupo?`,
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => { }
                    }, {
                        text: 'Sí',
                        handler: () => {
                            this.group.members = this.group.members.filter(m => m._id !== id);
                            this.addOrRemoveMembersGroup('remove');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    confirmUpdate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validated = this.validateData();
            if (!validated) {
                this.formData.name = this.formData.name.trim();
                this.formData.code = this.formData.code.trim();
                this.globalSer.alertConfirm({
                    header: 'Confirme',
                    message: '¿Está seguro qué desea actualizar el nombre de este grupo?',
                    confirmAction: () => { this.updateData(); }
                });
            }
            else {
                yield this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
            }
        });
    }
    confirmDelete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.globalSer.alertConfirm({
                header: 'Confirme',
                message: `¿Está seguro qué desea borrar a este grupo?
        <br/><br/>
        NOTA: Todos los miembros asociados volverán a estar disponibles para ser reasignados.
      `,
                confirmAction: () => this.deleteGroup()
            });
        });
    }
};
FamiliasDetallesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_8__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _familias_service__WEBPACK_IMPORTED_MODULE_6__["FamiliasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
FamiliasDetallesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-familias-detalles',
        template: _raw_loader_familias_detalles_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_familias_detalles_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FamiliasDetallesPage);



/***/ }),

/***/ "oE6T":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/familias/familias-detalles/familias-detalles.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" *ngIf=\"!edit\">\r\n      <ion-button (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ title }}</ion-title>\r\n    <ion-buttons slot=\"end\" *ngIf=\"!findMembers\">\r\n      <ion-button color=\"primary\" (click)=\"editEnable()\" *ngIf=\"edit\">\r\n        <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\r\n        <ion-text>Cancelar edición</ion-text>\r\n      </ion-button>\r\n      <ion-button color=\"primary\" (click)=\"editEnable()\" *ngIf=\"!edit\">\r\n        <ion-icon name=\"create-outline\" slot=\"start\"></ion-icon>\r\n        <ion-text>Editar</ion-text>\r\n      </ion-button>\r\n      <ion-button color=\"danger\" (click)=\"confirmDelete()\" *ngIf=\"!edit\">\r\n        <ion-icon name=\"trash-outline\" slot=\"start\"></ion-icon>\r\n        <ion-text>Eliminar</ion-text>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row>\r\n    <ion-col class=\"ion-no-margin\" size=\"12\" *ngIf=\"edit && formData\">\r\n      <ion-card>\r\n        <ion-card-content>\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"medium\">Nombre del grupo (*)</ion-label>\r\n                <ion-input [(ngModel)]=\"formData.name\" autocomplete=\"off\" class=\"ion-text-uppercase\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top\">\r\n              <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top ion-margin-bottom ion-text-center\">\r\n              <ion-button color=\"medium\" (click)=\"editEnable()\">\r\n                <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\r\n                <ion-text>Cancelar</ion-text>\r\n              </ion-button>\r\n              <ion-button color=\"primary\" (click)=\"confirmUpdate()\">\r\n                <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\r\n                <ion-text>Guardar</ion-text>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n    <!-- list members -->\r\n    <ion-col class=\"ion-no-margin\" size=\"12\" *ngIf=\"!edit && group && group.members && !findMembers\">\r\n      <ion-card>\r\n        <ion-card-header class=\"ion-no-padding\">\r\n          <ion-card-header class=\"ion-no-padding\">\r\n            <ion-toolbar color=\"primary\">\r\n              <ion-title>Listado de miembros ({{ group.members ? group.members.length : 0 }})</ion-title>\r\n              <ion-buttons slot=\"end\">\r\n                <ion-button (click)=\"showFindUsers()\">\r\n                  <ion-icon name=\"add-outline\"></ion-icon>\r\n                  <ion-text>Agregar miembros</ion-text>\r\n                </ion-button>\r\n              </ion-buttons>\r\n            </ion-toolbar>\r\n          </ion-card-header>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <div *ngIf=\"group.members && group.members.length > 0; else noMembers\">\r\n            <ion-row class=\"ion-margin-top\">\r\n              <ion-col [size]=\"6\" *ngFor=\"let m of group.members\">\r\n                <app-user-group-card\r\n                  [user]=\"m\"\r\n                  [showButtonDetails]=\"true\"\r\n                  [handleDelete]=\"handleDelete\"\r\n                ></app-user-group-card>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n          <ng-template #noMembers>\r\n            <ion-row class=\"ion-margin-top\">\r\n              <ion-col size=\"12\">\r\n                <ion-text color=\"medium\">\r\n                  <p class=\"ion-text-center\">\r\n                    <ion-icon name=\"alert-circle-outline\"></ion-icon> No existen miembros registrados en este grupo.\r\n                  </p>\r\n                </ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ng-template>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n\r\n    <!-- add members -->\r\n    <ion-col class=\"ion-no-margin\" size=\"12\" *ngIf=\"!edit && findMembers\">\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-row>\r\n            <ion-col [size]=\"12\" size-sm=\"7\">\r\n              <ion-toolbar>\r\n                <ion-button color=\"medium\" (click)=\"queryParams.word = null; findMembersList()\" slot=\"start\" *ngIf=\"queryParams.word\">\r\n                  <ion-icon name=\"backspace-outline\"></ion-icon>\r\n                </ion-button>\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">Buscar por nombre o número de documento</ion-label>\r\n                  <ion-input\r\n                    [(ngModel)]=\"queryParams.word\"\r\n                    autocomplete=\"off\"\r\n                    class=\"ion-text-uppercase\"\r\n                    maxlength=\"20\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n                <ion-button color=\"medium\" (click)=\"findMembersList()\" slot=\"end\">\r\n                  <ion-icon name=\"search-outline\"></ion-icon>\r\n                </ion-button>\r\n              </ion-toolbar>\r\n            </ion-col>\r\n            <ion-col [size]=\"12\" size-sm=\"5\" class=\"ion-text-right\">\r\n              <ion-button color=\"primary\" (click)=\"confirmSaveNewMembers()\" [disabled]=\"selectedUsers.length === 0\">\r\n                <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\r\n                <ion-text>Guardar</ion-text>\r\n              </ion-button>\r\n              <ion-button color=\"medium\" (click)=\"showFindUsers()\">\r\n                <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\r\n                <ion-text>Cancelar</ion-text>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <div *ngIf=\"users && users.length > 0; else noUsers\">\r\n            <ion-row>\r\n              <ion-col [size]=\"6\" *ngFor=\"let u of users\">\r\n                <app-user-group-card\r\n                  [user]=\"u\"\r\n                  [handleAdd]=\"handleAdd\"\r\n                  [handleRemove]=\"handleRemove\"\r\n                  [added]=\"checkAdded(u._id)\"\r\n                ></app-user-group-card>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n          <ng-template #noUsers>\r\n            <ion-text color=\"medium\">\r\n              <p class=\"ion-text-center\"><ion-icon name=\"alert-circle-outline\"></ion-icon> No se encontraron miembros.</p>\r\n            </ion-text>\r\n          </ng-template>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ "ol7F":
/*!******************************************************************************!*\
  !*** ./src/app/views/familias/familias-detalles/familias-detalles.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .max-width-640 {\n  --max-width: 640px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZmFtaWxpYXMtZGV0YWxsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7QUFBSiIsImZpbGUiOiJmYW1pbGlhcy1kZXRhbGxlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIC5tYXgtd2lkdGgtNjQwIHtcclxuICAgIC0tbWF4LXdpZHRoOiA2NDBweDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "wuqc":
/*!**************************************************************************************!*\
  !*** ./src/app/views/familias/familias-detalles/familias-detalles-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: FamiliasDetallesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamiliasDetallesPageRoutingModule", function() { return FamiliasDetallesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _familias_detalles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./familias-detalles.page */ "ndL8");




const routes = [
    {
        path: '',
        component: _familias_detalles_page__WEBPACK_IMPORTED_MODULE_3__["FamiliasDetallesPage"]
    }
];
let FamiliasDetallesPageRoutingModule = class FamiliasDetallesPageRoutingModule {
};
FamiliasDetallesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FamiliasDetallesPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=familias-detalles-familias-detalles-module.js.map