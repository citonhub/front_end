(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{629:function(t,e,s){"use strict";s.r(e);var i={data:function(){return{participants:[],that:this}},mounted:function(){this.fetchParticipant()},methods:{sortArray:function(t){t.sort((function(t,e){return e.stars-t.stars}))},imageStyleUser:function(t,e){if(null==e.background_color){var s="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5;";return s+="background-color:#ffffff; background-image:url(imgs/profile.png);"}var i="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5; ",a=e.image_name+"."+e.image_extension;return i+="background-color:"+e.background_color+"; background-image:url(/imgs/profile/thumbnails/"+a+");"},fetchParticipant:function(){var t=this;axios.get("/fetch-participants/"+this.$route.params.challenge_id).then((function(e){200==e.status?(t.$root.selectedChallenge.duel_participants=e.data.participants,t.$root.selectedChallenge.duel_participants.sort((function(t,e){return e.stars-t.stars}))):console.log(e.status)})).catch((function(t){}))},getUserLevel:function(t){var e="";return t>=0&&t<=99?e+="/imgs/newbie.svg":t>=100&&t<=999?e+="/imgs/junior.svg":t>=1e3&&t<=4999?e+="/imgs/intermediate.svg":t>=5e3&&t<=9999?e+="/imgs/senior.svg":t>=1e4&&t<=14999?e+="/imgs/expert.svg":t>=15e3&&t<=1e5&&(e+="/imgs/super_dev.svg"),e}}},a=s(4),r=Object(a.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"col-lg-10 offset-lg-1 px-md-2 px-1"},[t._l(this.$root.selectedChallenge.duel_participants,(function(e,i){return s("div",{key:i,staticClass:"col-12 py-0 d-flex flex-row pr-0",staticStyle:{"align-items":"center",background:"#F3F8FC"}},[s("div",{staticClass:"mr-2 d-flex",staticStyle:{"align-items":"center","justify-content":"center"}},[s("div",{style:t.imageStyleUser(40,e)})]),t._v(" "),s("div",{staticClass:"py-3 d-flex flex-row",staticStyle:{"border-bottom":"1px solid #c5c5c5",width:"100%","align-items":"center"}},[s("div",{staticClass:"col-8 py-0 px-0 d-flex flex-row",staticStyle:{"align-items":"center"}},[s("span",{staticClass:"mr-1",staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v(t._s(e.username)+" ")]),t._v(" "),s("img",{staticClass:"mx-1",attrs:{src:t.getUserLevel(e.points),height:"22px"}})]),t._v(" "),s("div",{staticClass:"col-4 py-0 px-0 d-flex pt-1 pr-2 flex-row-reverse",staticStyle:{"align-items":"center"}},[s("div",{staticStyle:{"font-size":"12px"}},[t._v(t._s(e.stars))]),t._v(" "),t._m(0,!0)])])])})),t._v(" "),s("div",{staticClass:"col-12 py-5 my-2"})],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mr-1"},[e("i",{staticClass:"las la-trophy",staticStyle:{"font-size":"20px",color:"gray"}})])}],!1,null,"26c62090",null);e.default=r.exports}}]);