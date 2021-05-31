<template>
<div class="  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute;z-index:20; background:white; height:100%;">
    
    <!-- profile top brought in from profiletop.vue-->
     <profile-top></profile-top>
<v-app style="background:white; font-family:BodyText;position:absolute;left:0; width:100%; height:80%; overflow-y:auto; overflow-x:hidden; padding-top:40px;padding-bottom:120px;">
       <div class="col-12 py-0 px-0 my-0">
           <div class="row py-0 my-0 px-2 ">
         <div class="col-6 py-2 my-0 mx-auto " style="height:100px;">
            
            <v-card class="py-2  px-2" height="100%" > 
                    <div class="col-12   my-0 px-4 py-4 d-flex text-center"  
                    style="align-items:center; height:100%; justify-content:center; border:2px solid #3E8893;background:#edf6f7;">
                        
                        <span class="titleText">Tensorflow</span>
                      
                    </div> 
                     
                   
            </v-card>
         </div>
          <div class="col-6 py-2  my-0 " style="height:100px;">
            
            <v-card class="py-2  px-2" height="100%"> 
                    <div class="col-12   my-0 px-4 py-4 d-flex text-center"  
                    style="align-items:center; height:100%; justify-content:center; border:2px solid #3E8893;background:#edf6f7;">
                         
                        <span class="titleText">Web development</span>
                      
                    </div> 
                     
                   
            </v-card>
         </div>

         <div class="col-6 py-2 my-0 " style="height:100px;">
            
            <v-card class="py-2  px-2" height="100%"> 
                    <div class="col-12   my-0 px-4 py-4 d-flex text-center"  
                    style="align-items:center; height:100%; justify-content:center; border:2px solid #3E8893;background:#edf6f7;">
                        
                        <span class="titleText">React Js</span>
                      
                    </div> 
                     
                   
            </v-card>
         </div>
          <div class="col-6 py-2  my-0 " style="height:100px;">
            
            <v-card class="py-2  px-2" height="100%"> 
                    <div class="col-12   my-0 px-4 py-4 d-flex text-center"  
                    style="align-items:center; height:100%; justify-content:center; border:2px solid #3E8893;background:#edf6f7;">
                        
                        <span class="titleText">Data Science</span>
                      
                    </div> 
                     
                   
            </v-card>
         </div>

          <div class="col-6 py-2 my-0 " style="height:100px;">
            
            <v-card class="py-2  px-2" height="100%"> 
                    <div class="col-12   my-0 px-4 py-4 d-flex text-center"  
                    style="align-items:center; height:100%; justify-content:center; border:2px solid #3E8893;background:#edf6f7;">
                        
                        <span class="titleText">Internet of Things</span>
                      
                    </div> 
                     
                   
            </v-card>
         </div>
          <div class="col-6 py-2  my-0 " style="height:100px;">
            
            <v-card class="py-2  px-2" height="100%"> 
                    <div class="col-12   my-0 px-4 py-4 d-flex text-center"  
                    style="align-items:center; height:100%; justify-content:center; border:2px solid #3E8893;background:#edf6f7;">
                        
                        <span class="titleText">Andrino</span>
                      
                    </div> 
                     
                   
            </v-card>
         </div>

         
     </div>  
       </div>
      
      
      
       

</v-app>    
</div>

</template>
<script>
export default {
     data(){
        return{
        
          
        }
    },
     components: {
   
  },
    mounted(){
      
    },
    methods:{
       goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        
  
  },
}
</script>
<style>

  .titleText{
    font-size:12px; 
    font-family:HeaderText; 
    color:#3E8893;
}

</style>