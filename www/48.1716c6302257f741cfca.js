(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{PI0l:function(e,i,t){"use strict";t.r(i),t.d(i,"MiembrosPageModule",function(){return x});var r=t("ofXK"),o=t("3Pt+"),n=t("TEn/"),s=t("tyNb"),a=t("mrSG"),l=t("fXoL"),b=t("1Ldg"),u=t("QTu/"),c=t("4WDQ"),h=t("wJOZ"),g=t("nfHg"),d=t("bM8H");function m(e,i){if(1&e){const e=l.Nb();l.Mb(0,"ion-button",16),l.Ub("click",function(){return l.ic(e),l.Wb().goToRegister()}),l.Kb(1,"ion-icon",17),l.Mb(2,"ion-text"),l.pc(3,"Registrar miembro"),l.Lb(),l.Lb()}}function p(e,i){if(1&e){const e=l.Nb();l.Mb(0,"ion-button",18),l.Ub("click",function(){l.ic(e);const i=l.Wb();return i.queryParams.word=null,i.findData()}),l.Kb(1,"ion-icon",19),l.Lb()}}function f(e,i){1&e&&l.Kb(0,"ion-icon",20)}function y(e,i){1&e&&l.Kb(0,"ion-icon",21)}function P(e,i){if(1&e&&(l.Mb(0,"ion-col",23),l.Kb(1,"app-usercard",24),l.Lb()),2&e){const e=i.$implicit;l.xb(1),l.Zb("data",e)("list",!0)}}function M(e,i){if(1&e&&(l.Mb(0,"ion-row"),l.nc(1,P,2,2,"ion-col",22),l.Lb()),2&e){const e=l.Wb();l.xb(1),l.Zb("ngForOf",e.users)}}function L(e,i){if(1&e&&(l.Mb(0,"div"),l.Kb(1,"app-paginator",25),l.Lb()),2&e){const e=l.Wb();l.xb(1),l.Zb("totalPages",e.pages)("currentPage",e.queryParams.page)("handlePage",e.handlePage)}}function v(e,i){1&e&&(l.Mb(0,"ion-row"),l.Mb(1,"ion-col"),l.Mb(2,"ion-card"),l.Mb(3,"ion-card-content",26),l.Mb(4,"ion-card-subtitle"),l.Mb(5,"ion-text"),l.Kb(6,"ion-icon",27),l.pc(7,"\xa0 No se encontraron resultados. "),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb())}const q=[{path:"",component:(()=>{class e{constructor(e,i,t,r,o,n){this.alertCtrl=e,this.axios=i,this.cookieService=t,this.globalSer=r,this.miembrosServices=o,this.router=n,this.users=null,this.totals=0,this.pages=0,this.page=1,this.showRegisterButton=!1,this.queryParams={limit:10,page:1,input:"names",value:1,search:null},this.handlePage=e=>{this.queryParams.page=e,this.getData()},this.globalSer.checkSession()||this.router.navigate(["/ingresar"])}ngOnInit(){return Object(a.a)(this,void 0,void 0,function*(){})}ionViewWillEnter(){return Object(a.a)(this,void 0,void 0,function*(){this.globalSer.checkSession()?(this.showRegisterButton=this.globalSer.checkRoleToEnableAddOrUpdate(),yield this.getTotals()):this.router.navigate(["/ingresar"])})}getTotals(){return Object(a.a)(this,void 0,void 0,function*(){const e=yield this.miembrosServices.getUsersCounters(this.queryParams);e&&e>=0&&!e.error?(this.totals=e,this.pages=this.globalSer.getPagination(e,this.queryParams.limit),e>0?yield this.getData():(this.queryParams.page=1,this.pages=0,this.users=[])):e&&e.error?(this.queryParams.page=1,this.pages=0,this.users=[],yield this.globalSer.errorSession()):(this.queryParams.page=1,this.pages=0,this.users=[])})}getData(){return Object(a.a)(this,void 0,void 0,function*(){yield this.globalSer.presentLoading();const e=yield this.miembrosServices.getUsersList(this.queryParams);e&&!e.error?(this.users=e,yield this.globalSer.dismissLoading()):e&&e.error?(this.users=[],this.pages=0,yield this.globalSer.dismissLoading(),yield this.globalSer.errorSession()):(this.users=[],this.pages=0,yield this.globalSer.dismissLoading(),yield this.globalSer.presentAlert("Alerta",e?e.error:"\xa1Error desconocido!"))})}setSortOrder(){return Object(a.a)(this,void 0,void 0,function*(){this.queryParams.value=1===this.queryParams.value?-1:1,this.queryParams.page=1,this.users=null,yield this.getData()})}findData(){return Object(a.a)(this,void 0,void 0,function*(){this.queryParams.page=1,this.pages=0,this.users=null,yield this.getTotals()})}setQueryValues(){return Object(a.a)(this,void 0,void 0,function*(){const e=e=>{this.queryParams.limit=e,this.queryParams.page=1,this.pages=this.globalSer.getPagination(this.totals,this.queryParams.limit),this.users=null,this.getData()};yield this.globalSer.alertWithList({header:"Resultados por p\xe1gina",inputs:[{name:"results-per-page",type:"radio",label:"10",value:10,checked:10===this.queryParams.limit},{name:"results-per-page",type:"radio",label:"25",value:25,checked:25===this.queryParams.limit},{name:"results-per-page",type:"radio",label:"50",value:50,checked:50===this.queryParams.limit}],confirmAction:i=>e(i)})})}goToRegister(){return Object(a.a)(this,void 0,void 0,function*(){yield this.router.navigate(["/miembros/registro"])})}}return e.\u0275fac=function(i){return new(i||e)(l.Jb(n.a),l.Jb(b.a),l.Jb(u.a),l.Jb(c.a),l.Jb(h.a),l.Jb(s.g))},e.\u0275cmp=l.Db({type:e,selectors:[["app-miembros"]],decls:36,vars:12,consts:[["slot","end"],["color","primary",3,"click",4,"ngIf"],[1,""],["size","12"],["size-sm","7",3,"size"],["color","medium","slot","start",3,"click",4,"ngIf"],["position","floating","color","medium"],["autocomplete","off",1,"ion-text-uppercase",3,"ngModel","ngModelChange"],["color","medium","slot","end",3,"click"],["name","search-outline"],["size-sm","5",3,"size"],["color","medium",3,"click"],["name","arrow-up-outline",4,"ngIf"],["name","arrow-down-outline",4,"ngIf"],["name","filter-outline"],[4,"ngIf"],["color","primary",3,"click"],["name","add-outline","slot","start"],["color","medium","slot","start",3,"click"],["name","backspace-outline"],["name","arrow-up-outline"],["name","arrow-down-outline"],["size","12","size-sm","6",4,"ngFor","ngForOf"],["size","12","size-sm","6"],[3,"data","list"],[3,"totalPages","currentPage","handlePage"],[1,"ion-text-center"],["name","alert-circle-outline"]],template:function(e,i){1&e&&(l.Mb(0,"ion-header"),l.Mb(1,"ion-toolbar"),l.Mb(2,"ion-title"),l.pc(3,"Miembros"),l.Lb(),l.Mb(4,"ion-buttons",0),l.nc(5,m,4,0,"ion-button",1),l.Lb(),l.Lb(),l.Lb(),l.Mb(6,"ion-content"),l.Mb(7,"ion-grid",2),l.Mb(8,"ion-row"),l.Mb(9,"ion-col",3),l.Mb(10,"ion-row"),l.Mb(11,"ion-col",4),l.Mb(12,"ion-toolbar"),l.nc(13,p,2,0,"ion-button",5),l.Mb(14,"ion-item"),l.Mb(15,"ion-label",6),l.pc(16,"Buscar"),l.Lb(),l.Mb(17,"ion-input",7),l.Ub("ngModelChange",function(e){return i.queryParams.search=e}),l.Lb(),l.Lb(),l.Mb(18,"ion-button",8),l.Ub("click",function(){return null!==i.queryParams.word||""!==i.queryParams.word?i.findData():null}),l.Kb(19,"ion-icon",9),l.Lb(),l.Lb(),l.Lb(),l.Mb(20,"ion-col",10),l.Mb(21,"ion-toolbar"),l.Mb(22,"ion-button",11),l.Ub("click",function(){return i.setSortOrder()}),l.nc(23,f,1,0,"ion-icon",12),l.nc(24,y,1,0,"ion-icon",13),l.pc(25,"\xa0 "),l.Mb(26,"ion-text"),l.pc(27),l.Lb(),l.Lb(),l.Mb(28,"ion-button",11),l.Ub("click",function(){return i.setQueryValues()}),l.Kb(29,"ion-icon",14),l.pc(30,"\xa0 "),l.Mb(31,"ion-text"),l.pc(32),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.nc(33,M,2,1,"ion-row",15),l.nc(34,L,2,3,"div",15),l.nc(35,v,8,0,"ion-row",15),l.Lb(),l.Lb()),2&e&&(l.xb(5),l.Zb("ngIf",i.showRegisterButton),l.xb(6),l.Zb("size",12),l.xb(2),l.Zb("ngIf",i.queryParams.word),l.xb(4),l.Zb("ngModel",i.queryParams.search),l.xb(3),l.Zb("size",12),l.xb(3),l.Zb("ngIf",1===i.queryParams.value),l.xb(1),l.Zb("ngIf",-1===i.queryParams.value),l.xb(3),l.qc(1===i.queryParams.value?"ASC":"DES"),l.xb(5),l.qc(i.queryParams.limit),l.xb(1),l.Zb("ngIf",i.users&&i.users.length>0),l.xb(1),l.Zb("ngIf",i.users&&i.users.length>0&&i.pages>0),l.xb(1),l.Zb("ngIf",null!==i.users&&0===i.users.length))},directives:[n.r,n.O,n.M,n.f,r.i,n.o,n.q,n.E,n.n,n.v,n.w,n.u,n.X,o.e,o.f,n.e,n.s,n.J,r.h,g.a,d.a,n.g,n.h,n.j],styles:[""]}),e})()},{path:"registro",loadChildren:()=>Promise.all([t.e(4),t.e(0),t.e(49)]).then(t.bind(null,"3V3w")).then(e=>e.RegistroPageModule)},{path:":userid",loadChildren:()=>Promise.all([t.e(4),t.e(0),t.e(47)]).then(t.bind(null,"ZMlI")).then(e=>e.DetallesMiembroPageModule)},{path:"asignar-consolidador",loadChildren:()=>Promise.all([t.e(0),t.e(46)]).then(t.bind(null,"F1ym")).then(e=>e.AsignarConsolidadorPageModule)},{path:"asignar-grupo-familiar",loadChildren:()=>Promise.all([t.e(0),t.e(28)]).then(t.bind(null,"Cvgr")).then(e=>e.AsignarGrupoFamiliarPageModule)}];let w=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(i){return new(i||e)},imports:[[s.j.forChild(q)],s.j]}),e})();var S=t("j1ZV");let x=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(i){return new(i||e)},imports:[[r.b,o.a,n.P,w,S.a]]}),e})()}}]);