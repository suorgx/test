"use strict";(self["webpackChunkadmin_panel"]=self["webpackChunkadmin_panel"]||[]).push([[506],{5803:function(t,e,i){i.r(e),i.d(e,{default:function(){return x}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-card",{staticClass:"credit"},[i("v-tabs",{attrs:{"background-color":"blue darken-3",dark:""},model:{value:t.credit,callback:function(e){t.credit=e},expression:"credit"}},[i("v-tab",{attrs:{href:"#creditFirst"}},[t._v("Standart")]),i("v-tab",{attrs:{href:"#creditSecond"}},[t._v("Plus")]),i("v-tab",{attrs:{href:"#creditThird"}},[t._v("Premium")]),i("v-tab",{attrs:{href:"#creditFor"}},[t._v("Gold")])],1),i("v-tabs-items",{model:{value:t.credit,callback:function(e){t.credit=e},expression:"credit"}},[i("v-tab-item",{attrs:{value:"creditFirst"}},[i("v-card",{attrs:{flat:""}},[i("v-card-text",[i("div",{staticClass:"credit_table"},[i("div",{staticClass:"text-h6 font-weight-black"},[t._v("Cost")]),i("v-text-field",{staticClass:"text-h6 font-weight-black",attrs:{label:"$",outlined:"",dense:""},model:{value:t.creditStandart.cost,callback:function(e){t.$set(t.creditStandart,"cost",e)},expression:"creditStandart.cost"}})],1),i("div",{staticClass:"credit_table"},[i("div",{staticClass:"text-h6 font-weight-black"},[t._v("Recharge Credit")]),i("v-text-field",{staticClass:"text-h6 font-weight-black",attrs:{label:"credit",outlined:"",dense:""},model:{value:t.creditStandart.recharge,callback:function(e){t.$set(t.creditStandart,"recharge",e)},expression:"creditStandart.recharge"}})],1),i("div",{staticClass:"credit_table"},[i("div",{staticClass:"text-h6 font-weight-black"},[t._v("Bonus Credit")]),i("v-text-field",{staticClass:"text-h6 font-weight-black",attrs:{label:"credit",outlined:"",dense:""},model:{value:t.creditStandart.bonus,callback:function(e){t.$set(t.creditStandart,"bonus",e)},expression:"creditStandart.bonus"}})],1),i("div",{staticClass:"credit_table"},[i("div",{staticClass:"text-h6 font-weight-black"},[t._v("Total Credit")]),i("div",{staticClass:"text-h6 font-weight-black"},[t._v(" "+t._s(t.totalStandart)+" Credit ")])])])],1),i("div",{staticClass:"buttons"},[i("v-btn",{staticClass:"white--text ml-4 mb-2",attrs:{color:"blue darken-3",large:""},on:{click:function(e){return t.saveStandart()}}},[t._v("Save")]),i("v-btn",{staticClass:"white--text ml-4 mb-2",attrs:{color:"blue darken-3",large:""},on:{click:function(e){return t.resetStandart()}}},[t._v("Reset")])],1)],1),i("v-tab-item",{attrs:{value:"creditSecond"}},[i("v-card",{attrs:{flat:""}},[i("v-card-text",[i("div",{staticClass:"credit_table"},[i("div",{staticClass:"text-h6 font-weight-black"},[t._v("Cost")]),i("v-text-field",{staticClass:"text-h6 font-weight-black",attrs:{label:"$",outlined:"",dense:""},model:{value:t.creditPlus.cost,callback:function(e){t.$set(t.creditPlus,"cost",e)},expression:"creditPlus.cost"}})],1),i("div",{staticClass:"credit_table"},[i("div",{staticClass:"text-h6 font-weight-black"},[t._v("Recharge Credit")]),i("v-text-field",{staticClass:"text-h6 font-weight-black",attrs:{label:"credit",outlined:"",dense:""},model:{value:t.creditPlus.recharge,callback:function(e){t.$set(t.creditPlus,"recharge",e)},expression:"creditPlus.recharge"}})],1),i("div",{staticClass:"credit_table"},[i("div",{staticClass:"text-h6 font-weight-black"},[t._v("Bonus Credit")]),i("v-text-field",{staticClass:"text-h6 font-weight-black",attrs:{label:"credit",outlined:"",dense:""},model:{value:t.creditPlus.bonus,callback:function(e){t.$set(t.creditPlus,"bonus",e)},expression:"creditPlus.bonus"}})],1),i("div",{staticClass:"credit_table"},[i("div",{staticClass:"text-h6 font-weight-black"},[t._v("Total Credit")]),i("div",{staticClass:"text-h6 font-weight-black"},[t._v(" "+t._s(t.totalPlus)+" Credit ")])])])],1),i("div",{staticClass:"buttons"},[i("v-btn",{staticClass:"white--text ml-4 mb-2",attrs:{color:"blue darken-3",large:""},on:{click:function(e){return t.savePlus()}}},[t._v("Save")]),i("v-btn",{staticClass:"white--text ml-4 mb-2",attrs:{color:"blue darken-3",large:""},on:{click:function(e){return t.resetPlus()}}},[t._v("Reset")])],1)],1),i("v-tab-item",{attrs:{value:"creditThird"}},[i("v-card",{attrs:{flat:""}},[i("v-card-text",[i("div",{staticClass:"credit_table"},[i("div",{staticClass:"text-h6 font-weight-black"},[t._v("Cost")]),i("v-text-field",{staticClass:"text-h6 font-weight-black",attrs:{label:"$",outlined:"",dense:""},model:{value:t.creditPremium.cost,callback:function(e){t.$set(t.creditPremium,"cost",e)},expression:"creditPremium.cost"}})],1),i("div",{staticClass:"credit_table"},[i("div",{staticClass:"text-h6 font-weight-black"},[t._v("Recharge Credit")]),i("v-text-field",{staticClass:"text-h6 font-weight-black",attrs:{label:"credit",outlined:"",dense:""},model:{value:t.creditPremium.recharge,callback:function(e){t.$set(t.creditPremium,"recharge",e)},expression:"creditPremium.recharge"}})],1),i("div",{staticClass:"credit_table"},[i("div",{staticClass:"text-h6 font-weight-black"},[t._v("Bonus Credit")]),i("v-text-field",{staticClass:"text-h6 font-weight-black",attrs:{label:"credit",outlined:"",dense:""},model:{value:t.creditPremium.bonus,callback:function(e){t.$set(t.creditPremium,"bonus",e)},expression:"creditPremium.bonus"}})],1),i("div",{staticClass:"credit_table"},[i("div",{staticClass:"text-h6 font-weight-black"},[t._v("Total Credit")]),i("div",{staticClass:"text-h6 font-weight-black"},[t._v(" "+t._s(t.totalPremium)+" Credit ")])])])],1),i("div",{staticClass:"buttons"},[i("v-btn",{staticClass:"white--text ml-4 mb-2",attrs:{color:"blue darken-3",large:""},on:{click:function(e){return t.savePremium()}}},[t._v("Save")]),i("v-btn",{staticClass:"white--text ml-4 mb-2",attrs:{color:"blue darken-3",large:""},on:{click:function(e){return t.resetPremium()}}},[t._v("Reset")])],1)],1),i("v-tab-item",{attrs:{value:"creditFor"}},[i("v-card",{attrs:{flat:""}},[i("v-card-text",[i("div",{staticClass:"credit_table"},[i("div",{staticClass:"text-h6 font-weight-black"},[t._v("Cost")]),i("v-text-field",{staticClass:"text-h6 font-weight-black",attrs:{label:"$",outlined:"",dense:""},model:{value:t.creditGold.cost,callback:function(e){t.$set(t.creditGold,"cost",e)},expression:"creditGold.cost"}})],1),i("div",{staticClass:"credit_table"},[i("div",{staticClass:"text-h6 font-weight-black"},[t._v("Recharge Credit")]),i("v-text-field",{staticClass:"text-h6 font-weight-black",attrs:{label:"credit",outlined:"",dense:""},model:{value:t.creditGold.recharge,callback:function(e){t.$set(t.creditGold,"recharge",e)},expression:"creditGold.recharge"}})],1),i("div",{staticClass:"credit_table"},[i("div",{staticClass:"text-h6 font-weight-black"},[t._v("Bonus Credit")]),i("v-text-field",{staticClass:"text-h6 font-weight-black",attrs:{label:"credit",outlined:"",dense:""},model:{value:t.creditGold.bonus,callback:function(e){t.$set(t.creditGold,"bonus",e)},expression:"creditGold.bonus"}})],1),i("div",{staticClass:"credit_table"},[i("div",{staticClass:"text-h6 font-weight-black"},[t._v("Total Credit")]),i("div",{staticClass:"text-h6 font-weight-black"},[t._v(" "+t._s(t.totalGold)+" Credit ")])])])],1),i("div",{staticClass:"buttons"},[i("v-btn",{staticClass:"white--text ml-4 mb-2",attrs:{color:"blue darken-3",large:""},on:{click:function(e){return t.saveGold()}}},[t._v("Save")]),i("v-btn",{staticClass:"white--text ml-4 mb-2",attrs:{color:"blue darken-3",large:""},on:{click:function(e){return t.resetGold()}}},[t._v("Reset")])],1)],1)],1)],1)],1)},a=[],r=(i(9653),{data:function(){return{credit:"credit",creditStandart:{cost:50,recharge:50,bonus:0},cacheCreditStandart:{cost:50,recharge:50,bonus:0},creditPlus:{cost:100,recharge:100,bonus:5},cacheCreditPlus:{cost:100,recharge:100,bonus:5},creditPremium:{cost:250,recharge:250,bonus:20},cacheCreditPremium:{cost:250,recharge:250,bonus:20},creditGold:{cost:1e3,recharge:1e3,bonus:130},cacheCreditGold:{cost:1e3,recharge:1e3,bonus:130}}},methods:{saveStandart:function(){this.cacheCreditStandart.cost=this.creditStandart.cost,this.cacheCreditStandart.recharge=this.creditStandart.recharge,this.cacheCreditStandart.bonus=this.creditStandart.bonus},resetStandart:function(){this.creditStandart.cost=this.cacheCreditStandart.cost,this.creditStandart.recharge=this.cacheCreditStandart.recharge,this.creditStandart.bonus=this.cacheCreditStandart.bonus},savePlus:function(){this.cacheCreditPlus.cost=this.creditPlus.cost,this.cacheCreditPlus.recharge=this.creditPlus.recharge,this.cacheCreditPlus.bonus=this.creditPlus.bonus},resetPlus:function(){this.creditPlus.cost=this.cacheCreditPlus.cost,this.creditPlus.recharge=this.cacheCreditPlus.recharge,this.creditPlus.bonus=this.cacheCreditPlus.bonus},savePremium:function(){this.cacheCreditPremium.cost=this.creditPremium.cost,this.cacheCreditPremium.recharge=this.creditPremium.recharge,this.cacheCreditPremium.bonus=this.creditPremium.bonus},resetPremium:function(){this.creditPremium.cost=this.cacheCreditPremium.cost,this.creditPremium.recharge=this.cacheCreditPremium.recharge,this.creditPremium.bonus=this.cacheCreditPremium.bonus},saveGold:function(){this.cacheCreditGold.cost=this.creditGold.cost,this.cacheCreditGold.recharge=this.creditGold.recharge,this.cacheCreditGold.bonus=this.creditGold.bonus},resetGold:function(){this.creditGold.cost=this.cacheCreditGold.cost,this.creditGold.recharge=this.cacheCreditGold.recharge,this.creditGold.bonus=this.cacheCreditGold.bonus}},computed:{totalStandart:function(){return Number(this.creditStandart.recharge)+Number(this.creditStandart.bonus)},totalPlus:function(){return Number(this.creditPlus.recharge)+Number(this.creditPlus.bonus)},totalPremium:function(){return Number(this.creditPremium.recharge)+Number(this.creditPremium.bonus)},totalGold:function(){return Number(this.creditGold.recharge)+Number(this.creditGold.bonus)}}}),c=r,l=i(1001),d=i(3453),n=i.n(d),o=i(680),u=i(2371),h=i(7118),b=i(4227),v=i(1759),m=i(7090),C=i(1954),f=i(5978),g=(0,l.Z)(c,s,a,!1,null,null,null),x=g.exports;n()(g,{VBtn:o.Z,VCard:u.Z,VCardText:h.ZB,VTab:b.Z,VTabItem:v.Z,VTabs:m.Z,VTabsItems:C.Z,VTextField:f.Z})}}]);
//# sourceMappingURL=506-legacy.609fd4e7.js.map