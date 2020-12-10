<template>
    <div>

        <div  class=""  style="height:200px; width:100%;" v-if="imageArray.length == 1">
           <div v-for="(imageData,index) in imageArray" :key="index" style="width:100%;height:100%;border:1px solid #c5c5c5;">
           <image-loader :externalUrl="'/imgs/space/' + imageData.image_name + '.' + imageData.image_extension" :backgroundColor="imageData.background_color" ></image-loader>
        </div>
        </div>


         <div  class=" d-flex flex-row"  style="height:200px; width:100%;" v-if="imageArray.length == 2">
           <div v-for="(imageData,index) in imageArray" :key="index" style="width:50%;height:100%;border:1px solid #c5c5c5;">
           <image-loader :externalUrl="'/imgs/space/' + imageData.image_name + '.' + imageData.image_extension" :backgroundColor="imageData.background_color" ></image-loader>
        </div>
        </div>

         <div  class=" d-flex  flex-wrap"  style="height:200px; width:100%;" v-if="imageArray.length == 3">
         
        <div  style="width:50%;height:50%;border:1px solid #c5c5c5;">
           <image-loader :externalUrl="'/imgs/space/' + imageArray[0].image_name + '.' + imageArray[0].image_extension" :backgroundColor="imageArray[0].background_color" ></image-loader>
        </div>


         <div  style="width:50%;height:50%;border:1px solid #c5c5c5;">
           <image-loader :externalUrl="'/imgs/space/' + imageArray[1].image_name + '.' + imageArray[1].image_extension" :backgroundColor="imageArray[1].background_color" ></image-loader>
        </div>

         <div  style="width:100%;height:50%;border:1px solid #c5c5c5;">
           <image-loader :externalUrl="'/imgs/space/' + imageArray[2].image_name + '.' + imageArray[2].image_extension" :backgroundColor="imageArray[2].background_color" ></image-loader>
        </div>

        </div>

        <div  class=" d-flex  flex-wrap"  style="height:200px; width:100%;" v-if="imageArray.length == 4">
         
        <div  style="width:50%;height:50%;border:1px solid #c5c5c5;">
           <image-loader :externalUrl="'/imgs/space/' + imageArray[0].image_name + '.' + imageArray[0].image_extension" :backgroundColor="imageArray[0].background_color" ></image-loader>
        </div>


         <div  style="width:50%;height:50%;border:1px solid #c5c5c5;">
           <image-loader :externalUrl="'/imgs/space/' + imageArray[1].image_name + '.' + imageArray[1].image_extension" :backgroundColor="imageArray[1].background_color" ></image-loader>
        </div>

         <div  style="width:50%;height:50%;border:1px solid #c5c5c5;">
           <image-loader :externalUrl="'/imgs/space/' + imageArray[2].image_name + '.' + imageArray[2].image_extension" :backgroundColor="imageArray[2].background_color" ></image-loader>
        </div>

           <div  style="width:50%;height:50%;border:1px solid #c5c5c5;">
           <image-loader :externalUrl="'/imgs/space/' + imageArray[3].image_name + '.' + imageArray[3].image_extension" :backgroundColor="imageArray[3].background_color" ></image-loader>
        </div>

        </div>


      
    

    </div>
</template>
<script>
const ImageLoader = () => import(
    /* webpackChunkName: "ImageLoader?v=0.10" */ './ImageLoader.vue'
  );
export default {
    props:['imageArray'],
     data(){
        return{      
             color:'#c5c5c5',
            imageUrl1: 'http://citonhubnew.com/imgs/public.jpg',
             imageUrl2: 'http://citonhubnew.com/imgs/public2.jpg',
             sliderState:''
        }
    },
    components:{
    ImageLoader
    },
    methods:{
        viewFullImage:function(imageData){
            
            this.$root.fullImageViewer = true;
            this.$root.fullImageColor = imageData.background_color;
            this.$root.imageViewPath = 'imgs/space/' + imageData.image_name + '.' + imageData.image_extension;
             this.$root.showChatBottom = false;

               this.$router.push({ path: '/image-viewer'});
        }
    }  
}
</script>
<style>

</style>