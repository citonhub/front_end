<template>
    <div>
       
      
        <div style="position:fixed;height:88%;left:0;top:10%;z-index:99999999999999;overflow-y:auto;background:#F5F5FB;" class="col-lg-10 offset-lg-2 py-0 px-0">
      
         <!-- large screens -->
             <div class="col-lg-10 offset-lg-1 py-1 mb-0 col-md-10 offset-md-1 px-0 d-md-block d-none py-0 pb-3 px-0 "
              style="position:absolute; left:0%; top:0%; height:100%;  background:#ffffff;border:1px solid #c5c5c5; border-radius:6px;overflow-y:hidden;overflow-x:hidden;">
      
        <!-- top bar -->
                <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row " style="z-index:99999999999999999;position:sticky;background:white; top:-1%; border-bottom:1px solid #c5c5c5;align-items:center;">
            <div class="px-1 col-3 py-0">
              <v-btn icon @click="goBack">
                      <v-icon>mdi mdi-arrow-left</v-icon>
                    </v-btn>
            </div>
          
             <div class="col-6 py-0 text-center">
             <span style="font-size:14px; font-family:MediumFont;"> {{this.$root.selectedDiary.name}}</span>
          </div>
              
              <div class="col-3 py-0 px-1 text-right">
                  <v-btn small rounded color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:MediumFont;">
                       <template v-if="this.$router.currentRoute.path.indexOf('add-note') >= 0">
                          <span style="color:white;text-transform:none;">Create</span> 
                       </template>
                       <template v-else>
                         <span style="color:white;text-transform:none;">Train</span> 
                       </template>
                        
                  </v-btn>
              </div>
          
            </div>

          <!-- ends -->
            
       <!-- content session -->
            
            <router-view></router-view>

            <!-- ends -->

           

            </div>

             <!-- ends -->

           
         

        </div>

          <!-- smaller screens -->

                 <div class="col-12 py-0 mb-0  px-0 d-md-none d-block py-0 px-0 "
              style="position:fixed; left:0%; top:0%; height:100%; z-index:999999999999999999; background:#ffffff;overflow-y:hidden;overflow-x:hidden;">
                         <!-- top bar -->
                <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row " style="position:sticky;background:white; top:-1%; border-bottom:1px solid #c5c5c5;align-items:center;">
            <div class="px-1 col-3 py-0">
              <v-btn icon @click="goBack">
                      <v-icon>mdi mdi-arrow-left</v-icon>
                    </v-btn>
            </div>
          
             <div class="col-6 py-0 text-center">
             <span style="font-size:13px; font-family:MediumFont;"> {{this.$root.selectedDiary.name}}</span>
          </div>
              
              <div class="col-3 py-0 px-1 text-right">
                  <v-btn small rounded color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:MediumFont;">
                       <template v-if="this.$router.currentRoute.path.indexOf('add-note') >= 0">
                          <span style="color:white;text-transform:none;">Create</span> 
                       </template>
                       <template v-else>
                         <span style="color:white;text-transform:none;">Train</span> 
                       </template>
                  </v-btn>

                  
              </div>
          
            </div>
           <!-- ends -->

                <!-- content session -->
            
            <router-view></router-view>

            <!-- ends -->

       
                 </div>

             <!-- ends -->
    
       
    </div>
</template>
<script>


export default {
   methods:{
     goBack:function(){
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
     }
   }
}
</script>
<style scoped>

</style>