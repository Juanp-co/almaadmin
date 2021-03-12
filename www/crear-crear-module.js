(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crear-crear-module"],{

/***/ "PDbM":
/*!****************************************************!*\
  !*** ./src/app/views/cursos/crear/crear.module.ts ***!
  \****************************************************/
/*! exports provided: CrearPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearPageModule", function() { return CrearPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _crear_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crear-routing.module */ "PIO0");
/* harmony import */ var _crear_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crear.page */ "e0si");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");








let CrearPageModule = class CrearPageModule {
};
CrearPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _crear_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearPageRoutingModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__["CKEditorModule"],
        ],
        declarations: [_crear_page__WEBPACK_IMPORTED_MODULE_6__["CrearPage"]]
    })
], CrearPageModule);



/***/ }),

/***/ "PIO0":
/*!************************************************************!*\
  !*** ./src/app/views/cursos/crear/crear-routing.module.ts ***!
  \************************************************************/
/*! exports provided: CrearPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearPageRoutingModule", function() { return CrearPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _crear_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crear.page */ "e0si");




const routes = [
    {
        path: '',
        component: _crear_page__WEBPACK_IMPORTED_MODULE_3__["CrearPage"]
    }
];
let CrearPageRoutingModule = class CrearPageRoutingModule {
};
CrearPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CrearPageRoutingModule);



/***/ }),

/***/ "PhKU":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/cursos/crear/crear.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" *ngIf=\"!edit\">\n      <ion-button (click)=\"confirmCancel()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Crear curso</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col [size]=\"12\" class=\"ion-no-margin ion-no-padding\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>Complete el formulario para nuevos cursos</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-row>\n\n            <ion-col [size]=\"12\" size-sm=\"8\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">Nombre del curso (*)</ion-label>\n                    <ion-input\n                      [(ngModel)]=\"formData.title\"\n                      class=\"ion-text-uppercase\"\n                      maxlength=\"25\"\n                    ></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"12\">\n                  <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">Descripcion del curso (*)</ion-label>\n                    <ion-textarea\n                      [(ngModel)]=\"formData.description\"\n                      rows=\"5\"\n                      placeholder=\"Indica la descripción del curso...\"\n                    ></ion-textarea>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"12\">\n                  <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">Roles a los que va dirigido (*)</ion-label>\n                    <ion-input\n                      [readonly]=\"true\"\n                      [value]=\"getRoles(formData.toRoles)\"\n                      autocomplete=\"off\"\n                      (click)=\"showRoleListAlert(formData.toRoles)\"\n                    ></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col [size]=\"12\" size-sm=\"4\">\n              <ion-row class=\"ion-justify-content-center ion-margin\">\n                <ion-col size=\"12\" class=\"ion-text-center\">\n                  <label class=\"micursor ion-text-center w-100\">\n                    <input type='file' accept=\"image/x-png,image/gif,image/jpeg\" (change)='openFile($event)' hidden>\n                    <img [src]=\"formData.banner || 'assets/photo.png'\" class=\"img-fluid\">\n                  </label>\n                </ion-col>\n                <ion-col size=\"12\" class=\"ion-text-center\">\n                  <ion-text><i class=\"toSmall\">Clic para cargar una imagen (*)</i></ion-text>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top\">\n              <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top ion-margin-bottom ion-text-center\">\n              <ion-button color=\"light\" (click)=\"confirmCancel()\">\n                <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Cancelar</ion-text>\n              </ion-button>\n              <ion-button color=\"primary\" (click)=\"confirmRegister()\">\n                <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Guardar</ion-text>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "SQ2u":
/*!****************************************************!*\
  !*** ./src/app/views/cursos/crear/crear.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".micursor {\n  cursor: pointer;\n}\n\n.pictureSize200 {\n  max-height: 200px;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NyZWFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGIiwiZmlsZSI6ImNyZWFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taWN1cnNvcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5waWN0dXJlU2l6ZTIwMHtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLnctMTAwe1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "e0si":
/*!**************************************************!*\
  !*** ./src/app/views/cursos/crear/crear.page.ts ***!
  \**************************************************/
/*! exports provided: CrearPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearPage", function() { return CrearPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_crear_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./crear.page.html */ "PhKU");
/* harmony import */ var _crear_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crear.page.scss */ "SQ2u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");
/* harmony import */ var _cursos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cursos.service */ "BpEJ");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/data.service */ "EnSQ");










let CrearPage = class CrearPage {
    constructor(activateRoute, alertCtrl, axios, globalSer, navCtrl, cursosService, router, dataService) {
        this.activateRoute = activateRoute;
        this.alertCtrl = alertCtrl;
        this.axios = axios;
        this.globalSer = globalSer;
        this.navCtrl = navCtrl;
        this.cursosService = cursosService;
        this.router = router;
        this.dataService = dataService;
        this.formData = {
            title: null,
            description: null,
            banner: null,
            toRoles: []
        };
        this.roles = [
            'Pastores',
            'Supervisores',
            'Líderes',
            'Padres espirituales',
            'Personas',
        ];
        // check if exist session
        if (!this.globalSer.checkSession())
            this.router.navigate(['/ingresar']);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // check if exist session
            if (!this.globalSer.checkSession())
                yield this.router.navigate(['/ingresar']);
        });
    }
    back() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navCtrl.back();
        });
    }
    registerCourse() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Agregando curso, por favor espere ...');
            const data = Object.assign({}, this.formData);
            const res = yield this.cursosService.createCourse(data);
            if (res && !res.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('Éxito', res || 'Se ha registrado el nuevo cuso exitosamente.');
                yield this.back();
            }
            else if (res && res.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else {
                yield this.globalSer.dismissLoading();
            }
        });
    }
    // getters and setters
    getRoles(rolesList) {
        let ret = '';
        if (rolesList.length > 0) {
            for (const v of rolesList) {
                if (ret === '')
                    ret = this.roles[v - 1];
                else
                    ret += `, ${this.roles[v - 1]}`;
            }
        }
        return ret;
    }
    // actions form
    openFile(event) {
        const files = event.target.files;
        if (typeof files[0] !== 'object')
            return false;
        else {
            this.dataService.resizePhoto(files[0], 900, 'dataURL', (resizedFile) => {
                this.formData.banner = resizedFile;
            });
        }
    }
    showRoleListAlert(selected = []) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputs = [];
            for (const [i, value] of this.roles.entries()) {
                inputs.push({
                    name: `roles`,
                    type: 'checkbox',
                    label: value,
                    value: i + 1,
                    checked: selected.indexOf(i + 1) > -1,
                });
            }
            yield this.globalSer.alertWithList({
                header: 'Seleccione los roles',
                inputs,
                confirmAction: (selectedValue) => {
                    this.formData.toRoles = selectedValue;
                }
            });
        });
    }
    confirmCancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertConfirm({
                header: 'Confirme',
                message: '¿Está seguro qué desea cancelar el registro del nuevo curso?',
                confirmAction: () => this.back()
            });
        });
    }
    confirmRegister() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validated = this.cursosService.validationRegister(this.formData);
            if (!validated) {
                yield this.globalSer.alertConfirm({
                    header: 'Confirme',
                    message: '¿Está seguro qué desea registrar este curso?',
                    confirmAction: () => this.registerCourse()
                });
            }
            else {
                yield this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
            }
        });
    }
};
CrearPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_6__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _cursos_service__WEBPACK_IMPORTED_MODULE_8__["CursosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"] }
];
CrearPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-crear',
        template: _raw_loader_crear_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_crear_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CrearPage);



/***/ })

}]);
//# sourceMappingURL=crear-crear-module.js.map