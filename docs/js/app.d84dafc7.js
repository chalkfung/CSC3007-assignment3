(function(){"use strict";var t={2955:function(t,e,n){var o=n(144),r=n(9132);o.Z.use(r.Z);var a=new r.Z({}),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{color:"deep-purple",dark:"",app:""}},[n("v-app-bar-nav-icon",{on:{click:t.toggleNavBar}}),n("v-toolbar-title",[t._v("CSC3007 Assignment")])],1),n("NavBar",{ref:"navbar"}),n("v-main",[n("router-view")],1),n("v-footer",{attrs:{color:"deep-purple",dark:"",app:""}},[t._v("Author: Ng Cheuk Fung")])],1)},i=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[n("v-list-item",{attrs:{to:"/"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-home")])],1),n("v-list-item-title",[t._v("Home")])],1),n("v-list-item",{attrs:{to:"/a1"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-weather-hazy")])],1),n("v-list-item-title",[t._v("Assignment 1 - PSI Table")])],1)],1)],1)],1)},s=[],l={name:"NavBar",methods:{toggleDrawer(){this.drawer=!this.drawer}},data(){return{drawer:!1,group:null,items:{}}}},c=l,h=n(1001),p=n(3453),m=n.n(p),f=n(6428),d=n(6816),v=n(7620),x=n(3249),y=n(459),b=n(2710),g=n(9194),w=(0,h.Z)(c,_,s,!1,null,null,null),Z=w.exports;m()(w,{VIcon:f.Z,VList:d.Z,VListItem:v.Z,VListItemGroup:x.Z,VListItemIcon:y.Z,VListItemTitle:b.V9,VNavigationDrawer:g.Z});var O={data:()=>({}),methods:{toggleNavBar(){this.$refs.navbar.toggleDrawer()}},components:{NavBar:Z}},C=O,V=n(7524),k=n(8320),S=n(5206),I=n(899),j=n(7877),N=n(7921),T=(0,h.Z)(C,u,i,!1,null,null,null),H=T.exports;m()(T,{VApp:V.Z,VAppBar:k.Z,VAppBarNavIcon:S.Z,VFooter:I.Z,VMain:j.Z,VToolbarTitle:N.qW});var M=n(8345),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("div",{staticClass:"text-center"},[n("h1",[t._v("Homepage of Cheuk Fung's CSC3007 Assignments")])])])],1)},E=[],A=n(247),$=n(2877),B={},D=(0,h.Z)(B,P,E,!1,null,null,null),L=D.exports;m()(D,{VContainer:A.Z,VRow:$.Z});var F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"py-6",attrs:{justify:"center"}},[n("h1",[t._v("Singapore Air Quality Table")])]),n("v-row",{staticClass:"py-6",attrs:{justify:"center"}},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.locations,"hide-default-footer":!0}})],1),n("v-row",{staticClass:"py-6",attrs:{justify:"center"}},[n("h3",[t._v("Updated as of: "+t._s(this.updateTime))])])],1)},R=[],U=n(9669),W=n.n(U);const q=W();var z={install(t){t.prototype.$axios=W()}},G={methods:{fetchUpdateData:async function(){return await q.get("https://api.data.gov.sg/v1/environment/psi").then((t=>{let e=t.data.items[0].readings;Object.entries(e).forEach((([t,e])=>{Object.entries(e).forEach((([e,n])=>{switch(e){case"west":this.locations.filter((t=>"West"==t.name))[0][t]=n;break;case"central":this.locations.filter((t=>"Central"==t.name))[0][t]=n;break;case"north":this.locations.filter((t=>"North"==t.name))[0][t]=n;break;case"south":this.locations.filter((t=>"South"==t.name))[0][t]=n;break;case"east":this.locations.filter((t=>"East"==t.name))[0][t]=n;break;case"national":this.locations.filter((t=>"National"==t.name))[0][t]=n;break;default:break}}))})),this.updateTime=new Date(t.data.items[0].update_timestamp)}))}},created(){this.interval=setInterval((()=>this.fetchUpdateData()),3e3)},destroyed(){clearInterval(this.interval)},data(){return{updateTime:null,headers:[{text:"Location",align:"start",sortable:!1,value:"name"},{text:"O3 Sub Index",value:"o3_sub_index"},{text:"O3 8H Max",value:"o3_eight_hour_max"},{text:"PM10 Sub Index",value:"pm10_sub_index"},{text:"PM10 24H Hourly",value:"pm10_twenty_four_hourly"},{text:"PM2.5 Sub Index",value:"pm25_sub_index"},{text:"PM2.5 24H Hourly ",value:"pm25_twenty_four_hourly"},{text:"SO2 Sub Index",value:"so2_sub_index"},{text:"SO2 24H Hourly",value:"so2_twenty_four_hourly"},{text:"CO Sub Index",value:"co_sub_index"},{text:"CO 8H Max",value:"co_eight_hour_max"},{text:"NO2 1H Max",value:"no2_one_hour_max"},{text:"PSI 24H Max",value:"psi_twenty_four_hourly"}],locations:[{name:"National",o3_sub_index:0,o3_eight_hour_max:0,pm10_sub_index:0,pm10_twenty_four_hourly:0,pm25_sub_index:0,pm25_twenty_four_hourly:0,so2_sub_index:0,so2_twenty_four_hourly:0,co_sub_index:0,co_eight_hour_max:0,no2_one_hour_max:0,psi_twenty_four_hourly:0},{name:"North",o3_sub_index:0,o3_eight_hour_max:0,pm10_sub_index:0,pm10_twenty_four_hourly:0,pm25_sub_index:0,pm25_twenty_four_hourly:0,so2_sub_index:0,so2_twenty_four_hourly:0,co_sub_index:0,co_eight_hour_max:0,no2_one_hour_max:0,psi_twenty_four_hourly:0},{name:"South",o3_sub_index:0,o3_eight_hour_max:0,pm10_sub_index:0,pm10_twenty_four_hourly:0,pm25_sub_index:0,pm25_twenty_four_hourly:0,so2_sub_index:0,so2_twenty_four_hourly:0,co_sub_index:0,co_eight_hour_max:0,no2_one_hour_max:0,psi_twenty_four_hourly:0},{name:"East",o3_sub_index:0,o3_eight_hour_max:0,pm10_sub_index:0,pm10_twenty_four_hourly:0,pm25_sub_index:0,pm25_twenty_four_hourly:0,so2_sub_index:0,so2_twenty_four_hourly:0,co_sub_index:0,co_eight_hour_max:0,no2_one_hour_max:0,psi_twenty_four_hourly:0},{name:"West",o3_sub_index:0,o3_eight_hour_max:0,pm10_sub_index:0,pm10_twenty_four_hourly:0,pm25_sub_index:0,pm25_twenty_four_hourly:0,so2_sub_index:0,so2_twenty_four_hourly:0,co_sub_index:0,co_eight_hour_max:0,no2_one_hour_max:0,psi_twenty_four_hourly:0},{name:"Central",o3_sub_index:0,o3_eight_hour_max:0,pm10_sub_index:0,pm10_twenty_four_hourly:0,pm25_sub_index:0,pm25_twenty_four_hourly:0,so2_sub_index:0,so2_twenty_four_hourly:0,co_sub_index:0,co_eight_hour_max:0,no2_one_hour_max:0,psi_twenty_four_hourly:0}]}}},Q=G,J=n(6714),K=(0,h.Z)(Q,F,R,!1,null,null,null),X=K.exports;m()(K,{VContainer:A.Z,VDataTable:J.Z,VRow:$.Z});var Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("div",{staticClass:"text-center"},[n("h1",[t._v("404 Page Not Found")])])])],1)},tt=[],et={},nt=(0,h.Z)(et,Y,tt,!1,null,null,null),ot=nt.exports;m()(nt,{VContainer:A.Z,VRow:$.Z}),o.Z.use(M.Z);var rt=new M.Z({mode:"history",base:"",routes:[{path:"/",name:"home",components:{default:L}},{path:"/a1",name:"a1",components:{default:X}},{path:"*",components:{default:ot}}]});o.Z.config.productionTip=!1,o.Z.use(z),new o.Z({router:rt,vuetify:a,render:t=>t(H)}).$mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,a){if(!o){var u=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],a=t[l][2];for(var i=!0,_=0;_<o.length;_++)(!1&a||u>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[_])}))?o.splice(_--,1):(i=!1,a<u&&(u=a));if(i){t.splice(l--,1);var s=r();void 0!==s&&(e=s)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[o,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,u=o[0],i=o[1],_=o[2],s=0;if(u.some((function(e){return 0!==t[e]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(_)var l=_(n)}for(e&&e(o);s<u.length;s++)a=u[s],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},o=self["webpackChunkcsc3007_assignment1_psi_reading"]=self["webpackChunkcsc3007_assignment1_psi_reading"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2955)}));o=n.O(o)})();
//# sourceMappingURL=app.d84dafc7.js.map