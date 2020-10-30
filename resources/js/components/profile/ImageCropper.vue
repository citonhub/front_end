<template>
    <div class="px-2 col-12">
        <cropper
	:stencil-component="componentType"
    :src="img"
	classname="upload-cropper"
    :stencil-props="stencilProps"
     ref="maincropper"
    
      />
    </div>
</template>
<script>
import {  Cropper } from 'vue-advanced-cropper';
export default {
    props:['stencilProps','img','componentType'],
    components: {
		Cropper
	},
    data() {
		return {
         image:null,
         coordinates: {
				width: 0,
				height: 0,
				left: 0,
				top: 0,
			},
            canvas:null,
		};
	},
	mounted(){
      
	},
    methods: {
		crop() {
			const { coordinates, canvas, } = this.$refs.maincropper.getResult();
			this.coordinates = coordinates;
			// You able to do different manipulations at a canvas
			// but there we just get a cropped image
             this.canvas = canvas;
			this.image = canvas.toDataURL();
		}
	},
}
</script>
<style>
.upload-cropper{
	border: solid 1px #EEE;
	height: 96%;
	background: #edf6f7;
	width: 98%;
}
</style>