(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0ae90a"],{"0b35":function(e,l,t){"use strict";t.r(l);var a=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("q-page",{staticClass:"flex flex-center"},[t("q-table",{attrs:{title:"Заказы",data:e.data,columns:e.columns,"row-key":"name","visible-columns":e.visibleColumns},scopedSlots:e._u([{key:"top",fn:function(l){return[t("div",{staticClass:"col-2 q-table__title"},[e._v("Ваши заказы:")]),t("q-space"),e.$q.screen.gt.xs?t("div",{staticClass:"col"},[t("q-toggle",{attrs:{val:"calories",label:"Calories"},model:{value:e.visibleColumns,callback:function(l){e.visibleColumns=l},expression:"visibleColumns"}}),t("q-toggle",{attrs:{val:"fat",label:"Fat"},model:{value:e.visibleColumns,callback:function(l){e.visibleColumns=l},expression:"visibleColumns"}}),t("q-toggle",{attrs:{val:"carbs",label:"Carbs"},model:{value:e.visibleColumns,callback:function(l){e.visibleColumns=l},expression:"visibleColumns"}}),t("q-toggle",{attrs:{val:"protein",label:"Protein"},model:{value:e.visibleColumns,callback:function(l){e.visibleColumns=l},expression:"visibleColumns"}}),t("q-toggle",{attrs:{val:"sodium",label:"Sodium"},model:{value:e.visibleColumns,callback:function(l){e.visibleColumns=l},expression:"visibleColumns"}}),t("q-toggle",{attrs:{val:"calcium",label:"Calcium"},model:{value:e.visibleColumns,callback:function(l){e.visibleColumns=l},expression:"visibleColumns"}}),t("q-toggle",{attrs:{val:"iron",label:"Iron"},model:{value:e.visibleColumns,callback:function(l){e.visibleColumns=l},expression:"visibleColumns"}})],1):t("q-select",{staticStyle:{"min-width":"150px"},attrs:{multiple:"",borderless:"",dense:"","options-dense":"","display-value":e.$q.lang.table.columns,"emit-value":"","map-options":"",options:e.columns,"option-value":"name"},model:{value:e.visibleColumns,callback:function(l){e.visibleColumns=l},expression:"visibleColumns"}}),t("q-btn",{staticClass:"q-ml-md",attrs:{flat:"",round:"",dense:"",icon:l.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:l.toggleFullscreen}})]}}])})],1)},n=[],s=t("967e"),o=t.n(s),i=t("8993"),r=t.n(i),c=(t("96cf"),t("2b0e")),u=t("bc3a"),d=t.n(u);t("8bcf");c["a"].use(d.a);var b={name:"Main",data:function(){return{responseNews:{},visibleColumns:["idorder","oname","price","customer","state","oplata","dtdog","otgdate"],columns:[{name:"idorder",required:!0,label:"Id order",align:"left",field:"idorder",format:function(e){return"".concat(e)},sortable:!0},{name:"oname",label:"№ заказа",field:"oname",sortable:!0},{name:"price",label:"Цена",field:"price"},{name:"customer",label:"Контрагент",field:"customer"},{name:"state",label:"Статус",field:"state"},{name:"plandatedost",label:"Плановая дата",field:"plandatedost",sortable:!0,sort:function(e,l){return parseInt(e,10)-parseInt(l,10)}},{name:"perenos",label:"Перенос даты",field:"perenos",sortable:!0,sort:function(e,l){return parseInt(e,10)-parseInt(l,10)}},{name:"oplata",label:"Оплата",field:"oplata"},{name:"dtdog",label:"Дата договора",field:"dtdog"},{name:"otgdate",label:"Отгружено",field:"otgdate"}],data:[]}},mounted:function(){var e,l,t;return o.a.async((function(a){while(1)switch(a.prev=a.next){case 0:try{e=JSON.stringify({contractorName:"Чекалов В.А. ИП"}),l=this,t=new XMLHttpRequest,t.withCredentials=!0,t.addEventListener("readystatechange",(function(){4===this.readyState&&(l.data=this.response,console.log(r()(this.response[0])),l.$forceUpdate)})),t.open("POST","http://80.70.108.29:5000/getordersbyorg"),t.setRequestHeader("Content-Type","application/json"),t.setRequestHeader("Accept","*/*"),t.setRequestHeader("Cache-Control","no-cache"),t.setRequestHeader("Host","80.70.108.29:5000"),t.setRequestHeader("Accept-Encoding","gzip, deflate"),t.setRequestHeader("Content-Length","48"),t.setRequestHeader("Connection","keep-alive"),t.setRequestHeader("cache-control","no-cache"),t.responseType="json",t.send(e)}catch(n){alert(n)}case 1:case"end":return a.stop()}}),null,this)},computed:{contentStyle:function(){return{backgroundColor:"rgba(0,0,0,0)",color:"#555"}},contentActiveStyle:function(){return{backgroundColor:"#eee",color:"black"}},thumbStyle:function(){return{right:"2px",borderRadius:"5px",backgroundColor:"#027be3",width:"5px",opacity:.75}}}},m=b,p=t("2877"),v=t("eebe"),f=t.n(v),g=t("9989"),C=t("eaac"),q=t("2c91"),h=t("9564"),k=t("ddd8"),x=t("9c40"),y=Object(p["a"])(m,a,n,!1,null,null,null);l["default"]=y.exports;f()(y,"components",{QPage:g["a"],QTable:C["a"],QSpace:q["a"],QToggle:h["a"],QSelect:k["a"],QBtn:x["a"]})}}]);