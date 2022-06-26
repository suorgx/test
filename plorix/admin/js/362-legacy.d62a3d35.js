"use strict";(self["webpackChunkadmin_panel"]=self["webpackChunkadmin_panel"]||[]).push([[362],{2362:function(e,t,i){i.r(t),i.d(t,{default:function(){return D}});var d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-data-table",{staticStyle:{border:"1px solid #ddd",padding:"10px 0 0"},attrs:{headers:e.headers,items:e.admins,"items-per-page":15},scopedSlots:e._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:"",dense:""}},[i("v-spacer"),i("v-dialog",{attrs:{"max-width":"400px"},scopedSlots:e._u([{key:"activator",fn:function(t){var d=t.on,n=t.attrs;return[i("v-btn",e._g(e._b({attrs:{outlined:""}},"v-btn",n,!1),d),[i("v-icon",{attrs:{left:"",dark:""}},[e._v(" mdi-plus ")]),e._v(" Add ")],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[i("v-text-field",{attrs:{label:"ID"},model:{value:e.editedItem.id,callback:function(t){e.$set(e.editedItem,"id",t)},expression:"editedItem.id"}}),i("v-text-field",{attrs:{label:"PWD"},model:{value:e.editedItem.pw,callback:function(t){e.$set(e.editedItem,"pw",t)},expression:"editedItem.pw"}}),i("v-text-field",{attrs:{label:"PWD Confirm"},model:{value:e.editedItem.pwconfirm,callback:function(t){e.$set(e.editedItem,"pwconfirm",t)},expression:"editedItem.pwconfirm"}})],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{outlined:""},on:{click:e.save}},[e._v(" Save ")]),i("v-btn",{attrs:{outlined:""},on:{click:e.close}},[e._v(" Cancel ")])],1)],1)],1),i("v-dialog",{attrs:{"max-width":"400px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[i("v-card",[i("div",{staticClass:"card_title text-center mb-8"},[e._v(" Are you sure you want to delete this admin? ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary"},on:{click:e.deleteItemConfirm}},[e._v("Delete")]),i("v-btn",{attrs:{color:"primary"},on:{click:e.closeDelete}},[e._v("Cancel")]),i("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var d=t.item;return[d.edit?i("v-btn",{staticClass:"mr-2",attrs:{small:"",outlined:""},on:{click:function(t){return e.editItem(d)}}},[e._v(" Edit ")]):e._e(),i("v-btn",{attrs:{small:"",outlined:""},on:{click:function(t){return e.deleteItem(d)}}},[e._v(" Delete ")])]}},{key:"no-data",fn:function(){},proxy:!0}])})],1)},n=[],a=(i(561),{data:function(){return{dialog:!1,dialogDelete:!1,headers:[{text:"No",align:"start",value:"number"},{text:"Authority",value:"name"},{text:"ID",value:"id"},{text:"Last Access Date",value:"date"},{text:"",value:"actions",align:"end",sortable:!1}],admins:[{number:1,name:"Super",id:"SuperAdmin",date:"2021.09.17",pw:"123214",pwconfirm:"123214",edit:!1},{number:2,name:"Admin",id:"NormalAdmin",date:"2021.09.16",pw:"123214123214",pwconfirm:"123214123214",edit:!0}],model:[],subPart:[],editedIndex:-1,editedItem:{name:""},defaultItem:{name:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"New":"Edit"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},methods:{editItem:function(e){this.editedIndex=this.admins.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.admins.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.admins.splice(this.editedIndex,1),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.admins[this.editedIndex],this.editedItem):this.admins.push(this.editedItem),this.close()}}}),l=a,s=i(1001),o=i(3453),c=i.n(o),r=i(680),m=i(2371),u=i(7118),v=i(2102),f=i(9846),p=i(4998),h=i(4497),x=i(6428),I=i(2877),b=i(9762),g=i(5978),k=i(6656),_=(0,s.Z)(l,d,n,!1,null,null,null),D=_.exports;c()(_,{VBtn:r.Z,VCard:m.Z,VCardActions:u.h7,VCardText:u.ZB,VCardTitle:u.EB,VCol:v.Z,VContainer:f.Z,VDataTable:p.Z,VDialog:h.Z,VIcon:x.Z,VRow:I.Z,VSpacer:b.Z,VTextField:g.Z,VToolbar:k.Z})}}]);
//# sourceMappingURL=362-legacy.d62a3d35.js.map