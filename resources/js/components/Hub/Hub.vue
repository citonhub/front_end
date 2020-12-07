<template>
    <div  style="position:fixed;height:100%;background:#F5F5FB; width:100%;">

        <!-- top bar -->
        <div class="col-12 py-0 fixed-top" style="position:sticky;width:100%;height:auto; ">
         <top-bar></top-bar>
        </div>
     

       <!-- ends -->

       <!-- hub content -->
       
        <div class="col-lg-10 offset-lg-1 col-12 px-0" style=" position:absolute; height:92%; top:8%; " >

            <div class="row px-md-4 px-4">
              <!-- header -->
            <div class="col-lg-6 px-0 pb-1 " style="border-bottom:1px solid #263238;z-index:99999999999999;" >

               <h3 class="d-none d-md-block">Hub</h3>

                <h5 class="d-block d-md-none" >Hub</h5>
            </div>

            <div class="col-lg-6 px-0 pb-1 text-right d-none d-lg-block" style="border-bottom:1px solid #263238;z-index:99999999999999;" >

                <v-btn  small rounded  color="#3AC3A9" style="font-size:13px; font-weight:bolder; color:white;font-family:HeaderFont;">
             Add new <v-icon style="font-size:24px; color:white;">las la-plus</v-icon>
           </v-btn>
            </div>

            

            
         <!-- ends -->
            </div>


             <!-- floating add button -->

       

     <v-btn  fab color="#3AC3A9"  class="d-lg-none d-inline-block" style="z-index:99999999;  position:fixed;  bottom:3%; right:3%; ">

        <v-icon style="font-size:24px; color:white;">las la-plus</v-icon>
         
     </v-btn>


       <!-- ends -->

        </div>
       
        <div class=" col-12 scroller" style=" position:absolute; height:82%; top:17%; overflow-y:auto; padding-bottom:60px;" >

          
               <div class="col-lg-10 offset-lg-1 col-12 py-0" >

                   <div class="row">
                      <div class="col-lg-3 col-md-6 px-0 mb-5 pt-1 pt-md-2" style="height:200px;">
             <div  style="height:190px; position:absolute; width:94%; left:3%; border:1px solid #c5c5c5;
          border-radius:20px;box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25);background: url(/imgs/projectImg.jpg);background-size:cover;">

              <div class="pt-3 px-2  pl-3" style=" position:absolute; width:100%; height:35%; left:0; bottom:0%; border-radius:0px; border-bottom-left-radius:20px;
          border-bottom-right-radius:20px; background: linear-gradient(180deg, rgba(60, 135, 205, 0.0053) 0%, rgba(0, 0, 0, 0.53) 100%);">
                
                 <div class="row">
                  <div class="col-8 py-0 my-0">
                     <span   style="font-family:MediumFont; font-size:13px; color:white;" >Python calculator</span>
    
                  </div>
                   <div class="col-4 py-0 my-0 text-right">

                      <i class="lab la-python" style="font-size:25px; color:white;" ></i>

                     <i class="lab la-html5" style="font-size:25px; color:white;"></i>

                  </div>
                </div>
                 

          </div>

         </div>

          <v-card class="py-1 px-2" style="position:absolute; width:94%; height:auto; left:3%; top:0; border-radius:0px; border-top-left-radius:20px;
          border-top-right-radius:20px;">
            
            <div class="col-12 py-0 my-0 text-left">
                <div class="row py-0 my-0">
                    <div class="col-2 py-0 my-0 d-flex px-0" style="align-items:center; justify-content:center;">
                        <span  class="d-inline-block"  
                             style="border-radius:50%;height:30px;width:30px;background-color:#3C87CD;background-size:contain;border:1px solid transparent;"></span>
                    </div>
                   <div class="col-8 py-0 my-0 d-flex" style="align-items:center;">
                       <div> 
                             <span   class="d-inline-block"  style="font-family:MediumFont; font-size:13px;" >Akinola Dray</span>
                       </div>
                     
                   </div>
                   <div class="col-2 text-right py-0 my-0">
                      <v-btn icon><v-icon style="font-size:25px;">las la-ellipsis-v</v-icon></v-btn>
                   </div>
                </div>
            </div>
          </v-card>

          <div class="py-1 px-2" style="position:absolute; width:94%; height:auto; left:3%; top:100%;">
            
             <div class="row">
                  <div class="col-12 py-0 my-0 text-right">
                       
                       <span class="d-inline-block mx-1" >
                <i class="lar la-heart" style="font-size:20px;color:#3C87CD;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:#000000;">231</span>
            </span>

             <span class="d-inline-block mx-1" >
                <i class="las la-comment" style="font-size:20px;color:#3C87CD;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:#000000;">32</span>
            </span>
                  </div>   
            </div>

          </div>
          </div>


          <div class="col-lg-3 col-md-6 px-0 mb-5 pt-1 pt-md-2" style="height:200px;">
             <div  style="height:190px; position:absolute; width:94%; left:3%; border:1px solid #c5c5c5;
          border-radius:20px;box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25);background: url(/imgs/projectImg.jpg);background-size:cover;">

              <div class="pt-3 px-2  pl-3" style=" position:absolute; width:100%; height:35%; left:0; bottom:0%; border-radius:0px; border-bottom-left-radius:20px;
          border-bottom-right-radius:20px; background: linear-gradient(180deg, rgba(60, 135, 205, 0.0053) 0%, rgba(0, 0, 0, 0.53) 100%);">
                
                 <div class="row">
                  <div class="col-8 py-0 my-0">
                     <span   style="font-family:MediumFont; font-size:13px; color:white;" >Python calculator</span>
    
                  </div>
                   <div class="col-4 py-0 my-0 text-right">

                      <i class="lab la-python" style="font-size:25px; color:white;" ></i>

                     <i class="lab la-html5" style="font-size:25px; color:white;"></i>

                  </div>
                </div>
                 

          </div>

         </div>

          <v-card class="py-1 px-2" style="position:absolute; width:94%; height:auto; left:3%; top:0; border-radius:0px; border-top-left-radius:20px;
          border-top-right-radius:20px;">
            
            <div class="col-12 py-0 my-0 text-left">
                <div class="row py-0 my-0">
                    <div class="col-2 py-0 my-0 d-flex px-0" style="align-items:center; justify-content:center;">
                        <span  class="d-inline-block"  
                             style="border-radius:50%;height:30px;width:30px;background-color:#3C87CD;background-size:contain;border:1px solid transparent;"></span>
                    </div>
                   <div class="col-8 py-0 my-0 d-flex" style="align-items:center;">
                       <div> 
                             <span   class="d-inline-block"  style="font-family:MediumFont; font-size:13px;" >Akinola Dray</span>
                       </div>
                     
                   </div>
                   <div class="col-2 text-right py-0 my-0">
                      <v-btn icon><v-icon style="font-size:25px;">las la-ellipsis-v</v-icon></v-btn>
                   </div>
                </div>
            </div>
          </v-card>

          <div class="py-1 px-2" style="position:absolute; width:94%; height:auto; left:3%; top:100%;">
            
             <div class="row">
                  <div class="col-12 py-0 my-0 text-right">
                       
                       <span class="d-inline-block mx-1" >
                <i class="lar la-heart" style="font-size:20px;color:#3C87CD;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:#000000;">231</span>
            </span>

             <span class="d-inline-block mx-1" >
                <i class="las la-comment" style="font-size:20px;color:#3C87CD;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:#000000;">32</span>
            </span>
                  </div>   
            </div>

          </div>
          </div>


          <div class="col-lg-3 col-md-6 px-0 mb-5 pt-1 pt-md-2" style="height:200px;">
             <div  style="height:190px; position:absolute; width:94%; left:3%; border:1px solid #c5c5c5;
          border-radius:20px;box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25);background: url(/imgs/projectImg.jpg);background-size:cover;">

              <div class="pt-3 px-2  pl-3" style=" position:absolute; width:100%; height:35%; left:0; bottom:0%; border-radius:0px; border-bottom-left-radius:20px;
          border-bottom-right-radius:20px; background: linear-gradient(180deg, rgba(60, 135, 205, 0.0053) 0%, rgba(0, 0, 0, 0.53) 100%);">
                
                 <div class="row">
                  <div class="col-8 py-0 my-0">
                     <span   style="font-family:MediumFont; font-size:13px; color:white;" >Python calculator</span>
    
                  </div>
                   <div class="col-4 py-0 my-0 text-right">

                      <i class="lab la-python" style="font-size:25px; color:white;" ></i>

                     <i class="lab la-html5" style="font-size:25px; color:white;"></i>

                  </div>
                </div>
                 

          </div>

         </div>

          <v-card class="py-1 px-2" style="position:absolute; width:94%; height:auto; left:3%; top:0; border-radius:0px; border-top-left-radius:20px;
          border-top-right-radius:20px;">
            
            <div class="col-12 py-0 my-0 text-left">
                <div class="row py-0 my-0">
                    <div class="col-2 py-0 my-0 d-flex px-0" style="align-items:center; justify-content:center;">
                        <span  class="d-inline-block"  
                             style="border-radius:50%;height:30px;width:30px;background-color:#3C87CD;background-size:contain;border:1px solid transparent;"></span>
                    </div>
                   <div class="col-8 py-0 my-0 d-flex" style="align-items:center;">
                       <div> 
                             <span   class="d-inline-block"  style="font-family:MediumFont; font-size:13px;" >Akinola Dray</span>
                       </div>
                     
                   </div>
                   <div class="col-2 text-right py-0 my-0">
                      <v-btn icon><v-icon style="font-size:25px;">las la-ellipsis-v</v-icon></v-btn>
                   </div>
                </div>
            </div>
          </v-card>

          <div class="py-1 px-2" style="position:absolute; width:94%; height:auto; left:3%; top:100%;">
            
             <div class="row">
                  <div class="col-12 py-0 my-0 text-right">
                       
                       <span class="d-inline-block mx-1" >
                <i class="lar la-heart" style="font-size:20px;color:#3C87CD;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:#000000;">231</span>
            </span>

             <span class="d-inline-block mx-1" >
                <i class="las la-comment" style="font-size:20px;color:#3C87CD;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:#000000;">32</span>
            </span>
                  </div>   
            </div>

          </div>
          </div>
                   </div>
            </div>



        </div>



       <!-- ends -->

       <!-- side bar -->


   <v-slide-x-transition>
   <div class="col-12  py-0 px-0" style="position:absolut; width:100%; height:100%; z-index:9999999999999;background: rgba(27, 27, 30, 0.32);" @click="that.$root.showSideBar = false" v-if="that.$root.showSideBar">

   <div style="position:absolute; height:100%; width:70%; left:0;" >

     <div class="col-md-6 col-lg-3 pt-2" style="background:white;height:100%;" @click.stop="that.$root.showSideBar = true">
        <sidebar></sidebar>
     </div>

   </div>

     </div>
   </v-slide-x-transition>

       <!-- ends -->

      
    </div>
</template>
<script>
 const TopBar = () => import(
    /* webpackChunkName: "top-bar?v=0.40" */ './TopBar.vue'
  );

  
export default {
     data () {
      return {
        that:this
      }
    },
    components: {
        TopBar,
        AddProject
    }
}
</script>
<style scoped>
.scroller::-webkit-scrollbar {
  width: 6px;
}

 
.scroller::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
</style>