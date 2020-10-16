<template>

<v-app  class="col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-0 my-0 px-0" style="border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6; position:absolute; font-family:BodyText; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
        <div class="row my-0 py-0 px-0">

          

         
       <div class="col-12 col-lg-8 offset-lg-2 py-3 morebackground4 d-flex" >  
         <v-card class="py-1 px-2 row" >
            <div class="col-12 text-center py-1">
               <h6>Oops! Page not found</h6>
            </div>
         </v-card>
     </div>

     <div  style=" height:50%; bottom:-35%;  z-index:1000000;"  class=" fixed-bottom col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 my-0 px-0"> 
  
       <img src="/imgs/CitonHub.png"  width="100%" height="100%">

     </div>
         

        </div>

     </v-app>

</template>
<script>
export default {
     data () {
      return {
        
      }
    },
     mounted(){
    
      
    },
    methods:{
      
    }
}
</script>
<style>
.morebackground4{
     position: absolute;
     width:100%; 
     top: 0;
     left: 0;
     height:100%; 
     align-items: center;
     justify-content: center;
     background:#ffffff;
     z-index:100000;
 }

</style>