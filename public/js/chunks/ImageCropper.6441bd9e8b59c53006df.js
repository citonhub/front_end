(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{642:function(t,e,i){"use strict";i.r(e);var o={data:function(){return{imagepath:"",cropType:"rectangle-stencil",cropProp:{},cropPropEdit:{handlers:{},movable:!0,scalable:!1,aspectRatio:1}}},components:{ImageCropper:function(){return Promise.all([i.e(99),i.e(58)]).then(i.bind(null,663))}},mounted:function(){this.$root.fromChannelEdit?this.imagepath=this.$root.imagepath:("image1"==this.$root.currentImage&&(this.imagepath=this.$root.imagepath1),"image2"==this.$root.currentImage&&(this.imagepath=this.$root.imagepath2),"image3"==this.$root.currentImage&&(this.imagepath=this.$root.imagepath3),"image4"==this.$root.currentImage&&(this.imagepath=this.$root.imagepath4))},methods:{goBack:function(){this.$root.fromChannelEdit?(this.$refs.cropperEdit.crop(),this.$root.croppedImage=null,this.$root.croppedImage=this.$refs.cropperEdit.image,this.$root.showImageCropper=!1,window.history.length>1?this.$router.go(-1):this.$router.push("/")):(this.$refs.cropper.crop(),"image1"==this.$root.currentImage&&(this.$root.imagepath1=this.$refs.cropper.image,this.$root.imageCanvas1=this.$refs.cropper.canvas,this.$root.imageHeight1=this.$refs.cropper.coordinates.height,this.$root.imageWidth1=this.$refs.cropper.coordinates.width),"image2"==this.$root.currentImage&&(this.$root.imagepath2=this.$refs.cropper.image,this.$root.imageCanvas2=this.$refs.cropper.canvas,this.$root.imageHeight2=this.$refs.cropper.coordinates.height,this.$root.imageWidth2=this.$refs.cropper.coordinates.width),"image3"==this.$root.currentImage&&(this.$root.imagepath3=this.$refs.cropper.image,this.$root.imageCanvas3=this.$refs.cropper.canvas,this.$root.imageHeight3=this.$refs.cropper.coordinates.height,this.$root.imageWidth3=this.$refs.cropper.coordinates.width),"image4"==this.$root.currentImage&&(this.$root.imagepath4=this.$refs.cropper.image,this.$root.imageCanvas4=this.$refs.cropper.canvas,this.$root.imageHeight4=this.$refs.cropper.coordinates.height,this.$root.imageWidth4=this.$refs.cropper.coordinates.width),window.history.length>1?this.$router.go(-1):this.$router.push("/"))}}},r=i(4),s=Object(r.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"d-flex flex-row"},[t._m(0),t._v(" "),i("div",{staticClass:"col-6 px-2 py-1 text-right"},[i("v-btn",{staticStyle:{"font-size":"12px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{small:"",rounded:"",color:"#3C87CD"},on:{click:t.goBack}},[i("span",{staticStyle:{color:"white","text-transform":"none"}},[t._v("Crop")])])],1)]),t._v(" "),i("div",{staticClass:"col-lg-10 offset-lg-1",staticStyle:{position:"absolute",height:"80%",left:"0",top:"7%"}},[this.$root.fromChannelEdit?[i("image-cropper",{ref:"cropperEdit",staticClass:" d-flex col-12 ",staticStyle:{"align-items":"center","justify-content":"center",height:"100%"},attrs:{img:this.imagepath,componentType:t.cropType,stencilProps:t.cropPropEdit}})]:[i("image-cropper",{ref:"cropper",staticClass:" d-flex col-12 ",staticStyle:{"align-items":"center","justify-content":"center",height:"100%"},attrs:{img:this.imagepath,componentType:t.cropType,stencilProps:t.cropProp}})]],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-6  py-1 px-2"},[e("span",{staticStyle:{"font-size":"14px",color:"white","font-family":"HeaderFont"}},[this._v("Crop Image")])])}],!1,null,"bc5abf20",null);e.default=s.exports}}]);