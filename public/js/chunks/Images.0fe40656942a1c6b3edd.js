(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{656:function(e,r,a){"use strict";a.r(r);var i={props:["imageArray"],data:function(){return{color:"#c5c5c5",imageUrl1:"http://citonhubnew.com/imgs/public.jpg",imageUrl2:"http://citonhubnew.com/imgs/public2.jpg",sliderState:""}},components:{ImageLoader:function(){return a.e(4).then(a.bind(null,658))}},methods:{showImageGallery:function(e){this.$router.currentRoute.path.indexOf("edit-note")>=0||(this.$root.imageSlidestate=e,this.$root.imageArrayView=this.imageArray,this.$router.push({path:"/channels/"+this.$root.selectedSpace.space_id+"/image_viewer"}))}}},t=a(4),o=Object(t.a)(i,(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",[1==e.imageArray.length?a("div",{staticStyle:{height:"200px",width:"100%"}},e._l(e.imageArray,(function(r,i){return a("div",{key:i,staticStyle:{width:"100%",height:"100%",border:"1px solid #c5c5c5",cursor:"pointer"},on:{click:function(r){return r.stopPropagation(),e.showImageGallery(0)}}},[a("image-loader",{attrs:{externalUrl:"/imgs/space/"+r.image_name+"."+r.image_extension,backgroundColor:r.background_color}})],1)})),0):e._e(),e._v(" "),2==e.imageArray.length?a("div",{staticClass:" d-flex flex-row",staticStyle:{height:"200px",width:"100%"}},e._l(e.imageArray,(function(r,i){return a("div",{key:i,staticStyle:{width:"50%",height:"100%",border:"1px solid #c5c5c5",cursor:"pointer"},on:{click:function(r){return r.stopPropagation(),e.showImageGallery(i)}}},[a("image-loader",{attrs:{externalUrl:"/imgs/space/"+r.image_name+"."+r.image_extension,backgroundColor:r.background_color}})],1)})),0):e._e(),e._v(" "),3==e.imageArray.length?a("div",{staticClass:" d-flex  flex-wrap",staticStyle:{height:"200px",width:"100%"}},[a("div",{staticStyle:{width:"50%",height:"50%",border:"1px solid #c5c5c5",cursor:"pointer"},on:{click:function(r){return r.stopPropagation(),e.showImageGallery(0)}}},[a("image-loader",{attrs:{externalUrl:"/imgs/space/"+e.imageArray[0].image_name+"."+e.imageArray[0].image_extension,backgroundColor:e.imageArray[0].background_color}})],1),e._v(" "),a("div",{staticStyle:{width:"50%",height:"50%",border:"1px solid #c5c5c5",cursor:"pointer"},on:{click:function(r){return r.stopPropagation(),e.showImageGallery(1)}}},[a("image-loader",{attrs:{externalUrl:"/imgs/space/"+e.imageArray[1].image_name+"."+e.imageArray[1].image_extension,backgroundColor:e.imageArray[1].background_color}})],1),e._v(" "),a("div",{staticStyle:{width:"100%",height:"50%",border:"1px solid #c5c5c5",cursor:"pointer"},on:{click:function(r){return r.stopPropagation(),e.showImageGallery(2)}}},[a("image-loader",{attrs:{externalUrl:"/imgs/space/"+e.imageArray[2].image_name+"."+e.imageArray[2].image_extension,backgroundColor:e.imageArray[2].background_color}})],1)]):e._e(),e._v(" "),4==e.imageArray.length?a("div",{staticClass:" d-flex  flex-wrap",staticStyle:{height:"200px",width:"100%"}},[a("div",{staticStyle:{width:"50%",height:"50%",border:"1px solid #c5c5c5",cursor:"pointer"},on:{click:function(r){return r.stopPropagation(),e.showImageGallery(0)}}},[a("image-loader",{attrs:{externalUrl:"/imgs/space/"+e.imageArray[0].image_name+"."+e.imageArray[0].image_extension,backgroundColor:e.imageArray[0].background_color}})],1),e._v(" "),a("div",{staticStyle:{width:"50%",height:"50%",border:"1px solid #c5c5c5",cursor:"pointer"},on:{click:function(r){return r.stopPropagation(),e.showImageGallery(1)}}},[a("image-loader",{attrs:{externalUrl:"/imgs/space/"+e.imageArray[1].image_name+"."+e.imageArray[1].image_extension,backgroundColor:e.imageArray[1].background_color}})],1),e._v(" "),a("div",{staticStyle:{width:"50%",height:"50%",border:"1px solid #c5c5c5",cursor:"pointer"},on:{click:function(r){return r.stopPropagation(),e.showImageGallery(2)}}},[a("image-loader",{attrs:{externalUrl:"/imgs/space/"+e.imageArray[2].image_name+"."+e.imageArray[2].image_extension,backgroundColor:e.imageArray[2].background_color}})],1),e._v(" "),a("div",{staticStyle:{width:"50%",height:"50%",border:"1px solid #c5c5c5",cursor:"pointer"},on:{click:function(r){return r.stopPropagation(),e.showImageGallery(3)}}},[a("image-loader",{attrs:{externalUrl:"/imgs/space/"+e.imageArray[3].image_name+"."+e.imageArray[3].image_extension,backgroundColor:e.imageArray[3].background_color}})],1)]):e._e()])}),[],!1,null,null,null);r.default=o.exports}}]);