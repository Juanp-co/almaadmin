(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-cuentas-bancarias-cuentas-bancarias-module"],{

/***/ "KAO9":
/*!*****************************************************************************!*\
  !*** ./src/app/views/cuentas-bancarias/cuentas-bancarias-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CuentasBancariasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentasBancariasPageRoutingModule", function() { return CuentasBancariasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cuentas_bancarias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cuentas-bancarias.page */ "XhSI");




const routes = [
    {
        path: '',
        component: _cuentas_bancarias_page__WEBPACK_IMPORTED_MODULE_3__["CuentasBancariasPage"]
    }
];
let CuentasBancariasPageRoutingModule = class CuentasBancariasPageRoutingModule {
};
CuentasBancariasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CuentasBancariasPageRoutingModule);



/***/ }),

/***/ "Nhzj":
/*!**********************************************************************!*\
  !*** ./src/app/views/cuentas-bancarias/cuentas-bancarias.service.ts ***!
  \**********************************************************************/
/*! exports provided: CuentasBancariasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentasBancariasService", function() { return CuentasBancariasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");




let CuentasBancariasService = class CuentasBancariasService {
    constructor(axios, globalSer) {
        this.axios = axios;
        this.globalSer = globalSer;
    }
    // axios actions
    getBanks() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/admin/banks');
            if (res && res.success)
                return res.data.banks || [];
            return this.globalSer.altResponse(res);
        });
    }
    saveBank(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.postData('/admin/banks', data);
            if (res && res.success)
                return res.data.bank;
            return this.globalSer.altResponse(res);
        });
    }
    updateBank(id, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.putData(`/admin/banks/${id}`, data);
            if (res && res.success)
                return res.data.bank;
            return this.globalSer.altResponse(res);
        });
    }
    deleteBank(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.deleteData(`/admin/banks/${id}`);
            if (res && res.success)
                return res.data.msg;
            return this.globalSer.altResponse(res);
        });
    }
};
CuentasBancariasService.ctorParameters = () => [
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_2__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }
];
CuentasBancariasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CuentasBancariasService);



/***/ }),

/***/ "VN/6":
/*!*********************************************************************!*\
  !*** ./src/app/views/cuentas-bancarias/cuentas-bancarias.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .max-width-640 {\n  --width: 640px;\n}\n::ng-deep .ck-editor__editable_inline {\n  min-height: 250px;\n  color: #333333 !important;\n}\n::ng-deep .max-height-pic {\n  max-height: 120px;\n  margin: 0 auto !important;\n}\n::ng-deep .card-item {\n  height: 100%;\n}\n::ng-deep .pictureIcon {\n  width: auto !important;\n  height: 150px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjdWVudGFzLWJhbmNhcmlhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxjQUFBO0FBQUo7QUFFRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUVFO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQUFKO0FBR0U7RUFDRSxZQUFBO0FBREo7QUFJRTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7QUFGSiIsImZpbGUiOiJjdWVudGFzLWJhbmNhcmlhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIC5tYXgtd2lkdGgtNjQwIHtcclxuICAgIC0td2lkdGg6IDY0MHB4O1xyXG4gIH1cclxuICAuY2stZWRpdG9yX19lZGl0YWJsZV9pbmxpbmUge1xyXG4gICAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgICBjb2xvcjogIzMzMzMzMyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWF4LWhlaWdodC1waWMge1xyXG4gICAgbWF4LWhlaWdodDogMTIwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAucGljdHVyZUljb24ge1xyXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcclxuICAgIC8vbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "XhSI":
/*!*******************************************************************!*\
  !*** ./src/app/views/cuentas-bancarias/cuentas-bancarias.page.ts ***!
  \*******************************************************************/
/*! exports provided: CuentasBancariasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentasBancariasPage", function() { return CuentasBancariasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cuentas_bancarias_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cuentas-bancarias.page.html */ "q8ZT");
/* harmony import */ var _cuentas_bancarias_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cuentas-bancarias.page.scss */ "VN/6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "+z1p");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _cuentas_bancarias_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cuentas-bancarias.service */ "Nhzj");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../Utils/validations.functions */ "OmbT");












let CuentasBancariasPage = class CuentasBancariasPage {
    constructor(alertCtrl, axios, cuentaBancariasService, dataService, globalSer, router) {
        this.alertCtrl = alertCtrl;
        this.axios = axios;
        this.cuentaBancariasService = cuentaBancariasService;
        this.dataService = dataService;
        this.globalSer = globalSer;
        this.router = router;
        this.banks = [];
        this.formData = {
            _id: null,
            title: null,
            description: null,
            picture: null,
        };
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__;
        this.configEditor = null;
        this.edit = false;
        this.showAddButton = false;
        // check if exist session
        if (!this.globalSer.checkSession())
            this.router.navigate(['/ingresar']);
        else {
            this.configEditor = this.globalSer.configEditor;
            this.configEditor.placeholder = 'Indica los datos bancarios aquí (*) ...';
        }
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.showAddButton = this.globalSer.checkRoleToEnableAddOrUpdate();
            yield this.getBanks();
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.globalSer.checkSession())
                yield this.router.navigate(['/ingresar']);
        });
    }
    getBanks() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.cuentaBancariasService.getBanks();
            if (data && !data.error) {
                this.banks = data;
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
    saveBanks() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.cuentaBancariasService.saveBank(this.formData);
            if (data && !data.error) {
                this.banks.push(data);
                this.showForm({ clean: true });
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', 'Se ha guardado la cuenta bancaria exitosamente.');
            }
            else if (data && data.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    updateBanks(id = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (id) {
                yield this.globalSer.presentLoading();
                const data = yield this.cuentaBancariasService.updateBank(id, this.formData);
                if (data && !data.error) {
                    const index = this.banks.findIndex(b => b._id === id);
                    if (index > -1) {
                        this.banks[index].title = data.title;
                        this.banks[index].description = data.description;
                        this.banks[index].picture = data.picture;
                    }
                    else
                        this.banks.push(data);
                    this.showForm({ clean: true });
                    yield this.globalSer.dismissLoading();
                    yield this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado la cuenta bancaria exitosamente.');
                }
                else if (data && data.error) {
                    yield this.globalSer.dismissLoading();
                    yield this.globalSer.errorSession();
                }
                else
                    yield this.globalSer.dismissLoading();
            }
            else
                yield this.globalSer.presentAlert('Error', 'Disculpe, pero ha ocurrido un error al momento de obtener la información a actualizar.');
        });
    }
    deleteBank(id = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (id) {
                yield this.globalSer.presentLoading();
                const data = yield this.cuentaBancariasService.deleteBank(id);
                if (data && !data.error) {
                    this.banks = this.banks.filter(b => b._id !== id);
                    yield this.globalSer.dismissLoading();
                    yield this.globalSer.presentAlert('¡Éxito!', 'Se ha eliminado la cuenta bancaria exitosamente.');
                }
                else if (data && data.error) {
                    yield this.globalSer.dismissLoading();
                    yield this.globalSer.errorSession();
                }
                else
                    yield this.globalSer.dismissLoading();
            }
            else
                yield this.globalSer.presentAlert('Error', 'Disculpe, pero ha ocurrido un error al momento de obtener la información a actualizar.');
        });
    }
    // getters and setters
    // actions form
    openFile(event) {
        const files = event.target.files;
        if (typeof files[0] !== 'object')
            return false;
        else {
            this.dataService.resizePhoto(files[0], 900, 'dataURL', (resizedFile) => {
                this.formData.picture = resizedFile;
            });
        }
    }
    showForm({ id, clean }) {
        if (clean) {
            this.formData._id = null;
            this.formData.title = null;
            this.formData.description = null;
            this.formData.picture = null;
        }
        if (id) {
            const data = this.banks.find(b => b._id === id);
            if (data) {
                this.formData._id = data._id;
                this.formData.title = data.title;
                this.formData.description = data.description;
                this.formData.picture = data.picture;
            }
        }
        this.edit = !this.edit;
    }
    showDetails(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const bank = this.banks.find(b => b._id === id);
            if (bank) {
                const buttons = this.showAddButton ?
                    [
                        {
                            text: 'Eliminar',
                            handler: () => this.confirmForm(id, true)
                        },
                        {
                            text: 'Editar',
                            handler: () => this.showForm({ id, clean: true })
                        },
                    ]
                    : [];
                buttons.push({
                    text: 'Cerrar',
                    // role: 'cancel',
                    handler: () => { }
                });
                const message = `<img src="${bank.picture}" alt="bank_img" class="max-height-pic"> <br/>${Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_11__["setSaltLinesOrBr"])(bank.description, true)}`;
                const alert = yield this.alertCtrl.create({
                    cssClass: 'max-width-640',
                    header: bank.title,
                    message,
                    buttons
                });
                yield alert.present();
            }
        });
    }
    // confirms
    validate() {
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_11__["checkTitlesOrDescriptions"])(this.formData.title))
            return 'Disculpe, pero debe indicar el nombre del banco.';
        if (!this.formData.description || (this.formData.description && this.formData.description.length <= 5))
            return 'Disculpe, pero debe indicar los datos bancarios correctamente.';
        else if (!this.formData.picture && !Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_11__["checkBase64"])(this.formData.picture))
            return 'Disculpe, pero debe indicar una imagen para el banco.';
        return null;
    }
    confirmForm(id = null, remove = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let message = '¿Está seguro qué desea __ACTION__ esta información?';
            let next = false;
            if (!remove) {
                const validated = this.validate();
                if (!validated) {
                    next = true;
                    message = message.replace('__ACTION__', id ? 'actualizar' : 'agregar');
                }
                else {
                    yield this.globalSer.presentAlert('Error', validated || 'Disculpe, pero debe completar el formulario.');
                }
            }
            else
                message = message.replace('__ACTION__', 'borrar');
            if (next) {
                yield this.globalSer.alertConfirm({
                    header: 'Confirme',
                    message,
                    confirmAction: () => {
                        if (!id)
                            this.saveBanks();
                        else if (id && !remove)
                            this.updateBanks(id);
                        else
                            this.deleteBank(id);
                    }
                });
            }
        });
    }
};
CuentasBancariasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_8__["AxiosService"] },
    { type: _cuentas_bancarias_service__WEBPACK_IMPORTED_MODULE_7__["CuentasBancariasService"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_10__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CuentasBancariasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cuentas-bancarias',
        template: _raw_loader_cuentas_bancarias_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cuentas_bancarias_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CuentasBancariasPage);



/***/ }),

/***/ "Y16Y":
/*!*********************************************************************!*\
  !*** ./src/app/views/cuentas-bancarias/cuentas-bancarias.module.ts ***!
  \*********************************************************************/
/*! exports provided: CuentasBancariasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentasBancariasPageModule", function() { return CuentasBancariasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cuentas_bancarias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cuentas-bancarias-routing.module */ "KAO9");
/* harmony import */ var _cuentas_bancarias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cuentas-bancarias.page */ "XhSI");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");









let CuentasBancariasPageModule = class CuentasBancariasPageModule {
};
CuentasBancariasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cuentas_bancarias_routing_module__WEBPACK_IMPORTED_MODULE_5__["CuentasBancariasPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_8__["CKEditorModule"]
        ],
        declarations: [_cuentas_bancarias_page__WEBPACK_IMPORTED_MODULE_6__["CuentasBancariasPage"]]
    })
], CuentasBancariasPageModule);



/***/ }),

/***/ "q8ZT":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/cuentas-bancarias/cuentas-bancarias.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Cuentas bancarias</ion-title>\r\n    <ion-buttons slot=\"end\" *ngIf=\"showAddButton\">\r\n      <ion-button color=\"primary\" (click)=\"showForm({ clean: true })\" *ngIf=\"!edit\">\r\n        <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\r\n        <ion-text>Agregar cuenta</ion-text>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row class=\"ion-margin-bottom\">\r\n\r\n    <ion-col [size]=\"12\" class=\"ion-no-margin ion-no-padding\" *ngIf=\"showAddButton && edit\">\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-title>{{ formData._id ? 'Editar datos' : 'Agregar cuenta' }}</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-row>\r\n            <ion-col [size]=\"12\" size-sm=\"8\">\r\n              <ion-row>\r\n                <ion-col size=\"12\">\r\n                  <ion-item>\r\n                    <ion-label position=\"floating\" color=\"medium\">Nombre del banco (*)</ion-label>\r\n                    <ion-input\r\n                      [(ngModel)]=\"formData.title\"\r\n                      class=\"ion-text-uppercase\"\r\n                      maxlength=\"30\"\r\n                    ></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"editor\">\r\n                  <ckeditor\r\n                    [(ngModel)]=\"formData.description\"\r\n                    [editor]=\"Editor\"\r\n                    [config]=\"configEditor\"\r\n                  ></ckeditor>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col [size]=\"12\" size-sm=\"4\">\r\n              <ion-row class=\"ion-justify-content-center ion-margin\">\r\n                <ion-col size=\"12\" class=\"ion-text-center\">\r\n                  <label class=\"micursor ion-text-center w-100\">\r\n                    <input type='file' accept=\"image/x-png,image/gif,image/jpeg,image/jpg\" (change)='openFile($event)' hidden>\r\n                    <img [src]=\"formData.picture || 'assets/photo.png'\" class=\"img-fluid\">\r\n                  </label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-text-center\">\r\n                  <ion-text><i class=\"toSmall\">Clic para cargar una imagen del banco (*)</i></ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top\">\r\n              <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top ion-margin-bottom ion-text-center\">\r\n              <ion-button color=\"medium\" (click)=\"showForm({ clean: true })\">\r\n                <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\r\n                <ion-text>Cancelar</ion-text>\r\n              </ion-button>\r\n              <ion-button color=\"primary\" (click)=\"confirmForm(formData._id)\">\r\n                <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\r\n                <ion-text>Guardar</ion-text>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"12\" *ngIf=\"!edit\">\r\n      <ion-row *ngIf=\"banks && banks.length > 0; else noBanks\">\r\n        <ion-col size=\"12\" size-sm=\"4\" *ngFor=\"let bank of banks\" (click)=\"showDetails(bank._id)\">\r\n          <ion-card\r\n            class=\"ion-no-padding ion-no-margin ion-margin-start ion-margin-end ion-margin-bottom card-item\"\r\n            *ngIf=\"bank\"\r\n          >\r\n            <ion-card-content class=\"ion-no-margin ion-no-padding\">\r\n              <ion-row>\r\n                <ion-col size=\"12\">\r\n                  <ion-img class=\"pictureIcon\" [src]=\"bank.picture\"></ion-img>\r\n                </ion-col>\r\n                <ion-col size=\"12\">\r\n                  <ion-text color=\"primary\" class=\"ion-margin-top ion-margin-bottom\"><b>{{ bank.title }}</b></ion-text>\r\n                  <br/>\r\n                  <i class=\"toSmall\">Clic para más información.</i>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ng-template #noBanks>\r\n        <ion-card>\r\n          <ion-text color=\"medium\">\r\n            <p class=\"ion-text-center no-selected-text\">\r\n              <ion-icon name=\"alert-circle-outline\"></ion-icon> No existen cuentas bancarias registradas.\r\n            </p>\r\n          </ion-text>\r\n        </ion-card>\r\n      </ng-template>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=views-cuentas-bancarias-cuentas-bancarias-module.js.map