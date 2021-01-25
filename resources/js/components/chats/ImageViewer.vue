<template>
     <div style="background:transparent; font-family:BodyFont;position:absolute; background:white; top:0%; height:100%; overflow-y:auto; overflow-x:hidden; z-index:987664736568; width:100%;">
       

           <v-btn icon color="#ffffff" @click="goBack" style="position:absolute;background:#3C87CD;top:4%; left:3%; z-index:990679797879;" 
           class="d-inline-block  "><v-icon>mdi-close mdi-18px</v-icon></v-btn>
      
         <div class="row my-0 py-0 ">

        
      <v-carousel v-model="sliderState"
         height="100%"
          width="100%"
          style="position:absolute; left:0%;"
         delimiter-icon="mdi-minus mdi-18px"
         :next-icon="false"
         :show-arrows="false">

         <v-carousel-item   v-for="(imageData,index) in that.$root.imageArrayView" :key="index" >

              <div :style="'position:absolute; height:100%; width:100%; overflow-y:auto;left:0;top:0%;background:' + imageData.background_color +';'"> 


      

      
       
    
    <!-- image view -->

       <div class="col-12 py-0 my-0 px-0 d-flex scroller" style="position:absolute; height:80%; top:10%; width:96%; left:2%; overflow-y:auto; overflow-x:hidden; align-items:center; justify-content:center;">
        
            <img :src="'/imgs/space/' + imageData.image_name + '.' + imageData.image_extension" style="height:auto; " width="100%">
         
       </div>
              
   <!-- ends -->
   
 
    </div>

            
           
         </v-carousel-item>

        </v-carousel>

     
         </div>
       

       

     </div>
</template>
<script>
const ImageLoader = () => import(
    /* webpackChunkName: "ImageLoader?v=0.10" */ './ImageLoader.vue'
  );

export default {

       mounted(){
           this.$root.componentIsLoading = false;
     
    },
     components: {
      
      
    },
     computed: {
    codemirror() {
      
    }
   },
    components:{
    ImageLoader
    },
    data(){
        return{
          imageUrl1:'imgs/public.jpg',
          color:'#c5c5c5',
           that:this,
       sliderState:this.$root.imageSlidestate
         
    }
},
methods:{
     onCmCursorActivity(codemirror) {
        console.debug('onCmCursorActivity', codemirror)
      },
       goBack() {
          
           window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
          this.$root.chatComponent.chatInnerConent = '';
       
        
        },
        
      
}
}
</script>
<style lang="scss" scoped>
.scroller::-webkit-scrollbar {
  width: 6px;
}


.scroller::-webkit-scrollbar-thumb {
   background-color: #3C87CD;
  outline: 1px solid #3C87CD;
}


</style>