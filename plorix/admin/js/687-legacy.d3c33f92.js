"use strict";(self["webpackChunkadmin_panel"]=self["webpackChunkadmin_panel"]||[]).push([[687],{6317:function(t,e,a){a.r(e),a.d(e,{default:function(){return E}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"table filter"},[a("v-card-title",{staticClass:"table_head"},[a("div",{staticClass:"table_title mb-1"},[t._v("Filter:")]),a("div",{staticClass:"table_title mb-2"},[a("v-text-field",{staticClass:"table_search mt-1",attrs:{label:"Name","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({staticClass:"datepicker mt-1",attrs:{color:"white","append-icon":"mdi-calendar",label:"Start date",readonly:"",dense:"",flat:"","solo-inverted":"",clearable:"","hide-details":""},model:{value:t.dateStart,callback:function(e){t.dateStart=e},expression:"dateStart"}},"v-text-field",i,!1),s))]}}]),model:{value:t.menuStart,callback:function(e){t.menuStart=e},expression:"menuStart"}},[a("v-date-picker",{attrs:{"header-color":"blue darken-3"},on:{input:function(e){t.menuStart=!1}},model:{value:t.dateStart,callback:function(e){t.dateStart=e},expression:"dateStart"}})],1),a("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({staticClass:"datepicker mt-1",attrs:{color:"white","append-icon":"mdi-calendar",label:"End date",readonly:"",dense:"",flat:"","solo-inverted":"",clearable:"","hide-details":""},model:{value:t.dateEnd,callback:function(e){t.dateEnd=e},expression:"dateEnd"}},"v-text-field",i,!1),s))]}}]),model:{value:t.menuEnd,callback:function(e){t.menuEnd=e},expression:"menuEnd"}},[a("v-date-picker",{attrs:{"header-color":"blue darken-3"},on:{input:function(e){t.menuEnd=!1}},model:{value:t.dateEnd,callback:function(e){t.dateEnd=e},expression:"dateEnd"}})],1),a("div",{staticClass:"table_box table_choise mt-1"},[t._v(" Product: "),a("v-checkbox",{staticClass:"mr-1 ml-1",attrs:{label:"Standart",color:"primary","hide-details":"",dense:""}}),a("v-checkbox",{staticClass:"mr-1",attrs:{label:"Plus",color:"primary","hide-details":"",dense:""}}),a("v-checkbox",{staticClass:"mr-1",attrs:{label:"Premium",color:"primary","hide-details":"",dense:""}}),a("v-checkbox",{staticClass:"mr-1",attrs:{label:"Gold",color:"primary",dense:"","hide-details":""}})],1)],1),a("div",{staticClass:"table_title"},[a("v-text-field",{staticClass:"table_search",attrs:{label:"Code","hide-details":"",dense:"","solo-inverted":"",flat:""},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1),a("div",{staticClass:"table_title justify-center"},[a("v-spacer"),a("div",{staticClass:"table_box table_box_buttons"},[a("v-btn",{staticClass:"mr-3 white--text",attrs:{color:"blue darken-3"}},[t._v(" Search ")]),a("v-btn",{staticClass:"white--text",attrs:{color:"blue darken-3"},on:{click:function(e){return t.resetInput()}}},[t._v(" Reset ")])],1),a("v-spacer"),a("div",{staticClass:"table_box table_box_checkbox"},[a("v-checkbox",{staticClass:"mr-2 table_checkbox_current",attrs:{label:"Apply current search filter",color:"primary","hide-details":"",dense:""}}),a("v-btn",{attrs:{"x-small":""},on:{click:function(e){return t.showDialogExcel()}}},[t._v(" Excel file Download ")])],1)],1)]),a("v-data-table",{staticClass:"table_data",attrs:{headers:t.headers,items:t.$store.state.purchaseHistory,search:t.name},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-dialog",{attrs:{"max-width":"400px"},model:{value:t.dialogExcel,callback:function(e){t.dialogExcel=e},expression:"dialogExcel"}},[a("v-card",[a("v-container",[a("div",{staticClass:"card_title text-center mb-8",domProps:{textContent:t._s(t.titleDialogExcel)}})]),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.closeDialogExcel()}}},[t._v(" Confirm ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"800px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[a("span",[t._v("Details")])]),a("v-container",[a("v-row",{staticClass:"justify-center"},[a("v-col",{attrs:{cols:"12",sm:"8",md:"8"}},[a("div",{staticClass:"text-subtitle-1 card_title text-center"},[t._v(" Charging Information ")]),a("div",{staticClass:"card_box mb-6"},[""!==t.transactionId?a("div",{staticClass:"card_subtitle"},[t._v(" Transaction ID ")]):t._e(),""!==t.transactionId?a("div",{staticClass:"card_value",domProps:{textContent:t._s(t.transactionId)}}):t._e(),""===t.transactionId?a("div",{staticClass:"card_subtitle",staticStyle:{display:"none"}},[t._v(" Transaction ID ")]):t._e(),""===t.transactionId?a("div",{staticClass:"card_value",staticStyle:{display:"none"},domProps:{textContent:t._s(t.transactionId)}}):t._e(),a("div",{staticClass:"card_subtitle"},[t._v("Name")]),a("div",{staticClass:"card_value",domProps:{textContent:t._s(t.nameDialog)}}),a("div",{staticClass:"card_subtitle"},[t._v("Date")]),a("div",{staticClass:"card_value",domProps:{textContent:t._s(t.datePayment)}}),a("div",{staticClass:"card_subtitle"},[t._v("Product")]),a("div",{staticClass:"card_value",domProps:{textContent:t._s(t.productStatus)}}),a("div",{staticClass:"card_subtitle"},[t._v("Charging Credit")]),a("div",{staticClass:"card_value",domProps:{textContent:t._s(t.chargingCredit)}}),a("div",{staticClass:"card_subtitle"},[t._v("Hoarding Credit")]),a("div",{staticClass:"card_value",domProps:{textContent:t._s(t.hoardingCredit)}})]),a("div",{staticClass:"text-subtitle-1 card_title text-center"},[t._v(" Payment Information ")]),a("div",{staticClass:"card_box mb-6"},[a("div",{staticClass:"card_subtitle"},[t._v("Method of payment")]),a("div",{staticClass:"card_value",domProps:{textContent:t._s(t.methodPayment)}}),a("div",{staticClass:"card_subtitle"},[t._v("Amount of payment")]),a("div",{staticClass:"card_value",domProps:{textContent:t._s(t.amountPayment)}})])])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{outlined:""},on:{click:function(e){return t.closeDialog()}}},[t._v(" List ")]),a("v-btn",{attrs:{outlined:""},on:{click:function(e){return t.$router.push("/credit/history")}}},[t._v(" Credit History ")])],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var s=e.item;return[a("v-icon",{staticClass:"mr-2",on:{click:function(e){return t.showDialog(s)}}},[t._v(" mdi-information-outline ")])]}}])})],1)],1)},i=[],n=(a(1539),a(4747),a(8309),{data:function(){return{name:"",code:"",headers:[{text:"Code",align:"start",value:"code"},{text:"Date",value:"date"},{text:"Name",value:"name"},{text:"Product",value:"product"},{text:"Charge",value:"charge"},{text:"Hoarding Credit",value:"hoarding"},{text:"Payment",value:"payment"},{text:"Deposited",value:"deposited"},{text:"Transaction ID",value:"id"},{text:"Info",value:"actions",sortable:!1}],dateStart:"",dateEnd:"",menuStart:!1,menuEnd:!1,dialog:!1,titleDialogExcel:"",dialogExcel:!1,transactionId:"",nameDialog:"",datePayment:"",productStatus:"",chargingCredit:"",hoardingCredit:"",methodPayment:"",amountPayment:""}},methods:{resetInput:function(){var t=document.querySelectorAll(".table_head .v-input--selection-controls__input input");t.forEach((function(t){t.checked&&t.click()})),this.name="",this.code="",this.dateStart=new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),this.dateEnd=new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)},showDialog:function(t){this.dialog=!0,this.transactionId=t.id,this.nameDialog=t.name,this.datePayment=t.date,this.productStatus=t.product,this.chargingCredit=t.charge,this.hoardingCredit=t.hoarding,""===t.method?this.methodPayment="-":this.methodPayment=t.method,""===t.method?this.amountPayment="-":this.amountPayment=t.payment},closeDialog:function(){this.dialog=!1},showDialogExcel:function(){var t=document.querySelector(".table_checkbox_current input");t.checked?this.titleDialogExcel="Do you want to get the current search results in Excel?":this.titleDialogExcel="Do you want to get the entire data into Excel?",this.dialogExcel=!0},closeDialogExcel:function(){this.dialogExcel=!1}}}),l=n,o=a(1001),c=a(3453),r=a.n(c),d=a(680),u=a(2371),v=a(7118),m=a(593),h=a(2102),_=a(9846),b=a(4998),x=a(7416),C=a(4497),p=a(6428),f=a(6768),g=a(2877),k=a(9762),y=a(5978),D=(0,o.Z)(l,s,i,!1,null,null,null),E=D.exports;r()(D,{VBtn:d.Z,VCard:u.Z,VCardActions:v.h7,VCardTitle:v.EB,VCheckbox:m.Z,VCol:h.Z,VContainer:_.Z,VDataTable:b.Z,VDatePicker:x.Z,VDialog:C.Z,VIcon:p.Z,VMenu:f.Z,VRow:g.Z,VSpacer:k.Z,VTextField:y.Z})}}]);
//# sourceMappingURL=687-legacy.d3c33f92.js.map