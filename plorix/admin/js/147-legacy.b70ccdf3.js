"use strict";(self["webpackChunkadmin_panel"]=self["webpackChunkadmin_panel"]||[]).push([[147],{7034:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-card",{staticClass:"table filter approval"},[a("v-card-title",{staticClass:"table_head"},[a("div",{staticClass:"table_title mb-1"},[e._v("Filter:")]),a("div",{staticClass:"table_title",staticStyle:{"font-size":"14px"}},[e._v(" Pattern Information ")]),a("div",{staticClass:"table_title"},[a("v-text-field",{staticClass:"table_search",attrs:{label:"Region","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:e.region,callback:function(t){e.region=t},expression:"region"}}),a("v-text-field",{staticClass:"table_search",attrs:{label:"Maker","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:e.maker,callback:function(t){e.maker=t},expression:"maker"}}),a("v-text-field",{staticClass:"table_search mt-1",attrs:{label:"Year","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:e.year,callback:function(t){e.year=t},expression:"year"}}),a("v-text-field",{staticClass:"table_search mt-1",attrs:{label:"Model","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1),a("div",{staticClass:"table_title"},[a("v-text-field",{staticClass:"table_search mt-1",attrs:{label:"Sub Model","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:e.subModel,callback:function(t){e.subModel=t},expression:"subModel"}}),a("v-text-field",{staticClass:"table_search mt-1",attrs:{label:"Series","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:e.series,callback:function(t){e.series=t},expression:"series"}}),a("v-text-field",{staticClass:"table_search mt-1",attrs:{label:"Code","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),a("div",{staticClass:"table_title",staticStyle:{"font-size":"14px"}},[e._v(" Upload Information ")]),a("div",{staticClass:"table_title mb-2"},[a("v-text-field",{staticClass:"table_search mt-1",attrs:{label:"Name","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-text-field",{staticClass:"table_search table_search_min mt-1",attrs:{label:"Price min","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:e.priceMin,callback:function(t){e.priceMin=t},expression:"priceMin"}}),a("v-text-field",{staticClass:"table_search table_search_min mt-1",attrs:{label:"Price max","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:e.priceMax,callback:function(t){e.priceMax=t},expression:"priceMax"}}),a("v-text-field",{staticClass:"table_search table_search_min mt-1",attrs:{label:"Area min","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:e.areaMin,callback:function(t){e.areaMin=t},expression:"areaMin"}}),a("v-text-field",{staticClass:"table_search table_search_min mt-1",attrs:{label:"Area max","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:e.areaMax,callback:function(t){e.areaMax=t},expression:"areaMax"}})],1),a("div",{staticClass:"table_title mb-2"},[a("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on,s=t.attrs;return[a("v-text-field",e._g(e._b({staticClass:"datepicker mr-4",attrs:{color:"white",label:"Start date",readonly:"",dense:"",flat:"","solo-inverted":"",clearable:"","append-icon":"mdi-calendar","hide-details":""},model:{value:e.dateStart,callback:function(t){e.dateStart=t},expression:"dateStart"}},"v-text-field",s,!1),l))]}}]),model:{value:e.menuStart,callback:function(t){e.menuStart=t},expression:"menuStart"}},[a("v-date-picker",{attrs:{"header-color":"blue darken-3"},on:{input:function(t){e.menuStart=!1}},model:{value:e.dateStart,callback:function(t){e.dateStart=t},expression:"dateStart"}})],1),a("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on,s=t.attrs;return[a("v-text-field",e._g(e._b({staticClass:"datepicker",attrs:{color:"white","append-icon":"mdi-calendar",label:"End date",readonly:"",dense:"",flat:"","solo-inverted":"",clearable:"","hide-details":""},model:{value:e.dateEnd,callback:function(t){e.dateEnd=t},expression:"dateEnd"}},"v-text-field",s,!1),l))]}}]),model:{value:e.menuEnd,callback:function(t){e.menuEnd=t},expression:"menuEnd"}},[a("v-date-picker",{attrs:{"header-color":"blue darken-3"},on:{input:function(t){e.menuEnd=!1}},model:{value:e.dateEnd,callback:function(t){e.dateEnd=t},expression:"dateEnd"}})],1),a("v-spacer")],1),a("div",{staticClass:"table_title mb-2"},[a("v-spacer"),a("div",{staticClass:"table_box table_box_buttons"},[a("v-btn",{staticClass:"mr-3 white--text",attrs:{color:"blue darken-3"}},[e._v(" Search ")]),a("v-btn",{staticClass:"white--text",attrs:{color:"blue darken-3"},on:{click:function(t){return e.resetInput()}}},[e._v(" Reset ")])],1),a("v-spacer")],1),a("div",{staticClass:"table_title"},[a("v-select",{staticClass:"table_select",attrs:{flat:"","solo-inverted":"","hide-details":"",color:"white",dense:"",items:e.keys,label:"sort By"},model:{value:e.sortBy,callback:function(t){e.sortBy=t},expression:"sortBy"}}),a("v-spacer")],1)]),a("v-data-table",{staticClass:"table_data",attrs:{headers:e.headers,items:e.$store.state.missCutList,search:e.name}})],1)],1)},s=[],i=(a(1539),a(4747),a(8309),{data:function(){return{region:"",maker:"",year:"",model:"",subModel:"",series:"",code:"",name:"",priceMax:"",priceMin:"",areaMin:"",areaMax:"",sortBy:"",keys:["Newest","Oldest"],headers:[{text:"Downloader",align:"start",value:"downloader"},{text:"Uploader",value:"uploader"},{text:"Pattern Code",value:"code"},{text:"Class",value:"class"},{text:"Part",value:"part"},{text:"Download Date",value:"date"},{text:"Price",value:"price"}],dateStart:"",dateEnd:"",menuStart:!1,menuEnd:!1}},methods:{resetInput:function(){var e=document.querySelectorAll(".table_head .v-input--selection-controls__input input");e.forEach((function(e){e.checked&&e.click()})),this.region="",this.maker="",this.year="",this.model="",this.subModel="",this.series="",this.code="",this.name="",this.priceMax="",this.priceMin="",this.areaMin="",this.areaMax="",this.sortBy="",this.dateStart="",this.dateEnd=""}}}),n=i,r=a(1001),d=a(3453),o=a.n(d),c=a(680),u=a(2371),v=a(7118),b=a(4998),m=a(7416),f=a(6768),h=a(5651),p=a(9762),x=a(5978),_=(0,r.Z)(n,l,s,!1,null,null,null),k=_.exports;o()(_,{VBtn:c.Z,VCard:u.Z,VCardTitle:v.EB,VDataTable:b.Z,VDatePicker:m.Z,VMenu:f.Z,VSelect:h.Z,VSpacer:p.Z,VTextField:x.Z})}}]);
//# sourceMappingURL=147-legacy.b70ccdf3.js.map