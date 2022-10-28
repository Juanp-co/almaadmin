(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subir-subir-module"],{

/***/ "4ACy":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/documentos/subir/subir.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Subir documento</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-row>\r\n        <ion-col size=\"12\" sizeSm=\"4\" class=\"ion-text-center ion-margin-top\">\r\n          <div class=\"\">\r\n            <label class=\"micursor ion-text-center\">\r\n              <div\r\n                class=\"img-upload\"\r\n                [ngStyle]=\"{backgroundImage: 'url('+ (formData.file ? '/assets/icon/pdf.svg' : '/assets/icon/pdf-upload.svg') +')', height: '130px'}\"\r\n              >\r\n                <input type='file' accept=\"application/pdf\" (change)='openFile($event)' hidden>\r\n              </div>\r\n            </label>\r\n            <br>\r\n            <ion-text color=\"medium\" class=\"toSmall\"><i>Clic para subir un documento una imagen</i></ion-text>\r\n            <ion-text color=\"medium\" *ngIf=\"formData.file\">\r\n              <br>\r\n              <br>\r\n              Archivo: {{ formData.fileName }}\r\n            </ion-text>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" sizeSm=\"8\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" sizeSm=\"6\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"medium\">Título del documento (*)</ion-label>\r\n                <ion-input\r\n                  [value]=\"formData.title\"\r\n                  autocomplete=\"off\"\r\n                  maxlength=\"100\"\r\n                  class=\"ion-text-uppercase\"\r\n                  (change)=\"setFormData('title', $event)\"\r\n                >\r\n                </ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\" sizeSm=\"6\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"medium\">Dirigido a (*)</ion-label>\r\n                <ion-input\r\n                  [value]=\"formData.rolesSelected\"\r\n                  [readonly]=\"true\"\r\n                  autocomplete=\"off\"\r\n                  class=\"ion-text-uppercase no-selected-text\"\r\n                  (click)=\"showAlertRolesList()\"\r\n                >\r\n                </ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"ion-margin\">\r\n              <ion-text color=\"medium\" class=\"toSmall\"><i>(*) Campos obligatorios.</i></ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"ion-margin-top\">\r\n              <ion-row>\r\n                <ion-col size=\"6\" class=\"ion-text-center\">\r\n                  <ion-button color=\"light\" (click)=\"goBack()\">\r\n                    <ion-icon name=\"close\" slot=\"start\"></ion-icon>\r\n                    <ion-text>\r\n                      Cancelar\r\n                    </ion-text>\r\n                  </ion-button>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"ion-text-center\">\r\n                  <ion-button (click)=\"validate()\">\r\n                    <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\r\n                    <ion-text>\r\n                      Guardar\r\n                    </ion-text>\r\n                  </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "5aa/":
/*!********************************************************!*\
  !*** ./src/app/views/documentos/subir/subir.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-upload {\n  border-radius: 5px 5px 0 0;\n  background-size: contain !important;\n  background-repeat: no-repeat;\n  background-position: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3ViaXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7QUFDRiIsImZpbGUiOiJzdWJpci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXVwbG9hZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "VEHt":
/*!****************************************************************!*\
  !*** ./src/app/views/documentos/subir/subir-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: SubirPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubirPageRoutingModule", function() { return SubirPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _subir_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subir.page */ "c9tI");




const routes = [
    {
        path: '',
        component: _subir_page__WEBPACK_IMPORTED_MODULE_3__["SubirPage"]
    }
];
let SubirPageRoutingModule = class SubirPageRoutingModule {
};
SubirPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubirPageRoutingModule);



/***/ }),

/***/ "c9tI":
/*!******************************************************!*\
  !*** ./src/app/views/documentos/subir/subir.page.ts ***!
  \******************************************************/
/*! exports provided: SubirPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubirPage", function() { return SubirPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_subir_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./subir.page.html */ "4ACy");
/* harmony import */ var _subir_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subir.page.scss */ "5aa/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _documentos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../documentos.service */ "VEy+");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/data.service */ "EnSQ");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");








let SubirPage = class SubirPage {
    constructor(dataService, documentosService, globalSer, navCtrl) {
        this.dataService = dataService;
        this.documentosService = documentosService;
        this.globalSer = globalSer;
        this.navCtrl = navCtrl;
        this.formData = {
            title: '',
            file: null,
            fileName: null,
            rolesList: [],
            rolesSelected: ''
        };
        this.roles = [
            'Administradores',
            'Pastores',
            'Supervisores',
            'Líderes'
        ];
    }
    ngOnInit() {
    }
    saveDocument() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.documentosService.saveResources(this.formData);
            if (data && !data.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', 'Se ha compartido el documento exitosamente.');
                this.goBack();
            }
            else if (data && data.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    goBack() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navCtrl.back();
        });
    }
    openFile(event) {
        var _a;
        if (typeof ((_a = event.target) === null || _a === void 0 ? void 0 : _a.files[0]) !== 'object')
            return;
        else {
            const fileToLoad = event.target.files[0];
            const fileReader = new FileReader();
            fileReader.onload = (fileLoadedEvent) => {
                this.formData.file = fileLoadedEvent.target.result;
                this.formData.fileName = fileToLoad.name;
            };
            // Convert data to base64
            fileReader.readAsDataURL(fileToLoad);
        }
    }
    setFormData(input, ev) {
        this.formData[input] = ev.target.value || null;
    }
    getRoles(rolesList) {
        let ret = '';
        if (rolesList.length === 4)
            ret = 'Todos';
        else if (rolesList.length > 0) {
            for (const v of rolesList) {
                if (ret === '')
                    ret = this.roles[v];
                else
                    ret += `, ${this.roles[v]}`;
            }
        }
        return ret;
    }
    showAlertRolesList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputs = [];
            for (const [index, value] of this.roles.entries()) {
                inputs.push({
                    name: `roles`,
                    type: 'checkbox',
                    label: value,
                    value: index,
                    checked: this.formData.rolesList.includes(index),
                });
            }
            yield this.globalSer.alertWithList({
                header: 'Seleccione',
                inputs,
                confirmAction: (selectedValue) => {
                    this.formData.rolesList = selectedValue;
                    this.formData.rolesSelected = this.getRoles(selectedValue);
                }
            });
        });
    }
    validate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let msg = null;
            if (!this.formData.file)
                msg = 'Disculpe, pero debe cargar el archivo PDF a compartir.';
            else if (this.formData.title.length < 4)
                msg = 'Disculpe, pero debe indicar un título al archivo que va a compartir.';
            else if (this.formData.rolesList.length === 0)
                msg = 'Disculpe, pero debe indicar a que tipos de usuario se le compartirá el documento.';
            if (msg)
                this.globalSer.presentAlert('¡Error!', msg || 'Disculpe, pero debe completar el formulario.');
            else
                this.confirmAction();
        });
    }
    confirmAction() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertConfirm({
                header: '¡Confirme!',
                message: '¿Está seguro qué desea subir este documento?',
                confirmAction: () => this.saveDocument()
            });
        });
    }
};
SubirPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _documentos_service__WEBPACK_IMPORTED_MODULE_5__["DocumentosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
SubirPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-subir',
        template: _raw_loader_subir_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_subir_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SubirPage);



/***/ }),

/***/ "hGtv":
/*!********************************************************!*\
  !*** ./src/app/views/documentos/subir/subir.module.ts ***!
  \********************************************************/
/*! exports provided: SubirPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubirPageModule", function() { return SubirPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _subir_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subir-routing.module */ "VEHt");
/* harmony import */ var _subir_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subir.page */ "c9tI");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "j1ZV");








let SubirPageModule = class SubirPageModule {
};
SubirPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _subir_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubirPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_subir_page__WEBPACK_IMPORTED_MODULE_6__["SubirPage"]]
    })
], SubirPageModule);



/***/ })

}]);
//# sourceMappingURL=subir-subir-module.js.map