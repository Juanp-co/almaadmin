(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{PI0l:function(e,t,i){"use strict";i.r(t),i.d(t,"MiembrosPageModule",function(){return C});var s=i("ofXK"),o=i("3Pt+"),n=i("TEn/"),r=i("tyNb"),a=i("mrSG"),l=i("Wgwc"),u=i.n(l),c=i("fXoL"),d=i("1Ldg"),h=i("QTu/"),b=i("iN9u"),y=i("4WDQ"),g=i("wJOZ"),m=i("nfHg"),p=i("bM8H");function k(e,t){if(1&e){const e=c.Nb();c.Mb(0,"ion-button",13),c.Ub("click",function(){return c.ic(e),c.Wb().goToRegister()}),c.Kb(1,"ion-icon",14),c.Mb(2,"ion-text"),c.pc(3,"Registrar miembro"),c.Lb(),c.Lb()}}function f(e,t){1&e&&c.Kb(0,"ion-icon",15)}function v(e,t){1&e&&c.Kb(0,"ion-icon",16)}function L(e,t){if(1&e&&(c.Mb(0,"ion-col",18),c.Kb(1,"app-usercard",19),c.Lb()),2&e){const e=t.$implicit;c.xb(1),c.Zb("data",e)("list",!0)}}function S(e,t){if(1&e&&(c.Mb(0,"ion-row"),c.nc(1,L,2,2,"ion-col",17),c.Lb()),2&e){const e=c.Wb();c.xb(1),c.Zb("ngForOf",e.users)}}function P(e,t){if(1&e&&(c.Mb(0,"div"),c.Kb(1,"app-paginator",20),c.Lb()),2&e){const e=c.Wb();c.xb(1),c.Zb("totalPages",e.pages)("currentPage",e.queryParams.page)("handlePage",e.handlePage)}}function M(e,t){1&e&&(c.Mb(0,"ion-row"),c.Mb(1,"ion-col"),c.Mb(2,"ion-card"),c.Mb(3,"ion-card-content",21),c.Mb(4,"ion-card-subtitle"),c.Mb(5,"ion-text"),c.Kb(6,"ion-icon",22),c.pc(7,"\xa0 No se encontraron resultados. "),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb())}const w=function(){return[200]},T=[{path:"",component:(()=>{class e{constructor(e,t,i,s,o,n,r){this.alertCtrl=e,this.axios=t,this.cookieService=i,this.detallesMiembroService=s,this.globalSer=o,this.miembrosServices=n,this.router=r,this.professions=[],this.companyType=[],this.educationLevel=[],this.bloodType=[],this.departments=[],this.cities=[],this.civilStatus=[],this.gender=[],this.documentTypes=[],this.users=null,this.totals=0,this.pages=0,this.page=1,this.showRegisterButton=!1,this.queryParams={limit:10,page:1,input:"names",value:1,search:null},this.handlePage=e=>{this.queryParams.page=e,this.getData()},this.globalSer.checkSession()?(this.documentTypes=s.documentTypesList,this.educationLevel=s.educationLevel,this.professions=s.professionsList,this.bloodType=s.bloodTypeList,this.companyType=s.companyTypeList,this.civilStatus=s.civilStatusList,this.gender=s.genderList,this.departments=s.departmentsList.map(e=>e.department)):this.router.navigate(["/ingresar"])}ngOnInit(){return Object(a.a)(this,void 0,void 0,function*(){this.showRegisterButton=this.globalSer.checkRoleToEnableAddOrUpdate()})}ionViewWillEnter(){return Object(a.a)(this,void 0,void 0,function*(){this.globalSer.checkSession()?yield this.getTotals():this.router.navigate(["/ingresar"])})}getTotals(){return Object(a.a)(this,void 0,void 0,function*(){const e=yield this.miembrosServices.getUsersCounters(this.queryParams);e&&e>=0&&!e.error?(this.totals=e,this.pages=this.globalSer.getPagination(e,this.queryParams.limit),e>0?yield this.getData():(this.queryParams.page=1,this.pages=0,this.users=[])):e&&e.error?(this.queryParams.page=1,this.pages=0,this.users=[],yield this.globalSer.errorSession()):(this.queryParams.page=1,this.pages=0,this.users=[])})}getData(){return Object(a.a)(this,void 0,void 0,function*(){const e=yield this.miembrosServices.getUsersList(this.queryParams);e&&!e.error?this.users=e:e&&e.error?(this.users=[],this.pages=0,yield this.globalSer.dismissLoading()):(this.users=[],this.pages=0,yield this.globalSer.presentAlert("Alerta",(null==e?void 0:e.error)||"\xa1Error desconocido!"))})}downloadData(){return Object(a.a)(this,void 0,void 0,function*(){yield this.globalSer.presentLoading();const e=yield this.miembrosServices.getAllUsers();if(e&&!e.error){const t=[{key:"phone",key2:"Telefono"},{key:"document",key2:"NumDocumento"},{key:"names",key2:"Nombres"},{key:"lastNames",key2:"Apellidos"},{key:"email",key2:"Correo"},{key:"gender",key2:"Genero"},{key:"birthday",key2:"FechaNacimiento"},{key:"civilStatus",key2:"EstadoCivil"},{key:"educationLevel",key2:"NivelEducativo"},{key:"profession",key2:"Profesion"},{key:"bloodType",key2:"TipoSangre"},{key:"company",key2:"Empresa"},{key:"companyType",key2:"TipoEmpresa"},{key:"baptized",key2:"Bautizado"},{key:"roles",key2:"CargoIglesia"},{key:"consolidated",key2:"Consolidado"},{key:"petition",key2:"Peticion"},{key:"meetingNew",key2:"ReunionIngreso"},{key:"department",key2:"Departamento"},{key:"city",key2:"Ciudad"},{key:"locality",key2:"Localidad"},{key:"direction",key2:"Direccion"},{key:"created_at",key2:"FechaRegistro"}],i=[];e.forEach((e,s)=>{const o={Number:s+1,Telefono:null,NumDocumento:null,Nombres:null,Apellidos:null,Correo:null,Genero:null,FechaNacimiento:null,EstadoCivil:null,NivelEducativo:null,Profesion:null,TipoSangre:null,Empresa:null,TipoEmpresa:null,Bautizado:null,CargoIglesia:null,Consolidado:null,Peticion:null,ReunionIngreso:null,Departamento:null,Ciudad:null,Localidad:null,Direccion:null,FechaRegistro:null};t.forEach(t=>{if(e[t.key])if("civilStatus"===t.key)o[t.key2]=this.civilStatus[e[t.key]];else if("educationLevel"===t.key)o[t.key2]=this.educationLevel[e[t.key]];else if("profession"===t.key)o[t.key2]=this.professions[e[t.key]];else if("bloodType"===t.key)o[t.key2]=this.bloodType[e[t.key]];else if("company"===t.key)o[t.key2]=e[t.key]?"SI":"NO";else if("consolidated"===t.key)o[t.key2]=e[t.key]?"SI":"NO";else if("baptized"===t.key)o[t.key2]=e[t.key]?"SI":"NO";else if("meetingNew"===t.key)o[t.key2]=e[t.key]?"SI":"NO";else if("roles"===t.key)o[t.key2]=this.globalSer.getRoleValue(e[t.key]);else if("companyType"===t.key)o[t.key2]=this.companyType[e[t.key]];else if("gender"===t.key)o[t.key2]=this.gender[e[t.key]];else if("department"===t.key)o[t.key2]=this.departments[e[t.key]];else if("city"===t.key){const i=this.detallesMiembroService.departmentsList[e[t.key]]||null;o[t.key2]=(null==i?void 0:i.cities[e[t.key]])||null}else o[t.key2]=e[t.key]}),i.push(o)}),this.globalSer.downloadCSVFromJson(`Miembros_CCADV_${u()().format("YYYY-MM-DD[_]HH:mm:ss")}.csv`,i),yield this.globalSer.dismissLoading()}else e&&e.error?(yield this.globalSer.dismissLoading(),yield this.globalSer.errorSession()):yield this.globalSer.dismissLoading()})}setSortOrder(){return Object(a.a)(this,void 0,void 0,function*(){this.queryParams.value=1===this.queryParams.value?-1:1,this.queryParams.page=1,this.users=null,yield this.getData()})}searchInput(e){this.timer&&clearTimeout(this.timer),this.timer=setTimeout(()=>Object(a.a)(this,void 0,void 0,function*(){this.pages=0,this.queryParams.page=1,this.queryParams.search=e.target.value||null,yield this.getTotals()}),200)}findData(){return Object(a.a)(this,void 0,void 0,function*(){this.queryParams.page=1,this.pages=0,this.users=null,yield this.getTotals()})}setQueryValues(){return Object(a.a)(this,void 0,void 0,function*(){const e=e=>{this.queryParams.limit=e,this.queryParams.page=1,this.pages=this.globalSer.getPagination(this.totals,this.queryParams.limit),this.users=null,this.getData()};yield this.globalSer.alertWithList({header:"Resultados por p\xe1gina",inputs:[{name:"results-per-page",type:"radio",label:"10",value:10,checked:10===this.queryParams.limit},{name:"results-per-page",type:"radio",label:"25",value:25,checked:25===this.queryParams.limit},{name:"results-per-page",type:"radio",label:"50",value:50,checked:50===this.queryParams.limit}],confirmAction:t=>e(t)})})}goToRegister(){return Object(a.a)(this,void 0,void 0,function*(){yield this.router.navigate(["/miembros/registro"])})}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(n.a),c.Jb(d.a),c.Jb(h.a),c.Jb(b.a),c.Jb(y.a),c.Jb(g.a),c.Jb(r.g))},e.\u0275cmp=c.Db({type:e,selectors:[["app-miembros"]],decls:33,vars:12,consts:[["slot","end"],["color","primary",3,"click",4,"ngIf"],[1,""],["size","12"],["size-sm","6",3,"size"],["placeholder","Buscar","showCancelButton","focus",1,"toUpper",3,"debounce","ionChange"],["color","medium",3,"click"],["name","arrow-up-outline",4,"ngIf"],["name","arrow-down-outline",4,"ngIf"],["name","filter-outline"],[3,"click"],["name","download-outline","slot","start"],[4,"ngIf"],["color","primary",3,"click"],["name","add-outline","slot","start"],["name","arrow-up-outline"],["name","arrow-down-outline"],["size","12","size-sm","6",4,"ngFor","ngForOf"],["size","12","size-sm","6"],[3,"data","list"],[3,"totalPages","currentPage","handlePage"],[1,"ion-text-center"],["name","alert-circle-outline"]],template:function(e,t){1&e&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-title"),c.pc(3,"Miembros"),c.Lb(),c.Mb(4,"ion-buttons",0),c.nc(5,k,4,0,"ion-button",1),c.Lb(),c.Lb(),c.Lb(),c.Mb(6,"ion-content"),c.Mb(7,"ion-grid",2),c.Mb(8,"ion-row"),c.Mb(9,"ion-col",3),c.Mb(10,"ion-row"),c.Mb(11,"ion-col",4),c.Mb(12,"ion-searchbar",5),c.Ub("ionChange",function(e){return t.searchInput(e)}),c.Lb(),c.Lb(),c.Mb(13,"ion-col",4),c.Mb(14,"ion-toolbar"),c.Mb(15,"ion-button",6),c.Ub("click",function(){return t.setSortOrder()}),c.nc(16,f,1,0,"ion-icon",7),c.nc(17,v,1,0,"ion-icon",8),c.pc(18,"\xa0 "),c.Mb(19,"ion-text"),c.pc(20),c.Lb(),c.Lb(),c.Mb(21,"ion-button",6),c.Ub("click",function(){return t.setQueryValues()}),c.Kb(22,"ion-icon",9),c.pc(23,"\xa0 "),c.Mb(24,"ion-text"),c.pc(25),c.Lb(),c.Lb(),c.Mb(26,"ion-button",10),c.Ub("click",function(){return t.downloadData()}),c.Kb(27,"ion-icon",11),c.Mb(28,"ion-text"),c.pc(29,"Descargar datos"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.nc(30,S,2,1,"ion-row",12),c.nc(31,P,2,3,"div",12),c.nc(32,M,8,0,"ion-row",12),c.Lb(),c.Lb()),2&e&&(c.xb(5),c.Zb("ngIf",t.showRegisterButton),c.xb(6),c.Zb("size",12),c.xb(1),c.Zb("debounce",c.dc(11,w)),c.xb(1),c.Zb("size",12),c.xb(3),c.Zb("ngIf",1===t.queryParams.value),c.xb(1),c.Zb("ngIf",-1===t.queryParams.value),c.xb(3),c.qc(1===t.queryParams.value?"ASC":"DES"),c.xb(5),c.qc(t.queryParams.limit),c.xb(5),c.Zb("ngIf",t.users&&t.users.length>0),c.xb(1),c.Zb("ngIf",t.users&&t.users.length>0&&t.pages>0),c.xb(1),c.Zb("ngIf",null!==t.users&&0===t.users.length))},directives:[n.r,n.P,n.N,n.f,s.i,n.o,n.q,n.E,n.n,n.F,n.Y,n.e,n.K,n.s,s.h,m.a,p.a,n.g,n.h,n.j],styles:[""]}),e})()},{path:"registro",loadChildren:()=>Promise.all([i.e(0),i.e(33)]).then(i.bind(null,"3V3w")).then(e=>e.RegistroPageModule)},{path:":userid",loadChildren:()=>Promise.all([i.e(0),i.e(32)]).then(i.bind(null,"ZMlI")).then(e=>e.DetallesMiembroPageModule)},{path:"asignar-consolidador",loadChildren:()=>Promise.all([i.e(0),i.e(53)]).then(i.bind(null,"F1ym")).then(e=>e.AsignarConsolidadorPageModule)},{path:"asignar-grupo-familiar",loadChildren:()=>Promise.all([i.e(0),i.e(31)]).then(i.bind(null,"Cvgr")).then(e=>e.AsignarGrupoFamiliarPageModule)}];let D=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[r.j.forChild(T)],r.j]}),e})();var x=i("j1ZV");let C=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[s.b,o.a,n.Q,D,x.a]]}),e})()},iN9u:function(e,t,i){"use strict";i.d(t,"a",function(){return u});var s=i("mrSG"),o=i("0ox5"),n=i("ZrT4"),r=i("fXoL"),a=i("1Ldg"),l=i("4WDQ");let u=(()=>{class e{constructor(e,t){this.axios=e,this.globalSer=t,this.professionsList=o.g,this.companyTypeList=o.c,this.departmentsList=n.a,this.educationLevel=o.e,this.bloodTypeList=o.a,this.civilStatusList=o.b,this.genderList=o.f,this.documentTypesList=o.d}getChurches(){return Object(s.a)(this,void 0,void 0,function*(){const e=yield this.axios.getData("/churches");return e&&e.success&&e.data.churches||[]})}getUserDetails(e){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.axios.getData("/admin/users/"+e);return t&&t.success?t.data.user:this.globalSer.altResponse(t)})}updateDataUser(e,t){return Object(s.a)(this,void 0,void 0,function*(){const i=yield this.axios.putData("/admin/users/"+e,t);return i&&i.success?i.data.user:this.globalSer.altResponse(i)})}updateRoleUser(e,t){return Object(s.a)(this,void 0,void 0,function*(){const i=yield this.axios.putData(`/admin/users/${e}/role`,t);return i&&i.success?i.data.msg||"Se asignado el nuevo rol al miembro exitosamente.":this.globalSer.altResponse(i)})}setAsConsolidator(e){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.axios.putData(`admin/users/${e}/consolidator`);return t&&t.success?t.data.msg:this.globalSer.altResponse(t)})}deleteUser(e){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.axios.deleteData("/admin/users/"+e);return t&&t.success?t.data.msg:this.globalSer.altResponse(t)})}getUsersCourses(e){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.axios.getData(`/admin/users/${e}/courses`);return t&&t.success?t.data.courses||[]:this.globalSer.altResponse(t)})}getUsersReferrals(e){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.axios.getData(`/admin/users/${e}/referrals`);return t&&t.success?t.data.referrals||[]:this.globalSer.altResponse(t)})}}return e.\u0275fac=function(t){return new(t||e)(r.Qb(a.a),r.Qb(l.a))},e.\u0275prov=r.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);