<template>
    <div style="position:absolute; height:100%; width:100%; left:0%;" class="d-flex flex-row">
   
   <v-btn icon color="#ffffff" @click="goBack" style="position:absolute;background:#3C87CD;top:4%; left:3%; z-index:990679797879;" 
           class="d-inline-block  "><v-icon>mdi-close mdi-18px</v-icon></v-btn>

    <div class="px-2 py-1 appBox" style="background:white; position:absolute;top:0;right:0;z-index:89999999999;">
        <v-btn icon class="mx-1" >
                         <v-badge
               dot
                color="green">
                <v-icon>las la-user-friends </v-icon>
              </v-badge>
                     
                        </v-btn>
    </div>

                                     <div class=" d-flex flex-row" style="align-items:center; justify-content:center;background:transparent;height:100%; width:100%; overflow-y:auto; overflow-x:hidden;" >
                                      
                                      <template v-if="false">
                                          
                                          <div class=" col-4 col-lg-2 px-2 my-0 py-2 ">
                          <v-card class="px-1 py-1 appBox" style="height:100px;border-radius:7px; background:white;">
                              <div class="d-flex" style=" height:100%; align-items:center; justify-content:center;  width:100%;">
                                   <div class="text-center">
                                      <i style="font-size:30px;" class="las la-phone"></i>
                                      <div>
                                         <span style="font-size:13px; font-family:BodyFont;">Voice Chat</span>
                                      </div>
                                   </div>
                             </div>
                          </v-card>
                            </div>

                                     <div class=" col-4 col-lg-2 px-2 my-0 py-2 " >
                          <v-card class="px-1 py-1 appBox" style="height:100px;border-radius:7px;margin-top:-150px;background:white;">
                              <div class="d-flex" style=" height:100%; align-items:center; justify-content:center;  width:100%;">
                                   <div class="text-center">
                                      <i style="font-size:30px;" class="las la-terminal"></i>
                                      <div>
                                         <span style="font-size:13px; font-family:BodyFont;">Live Coding</span>
                                      </div>
                                   </div>
                             </div>
                          </v-card>
                            </div>

                             <div class=" col-4 col-lg-2 px-2 my-0 py-2 ">
                          <v-card class="px-1 py-1 appBox" style="height:100px;border-radius:7px;background:white;">
                              <div class="d-flex" style=" height:100%; align-items:center; justify-content:center;  width:100%;">
                                   <div class="text-center">
                                      <i style="font-size:30px;" class="las la-laptop-code"></i>
                                      <div>
                                         <span style="font-size:13px; font-family:BodyFont;">Screen Sharing</span>
                                      </div>
                                   </div>
                             </div>
                          </v-card>
                            </div>

                                      </template>

                            <div class="text-center">
                              <div    
                        style="border-radius:50%;height:120px;width:120px;background-color:#c5c5c5;background-image:url(/imgs/img3.jpg);background-size: cover;
                          background-repeat: no-repeat; border:5px solid #3C87CD; margin-top:-50px;">
                           </div> 

                           <div style="font-size:14px; color:white;" class="mt-2">Akinola Babs</div>
                            </div>
                                    
   
                                   </div>

                              
                              <!-- side info bar -->
                                    <div v-if="false" class="scrollerinfo offset-lg-8 col-lg-4" style="background:white;height:100%; overflow-y:auto; z-index:9999999999; position:absolute; overflow-x:hidden;" >
                                     
                                    
                                       
                                    
                                   </div>

                              <!-- ends -->

                              <!-- bottom bar -->

                               <div  class="col-12 py-2 d-flex flex-row" style="background:white;height:60px; overflow-y:auto; z-index:999999999; left:0; bottom:0; position:absolute; overflow-x:hidden;" >
                                     
                                    <div class="col-4 py-0">

                                        <v-btn icon style="z-index:999999999999999;"><v-icon>las la-microphone</v-icon></v-btn>

                                    </div>
                                     <div class="col-4 py-0 text-center" style="background:white;">
                                         
                                    </div>
                                     <div class="col-4 py-0 text-right">
                                  
                                        <v-btn icon style="z-index:999999999999999;" ><v-icon>mdi-apps</v-icon></v-btn>
                                    </div>
  
                                    
                                   </div>

                              <!-- ends -->

                              <!-- hang up btn -->
                              <div class="text-center" style="position:absolute;bottom:5%; left:0; width:100%;" >
                                 <v-btn fab color="#3C87CD" style=" z-index:999999999999;"><v-icon color="#ffffff">mdi mdi-phone-hangup</v-icon></v-btn>
                              </div>
                              
                             <!-- ends -->
                                     </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.scrollerinfo::-webkit-scrollbar {
  width: 6px;
}


.scrollerinfo::-webkit-scrollbar-thumb {
    background-color: darkgrey;
  outline: 1px solid darkgrey;
}
.appBox{
    cursor: pointer;
}
</style>