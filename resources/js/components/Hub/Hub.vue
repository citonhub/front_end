<template>
    <div  style="position:fixed;height:100%;background:#F5F5FB; width:100%;">

        <!-- top bar -->
        <div class="col-12 py-0 fixed-top" style="position:sticky;width:100%;height:auto; ">
         <top-bar></top-bar>
        </div>
     

       <!-- ends -->

       <!-- hub content -->
       
        <div class="col-lg-10 offset-lg-1 col-12 px-0 d-md-block d-none" style="background:#F5F5FB; position:absolute; height:92%; top:8%; " >

            <div class="row px-md-4 px-4">
              <!-- header -->
            <div class="col-lg-6 px-0 pb-1 " style="border-bottom:1px solid #263238;z-index:99999999999999;" >

               <h3 class="d-none d-md-block">Hub</h3>

              
            </div>

            <div class="col-lg-6 px-0 pb-1 text-right d-none d-lg-block" style="border-bottom:1px solid #263238;z-index:99999999999999;" >

                <v-btn @click="modal = !modal"   small rounded  color="#3C87CD" style="font-size:13px; font-weight:bolder; color:white;font-family:HeaderFont;">
             Add new <v-icon style="font-size:24px; color:white;">las la-plus</v-icon>
           </v-btn>
            </div>

            

            
         <!-- ends -->
            </div>


            
        </div>


         <!-- floating add button -->

       

     <v-btn  fab color="#3C87CD"  class="d-lg-none d-inline-block" style="z-index:99999999;  position:fixed;  bottom:3%; right:2%; ">

        <v-icon style="font-size:24px; color:white;">las la-plus</v-icon>
         
     </v-btn>


       <!-- ends -->

       
        <div class=" col-12 scroller" style=" position:absolute; height:90%; top:10%; overflow-y:auto; padding-bottom:60px;" >

          
               <div class="col-lg-10 offset-lg-1 col-12 py-0 pt-md-5 mt-md-3" >

                   <div class="row">
                      <div class="col-lg-3 col-md-6 px-0 mb-5 pt-1 pt-md-2" style="height:200px;" @click="overlay = !overlay">
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
                             style="border-radius:50%;height:30px;width:30px;background-color:#c5c5c5; background-image:url(/imgs/img3.jpg);background-size:100%;border:1px solid transparent;"></span>
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
                             style="border-radius:50%;height:30px;width:30px;background-color:#c5c5c5; background-image:url(/imgs/img3.jpg);background-size:100%;border:1px solid transparent;"></span>
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
                             style="border-radius:50%;height:30px;width:30px;background-color:#c5c5c5; background-image:url(/imgs/img3.jpg);background-size:100%;border:1px solid transparent;"></span>
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

        <!-- Overlay -->
        <v-overlay
          :absolute="absolute"
          :opacity="opacity"
          :value="overlay"
          :z-index="zIndex"
          class="row"
        >
          <v-card color="white p-5" class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-xs-10 offset-xs-1">
            <div class="row py-0 my-0">
                <div class="col-2 py-0 my-0 d-flex px-0" style="align-items:center; justify-content:center;">
                    <span  class="d-inline-block"  
                         style="border-radius:50%;height:30px;width:30px;background-color:#3C87CD;background-size:contain;border:1px solid transparent;"></span>
                </div>
                <div class="col-8 py-0 my-0 d-flex" style="align-items:center;">
                   <div> 
                      <span   class="d-inline-block"  style="font-family:MediumFont; font-size:13px; color: black;" >Akinola Dray</span>
                   </div>
               </div>
               <div class="col-2 text-right py-0 my-0">
                    <v-btn icon @click="overlay = !overlay"><v-icon style="font-size:25px; color:black">las la-close</v-icon></v-btn>
                 </div>
               <img src="/imgs/projectImg.jpg" alt="" width="100%" height="200px" class="col-12">
               <p style="color: black;" class="col-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, recusandae eius? Molestiae et eum est tenetur labore corrupti ex sequi. Amet officiis facere eum quia quisquam eveniet neque qui magni.</p>
               <v-toolbar light flat>
                <v-toolbar-title>Comments</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-comment</v-icon>
                </v-btn>
              </v-toolbar>
               <v-list class="col-12" two-line light>
                 <v-list-item-group multiple>

                   <!-- Single Comment -->
                   <template>
                     <v-list-item>
                       <template>
                         <v-list-item-content>
                           <v-list-item-title>Test List</v-list-item-title>
                           <v-list-item-subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nisi, hic assumenda harum. Repudiandae</v-list-item-subtitle>
                         </v-list-item-content>
                         <v-list-item-action>
                           <v-list-item-action-text>15min</v-list-item-action-text>
                         </v-list-item-action>
                       </template>
                     </v-list-item>
                   </template>

                   <!-- Single Comment -->
                   <template>
                     <v-list-item>
                       <template>
                         <v-list-item-content>
                           <v-list-item-title>Test List</v-list-item-title>
                           <v-list-item-subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nisi, hic assumenda harum. Repudiandae</v-list-item-subtitle>
                         </v-list-item-content>
                         <v-list-item-action>
                           <v-list-item-action-text>15min</v-list-item-action-text>
                         </v-list-item-action>
                       </template>
                     </v-list-item>
                   </template>
                 </v-list-item-group>
               </v-list>
            </div>
            <v-btn
              color="#3AC3A9"
              @click="overlay = !overlay"
            >
              Hide Overlay
            </v-btn>
          </v-card>
        </v-overlay>



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

       <div v-if="modal" style="position:fixed;top:0;background:rgba(0,0,0,0.6);height:100%;z-index:199999999999;width:100%;" >
        <addPage></addPage>


     </div>
    </div>
</template>
<script>
 const TopBar = () => import(
    /* webpackChunkName: "top-bar?v=0.41" */ './TopBar.vue'
  );

const addPage = () => import(/*webpackChunkName: "addPage?v=0.20"*/ './AddProjectPage.vue')
  
export default {
     data () {
      return {
        that:this,
        absolute: true,
        opacity: 0.4,
        overlay: false,
        zIndex: 1,
        modal:false,
      }
    },
    components: {
        TopBar,
      addPage
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