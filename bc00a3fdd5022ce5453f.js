(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{116:function(t,e,n){},118:function(t,e,n){},119:function(t,e,n){},158:function(t,e,n){"use strict";var r=n(219);e.a=function(t,e){e("nuxtI18nVersion",r.dependencies["nuxt-i18n"])}},160:function(t,e,n){"use strict";var r=n(0),o=n(161),c={theme:{dark:!1}};r.a.use(o.a,{});e.a=function(t){var e="function"==typeof c?c(t):c;e.icons=e.icons||{},e.icons.iconfont="mdi";var n=new o.a(e);t.app.vuetify=n,t.$vuetify=n.framework}},219:function(t){t.exports=JSON.parse('{"name":"shallot-paste-app","version":"1.0.0","description":"Shallot Paste Company Website","author":"Devara Eko","private":true,"scripts":{"dev":"nuxt","build":"nuxt build","start":"nuxt start","generate":"nuxt generate"},"dependencies":{"@nuxtjs/axios":"^5.11.0","@nuxtjs/proxy":"^2.0.0","@nuxtjs/sitemap":"^2.3.2","cross-env":"^7.0.2","nuxt":"^2.12.2","nuxt-i18n":"^6.12.2","storyblok-nuxt":"1.2.0"},"devDependencies":{"@nuxtjs/google-analytics":"^2.3.0","@nuxtjs/vuetify":"^1.11.2","eslint-config-prettier":"^6.11.0","eslint-plugin-prettier":"^3.1.3","prettier":"^2.0.5"}}')},221:function(t,e,n){"use strict";n(22);var r={name:"Footer",computed:{device:function(){return this.$vuetify.breakpoint.name}},data:function(){return{mobile:!1}},watch:{device:function(){this.mobile="xs"==this.device}},mounted:function(){this.mobile="xs"==this.$vuetify.breakpoint.name}},o=(n(255),n(52)),c=n(72),l=n.n(c),f=n(169),d=n(323),v=n(324),m=n(325),h=n(145),_=n(326),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"d-inline-block elevation-8 pt-8 pb-0 px-6 px-sm-8",attrs:{light:"",color:"white"}},[n("v-row",{attrs:{justify:"center","justify-sm":"center"}},[n("v-col",{staticClass:"shallot__footer-content d-flex justify-center",attrs:{cols:"12",sm:"8",md:"3",lg:"3"}},[n("div",{staticClass:"font-weight-light px-md-4"},[t._v("\n        "+t._s(t.$t("footer.text"))+"\n      ")])]),t._v(" "),n("v-col",{staticClass:"shallot__footer-content d-flex justify-start justify-sm-center",attrs:{cols:"12",sm:"5",md:"3",lg:"3"}},[n("div",[n("div",{staticClass:"footer-subtitle"},[t._v("\n          "+t._s(t.$t("footer.links"))+"\n        ")]),t._v(" "),n("div",[n("ul",[n("li",[n("nuxt-link",{attrs:{to:t.localePath("about-us")}},[t._v(t._s(t.$t("navbar.about")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:t.localePath("products")}},[t._v(t._s(t.$t("navbar.products")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:t.localePath("recipes")}},[t._v(t._s(t.$t("navbar.recipes")))])],1)])])])]),t._v(" "),n("v-col",{staticClass:"shallot__footer-content d-flex justify-start justify-sm-center",attrs:{cols:"12",sm:"6",md:"6",lg:"6"}},[n("div",[n("div",{staticClass:"footer-subtitle"},[t._v("\n          "+t._s(t.$t("footer.contact_us"))+"\n        ")]),t._v(" "),n("div",[n("ul",[n("li",[n("v-icon",[t._v("mdi-home-city-outline")]),t._v("  : Jl Desa Sidamulya, RT 01, RW 03, Kec. Wanasari – Brebes 52252\n            ")],1),t._v(" "),n("li",[n("v-icon",[t._v("mdi-phone")]),t._v("  : +62 813 8688 6664\n            ")],1),t._v(" "),n("li",[n("v-icon",[t._v("mdi-gmail")]),t._v("  : sinergibrebesinovatif@gmail.com\n            ")],1),t._v(" "),n("li",[n("v-icon",[t._v("mdi-email-outline")]),t._v("  : chat@shallot-paste.com\n            ")],1)])])])])],1),t._v(" "),n("v-divider"),t._v(" "),n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"d-flex justify-center justify-md-start",attrs:{cols:"12",sm:"12",md:"8",lg:"6"}},[n("div",{staticClass:"font-weight-light text-center px-4"},[n("v-icon",[t._v("mdi-copyright")]),t._v(" 2020 — Shallot Paste. Manufactured by PT Sinergi Brebes Inovatif.\n      ")],1)]),t._v(" "),n("v-col",{staticClass:"d-flex justify-center justify-md-end",attrs:{cols:"12",sm:"12",md:"4",lg:"6",order:"first","order-md":"last"}},[n("v-btn",{staticClass:"mx-2",attrs:{color:"orange darken-2",icon:"",href:"https://www.facebook.com/shallotpaste/",target:"_blank"}},[n("v-icon",{attrs:{large:""}},[t._v("mdi-facebook")])],1),t._v(" "),n("v-btn",{staticClass:"mx-2",attrs:{color:"orange darken-2",icon:"",href:"https://www.instagram.com/pastabawang/",target:"_blank"}},[n("v-icon",{attrs:{large:""}},[t._v("mdi-instagram")])],1),t._v(" "),n("v-btn",{staticClass:"mx-2",attrs:{color:"orange darken-2",icon:"",href:"mailto:sinergibrebesinovatif@gmail.com",target:"_blank"}},[n("v-icon",{attrs:{large:""}},[t._v("mdi-gmail")])],1)],1)],1)],1)}),[],!1,null,"ce5bc7f2",null),x=component.exports;l()(component,{VBtn:f.a,VCol:d.a,VDivider:v.a,VFooter:m.a,VIcon:h.a,VRow:_.a});var y={name:"Layout",components:{Footer:x},computed:{showLocales:function(){return this.$i18n.locales}},data:function(){return{drawer:!1}}},w=(n(272),n(322)),j=n(327),C=n(328),$=n(329),k=n(330),O=n(331),P=n(123),E=n(332),V=n(147),R=n(94),S=n(148),A=n(69),N=n(333),D=Object(o.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-navigation-drawer",{attrs:{clipped:"",color:"orange darken-2",width:"285",fixed:"",right:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("div",{staticClass:"d-flex justify-center py-8"},[n("v-img",{attrs:{src:"/img/shallot-paste-logo.png","max-width":"125"}})],1),t._v(" "),n("v-list",[n("v-list-item",[n("v-btn-toggle",{attrs:{rounded:"",borderless:""}},[n("v-btn",{staticClass:"font-weight-bold",class:"en"==t.$i18n.locale?"white--text":"",attrs:{small:"",color:"en"==t.$i18n.locale?"orange":"",nuxt:"",to:t.switchLocalePath("en")}},[t._v("\n            EN\n          ")]),t._v(" "),n("v-btn",{staticClass:"font-weight-bold",class:"id"==t.$i18n.locale?"white--text":"",attrs:{small:"",color:"id"==t.$i18n.locale?"orange":"",nuxt:"",to:t.switchLocalePath("id")}},[t._v("\n            ID\n          ")])],1)],1)],1),t._v(" "),n("v-list",[n("v-list-item",{attrs:{exact:"",nuxt:"",to:t.localePath("index")}},[n("v-list-item-action",[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-home")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"white--text"},[t._v("\n            "+t._s(t.$t("navbar.home"))+"\n          ")])],1)],1),t._v(" "),n("v-list-item",{attrs:{nuxt:"",to:t.localePath("about-us")}},[n("v-list-item-action",[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-apps")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"white--text"},[t._v("\n            "+t._s(t.$t("navbar.about"))+"\n          ")])],1)],1),t._v(" "),n("v-list-item",{attrs:{nuxt:"",to:t.localePath("products")}},[n("v-list-item-action",[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-food-variant")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"white--text"},[t._v("\n            "+t._s(t.$t("navbar.products"))+"\n          ")])],1)],1),t._v(" "),n("v-list-item",{attrs:{nuxt:"",to:t.localePath("recipes")}},[n("v-list-item-action",[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-chef-hat")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"white--text"},[t._v("\n            "+t._s(t.$t("navbar.recipes"))+"\n          ")])],1)],1)],1),t._v(" "),n("v-divider",{staticClass:"my-3"}),t._v(" "),n("v-list",[n("v-list-item",[n("v-btn",{attrs:{nuxt:"",to:t.localePath("order"),dark:"",color:"orange"}},[n("v-icon",{attrs:{left:"",snall:""}},[t._v("mdi-shopping")]),t._v("  "+t._s(t.$t("navbar.order"))+"\n        ")],1)],1)],1)],1),t._v(" "),n("v-app-bar",{class:"index___en"==t.$nuxt.$route.name||"index___id"==t.$nuxt.$route.name?"transparent":"",attrs:{id:"shallot__header",app:"index___en"!=t.$nuxt.$route.name&&"index___id"!=t.$nuxt.$route.name,fixed:"",height:"80"}},[n("v-app-bar-nav-icon",{staticClass:"d-flex d-md-none",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("v-flex",{staticClass:"d-flex justify-center",attrs:{xs11:"",sm4:"",md2:"",lg3:""}},[n("nuxt-link",{staticClass:"d-block",attrs:{to:t.localePath("index")}},[n("v-img",{attrs:{src:"/img/shallot-paste-logo.png","max-width":"100"}})],1)],1),t._v(" "),n("v-flex",{staticClass:"d-none d-md-flex justify-start menu__btn",class:"index___en"==t.$nuxt.$route.name||"index___id"==t.$nuxt.$route.name?"menu__btn-home":"",attrs:{md6:"",lg5:"",id:"shallot__menu"}},[n("nuxt-link",{staticClass:"menu__item",attrs:{to:t.localePath("index")}},[t._v("\n          "+t._s(t.$t("navbar.home"))+"\n        ")]),t._v(" "),n("nuxt-link",{staticClass:"menu__item",attrs:{to:t.localePath("about-us")}},[t._v("\n          "+t._s(t.$t("navbar.about"))+"\n        ")]),t._v(" "),n("nuxt-link",{staticClass:"menu__item",attrs:{to:t.localePath("products")}},[t._v("\n          "+t._s(t.$t("navbar.products"))+"\n        ")]),t._v(" "),n("nuxt-link",{staticClass:"menu__item",attrs:{to:t.localePath("recipes")}},[t._v("\n          "+t._s(t.$t("navbar.recipes"))+"\n        ")])],1),t._v(" "),n("v-flex",{staticClass:"d-flex justify-end",attrs:{sm5:"",md2:"",lg2:""}},[n("v-btn",{staticClass:"d-none d-sm-flex font-weight-medium text-capitalize mr-2",attrs:{color:"orange darken-1",dark:"",nuxt:"",to:t.localePath("order")}},[n("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-shopping")]),t._v("\n          "+t._s(t.$t("navbar.order"))+"\n        ")],1)],1),t._v(" "),n("v-flex",{staticClass:"d-flex justify-end",attrs:{sm3:"",md1:"",lg1:""}},[n("v-btn-toggle",{staticClass:"d-none d-sm-flex elevation-2",attrs:{rounded:"",borderless:""}},[n("v-btn",{staticClass:"font-weight-bold",class:"en"==t.$i18n.locale?"white--text":"",attrs:{small:"",color:"en"==t.$i18n.locale?"orange darken-1":"",nuxt:"",to:t.switchLocalePath("en")}},[t._v("\n            EN\n          ")]),t._v(" "),n("v-btn",{staticClass:"font-weight-bold",class:"id"==t.$i18n.locale?"white--text":"",attrs:{small:"",color:"id"==t.$i18n.locale?"orange darken-1":"",nuxt:"",to:t.switchLocalePath("id")}},[t._v("\n            ID\n          ")])],1)],1)],1)],1),t._v(" "),n("v-content",[n("nuxt")],1),t._v(" "),n("Footer")],1)}),[],!1,null,"2ef2e5ac",null);e.a=D.exports;l()(D,{VApp:w.a,VAppBar:j.a,VAppBarNavIcon:C.a,VBtn:f.a,VBtnToggle:$.a,VContent:k.a,VDivider:v.a,VFlex:O.a,VIcon:h.a,VImg:P.a,VLayout:E.a,VList:V.a,VListItem:R.a,VListItemAction:S.a,VListItemContent:A.a,VListItemTitle:A.b,VNavigationDrawer:N.a})},252:function(t,e,n){"use strict";var r=n(116);n.n(r).a},255:function(t,e,n){"use strict";var r=n(118);n.n(r).a},272:function(t,e,n){"use strict";var r=n(119);n.n(r).a},321:function(t,e,n){t.exports=n(229)},4:function(t,e,n){"use strict";n.d(e,"k",(function(){return _})),n.d(e,"m",(function(){return x})),n.d(e,"l",(function(){return y})),n.d(e,"e",(function(){return w})),n.d(e,"b",(function(){return j})),n.d(e,"r",(function(){return C})),n.d(e,"g",(function(){return $})),n.d(e,"h",(function(){return k})),n.d(e,"d",(function(){return O})),n.d(e,"q",(function(){return P})),n.d(e,"j",(function(){return E})),n.d(e,"s",(function(){return R})),n.d(e,"n",(function(){return A})),n.d(e,"p",(function(){return N})),n.d(e,"f",(function(){return D})),n.d(e,"c",(function(){return I})),n.d(e,"i",(function(){return L})),n.d(e,"o",(function(){return T})),n.d(e,"a",(function(){return W}));n(9),n(44),n(7),n(42),n(31),n(32);var r=n(13),o=(n(45),n(63),n(113),n(23)),c=(n(15),n(16),n(196),n(248),n(43),n(41),n(12)),l=(n(38),n(6),n(5),n(8),n(22),n(1)),f=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function m(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function _(t){f.a.config.errorHandler&&f.a.config.errorHandler(t)}function x(t){return t.then((function(t){return t.default||t}))}function y(t){return t.$options&&"function"==typeof t.$options.fetch&&!t.$options.fetch.length}function w(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=t.$children||[],o=m(r);try{for(o.s();!(e=o.n()).done;){var c=e.value;c.$fetch?n.push(c):c.$children&&w(c,n)}}catch(t){o.e(t)}finally{o.f()}return n}function j(t,e){if(e||!t.options.__hasNuxtData){var n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){var data=n.call(this,this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),v(v({},data),e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function C(t){return t.options&&t._Ctor===t||(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=f.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file)),t}function $(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"components";return Array.prototype.concat.apply([],t.matched.map((function(t,r){return Object.keys(t[n]).map((function(o){return e&&e.push(r),t[n][o]}))})))}function k(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return $(t,e,"instances")}function O(t,e){return Array.prototype.concat.apply([],t.matched.map((function(t,n){return Object.keys(t.components).reduce((function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r}),[])})))}function P(t,e){return Promise.all(O(t,function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(n,r,o,c){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return o.components[c]=n=C(n),t.abrupt("return","function"==typeof e?e(n,r,o,c):n);case 6:case"end":return t.stop()}}),t)})));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function E(t){return V.apply(this,arguments)}function V(){return(V=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,P(e);case 4:return t.abrupt("return",v(v({},e),{},{meta:$(e).map((function(t,n){return v(v({},t.options.meta),(e.matched[n]||{}).meta)}))}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(t,e){return S.apply(this,arguments)}function S(){return(S=Object(c.a)(regeneratorRuntime.mark((function t(e,n){var c,l,f,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),n.ssrContext&&(e.context.ssrContext=n.ssrContext),e.context.redirect=function(t,path,n){if(t){e.context._redirected=!0;var r=Object(o.a)(path);if("number"==typeof t||"undefined"!==r&&"object"!==r||(n=path||{},path=t,r=Object(o.a)(path),t=302),"object"===r&&(path=e.router.resolve(path).route.fullPath),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=M(path,n),window.location.replace(path),new Error("ERR_REDIRECT");e.context.next({path:path,query:n,status:t})}},e.context.nuxtState=window.__NUXT__),t.next=3,Promise.all([E(n.route),E(n.from)]);case 3:c=t.sent,l=Object(r.a)(c,2),f=l[0],d=l[1],n.route&&(e.context.route=f),n.from&&(e.context.from=d),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!1,e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{};case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function A(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():N(t[0],e).then((function(){return A(t.slice(1),e)}))}function N(t,e){var n;return(n=2===t.length?new Promise((function(n){t(e,(function(t,data){t&&e.error(t),n(data=data||{})}))})):t(e))&&n instanceof Promise&&"function"==typeof n.then?n:Promise.resolve(n)}function D(base,t){var path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}function I(t,e){return function(t,e){for(var n=new Array(t.length),i=0;i<t.length;i++)"object"===Object(o.a)(t[i])&&(n[i]=new RegExp("^(?:"+t[i].pattern+")$",H(e)));return function(e,r){for(var path="",data=e||{},o=(r||{}).pretty?B:encodeURIComponent,c=0;c<t.length;c++){var l=t[c];if("string"!=typeof l){var f=data[l.name||"pathMatch"],d=void 0;if(null==f){if(l.optional){l.partial&&(path+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(Array.isArray(f)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var v=0;v<f.length;v++){if(d=o(f[v]),!n[c].test(d))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(d)+"`");path+=(0===v?l.prefix:l.delimiter)+d}}else{if(d=l.asterisk?B(f,!0):o(f),!n[c].test(d))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+d+'"');path+=l.prefix+d}}else path+=l}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",l=e&&e.delimiter||"/";for(;null!=(n=F.exec(t));){var f=n[0],d=n[1],v=n.index;if(path+=t.slice(c,v),c=v+f.length,d)path+=d[1];else{var m=t[c],h=n[2],_=n[3],x=n[4],y=n[5],w=n[6],j=n[7];path&&(r.push(path),path="");var C=null!=h&&null!=m&&m!==h,$="+"===w||"*"===w,k="?"===w||"*"===w,O=n[2]||l,pattern=x||y;r.push({name:_||o++,prefix:h||"",delimiter:O,optional:k,repeat:$,partial:C,asterisk:Boolean(j),pattern:pattern?U(pattern):j?".*":"[^"+J(O)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e),e)}function L(t,e){var n={},r=v(v({},t),e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function T(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return v(v({},t),{},{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var F=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function B(t,e){var n=e?/[?#]/g:/[/?#]/g;return encodeURI(t).replace(n,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function J(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function U(t){return t.replace(/([=!:$/()])/g,"\\$1")}function H(t){return t&&t.sensitive?"":"i"}function M(t,e){var n,o=t.indexOf("://");-1!==o?(n=t.substring(0,o),t=t.substring(o+3)):t.startsWith("//")&&(t=t.substring(2));var c,l=t.split("/"),f=(n?n+"://":"//")+l.shift(),path=l.filter(Boolean).join("/");if(2===(l=path.split("#")).length){var d=l,v=Object(r.a)(d,2);path=v[0],c=v[1]}return f+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(f+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map((function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map((function(t){return[e,"=",t].join("")})).join("&"):e+"="+n})).filter(Boolean).join("&")}(e)),f+=c?"#"+c:""}function W(t,e,n){t.$options[e]||(t.$options[e]=[]),t.$options[e].includes(n)||t.$options[e].push(n)}},47:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(252),n(52)),c=n(72),l=n.n(c),f=n(322),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:f.a})}}]);