(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-mi-cuenta-mi-cuenta-module"],{

/***/ "1LWO":
/*!*****************************************************!*\
  !*** ./src/app/views/mi-cuenta/mi-cuenta.module.ts ***!
  \*****************************************************/
/*! exports provided: MiCuentaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiCuentaPageModule", function() { return MiCuentaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _mi_cuenta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mi-cuenta-routing.module */ "DxDK");
/* harmony import */ var _mi_cuenta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mi-cuenta.page */ "8txV");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let MiCuentaPageModule = class MiCuentaPageModule {
};
MiCuentaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mi_cuenta_routing_module__WEBPACK_IMPORTED_MODULE_5__["MiCuentaPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_mi_cuenta_page__WEBPACK_IMPORTED_MODULE_6__["MiCuentaPage"]]
    })
], MiCuentaPageModule);



/***/ }),

/***/ "8txV":
/*!***************************************************!*\
  !*** ./src/app/views/mi-cuenta/mi-cuenta.page.ts ***!
  \***************************************************/
/*! exports provided: MiCuentaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiCuentaPage", function() { return MiCuentaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mi_cuenta_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mi-cuenta.page.html */ "Xptp");
/* harmony import */ var _mi_cuenta_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mi-cuenta.page.scss */ "NG6F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mi_cuenta_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mi-cuenta.service */ "Raxl");
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Utils/validations.functions */ "OmbT");
/* harmony import */ var _services_cookies_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/cookies.service */ "QTu/");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");












let MiCuentaPage = class MiCuentaPage {
    constructor(cookieService, dataService, globalSer, miCuentaService, navCtrl, router) {
        this.cookieService = cookieService;
        this.dataService = dataService;
        this.globalSer = globalSer;
        this.miCuentaService = miCuentaService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.roles = [];
        this.professions = [];
        this.companyType = [];
        this.educationLevel = [];
        this.bloodType = [];
        this.departments = [];
        this.cities = [];
        this.civilStatus = [];
        this.gender = [];
        this.documentTypes = [];
        this.yesOrNotValues = ['No', 'Si'];
        this.maxDate = null;
        this.staticData = null;
        this.userData = null;
        this.views = {
            info: {
                show: true,
                edit: false,
                editPic: false,
                title: 'Mis datos',
                data: null
            },
            pass: { show: false, title: 'Cambiar contraseña' },
        };
        this.formData = {
            typeDocument: null,
            document: null,
            email: null,
            phone: null,
            names: null,
            lastNames: null,
            gender: null,
            birthday: null,
            civilStatus: null,
            educationLevel: null,
            profession: null,
            bloodType: null,
            company: null,
            companyType: null,
            baptized: null,
            department: null,
            city: null,
            locality: null,
            direction: null,
        };
        this.formPic = {
            picture: null
        };
        this.formPass = {
            password: null,
            newPassword: null,
            repPassword: []
        };
        // check if exist session
        if (!this.globalSer.checkSession())
            this.router.navigate(['/ingresar']);
        else {
            this.documentTypes = miCuentaService.documentTypesList;
            this.educationLevel = miCuentaService.educationLevel;
            this.professions = miCuentaService.professionsList;
            this.bloodType = miCuentaService.bloodTypeList;
            this.companyType = miCuentaService.companyTypeList;
            this.civilStatus = miCuentaService.civilStatusList;
            this.gender = miCuentaService.genderList;
            this.departments = miCuentaService.departmentsList.map(d => d.department);
            this.maxDate = dayjs__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYY-MM-DD');
        }
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.miCuentaService.getData();
            if (data && !data.error) {
                this.staticData = Object.assign({}, data);
                this.userData = Object.assign({}, data);
                this.setDataView();
                yield this.globalSer.dismissLoading();
            }
            else if (data && data.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('Error', 'Disculpe, pero ha ocurrido un error inesperado.');
            }
        });
    }
    // services actions
    updateData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Actualizando datos del perfil, por favor espere ...');
            const data = Object.assign({}, this.formData);
            if (data.documentType)
                data.document = `${data.documentType}${data.document}`;
            data.company = data.company === 'Si';
            data.baptized = data.baptized === 'Si';
            if (data.birthday)
                data.birthday = dayjs__WEBPACK_IMPORTED_MODULE_6___default()(data.birthday).format('YYYY-MM-DD');
            const updated = yield this.miCuentaService.updateData(data);
            if (updated && !updated.error) {
                this.cleanFormPassword();
                this.staticData = Object.assign(Object.assign({}, this.staticData), updated); // { a: 1 } { a: 3 }
                this.userData = Object.assign(Object.assign({}, this.userData), this.staticData);
                const dataCookie = this.cookieService.getCookie('data');
                this.cookieService.setCookie('data', Object.assign(Object.assign({}, dataCookie), this.staticData));
                this.setDataView();
                this.editEnable();
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado los datos de su cuenta exitosamente.');
            }
            else if (updated && updated.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    updatePicture(remove = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Actualizando foto de perfil, por favor espere ...');
            const updated = yield this.miCuentaService.updatePictureProfile(Object.assign({}, this.formPic));
            if (updated && !updated.error) {
                const { data, msg } = updated;
                this.cleanFormPassword();
                this.staticData = Object.assign(Object.assign({}, this.staticData), data);
                this.userData = Object.assign(Object.assign({}, this.userData), this.staticData);
                const dataCookie = this.cookieService.getCookie('data');
                this.cookieService.setCookie('data', Object.assign(Object.assign({}, dataCookie), this.staticData));
                this.setDataView();
                if (!remove)
                    this.editPicEnable();
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', msg || 'Se ha actualizado la foto de perfil exitosamente.');
            }
            else if (updated && updated.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    // services actions
    updatePassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Cambiando contraseña, por favor espere ...');
            const updated = yield this.miCuentaService.changePassword(this.formPass);
            if (updated && !updated.error) {
                this.cleanFormPassword();
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', updated || 'Se ha actualizado la contraseña de su cuenta exitosamente.');
            }
            else if (updated && updated.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    setDataView() {
        this.userData.birthday = this.userData.birthday ? dayjs__WEBPACK_IMPORTED_MODULE_6___default()(this.userData.birthday).format('DD-MM-YYYY') : null;
        this.userData.bloodType = this.bloodType[this.userData.bloodType] || null;
        this.userData.profession = this.professions[this.userData.profession] || null;
        this.userData.educationLevel = this.educationLevel[this.userData.educationLevel] || null;
        this.userData.companyType = this.companyType[this.userData.companyType] || null;
        this.userData.civilStatus = this.civilStatus[this.userData.civilStatus] || null;
        this.userData.gender = this.gender[this.userData.gender] || null;
        if (this.userData.department !== null) {
            const depto = this.miCuentaService.departmentsList[this.userData.department] || null;
            if (depto) {
                this.userData.department = depto.department;
                if (this.userData.city !== null)
                    this.userData.city = depto.cities[this.userData.city] || null;
            }
        }
        this.views.info.data = this.userData;
    }
    // views actions
    editEnable() {
        if (!this.views.info.edit) {
            this.formData = Object.assign({ documentType: null }, this.staticData);
            this.formData.documentType = this.formData.document ? this.formData.document.replace(/[0-9]{5,12}/, '') : null;
            this.formData.document = this.formData.document ? this.formData.document.replace(/[A-Za-z]{1,3}/, '') : null;
            this.formData.company = this.formData.company ? 'Si' : 'No';
            this.formData.baptized = this.formData.baptized ? 'Si' : 'No';
            this.getCity();
        }
        else {
            this.formData = null;
            this.cities = [];
        }
        this.views.info.edit = !this.views.info.edit;
    }
    editPicEnable() {
        this.formPic.picture = null;
        this.views.info.editPic = !this.views.info.editPic;
    }
    setShowView(input) {
        this.views[input].show = !this.views[input].show;
    }
    getCity(clearCity = false) {
        const filter = this.miCuentaService.departmentsList[this.formData.department] || null;
        this.cities = filter ? filter.cities : [];
        if (clearCity)
            this.formData.city = null;
    }
    getDocumentLabel(value) {
        if (!value)
            return null;
        const da = this.documentTypes.find(d => d.val === value);
        return da ? da.label : null;
    }
    setDate() {
        if (this.formData.birthday) {
            this.formData.birthday = dayjs__WEBPACK_IMPORTED_MODULE_6___default()(this.formData.birthday).format('YYYY-MM-DD');
        }
    }
    validateOnlyNumbers(event) {
        Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_8__["onlyNumbersInputValidation"])(event);
    }
    validateOnlyLetters(event) {
        Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_8__["onlyLettersInputValidation"])(event);
    }
    showAlertList(input, nameArray, selected = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputs = [];
            for (const [i, value] of this[nameArray].entries()) {
                inputs.push({
                    name: `value-${i}`,
                    type: 'radio',
                    label: value,
                    value: i,
                    checked: selected !== null && selected.toString() === i.toString(),
                });
            }
            yield this.globalSer.alertWithList({
                header: 'Seleccione',
                inputs,
                confirmAction: (selectedValue) => {
                    this.formData[input] = selectedValue;
                    if (input === 'department')
                        this.getCity(true);
                }
            });
        });
    }
    showAlertDocumentList(selected = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputs = [];
            for (const value of this.documentTypes) {
                inputs.push({
                    name: `documentType`,
                    type: 'radio',
                    label: value.label,
                    value: value.val,
                    checked: selected !== null && selected === value.val,
                });
            }
            yield this.globalSer.alertWithList({
                header: 'Seleccione',
                inputs,
                confirmAction: (selectedValue) => {
                    this.formData.documentType = selectedValue;
                }
            });
        });
    }
    showAlertYesOrNotList(input, selected = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputs = [];
            for (const [i, value] of this.yesOrNotValues.entries()) {
                inputs.push({
                    name: `value-${i}`,
                    type: 'radio',
                    label: value,
                    value,
                    checked: value === selected,
                });
            }
            yield this.globalSer.alertWithList({
                header: 'Seleccione',
                inputs,
                confirmAction: (selectedValue) => { this.formData[input] = selectedValue; }
            });
        });
    }
    openFile(event) {
        const files = event.target.files;
        if (typeof files[0] !== 'object')
            return false;
        else {
            this.dataService.resizePhoto(files[0], 900, 'dataURL', (resizedFile) => {
                this.formPic.picture = resizedFile;
            });
        }
    }
    validateData() {
        const { formData } = this;
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_8__["checkPhone"])(formData.phone))
            return 'Disculpe, pero debe indicar su número de teléfono.<br><br>NOTA: Recuerde que el número de teléfono es su usuario de acceso para a su cuenta.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_8__["checkNameOrLastName"])(formData.names))
            return 'Disculpe, pero debe indicar su nombre.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_8__["checkNameOrLastName"])(formData.lastNames))
            return 'Disculpe, pero debe indicar su apellido.';
        if (formData.email)
            if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_8__["checkEmail"])(formData.email))
                return 'Disculpe, pero debe indicar su correo electrónico.';
        if (formData.documentType) {
            if (['CC', 'TI', 'PAS', 'CE', 'PE'].indexOf(`${formData.documentType}`) === -1)
                return 'Disculpe, pero debe seleccionar un tipo de documento.';
            if (!/[0-9]{5,9}/.test(`${formData.document}`))
                return 'Disculpe, pero debe indicar su número de documento.';
        }
        if (formData.birthday)
            if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_8__["checkDate"])(formData.birthday))
                return 'Disculpe, pero debe indicar su fecha de nacimiento.';
        if (formData.company !== null && formData.company === 'Si')
            if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_8__["checkIfValueIsNumber"])(`${formData.companyType}`))
                return 'Disculpe, pero debe indicar el tipo de empresa que posee.';
        return null;
    }
    confirmUpdate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validated = this.validateData();
            if (validated)
                yield this.globalSer.presentAlert('Alerta', validated);
            else {
                yield this.globalSer.alertConfirm({
                    header: 'Confirme',
                    message: '¿Está seguro qué desea actualizar la información de su perfil?',
                    confirmAction: () => this.updateData()
                });
            }
        });
    }
    // actions passwords
    cleanFormPassword() {
        this.formPass.password = null;
        this.formPass.newPassword = null;
        this.formPass.repPassword = null;
    }
    validatePassword() {
        const { formPass } = this;
        if (!formPass.password)
            return 'Disculpe, pero debe indicar su contraseña actual.';
        if (formPass.password && formPass.password.length < 5)
            return 'Disculpe, pero debe puede que su contraseña actual no sea correcta.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_8__["checkPassword"])(formPass.newPassword))
            return 'Disculpe, pero debe indicar una nueva contraseña válida.';
        if (formPass.newPassword !== formPass.repPassword)
            return 'Disculpe, pero las nuevas contraseñas no coinciden.';
        return null;
    }
    validatePicture() {
        return !this.formPic.picture ?
            'Disculpe, pero debe seleccionar una imagen para el perfil.'
            : null;
    }
    confirmChangePassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validated = this.validatePassword();
            if (validated)
                yield this.globalSer.presentAlert('Alerta', validated);
            else {
                yield this.globalSer.alertConfirm({
                    header: 'Cambiar contraseña',
                    message: '¿Está seguro qué desea cambiar la contraseña de su cuenta?',
                    confirmAction: () => this.updatePassword()
                });
            }
        });
    }
    confirmUpdatePicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validated = this.validatePicture();
            if (validated)
                yield this.globalSer.presentAlert('Alerta', validated);
            else {
                yield this.globalSer.alertConfirm({
                    header: 'Confirme',
                    message: '¿Está seguro qué desea cambiar la foto de perfil de su cuenta?',
                    confirmAction: () => this.updatePicture()
                });
            }
        });
    }
    confirmDeletePicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertConfirm({
                header: 'Confirme',
                message: '¿Está seguro qué desea eliminar su foto de perfil de su cuenta?',
                confirmAction: () => {
                    this.formPic.picture = null;
                    this.updatePicture(true);
                }
            });
        });
    }
};
MiCuentaPage.ctorParameters = () => [
    { type: _services_cookies_service__WEBPACK_IMPORTED_MODULE_9__["CookiesService"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_11__["GlobalService"] },
    { type: _mi_cuenta_service__WEBPACK_IMPORTED_MODULE_7__["MiCuentaService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
MiCuentaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mi-cuenta',
        template: _raw_loader_mi_cuenta_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mi_cuenta_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MiCuentaPage);



/***/ }),

/***/ "DxDK":
/*!*************************************************************!*\
  !*** ./src/app/views/mi-cuenta/mi-cuenta-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MiCuentaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiCuentaPageRoutingModule", function() { return MiCuentaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mi_cuenta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mi-cuenta.page */ "8txV");




const routes = [
    {
        path: '',
        component: _mi_cuenta_page__WEBPACK_IMPORTED_MODULE_3__["MiCuentaPage"]
    }
];
let MiCuentaPageRoutingModule = class MiCuentaPageRoutingModule {
};
MiCuentaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MiCuentaPageRoutingModule);



/***/ }),

/***/ "NG6F":
/*!*****************************************************!*\
  !*** ./src/app/views/mi-cuenta/mi-cuenta.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaS1jdWVudGEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "Raxl":
/*!******************************************************!*\
  !*** ./src/app/views/mi-cuenta/mi-cuenta.service.ts ***!
  \******************************************************/
/*! exports provided: MiCuentaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiCuentaService", function() { return MiCuentaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _Utils_locations_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Utils/locations.data */ "ZrT4");
/* harmony import */ var _Utils_profile_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Utils/profile.data */ "0ox5");






let MiCuentaService = class MiCuentaService {
    constructor(axios, globalSer) {
        this.axios = axios;
        this.globalSer = globalSer;
        this.professionsList = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_5__["professions"];
        this.companyTypeList = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_5__["companyType"];
        this.departmentsList = _Utils_locations_data__WEBPACK_IMPORTED_MODULE_4__["departments"];
        this.educationLevel = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_5__["educationLevels"];
        this.bloodTypeList = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_5__["bloodType"];
        this.civilStatusList = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_5__["civilStatus"];
        this.genderList = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_5__["gender"];
        this.documentTypesList = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_5__["documentType"];
    }
    // axios actions
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/user');
            if (res && res.success)
                return res.data.data;
            return this.globalSer.altResponse(res);
        });
    }
    changePassword(data = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.putData('/user/change-password', data);
            if (res && res.success)
                return res.data.msg;
            return this.globalSer.altResponse(res);
        });
    }
    updateData(data = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.putData('/user', data);
            if (res && res.success)
                return res.data.data;
            return this.globalSer.altResponse(res);
        });
    }
    updatePictureProfile(data = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.putData('/user/picture', data);
            if (res && res.success)
                return res.data || {};
            return this.globalSer.altResponse(res);
        });
    }
};
MiCuentaService.ctorParameters = () => [
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_2__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }
];
MiCuentaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MiCuentaService);



/***/ }),

/***/ "Xptp":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/mi-cuenta/mi-cuenta.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Mi cuenta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col [size]=\"12\">\n      <ion-card>\n        <ion-card-header class=\"ion-no-padding ion-no-margin\">\n          <ion-toolbar color=\"primary\">\n            <ion-buttons slot=\"start\" *ngIf=\"!views.info.edit\">\n              <ion-button (click)=\"setShowView('info')\">\n                <ion-icon name=\"chevron-{{views.info.show ? 'up' : 'down' }}-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-title *ngIf=\"!views.info.edit\">Mis datos</ion-title>\n            <ion-title *ngIf=\"views.info.edit\">Actualizar mis datos</ion-title>\n            <ion-buttons slot=\"end\">\n              <ion-button (click)=\"editEnable()\" *ngIf=\"!views.info.editPic\">\n                <ion-icon name=\"create-outline\" slot=\"start\" *ngIf=\"!views.info.edit\"></ion-icon>\n                <ion-icon name=\"close-outline\" slot=\"start\" *ngIf=\"views.info.edit\"></ion-icon>\n                <ion-text *ngIf=\"!views.info.edit\">Editar</ion-text>\n                <ion-text *ngIf=\"views.info.edit\">Cancelar</ion-text>\n              </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-card-header>\n        <ion-card-content class=\"{{views.info.show ? '' : 'ion-hide'}} ion-no-padding\">\n\n          <ion-row>\n            <ion-col size=\"12\" class=\"{{views.info.edit || views.info.editPic ? 'ion-hide' : '' }} ion-margin-top\">\n              <ion-row *ngIf=\"views.info.data\">\n                <ion-col size=\"12\" size-sm=\"6\">\n                  <ion-row>\n                    <ion-col size=\"12\" class=\"ion-text-center\">\n                      <div>\n                        <img\n                          [src]=\"views.info.data.picture\"\n                          height=\"150\"\n                          class=\"img-rounded\"\n                          *ngIf=\"views.info.data.picture\"\n                        >\n                        <img\n                          src=\"assets/icon/{{views.info.data.gender === 1 ? 'mujer_lista' : 'hombre_lista'}}.svg\"\n                          height=\"150\"\n                          class=\"img-rounded\"\n                          *ngIf=\"!views.info.data.picture\"\n                        >\n                      </div>\n                      <div>\n                        <ion-button size=\"small\" (click)=\"editPicEnable()\">\n                          <ion-icon name=\"image-outline\" slot=\"start\"></ion-icon>\n                          <ion-text>Cambiar</ion-text>\n                        </ion-button>\n                        <ion-button\n                          color=\"danger\"\n                          size=\"small\"\n                          (click)=\"confirmDeletePicture()\"\n                          *ngIf=\"views.info.data.picture\"\n                        >\n                          <ion-icon name=\"trash-outline\"></ion-icon>\n                        </ion-button>\n                      </div>\n                    </ion-col>\n                    <ion-col size=\"12\">\n                      <ion-row>\n                        <ion-col size=\"12\" size-sm=\"5\">\n                          <ion-text><b>Teléfono:</b></ion-text>\n                        </ion-col>\n                        <ion-col size=\"12\" size-sm=\"7\">\n                          <ion-text>{{views.info.data.phone || 'No indicado'}}</ion-text>\n                        </ion-col>\n                        <ion-col size=\"12\" size-sm=\"5\">\n                          <ion-text><b>Nombre(s):</b></ion-text>\n                        </ion-col>\n                        <ion-col size=\"12\" size-sm=\"7\">\n                          <ion-text>{{views.info.data.names || 'No indicado'}}</ion-text>\n                        </ion-col>\n                        <ion-col size=\"12\" size-sm=\"5\">\n                          <ion-text><b>Apellido(s):</b></ion-text>\n                        </ion-col>\n                        <ion-col size=\"12\" size-sm=\"7\">\n                          <ion-text>{{views.info.data.lastNames || 'No indicado'}}</ion-text>\n                        </ion-col>\n                        <ion-col size=\"12\" size-sm=\"5\">\n                          <ion-text><b>Nº de documento:</b></ion-text>\n                        </ion-col>\n                        <ion-col size=\"12\" size-sm=\"7\">\n                          <ion-text>{{views.info.data.document || 'No indicado'}}</ion-text>\n                        </ion-col>\n                        <ion-col size=\"12\" size-sm=\"5\">\n                          <ion-text><b>Correo electrónico:</b></ion-text>\n                        </ion-col>\n                        <ion-col size=\"12\" size-sm=\"7\">\n                          <ion-text>{{views.info.data.email || 'No indicado'}}</ion-text>\n                        </ion-col>\n                        <ion-col size=\"12\" size-sm=\"5\">\n                          <ion-text><b>Fecha de nac.:</b></ion-text>\n                        </ion-col>\n                        <ion-col size=\"12\" size-sm=\"7\">\n                          <ion-text>{{views.info.data.birthday || 'No indicado'}}</ion-text>\n                        </ion-col>\n                      </ion-row>\n                    </ion-col>\n                  </ion-row>\n                </ion-col>\n\n                <ion-col size=\"12\" size-sm=\"6\">\n                  <ion-row>\n                    <ion-col size=\"12\" size-sm=\"5\">\n                      <ion-text><b>Sexo:</b></ion-text>\n                    </ion-col>\n                    <ion-col size=\"12\" size-sm=\"7\">\n                      <ion-text>{{views.info.data.gender || 'No indicado'}}</ion-text>\n                    </ion-col>\n                    <ion-col size=\"12\" size-sm=\"5\">\n                      <ion-text><b>Estado civil:</b></ion-text>\n                    </ion-col>\n                    <ion-col size=\"12\" size-sm=\"7\">\n                      <ion-text>{{views.info.data.civilStatus || 'No indicado'}}</ion-text>\n                    </ion-col>\n                    <ion-col size=\"12\" size-sm=\"5\">\n                      <ion-text><b>Nivel educativo:</b></ion-text>\n                    </ion-col>\n                    <ion-col size=\"12\" size-sm=\"7\">\n                      <ion-text>{{views.info.data.educationLevel || 'No indicado'}}</ion-text>\n                    </ion-col>\n                    <ion-col size=\"12\" size-sm=\"5\">\n                      <ion-text><b>Profesión:</b></ion-text>\n                    </ion-col>\n                    <ion-col size=\"12\" size-sm=\"7\">\n                      <ion-text>{{views.info.data.profession || 'No indicado'}}</ion-text>\n                    </ion-col>\n                    <ion-col size=\"12\" size-sm=\"5\">\n                      <ion-text><b>Tipo de sangre:</b></ion-text>\n                    </ion-col>\n                    <ion-col size=\"12\" size-sm=\"7\">\n                      <ion-text>{{views.info.data.bloodType || 'No indicado'}}</ion-text>\n                    </ion-col>\n                    <ion-col size=\"12\" size-sm=\"5\">\n                      <ion-text><b>Empresa:</b></ion-text>\n                    </ion-col>\n                    <ion-col size=\"12\" size-sm=\"7\">\n                      <ion-text>{{views.info.data.company ? 'Si' : 'No'}}</ion-text>\n                    </ion-col>\n                    <ion-col size=\"12\" size-sm=\"5\" *ngIf=\"views.info.data.company\">\n                      <ion-text><b>Tipo de empresa:</b></ion-text>\n                    </ion-col>\n                    <ion-col size=\"12\" size-sm=\"7\" *ngIf=\"views.info.data.company\">\n                      <ion-text>{{views.info.data.companyType}}</ion-text>\n                    </ion-col>\n                    <ion-col size=\"12\" size-sm=\"5\">\n                      <ion-text><b>Bautizado:</b></ion-text>\n                    </ion-col>\n                    <ion-col size=\"12\" size-sm=\"7\">\n                      <ion-text>{{views.info.data.baptized ? 'Si' : 'No'}}</ion-text>\n                    </ion-col>\n                    <ion-col size=\"12\" size-sm=\"5\">\n                      <ion-text><b>Departamento:</b></ion-text>\n                    </ion-col>\n                    <ion-col size=\"12\" size-sm=\"7\">\n                      <ion-text>{{ views.info.data.department || 'No indicado'}}</ion-text>\n                    </ion-col>\n                    <ion-col size=\"12\" size-sm=\"5\">\n                      <ion-text><b>Cuidad:</b></ion-text>\n                    </ion-col>\n                    <ion-col size=\"12\" size-sm=\"7\">\n                      <ion-text>{{ views.info.data.city || 'No indicado'}}</ion-text>\n                    </ion-col>\n                    <ion-col size=\"12\" size-sm=\"5\">\n                      <ion-text><b>Barrio:</b></ion-text>\n                    </ion-col>\n                    <ion-col size=\"12\" size-sm=\"7\">\n                      <ion-text>{{views.info.data.locality || 'No indicado'}}</ion-text>\n                    </ion-col>\n                    <ion-col size=\"12\" size-sm=\"5\">\n                      <ion-text><b>Dirección:</b></ion-text>\n                    </ion-col>\n                    <ion-col size=\"12\" size-sm=\"7\">\n                      <ion-text>{{views.info.data.direction || 'No indicado'}}</ion-text>\n                    </ion-col>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"{{views.info.editPic ? '' : 'ion-hide' }}\">\n              <ion-row class=\"ion-margin-top\" *ngIf=\"formPic\">\n                <ion-col size=\"12\" size-sm=\"6\" class=\"text-center\">\n                  <ion-row class=\"ion-justify-content-center ion-margin\">\n                    <ion-col size=\"12\" class=\"ion-text-center\">\n                      <div\n                        class=\"banner-event\"\n                        [ngStyle]=\"{backgroundImage: 'url('+views.info?.data?.picture+')', height: '200px'}\"\n                        *ngIf=\"views.info?.data?.picture\"\n                      ></div>\n                      <img\n                        src=\"assets/icon/{{views.info?.data?.gender === 1 ? 'mujer_lista' : 'hombre_lista'}}.svg\"\n                        height=\"150\"\n                        *ngIf=\"!views.info?.data?.picture\"\n                      >\n                    </ion-col>\n                    <ion-col size=\"12\" class=\"ion-text-center\">\n                      <ion-text><i class=\"toSmall\">Foto actual</i></ion-text>\n                    </ion-col>\n                  </ion-row>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\">\n                  <ion-row class=\"ion-justify-content-center ion-margin\">\n                    <ion-col size=\"12\" class=\"ion-text-center\">\n                      <label class=\"micursor ion-text-center w-100\">\n                        <input type='file' accept=\"image/x-png,image/gif,image/jpeg\" (change)='openFile($event)' hidden>\n                        <div\n                          class=\"banner-event\"\n                          [ngStyle]=\"{backgroundImage: 'url('+formPic.picture+')', height: '200px'}\"\n                          *ngIf=\"formPic.picture\"\n                        ></div>\n                        <img src=\"assets/photo.png\" height=\"150\" *ngIf=\"!formPic.picture\">\n                      </label>\n                    </ion-col>\n                    <ion-col size=\"12\" class=\"ion-text-center\">\n                      <ion-text><i class=\"toSmall\">Clic para cargar la nueva foto de perfil</i></ion-text>\n                    </ion-col>\n                  </ion-row>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top\">\n                  <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top ion-margin-bottom ion-text-center\">\n                  <ion-button color=\"medium\" (click)=\"editPicEnable()\">\n                    <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n                    <ion-text>Cancelar</ion-text>\n                  </ion-button>\n                  <ion-button color=\"primary\" (click)=\"confirmUpdatePicture()\">\n                    <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\n                    <ion-text>Guardar</ion-text>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"{{views.info.edit ? '' : 'ion-hide' }}\">\n              <ion-row class=\"ion-margin-top\" *ngIf=\"formData\">\n                <ion-col size=\"12\" size-sm=\"6\">\n                  <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">Nº de Teléfono (usuario) (*)</ion-label>\n                    <ion-input\n                      [(ngModel)]=\"formData.phone\"\n                      autocomplete=\"off\"\n                      maxlength=\"13\"\n                      (keypress)=\"validateOnlyNumbers($event)\"\n                    ></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\">\n                  <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">Nombre(s) (*)</ion-label>\n                    <ion-input\n                      [(ngModel)]=\"formData.names\"\n                      autocomplete=\"off\"\n                      maxlength=\"50\"\n                      (keyup)=\"validateOnlyLetters($event)\"\n                      class=\"ion-text-uppercase\"\n                    ></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\">\n                  <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">Apellidos(s) (*)</ion-label>\n                    <ion-input\n                      [(ngModel)]=\"formData.lastNames\"\n                      autocomplete=\"off\"\n                      maxlength=\"50\"\n                      (keyup)=\"validateOnlyLetters($event)\"\n                      class=\"ion-text-uppercase\"\n                    ></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\">\n                  <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">Correo electrónico (*)</ion-label>\n                    <ion-input [(ngModel)]=\"formData.email\" autocomplete=\"off\" class=\"ion-text-uppercase\"></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\">\n                  <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">Tipo de documento (*)</ion-label>\n                    <ion-input\n                      [readonly]=\"true\"\n                      [value]=\"formData.documentType ? getDocumentLabel(formData.documentType) : ''\"\n                      autocomplete=\"off\"\n                      class=\"no-selected-text\"\n                      (click)=\"showAlertDocumentList(formData.documentType)\"\n                    ></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\">\n                  <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">Número de documento (*)</ion-label>\n                    <ion-input\n                      [(ngModel)]=\"formData.document\"\n                      autocomplete=\"off\"\n                      maxlength=\"10\"\n                      (keypress)=\"validateOnlyNumbers($event)\"\n                      class=\"ion-text-uppercase\"\n                    >\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\">\n                  <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">Fecha de nacimiento (*)</ion-label>\n                    <ion-datetime\n                      [(ngModel)]=\"formData.birthday\"\n                      displayFormat=\"DD/MM/YYYY\"\n                      min=\"1910-03-14\"\n                      max=\"{{maxDate}}\"\n                      doneText=\"Listo\"\n                      cancelText=\"Cancelar\"\n                      (change)=\"setDate()\"\n                    >\n                    </ion-datetime>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\">\n                  <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">Sexo (*)</ion-label>\n                    <ion-input\n                      [readonly]=\"true\"\n                      [value]=\"gender[formData.gender] || ''\"\n                      autocomplete=\"off\"\n                      class=\"no-selected-text\"\n                      (click)=\"showAlertList('gender', 'gender', formData.gender)\"\n                    ></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\">\n                  <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">Tipo de sangre (*)</ion-label>\n                    <ion-input\n                      [readonly]=\"true\"\n                      [value]=\"bloodType[formData.bloodType] || ''\"\n                      autocomplete=\"off\"\n                      class=\"no-selected-text\"\n                      (click)=\"showAlertList('bloodType', 'bloodType', formData.bloodType)\"\n                    ></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\">\n                  <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">Estado civil (*)</ion-label>\n                    <ion-input\n                      [readonly]=\"true\"\n                      [value]=\"civilStatus[formData.civilStatus] || ''\"\n                      autocomplete=\"off\"\n                      class=\"no-selected-text\"\n                      (click)=\"showAlertList('civilStatus', 'civilStatus', formData.civilStatus)\"\n                    ></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\">\n                  <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">Nivel educativo (*)</ion-label>\n                    <ion-input\n                      [readonly]=\"true\"\n                      [value]=\"educationLevel[formData.educationLevel] || ''\"\n                      autocomplete=\"off\"\n                      class=\"no-selected-text\"\n                      (click)=\"showAlertList('educationLevel', 'educationLevel', formData.educationLevel)\"\n                    ></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\">\n                  <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">Profesión (*)</ion-label>\n                    <ion-input\n                      [readonly]=\"true\"\n                      [value]=\"professions[formData.profession] || ''\"\n                      autocomplete=\"off\"\n                      class=\"no-selected-text\"\n                      (click)=\"showAlertList('profession', 'professions', formData.profession)\"\n                    ></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\">\n                  <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">¿Posee una empresa? (*)</ion-label>\n                    <ion-input\n                      [readonly]=\"true\"\n                      [value]=\"formData.company\"\n                      autocomplete=\"off\"\n                      class=\"no-selected-text\"\n                      (click)=\"showAlertYesOrNotList('company', formData.company)\"\n                    ></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\" size-sm=\"6\" *ngIf=\"formData.company === 'Si';\">\n                  <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">Tipo de empresa (*)</ion-label>\n                    <ion-input\n                      [readonly]=\"true\"\n                      [value]=\"companyType[formData.companyType] || ''\"\n                      autocomplete=\"off\"\n                      class=\"ion-text-uppercase no-selected-text\"\n                      (click)=\"showAlertList('companyType', 'companyType', formData.companyType)\"\n                    ></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\">\n                  <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">¿Estás bautizado?</ion-label>\n                    <ion-input\n                      [readonly]=\"true\"\n                      [value]=\"formData.baptized\"\n                      autocomplete=\"off\"\n                      class=\"no-selected-text\"\n                      (click)=\"showAlertYesOrNotList('baptized', formData.baptized)\"\n                    ></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\">\n                  <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">Departamento (*)</ion-label>\n                    <ion-input\n                      [readonly]=\"true\"\n                      [value]=\"departments[formData.department] || ''\"\n                      autocomplete=\"off\"\n                      class=\"ion-text-uppercase no-selected-text\"\n                      (click)=\"showAlertList('department', 'departments', formData.department)\"\n                    ></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\">\n                  <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">Ciudad (*)</ion-label>\n                    <ion-input\n                      [readonly]=\"true\"\n                      [value]=\"cities[formData.city] || ''\"\n                      autocomplete=\"off\"\n                      class=\"ion-text-uppercase no-selected-text\"\n                      (click)=\"showAlertList('city', 'cities', formData.city)\"\n                    ></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\">\n                  <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">Barrio o localidad (*)</ion-label>\n                    <ion-input [(ngModel)]=\"formData.locality\" autocomplete=\"off\" maxlength=\"100\" class=\"ion-text-uppercase\"></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\">\n                  <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">Dirección (*)</ion-label>\n                    <ion-input [(ngModel)]=\"formData.direction\" autocomplete=\"off\" maxlength=\"250\" class=\"ion-text-uppercase\"></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top\">\n                  <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top ion-margin-bottom ion-text-center\">\n                  <ion-button color=\"medium\" (click)=\"editEnable()\">\n                    <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n                    <ion-text>Cancelar</ion-text>\n                  </ion-button>\n                  <ion-button color=\"primary\" (click)=\"confirmUpdate()\">\n                    <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\n                    <ion-text>Guardar</ion-text>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n\n          </ion-row>\n\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n    <ion-col [size]=\"12\" class=\"{{views.info.edit ? 'ion-hide' : '' }}\">\n      <ion-card>\n        <ion-card-header class=\"ion-no-padding ion-no-margin\">\n          <ion-toolbar color=\"primary\">\n            <ion-buttons slot=\"start\">\n              <ion-button (click)=\"setShowView('pass')\">\n                <ion-icon name=\"chevron-{{views.pass.show ? 'up' : 'down' }}-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-title>Cambiar contraseña</ion-title>\n          </ion-toolbar>\n        </ion-card-header>\n        <ion-card-content class=\"{{views.pass.show ? '' : 'ion-hide'}}\">\n          <ion-row class=\"ion-margin-top ion-padding-top ion-justify-content-center\">\n            <ion-col size=\"12\">\n              <ion-text><i>La nueva contraseña debe contener al menos 6 caracteres entre letras (A-Z, a-z), números (0-9) y caracteres especiales (¿?¡!=)(/&%$#,.-+*).</i></ion-text>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"4\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Contaseña actual (*)</ion-label>\n                <ion-input [(ngModel)]=\"formPass.password\" type=\"password\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"4\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Nueva contraseña (*)</ion-label>\n                <ion-input [(ngModel)]=\"formPass.newPassword\" type=\"password\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"4\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Rep. nueva contraseña (*)</ion-label>\n                <ion-input [(ngModel)]=\"formPass.repPassword\" type=\"password\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top ion-margin-bottom ion-text-center\">\n              <ion-button color=\"medium\" (click)=\"cleanFormPassword()\">\n                <ion-icon name=\"backspace-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Limpiar</ion-text>\n              </ion-button>\n              <ion-button color=\"primary\" (click)=\"confirmChangePassword()\">\n                <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Cambiar</ion-text>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n    <ion-col size=\"12\" class=\"ion-margin-bottom\"><br></ion-col>\n  </ion-row>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=views-mi-cuenta-mi-cuenta-module.js.map