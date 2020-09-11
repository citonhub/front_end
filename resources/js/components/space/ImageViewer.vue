<template>
    <div>
        <v-carousel v-model="sliderState"
         height="200"
        
        
         delimiter-icon="mdi-minus mdi-18px"
         style="border-radius:10px;border:1px solid #5dafbb;"
         :next-icon="false"
         :show-arrows="false">

         <v-carousel-item @click.stop="viewFullImage(imageData)" style="cursor:pointer;" v-for="(imageData,index) in imageArray" :key="index">
             <image-loader :externalUrl="'imgs/space/' + imageData.image_name + '.' + imageData.image_extension" :backgroundColor="imageData.background_color" ></image-loader>
         </v-carousel-item>

        </v-carousel>

    </div>
</template>
<script>
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
    methods:{
        viewFullImage:function(imageData){
            
            this.$root.fullImageViewer = true;
            this.$root.fullImageColor = imageData.background_color;
            this.$root.imageViewPath = 'imgs/space/' + imageData.image_name + '.' + imageData.image_extension;
             this.$root.showChatBottom = false;
        }
    }  
}
</script>
<style>

</style>