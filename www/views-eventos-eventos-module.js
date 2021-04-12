(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-eventos-eventos-module"],{

/***/ "9qU5":
/*!*************************************************!*\
  !*** ./src/app/views/eventos/eventos.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .max-width-640 {\n  --max-width: 640px;\n}\n::ng-deep .ck-editor__editable_inline {\n  min-height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2V2ZW50b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7QUFBSjtBQUVFO0VBQ0UsaUJBQUE7QUFBSiIsImZpbGUiOiJldmVudG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgLm1heC13aWR0aC02NDAge1xyXG4gICAgLS1tYXgtd2lkdGg6IDY0MHB4O1xyXG4gIH1cclxuICAuY2stZWRpdG9yX19lZGl0YWJsZV9pbmxpbmUge1xyXG4gICAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "KBR1":
/*!***********************************************!*\
  !*** ./src/app/views/eventos/eventos.page.ts ***!
  \***********************************************/
/*! exports provided: EventosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosPage", function() { return EventosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_eventos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./eventos.page.html */ "xCRN");
/* harmony import */ var _eventos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventos.page.scss */ "9qU5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "+z1p");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _eventos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./eventos.service */ "ykbS");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Utils/validations.functions */ "OmbT");











let EventosPage = class EventosPage {
    constructor(alertCtrl, eventsService, globalSer, modalController, router) {
        this.alertCtrl = alertCtrl;
        this.eventsService = eventsService;
        this.globalSer = globalSer;
        this.modalController = modalController;
        this.router = router;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__;
        this.configEditor = null;
        this.queryParams = {
            input: 'date',
            value: -1,
            initDate: dayjs__WEBPACK_IMPORTED_MODULE_7___default()().format('YYYY-MM-DD'),
            endDate: null,
        };
        this.formData = {
            _id: null,
            title: null,
            description: null,
            date: null,
            initHour: null,
            endHour: null,
            toRoles: [],
            rolesSelected: '',
        };
        this.roles = [
            'Administradores',
            'Pastores',
            'Supervisores',
            'Líderes',
            'Personas',
        ];
        this.events = [];
        this.showFilter = false;
        this.showForm = false;
        this.edit = false;
        this.disableEdit = false;
        this.rolesSelected = '';
        this.minDate = dayjs__WEBPACK_IMPORTED_MODULE_7___default()().add(1, 'd').format('YYYY-MM-DD');
        this.maxDate = dayjs__WEBPACK_IMPORTED_MODULE_7___default()().add(5, 'y').format('YYYY-MM-DD');
        this.minInitHour = dayjs__WEBPACK_IMPORTED_MODULE_7___default()().add(1, 'd').startOf('d').format('HH:[00]');
        this.minEndHour = dayjs__WEBPACK_IMPORTED_MODULE_7___default()().startOf('d').add(1, 'd').format('HH:[00]');
        // check if exist session
        if (!this.globalSer.checkSession())
            this.router.navigate(['/ingresar']);
        else {
            this.configEditor = this.globalSer.configEditor;
            this.configEditor.description = 'Indica una descripción para el evento ...';
        }
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getEventsList();
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.globalSer.checkSession())
                yield this.router.navigate(['/ingresar']);
        });
    }
    // actions services
    getEventsList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.showFilter)
                this.showFilter = false;
            yield this.globalSer.presentLoading();
            const data = yield this.eventsService.getEvents(this.queryParams);
            if (data && !data.error) {
                this.events = data;
                yield this.globalSer.dismissLoading();
            }
            else if (data && data.error)
                yield this.globalSer.errorSession();
            else
                yield this.globalSer.dismissLoading();
        });
    }
    addEvent(dataToSend) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Agregando evento, por favor espere ...');
            const data = yield this.eventsService.addEvent(dataToSend);
            if (data && !data.error) {
                this.events = [data.event, ...this.events];
                yield this.setShowForm({ id: null, edit: false, show: false });
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', data.msg || 'Se ha agregado el evento exitosamente.');
            }
            else if (data && data.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    updateEvent(id, dataToSend) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Actualizando evento, por favor espere ...');
            const data = yield this.eventsService.updateEvent(id, dataToSend);
            if (data && !data.error) {
                const index = this.events.findIndex(e => e._id === id);
                if (index > -1)
                    this.events[index] = Object.assign(Object.assign({}, this.events[index]), dataToSend);
                yield this.setShowForm({ id: null, edit: false, show: false, disable: true });
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', data || 'Se ha actualizado el evento exitosamente.');
            }
            else if (data && data.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    deleteEvent(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Eliminando evento, por favor espere ...');
            const data = yield this.eventsService.deleteEvent(id);
            if (data && !data.error) {
                this.events = this.events.filter(e => e._id !== id);
                yield this.setShowForm({ id: null, edit: false, show: false });
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', data || 'Se ha eliminado el evento exitosamente.');
            }
            else if (data && data.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    // getters and setters
    validateForm(validate) {
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkTitlesOrDescriptions"])(validate.title))
            return 'Disculpe, pero debe indicar el título correcto para el evento.';
        if (validate.description && validate.description.length < 5)
            return 'Disculpe, pero debe indicar una descripción para el evento válida.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkDate"])(validate.date))
            return 'Disculpe, pero debe indicar la fecha del evento.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkHour"])(validate.initHour))
            return 'Disculpe, pero debe indicar la hora de inicio del evento.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkHour"])(validate.endHour))
            return 'Disculpe, pero debe indicar una hora correcta para la finalización del evento.';
        if (!validate.toRoles || validate.toRoles.length === 0)
            return 'Disculpe, pero debe seleccionar los roles a los que va dirigido el evento.';
        return null;
    }
    setShowFilter() {
        this.showFilter = !this.showFilter;
    }
    setOrderData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertWithList({
                header: 'Seleccione',
                inputs: [
                    {
                        name: `order-asc`,
                        type: 'radio',
                        label: `Antíguas primero`,
                        value: 1,
                        checked: this.queryParams.value === 1,
                    },
                    {
                        name: `order-desc`,
                        type: 'radio',
                        label: 'Próximas primero',
                        value: -1,
                        checked: this.queryParams.value === -1,
                    }
                ],
                confirmAction: (selectedValue) => {
                    this.queryParams.value = selectedValue;
                }
            });
        });
    }
    setDate(input) {
        if (this.queryParams[input]) {
            this.queryParams[input] = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(this.queryParams[input]).format('YYYY-MM-DD');
        }
    }
    setDataForm(id = null) {
        const ev = id ? this.events.find(e => e._id === id) : null;
        this.formData._id = ev ? ev._id : null;
        this.formData.title = ev ? ev.title : null;
        this.formData.description = ev ? Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["replaceNbsp"])(ev.description) : null;
        this.formData.date = ev ? ev.date : null;
        this.formData.initHour = ev ? ev.initHour : null;
        this.formData.endHour = ev ? ev.endHour : null;
        this.formData.toRoles = ev ? ev.toRoles : [];
        this.formData.rolesSelected = this.formData.toRoles.length > 0 ? this.getRoles(this.formData.toRoles) : '';
        if (ev) {
            if (ev.initHour) {
                this.formData.initHour = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(`${this.formData.date} ${this.formData.initHour}`)
                    .format('YYYY-MM-DDTHH:mm:ssZ');
            }
            else {
                this.formData.initHour = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(`${this.formData.date}`)
                    .format('YYYY-MM-DDTHH:mm:ssZ');
            }
            if (ev.endHour) {
                this.formData.endHour = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(`${this.formData.date} ${this.formData.endHour}`)
                    .format('YYYY-MM-DDTHH:mm:ssZ');
            }
            else {
                this.formData.endHour = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(`${this.formData.date}`)
                    .format('YYYY-MM-DDTHH:mm:ssZ');
            }
        }
    }
    checkIfEdit(ev) {
        if (dayjs__WEBPACK_IMPORTED_MODULE_7___default()().isSame(dayjs__WEBPACK_IMPORTED_MODULE_7___default()(`${ev.date} ${ev.initHour}`), 'd')) {
            this.disableEdit = true;
        }
        else
            this.disableEdit = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(`${ev.date} ${ev.initHour}`).isBefore(dayjs__WEBPACK_IMPORTED_MODULE_7___default()(), 'd');
        return this.disableEdit;
    }
    getHours(hours) {
        if (hours.length === 5)
            return hours;
        if (hours === 'Invalid Date')
            return null;
        return hours ? dayjs__WEBPACK_IMPORTED_MODULE_7___default()(hours).format('HH:mm') : null;
    }
    setMinEndHour(input) {
        if (input === 'date') {
            this.minInitHour = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(`${this.formData[input]}`).startOf('d').format('HH:[00]');
            if (!this.formData.initHour) {
                this.formData.initHour = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(`${this.formData[input]}`).startOf('d').format('YYYY-MM-DDTHH:[00]:ssZ');
            }
            if (!this.formData.endHour) {
                this.minEndHour = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(`${this.formData.initHour}`).startOf('d').add(1, 'h').format('HH:[00]');
                this.formData.endHour = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(`${this.formData.initHour}`)
                    .add(1, 'h')
                    .format('YYYY-MM-DDTHH:[00]:ssZ');
            }
            else {
                this.minEndHour = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(`${this.formData.initHour}`).add(1, 'h').format('HH:[00]');
            }
        }
        else if (input === 'initHour') {
            if (dayjs__WEBPACK_IMPORTED_MODULE_7___default()(`${this.formData[input]}`).isAfter(dayjs__WEBPACK_IMPORTED_MODULE_7___default()(`${this.formData.endHour}`))) {
                this.minEndHour = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(`${this.formData[input]}`)
                    .add(1, 'h')
                    .format('HH:[00]');
                this.formData.endHour = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(`${this.formData.initHour}`)
                    .add(1, 'h')
                    .format('YYYY-MM-DDTHH:[00]:ssZ');
            }
            else {
                this.minEndHour = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(`${this.formData[input]}`)
                    .add(1, 'h')
                    .format('HH:[00]');
            }
        }
    }
    setDateFormToSend() {
        return {
            title: this.formData.title ? this.formData.title.toUpperCase() : null,
            description: this.formData.description ? Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["replaceNbsp"])(this.formData.description.toUpperCase()) : null,
            date: this.formData.date ? dayjs__WEBPACK_IMPORTED_MODULE_7___default()(this.formData.date).format('YYYY-MM-DD') : null,
            initHour: this.getHours(this.formData.initHour),
            endHour: this.getHours(this.formData.endHour),
            toRoles: this.formData.toRoles || [],
        };
    }
    getRoles(rolesList) {
        let ret = '';
        if (rolesList.length > 0) {
            for (const v of rolesList) {
                if (ret === '')
                    ret = this.roles[v];
                else
                    ret += `, ${this.roles[v]}`;
            }
        }
        return ret;
    }
    resetQueryParams() {
        this.queryParams.input = 'date';
        this.queryParams.value = -1;
        this.queryParams.initDate = dayjs__WEBPACK_IMPORTED_MODULE_7___default()().format('YYYY-MM-DD');
        this.queryParams.endDate = null;
    }
    // actions form
    setShowForm({ id, show, edit, disable }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.setDataForm(id);
            this.showForm = show;
            this.edit = edit || false;
            this.disableEdit = disable || false;
            if (id)
                this.setMinEndHour('date');
        });
    }
    // actions alerts
    showAlertRolesList(selected) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputs = [];
            for (const [i, value] of this.roles.entries()) {
                inputs.push({
                    name: `roles`,
                    type: 'checkbox',
                    label: value,
                    value: i,
                    checked: selected.indexOf(i) > -1,
                });
            }
            yield this.globalSer.alertWithList({
                header: 'Seleccione',
                inputs,
                confirmAction: (selectedValue) => {
                    this.formData.toRoles = selectedValue;
                    this.formData.rolesSelected = this.getRoles(selectedValue);
                }
            });
        });
    }
    showEvent(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ev = this.events.find(e => e._id === id);
            if (ev) {
                const disableEdit = this.checkIfEdit(ev);
                const buttons = [];
                const btns = [
                    {
                        text: 'Eliminar',
                        handler: () => this.confirmAction({ id: ev._id, update: false, remove: true })
                    },
                    {
                        text: 'Editar',
                        handler: () => this.setShowForm({ id: ev._id, edit: true, show: true, disable: disableEdit })
                    },
                    {
                        text: 'Cerrar',
                        role: 'cancel',
                        handler: () => { }
                    }
                ];
                for (const b of btns) {
                    if (disableEdit && b.text !== 'Editar')
                        buttons.push(b);
                    else if (!disableEdit)
                        buttons.push(b);
                }
                const roles = this.getRoles(ev.toRoles);
                const description = Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["replaceNbsp"])(ev.description);
                const alert = yield this.alertCtrl.create({
                    cssClass: 'max-width-640',
                    header: ev.title,
                    subHeader: `Por: ${ev.user ? `${ev.user.names} ${ev.user.lastNames}` : 'Anónimo'}`,
                    message: `
          <b>Fecha:</b> ${ev.date}<br/>
          <b>Hora de inicio:</b> ${ev.initHour}<br/>
          ${ev.endHour ? `<b>Hora fin:</b> ${ev.endHour}<br/>` : ''}
          <b>Dirigido a:</b> ${roles}<br/><br/>
          <b>Descripción:</b><br/>
          ${description ? description : 'No especificada.'}<br/>
        `,
                    buttons
                });
                yield alert.present();
            }
        });
    }
    confirmAction({ id, update, remove }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let showConfirm = true;
            let dataToSend = null;
            if (this.showForm) {
                dataToSend = this.setDateFormToSend();
                const validate = this.validateForm(dataToSend);
                if (!validate)
                    showConfirm = true;
                else {
                    showConfirm = false;
                    yield this.globalSer.presentAlert('¡Error!', validate || 'Disculpe, pero debe completar el formulario.');
                }
            }
            if (showConfirm) {
                let message = '¿Está seguro qué desea __action__ este evento?';
                if (update)
                    message = message.replace('__action__', 'actualizar');
                else if (remove)
                    message = message.replace('__action__', 'eliminar');
                else
                    message = message.replace('__action__', 'agregar');
                yield this.globalSer.alertConfirm({
                    header: '¡Confirme!',
                    message,
                    confirmAction: () => {
                        if (update)
                            this.updateEvent(id, dataToSend);
                        else if (remove)
                            this.deleteEvent(id);
                        else
                            this.addEvent(dataToSend);
                    }
                });
            }
        });
    }
};
EventosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _eventos_service__WEBPACK_IMPORTED_MODULE_8__["EventosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_9__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
EventosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-eventos',
        template: _raw_loader_eventos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_eventos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EventosPage);



/***/ }),

/***/ "TjVE":
/*!*************************************************!*\
  !*** ./src/app/views/eventos/eventos.module.ts ***!
  \*************************************************/
/*! exports provided: EventosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosPageModule", function() { return EventosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _eventos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eventos-routing.module */ "mURV");
/* harmony import */ var _eventos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventos.page */ "KBR1");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");









let EventosPageModule = class EventosPageModule {
};
EventosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _eventos_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventosPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_8__["CKEditorModule"]
        ],
        declarations: [_eventos_page__WEBPACK_IMPORTED_MODULE_6__["EventosPage"]]
    })
], EventosPageModule);



/***/ }),

/***/ "mURV":
/*!*********************************************************!*\
  !*** ./src/app/views/eventos/eventos-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: EventosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosPageRoutingModule", function() { return EventosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _eventos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventos.page */ "KBR1");




const routes = [
    {
        path: '',
        component: _eventos_page__WEBPACK_IMPORTED_MODULE_3__["EventosPage"]
    }
];
let EventosPageRoutingModule = class EventosPageRoutingModule {
};
EventosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventosPageRoutingModule);



/***/ }),

/***/ "xCRN":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/eventos/eventos.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Eventos</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" (click)=\"setShowForm({ id: null, edit: false, show: true, disable: false })\" *ngIf=\"!showForm\">\n        <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Agregar evento</ion-text>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-margin\">\n    <ion-col [size]=\"12\">\n      <ion-card *ngIf=\"showForm\" class=\"ion-no-margin\">\n        <ion-card-content>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-card-title>{{ edit ? 'Editar evento' : 'Crear evento' }}</ion-card-title>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Título del evento (*)</ion-label>\n                <ion-input\n                  [(ngModel)]=\"formData.title\"\n                  autocomplete=\"off\"\n                  maxlength=\"100\"\n                  class=\"ion-text-uppercase\"\n                  [disabled]=\"disableEdit\"\n                >\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <!--<ion-label class=\"ion-margin-start\" color=\"medium\">Descripción (*)</ion-label>-->\n              <ckeditor\n                [(ngModel)]=\"formData.description\"\n                [editor]=\"Editor\"\n                [config]=\"configEditor\"\n              ></ckeditor>\n            </ion-col>\n            <!--<ion-col size=\"12\">-->\n              <!--<ion-item>-->\n                <!--<ion-label position=\"floating\" color=\"medium\">Descripción (*)</ion-label>-->\n                <!--<ion-textarea-->\n                  <!--[(ngModel)]=\"formData.description\"-->\n                  <!--rows=\"5\"-->\n                  <!--cols=\"20\"-->\n                  <!--class=\"ion-text-uppercase\"-->\n                  <!--[disabled]=\"disableEdit\"-->\n                <!--&gt;</ion-textarea>-->\n              <!--</ion-item>-->\n            <!--</ion-col>-->\n            <ion-col size=\"12\" size-sm=\"4\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Fecha del evento (*)</ion-label>\n                <ion-datetime\n                  [(ngModel)]=\"formData.date\"\n                  displayFormat=\"DD/MM/YYYY\"\n                  [min]=\"minDate\"\n                  [max]=\"maxDate\"\n                  doneText=\"Listo\"\n                  cancelText=\"Cancelar\"\n                  (ionChange)=\"setMinEndHour('date')\"\n                  [disabled]=\"disableEdit\"\n                >\n                </ion-datetime>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"4\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Hora inicio (*)</ion-label>\n                <ion-datetime\n                  [(ngModel)]=\"formData.initHour\"\n                  [min]=\"minInitHour\"\n                  displayFormat=\"HH:mm\"\n                  minuteValues=\"00,15,30,45,59\"\n                  doneText=\"Listo\"\n                  cancelText=\"Cancelar\"\n                  (ionChange)=\"setMinEndHour('initHour')\"\n                  [disabled]=\"disableEdit || !formData.date\"\n                ></ion-datetime>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"4\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Hora fin (*)</ion-label>\n                <ion-datetime\n                  [(ngModel)]=\"formData.endHour\"\n                  [min]=\"minEndHour\"\n                  displayFormat=\"HH:mm\"\n                  minuteValues=\"00,15,30,45\"\n                  doneText=\"Listo\"\n                  cancelText=\"Cancelar\"\n                  [disabled]=\"disableEdit || !formData.date\"\n                ></ion-datetime>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Dirigido a (*)</ion-label>\n                <ion-input\n                  [(ngModel)]=\"formData.rolesSelected\"\n                  [value]=\"formData.rolesSelected\"\n                  [readonly]=\"true\"\n                  autocomplete=\"off\"\n                  class=\"ion-text-uppercase no-selected-text\"\n                  (click)=\"!disableEdit ? showAlertRolesList(formData.toRoles) : null\"\n                  [disabled]=\"disableEdit\"\n                >\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" class=\"ion-margin-top\">\n              <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-margin-top\">\n            <ion-col size=\"12\" class=\"ion-text-center\">\n              <ion-button class=\"ion-text-center\" color=\"light\" (click)=\"setShowForm({ id: null, edit: false, show: false })\">\n                <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Cancelar</ion-text>\n              </ion-button>\n              <ion-button\n                class=\"ion-text-center\"\n                color=\"primary\"\n                (click)=\"confirmAction({ update: edit, id: formData._id })\"\n              >\n                <ion-icon name=\"checkmark-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Guardar</ion-text>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n    <ion-col [size]=\"12\">\n      <div class=\"{{ showForm ? 'ion-hide' : '' }}\">\n\n        <div class=\"ion-margin-bottom\">\n          <ion-button color=\"light\" (click)=\"setShowFilter()\">\n            <ion-icon name=\"filter-outline\" slot=\"start\" *ngIf=\"!showFilter\"></ion-icon>\n            <ion-icon name=\"close-outline\" slot=\"start\" *ngIf=\"showFilter\"></ion-icon>\n            <ion-text>Filtrar</ion-text>\n          </ion-button>\n        </div>\n\n        <ion-card *ngIf=\"showFilter\">\n          <ion-card-content>\n            <ion-row>\n              <ion-col size=\"12\" size-sm=\"4\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"medium\">Ordenar por:</ion-label>\n                  <ion-input\n                    [readonly]=\"true\"\n                    class=\"no-selected-text no-selected-text\"\n                    [value]=\"queryParams.value === -1 ? 'Fecha ascendente' : 'Fecha descendente'\"\n                    (click)=\"setOrderData()\"\n                  ></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"4\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"medium\">A partir de:</ion-label>\n                  <ion-datetime\n                    [(ngModel)]=\"queryParams.initDate\"\n                    displayFormat=\"DD/MM/YYYY\"\n                    min=\"2020-01-01\"\n                    doneText=\"Listo\"\n                    cancelText=\"Cancelar\"\n                    onchange=\"setDate('initDate')\"\n                  >\n                  </ion-datetime>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"4\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"medium\">Hasta:</ion-label>\n                  <ion-datetime\n                    [(ngModel)]=\"queryParams.endDate\"\n                    displayFormat=\"DD/MM/YYYY\"\n                    min=\"2020-01-01\"\n                    doneText=\"Listo\"\n                    cancelText=\"Cancelar\"\n                    onchange=\"setDate('endDate')\"\n                  >\n                  </ion-datetime>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"ion-margin-top\">\n              <ion-col size=\"6\" class=\"ion-justify-content-center\">\n                <ion-button class=\"ion-text-center\" color=\"light\" expand=\"full\" (click)=\"resetQueryParams()\">\n                  <ion-icon name=\"trash-outline\"></ion-icon>\n                  <ion-text>Limpiar</ion-text>\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"6\" class=\"ion-justify-content-center\">\n                <ion-button class=\"ion-text-center\" color=\"primary\" expand=\"full\" (click)=\"getEventsList()\">\n                  <ion-icon name=\"checkmark-outline\"></ion-icon>\n                  <ion-text>Aplicar</ion-text>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n\n        <div *ngIf=\"events && events.length > 0; else noEvents\">\n          <ion-row>\n            <ion-col size=\"12\" size-sm=\"4\" *ngFor='let e of events' (click)=\"showEvent(e._id)\">\n              <app-eventcard\n                [data]=\"e\"\n              >\n              </app-eventcard>\n            </ion-col>\n          </ion-row>\n        </div>\n        <ng-template #noEvents>\n          <ion-card class=\"ion-no-padding\">\n            <ion-text>\n              <p class=\"ion-margin-top ion-padding-top ion-text-center no-selected-text\">\n                <ion-icon name=\"alert-circle-outline\"></ion-icon> No se encontraron eventos.\n              </p>\n            </ion-text>\n          </ion-card>\n        </ng-template>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "ykbS":
/*!**************************************************!*\
  !*** ./src/app/views/eventos/eventos.service.ts ***!
  \**************************************************/
/*! exports provided: EventosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosService", function() { return EventosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");




let EventosService = class EventosService {
    constructor(axios, globalSer) {
        this.axios = axios;
        this.globalSer = globalSer;
    }
    getEvents(query = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/admin/events', query);
            if (res && res.success)
                return res.data.events;
            return this.globalSer.altResponse(res);
        });
    }
    addEvent(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.postData(`/admin/events`, data);
            if (res && res.success)
                return res.data;
            return this.globalSer.altResponse(res);
        });
    }
    updateEvent(id, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.putData(`/admin/events/${id}`, data);
            if (res && res.success)
                return res.data.msg;
            return this.globalSer.altResponse(res);
        });
    }
    deleteEvent(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.deleteData(`/admin/events/${id}`);
            if (res && res.success)
                return res.data.msg;
            return this.globalSer.altResponse(res);
        });
    }
};
EventosService.ctorParameters = () => [
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_2__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }
];
EventosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EventosService);



/***/ })

}]);
//# sourceMappingURL=views-eventos-eventos-module.js.map