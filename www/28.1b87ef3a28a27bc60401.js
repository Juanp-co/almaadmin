(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"VEy+":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("mrSG"),o=n("fXoL"),s=n("1Ldg"),r=n("4WDQ");let a=(()=>{class t{constructor(t,e){this.axios=t,this.globalSer=e}getResources(){return Object(i.a)(this,void 0,void 0,function*(){const t=yield this.axios.getData("/admin/resources");return t&&t.success&&t.data.resources||[]})}saveResources(t={}){return Object(i.a)(this,void 0,void 0,function*(){const e=yield this.axios.postData("/admin/resources",t);return e&&e.success?e.data:this.globalSer.altResponse(e)})}deleteResources(t){return Object(i.a)(this,void 0,void 0,function*(){const e=yield this.axios.deleteData("/admin/resources/"+t);return e&&e.success?e.data:this.globalSer.altResponse(e)})}}return t.\u0275fac=function(e){return new(e||t)(o.Qb(s.a),o.Qb(r.a))},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},Wgwc:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",o="day",s="week",r="month",a="quarter",c="year",u="date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},b=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},f={s:b,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),o=n%60;return(e<=0?"+":"-")+b(i,2,"0")+":"+b(o,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),o=e.clone().add(i,r),s=n-o<0,a=e.clone().add(i+(s?-1:1),r);return+(-(i+(n-o)/(s?o-a:a-o))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(d){return{M:r,y:c,w:s,d:o,D:u,h:i,m:n,s:e,ms:t,Q:a}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",g={};g[m]=h;var p=function(t){return t instanceof w},v=function(t,e,n){var i;if(!t)return m;if("string"==typeof t)g[t]&&(i=t),e&&(g[t]=e,i=t);else{var o=t.name;g[o]=t,i=o}return!n&&i&&(m=i),i||!n&&m},M=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},$=f;$.l=v,$.i=p,$.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function h(t){this.$L=v(t.locale,null,!0),this.parse(t)}var b=h.prototype;return b.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if($.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(d);if(i){var o=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},b.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},b.$utils=function(){return $},b.isValid=function(){return!("Invalid Date"===this.$d.toString())},b.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},b.isAfter=function(t,e){return M(t)<this.startOf(e)},b.isBefore=function(t,e){return this.endOf(e)<M(t)},b.$g=function(t,e,n){return $.u(t)?this[e]:this.set(n,t)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(t,a){var d=this,l=!!$.u(a)||a,h=$.p(t),b=function(t,e){var n=$.w(d.$u?Date.UTC(d.$y,e,t):new Date(d.$y,e,t),d);return l?n:n.endOf(o)},f=function(t,e){return $.w(d.toDate()[t].apply(d.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),d)},m=this.$W,g=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case c:return l?b(1,0):b(31,11);case r:return l?b(1,g):b(0,g+1);case s:var M=this.$locale().weekStart||0,w=(m<M?m+7:m)-M;return b(l?p-w:p+(6-w),g);case o:case u:return f(v+"Hours",0);case i:return f(v+"Minutes",1);case n:return f(v+"Seconds",2);case e:return f(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(t){return this.startOf(t,!1)},b.$set=function(s,a){var d,l=$.p(s),h="set"+(this.$u?"UTC":""),b=(d={},d[o]=h+"Date",d[u]=h+"Date",d[r]=h+"Month",d[c]=h+"FullYear",d[i]=h+"Hours",d[n]=h+"Minutes",d[e]=h+"Seconds",d[t]=h+"Milliseconds",d)[l],f=l===o?this.$D+(a-this.$W):a;if(l===r||l===c){var m=this.clone().set(u,1);m.$d[b](f),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else b&&this.$d[b](f);return this.init(),this},b.set=function(t,e){return this.clone().$set(t,e)},b.get=function(t){return this[$.p(t)]()},b.add=function(t,a){var u,d=this;t=Number(t);var l=$.p(a),h=function(e){var n=M(d);return $.w(n.date(n.date()+Math.round(e*t)),d)};if(l===r)return this.set(r,this.$M+t);if(l===c)return this.set(c,this.$y+t);if(l===o)return h(1);if(l===s)return h(7);var b=(u={},u[n]=6e4,u[i]=36e5,u[e]=1e3,u)[l]||1,f=this.$d.getTime()+t*b;return $.w(f,this)},b.subtract=function(t,e){return this.add(-1*t,e)},b.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=$.z(this),o=this.$locale(),s=this.$H,r=this.$m,a=this.$M,c=o.weekdays,u=o.months,d=function(t,i,o,s){return t&&(t[i]||t(e,n))||o[i].substr(0,s)},h=function(t){return $.s(s%12||12,t,"0")},b=o.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:$.s(a+1,2,"0"),MMM:d(o.monthsShort,a,u,3),MMMM:d(u,a),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:d(o.weekdaysMin,this.$W,c,2),ddd:d(o.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:$.s(s,2,"0"),h:h(1),hh:h(2),a:b(s,r,!0),A:b(s,r,!1),m:String(r),mm:$.s(r,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:i};return n.replace(l,function(t,e){return e||f[t]||i.replace(":","")})},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(t,u,d){var l,h=$.p(u),b=M(t),f=6e4*(b.utcOffset()-this.utcOffset()),m=this-b,g=$.m(this,b);return g=(l={},l[c]=g/12,l[r]=g,l[a]=g/3,l[s]=(m-f)/6048e5,l[o]=(m-f)/864e5,l[i]=m/36e5,l[n]=m/6e4,l[e]=m/1e3,l)[h]||m,d?g:$.a(g)},b.daysInMonth=function(){return this.endOf(r).$D},b.$locale=function(){return g[this.$L]},b.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=v(t,e,!0);return i&&(n.$L=i),n},b.clone=function(){return $.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},h}(),y=w.prototype;return M.prototype=y,[["$ms",t],["$s",e],["$m",n],["$H",i],["$W",o],["$M",r],["$y",c],["$D",u]].forEach(function(t){y[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),M.extend=function(t,e){return t.$i||(t(e,w,M),t.$i=!0),M},M.locale=v,M.isDayjs=p,M.unix=function(t){return M(1e3*t)},M.en=g[m],M.Ls=g,M.p={},M}()},sZOn:function(t,e,n){"use strict";n.r(e),n.d(e,"DocumentosPageModule",function(){return k});var i=n("ofXK"),o=n("3Pt+"),s=n("TEn/"),r=n("tyNb"),a=n("mrSG"),c=n("fXoL"),u=n("VEy+"),d=n("4WDQ"),l=n("QTu/"),h=n("Wgwc"),b=n.n(h),f=(n("4HKe"),n("13Ln")),m=n.n(f),g=n("QgiU"),p=n.n(g);function v(t,e){if(1&t&&(c.Mb(0,"ion-text",6),c.Mb(1,"i"),c.pc(2),c.Lb(),c.Lb()),2&t){const t=c.Wb(2);c.xb(2),c.sc("Por: ",t.dataDoc.member.names||""," ",t.dataDoc.member.lastNames||"","")}}function M(t,e){if(1&t){const t=c.Nb();c.Mb(0,"ion-col",12),c.Mb(1,"ion-button",13),c.Ub("click",function(){c.ic(t);const e=c.Wb(2);return e.confirmDelete(e.dataDoc._id)}),c.Kb(2,"ion-icon",14),c.Mb(3,"ion-text"),c.pc(4," Borrar "),c.Lb(),c.Lb(),c.Lb()}}const $=function(){return{"background-image":"url(/assets/icon/pdf.svg)"}};function w(t,e){if(1&t){const t=c.Nb();c.Mb(0,"ion-card"),c.Mb(1,"ion-card-content"),c.Mb(2,"ion-row"),c.Mb(3,"ion-col"),c.Kb(4,"div",1),c.Lb(),c.Mb(5,"ion-col",2),c.Mb(6,"ion-row"),c.Mb(7,"ion-col",3),c.Mb(8,"ion-text",4),c.Mb(9,"h2"),c.pc(10),c.Lb(),c.Lb(),c.Lb(),c.Mb(11,"ion-col",3),c.nc(12,v,3,2,"ion-text",5),c.Kb(13,"br"),c.Mb(14,"ion-text",6),c.Mb(15,"i"),c.pc(16),c.Lb(),c.Lb(),c.Kb(17,"br"),c.Mb(18,"ion-text",6),c.Mb(19,"i"),c.pc(20),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Mb(21,"ion-col",7),c.Mb(22,"ion-row"),c.nc(23,M,5,0,"ion-col",8),c.Mb(24,"ion-col",9),c.Mb(25,"ion-button",10),c.Ub("click",function(){return c.ic(t),c.Wb().showPdf()}),c.Kb(26,"ion-icon",11),c.Mb(27,"ion-text"),c.pc(28," Ver PDF "),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()}if(2&t){const t=c.Wb();c.xb(4),c.Zb("ngStyle",c.dc(10,$)),c.xb(6),c.qc(t.dataDoc.title||"Documento"),c.xb(2),c.Zb("ngIf",t.dataDoc.member),c.xb(4),c.rc("Para: ",t.dataDoc.roles||"",""),c.xb(4),c.rc("Fecha: ",t.dataDoc.created_at,""),c.xb(3),c.Zb("ngIf",t.showButtonsOwn),c.xb(1),c.zb(t.showButtonsOwn?"ion-text-center":"ion-text-end"),c.ac("size",t.showButtonsOwn?"6":"12")}}let y=(()=>{class t{constructor(t){this.globalSer=t,this.showButtonsOwn=!1,this.dataDoc=null,b.a.extend(m.a),b.a.extend(p.a)}ngOnInit(){var t;if(this.data&&this.data.created_at){let e="";const n=["Administradores","Pastores","Supervisores","L\xedderes"];null===(t=this.data.roles)||void 0===t||t.forEach(t=>{const i=n[t];e+=e?", "+i:i}),this.data.roles=e,this.dataDoc=this.data,this.dataDoc.created_at=b.a.unix(this.data.created_at).locale("es").format("DD [de] MMMM [de] YYYY")}}confirmDelete(t){return Object(a.a)(this,void 0,void 0,function*(){yield this.globalSer.alertConfirm({header:"\xa1Confirme!",message:"\xbfEst\xe1 seguro qu\xe9 desea eliminar este documento?",confirmAction:()=>this.handleRemove(t)})})}showPdf(){return Object(a.a)(this,void 0,void 0,function*(){null===window||void 0===window||window.open(this.data.urlDoc,"_system")})}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(d.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-documentos-card"]],inputs:{data:"data",showButtonsOwn:"showButtonsOwn",handleRemove:"handleRemove"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"img-rounded-icon",3,"ngStyle"],["size","10"],["size","12"],["color","primary"],["color","medium",4,"ngIf"],["color","medium"],["size","12",1,"ion-text-center"],["size","6","class","ion-text-center",4,"ngIf"],[3,"size"],["size","small",3,"click"],["name","eye-outline","slot","start"],["size","6",1,"ion-text-center"],["size","small","color","danger",3,"click"],["name","trash-outline","slot","start"]],template:function(t,e){1&t&&c.nc(0,w,29,11,"ion-card",0),2&t&&c.Zb("ngIf",e.dataDoc)},directives:[i.i,s.g,s.h,s.E,s.n,i.j,s.K,s.e,s.s],styles:[".img-rounded-icon[_ngcontent-%COMP%]{height:40px;width:40px;background-size:contain!important;background-repeat:no-repeat;background-position:50%!important;margin:5px auto}"]}),t})();function D(t,e){if(1&t&&(c.Mb(0,"ion-col",6),c.Kb(1,"app-documentos-card",7),c.Lb()),2&t){const t=e.$implicit,n=c.Wb(2);c.xb(1),c.Zb("data",t)("showButtonsOwn",!0)("handleRemove",n.removeDocument)}}function S(t,e){if(1&t&&(c.Mb(0,"ion-row"),c.nc(1,D,2,3,"ion-col",5),c.Lb()),2&t){const t=c.Wb();c.xb(1),c.Zb("ngForOf",t.list)}}function L(t,e){1&t&&(c.Mb(0,"ion-row"),c.Mb(1,"ion-col",8),c.Mb(2,"ion-card",9),c.Mb(3,"ion-text",10),c.Mb(4,"p",11),c.Kb(5,"ion-icon",12),c.pc(6," No se ha compartido ning\xfan documento. "),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb())}const O=[{path:"",component:(()=>{class t{constructor(t,e,n,i){this.documentosService=t,this.globalSer=e,this.navCtrl=n,this.cookiesService=i,this.documents=null,this.list=null,this.showOwn=!1,this.userData=null,this.removeDocument=t=>{this.deleteDocument(t)}}ngOnInit(){}ionViewWillEnter(){return Object(a.a)(this,void 0,void 0,function*(){this.userData||(this.userData=yield this.cookiesService.getCookie("data")),this.getDocuments()})}getDocuments(){return Object(a.a)(this,void 0,void 0,function*(){yield this.globalSer.presentLoading();const t=yield this.documentosService.getResources();t&&!t.error?(this.documents=t,this.getListToShow(),yield this.globalSer.dismissLoading()):t&&t.error?(yield this.globalSer.dismissLoading(),yield this.globalSer.errorSession()):yield this.globalSer.dismissLoading()})}deleteDocument(t){return Object(a.a)(this,void 0,void 0,function*(){yield this.globalSer.presentLoading();const e=yield this.documentosService.deleteResources(t);e&&!e.error?(this.documents=this.documents.filter(e=>e._id!==t),this.getListToShow(),yield this.globalSer.dismissLoading(),yield this.globalSer.presentAlert("\xa1\xc9xito!","Se ha eliminado el documento exitosamente.")):e&&e.error?(yield this.globalSer.dismissLoading(),yield this.globalSer.errorSession()):yield this.globalSer.dismissLoading()})}getListToShow(){this.list=this.showOwn?this.documents.filter(t=>{var e;return(null===(e=t.user)||void 0===e?void 0:e._id)===this.userData._id}):this.documents}goToCreate(){return Object(a.a)(this,void 0,void 0,function*(){yield this.navCtrl.navigateForward("/documentos/subir")})}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(u.a),c.Jb(d.a),c.Jb(s.U),c.Jb(l.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-documentos"]],decls:13,vars:2,consts:[["slot","end"],["color","primary",3,"click"],["name","add-outline","slot","start"],[4,"ngIf","ngIfElse"],["noDocs",""],["size","12","sizeSm","6",4,"ngFor","ngForOf"],["size","12","sizeSm","6"],[3,"data","showButtonsOwn","handleRemove"],["size","12"],[1,"ion-no-padding","ion-margin-top","ion-margin-bottom"],["color","medium"],[1,"ion-text-center"],["name","alert-circle-outline"]],template:function(t,e){if(1&t&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-title"),c.pc(3,"Documentos compartidos"),c.Lb(),c.Mb(4,"ion-buttons",0),c.Mb(5,"ion-button",1),c.Ub("click",function(){return e.goToCreate()}),c.Kb(6,"ion-icon",2),c.Mb(7,"ion-text"),c.pc(8,"Agregar"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Mb(9,"ion-content"),c.nc(10,S,2,1,"ion-row",3),c.nc(11,L,7,0,"ng-template",null,4,c.oc),c.Lb()),2&t){const t=c.hc(12);c.xb(10),c.Zb("ngIf",(null==e.list?null:e.list.length)>0)("ngIfElse",t)}},directives:[s.r,s.P,s.N,s.f,s.e,s.s,s.K,s.o,i.i,s.E,i.h,s.n,y,s.g],styles:[""]}),t})()},{path:"subir",loadChildren:()=>n.e(34).then(n.bind(null,"hGtv")).then(t=>t.SubirPageModule)}];let x=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[r.j.forChild(O)],r.j]}),t})();var _=n("j1ZV");let k=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[i.b,o.a,s.Q,x,_.a]]}),t})()}}]);