(window.webpackJsonp=window.webpackJsonp||[]).push([[57,58],{252:function(t,e,i){var o=i(383);"string"==typeof o&&(o=[[t.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i(25)(o,a);o.locals&&(t.exports=o.locals)},382:function(t,e,i){"use strict";var o=i(252);i.n(o).a},383:function(t,e,i){(t.exports=i(24)(!1)).push([t.i,"\n.grid-box-picturebox{ \n  width:100%;\n  height: 100%; \n  position: relative;       \n  overflow: hidden;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n#blend-in {\n  animation: fadein 0.15s;\n  -moz-animation: fadein 0.15s; /* Firefox */\n  -webkit-animation: fadein 0.15s; /* Safari and Chrome */\n  -o-animation: fadein 0.15s; /* Opera */\n}\n\n",""])},748:function(t,e,i){"use strict";i.r(e);var o={data:function(){return{image:"",imageUrl:""}},props:{externalUrl:{},backgroundColor:{}},mounted:function(){this.setImage()},methods:{setImage:function(){this.imageUrl=this.externalUrl,this.image="";var t=new Image,e=this;t.onload=function(){e.image=e.imageUrl},t.src=this.imageUrl}}},a=(i(382),i(4)),n=Object(a.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"grid-box-picturebox",style:"background-image:url("+this.image+"); background-color:"+this.backgroundColor+";",attrs:{id:"blend-in"}})}),[],!1,null,null,null);e.default=n.exports},839:function(t,e,i){"use strict";i.r(e);var o={data:function(){return{image:"",imageUrl:"",externalUrl:"",backgroundColor:"",additionalStyle:"",externalClass:""}},props:["post"],mounted:function(){this.setImage()},methods:{setImage:function(){this.imageStyle(200,this.post),this.imageUrl=this.externalUrl,this.image="";var t=new Image,e=this;t.onload=function(){e.image=e.imageUrl},t.src=this.imageUrl},imageStyle:function(t,e){if(null==e.image_extension){var i="height: "+t+"px; width: 94%;  position:absolute; left: 3%; border: 1px solid #c5c5c5;  background-repeat: no-repeat; border-radius: 20px; box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25); background-size: cover;";this.additionalStyle=i,this.backgroundColor="white";var o="";null==e.image_name||"0"==e.image_name?o="imgs/default_1.jpg":("default_1"==e.image_name&&(o="imgs/background1.jpg"),"default_2"==e.image_name&&(o="imgs/background3.jpg"),"default_3"==e.image_name&&(o="imgs/imgproj2.jpeg")),this.externalUrl=o}else{var a="height: "+t+"px; width: 94%; left: 3%;  position:absolute; border: 1px solid #c5c5c5;  background-repeat: no-repeat; border-radius: 20px; box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25); background-size: cover;";this.additionalStyle=a;var n=e.image_name+"."+e.image_extension;this.externalUrl="imgs/posts/"+n,this.backgroundColor=e.background_color}},showProject:function(t,e){this.$router.push({path:"/hub/post/".concat(e)}),this.$root.currentPost=t}}},a=i(4),n=Object(a.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:t.additionalStyle+"background-image:url("+t.image+"); background-color:"+t.backgroundColor+";",on:{click:function(e){return t.showProject(t.post.id,t.post.post_id)}}},[i("div",{staticClass:"pt-3 px-2  pl-3",staticStyle:{position:"absolute",width:"100%",height:"35%",left:"0",bottom:"0%","border-radius":"0px","border-bottom-left-radius":"20px","border-bottom-right-radius":"20px",background:"linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%)"}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-9 py-0 my-0 d-flex flex-column"},[i("div",{staticStyle:{"font-family":"MediumFont","font-size":"13px",color:"white","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[t._v(t._s(t.post.title))]),t._v(" "),i("div",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"white","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[t._v(t._s(t.post.description))])]),t._v(" "),i("div",{staticClass:"col-3 py-0 my-0 text-right"},t._l(JSON.parse(t.post.tags),(function(t,e){return i("i",{key:e,class:t.icon,staticStyle:{"font-size":"25px",color:"white"}})})),0)])])])}),[],!1,null,null,null);e.default=n.exports}}]);