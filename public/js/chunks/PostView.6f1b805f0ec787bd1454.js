(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{357:function(t,o,e){var s=e(587);"string"==typeof s&&(s=[[t.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(25)(s,r);s.locals&&(t.exports=s.locals)},586:function(t,o,e){"use strict";var s=e(357);e.n(s).a},587:function(t,o,e){(t.exports=e(24)(!1)).push([t.i,"\n.projectBox[data-v-01c8c599]{\n  cursor: pointer;\n}\n",""])},687:function(t,o,e){"use strict";e.r(o);var s={data:function(){return{externalUrl:"",backgroundColor:"",additionalStyle:"",externalClass:""}},props:["source","fromProfile","alertComponent","username"],components:{MoreOptions:function(){return e.e(69).then(e.bind(null,701))},ImageLoader:function(){return e.e(60).then(e.bind(null,702))}},mounted:function(){},methods:{imageStyleUser:function(t,o){if(null==o.background_color){var e="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5;cursor:pointer;";return e+="background-color:#ffffff; background-image:url(imgs/profile.png);"}var s="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5;cursor:pointer; ",r=o.image_name+"."+o.image_extension;return s+="background-color:"+o.background_color+"; background-image:url(/imgs/profile/"+r+");"},getUserLevel:function(t){var o="";return t>=0&&t<=99?o+="/imgs/newbie.svg":t>=100&&t<=999?o+="/imgs/junior.svg":t>=1e3&&t<=4999?o+="/imgs/intermediate.svg":t>=5e3&&t<=9999?o+="/imgs/senior.svg":t>=1e4&&t<=14999?o+="/imgs/expert.svg":t>=15e3&&t<=1e5&&(o+="/imgs/super_dev.svg"),o},showProject:function(t,o){this.$root.fromProfile=this.fromProfile,this.$root.fromProfileUsername=this.username,this.$router.push({path:"/hub/post/".concat(o)}),this.$root.currentPost=t},goToProfile:function(t){this.$root.selectedUsername=t,this.$router.push({path:"/profile-view/"+t})}}},r=(e(586),e(4)),i=Object(r.a)(s,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{class:t.fromProfile?"col-lg-4 col-md-6 px-0 mb-5  pt-1 pt-md-2 projectBox":"col-lg-3 mb-5  col-md-6 px-0 pt-1 pt-md-2 projectBox",staticStyle:{height:"212px"}},[e("image-loader",{attrs:{post:t.source}}),t._v(" "),e("v-card",{staticClass:"py-1 px-1",staticStyle:{position:"absolute",width:"94%",height:"auto",left:"3%",top:"0","border-radius":"0px","border-top-left-radius":"20px","border-top-right-radius":"20px"}},[e("div",{staticClass:"col-12 py-0 my-0 px-1 text-left"},[e("div",{staticClass:"row py-0 my-0"},[e("div",{staticClass:"col-10 py-0 my-0 d-flex flex-row",staticStyle:{"align-items":"center"}},[e("div",{staticClass:"mr-1",style:t.imageStyleUser(30,t.source.user),on:{click:function(o){return t.goToProfile(t.source.user.username)}}}),t._v(" "),e("div",{staticStyle:{"font-family":"MediumFont","font-size":"13px"},on:{click:function(o){return t.goToProfile(t.source.user.username)}}},[t._v(t._s(t.source.user.username)+"  "),e("img",{staticClass:"mx-1",attrs:{src:t.getUserLevel(t.source.user.points),height:"22px"}})])]),t._v(" "),e("div",{staticClass:"col-2 text-right py-0 my-0"},[e("v-btn",{attrs:{icon:"",id:"activatorPost"+t.source.id}},[e("v-icon",{staticStyle:{"font-size":"25px"}},[t._v("las la-ellipsis-v")])],1),t._v(" "),e("v-menu",{staticStyle:{"z-index":"99999999999999999999"},attrs:{absolute:"",activator:"#activatorPost"+t.source.id,right:"","offset-y":""}},[e("more-options",{attrs:{post:t.source,alertComponent:t.alertComponent,fromProfile:t.fromProfile}})],1)],1)])])]),t._v(" "),e("div",{staticClass:"py-1 px-2",staticStyle:{position:"absolute",width:"94%",height:"auto",left:"3%",top:"97%"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 py-0 my-0 text-right"},[e("span",{staticClass:"d-inline-block mx-1"},[e("i",{staticClass:"lar la-heart",staticStyle:{"font-size":"20px",color:"#3C87CD"}}),t._v(" "),e("span",{staticStyle:{"font-family":"MediumFont","font-size":"12px",color:"#000000"}},[t._v(t._s(t.source.likes))])]),t._v(" "),e("span",{staticClass:"d-inline-block mx-1"},[e("i",{staticClass:"las la-comment",staticStyle:{"font-size":"20px",color:"#3C87CD"}}),t._v(" "),e("span",{staticStyle:{"font-family":"MediumFont","font-size":"12px",color:"#000000"}},[t._v(t._s(t.source.comments))])])])])])],1)}),[],!1,null,"01c8c599",null);o.default=i.exports}}]);