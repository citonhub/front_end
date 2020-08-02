<template>
     <v-app style="background:transparent; font-family:BodyText;">

       <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:fixed; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">

         <div :style="'position:absolute; height:100%; width:100%; overflow-y:auto;left:0;top:0%;background:' + this.$root.fullImageColor +';'"> 


      

       <div class="col-12 py-0 my-0 px-0 d-flex" style="position:absolute; height:80%; top:10%; width:100%; overflow-y:auto; overflow-x:hidden; align-items:center; justify-content:center;">
          <v-btn icon color="#ffffff" @click="goBack" style="position:absolute;background:#3E8893;top:7%; left:3% z-index:990679797879;" 
           class="d-inline-block  "><v-icon>mdi-close mdi-18px</v-icon></v-btn>

           <v-img :src="this.$root.imageViewPath"></v-img>
       </div>
              

   
 
    </div>
     
         </div>
       </div>

       

     </v-app>
</template>
<script>


export default {
       mounted(){
      this.$root.showTabs=false;
        
    },
     components: {
      
      
    },
     computed: {
    codemirror() {
      
    }
   },
    data(){
        return{
          imageUrl1:'imgs/public.jpg',
          color:'#c5c5c5'
         
    }
},
methods:{
     onCmCursorActivity(codemirror) {
        console.debug('onCmCursorActivity', codemirror)
      },
       goBack() {
        this.$root.fullImageViewer = false;
         this.$root.showTabs=true;
         
  
        },
      
      
}
}
</script>
<style lang="scss" scoped>
.fileText{
    font-size:10px;
}


</style>