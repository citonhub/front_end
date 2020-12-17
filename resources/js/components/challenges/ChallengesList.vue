<template>
<div>
 
    <div class="col-lg-10 offset-lg-1 py-1 mb-0 col-md-10 offset-md-1 px-2 d-md-block d-none fixed-top" style="position:sticky; background:#F5F5FB; border-bottom:1px solid #c5c5c5;">
      <div class="row">
        <div class="col-6 py-0 my-0">
          <h5>Challenges</h5>
        </div>
         <div class="col-6  py-0 my-0 text-right">
           <v-btn small rounded color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:HeaderFont;">
             <v-icon style="font-size:20px;">las la-plus</v-icon> <span style="color:white;">Create</span> 
           </v-btn>
        </div>
      </div>
   </div>

   <div class=" px-0 col-12 py-1 d-md-none d-block fixed-top" style="position:sticky; background:#F5F5FB; border-bottom:1px solid #c5c5c5;">
     <div class="row">
        <div class="col-6 py-0 my-0">
           <h6 style="font-size:17px;">Challenges</h6>
        </div>
         <div class="col-6 mb-1 py-0 my-0 text-right">
           <v-btn small rounded color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;">
             <v-icon style="font-size:20px;">las la-plus</v-icon>
           </v-btn>
        </div>
      </div>
   </div>

    <!-- project list view -->

  <div class="col-lg-10 offset-lg-1 pb-1 pt-0 col-md-10 offset-md-1 px-2 ">

        <div class="row text-center ">

              <div class="col-12 py-0 px-0 d-flex flex-row challengeBox">
                 
                 <div     class="mx-2 py-3"> 

                   <div
                    style="border-radius:8px;height:100%;width:70px;background-color:#c5c5c5;background-image:url(/imgs/background1.jpg);background-size: cover;
                    background-repeat: no-repeat; ">
                    </div> 

                 </div>
        
        <div class="text-left d-flex flex-column py-3" style="overflow-x:hidden; width:100%;border-bottom:1px solid #c5c5c5;">
          <div style="font-size:14px;font-family:MediumFont;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" class="pb-1">Create a gift cards with HTML and CSS</div>
          <div style="font-size:12px;font-family:BodyFont; white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" class="pb-1">Using pure CSS, design the most beautiful card and win </div>
          <div class="d-flex flex-row" style="align-items:center;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;">
             <div style="font-size:12px;font-family:BodyFont;">HTML, CSS </div> <v-icon class="mx-1" style="font-size:12px;">mdi-record</v-icon> 
             <div style="font-size:12px;font-family:BodyFont;">18 hours to go</div> <v-icon class="mx-1" style="font-size:12px;">mdi-record</v-icon> 
             <div style="font-size:12px;font-family:BodyFont;" class="d-md-block d-none">2331 Participants </div>
             <div style="font-size:12px;font-family:BodyFont;" class="d-md-none d-block"> <v-icon style="font-size:17px;">las la-user-friends</v-icon> 2331 </div>
          </div>

        </div>
               
              <div>

         </div>

       </div>

        <div class="col-12 py-0 px-0 d-flex flex-row challengeBox">
                 
                 <div   class="mx-2 py-3"> 

                   <div
                    style="border-radius:8px;height:100%;width:70px;background-color:#c5c5c5;background-image:url(/imgs/background3.jpg);background-size: cover;
                    background-repeat: no-repeat; ">
                    </div> 

                 </div>
        
        <div class="text-left d-flex flex-column py-3" style="overflow-x:hidden; width:100%;border-bottom:1px solid #c5c5c5;">
          <div style="font-size:14px;font-family:MediumFont;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" class="pb-1">Build a game app with NodeJS</div>
          <div style="font-size:12px;font-family:BodyFont;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" class="pb-1">Using nodejs gamer extension, built a simple game </div>
          <div class="d-flex flex-row" style="align-items:center;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;">
             <div style="font-size:12px;font-family:BodyFont;">HTML, CSS , NodeJS</div> <v-icon class="mx-1" style="font-size:12px;">mdi-record</v-icon> 
             <div style="font-size:12px;font-family:BodyFont;">23 days to go</div> <v-icon class="mx-1" style="font-size:12px;">mdi-record</v-icon> 
             <div style="font-size:12px;font-family:BodyFont;" class="d-md-block d-none">631 Participants </div>
             <div style="font-size:12px;font-family:BodyFont;" class="d-md-none d-block"> <v-icon style="font-size:17px;">las la-user-friends</v-icon> 2331 </div>
          </div>

        </div>
               
              <div>

         </div>

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
  }
</script>
<style scoped>
 span{

   color: #3C87CD;
   font-weight: bold;
line-height:21px;
 }

 .challengeBox{
   background:#ffffff !important;
   cursor: pointer;
 }

 .challengeBox:hover{
   background:transparent !important;
   cursor: pointer;
 }
  
</style>
