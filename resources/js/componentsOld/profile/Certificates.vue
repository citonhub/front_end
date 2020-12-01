<template>
<div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute;z-index:20; background:white; height:100%;">
     <profile-top></profile-top>
<v-app style="background:white; font-family:BodyText;position:absolute;left:0; width:100%; height:80%; overflow-y:auto; overflow-x:hidden; padding-top:40px;padding-bottom:120px;">
       <div class="col-12 py-0 px-0 my-0">
           <div class="row py-0 my-0 px-2 ">
         <div class="col-12 py-2 my-0 mx-auto px-4" >
            
            <v-card class="py-2  px-2"   flat  style="border:1px solid #81c1ca;" color="#edf6f7"> 
                 
                    <div class="col-12   my-0 mb-1 "  
                    style="height:120px; background:whitesmoke; background-image:url(imgs/imgproj2.jpeg); background-size:cover; background-repeat:no-repeat;">
                        
                        
                      
                    </div> 
                     <div class="col-12   my-0 py-0 " >
                      <div class="row py-0 my-0"> 
                           <div class="col-12 py-0 my-0 text-center">
                             <span class="heading">Full stack web developer</span>
                           </div>
                           <div class="col-12 py-0 my-0 text-center">
                            <div class="row py-0 my-0">
                              <div class="col-6 py-0 my-0">
                                   <span class="issuer px-2">FreeCodeCamp</span>
                              </div>
                              <div class="col-6 py-0 my-0">
                                     <span class="year"><span class="px-2 py-1"> 2020</span></span>
                              </div>
                            </div>
                           </div>
                       </div>  
                    </div> 
                     
                   
            </v-card>
         </div>


         <div class="col-12 py-2 my-0 mx-auto px-4" >
            
            <v-card class="py-2  px-2"   flat  style="border:1px solid #81c1ca;" color="#edf6f7"> 
                 
                    <div class="col-12   my-0 mb-1 "  
                    style="height:120px; background:whitesmoke; background-image:url(imgs/imgproj.jpeg); background-size:cover; background-repeat:no-repeat;">
                        
                        
                      
                    </div> 
                     <div class="col-12   my-0 py-0 " >
                      <div class="row py-0 my-0"> 
                           <div class="col-12 py-0 my-0 text-center">
                             <span class="heading">Flutterwave Expert</span>
                           </div>
                           <div class="col-12 py-0 my-0 text-center">
                            <div class="row py-0 my-0">
                              <div class="col-6 py-0 my-0">
                                   <span class="issuer px-2">Goggle Developer</span>
                              </div>
                              <div class="col-6 py-0 my-0">
                                     <span class="year"><span class="px-2 py-1"> 2019</span></span>
                              </div>
                            </div>
                           </div>
                       </div>  
                    </div> 
                     
                   
            </v-card>
         </div>

     </div>  
       </div>
      
      
      
        <div class="d-none d-md-flex" style="position:fixed;left:0; bottom:5%;width:100%;height:auto;align-items:center;justify-content:center;" >
                   
                      <v-btn small  rounded color="#3E8893" style="font-size:10px;color:white;text-transform:capitalize;"  > <v-icon>mdi-plus mdi-18px </v-icon></v-btn>
         </div>

           <div class="d-md-none d-flex" style="position:fixed;left:0; bottom:10%;width:100%;height:auto;align-items:center;justify-content:center;" >
                   
                      <v-btn small  rounded color="#3E8893" style="font-size:10px;color:white;text-transform:capitalize;"  > <v-icon>mdi-plus mdi-18px </v-icon></v-btn>
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

  .heading{
    font-size:12px; 
    font-family:HeaderText; 
    color:#262626;
}

.year{
    font-size:12px; 
    font-family:HeaderText; 
    color:#737373;
}

.issuer{
      color: #3e868e;
    background: #ffffff;
    font-size: 11px;
    border:2px solid #3e868e;
    border-radius:10px;
}

</style>