(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{TjVE:function(t,e,n){"use strict";n.r(e),n.d(e,"EventosPageModule",function(){return W});var i=n("ofXK"),r=n("3Pt+"),o=n("TEn/"),s=n("tyNb"),a=n("mrSG"),c=n("fXoL"),u=n("ykbS"),l=n("4WDQ"),d=n("Wgwc"),h=n.n(d),b=n("13Ln"),f=n.n(b),v=(n("4HKe"),n("QgiU")),m=n.n(v);const g=function(t){return{backgroundImage:t,height:"150px"}};function p(t,e){if(1&t&&c.Kb(0,"ion-col",10),2&t){const t=c.Wb(2);c.Zb("ngStyle",c.ec(1,g,"url("+t.eventData.picture+")"))}}function M(t,e){1&t&&(c.Mb(0,"ion-col",11),c.Kb(1,"img",12),c.Lb()),2&t&&(c.xb(1),c.Zb("src","/assets/icon/evento_lista.svg",c.kc))}const y=function(){return{minHeight:"35px"}};function D(t,e){if(1&t){const t=c.Nb();c.Mb(0,"ion-card",1),c.Ub("click",function(){c.ic(t);const e=c.Wb();return e.goToDetails(e.eventData._id)}),c.Mb(1,"ion-card-content",2),c.Mb(2,"ion-row"),c.nc(3,p,1,3,"ion-col",3),c.nc(4,M,2,1,"ion-col",4),c.Mb(5,"ion-col",5),c.Mb(6,"ion-text",6),c.Mb(7,"h3",7),c.pc(8),c.Lb(),c.Lb(),c.Mb(9,"ion-text"),c.Mb(10,"b"),c.pc(11,"Fecha:"),c.Lb(),c.pc(12),c.Lb(),c.Kb(13,"br"),c.Mb(14,"ion-text",8),c.Mb(15,"i",9),c.pc(16,"Clic para m\xe1s informaci\xf3n."),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()}if(2&t){const t=c.Wb();c.xb(3),c.Zb("ngIf",t.eventData.picture),c.xb(1),c.Zb("ngIf",!t.eventData.picture),c.xb(3),c.mc(c.dc(7,y)),c.Zb("title",t.eventData.titleLarge),c.xb(1),c.rc(" ",t.eventData.title?t.eventData.title:""," "),c.xb(4),c.rc(" ",t.eventData.date?t.eventData.date:"","")}}let $=(()=>{class t{constructor(t){this.router=t,this.eventData={_id:null,title:null,titleLarge:null,user:null,description:null,date:null,initHour:null,endHour:null},h.a.extend(f.a),h.a.extend(m.a)}ngOnInit(){var t;this.data&&(this.eventData.title=(null===(t=this.data.title)||void 0===t?void 0:t.length)>40?this.data.title.substr(0,40)+"...":this.data.title,this.eventData._id=this.data._id,this.eventData.titleLarge=this.data.title,this.eventData.user=this.data.user,this.eventData.description=this.data.description,this.eventData.picture=this.data.picture,this.eventData.date=h()(this.data.date).locale("es").format("dddd, DD [de] MMMM [de] YYYY"),this.eventData.initHour=h()(`${this.data.date} ${this.eventData.initHour}`).format("hh:mm a"),this.eventData.endHour=this.data.endHour?h()(`${this.data.date} ${this.data.endHour}`).format("hh:mm a"):null)}goToDetails(t=null){return Object(a.a)(this,void 0,void 0,function*(){yield this.router.navigate(["eventos/"+t])})}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(s.g))},t.\u0275cmp=c.Db({type:t,selectors:[["app-eventcard"]],inputs:{data:"data"},decls:1,vars:1,consts:[["class","min-height-120 ion-no-margin ion-margin-bottom",3,"click",4,"ngIf"],[1,"min-height-120","ion-no-margin","ion-margin-bottom",3,"click"],[1,"ion-no-margin","ion-no-padding"],["size","12","class","banner-event",3,"ngStyle",4,"ngIf"],["size","12","class","ion-text-center",4,"ngIf"],["size","12"],["color","primary",1,"ion-margin-top","ion-margin-bottom"],[3,"title"],[1,"ion-margin-top"],[1,"toSmall"],["size","12",1,"banner-event",3,"ngStyle"],["size","12",1,"ion-text-center"],["height","150",1,"",3,"src"]],template:function(t,e){1&t&&c.nc(0,D,17,8,"ion-card",0),2&t&&c.Zb("ngIf",e.eventData._id)},directives:[i.i,o.g,o.h,o.E,o.n,o.J,i.j],styles:[".min-height-120[_ngcontent-%COMP%]{min-height:120px!important}"]}),t})();function L(t,e){1&t&&c.Kb(0,"ion-icon",12)}function S(t,e){1&t&&c.Kb(0,"ion-icon",13)}function x(t,e){if(1&t){const t=c.Nb();c.Mb(0,"ion-card"),c.Mb(1,"ion-card-content"),c.Mb(2,"ion-row"),c.Mb(3,"ion-col",14),c.Mb(4,"ion-item"),c.Mb(5,"ion-label",15),c.pc(6,"Ordenar por:"),c.Lb(),c.Mb(7,"ion-input",16),c.Ub("click",function(){return c.ic(t),c.Wb().setOrderData()}),c.Lb(),c.Lb(),c.Lb(),c.Mb(8,"ion-col",14),c.Mb(9,"ion-item"),c.Mb(10,"ion-label",15),c.pc(11,"A partir de:"),c.Lb(),c.Mb(12,"ion-datetime",17),c.Ub("ionChange",function(e){return c.ic(t),c.Wb().setDate("initDate",e)}),c.Lb(),c.Lb(),c.Lb(),c.Mb(13,"ion-col",14),c.Mb(14,"ion-item"),c.Mb(15,"ion-label",15),c.pc(16,"Hasta:"),c.Lb(),c.Mb(17,"ion-datetime",17),c.Ub("ionChange",function(e){return c.ic(t),c.Wb().setDate("endDate",e)}),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Mb(18,"ion-row",18),c.Mb(19,"ion-col",19),c.Mb(20,"ion-button",20),c.Ub("click",function(){return c.ic(t),c.Wb().resetQueryParams()}),c.Kb(21,"ion-icon",21),c.Mb(22,"ion-text"),c.pc(23,"Limpiar"),c.Lb(),c.Lb(),c.Lb(),c.Mb(24,"ion-col",19),c.Mb(25,"ion-button",22),c.Ub("click",function(){return c.ic(t),c.Wb().getEventsList()}),c.Kb(26,"ion-icon",23),c.Mb(27,"ion-text"),c.pc(28,"Aplicar"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()}if(2&t){const t=c.Wb();c.xb(7),c.Zb("readonly",!0)("value",-1===t.queryParams.value?"Fecha ascendente":"Fecha descendente"),c.xb(5),c.Zb("value",t.queryParams.initDate),c.xb(5),c.Zb("value",t.queryParams.endDate)}}function w(t,e){if(1&t&&(c.Mb(0,"ion-col",25),c.Kb(1,"app-eventcard",26),c.Lb()),2&t){const t=e.$implicit;c.xb(1),c.Zb("data",t)}}function O(t,e){if(1&t&&(c.Mb(0,"div"),c.Mb(1,"ion-row"),c.nc(2,w,2,1,"ion-col",24),c.Lb(),c.Lb()),2&t){const t=c.Wb();c.xb(2),c.Zb("ngForOf",t.events)}}function k(t,e){1&t&&(c.Mb(0,"ion-card",27),c.Mb(1,"ion-text",28),c.Mb(2,"p",29),c.Kb(3,"ion-icon",30),c.pc(4," No se encontraron eventos. "),c.Lb(),c.Lb(),c.Lb())}const _=[{path:"",component:(()=>{class t{constructor(t,e,n,i,r){this.alertCtrl=t,this.eventsService=e,this.globalSer=n,this.modalController=i,this.router=r,this.queryParams={input:"date",value:-1,limit:50,initDate:null,endDate:null},this.formData={_id:null,title:null,description:null,date:null,initHour:null,endHour:null,toRoles:[],rolesSelected:""},this.roles=["Administradores","Pastores","Supervisores","L\xedderes","Personas"],this.events=[],this.showFilter=!1,this.rolesSelected=""}ngOnInit(){return Object(a.a)(this,void 0,void 0,function*(){})}ionViewDidEnter(){return Object(a.a)(this,void 0,void 0,function*(){this.globalSer.checkSession()?yield this.getEventsList():yield this.router.navigate(["/ingresar"])})}getEventsList(){return Object(a.a)(this,void 0,void 0,function*(){this.showFilter&&(this.showFilter=!1),yield this.globalSer.presentLoading();const t=yield this.eventsService.getEvents(this.queryParams);t&&!t.error?(this.events=t,yield this.globalSer.dismissLoading()):t&&t.error?yield this.globalSer.errorSession():yield this.globalSer.dismissLoading()})}setShowFilter(){this.showFilter=!this.showFilter}setOrderData(){return Object(a.a)(this,void 0,void 0,function*(){yield this.globalSer.alertWithList({header:"Seleccione",inputs:[{name:"order-asc",type:"radio",label:"Ant\xedguas primero",value:1,checked:1===this.queryParams.value},{name:"order-desc",type:"radio",label:"Pr\xf3ximas primero",value:-1,checked:-1===this.queryParams.value}],confirmAction:t=>{this.queryParams.value=t}})})}setDate(t,e){var n,i;this.queryParams[t]=(null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.value)?(""+(null===(i=null==e?void 0:e.target)||void 0===i?void 0:i.value)).substr(0,10):null}getRoles(t){let e="";if(t.length>0)for(const n of t)""===e?e=this.roles[n]:e+=", "+this.roles[n];return e}resetQueryParams(){this.queryParams.input="date",this.queryParams.value=-1,this.queryParams.initDate=null,this.queryParams.endDate=null}goToCreate(){return Object(a.a)(this,void 0,void 0,function*(){yield this.router.navigate(["eventos/crear-evento"])})}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(o.a),c.Jb(u.a),c.Jb(l.a),c.Jb(o.S),c.Jb(s.g))},t.\u0275cmp=c.Db({type:t,selectors:[["app-eventos"]],decls:23,vars:6,consts:[["slot","end"],["color","primary",3,"click"],["name","add-outline","slot","start"],[1,"ion-margin"],[3,"size"],[1,"ion-margin-bottom"],["color","medium",3,"click"],["name","filter-outline","slot","start",4,"ngIf"],["name","close-outline","slot","start",4,"ngIf"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["noEvents",""],["name","filter-outline","slot","start"],["name","close-outline","slot","start"],["size","12","size-sm","4"],["position","floating","color","medium"],[1,"no-selected-text","no-selected-text",3,"readonly","value","click"],["displayFormat","DD/MM/YYYY","min","2021-01-01","doneText","Listo","cancelText","Cancelar",3,"value","ionChange"],[1,"ion-margin-top"],["size","6",1,"ion-justify-content-center"],["color","medium","expand","full",1,"ion-text-center",3,"click"],["name","trash-outline"],["color","primary","expand","full",1,"ion-text-center",3,"click"],["name","checkmark-outline"],["size","12","size-sm","6","size-md","4",4,"ngFor","ngForOf"],["size","12","size-sm","6","size-md","4"],[3,"data"],[1,"ion-no-padding"],["color","medium"],[1,"ion-margin-top","ion-padding-top","ion-text-center","no-selected-text"],["name","alert-circle-outline"]],template:function(t,e){if(1&t&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-title"),c.pc(3,"Eventos"),c.Lb(),c.Mb(4,"ion-buttons",0),c.Mb(5,"ion-button",1),c.Ub("click",function(){return e.goToCreate()}),c.Kb(6,"ion-icon",2),c.Mb(7,"ion-text"),c.pc(8,"Agregar evento"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Mb(9,"ion-content"),c.Mb(10,"ion-row",3),c.Mb(11,"ion-col",4),c.Mb(12,"div"),c.Mb(13,"div",5),c.Mb(14,"ion-button",6),c.Ub("click",function(){return e.setShowFilter()}),c.nc(15,L,1,0,"ion-icon",7),c.nc(16,S,1,0,"ion-icon",8),c.Mb(17,"ion-text"),c.pc(18,"Filtrar"),c.Lb(),c.Lb(),c.Lb(),c.nc(19,x,29,4,"ion-card",9),c.nc(20,O,3,1,"div",10),c.nc(21,k,5,0,"ng-template",null,11,c.oc),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&t){const t=c.hc(22);c.xb(11),c.Zb("size",12),c.xb(4),c.Zb("ngIf",!e.showFilter),c.xb(1),c.Zb("ngIf",e.showFilter),c.xb(3),c.Zb("ngIf",e.showFilter),c.xb(1),c.Zb("ngIf",e.events&&e.events.length>0)("ngIfElse",t)}},directives:[o.r,o.O,o.M,o.f,o.e,o.s,o.J,o.o,o.E,o.n,i.i,o.g,o.h,o.v,o.w,o.u,o.X,o.p,o.W,i.h,$],styles:[".max-width-640{--max-width:640px}  .ck-editor__editable_inline{min-height:250px;color:#333!important}"]}),t})()},{path:"crear-evento",loadChildren:()=>Promise.all([n.e(2),n.e(7),n.e(39)]).then(n.bind(null,"e1V3")).then(t=>t.CrearEventoPageModule)},{path:":_id",loadChildren:()=>Promise.all([n.e(2),n.e(7),n.e(40)]).then(n.bind(null,"Tmey")).then(t=>t.DetallesEventoPageModule)}];let I=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[s.j.forChild(_)],s.j]}),t})();var P=n("j1ZV"),H=n("zioG");let W=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[i.b,r.a,o.P,I,P.a,H.b]]}),t})()},Wgwc:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",r="day",o="week",s="month",a="quarter",c="year",u="date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},b=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},f={s:b,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+b(i,2,"0")+":"+b(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,s),o=n-r<0,a=e.clone().add(i+(o?-1:1),s);return+(-(i+(n-r)/(o?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(l){return{M:s,y:c,w:o,d:r,D:u,h:i,m:n,s:e,ms:t,Q:a}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",m={};m[v]=h;var g=function(t){return t instanceof D},p=function(t,e,n){var i;if(!t)return v;if("string"==typeof t)m[t]&&(i=t),e&&(m[t]=e,i=t);else{var r=t.name;m[r]=t,i=r}return!n&&i&&(v=i),i||!n&&v},M=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},y=f;y.l=p,y.i=g,y.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function h(t){this.$L=p(t.locale,null,!0),this.parse(t)}var b=h.prototype;return b.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(l);if(i){var r=i[2]-1||0,o=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},b.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},b.$utils=function(){return y},b.isValid=function(){return!("Invalid Date"===this.$d.toString())},b.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},b.isAfter=function(t,e){return M(t)<this.startOf(e)},b.isBefore=function(t,e){return this.endOf(e)<M(t)},b.$g=function(t,e,n){return y.u(t)?this[e]:this.set(n,t)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(t,a){var l=this,d=!!y.u(a)||a,h=y.p(t),b=function(t,e){var n=y.w(l.$u?Date.UTC(l.$y,e,t):new Date(l.$y,e,t),l);return d?n:n.endOf(r)},f=function(t,e){return y.w(l.toDate()[t].apply(l.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),l)},v=this.$W,m=this.$M,g=this.$D,p="set"+(this.$u?"UTC":"");switch(h){case c:return d?b(1,0):b(31,11);case s:return d?b(1,m):b(0,m+1);case o:var M=this.$locale().weekStart||0,D=(v<M?v+7:v)-M;return b(d?g-D:g+(6-D),m);case r:case u:return f(p+"Hours",0);case i:return f(p+"Minutes",1);case n:return f(p+"Seconds",2);case e:return f(p+"Milliseconds",3);default:return this.clone()}},b.endOf=function(t){return this.startOf(t,!1)},b.$set=function(o,a){var l,d=y.p(o),h="set"+(this.$u?"UTC":""),b=(l={},l[r]=h+"Date",l[u]=h+"Date",l[s]=h+"Month",l[c]=h+"FullYear",l[i]=h+"Hours",l[n]=h+"Minutes",l[e]=h+"Seconds",l[t]=h+"Milliseconds",l)[d],f=d===r?this.$D+(a-this.$W):a;if(d===s||d===c){var v=this.clone().set(u,1);v.$d[b](f),v.init(),this.$d=v.set(u,Math.min(this.$D,v.daysInMonth())).$d}else b&&this.$d[b](f);return this.init(),this},b.set=function(t,e){return this.clone().$set(t,e)},b.get=function(t){return this[y.p(t)]()},b.add=function(t,a){var u,l=this;t=Number(t);var d=y.p(a),h=function(e){var n=M(l);return y.w(n.date(n.date()+Math.round(e*t)),l)};if(d===s)return this.set(s,this.$M+t);if(d===c)return this.set(c,this.$y+t);if(d===r)return h(1);if(d===o)return h(7);var b=(u={},u[n]=6e4,u[i]=36e5,u[e]=1e3,u)[d]||1,f=this.$d.getTime()+t*b;return y.w(f,this)},b.subtract=function(t,e){return this.add(-1*t,e)},b.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=y.z(this),r=this.$locale(),o=this.$H,s=this.$m,a=this.$M,c=r.weekdays,u=r.months,l=function(t,i,r,o){return t&&(t[i]||t(e,n))||r[i].substr(0,o)},h=function(t){return y.s(o%12||12,t,"0")},b=r.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:y.s(a+1,2,"0"),MMM:l(r.monthsShort,a,u,3),MMMM:l(u,a),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:l(r.weekdaysMin,this.$W,c,2),ddd:l(r.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(o),HH:y.s(o,2,"0"),h:h(1),hh:h(2),a:b(o,s,!0),A:b(o,s,!1),m:String(s),mm:y.s(s,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:i};return n.replace(d,function(t,e){return e||f[t]||i.replace(":","")})},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(t,u,l){var d,h=y.p(u),b=M(t),f=6e4*(b.utcOffset()-this.utcOffset()),v=this-b,m=y.m(this,b);return m=(d={},d[c]=m/12,d[s]=m,d[a]=m/3,d[o]=(v-f)/6048e5,d[r]=(v-f)/864e5,d[i]=v/36e5,d[n]=v/6e4,d[e]=v/1e3,d)[h]||v,l?m:y.a(m)},b.daysInMonth=function(){return this.endOf(s).$D},b.$locale=function(){return m[this.$L]},b.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=p(t,e,!0);return i&&(n.$L=i),n},b.clone=function(){return y.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},h}(),$=D.prototype;return M.prototype=$,[["$ms",t],["$s",e],["$m",n],["$H",i],["$W",r],["$M",s],["$y",c],["$D",u]].forEach(function(t){$[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),M.extend=function(t,e){return t.$i||(t(e,D,M),t.$i=!0),M},M.locale=p,M.isDayjs=g,M.unix=function(t){return M(1e3*t)},M.en=m[v],M.Ls=m,M.p={},M}()},ykbS:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("mrSG"),r=n("fXoL"),o=n("1Ldg"),s=n("4WDQ");let a=(()=>{class t{constructor(t,e){this.axios=t,this.globalSer=e}getEvents(t={}){return Object(i.a)(this,void 0,void 0,function*(){const e=yield this.axios.getData("/admin/events",t);return e&&e.success?e.data.events:this.globalSer.altResponse(e)})}getDetailsEvent(t){return Object(i.a)(this,void 0,void 0,function*(){const e=yield this.axios.getData("/admin/events/"+t);return e&&e.success?e.data.event||{}:this.globalSer.altResponse(e)})}addEvent(t){return Object(i.a)(this,void 0,void 0,function*(){const e=yield this.axios.postData("/admin/events",t);return e&&e.success?e.data:this.globalSer.altResponse(e)})}updateEvent(t,e){return Object(i.a)(this,void 0,void 0,function*(){const n=yield this.axios.putData("/admin/events/"+t,e);return n&&n.success?n.data.msg:this.globalSer.altResponse(n)})}deleteEvent(t){return Object(i.a)(this,void 0,void 0,function*(){const e=yield this.axios.deleteData("/admin/events/"+t);return e&&e.success?e.data.msg:this.globalSer.altResponse(e)})}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(o.a),r.Qb(s.a))},t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);