<template>
    <div>
        <!-- large and medium screen top bar -->
    
     <div class="col-12 d-none d-md-block py-0" style="position:absolute; top:0; left:0; font-family:BodyFont;z-index:9999999999;">

         <div class="row">
            <div class="col-lg-5 col-md-1  text-left">
                 <v-btn icon @click="that.$root.showSideBar = true" class="mt-2 d-lg-none "><v-icon style="font-size:25px;color:black;" >las la-bars</v-icon></v-btn>
            </div>
             <div class="col-lg-7 col-md-10 offset-md-1 offset-lg-0">
                <div class="row">
                  <div class="col-lg-6 col-md-5 text-center">
                     <v-text-field
                style="font-size:13px;"
                
                 :placeholder="'Search ' + that.$root.searchType"
              filled
              dense
            append-icon="las la-search"
            rounded
             ></v-text-field>

             
                  </div>

                <div class="col-lg-2 col-md-2 text-right">
                        <v-btn icon ><v-icon style="font-size:25px;color:black;" >las la-bell</v-icon></v-btn>
                </div>
                  <div class="col-lg-4 col-md-5 py-1 d-flex" style="justify-content:center; align-items:center;"> 
                     
                          <div class="mb-5">
                                <v-card elevation-2 class=" d-flex   py-1 px-2" style="border-radius:30px; justify-content:center; align-items:center;"> 
                         
                            
                            <div  class="d-inline-block mr-2"   style="border-radius:50%;height:30px;width:30px;background-color:#c5c5c5;background-image:url(/imgs/img3.jpg);background-size:100%;border:1px solid transparent;"></div>
                              
                              
                              <span style="font-family:MediumFont; font-size:13px;color:black;" >Akinola Dray</span>
                              <v-btn icon class="d-inline-block"><v-icon>las la-caret-down</v-icon></v-btn>
                               
                        
                     </v-card>

                          </div>
                    
                  </div>
                </div>
            </div>
         </div>

     </div>

     <!-- top bar smaller screen -->

       <div class="col-12 d-block d-md-none py-2 " style="position:absolute; top:0; left:0; font-family:BodyFont; z-index:99999999999;">

         <div class="row px-2">
             <v-card  style="border-radius:7px;" class="col-12 py-2 px-1">
                   <div class="row">
                   <div class="col-2 py-0  text-center">
                 <v-btn icon @click="that.$root.showSideBar = true"><v-icon style="font-size:25px;color:#263238;" >las la-bars</v-icon></v-btn>
            </div>
             <div class="col-6 d-flex py-0 px-1" style="justify-content:center;align-items:center;">

             <input style="width:100%;heigth:100%;font-size:13px;"  :placeholder="'Search ' + that.$root.searchType" class="py-2 px-2" type="search" >       
         
            </div>
             <div class="col-2 text-center py-0">
                <v-btn icon ><v-icon style="font-size:25px;color:#263238;" >las la-bell</v-icon></v-btn>
            </div>
             <div class="col-2 d-flex px-1 py-0" style="justify-content:center; align-items:center;">
                 <div style="border-radius:50%;height:32px;width:32px;background-color:#c5c5c5;background-image:url(/imgs/img3.jpg);background-size:100%;border:1px solid transparent;"></div>
            </div>
                   </div>
             </v-card>
         </div>

     </div>

     <!-- ends -->
    </div>
</template>
<script>
export default {
     data () {
      return {
       showSideBar:false,
       searchType:'',
       that:this
      }
    },
    mounted(){
      this.$root.TopBarComponent = this;
    }
}
</script>
<style scoped>

</style>