(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detalles-miembro-detalles-miembro-module"],{

/***/ "1zh6":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/miembros/detalles-miembro/detalles-miembro.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" *ngIf=\"!views.data.edit\">\r\n      <ion-button (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ title }}</ion-title>\r\n    <ion-buttons slot=\"end\" *ngIf=\"staticData && enableActions && showAdminButtons && showDeleteButton\">\r\n      <ion-button expand=\"full\" (click)=\"confirmDelete()\" slot=\"end\" *ngIf=\"!views.data.edit\">\r\n        <ion-icon name=\"trash-outline\" slot=\"start\"></ion-icon>\r\n        <ion-text>Eliminar miembro</ion-text>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"staticData\">\r\n    <ion-card *ngIf=\"views.data.data\">\r\n      <ion-card-header class=\"ion-no-padding ion-no-margin\">\r\n        <ion-toolbar color=\"primary\">\r\n          <ion-buttons slot=\"start\">\r\n            <ion-button (click)=\"setShowView('data')\" *ngIf=\"!views.data.edit && !editRole && !resetPassword\">\r\n              <ion-icon name=\"chevron-{{views.data.show ? 'up' : 'down' }}-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button (click)=\"showFormEdit()\" *ngIf=\"views.data.edit\">\r\n              <ion-icon name=\"close-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button (click)=\"showFormEditRole()\" *ngIf=\"editRole\">\r\n              <ion-icon name=\"close-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n          <ion-title *ngIf=\"!views.data.edit && !editRole\">{{ views.data.label }}</ion-title>\r\n          <ion-title *ngIf=\"views.data.edit\">Editar perfil del miembro</ion-title>\r\n          <ion-title *ngIf=\"editRole\">Cambiar rol del miembro</ion-title>\r\n          <ion-buttons slot=\"end\" *ngIf=\"views.data.show && showAdminButtons\">\r\n            <ion-button\r\n              color=\"light\"\r\n              expand=\"full\"\r\n              (click)=\"showFormEdit()\"\r\n              slot=\"end\"\r\n              *ngIf=\"!views.data.edit && !editRole && !resetPassword\"\r\n            >\r\n              <ion-icon name=\"create-outline\" slot=\"start\"></ion-icon>\r\n              <ion-text>Editar</ion-text>\r\n            </ion-button>\r\n            <ion-button\r\n              color=\"light\"\r\n              expand=\"full\"\r\n              (click)=\"showFormEditRole()\"\r\n              slot=\"end\"\r\n              *ngIf=\"!views.data.edit && !editRole && !resetPassword\"\r\n            >\r\n              <ion-icon name=\"key-outline\" slot=\"start\"></ion-icon>\r\n              <ion-text>Cambiar rol</ion-text>\r\n            </ion-button>\r\n            <ion-button\r\n              color=\"light\"\r\n              expand=\"full\"\r\n              slot=\"end\"\r\n              (click)=\"showFormPassword()\"\r\n              *ngIf=\"!views.data.edit && !editRole && !resetPassword\"\r\n            >\r\n              <ion-icon name=\"lock-closed-outline\" slot=\"start\"></ion-icon>\r\n              <ion-text>Reiniciar contraseña</ion-text>\r\n            </ion-button>\r\n          </ion-buttons>\r\n        </ion-toolbar>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"{{ views.data.show ? '' : 'ion-hide' }} ion-no-padding\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" *ngIf=\"!views.data.edit && !editRole && !resetPassword\">\r\n            <app-resume-profile\r\n              [member]=\"staticData\"\r\n              [handleConsolidator]=\"handleSetAsConsolidator\"\r\n            ></app-resume-profile>\r\n          </ion-col>\r\n\r\n          <ion-col class=\"ion-no-margin\" size=\"12\" *ngIf=\"views.data.edit && formData\">\r\n            <ion-row>\r\n              <ion-col size=\"12\" size-sm=\"6\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">Teléfono (*)</ion-label>\r\n                  <ion-input\r\n                    [(ngModel)]=\"formData.phone\"\r\n                    autocomplete=\"off\"\r\n                    maxlength=\"13\"\r\n                    (keypress)=\"validateOnlyNumber($event)\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"6\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">Nombre(s) (*)</ion-label>\r\n                  <ion-input\r\n                    [(ngModel)]=\"formData.names\"\r\n                    autocomplete=\"off\"\r\n                    maxlength=\"50\"\r\n                    (keyup)=\"validateOnlyLetters($event)\"\r\n                    class=\"ion-text-uppercase\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"6\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">Apellidos(s) (*)</ion-label>\r\n                  <ion-input\r\n                    [(ngModel)]=\"formData.lastNames\"\r\n                    autocomplete=\"off\"\r\n                    maxlength=\"50\"\r\n                    (keyup)=\"validateOnlyLetters($event)\"\r\n                    class=\"ion-text-uppercase\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"6\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">Fecha de nacimiento</ion-label>\r\n                  <ion-datetime\r\n                    [(ngModel)]=\"formData.birthday\"\r\n                    displayFormat=\"DD/MM/YYYY\"\r\n                    min=\"1910-03-14\"\r\n                    max=\"{{maxDate}}\"\r\n                    doneText=\"Listo\"\r\n                    cancelText=\"Cancelar\"\r\n                    (ionChange)=\"setDate()\"\r\n                  >\r\n                  </ion-datetime>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"6\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">Tipo de documento</ion-label>\r\n                  <ion-input\r\n                    [readonly]=\"true\"\r\n                    [value]=\"formData.documentType ? getDocumentLabel(formData.documentType) : ''\"\r\n                    autocomplete=\"off\"\r\n                    class=\"no-selected-text\"\r\n                    (click)=\"showAlertDocumentList(formData.documentType)\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"6\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">Número de documento</ion-label>\r\n                  <ion-input\r\n                    [(ngModel)]=\"formData.document\"\r\n                    autocomplete=\"off\"\r\n                    maxlength=\"10\"\r\n                    (keypress)=\"validateOnlyNumber($event)\"\r\n                    class=\"ion-text-uppercase\"\r\n                  >\r\n                  </ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"6\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">Correo electrónico</ion-label>\r\n                  <ion-input [(ngModel)]=\"formData.email\" autocomplete=\"off\" class=\"ion-text-uppercase\"></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"6\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">Cargo(s) o posición</ion-label>\r\n                  <ion-input\r\n                    [(ngModel)]=\"formData.position\"\r\n                    autocomplete=\"off\"\r\n                    maxlength=\"50\"\r\n                    (keyup)=\"validateOnlyLetters($event)\"\r\n                    class=\"ion-text-uppercase\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"6\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">Sexo</ion-label>\r\n                  <ion-input\r\n                    [readonly]=\"true\"\r\n                    [value]=\"gender[formData.gender] || ''\"\r\n                    autocomplete=\"off\"\r\n                    class=\"no-selected-text\"\r\n                    (click)=\"showAlertList('gender', 'gender', formData.gender)\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"6\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">Tipo de sangre</ion-label>\r\n                  <ion-input\r\n                    [readonly]=\"true\"\r\n                    [value]=\"bloodType[formData.bloodType] || ''\"\r\n                    autocomplete=\"off\"\r\n                    class=\"no-selected-text\"\r\n                    (click)=\"showAlertList('bloodType', 'bloodType', formData.bloodType)\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"6\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">Estado civil</ion-label>\r\n                  <ion-input\r\n                    [readonly]=\"true\"\r\n                    [value]=\"civilStatus[formData.civilStatus] || ''\"\r\n                    autocomplete=\"off\"\r\n                    class=\"no-selected-text\"\r\n                    (click)=\"showAlertList('civilStatus', 'civilStatus', formData.civilStatus)\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"6\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">Nivel educativo</ion-label>\r\n                  <ion-input\r\n                    [readonly]=\"true\"\r\n                    [value]=\"educationLevel[formData.educationLevel] || ''\"\r\n                    autocomplete=\"off\"\r\n                    class=\"no-selected-text\"\r\n                    (click)=\"showAlertList('educationLevel', 'educationLevel', formData.educationLevel)\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"6\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">Profesión</ion-label>\r\n                  <ion-input\r\n                    [readonly]=\"true\"\r\n                    [value]=\"professions[formData.profession] || ''\"\r\n                    autocomplete=\"off\"\r\n                    class=\"no-selected-text\"\r\n                    (click)=\"showAlertList('profession', 'professions', formData.profession)\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"6\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">Iglesia a la que asiste</ion-label>\r\n                  <ion-input\r\n                    [readonly]=\"true\"\r\n                    [value]=\"churchForm?.name || ''\"\r\n                    autocomplete=\"off\"\r\n                    class=\"ion-text-uppercase no-selected-text\"\r\n                    (click)=\"showAlertChurchesList()\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"6\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">¿Asitió al curso de nuevo ingreso?</ion-label>\r\n                  <ion-input\r\n                    [readonly]=\"true\"\r\n                    [value]=\"formData.meetingNew\"\r\n                    autocomplete=\"off\"\r\n                    class=\"no-selected-text\"\r\n                    (click)=\"showAlertYesOrNotList('meetingNew', formData.meetingNew)\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"6\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">¿Estás bautizado?</ion-label>\r\n                  <ion-input\r\n                    [readonly]=\"true\"\r\n                    [value]=\"formData.baptized\"\r\n                    autocomplete=\"off\"\r\n                    class=\"no-selected-text\"\r\n                    (click)=\"showAlertYesOrNotList('baptized', formData.baptized)\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"6\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">Departamento</ion-label>\r\n                  <ion-input\r\n                    [readonly]=\"true\"\r\n                    [value]=\"departments[formData.department] || ''\"\r\n                    autocomplete=\"off\"\r\n                    class=\"ion-text-uppercase no-selected-text\"\r\n                    (click)=\"showAlertList('department', 'departments', formData.department)\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"6\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">Ciudad</ion-label>\r\n                  <ion-input\r\n                    [readonly]=\"true\"\r\n                    [value]=\"cities[formData.city] || ''\"\r\n                    autocomplete=\"off\"\r\n                    class=\"ion-text-uppercase no-selected-text\"\r\n                    (click)=\"showAlertList('city', 'cities', formData.city)\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"6\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">Barrio o localidad</ion-label>\r\n                  <ion-input [(ngModel)]=\"formData.locality\" autocomplete=\"off\" maxlength=\"100\" class=\"ion-text-uppercase\"></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"6\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">Dirección</ion-label>\r\n                  <ion-input [(ngModel)]=\"formData.direction\" autocomplete=\"off\" maxlength=\"250\" class=\"ion-text-uppercase\"></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"6\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">¿Posee una empresa?</ion-label>\r\n                  <ion-input\r\n                    [readonly]=\"true\"\r\n                    [value]=\"formData.company\"\r\n                    autocomplete=\"off\"\r\n                    class=\"no-selected-text\"\r\n                    (click)=\"showAlertYesOrNotList('company', formData.company)\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"6\" size-sm=\"6\" *ngIf=\"formData.company === 'Si';\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">Tipo de empresa</ion-label>\r\n                  <ion-input\r\n                    [readonly]=\"true\"\r\n                    [value]=\"companyType[formData.companyType] || ''\"\r\n                    autocomplete=\"off\"\r\n                    class=\"ion-text-uppercase no-selected-text\"\r\n                    (click)=\"showAlertList('companyType', 'companyType', formData.companyType)\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top\">\r\n                <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top ion-margin-bottom ion-text-center\">\r\n                <ion-button color=\"medium\" (click)=\"showFormEdit()\">\r\n                  <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\r\n                  <ion-text>Cancelar</ion-text>\r\n                </ion-button>\r\n                <ion-button color=\"primary\" (click)=\"confirmUpdate()\">\r\n                  <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\r\n                  <ion-text>Guardar</ion-text>\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n          <ion-col class=\"ion-no-margin\" size=\"12\" *ngIf=\"editRole\">\r\n            <ion-row>\r\n              <ion-col size=\"12\" size-sm=\"6\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">Roles actuales</ion-label>\r\n                  <ion-input\r\n                    [readonly]=\"true\"\r\n                    [value]=\"this.globalSer.getRoleValue(staticData.roles)\"\r\n                    autocomplete=\"off\"\r\n                    class=\"no-selected-text\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"6\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">Nuevos roles (*)</ion-label>\r\n                  <ion-input\r\n                    [readonly]=\"true\"\r\n                    [value]=\"this.globalSer.getRoleValue(formDataRole.roles)\"\r\n                    autocomplete=\"off\"\r\n                    class=\"no-selected-text\"\r\n                    (click)=\"showRolesListAlert(formDataRole.roles)\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top\">\r\n                <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top ion-margin-bottom ion-text-center\">\r\n                <ion-button color=\"medium\" (click)=\"showFormEditRole()\">\r\n                  <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\r\n                  <ion-text>Cancelar</ion-text>\r\n                </ion-button>\r\n                <ion-button color=\"primary\" (click)=\"confirmUpdateRole()\">\r\n                  <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\r\n                  <ion-text>Guardar</ion-text>\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n          <ion-col class=\"ion-no-margin\" size=\"12\" *ngIf=\"resetPassword\">\r\n            <ion-row>\r\n              <ion-col size=\"12\" size-sm=\"6\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"medium\">Indique la nueva contraseña</ion-label>\r\n                  <ion-input [(ngModel)]=\"password\" autocomplete=\"off\"></ion-input>\r\n                </ion-item>\r\n                <ion-item lines=\"none\">\r\n                  <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campo requerido.</i></ion-text>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-sm=\"6\" class=\"ion-margin-top ion-margin-bottom\">\r\n                <ion-button color=\"medium\" (click)=\"generatePassword()\">\r\n                  <ion-icon name=\"sync-outline\" slot=\"start\"></ion-icon>\r\n                  <ion-text>Generar contraseña</ion-text>\r\n                </ion-button>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-margin-top ion-margin-bottom ion-text-center\">\r\n                <ion-button color=\"medium\" (click)=\"showFormPassword()\">\r\n                  <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\r\n                  <ion-text>Cancelar</ion-text>\r\n                </ion-button>\r\n                <ion-button color=\"primary\" (click)=\"confirmResetPassword()\">\r\n                  <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\r\n                  <ion-text>Asignar</ion-text>\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"{{ views.data.edit || editRole || resetPassword ? 'ion-hide' : '' }}\">\r\n      <ion-card-header class=\"ion-no-padding ion-no-margin\">\r\n        <ion-toolbar color=\"primary\">\r\n          <ion-buttons slot=\"start\">\r\n            <ion-button (click)=\"setShowView('referrals')\">\r\n              <ion-icon name=\"chevron-{{views.referrals.show ? 'up' : 'down' }}-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n          <ion-title>{{ views.referrals.label }}</ion-title>\r\n        </ion-toolbar>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"{{ views.referrals.show ? '' : 'ion-hide' }}\">\r\n        <ion-row class=\"ion-margin-bottom\">\r\n          <ion-col size=\"12\" size-sm=\"5\" class=\"{{ views.referrals.referred ? '' : 'ion-hide' }} ion-margin-top\" *ngIf=\"views.referrals.referred\">\r\n            <ion-text class=\"ion-margin-top\"><h2><b>Padre espiritual:</b></h2></ion-text>\r\n            <app-usercard [data]=\"views.referrals.referred\"></app-usercard>\r\n          </ion-col>\r\n          <ion-col size=\"12\" [sizeSm]=\"views.referrals.referred ? 7 : 12\" class=\"ion-text-center ion-margin-top\">\r\n            <h2 class=\"numberTitle ion-margin-bottom\">{{ totals.totalsReferrals }}</h2>\r\n            <h1 class=\"ion-margin-top ion-margin-bottom\">Total de hijos</h1>\r\n            <ion-text class=\"ion-margin-top\" color=\"medium\" *ngIf=\"totals.totalsReferrals\">\r\n              <p class=\"ion-margin-top\">\r\n                <ion-icon name=\"alert-circle-outline\"></ion-icon>\r\n                El número total de hijos se refiere a los hijos este miembro, sumado con los hijos de estos.\r\n              </p>\r\n            </ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <br>\r\n        <ion-row class=\"ion-margin-top ion-margin-bottom max-height-250\" *ngIf=\"views.referrals.data.length > 0; else noReferrals\">\r\n          <ion-col size=\"12\">\r\n            <ion-text><h2><b>Hijos espirituales:</b></h2></ion-text>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-sm=\"6\" *ngFor=\"let ref of views.referrals.data\">\r\n            <app-usercard [data]=\"ref\"></app-usercard>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ng-template #noReferrals>\r\n          <ion-row class=\"ion-margin-top\">\r\n            <ion-col size=\"12\">\r\n              <ion-text color=\"medium\">\r\n                <p class=\"ion-text-center\">\r\n                  <ion-icon name=\"alert-circle-outline\"></ion-icon>\r\n                  Este miembro no posee hijos espirituales.\r\n                </p>\r\n              </ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ng-template>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"{{ views.data.edit || editRole || resetPassword ? 'ion-hide' : '' }}\">\r\n      <ion-card-header class=\"ion-no-padding ion-no-margin\">\r\n        <ion-toolbar color=\"primary\">\r\n          <ion-buttons slot=\"start\">\r\n            <ion-button (click)=\"setShowView('courses')\">\r\n              <ion-icon name=\"chevron-{{views.courses.show ? 'up' : 'down' }}-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n          <ion-title>{{ views.courses.label }} ({{views.courses.data.length}})</ion-title>\r\n        </ion-toolbar>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"{{ views.courses.show ? '' : 'ion-hide' }}\">\r\n        <ion-row *ngIf=\"views.courses.data.length > 0; else noCourses\">\r\n          <ion-col size=\"4\" *ngFor=\"let c of views.courses.data\">\r\n            <app-cursoscard [course]=\"c\"></app-cursoscard>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ng-template #noCourses>\r\n          <ion-row class=\"ion-margin-top\">\r\n            <ion-col size=\"12\">\r\n              <ion-text color=\"medium\">\r\n                <p class=\"ion-text-center\">\r\n                  <ion-icon name=\"alert-circle-outline\"></ion-icon>\r\n                  Este miembro no posee cursos en su cuenta.\r\n                </p>\r\n              </ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ng-template>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <div class=\"ion-margin\"><br/></div>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "2rLx":
/*!************************************************************************************!*\
  !*** ./src/app/views/miembros/detalles-miembro/detalles-miembro-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: DetallesMiembroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesMiembroPageRoutingModule", function() { return DetallesMiembroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detalles_miembro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalles-miembro.page */ "9RYP");




const routes = [
    {
        path: '',
        component: _detalles_miembro_page__WEBPACK_IMPORTED_MODULE_3__["DetallesMiembroPage"]
    }
];
let DetallesMiembroPageRoutingModule = class DetallesMiembroPageRoutingModule {
};
DetallesMiembroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetallesMiembroPageRoutingModule);



/***/ }),

/***/ "9RYP":
/*!**************************************************************************!*\
  !*** ./src/app/views/miembros/detalles-miembro/detalles-miembro.page.ts ***!
  \**************************************************************************/
/*! exports provided: DetallesMiembroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesMiembroPage", function() { return DetallesMiembroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalles_miembro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalles-miembro.page.html */ "1zh6");
/* harmony import */ var _detalles_miembro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalles-miembro.page.scss */ "x8dN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dayjs_locale_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dayjs/locale/es */ "4HKe");
/* harmony import */ var dayjs_locale_es__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_es__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _detalles_miembro_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detalles-miembro.service */ "iN9u");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");
/* harmony import */ var _Utils_data_static__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../Utils/data.static */ "lmIc");
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../Utils/validations.functions */ "OmbT");
/* harmony import */ var _services_cookies_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/cookies.service */ "QTu/");














let DetallesMiembroPage = class DetallesMiembroPage {
    constructor(activateRoute, alertCtrl, axios, cookiesService, globalSer, detallesMiembroService, navCtrl, router) {
        this.activateRoute = activateRoute;
        this.alertCtrl = alertCtrl;
        this.axios = axios;
        this.cookiesService = cookiesService;
        this.globalSer = globalSer;
        this.detallesMiembroService = detallesMiembroService;
        this.navCtrl = navCtrl;
        this.router = router;
        // static data to edit values
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
        this.churches = null;
        this.church = null;
        // info profile
        this.title = 'Cargando...';
        this.id = null;
        this.user = null;
        this.staticData = null;
        this.totals = null;
        this.enableActions = false;
        this.editRole = false;
        this.resetPassword = false;
        this.isAdmin = false;
        this.showAdminButtons = false;
        this.showDeleteButton = false;
        this.formData = null;
        this.formDataRole = {
            roles: []
        };
        this.churchForm = null;
        this.password = '';
        this.views = {
            data: {
                label: 'Datos del miembro',
                show: true,
                edit: false,
                data: null,
            },
            courses: {
                label: 'Cursos',
                show: false,
                data: [],
            },
            referrals: {
                label: 'Hijos espirituales',
                show: false,
                referred: null,
                data: [],
            }
        };
        this.handleSetAsConsolidator = () => { this.setAsConsolidator(); };
        // check if exist session
        if (!this.globalSer.checkSession())
            this.router.navigate(['/ingresar']);
        else {
            this.documentTypes = detallesMiembroService.documentTypesList;
            this.educationLevel = detallesMiembroService.educationLevel;
            this.professions = detallesMiembroService.professionsList;
            this.bloodType = detallesMiembroService.bloodTypeList;
            this.companyType = detallesMiembroService.companyTypeList;
            this.civilStatus = detallesMiembroService.civilStatusList;
            this.gender = detallesMiembroService.genderList;
            this.departments = detallesMiembroService.departmentsList.map(d => d.department);
            this.maxDate = dayjs__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYY-MM-DD');
        }
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            this.isAdmin = this.globalSer.checkRoleIsSuperAdmin();
            this.showAdminButtons = this.globalSer.checkRoleToEnableAddOrUpdate();
            this.enableActions = this.showAdminButtons;
            this.id = this.activateRoute.snapshot.paramMap.get('userid');
            this.churches = yield this.cookiesService.getCookie('churches');
            if (!this.churches) {
                this.churches = yield this.detallesMiembroService.getChurches();
                yield this.cookiesService.setCookie('churches', this.churches || []);
            }
            const data = yield this.detallesMiembroService.getUserDetails(this.id);
            if (data && !data.error) {
                this.staticData = Object.assign({}, data);
                this.views.data.data = this.staticData;
                this.views.referrals.referred = this.staticData.referred;
                this.totals = this.staticData.totals;
                this.showDeleteButton = (this.isAdmin);
                this.title = `Detalles: ${this.staticData.names} ${this.staticData.lastNames}`;
                this.getCourses();
                this.getReferrals();
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
                yield this.router.navigate(['/ingresar']);
        });
    }
    updateData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Actualizando, por favor espere ...');
            const data = Object.assign({}, this.formData);
            if (data.documentType)
                data.document = `${data.documentType.toUpperCase()}${data.document}`;
            data.company = data.company === 'Si';
            data.baptized = data.baptized === 'Si';
            data.meetingNew = data.meetingNew === 'Si';
            if (data.position)
                data.position = data.position.trim().toUpperCase();
            const updated = yield this.detallesMiembroService.updateDataUser(this.id, data);
            if (updated && !updated.error) {
                this.user = Object.assign({}, updated);
                this.staticData = Object.assign({}, updated);
                // await this.setUserParams();
                this.title = `Detalles: ${this.staticData.names} ${this.staticData.lastNames}`;
                yield this.showFormEdit(true);
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado su perfil exitosamente.');
            }
            else if (updated && updated.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    updateRole() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Actualizando, por favor espere ...');
            const data = Object.assign({}, this.formDataRole);
            const updated = yield this.detallesMiembroService.updateRoleUser(this.id, data);
            if (updated && !updated.error) {
                this.user.roles = data.roles;
                this.staticData.roles = data.roles;
                this.showFormEditRole();
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado su perfil exitosamente.');
            }
            else if (updated && updated.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    resetPass() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Asignando, por favor espere ...');
            const data = Object.assign({}, this.formDataRole);
            const res = yield this.detallesMiembroService.resetPass(this.id, { password: this.password });
            if (!(res === null || res === void 0 ? void 0 : res.error)) {
                this.showFormPassword();
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', res);
            }
            else if (res && res.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    setAsConsolidator() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Cargando. Por favor, espere...');
            const updated = yield this.detallesMiembroService.setAsConsolidator(this.staticData._id);
            if (updated && !updated.error) {
                this.staticData.consolidator = !this.staticData.consolidator;
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', updated || 'Se ha actualizado la información del miembro exitosamente.');
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
            yield this.globalSer.presentLoading('Eliminando miembro, por favor espere ...');
            const deleted = yield this.detallesMiembroService.deleteUser(this.id);
            if (deleted && !deleted.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', deleted || 'Se ha eliminado los datos del miembro exitosamente.');
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
    getCourses() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield this.detallesMiembroService.getUsersCourses(this.id);
            if (data && !data.error)
                this.views.courses.data = data;
            else if (data && data.error)
                yield this.globalSer.errorSession();
            else
                yield this.globalSer.dismissLoading();
        });
    }
    getReferrals() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield this.detallesMiembroService.getUsersReferrals(this.id);
            if (data && !data.error)
                this.views.referrals.data = data;
            else if (data && data.error)
                yield this.globalSer.errorSession();
            else
                yield this.globalSer.dismissLoading();
        });
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
                yield this.showFormEdit();
            }
        });
    }
    // getters and setters
    getCity(clearCity = false) {
        const filter = this.detallesMiembroService.departmentsList[this.formData.department] || null;
        if (filter)
            this.cities = filter.cities || [];
        if (clearCity)
            this.formData.city = null;
    }
    getDocumentLabel(value) {
        if (!value)
            return null;
        const da = this.documentTypes.find(d => d.val === value);
        return da ? da.label : null;
    }
    validateOnlyNumber(event) {
        Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_12__["onlyNumbersInputValidation"])(event);
    }
    validateOnlyLetters(event) {
        Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_12__["onlyLettersInputValidation"])(event);
    }
    setDate() {
        if (this.formData.birthday) {
            this.formData.birthday = dayjs__WEBPACK_IMPORTED_MODULE_6___default()(this.formData.birthday).format('YYYY-MM-DD');
        }
    }
    // actions
    showFormEdit(edited = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.views.data.edit = !this.views.data.edit;
            if (this.views.data.edit) {
                if (!edited)
                    yield this.globalSer.presentLoading();
                this.formData = Object.assign({ documentType: null }, this.staticData);
                this.title = `Editar datos de: ${this.formData.names} ${this.formData.lastNames}`;
                this.formData.documentType = this.formData.document ? this.formData.document.replace(/[0-9]{5,12}/, '') : null;
                this.formData.document = this.formData.document ? this.formData.document.replace(/[A-Za-z]{1,3}/, '') : null;
                this.formData.company = this.formData.company ? 'Si' : 'No';
                this.formData.baptized = this.formData.baptized ? 'Si' : 'No';
                this.formData.meetingNew = this.formData.meetingNew ? 'Si' : 'No';
                this.churchForm = this.churches.find(c => c._id === this.formData.church);
                if (!this.cities)
                    this.getCity();
                if (!edited)
                    yield this.globalSer.dismissLoading();
            }
            else {
                this.title = `Detalles: ${this.user.names} ${this.user.lastNames}`;
                this.formData = null;
            }
        });
    }
    showFormEditRole() {
        this.formDataRole.roles = !this.editRole ? [...this.staticData.roles] : [];
        this.editRole = !this.editRole;
    }
    showFormPassword() {
        this.resetPassword = !this.resetPassword;
        if (this.resetPassword)
            this.password = '';
    }
    generatePassword() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789¿?¡!+*-#$%&.,';
        let code = '';
        for (let i = 0; i < 10; i += 1)
            code += chars[Math.floor(Math.random() * 36)];
        this.password = code;
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
    showAlertChurchesList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputs = [];
            for (const church of this.churches) {
                inputs.push({
                    name: `value-${church._id}`,
                    type: 'radio',
                    label: church.name,
                    value: church._id,
                    checked: this.formData.church === church._id,
                });
            }
            yield this.globalSer.alertWithList({
                header: 'Seleccione',
                inputs,
                confirmAction: (selectedValue) => {
                    this.churchForm = this.churches.find(c => c._id === selectedValue);
                    this.formData.church = selectedValue;
                }
            });
        });
    }
    showRolesListAlert(selected = []) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputs = [];
            const getValue = (i, v) => ({
                name: `value-${i}`,
                type: 'checkbox',
                label: v,
                value: i,
                checked: selected.includes(i),
            });
            for (const [i, value] of _Utils_data_static__WEBPACK_IMPORTED_MODULE_11__["rolesListSingleText"].entries()) {
                if (i === 0) {
                    if (this.isAdmin)
                        inputs.push(getValue(i, value));
                }
                else
                    inputs.push(getValue(i, value));
            }
            yield this.globalSer.alertWithList({
                header: 'Seleccione',
                inputs,
                confirmAction: (selectedValues = []) => {
                    if (this.formDataRole.roles.includes(0))
                        this.formDataRole.roles = [0, ...selectedValues];
                    else
                        this.formDataRole.roles = selectedValues || [];
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
    validateData() {
        const { formData } = this;
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_12__["checkPhone"])(formData.phone))
            return 'Disculpe, pero debe indicar su número de teléfono.<br><br>NOTA: Recuerde que el número de teléfono es el miembro de acceso para a la cuenta del miembro.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_12__["checkNameOrLastName"])(formData.names))
            return 'Disculpe, pero debe indicar su nombre.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_12__["checkNameOrLastName"])(formData.lastNames))
            return 'Disculpe, pero debe indicar su apellido.';
        if (formData.documentType) {
            if (['CC', 'TI', 'PAS', 'CE', 'PE'].indexOf(`${formData.documentType}`) === -1)
                return 'Disculpe, pero debe seleccionar un tipo de documento.';
            if (!/[0-9]{5,9}/.test(`${formData.document}`))
                return 'Disculpe, pero debe indicar su número de documento.';
        }
        if (formData.email)
            if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_12__["checkEmail"])(formData.email))
                return 'Disculpe, pero debe indicar su correo electrónico.';
        if (formData.birthday)
            if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_12__["checkDate"])(formData.birthday))
                return 'Disculpe, pero debe indicar su fecha de nacimiento.';
        if (formData.company !== null && formData.company === 'Si')
            if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_12__["checkIfValueIsNumber"])(`${formData.companyType}`))
                return 'Disculpe, pero debe indicar el tipo de empresa que posee.';
        return null;
    }
    validateRoleData() {
        const { roles } = this.formDataRole;
        if (!roles || (roles === null || roles === void 0 ? void 0 : roles.length) === 0)
            return 'Disculpe, pero el rol seleccionado es incorrecto.';
        if (!roles.some(r => [0, 1, 2, 3, 4].includes(r)))
            return 'Disculpe, pero el rol seleccionado es incorrecto.';
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
                    message: '¿Está seguro qué desea actualizar información de este miembro?',
                    confirmAction: () => this.updateData()
                });
            }
        });
    }
    confirmUpdateRole() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validated = this.validateRoleData();
            if (validated)
                yield this.globalSer.presentAlert('Alerta', validated);
            else {
                yield this.globalSer.alertConfirm({
                    header: 'Confirme',
                    message: '¿Está seguro qué desea cambiar el rol de este miembro?',
                    confirmAction: () => this.updateRole()
                });
            }
        });
    }
    confirmResetPassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validated = this.validateRoleData();
            if (this.password.length < 6)
                yield this.globalSer.presentAlert('Alerta', 'Debe indicar la nueva contraseña para el usuario.');
            else {
                yield this.globalSer.alertConfirm({
                    header: 'Confirme',
                    message: '¿Está seguro qué desea asignar esta nueva contraseña a este miembro?',
                    confirmAction: () => this.resetPass()
                });
            }
        });
    }
    confirmDelete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertConfirm({
                header: 'Confirme',
                message: `¿Está seguro qué desea eliminar TODA la información de este miembro?
            <br><br>
            <b>NOTA:</b> <i>Una vez eliminado, no se podrá recuperar la información asociada al este miembro.</i>
      `,
                confirmAction: () => this.deleteUser()
            });
        });
    }
};
DetallesMiembroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_9__["AxiosService"] },
    { type: _services_cookies_service__WEBPACK_IMPORTED_MODULE_13__["CookiesService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_10__["GlobalService"] },
    { type: _detalles_miembro_service__WEBPACK_IMPORTED_MODULE_8__["DetallesMiembroService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DetallesMiembroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalles-miembro',
        template: _raw_loader_detalles_miembro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalles_miembro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetallesMiembroPage);



/***/ }),

/***/ "ZMlI":
/*!****************************************************************************!*\
  !*** ./src/app/views/miembros/detalles-miembro/detalles-miembro.module.ts ***!
  \****************************************************************************/
/*! exports provided: DetallesMiembroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesMiembroPageModule", function() { return DetallesMiembroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detalles_miembro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalles-miembro-routing.module */ "2rLx");
/* harmony import */ var _detalles_miembro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalles-miembro.page */ "9RYP");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "j1ZV");








let DetallesMiembroPageModule = class DetallesMiembroPageModule {
};
DetallesMiembroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detalles_miembro_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetallesMiembroPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_detalles_miembro_page__WEBPACK_IMPORTED_MODULE_6__["DetallesMiembroPage"]]
    })
], DetallesMiembroPageModule);



/***/ }),

/***/ "x8dN":
/*!****************************************************************************!*\
  !*** ./src/app/views/miembros/detalles-miembro/detalles-miembro.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pictureLogo {\n  width: 65px !important;\n  margin: 0 auto !important;\n}\n\n.max-height-250 {\n  max-height: 450px !important;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGV0YWxsZXMtbWllbWJyby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoiZGV0YWxsZXMtbWllbWJyby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGljdHVyZUxvZ28ge1xyXG4gIHdpZHRoOiA2NXB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1heC1oZWlnaHQtMjUwIHtcclxuICBtYXgtaGVpZ2h0OiA0NTBweCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=detalles-miembro-detalles-miembro-module.js.map