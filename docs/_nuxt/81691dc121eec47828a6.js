(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{141:function(t,a,e){var i=e(144);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(40).default)("2a62bd5a",i,!0,{})},143:function(t,a,e){"use strict";var i=e(141);e.n(i).a},144:function(t,a,e){var i=e(145);(t.exports=e(39)(!1)).push([t.i,".rounded-card{border-radius:5px}.fixed{position:fixed}.car-divider{width:100%;height:20px;background-image:url("+i(e(146))+");background-size:contain;background-repeat:repeat-x}",""])},145:function(t,a){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},146:function(t,a,e){t.exports=e.p+"img/6f3d154.png"},149:function(t,a,e){"use strict";e.r(a);e(41);var i={name:"car",data:function(){return{name:null,dialog:!1,cars:{cadilac:{images:9,year:2013,price:"SOLD",title:"Cadilac XTS",miles:"15K"},mercedes:{images:13,year:2002,price:"$8,750",title:"Mercedes Benz S55 AMG",miles:"15K"},mazda:{images:12,year:2012,price:"$9,500",title:"Mazda Miata MX5",miles:"19K"},ram_truck:{images:4,year:2013,price:"$19,000",title:"Dodge RAM 1500",miles:"56K"},ram_van:{images:2,year:2016,price:"$14,000",title:"RAM Promaster",miles:"4K"},honda_crz:{images:15,year:2016,price:"$9,500",title:"Honda CRZ",miles:"14K"}}}},created:function(){this.name=this.$route.query.name}},r=(e(143),e(21)),s=Object(r.a)(i,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("section",[e("v-container",{attrs:{"pa-0":"",fluid:"",white:""}},[e("v-layout",{staticClass:"my-5",attrs:{row:"",wrap:"","align-center":""}},[t.name&&t.cars[t.name]?e("v-flex",{attrs:{xs12:""}},[t._l(t.cars[t.name].images,function(a){return[e("img",{attrs:{width:"100%",src:"/cars/"+t.name+"/"+a+".jpg"}}),t._v(" "),e("div",{staticClass:"car-divider"})]}),t._v(" "),e("v-card",{staticClass:"rounded-card elevation-0 transparent fixed",staticStyle:{top:"70px",right:"0"},attrs:{fluid:""}},[e("v-dialog",{attrs:{"max-width":"700"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-btn",{attrs:{slot:"activator",color:"blue darken-2",round:""},slot:"activator"},[t._v("\n                  Description\n                ")]),t._v(" "),e("v-card",[e("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n                    Description\n                  ")]),t._v(" "),e("v-card-text",[t._v("\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                  ")]),t._v(" "),e("v-divider"),t._v(" "),e("v-card-actions",[e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(a){t.dialog=!1}}},[t._v("\n                      Close\n                    ")])],1)],1)],1)],1),t._v(" "),e("v-card",{staticClass:"rounded-card elevation-0 transparent fixed",staticStyle:{bottom:"10px",right:"0"},attrs:{fluid:""}},[e("v-card-text",{staticClass:"pa-1"},[e("v-layout",{attrs:{wrap:"",column:""}},[e("v-flex",{attrs:{xs12:"",md4:""}},[e("v-chip",{staticClass:"white elevation-2 subheading right "},[t._v("Year: "),e("strong",{staticClass:"pl-1"},[t._v(t._s(t.cars[t.name].year))])])],1),t._v(" "),e("v-flex",{attrs:{xs12:"",md4:""}},[e("v-chip",{staticClass:"white elevation-2 subheading right"},[t._v("Miles: "),e("strong",{staticClass:"pl-1"},[t._v(t._s(t.cars[t.name].miles))])])],1),t._v(" "),e("v-flex",{attrs:{xs12:"",md4:""}},[e("v-chip",{staticClass:"white elevation-2 subheading right"},[t._v("Price: "),e("strong",{staticClass:"pl-1"},[t._v(t._s(t.cars[t.name].price))])])],1),t._v(" "),e("v-flex",{attrs:{xs12:"",md4:""}},[e("v-chip",{staticClass:"white elevation-2 subheading right"},[e("strong",[t._v(t._s(t.cars[t.name].title))])])],1)],1)],1)],1),t._v(" "),e("div",{staticClass:"fixed pa-3",staticStyle:{bottom:"0",left:"0px"}},[e("v-btn",{staticStyle:{"background-color":"#3b5998",overflow:"hidden"},attrs:{fab:""}},[e("v-img",{attrs:{src:"/f-logo.svg",height:"56px"}})],1),t._v(" "),e("v-btn",{staticStyle:{"background-color":"#00aced",overflow:"hidden"},attrs:{fab:""}},[e("v-img",{attrs:{src:"/tw-logo.svg",height:"46px"}})],1)],1)],2):t._e()],1)],1)],1)])},[],!1,null,null,null);s.options.__file="car.vue";a.default=s.exports}}]);