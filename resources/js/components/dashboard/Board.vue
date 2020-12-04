<template>
<div class="fixed-layout">
 

   <div style="width:100%; height:auto; overflow-y:hidden; overflow-x:hidden; ">
 
 <!-- side bar -->

 <!-- large and medium screens -->
  <v-card class="d-none col-lg-2  d-lg-block"  style="z-index:9999999999999;border-radius:0px; align-items:center; background:white; justify-content:center; position:fixed; height:100%; top:0%;">
    
   <sidebar></sidebar>

  </v-card>

 <!-- ends -->

 <!-- side bar for medium and small screens -->

 <v-slide-x-transition>
   <div class="col-12 d-lg-none py-0 px-0" style="position:fixed; width:100%; height:100%; z-index:9999999999999;background: rgba(27, 27, 30, 0.32);" @click="showSideBar = false" v-if="showSideBar">

   <div style="position:absolute; height:100%; width:70%; left:0;" >

     <div class="col-md-6 pt-2" style="background:white;height:100%;" @click.stop="showSideBar = true">
        <sidebar></sidebar>
     </div>

   </div>

 </div>
 </v-slide-x-transition>


 <!-- ends -->
    
<!-- Main board -->
<div class=" col-lg-10  offset-lg-2 "  style="z-index:99999999; background:#F5F5FB; align-items:center; justify-content:center; position:fixed; height:100%; top:0%;">

    <!-- large and medium screen top bar -->
    
     <div class="col-12 d-none d-md-block py-0" style="position:absolute; top:0; left:0; font-family:BodyFont;">

         <div class="row">
            <div class="col-lg-5 col-md-1  text-center">
                 <v-btn icon @click="showSideBar = true" class="mt-2 d-lg-none "><v-icon style="font-size:25px;color:black;" >las la-bars</v-icon></v-btn>
            </div>
             <div class="col-lg-7 col-md-10 offset-md-1 offset-lg-0">
                <div class="row">
                  <div class="col-lg-6 col-md-5 text-center">
                     <v-text-field
                style="font-size:13px;"
                
                 placeholder="Search CitonHub"
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
                         
                            
                            <div  class="d-inline-block mr-2"   style="border-radius:50%;height:30px;width:30px;background-color:#3C87CD;background-size:contain;border:1px solid transparent;"></div>
                              
                              
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

       <div class="col-12 d-block d-md-none py-2 " style="position:absolute; top:0; left:0; font-family:BodyFont;">

         <div class="row px-2">
             <v-card  style="border-radius:7px;" class="col-12 py-2 px-1">
                   <div class="row">
                   <div class="col-2 py-0  text-center">
                 <v-btn icon @click="showSideBar = true"><v-icon style="font-size:25px;color:#263238;" >las la-bars</v-icon></v-btn>
            </div>
             <div class="col-6 d-flex py-0 px-1" style="justify-content:center;align-items:center;">

             <input style="width:100%;heigth:100%;font-size:13px;" placeholder="Search CitonHub" class="py-2 px-2" type="search" >       
         
            </div>
             <div class="col-2 text-center py-0">
                <v-btn icon ><v-icon style="font-size:25px;color:#263238;" >las la-bell</v-icon></v-btn>
            </div>
             <div class="col-2 d-flex px-1 py-0" style="justify-content:center; align-items:center;">
                 <div style="border-radius:50%;height:32px;width:32px;background-color:#3C87CD;background-size:contain;border:1px solid transparent;"></div>
            </div>
                   </div>
             </v-card>
         </div>

     </div>

     <!-- ends -->

     <!-- floating button hub for medium and small screen -->

     <v-btn medium fab color="#3C87CD" class="d-lg-none"  style="z-index:999999999;  position:fixed;  bottom:3%; right:3%; ">

         <span style="font-family:MediumFont; font-size:12px;color:white;"> Hub</span>
         
     </v-btn>

     <!-- ends -->

      <div class="col-12 mt-2" style="position:absolute; top:7%; left:0; ">
      <!-- entry point for vue router -->
      <router-view></router-view>
      <!-- ends -->
     </div>
     
   
   

  </div>
     
<!-- ends -->
     
   </div>

</div>
  
</template>

<script>
 export default {
    data () {
      return {
       showSideBar:false
      }
    },
    mounted(){
      this.$root.boardComponent = this;
    }
  }
</script>
<style scoped>
  .fixed-layout{
    position: fixed;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
   
  }

  
</style>
