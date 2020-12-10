<template>
    <div class="row">


       <!-- large and medium screens -->
         <div class="col-md-8 py-0 d-md-flex px-md-1 flex-row  d-none" style="align-items:center;">
              
                    <v-btn icon class="d-lg-none d-inline-block mr-1">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>
                   <div  class="d-inline-block mr-2"  
                     style="border-radius:50%;height:40px;width:40px;background-color:#c5c5c5;background-image:url(/imgs/imgproj3.jpeg);background-size: cover;
  background-repeat: no-repeat; border:1px solid transparent;"></div> 
                     <div class="d-inline-block">
                        

                             <div>
                                <span style="font-size:14px; font-family:BodyFont;">Channel Name 1</span>
                             </div>
                              <div >
                                <span style="font-size:12px; color:grey; font-family:BodyFont;">220 Members ,120 Online</span>
                             </div>

                       
                     </div>
              
         </div>
         <div class="col-md-2 py-1 d-md-block d-none">
              
         </div>
         <div class="col-md-2 py-1 pt-2 text-right d-md-block d-none">
            <v-btn icon class="mr-2"> <v-icon>mdi mdi-pound</v-icon> </v-btn>


              <v-btn icon class="mr-2"> <v-icon>mdi-television-play</v-icon> </v-btn>
               
         </div>
            
            <!-- ends -->
           
         <!-- smaller screens -->
           
            <div class="col-9 py-0 d-flex  flex-row d-md-none px-1" style="align-items:center;">
              
                    <v-btn icon class="d-lg-none d-inline-block mr-1">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>
                   <div  class="d-inline-block mr-1"  
                     style="border-radius:50%;height:38px;width:38px;background-color:#c5c5c5;background-image:url(/imgs/imgproj3.jpeg);background-size: cover;
                     background-repeat: no-repeat; border:1px solid transparent;"></div> 
                     <div class="d-inline-block">
                        

                             <div>
                                <span style="font-size:13px; font-family:BodyFont;">Channel Name 1</span>
                             </div>
                              <div >
                                <span style="font-size:11px; color:grey; font-family:BodyFont;">220 Members ,120 Online</span>
                             </div>

                       
                     </div>
              
         </div>

          <div class="col-1 py-0 px-0 d-md-none d-block pt-1 text-right">
                <v-btn icon> <v-icon>mdi mdi-pound</v-icon> </v-btn>
         </div>
         <div class="col-2 py-0 px-0 text-right pt-1 d-md-none d-block">
              
              <v-btn icon class="mr-2"> <v-icon>mdi-television-play</v-icon> </v-btn>
         </div>


         <!-- ends -->


    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>