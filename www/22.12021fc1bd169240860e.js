(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{EnSQ:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var o=e("fXoL");let i=(()=>{class t{constructor(){}resizePhoto(t,n,e,o){const i=new FileReader;i.onload=t=>{this.resizeReresize(t.target.result,n,e,o)},i.readAsDataURL(t)}resizeReresize(t,n,e,o){const i=new Image;i.onload=t=>{const r=document.createElement("canvas");let s=i.width,a=i.height;s>a?s>n&&(a*=n/s,s=n):a>n&&(s*=n/a,a=n),r.width=s,r.height=a,r.getContext("2d").drawImage(i,0,0,s,a),this.resizeOuput(r,e,o)},i.src=t}resizeOuput(t,n,e){switch(n){case"file":t.toBlob(t=>{e(t)},"image/jpeg",.8);break;case"dataURL":e(t.toDataURL("image/jpeg",.8))}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},KjC7:function(t,n,e){"use strict";e.r(n),e.d(n,"DetallesDevocionalesPageModule",function(){return M});var o=e("ofXK"),i=e("3Pt+"),r=e("TEn/"),s=e("tyNb"),a=e("mrSG"),c=e("fXoL"),u=e("kQ27"),l=e("4WDQ"),d=e("Vsu4"),b=e("Teup");function f(t,n){if(1&t){const t=c.Nb();c.Mb(0,"ion-buttons",5),c.Mb(1,"ion-button",6),c.Ub("click",function(){return c.ic(t),c.Wb().goBack()}),c.Kb(2,"ion-icon",7),c.Lb(),c.Lb()}}function h(t,n){if(1&t){const t=c.Nb();c.Mb(0,"ion-button",8),c.Ub("click",function(){return c.ic(t),c.Wb().setShowEditForm()}),c.Kb(1,"ion-icon",9),c.Mb(2,"ion-text"),c.pc(3,"Editar"),c.Lb(),c.Lb()}}function g(t,n){if(1&t){const t=c.Nb();c.Mb(0,"ion-button",10),c.Ub("click",function(){return c.ic(t),c.Wb().confirmRemove()}),c.Kb(1,"ion-icon",11),c.Mb(2,"ion-text"),c.pc(3,"Eliminar"),c.Lb(),c.Lb()}}function m(t,n){if(1&t){const t=c.Nb();c.Mb(0,"ion-button",10),c.Ub("click",function(){return c.ic(t),c.Wb().confirmCancel()}),c.Kb(1,"ion-icon",12),c.Mb(2,"ion-text"),c.pc(3,"Cancelar"),c.Lb(),c.Lb()}}function v(t,n){if(1&t&&(c.Mb(0,"span"),c.pc(1),c.Lb()),2&t){const t=c.Wb(3);c.xb(1),c.sc("Por: ",null==t.devotional.user?null:t.devotional.user.names," ",null==t.devotional.user?null:t.devotional.user.lastNames," - ")}}function p(t,n){if(1&t&&(c.Mb(0,"ion-col",14),c.Kb(1,"app-video-player",17),c.Lb()),2&t){const t=c.Wb(3);c.xb(1),c.Zb("urlVideo",t.devotional.urlVideo)}}const w=function(t){return{backgroundImage:t,height:"260px"}};function S(t,n){if(1&t&&(c.Mb(0,"ion-col",14),c.Mb(1,"ion-card"),c.Kb(2,"div",15),c.Mb(3,"ion-card-content"),c.Mb(4,"ion-row"),c.Mb(5,"ion-col",14),c.Mb(6,"ion-card-title"),c.pc(7),c.Lb(),c.Mb(8,"ion-card-subtitle"),c.nc(9,v,2,2,"span",4),c.pc(10),c.Lb(),c.Lb(),c.nc(11,p,2,1,"ion-col",13),c.Mb(12,"ion-col",14),c.Kb(13,"div",16),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&t){const t=c.Wb(2);c.xb(2),c.Zb("ngStyle",c.ec(6,w,"url("+(t.devotional.picture||"assets/cruz.png")+"), url(assets/cruz.png)")),c.xb(5),c.qc(t.devotional.title),c.xb(2),c.Zb("ngIf",t.devotional.user),c.xb(1),c.rc(" ",t.devotional.created_at," "),c.xb(1),c.Zb("ngIf",t.devotional.urlVideo),c.xb(2),c.Zb("innerHTML",t.devotional.description,c.jc)}}function L(t,n){if(1&t&&(c.Mb(0,"ion-col",14),c.Kb(1,"app-devocionales-form",18),c.Lb()),2&t){const t=c.Wb(2);c.xb(1),c.Zb("data",t.devotional)("handleCancel",t.handleCancel)("handleSave",t.handleSave)}}function E(t,n){if(1&t&&(c.Mb(0,"ion-row"),c.nc(1,S,14,8,"ion-col",13),c.nc(2,L,2,3,"ion-col",13),c.Lb()),2&t){const t=c.Wb();c.xb(1),c.Zb("ngIf",!t.showEditForm),c.xb(1),c.Zb("ngIf",t.showEditForm)}}const F=[{path:"",component:(()=>{class t{constructor(t,n,e,o){this.activateRoute=t,this.devocionalesService=n,this.globalSer=e,this.navCtrl=o,this.id=null,this.showEditForm=!1,this.devotional=null,this.handleCancel=()=>this.setShowEditForm(),this.handleSave=t=>{this.devotional=Object.assign(Object.assign({},this.devotional),t),this.setShowEditForm()}}ngOnInit(){return Object(a.a)(this,void 0,void 0,function*(){this.id=this.activateRoute.snapshot.paramMap.get("id"),this.id?yield this.getDevotionalData():(yield this.globalSer.presentAlert("Alerta","Disculpe, pero ha ocurrido un error al momento de obtener la informaci\xf3n."),yield this.navCtrl.back())})}getDevotionalData(){return Object(a.a)(this,void 0,void 0,function*(){yield this.globalSer.presentLoading();const t=yield this.devocionalesService.getDetails(this.id);t&&!t.error?(this.devotional=t,yield this.globalSer.dismissLoading()):t&&t.error?(yield this.globalSer.dismissLoading(),yield this.globalSer.errorSession()):yield this.globalSer.dismissLoading()})}remove(){return Object(a.a)(this,void 0,void 0,function*(){yield this.globalSer.presentLoading();const t=yield this.devocionalesService.remove(this.id);if(t&&!t.error){const{msg:n}=t||{};yield this.globalSer.dismissLoading(),yield this.globalSer.presentAlert("\xa1\xc9xito!",n||"Se ha eliminado el devocional exitosamente."),yield this.goBack()}else t&&t.error?(yield this.globalSer.dismissLoading(),yield this.globalSer.errorSession()):yield this.globalSer.dismissLoading()})}setShowEditForm(){this.showEditForm=!this.showEditForm}confirmCancel(){return Object(a.a)(this,void 0,void 0,function*(){yield this.globalSer.alertConfirm({header:"Confirme",message:"\xbfEst\xe1 seguro qu\xe9 desea salir del formulario sin guardar los cambios?",confirmAction:()=>this.setShowEditForm()})})}confirmRemove(){return Object(a.a)(this,void 0,void 0,function*(){yield this.globalSer.alertConfirm({header:"Confirme",message:"\xbfEst\xe1 seguro qu\xe9 desea eliminar este devocional?",confirmAction:()=>this.remove()})})}goBack(){return Object(a.a)(this,void 0,void 0,function*(){yield this.navCtrl.back()})}}return t.\u0275fac=function(n){return new(n||t)(c.Jb(s.a),c.Jb(u.a),c.Jb(l.a),c.Jb(r.U))},t.\u0275cmp=c.Db({type:t,selectors:[["app-detalles-devocionales"]],decls:11,vars:6,consts:[["slot","start",4,"ngIf"],["slot","end"],["color","success",3,"click",4,"ngIf"],["color","danger",3,"click",4,"ngIf"],[4,"ngIf"],["slot","start"],[3,"click"],["name","arrow-back-outline"],["color","success",3,"click"],["name","pencil-outline","slot","start"],["color","danger",3,"click"],["name","trash-outline","slot","start"],["name","close-outline","slot","start"],["size","12",4,"ngIf"],["size","12"],[1,"banner-devotional",3,"ngStyle"],[3,"innerHTML"],[3,"urlVideo"],[3,"data","handleCancel","handleSave"]],template:function(t,n){1&t&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar"),c.nc(2,f,3,0,"ion-buttons",0),c.Mb(3,"ion-title"),c.pc(4),c.Lb(),c.Mb(5,"ion-buttons",1),c.nc(6,h,4,0,"ion-button",2),c.nc(7,g,4,0,"ion-button",3),c.nc(8,m,4,0,"ion-button",3),c.Lb(),c.Lb(),c.Lb(),c.Mb(9,"ion-content"),c.nc(10,E,3,2,"ion-row",4),c.Lb()),2&t&&(c.xb(2),c.Zb("ngIf",!n.showEditForm),c.xb(2),c.rc("",n.showEditForm?"Editar datos del":"Detalles del"," Devocional"),c.xb(2),c.Zb("ngIf",!n.showEditForm),c.xb(1),c.Zb("ngIf",!n.showEditForm),c.xb(1),c.Zb("ngIf",n.showEditForm),c.xb(2),c.Zb("ngIf",n.devotional))},directives:[r.r,r.P,o.i,r.N,r.f,r.o,r.e,r.s,r.K,r.E,r.n,r.g,o.j,r.h,r.k,r.j,d.a,b.a],styles:[".banner-devotional[_ngcontent-%COMP%]{border-radius:5px 5px 0 0;background-size:cover!important;background-position:50%!important}"]}),t})()}];let y=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(n){return new(n||t)},imports:[[s.j.forChild(F)],s.j]}),t})();var C=e("j1ZV");let M=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(n){return new(n||t)},imports:[[o.b,i.a,r.Q,y,C.a]]}),t})()},OmbT:function(t,n,e){"use strict";function o(t){return t&&/^([A-Z\u00C0-\u024F\u1E00-\u1EFF]?)+([[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]+[,.]?[ ]?|[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]+['-]]?)+$/.test(t)}function i(t){const n=String.fromCharCode(t.charCode);/[0-9.,]/.test(n)||t.preventDefault()}function r(t){const n=String.fromCharCode(t.charCode);/[0-9]/.test(n)||t.preventDefault()}function s(t){const{value:n}=t.target;/^([A-Z\u00C0-\u024F\u1E00-\u1EFF]?)+([[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]+[,.]?[ ]?|[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]+['-]]?)+$/.test(n)||(t.target.value=n.substring(0,n.length-1))}function a(t){return t&&/^[0-9]{1,3}/.test(""+t)}function c(t){return t&&/^[\+]?[(]?([0-9]{2})?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(t)}function u(t){return t&&/^(?=.*\d)?(?=.*[A-Z]{1})?(?=.*[a-z]{1}?)?(?=.*[^\w\d\s:]?)([^\s]){6,25}$/.test(t)}function l(t){return t&&/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)}function d(t){return t&&/^[a-zA-Z\xc1\xc9\xcd\xd3\xda\xc0\xc8\xcc\xd2\xd9\xe0\xe8\xec\xf2\xf9\xe1\xe9\xed\xf3\xfa\xc2\xca\xce\xd4\xdb\xe2\xea\xee\xf4\xfb\xc4\xcb\xcf\xd6\xdc\xe4\xeb\xef\xf6\xfc\xf1\xd10-9\s.,#*?\xbf\xa1!()\-+"'/@]{5,2000}/g.test(t)}function b(t){return t&&/\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*/.test(""+t)}function f(t){return t&&/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(t)}function h(t,n=!1){return!!t&&(n?t.substr(0,40).indexOf("data:application/pdf")>-1:t.substr(0,21).indexOf("data:image/")>-1)}function g(t){return/^(?:(?:(?:http?|https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(""+t)}function m(t){return/(?:https?:\/\/)?(?:www|m\.)?(facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/gi.test(""+t)}function v(t){return/(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/([A-Za-z0-9-_\.\/]+)/i.test(""+t)}function p(t){return/^(?:https?:\/\/)?(?:www\.)?twitter\.com\/(#!\/)?[a-zA-Z0-9_]+$/i.test(""+t)}function w(t){return/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/i.test(""+t)}function S(t,n=!1){return t?n?t.replace(/\n/g,"<br/>"):t.replace(/<br ?\/?>|<BR ?\/?>/g,"\n"):null}function L(t){return t?t.replace(/&NBSP;/g," "):null}e.d(n,"h",function(){return o}),e.d(n,"p",function(){return i}),e.d(n,"q",function(){return r}),e.d(n,"o",function(){return s}),e.d(n,"f",function(){return a}),e.d(n,"j",function(){return c}),e.d(n,"i",function(){return u}),e.d(n,"c",function(){return l}),e.d(n,"k",function(){return d}),e.d(n,"b",function(){return b}),e.d(n,"e",function(){return f}),e.d(n,"a",function(){return h}),e.d(n,"m",function(){return g}),e.d(n,"d",function(){return m}),e.d(n,"g",function(){return v}),e.d(n,"l",function(){return p}),e.d(n,"n",function(){return w}),e.d(n,"s",function(){return S}),e.d(n,"r",function(){return L})}}]);