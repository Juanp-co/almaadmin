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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"confirmCancel()\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Crear curso</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row>\r\n    <ion-col [size]=\"12\" class=\"ion-no-margin ion-no-padding\">\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-title>Complete el formulario para nuevos cursos</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-row>\r\n\r\n            <ion-col [size]=\"6\">\r\n              <ion-row>\r\n                <ion-col size=\"12\">\r\n                  <ion-item>\r\n                    <ion-label position=\"floating\" color=\"medium\">Nombre del curso (*)</ion-label>\r\n                    <ion-input\r\n                      [(ngModel)]=\"formData.title\"\r\n                      class=\"ion-text-uppercase\"\r\n                      maxlength=\"25\"\r\n                    ></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"12\">\r\n                  <ion-item>\r\n                    <ion-label position=\"floating\" color=\"medium\">Descripcion del curso (*)</ion-label>\r\n                    <ion-textarea\r\n                      [(ngModel)]=\"formData.description\"\r\n                      rows=\"5\"\r\n                    ></ion-textarea>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col [size]=\"6\">\r\n              <ion-row>\r\n                <ion-col size=\"12\">\r\n                  <ion-item>\r\n                    <ion-label position=\"floating\" color=\"medium\">Nivel del curso (*)</ion-label>\r\n                    <ion-input\r\n                      [readonly]=\"true\"\r\n                      [value]=\"getLevel(formData.level)\"\r\n                      autocomplete=\"off\"\r\n                      class=\"no-selected-text\"\r\n                      (click)=\"showLevelsListAlert(formData.level)\"\r\n                    ></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"12\">\r\n                  <ion-item>\r\n                    <ion-label position=\"floating\" color=\"medium\">Roles a los que va dirigido (*)</ion-label>\r\n                    <ion-input\r\n                      [readonly]=\"true\"\r\n                      [value]=\"getRoles(formData.toRoles)\"\r\n                      autocomplete=\"off\"\r\n                      class=\"no-selected-text\"\r\n                      (click)=\"showRoleListAlert(formData.toRoles)\"\r\n                    ></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top\">\r\n              <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top ion-margin-bottom ion-text-center\">\r\n              <ion-button color=\"medium\" (click)=\"confirmCancel()\">\r\n                <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\r\n                <ion-text>Cancelar</ion-text>\r\n              </ion-button>\r\n              <ion-button color=\"primary\" (click)=\"confirmRegister()\">\r\n                <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\r\n                <ion-text>Guardar</ion-text>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ "SQ2u":
/*!****************************************************!*\
  !*** ./src/app/views/cursos/crear/crear.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".micursor {\n  cursor: pointer;\n}\n\n.pictureSize200 {\n  max-height: 200px;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY3JlYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0YiLCJmaWxlIjoiY3JlYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pY3Vyc29ye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBpY3R1cmVTaXplMjAwe1xyXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4udy0xMDB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

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
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");
/* harmony import */ var _cursos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cursos.service */ "BpEJ");
/* harmony import */ var _Utils_data_static__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../Utils/data.static */ "lmIc");









let CrearPage = class CrearPage {
    constructor(globalSer, navCtrl, cursosService, router) {
        this.globalSer = globalSer;
        this.navCtrl = navCtrl;
        this.cursosService = cursosService;
        this.router = router;
        this.levels = [];
        this.formData = {
            title: null,
            description: null,
            level: null,
            toRoles: []
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // check if exist session
            if (!this.globalSer.checkRoleToEnableAddOrUpdate())
                this.back();
            if (!this.globalSer.checkSession())
                yield this.router.navigate(['/ingresar']);
            else
                this.levels = this.cursosService.levelsList;
        });
    }
    back() {
        this.navCtrl.back();
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
    getLevel(level) {
        const lvl = this.levels.find(l => l.val === level) || null;
        return lvl ? lvl.label : null;
    }
    getRoles(rolesList) {
        let ret = '';
        if (rolesList.length > 0) {
            for (const v of rolesList) {
                if (ret === '')
                    ret = _Utils_data_static__WEBPACK_IMPORTED_MODULE_8__["rolesListTextWithoutAdmin"][v - 1];
                else
                    ret += `, ${_Utils_data_static__WEBPACK_IMPORTED_MODULE_8__["rolesListTextWithoutAdmin"][v - 1]}`;
            }
        }
        return ret;
    }
    // actions form
    showLevelsListAlert(selected = []) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputs = [];
            for (const lvl of this.levels) {
                inputs.push({
                    name: `lvls`,
                    type: 'radio',
                    label: lvl.label,
                    value: lvl.val,
                    checked: lvl.val === selected,
                });
            }
            yield this.globalSer.alertWithList({
                inputs,
                confirmAction: (selectedValue) => { this.formData.level = selectedValue; }
            });
        });
    }
    showRoleListAlert(selected = []) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputs = [];
            for (const [i, value] of _Utils_data_static__WEBPACK_IMPORTED_MODULE_8__["rolesListTextWithoutAdmin"].entries()) {
                inputs.push({
                    name: `roles`,
                    type: 'checkbox',
                    label: value,
                    value: i + 1,
                    checked: selected.indexOf(i + 1) > -1,
                });
            }
            yield this.globalSer.alertWithList({
                inputs,
                confirmAction: (selectedValue) => { this.formData.toRoles = selectedValue; }
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
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _cursos_service__WEBPACK_IMPORTED_MODULE_7__["CursosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
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