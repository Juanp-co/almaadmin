(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reportes-reportes-module"],{

/***/ "/SgY":
/*!*******************************************************************!*\
  !*** ./src/app/views/grupos-familiares/reportes/reportes.page.ts ***!
  \*******************************************************************/
/*! exports provided: ReportesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportesPage", function() { return ReportesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reportes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reportes.page.html */ "QgMg");
/* harmony import */ var _reportes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reportes.page.scss */ "1GNq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _grupos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../grupos.service */ "ai4U");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../Utils/validations.functions */ "OmbT");










let ReportesPage = class ReportesPage {
    constructor(globalSer, gruposService, navCtrl, router) {
        this.globalSer = globalSer;
        this.gruposService = gruposService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.opts = ['Ninguno', 'Sub-sector', 'Sector'];
        this.reports = null;
        this.reportsAlt = null;
        this.listGroups = null;
        this.selected = null;
        this.report = null;
        this.observations = null;
        this.observationsPreview = null;
        this.dataToReport = null;
        this.totalityOpt = 0;
        this.sizeElems = 6;
        this.showFilter = false;
        this.showTotals = true;
        this.showObservations = true;
        this.minInitDate = dayjs__WEBPACK_IMPORTED_MODULE_6___default()('2021-01-01').format('YYYY-MM-DD');
        this.maxInitDate = dayjs__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYY-MM-DD');
        this.minEndDate = dayjs__WEBPACK_IMPORTED_MODULE_6___default()('2021-01-01').format('YYYY-MM-DD');
        this.maxEndDate = dayjs__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYY-MM-DD');
        this.queryParams = {
            sector: null,
            subSector: null,
            number: null,
            initDate: null,
            endDate: null,
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.globalSer.checkSession())
                this.router.navigate(['/ingresar']);
            else
                yield this.getData();
        });
    }
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            this.reports = null;
            this.listGroups = null;
            this.selected = null;
            this.dataToReport = null;
            this.observations = [];
            this.observationsPreview = [];
            const data = yield this.gruposService.getFamiliesGroupsReports(this.queryParams);
            if (data && !data.error) {
                this.reports = data;
                yield this.globalSer.dismissLoading();
                yield this.setTotalityData(true);
            }
            else if (data && data.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    back() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navCtrl.back();
        });
    }
    showListResizeAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertWithList({
                header: 'Tamaños de las gráficas',
                inputs: [
                    {
                        name: `resize`,
                        type: 'radio',
                        label: `Mediano`,
                        value: 6,
                        checked: this.sizeElems === 6,
                    },
                    {
                        name: `resize`,
                        type: 'radio',
                        label: `Grande`,
                        value: 12,
                        checked: this.sizeElems === 12,
                    },
                ],
                confirmAction: (value) => {
                    this.sizeElems = value;
                }
            });
        });
    }
    setShowFilter() {
        this.showFilter = !this.showFilter;
    }
    resetQueryParams() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.queryParams.initDate = null;
            this.queryParams.endDate = null;
            this.queryParams.sector = null;
            this.queryParams.subSector = null;
            this.queryParams.number = null;
            this.showFilter = !this.showFilter;
            yield this.getData();
        });
    }
    findData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let find = false;
            if (!!this.queryParams.initDate) {
                this.queryParams.initDate = dayjs__WEBPACK_IMPORTED_MODULE_6___default()(this.queryParams.initDate).format('YYYY-MM-DD');
                find = true;
            }
            if (!!this.queryParams.endDate) {
                this.queryParams.endDate = dayjs__WEBPACK_IMPORTED_MODULE_6___default()(this.queryParams.endDate).format('YYYY-MM-DD');
                find = this.queryParams.initDate !== null;
            }
            if (/[0-9]{1,4}/.test(this.queryParams.sector))
                find = true;
            if (/[0-9]{1,4}/.test(this.queryParams.subSector))
                find = true;
            if (/[0-9]{1,4}/.test(this.queryParams.number))
                find = true;
            if (find)
                yield this.getData();
            else
                this.globalSer.presentAlert('Alerta', 'Disculpe, pero debe indicar una fecha inicial');
        });
    }
    // actions inputs
    validateOnlyNumber(event) {
        Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_9__["onlyNumbersInputValidation2"])(event);
    }
    showListTotality() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputs = [];
            for (const [index, value] of this.opts.entries()) {
                inputs.push({
                    name: `list-opts`,
                    type: 'radio',
                    label: value,
                    value: index,
                    checked: index === this.totalityOpt,
                });
            }
            yield this.globalSer.alertWithList({
                header: 'Totalizar por',
                inputs,
                confirmAction: (value) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.totalityOpt = value;
                    this.reportsAlt = null;
                    yield this.setTotalityData(true);
                })
            });
        });
    }
    setTotalityData(showLoader = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (showLoader)
                yield this.globalSer.presentLoading();
            const data = [];
            const model = () => ({
                _id: null,
                groupName: null,
                observations: [],
                report: {
                    bibleReading: 0,
                    brethren: 0,
                    brethrenPlanning: 0,
                    christianChildren: 0,
                    christianChildrenFriends: 0,
                    churchAttendance: 0,
                    churchAttendanceChildren: 0,
                    consolidated: 0,
                    conversions: 0,
                    conversionsChildren: 0,
                    discipleshipVisits: 0,
                    friends: 0,
                    offering: 0,
                    reconciliations: 0,
                    scheduledVisits: 0,
                    total: 0,
                }
            });
            const getReportCounter = (report, rData) => {
                report.bibleReading += (rData === null || rData === void 0 ? void 0 : rData.bibleReading) || 0;
                report.brethren += (rData === null || rData === void 0 ? void 0 : rData.brethren) || 0;
                report.brethrenPlanning += (rData === null || rData === void 0 ? void 0 : rData.brethrenPlanning) || 0;
                report.christianChildren += (rData === null || rData === void 0 ? void 0 : rData.christianChildren) || 0;
                report.christianChildrenFriends += (rData === null || rData === void 0 ? void 0 : rData.christianChildrenFriends) || 0;
                report.churchAttendance += (rData === null || rData === void 0 ? void 0 : rData.churchAttendance) || 0;
                report.churchAttendanceChildren += (rData === null || rData === void 0 ? void 0 : rData.churchAttendanceChildren) || 0;
                report.consolidated += (rData === null || rData === void 0 ? void 0 : rData.consolidated) || 0;
                report.conversions += (rData === null || rData === void 0 ? void 0 : rData.conversions) || 0;
                report.conversionsChildren += (rData === null || rData === void 0 ? void 0 : rData.conversionsChildren) || 0;
                report.discipleshipVisits += (rData === null || rData === void 0 ? void 0 : rData.discipleshipVisits) || 0;
                report.friends += (rData === null || rData === void 0 ? void 0 : rData.friends) || 0;
                report.offering += (rData === null || rData === void 0 ? void 0 : rData.offering) || 0;
                report.reconciliations += (rData === null || rData === void 0 ? void 0 : rData.reconciliations) || 0;
                report.scheduledVisits += (rData === null || rData === void 0 ? void 0 : rData.scheduledVisits) || 0;
                report.total += (rData === null || rData === void 0 ? void 0 : rData.total) || 0;
                return report;
            };
            let currentGroup = null;
            this.reportsAlt = null;
            const { length } = this.reports;
            if (length > 0) {
                if (this.totalityOpt !== 0) {
                    let modelData = model();
                    this.reports.forEach((d, i) => {
                        var _a;
                        if (d.group[this.totalityOpt === 1 ? 'subSector' : 'sector'] !== currentGroup) {
                            if (currentGroup !== null)
                                data.push(modelData);
                            currentGroup = d.group[this.totalityOpt === 1 ? 'subSector' : 'sector'];
                            modelData = model();
                            modelData._id = i;
                            modelData.groupName = `Sector: ${d.group.sector}`;
                            if (this.totalityOpt === 1)
                                modelData.groupName += ` - SS: ${d.group.subSector}`;
                        }
                        // concat observations list
                        modelData.observations = (_a = modelData.observations) === null || _a === void 0 ? void 0 : _a.concat(d.observations || []);
                        // set data reports
                        modelData.report = getReportCounter(modelData.report, d.report);
                    });
                    if (length > 0 && data.length === 0 && modelData)
                        data.push(modelData);
                }
                else {
                    let modelData = model();
                    this.reports.forEach(d => {
                        var _a;
                        modelData = model();
                        modelData._id = d.group._id;
                        modelData.groupName = `S: ${d.group.sector}`;
                        modelData.groupName += ` - SS: ${d.group.subSector}`;
                        modelData.groupName += ` - #: ${d.group.number}`;
                        // concat observations list
                        modelData.observations = (_a = modelData.observations) === null || _a === void 0 ? void 0 : _a.concat(d.observations || []);
                        // set data reports
                        modelData.report = getReportCounter(modelData.report, d.report);
                        data.push(modelData);
                    });
                }
                this.reportsAlt = data;
            }
            if (showLoader)
                yield this.globalSer.dismissLoading();
        });
    }
};
ReportesPage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"] },
    { type: _grupos_service__WEBPACK_IMPORTED_MODULE_7__["GruposService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ReportesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reportes',
        template: _raw_loader_reportes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reportes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReportesPage);



/***/ }),

/***/ "1GNq":
/*!*********************************************************************!*\
  !*** ./src/app/views/grupos-familiares/reportes/reportes.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".max-height-250 {\n  max-height: 250px !important;\n  overflow-y: auto;\n}\n\n.max-height-450 {\n  max-height: 450px !important;\n  overflow-y: auto;\n}\n\n.bigNumber {\n  font-size: 1.5em !important;\n}\n\n.bigIcon {\n  font-size: 3em !important;\n}\n\n.textTotals {\n  font-size: 1em !important;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JlcG9ydGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6InJlcG9ydGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXgtaGVpZ2h0LTI1MCB7XHJcbiAgbWF4LWhlaWdodDogMjUwcHggIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ubWF4LWhlaWdodC00NTAge1xyXG4gIG1heC1oZWlnaHQ6IDQ1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmJpZ051bWJlciB7XHJcbiAgZm9udC1zaXplOiAxLjVlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmlnSWNvbiB7XHJcbiAgZm9udC1zaXplOiAzZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHRUb3RhbHMge1xyXG4gIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "AQDP":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/common/locales/es-CO.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        if (n === 1)
            return 1;
        return 5;
    }
    exports.default = [
        'es-CO',
        [['a. m.', 'p. m.'], u, u],
        u,
        [
            ['D', 'L', 'M', 'M', 'J', 'V', 'S'], ['dom.', 'lun.', 'mar.', 'mié.', 'jue.', 'vie.', 'sáb.'],
            ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
            ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SA']
        ],
        [
            ['d', 'l', 'm', 'm', 'j', 'v', 's'], ['dom.', 'lun.', 'mar.', 'mié.', 'jue.', 'vie.', 'sáb.'],
            ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
            ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SA']
        ],
        [
            ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            [
                'ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sep.', 'oct.', 'nov.', 'dic.'
            ],
            [
                'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre',
                'octubre', 'noviembre', 'diciembre'
            ]
        ],
        [
            ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            [
                'ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sept.', 'oct.', 'nov.',
                'dic.'
            ],
            [
                'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre',
                'octubre', 'noviembre', 'diciembre'
            ]
        ],
        [['a. C.', 'd. C.'], u, ['antes de Cristo', 'después de Cristo']],
        0,
        [6, 0],
        ['d/MM/yy', 'd/MM/y', 'd \'de\' MMMM \'de\' y', 'EEEE, d \'de\' MMMM \'de\' y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', u, '{1} \'a\' \'las\' {0}', u],
        [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0 %', '¤ #,##0.00', '#E0'],
        'COP',
        '$',
        'peso colombiano',
        {
            'AUD': [u, '$'],
            'BRL': [u, 'R$'],
            'CAD': [u, '$'],
            'CNY': [u, '¥'],
            'COP': ['$'],
            'ESP': ['₧'],
            'EUR': [u, '€'],
            'FKP': [u, 'FK£'],
            'GBP': [u, '£'],
            'HKD': [u, '$'],
            'ILS': [u, '₪'],
            'INR': [u, '₹'],
            'JPY': [u, '¥'],
            'KRW': [u, '₩'],
            'MXN': [u, '$'],
            'NZD': [u, '$'],
            'RON': [u, 'L'],
            'SSP': [u, 'SD£'],
            'SYP': [u, 'S£'],
            'TWD': [u, 'NT$'],
            'USD': ['US$', '$'],
            'VEF': [u, 'BsF'],
            'VND': [u, '₫'],
            'XAF': [],
            'XCD': [u, '$'],
            'XOF': []
        },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXMtQ08uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9lcy1DTy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtCQUFlO1FBQ2IsT0FBTztRQUNQLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1lBQzdGLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDO1lBQzFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1NBQzNDO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUs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WUFDakIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUNqQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ2hCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztZQUNuQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsRUFBRTtTQUNWO1FBQ0QsS0FBSztRQUNMLE1BQU07S0FDUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFRISVMgQ09ERSBJUyBHRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG4vLyBTZWUgYW5ndWxhci90b29scy9ndWxwLXRhc2tzL2NsZHIvZXh0cmFjdC5qc1xuXG5jb25zdCB1ID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBwbHVyYWwobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKG4gPT09IDEpIHJldHVybiAxO1xuICByZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1xuICAnZXMtQ08nLFxuICBbWydhLsKgbS4nLCAncC7CoG0uJ10sIHUsIHVdLFxuICB1LFxuICBbXG4gICAgWydEJywgJ0wnLCAnTScsICdNJywgJ0onLCAnVicsICdTJ10sIFsnZG9tLicsICdsdW4uJywgJ21hci4nLCAnbWnDqS4nLCAnanVlLicsICd2aWUuJywgJ3PDoWIuJ10sXG4gICAgWydkb21pbmdvJywgJ2x1bmVzJywgJ21hcnRlcycsICdtacOpcmNvbGVzJywgJ2p1ZXZlcycsICd2aWVybmVzJywgJ3PDoWJhZG8nXSxcbiAgICBbJ0RPJywgJ0xVJywgJ01BJywgJ01JJywgJ0pVJywgJ1ZJJywgJ1NBJ11cbiAgXSxcbiAgW1xuICAgIFsnZCcsICdsJywgJ20nLCAnbScsICdqJywgJ3YnLCAncyddLCBbJ2RvbS4nLCAnbHVuLicsICdtYXIuJywgJ21pw6kuJywgJ2p1ZS4nLCAndmllLicsICdzw6FiLiddLFxuICAgIFsnZG9taW5nbycsICdsdW5lcycsICdtYXJ0ZXMnLCAnbWnDqXJjb2xlcycsICdqdWV2ZXMnLCAndmllcm5lcycsICdzw6FiYWRvJ10sXG4gICAgWydETycsICdMVScsICdNQScsICdNSScsICdKVScsICdWSScsICdTQSddXG4gIF0sXG4gIFtcbiAgICBbJ0UnLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gICAgW1xuICAgICAgJ2VuZS4nLCAnZmViLicsICdtYXIuJywgJ2Fici4nLCAnbWF5LicsICdqdW4uJywgJ2p1bC4nLCAnYWdvLicsICdzZXAuJywgJ29jdC4nLCAnbm92LicsICdkaWMuJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ2VuZXJvJywgJ2ZlYnJlcm8nLCAnbWFyem8nLCAnYWJyaWwnLCAnbWF5bycsICdqdW5pbycsICdqdWxpbycsICdhZ29zdG8nLCAnc2VwdGllbWJyZScsXG4gICAgICAnb2N0dWJyZScsICdub3ZpZW1icmUnLCAnZGljaWVtYnJlJ1xuICAgIF1cbiAgXSxcbiAgW1xuICAgIFsnRScsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgICBbXG4gICAgICAnZW5lLicsICdmZWIuJywgJ21hci4nLCAnYWJyLicsICdtYXkuJywgJ2p1bi4nLCAnanVsLicsICdhZ28uJywgJ3NlcHQuJywgJ29jdC4nLCAnbm92LicsXG4gICAgICAnZGljLidcbiAgICBdLFxuICAgIFtcbiAgICAgICdlbmVybycsICdmZWJyZXJvJywgJ21hcnpvJywgJ2FicmlsJywgJ21heW8nLCAnanVuaW8nLCAnanVsaW8nLCAnYWdvc3RvJywgJ3NlcHRpZW1icmUnLFxuICAgICAgJ29jdHVicmUnLCAnbm92aWVtYnJlJywgJ2RpY2llbWJyZSdcbiAgICBdXG4gIF0sXG4gIFtbJ2EuIEMuJywgJ2QuIEMuJ10sIHUsIFsnYW50ZXMgZGUgQ3Jpc3RvJywgJ2Rlc3B1w6lzIGRlIENyaXN0byddXSxcbiAgMCxcbiAgWzYsIDBdLFxuICBbJ2QvTU0veXknLCAnZC9NTS95JywgJ2QgXFwnZGVcXCcgTU1NTSBcXCdkZVxcJyB5JywgJ0VFRUUsIGQgXFwnZGVcXCcgTU1NTSBcXCdkZVxcJyB5J10sXG4gIFsnaDptbSBhJywgJ2g6bW06c3MgYScsICdoOm1tOnNzIGEgeicsICdoOm1tOnNzIGEgenp6eiddLFxuICBbJ3sxfSwgezB9JywgdSwgJ3sxfSBcXCdhXFwnIFxcJ2xhc1xcJyB7MH0nLCB1XSxcbiAgWycsJywgJy4nLCAnOycsICclJywgJysnLCAnLScsICdFJywgJ8OXJywgJ+KAsCcsICfiiJ4nLCAnTmFOJywgJzonXSxcbiAgWycjLCMjMC4jIyMnLCAnIywjIzDCoCUnLCAnwqTCoCMsIyMwLjAwJywgJyNFMCddLFxuICAnQ09QJyxcbiAgJyQnLFxuICAncGVzbyBjb2xvbWJpYW5vJyxcbiAge1xuICAgICdBVUQnOiBbdSwgJyQnXSxcbiAgICAnQlJMJzogW3UsICdSJCddLFxuICAgICdDQUQnOiBbdSwgJyQnXSxcbiAgICAnQ05ZJzogW3UsICfCpSddLFxuICAgICdDT1AnOiBbJyQnXSxcbiAgICAnRVNQJzogWyfigqcnXSxcbiAgICAnRVVSJzogW3UsICfigqwnXSxcbiAgICAnRktQJzogW3UsICdGS8KjJ10sXG4gICAgJ0dCUCc6IFt1LCAnwqMnXSxcbiAgICAnSEtEJzogW3UsICckJ10sXG4gICAgJ0lMUyc6IFt1LCAn4oKqJ10sXG4gICAgJ0lOUic6IFt1LCAn4oK5J10sXG4gICAgJ0pQWSc6IFt1LCAnwqUnXSxcbiAgICAnS1JXJzogW3UsICfigqknXSxcbiAgICAnTVhOJzogW3UsICckJ10sXG4gICAgJ05aRCc6IFt1LCAnJCddLFxuICAgICdST04nOiBbdSwgJ0wnXSxcbiAgICAnU1NQJzogW3UsICdTRMKjJ10sXG4gICAgJ1NZUCc6IFt1LCAnU8KjJ10sXG4gICAgJ1RXRCc6IFt1LCAnTlQkJ10sXG4gICAgJ1VTRCc6IFsnVVMkJywgJyQnXSxcbiAgICAnVkVGJzogW3UsICdCc0YnXSxcbiAgICAnVk5EJzogW3UsICfigqsnXSxcbiAgICAnWEFGJzogW10sXG4gICAgJ1hDRCc6IFt1LCAnJCddLFxuICAgICdYT0YnOiBbXVxuICB9LFxuICAnbHRyJyxcbiAgcGx1cmFsXG5dO1xuIl19

/***/ }),

/***/ "QgMg":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/grupos-familiares/reportes/reportes.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Reportes de grupos familiares</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"showListResizeAlert()\">\n        <ion-icon name=\"resize-outline\" slot=\"start\"></ion-icon>\n        <ion-text>Visualización</ion-text>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-no-padding ion-margin-start ion-margin-end ion-margin-top\">\n    <ion-col size=\"12\">\n      <ion-row>\n        <ion-col size=\"auto\">\n          <div class=\"ion-margin-bottom\">\n            <ion-button color=\"medium\" (click)=\"setShowFilter()\">\n              <ion-icon name=\"{{!showFilter ? 'filter' : 'close'}}-outline\" slot=\"start\"></ion-icon>\n              <ion-text>Filtrar</ion-text>\n            </ion-button>\n            <ion-button color=\"medium\" (click)=\"showListTotality()\">\n              <ion-icon name=\"calculator-outline\" slot=\"start\"></ion-icon>\n              <ion-text>{{ opts[totalityOpt] }}</ion-text>\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col size=\"12\" *ngIf=\"showFilter\">\n      <ion-card>\n        <ion-card-content>\n          <ion-row>\n            <ion-col size=\"12\" size-sm=\"4\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Nº Sector</ion-label>\n                <ion-input\n                  [(ngModel)]=\"queryParams.sector\"\n                  autocomplete=\"off\"\n                  maxlength=\"4\"\n                  (keypress)=\"validateOnlyNumber($event)\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"4\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Nº Sub-sector</ion-label>\n                <ion-input\n                  [(ngModel)]=\"queryParams.subSector\"\n                  autocomplete=\"off\"\n                  maxlength=\"4\"\n                  (keypress)=\"validateOnlyNumber($event)\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"4\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Nº del grupo</ion-label>\n                <ion-input\n                  [(ngModel)]=\"queryParams.number\"\n                  autocomplete=\"off\"\n                  maxlength=\"4\"\n                  (keypress)=\"validateOnlyNumber($event)\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"6\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">A partir de:</ion-label>\n                <ion-datetime\n                  [(ngModel)]=\"queryParams.initDate\"\n                  displayFormat=\"DD/MM/YYYY\"\n                  [min]=\"minInitDate\"\n                  [max]=\"maxInitDate\"\n                  doneText=\"Listo\"\n                  cancelText=\"Cancelar\"\n                >\n                </ion-datetime>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"6\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Hasta:</ion-label>\n                <ion-datetime\n                  [(ngModel)]=\"queryParams.endDate\"\n                  displayFormat=\"DD/MM/YYYY\"\n                  [min]=\"minEndDate\"\n                  [max]=\"maxEndDate\"\n                  doneText=\"Listo\"\n                  cancelText=\"Cancelar\"\n                >\n                </ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-margin-top\">\n            <ion-col size=\"6\" class=\"ion-justify-content-center\">\n              <ion-button class=\"ion-text-center\" color=\"light\" expand=\"full\" (click)=\"resetQueryParams()\">\n                <ion-icon name=\"trash-outline\"></ion-icon>\n                <ion-text>Limpiar</ion-text>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-justify-content-center\">\n              <ion-button class=\"ion-text-center\" color=\"primary\" expand=\"full\" (click)=\"findData()\">\n                <ion-icon name=\"checkmark-outline\"></ion-icon>\n                <ion-text>Aplicar</ion-text>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <app-families-groups-reports\n    [data]=\"reportsAlt\"\n    [sizeElems]=\"sizeElems\"\n    *ngIf=\"reportsAlt; else noReports\"\n  ></app-families-groups-reports>\n\n  <ng-template #noReports>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-card class=\"ion-no-padding\">\n          <ion-text color=\"medium\">\n            <p class=\"ion-text-center\">\n              <ion-icon name=\"alert-circle-outline\"></ion-icon> {{ showFilter ? 'No se encontraron resultados.' : 'No se logró obtener la información.' }}\n            </p>\n          </ion-text>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ng-template>\n\n</ion-content>\n");

/***/ }),

/***/ "Tw4R":
/*!*****************************************************************************!*\
  !*** ./src/app/views/grupos-familiares/reportes/reportes-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ReportesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportesPageRoutingModule", function() { return ReportesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reportes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportes.page */ "/SgY");




const routes = [
    {
        path: '',
        component: _reportes_page__WEBPACK_IMPORTED_MODULE_3__["ReportesPage"]
    }
];
let ReportesPageRoutingModule = class ReportesPageRoutingModule {
};
ReportesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReportesPageRoutingModule);



/***/ }),

/***/ "qmMc":
/*!*********************************************************************!*\
  !*** ./src/app/views/grupos-familiares/reportes/reportes.module.ts ***!
  \*********************************************************************/
/*! exports provided: ReportesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportesPageModule", function() { return ReportesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/es-CO */ "AQDP");
/* harmony import */ var _angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reportes_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportes-routing.module */ "Tw4R");
/* harmony import */ var _reportes_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reportes.page */ "/SgY");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/components.module */ "j1ZV");









Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_3___default.a);
let ReportesPageModule = class ReportesPageModule {
};
ReportesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _reportes_routing_module__WEBPACK_IMPORTED_MODULE_6__["ReportesPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_reportes_page__WEBPACK_IMPORTED_MODULE_7__["ReportesPage"]]
    })
], ReportesPageModule);



/***/ })

}]);
//# sourceMappingURL=reportes-reportes-module.js.map