<template>
<div>
   <!-- spacer -->
    <div class="my-lg-2 mt-md-1 mb-md-2 mt-4 mb-4 col-12" style="background:#F5F5FB;">

    </div>
  <!-- ends -->
 
    <div class="col-lg-10 offset-lg-1 py-1 mb-0  px-2 d-md-block d-none fixed-top" style="position:sticky; background:#F5F5FB; border-bottom:1px solid #c5c5c5;">
      <div class="row">
        <div class="col-6 py-0 my-0">
          <h5>Diary</h5>
        </div>
         <div class="col-6  py-0 my-0 text-right">
           <v-btn @click="createDiary" small rounded color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:MediumFont;">
             <v-icon style="font-size:20px;">las la-plus</v-icon> <span style="color:white;text-transform:none;">Create a diary</span> 
           </v-btn>
        </div>
      </div>
   </div>

  <!-- fab for smaller screen -->

    <v-btn  fab color="#3C87CD"  class="d-md-none d-inline-block" style="z-index:99999999;  position:fixed;  bottom:3%; right:3%; ">

        <v-icon style="font-size:24px; color:white;">las la-plus</v-icon>

     </v-btn>

<!-- ends -->
    <!--pets list view -->

  <div class="col-lg-10 offset-lg-1 pb-1 pt-0 px-2 ">

        <div class="row ">
          

            <div class="col-lg-4 col-md-6 px-2 mb-1 py-1 pt-0 mt-md-2" >
          
          <v-card class="py-2 px-1"  style="border-radius:10px;">
            
            <div class="col-12 py-0 my-0 d-flex flex-row">
                 <div     class="mr-2 py-2"> 

                   <div
                    style="border-radius:50%;height:50px;width:50px;background-color:#c5c5c5;background-image:url(/imgs/background1.jpg);background-size: cover;
                    background-repeat: no-repeat; ">
                    </div> 

                 </div>

                  <div class="text-left d-flex  py-1" style="overflow-x:hidden; width:100%;align-items:center;">
               <div style="font-size:13px;font-family:MediumFont;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" class="pb-1">Diary name</div>
              
                </div>

                 <div class=" d-flex flex-row-reverse ml-1" style="overflow-x:hidden;align-items:center;width:100%;">

                   <div class="d-flex flex-column" style="align-items:center; justify-content:center;">

                   <div> <v-icon style="font-size:22px;" class="pr-1">las la-user-friends</v-icon></div>

                     <div style="font-size:12px;font-family:BodyFont;" > 2,331 </div>

                   </div>
                  
                </div>
            </div>
          </v-card>

          

          </div>

           <div class="col-lg-4 col-md-6 px-2 mb-1 py-1 mt-md-2" >
          
          <v-card class="py-2 px-1"  style="border-radius:10px;">
            
            <div class="col-12 py-0 my-0 d-flex flex-row">
                 <div     class="mr-2 py-2"> 

                   <div
                    style="border-radius:50%;height:50px;width:50px;background-color:#c5c5c5;background-image:url(/imgs/background3.jpg);background-size: cover;
                    background-repeat: no-repeat; ">
                    </div> 

                 </div>

                  <div class="text-left d-flex  py-1" style="overflow-x:hidden; width:100%;align-items:center;">
               <div style="font-size:13px;font-family:MediumFont;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" class="pb-1">Diary name 2</div>
              
                </div>

                 <div class=" d-flex flex-row-reverse ml-1" style="overflow-x:hidden;align-items:center;width:100%;">

                   <div class="d-flex flex-column" style="align-items:center; justify-content:center;">

                   <div> <v-icon style="font-size:22px;" class="pr-1">las la-user-friends</v-icon></div>

                     <div style="font-size:12px;font-family:BodyFont;" > 2.5M </div>

                   </div>
                  
                </div>
            </div>
          </v-card>

          

          </div>

           <div class="col-lg-4 col-md-6 px-2 mb-1 py-1 mt-md-2" >
          
          <v-card class="py-2 px-1"  style="border-radius:10px;">
            
            <div class="col-12 py-0 my-0 d-flex flex-row">
                 <div     class="mr-2 py-2"> 

                   <div
                    style="border-radius:50%;height:50px;width:50px;background-color:#c5c5c5;background-image:url(/imgs/background1.jpg);background-size: cover;
                    background-repeat: no-repeat; ">
                    </div> 

                 </div>

                  <div class="text-left d-flex  py-1" style="overflow-x:hidden; width:100%;align-items:center;">
               <div style="font-size:13px;font-family:MediumFont;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" class="pb-1">Diary name 3</div>
              
                </div>

                 <div class=" d-flex flex-row-reverse ml-1" style="overflow-x:hidden;align-items:center;width:100%;">

                   <div class="d-flex flex-column" style="align-items:center; justify-content:center;">

                   <div> <v-icon style="font-size:22px;" class="pr-1">las la-user-friends</v-icon></div>

                     <div style="font-size:12px;font-family:BodyFont;" > 200 </div>

                   </div>
                  
                </div>
            </div>
          </v-card>

          

          </div>
          

      
        
      </div>

  </div>

 <!-- ends -->

</div>
  
</template>

<script>
 export default {
    data () {
      return {
       challenges:[
         {number:1, duration:36, participant:4, type:'PHP'},
         {number:2, duration:48, participant:8, type:'C++'},
         {number:3, duration:72, participant:8, type:'HTML'},
         {number:4, duration:24, participant:8, type:'Javascript'},
         {number:5, duration:36, participant:5, type:'Laravel'}
       ]
      }
     
    },

     methods:{
        createDiary(){
          this.$router.push({ path:'/board/diary/board/create-diary'})
        }
      },
      mounted(){
     this.$root.showTopBar = true;
    },
  }
</script>
<style scoped>


 .challengeBox{
   background:#ffffff !important;
   cursor: pointer;
 }

 .challengeBox:hover{
   background:transparent !important;
   cursor: pointer;
 }
  
</style>
