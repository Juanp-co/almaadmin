(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{AQDP:function(t,e,o){var i,n,a;!function(s){if("object"==typeof t.exports){var r=s(0,e);void 0!==r&&(t.exports=r)}else n=[o,e],void 0===(a="function"==typeof(i=s)?i.apply(e,n):i)||(t.exports=a)}(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=void 0;e.default=["es-CO",[["a.\xa0m.","p.\xa0m."],o,o],o,[["D","L","M","M","J","V","S"],["dom.","lun.","mar.","mi\xe9.","jue.","vie.","s\xe1b."],["domingo","lunes","martes","mi\xe9rcoles","jueves","viernes","s\xe1bado"],["DO","LU","MA","MI","JU","VI","SA"]],[["d","l","m","m","j","v","s"],["dom.","lun.","mar.","mi\xe9.","jue.","vie.","s\xe1b."],["domingo","lunes","martes","mi\xe9rcoles","jueves","viernes","s\xe1bado"],["DO","LU","MA","MI","JU","VI","SA"]],[["E","F","M","A","M","J","J","A","S","O","N","D"],["ene.","feb.","mar.","abr.","may.","jun.","jul.","ago.","sep.","oct.","nov.","dic."],["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]],[["E","F","M","A","M","J","J","A","S","O","N","D"],["ene.","feb.","mar.","abr.","may.","jun.","jul.","ago.","sept.","oct.","nov.","dic."],["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]],[["a. C.","d. C."],o,["antes de Cristo","despu\xe9s de Cristo"]],0,[6,0],["d/MM/yy","d/MM/y","d 'de' MMMM 'de' y","EEEE, d 'de' MMMM 'de' y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",o,"{1} 'a' 'las' {0}",o],[",",".",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0\xa0%","\xa4\xa0#,##0.00","#E0"],"COP","$","peso colombiano",{AUD:[o,"$"],BRL:[o,"R$"],CAD:[o,"$"],CNY:[o,"\xa5"],COP:["$"],ESP:["\u20a7"],EUR:[o,"\u20ac"],FKP:[o,"FK\xa3"],GBP:[o,"\xa3"],HKD:[o,"$"],ILS:[o,"\u20aa"],INR:[o,"\u20b9"],JPY:[o,"\xa5"],KRW:[o,"\u20a9"],MXN:[o,"$"],NZD:[o,"$"],RON:[o,"L"],SSP:[o,"SD\xa3"],SYP:[o,"S\xa3"],TWD:[o,"NT$"],USD:["US$","$"],VEF:[o,"BsF"],VND:[o,"\u20ab"],XAF:[],XCD:[o,"$"],XOF:[]},"ltr",function(t){return 1===t?1:5}]})},qmMc:function(t,e,o){"use strict";o.r(e),o.d(e,"ReportesPageModule",function(){return Z});var i=o("ofXK"),n=o("AQDP"),a=o.n(n),s=o("3Pt+"),r=o("TEn/"),b=o("tyNb"),l=o("mrSG"),c=o("Wgwc"),d=o.n(c),u=o("OmbT"),m=o("fXoL"),h=o("4WDQ"),p=o("ai4U"),M=o("0HKr");function f(t,e){if(1&t){const t=m.Nb();m.Mb(0,"ion-col",15),m.Mb(1,"ion-item"),m.Mb(2,"ion-label",16),m.pc(3,"Grupo seleccionado"),m.Lb(),m.Mb(4,"ion-input",17),m.Ub("click",function(){m.ic(t);const e=m.Wb();return e.showListGroups(e.selected&&e.selected._id||null)}),m.Lb(),m.Lb(),m.Lb()}if(2&t){const t=m.Wb();m.xb(4),m.Zb("readonly",!0)("value",t.getNumberGroup())}}function g(t,e){1&t&&m.Kb(0,"ion-icon",18)}function L(t,e){1&t&&m.Kb(0,"ion-icon",19)}function y(t,e){if(1&t){const t=m.Nb();m.Mb(0,"ion-col",6),m.Mb(1,"ion-card"),m.Mb(2,"ion-card-content"),m.Mb(3,"ion-row"),m.Mb(4,"ion-col",20),m.Mb(5,"ion-item"),m.Mb(6,"ion-label",16),m.pc(7,"N\xba Sector"),m.Lb(),m.Mb(8,"ion-input",21),m.Ub("ngModelChange",function(e){return m.ic(t),m.Wb().queryParams.sector=e})("keypress",function(e){return m.ic(t),m.Wb().validateOnlyNumber(e)}),m.Lb(),m.Lb(),m.Lb(),m.Mb(9,"ion-col",20),m.Mb(10,"ion-item"),m.Mb(11,"ion-label",16),m.pc(12,"N\xba Sub-sector"),m.Lb(),m.Mb(13,"ion-input",21),m.Ub("ngModelChange",function(e){return m.ic(t),m.Wb().queryParams.subSector=e})("keypress",function(e){return m.ic(t),m.Wb().validateOnlyNumber(e)}),m.Lb(),m.Lb(),m.Lb(),m.Mb(14,"ion-col",20),m.Mb(15,"ion-item"),m.Mb(16,"ion-label",16),m.pc(17,"N\xba del grupo"),m.Lb(),m.Mb(18,"ion-input",21),m.Ub("ngModelChange",function(e){return m.ic(t),m.Wb().queryParams.number=e})("keypress",function(e){return m.ic(t),m.Wb().validateOnlyNumber(e)}),m.Lb(),m.Lb(),m.Lb(),m.Mb(19,"ion-col",22),m.Mb(20,"ion-item"),m.Mb(21,"ion-label",16),m.pc(22,"A partir de:"),m.Lb(),m.Mb(23,"ion-datetime",23),m.Ub("ngModelChange",function(e){return m.ic(t),m.Wb().queryParams.initDate=e}),m.Lb(),m.Lb(),m.Lb(),m.Mb(24,"ion-col",22),m.Mb(25,"ion-item"),m.Mb(26,"ion-label",16),m.pc(27,"Hasta:"),m.Lb(),m.Mb(28,"ion-datetime",23),m.Ub("ngModelChange",function(e){return m.ic(t),m.Wb().queryParams.endDate=e}),m.Lb(),m.Lb(),m.Lb(),m.Lb(),m.Mb(29,"ion-row",24),m.Mb(30,"ion-col",25),m.Mb(31,"ion-button",26),m.Ub("click",function(){return m.ic(t),m.Wb().resetQueryParams()}),m.Kb(32,"ion-icon",27),m.Mb(33,"ion-text"),m.pc(34,"Limpiar"),m.Lb(),m.Lb(),m.Lb(),m.Mb(35,"ion-col",25),m.Mb(36,"ion-button",28),m.Ub("click",function(){return m.ic(t),m.Wb().findData()}),m.Kb(37,"ion-icon",29),m.Mb(38,"ion-text"),m.pc(39,"Aplicar"),m.Lb(),m.Lb(),m.Lb(),m.Lb(),m.Lb(),m.Lb(),m.Lb()}if(2&t){const t=m.Wb();m.xb(8),m.Zb("ngModel",t.queryParams.sector),m.xb(5),m.Zb("ngModel",t.queryParams.subSector),m.xb(5),m.Zb("ngModel",t.queryParams.number),m.xb(5),m.Zb("ngModel",t.queryParams.initDate)("min",t.minInitDate)("max",t.maxInitDate),m.xb(5),m.Zb("ngModel",t.queryParams.endDate)("min",t.minEndDate)("max",t.maxEndDate)}}function v(t,e){if(1&t&&(m.Mb(0,"ion-col",6),m.Mb(1,"ion-row",38),m.Mb(2,"ion-col",39),m.Mb(3,"ion-text"),m.Kb(4,"ion-icon",40),m.Kb(5,"br"),m.Mb(6,"span",41),m.pc(7,"Hermanos y ni\xf1os"),m.Lb(),m.Lb(),m.Lb(),m.Mb(8,"ion-col",42),m.Mb(9,"ion-text"),m.Mb(10,"p",43),m.pc(11),m.Lb(),m.Lb(),m.Lb(),m.Lb(),m.Lb()),2&t){const t=m.Wb(2);m.xb(11),m.rc(" ",t.dataToReport.totals.qty," ")}}function x(t,e){if(1&t&&(m.Mb(0,"ion-col",6),m.Mb(1,"ion-row",38),m.Mb(2,"ion-col",39),m.Mb(3,"ion-text",44),m.Kb(4,"ion-icon",45),m.Kb(5,"br"),m.Mb(6,"span",41),m.pc(7,"Ofrendas"),m.Lb(),m.Lb(),m.Lb(),m.Mb(8,"ion-col",42),m.Mb(9,"ion-text",44),m.Mb(10,"p",43),m.pc(11),m.Lb(),m.Lb(),m.Lb(),m.Lb(),m.Lb()),2&t){const t=m.Wb(2);m.xb(11),m.rc(" ",t.dataToReport.offering.qty," ")}}function z(t,e){if(1&t&&(m.Mb(0,"ion-col",31),m.Kb(1,"app-chart",46),m.Lb()),2&t){const t=m.Wb(2);m.Zb("sizeSm",t.sizeElems),m.xb(1),m.ac("title",t.dataToReport.data1.title),m.Zb("data",t.dataToReport.data1)("sizeElem",t.sizeElems)}}function D(t,e){if(1&t&&(m.Mb(0,"ion-col",31),m.Kb(1,"app-chart",46),m.Lb()),2&t){const t=m.Wb(2);m.Zb("sizeSm",t.sizeElems),m.xb(1),m.ac("title",t.dataToReport.data2.title),m.Zb("data",t.dataToReport.data2)("sizeElem",t.sizeElems)}}function S(t,e){if(1&t&&(m.Mb(0,"ion-col",31),m.Kb(1,"app-chart",46),m.Lb()),2&t){const t=m.Wb(2);m.Zb("sizeSm",t.sizeElems),m.xb(1),m.ac("title",t.dataToReport.data3.title),m.Zb("data",t.dataToReport.data3)("sizeElem",t.sizeElems)}}function w(t,e){if(1&t&&(m.Mb(0,"ion-col",31),m.Kb(1,"app-chart",46),m.Lb()),2&t){const t=m.Wb(2);m.Zb("sizeSm",t.sizeElems),m.xb(1),m.ac("title",t.dataToReport.data4.title),m.Zb("data",t.dataToReport.data4)("sizeElem",t.sizeElems)}}function P(t,e){if(1&t&&(m.Mb(0,"ion-col",31),m.Kb(1,"app-chart",46),m.Lb()),2&t){const t=m.Wb(2);m.Zb("sizeSm",t.sizeElems),m.xb(1),m.ac("title",t.dataToReport.data5.title),m.Zb("data",t.dataToReport.data5)("sizeElem",t.sizeElems)}}function T(t,e){if(1&t&&(m.Mb(0,"ion-col",31),m.Kb(1,"app-chart",46),m.Lb()),2&t){const t=m.Wb(2);m.Zb("sizeSm",t.sizeElems),m.xb(1),m.ac("title",t.dataToReport.data6.title),m.Zb("data",t.dataToReport.data6)("sizeElem",t.sizeElems)}}function O(t,e){if(1&t){const t=m.Nb();m.Mb(0,"ion-col",31),m.Mb(1,"ion-card",1),m.Ub("click",function(){m.ic(t);const o=e.index;return m.Wb(3).showObservation(o)}),m.Mb(2,"ion-card-content"),m.Mb(3,"ion-text"),m.Mb(4,"p"),m.pc(5),m.Lb(),m.Lb(),m.Mb(6,"ion-text"),m.Mb(7,"span"),m.pc(8),m.Lb(),m.Kb(9,"br"),m.Lb(),m.Mb(10,"ion-text"),m.Mb(11,"i",48),m.pc(12,"Clic para m\xe1s detalles."),m.Lb(),m.Lb(),m.Lb(),m.Lb(),m.Lb()}if(2&t){const t=e.$implicit,o=m.Wb(3);m.Zb("sizeSm",6===o.sizeElems?12:6),m.xb(5),m.qc(t.observation),m.xb(3),m.qc(t.date)}}function R(t,e){if(1&t&&(m.Mb(0,"ion-row"),m.nc(1,O,13,3,"ion-col",47),m.Lb()),2&t){const t=m.Wb(2);m.zb(6===t.sizeElems?"max-height-250":"max-height-450"),m.xb(1),m.Zb("ngForOf",t.observationsPreview)}}function q(t,e){if(1&t){const t=m.Nb();m.Mb(0,"ion-row",30),m.Mb(1,"ion-col",31),m.Mb(2,"ion-card",32),m.Mb(3,"ion-card-header",32),m.Mb(4,"ion-toolbar",33),m.Mb(5,"ion-buttons",0),m.Mb(6,"ion-button",1),m.Ub("click",function(){return m.ic(t),m.Wb().setShowTotals()}),m.Kb(7,"ion-icon",34),m.Lb(),m.Lb(),m.Mb(8,"ion-title"),m.pc(9,"Totales"),m.Lb(),m.Lb(),m.Lb(),m.Mb(10,"ion-card-content"),m.Mb(11,"ion-row",35),m.nc(12,v,12,1,"ion-col",13),m.nc(13,x,12,1,"ion-col",13),m.Lb(),m.Lb(),m.Lb(),m.Lb(),m.nc(14,z,2,4,"ion-col",36),m.nc(15,D,2,4,"ion-col",36),m.nc(16,S,2,4,"ion-col",36),m.nc(17,w,2,4,"ion-col",36),m.nc(18,P,2,4,"ion-col",36),m.nc(19,T,2,4,"ion-col",36),m.Mb(20,"ion-col",31),m.Mb(21,"ion-card",32),m.Mb(22,"ion-card-header",32),m.Mb(23,"ion-toolbar",33),m.Mb(24,"ion-buttons",0),m.Mb(25,"ion-button",1),m.Ub("click",function(){return m.ic(t),m.Wb().setShowObservations()}),m.Kb(26,"ion-icon",34),m.Lb(),m.Lb(),m.Mb(27,"ion-title"),m.pc(28,"Observaciones"),m.Lb(),m.Lb(),m.Lb(),m.Mb(29,"ion-card-content"),m.nc(30,R,2,4,"ion-row",37),m.Lb(),m.Lb(),m.Lb(),m.Lb()}if(2&t){const t=m.Wb();m.xb(1),m.Zb("sizeSm",t.sizeElems),m.xb(6),m.bc("name","chevron-",t.showTotals?"up":"down","-outline"),m.xb(3),m.Ab("",t.showTotals?"":"ion-hide"," ion-no-padding "),m.xb(2),m.Zb("ngIf",t.dataToReport),m.xb(1),m.Zb("ngIf",t.dataToReport),m.xb(1),m.Zb("ngIf",t.dataToReport&&t.dataToReport.data1),m.xb(1),m.Zb("ngIf",t.dataToReport&&t.dataToReport.data2),m.xb(1),m.Zb("ngIf",t.dataToReport&&t.dataToReport.data3),m.xb(1),m.Zb("ngIf",t.dataToReport&&t.dataToReport.data4),m.xb(1),m.Zb("ngIf",t.dataToReport&&t.dataToReport.data5),m.xb(1),m.Zb("ngIf",t.dataToReport&&t.dataToReport.data6),m.xb(1),m.Zb("sizeSm",t.sizeElems),m.xb(6),m.bc("name","chevron-",t.showObservations?"up":"down","-outline"),m.xb(3),m.Ab("",t.showObservations?"":"ion-hide"," ion-no-padding "),m.xb(1),m.Zb("ngIf",t.observationsPreview&&t.observationsPreview.length>0)}}const E=[{path:"",component:(()=>{class t{constructor(t,e,o,i){this.globalSer=t,this.gruposService=e,this.navCtrl=o,this.router=i,this.reports=null,this.listGroups=null,this.selected=null,this.report=null,this.observations=null,this.observationsPreview=null,this.dataToReport=null,this.sizeElems=6,this.showFilter=!1,this.showTotals=!0,this.showObservations=!0,this.minInitDate=d()("2021-01-01").format("YYYY-MM-DD"),this.maxInitDate=d()().format("YYYY-MM-DD"),this.minEndDate=d()("2021-01-01").format("YYYY-MM-DD"),this.maxEndDate=d()().format("YYYY-MM-DD"),this.queryParams={sector:null,subSector:null,number:null,initDate:null,endDate:null}}ngOnInit(){return Object(l.a)(this,void 0,void 0,function*(){this.globalSer.checkSession()?yield this.getData():this.router.navigate(["/ingresar"])})}getData(){return Object(l.a)(this,void 0,void 0,function*(){yield this.globalSer.presentLoading(),this.reports=null,this.listGroups=null,this.selected=null,this.dataToReport=null,this.observations=[],this.observationsPreview=[];const t=yield this.gruposService.getFamiliesGroupsReports(this.queryParams);t&&!t.error?(this.reports=t,this.listGroups=this.reports.map(t=>t.group),this.listGroups.length>0&&(this.selected=this.listGroups[0]),yield this.setObservationsValues(this.reports.length>0?this.reports[0].observations:null),yield this.globalSer.dismissLoading(),yield this.setDataToReport(this.selected?this.reports[0].report:null)):t&&t.error?(yield this.globalSer.dismissLoading(),yield this.globalSer.errorSession()):yield this.globalSer.dismissLoading()})}back(){return Object(l.a)(this,void 0,void 0,function*(){yield this.navCtrl.back()})}showListResizeAlert(){return Object(l.a)(this,void 0,void 0,function*(){yield this.globalSer.alertWithList({header:"Tama\xf1os de las gr\xe1ficas",inputs:[{name:"resize",type:"radio",label:"Mediano",value:6,checked:6===this.sizeElems},{name:"resize",type:"radio",label:"Grande",value:12,checked:12===this.sizeElems}],confirmAction:t=>{this.sizeElems=t}})})}setShowFilter(){this.showFilter=!this.showFilter}setShowTotals(){this.showTotals=!this.showTotals}setShowObservations(){this.showObservations=!this.showObservations}resetQueryParams(){return Object(l.a)(this,void 0,void 0,function*(){this.queryParams.initDate=null,this.queryParams.endDate=null,this.queryParams.sector=null,this.queryParams.subSector=null,this.queryParams.number=null,this.showFilter=!this.showFilter,yield this.getData()})}findData(){return Object(l.a)(this,void 0,void 0,function*(){let t=!1;this.queryParams.initDate&&(this.queryParams.initDate=d()(this.queryParams.initDate).format("YYYY-MM-DD"),t=!0),this.queryParams.endDate&&(this.queryParams.endDate=d()(this.queryParams.endDate).format("YYYY-MM-DD"),t=null!==this.queryParams.initDate),/[0-9]{1,4}/.test(this.queryParams.sector)&&(t=!0),/[0-9]{1,4}/.test(this.queryParams.subSector)&&(t=!0),/[0-9]{1,4}/.test(this.queryParams.number)&&(t=!0),t?yield this.getData():this.globalSer.presentAlert("Alerta","Disculpe, pero debe indicar una fecha inicial")})}setDataToReport(t){return Object(l.a)(this,void 0,void 0,function*(){yield this.globalSer.presentLoading(),this.dataToReport=null,this.dataToReport=t?{data1:{title:"Hermanos",data:[{label:"Hermanos",qty:t.brethren},{label:"Amigos",qty:t.friends}]},data2:{title:"Ni\xf1os",data:[{label:"Ni\xf1os",qty:t.christianChildren},{label:"Amigos",qty:t.christianChildrenFriends}]},data3:{title:"Visitas",data:[{label:"Programadas",qty:t.scheduledVisits},{label:"Disipulado",qty:t.discipleshipVisits}]},data4:{title:"Asistencia",data:[{label:"Hermanos",qty:t.churchAttendance},{label:"Ni\xf1os",qty:t.churchAttendanceChildren}]},data5:{title:"Conversiones y reconcilaciones",data:[{label:"Reconciliaciones",qty:t.reconciliations},{label:"Conversiones",qty:t.conversions},{label:"Conversiones de ni\xf1os",qty:t.conversionsChildren}]},data6:{title:"Otros",data:[{label:"Planificaci\xf3n de hnos.",qty:t.brethrenPlanning},{label:"Lectura b\xedblica",qty:t.bibleReading},{label:"Consolidados",qty:t.consolidated}]},totals:{title:"Total de hermanos y ni\xf1os",qty:t.total},offering:{title:"Total de ofrendas",qty:Object(i.n)(t.offering,"es-CO","COP")}}:null,yield this.globalSer.dismissLoading()})}setObservationsValues(t){return Object(l.a)(this,void 0,void 0,function*(){this.observations=[],this.observationsPreview=[],t&&t.length>0&&(this.observations=t,t.forEach(t=>{this.observationsPreview.push({observation:t.observations.length>50?t.observations.substr(0,50)+" ...":t.observations,date:d()(t.date).format("DD-MM-YYYY HH:mm")})}))})}showObservation(t){return Object(l.a)(this,void 0,void 0,function*(){const e=this.observations[t]||null;e?yield this.globalSer.presentAlert("Observaci\xf3n",`<b>Fecha: </b>${d()(e.date).format("DD-MM-YYYY HH:mm")} <br><br> ${e.observations}`):yield this.globalSer.presentAlert("Error","Disculpe, pero ha ocurrido un error al momento de cargar la observaci\xf3n.")})}validateOnlyNumber(t){Object(u.q)(t)}getNumberGroup(){return this.selected?`Sector #${this.selected.sector} / Sub-sector #${this.selected.subSector} / Grupo #${this.selected.number}`:null}showListGroups(t){return Object(l.a)(this,void 0,void 0,function*(){const e=[];for(const o of this.listGroups)e.push({name:"list-groups",type:"radio",label:`S: ${o.sector} / SS: ${o.subSector} N\xba ${o.number}`,value:o._id,checked:o._id===t});yield this.globalSer.alertWithList({header:"Seleccione un grupo",inputs:e,confirmAction:e=>Object(l.a)(this,void 0,void 0,function*(){if(e!==t){this.dataToReport=null;const t=this.reports.find(t=>t.group&&t.group._id===e)||null;yield this.setDataToReport(t?t.report:null),this.selected=t?t.group:null,yield this.setObservationsValues(t?t.observations:null)}})})})}}return t.\u0275fac=function(e){return new(e||t)(m.Jb(h.a),m.Jb(p.a),m.Jb(r.T),m.Jb(b.g))},t.\u0275cmp=m.Db({type:t,selectors:[["app-reportes"]],decls:26,vars:5,consts:[["slot","start"],[3,"click"],["name","arrow-back-outline"],["slot","end"],["name","resize-outline","slot","start"],[1,"ion-no-padding","ion-margin-start","ion-margin-end","ion-margin-top"],["size","12"],["size","6",4,"ngIf"],["size","auto"],[1,"ion-margin-bottom"],["color","medium",3,"click"],["name","filter-outline","slot","start",4,"ngIf"],["name","close-outline","slot","start",4,"ngIf"],["size","12",4,"ngIf"],["class","ion-justify-content-center ion-margin-top ion-margin-bottom ion-padding-bottom",4,"ngIf"],["size","6"],["position","floating","color","medium"],["autocomplete","off",1,"no-selected-text",3,"readonly","value","click"],["name","filter-outline","slot","start"],["name","close-outline","slot","start"],["size","12","size-sm","4"],["autocomplete","off","maxlength","4",3,"ngModel","ngModelChange","keypress"],["size","12","size-sm","6"],["displayFormat","DD/MM/YYYY","doneText","Listo","cancelText","Cancelar",3,"ngModel","min","max","ngModelChange"],[1,"ion-margin-top"],["size","6",1,"ion-justify-content-center"],["color","light","expand","full",1,"ion-text-center",3,"click"],["name","trash-outline"],["color","primary","expand","full",1,"ion-text-center",3,"click"],["name","checkmark-outline"],[1,"ion-justify-content-center","ion-margin-top","ion-margin-bottom","ion-padding-bottom"],["size","12",3,"sizeSm"],[1,"ion-no-padding"],["color","primary"],[3,"name"],[1,"ion-margin-bottom","ion-margin-top"],["size","12",3,"sizeSm",4,"ngIf"],[3,"class",4,"ngIf"],[1,"ion-align-items-center"],["size","5",1,"ion-text-center"],["name","body-outline",1,"bigIcon"],[1,"textTotals"],["size","7",1,"ion-text-center","ion-align-items-center"],[1,"bigNumber"],[1,"ion-text-center"],["name","cash-outline",1,"bigIcon"],["typeChart","bar",3,"data","sizeElem","title"],["size","12",3,"sizeSm",4,"ngFor","ngForOf"],[1,"toSmall"]],template:function(t,e){1&t&&(m.Mb(0,"ion-header"),m.Mb(1,"ion-toolbar"),m.Mb(2,"ion-buttons",0),m.Mb(3,"ion-button",1),m.Ub("click",function(){return e.back()}),m.Kb(4,"ion-icon",2),m.Lb(),m.Lb(),m.Mb(5,"ion-title"),m.pc(6,"Reportes de grupos familiares"),m.Lb(),m.Mb(7,"ion-buttons",3),m.Mb(8,"ion-button",1),m.Ub("click",function(){return e.showListResizeAlert()}),m.Kb(9,"ion-icon",4),m.Mb(10,"ion-text"),m.pc(11,"Visualizaci\xf3n"),m.Lb(),m.Lb(),m.Lb(),m.Lb(),m.Lb(),m.Mb(12,"ion-content"),m.Mb(13,"ion-row",5),m.Mb(14,"ion-col",6),m.Mb(15,"ion-row"),m.nc(16,f,5,2,"ion-col",7),m.Mb(17,"ion-col",8),m.Mb(18,"div",9),m.Mb(19,"ion-button",10),m.Ub("click",function(){return e.setShowFilter()}),m.nc(20,g,1,0,"ion-icon",11),m.nc(21,L,1,0,"ion-icon",12),m.Mb(22,"ion-text"),m.pc(23,"Filtrar"),m.Lb(),m.Lb(),m.Lb(),m.Lb(),m.Lb(),m.Lb(),m.nc(24,y,40,9,"ion-col",13),m.Lb(),m.nc(25,q,31,19,"ion-row",14),m.Lb()),2&t&&(m.xb(16),m.Zb("ngIf",e.listGroups&&e.listGroups.length>0),m.xb(4),m.Zb("ngIf",!e.showFilter),m.xb(1),m.Zb("ngIf",e.showFilter),m.xb(3),m.Zb("ngIf",e.showFilter),m.xb(1),m.Zb("ngIf",e.dataToReport))},directives:[r.r,r.O,r.f,r.e,r.s,r.M,r.J,r.o,r.E,r.n,i.i,r.v,r.w,r.u,r.X,r.g,r.h,s.b,s.e,s.f,r.p,r.W,r.i,M.a,i.h],styles:[".max-height-250[_ngcontent-%COMP%]{max-height:250px!important;overflow-y:auto}.max-height-450[_ngcontent-%COMP%]{max-height:450px!important;overflow-y:auto}.bigNumber[_ngcontent-%COMP%]{font-size:1.5em!important}.bigIcon[_ngcontent-%COMP%]{font-size:3em!important}.textTotals[_ngcontent-%COMP%]{font-size:1em!important;font-weight:700}"]}),t})()}];let Y=(()=>{class t{}return t.\u0275mod=m.Hb({type:t}),t.\u0275inj=m.Gb({factory:function(e){return new(e||t)},imports:[[b.j.forChild(E)],b.j]}),t})();var C=o("j1ZV");Object(i.p)(a.a);let Z=(()=>{class t{}return t.\u0275mod=m.Hb({type:t}),t.\u0275inj=m.Gb({factory:function(e){return new(e||t)},imports:[[i.b,s.a,r.P,Y,C.a]]}),t})()}}]);