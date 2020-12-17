<template>
<div>
 
    <div class="col-lg-10 offset-lg-1 py-1 mb-0 col-md-10 offset-md-1 px-2 d-md-block d-none fixed-top" style="position:sticky; background:#F5F5FB; border-bottom:1px solid #c5c5c5;">
      <div class="row">
        <div class="col-6 py-0 my-0">
          <h5>My Pets</h5>
        </div>
         <div class="col-6  py-0 my-0 text-right">
           <v-btn small rounded color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:HeaderFont;">
             <v-icon style="font-size:20px;">las la-plus</v-icon> <span style="color:white;">Get a pet</span> 
           </v-btn>
        </div>
      </div>
   </div>

   <div class=" px-0 col-12 py-1 d-md-none d-block fixed-top" style="position:sticky; background:#F5F5FB; border-bottom:1px solid #c5c5c5;">
     <div class="row">
        <div class="col-6 py-0 my-0">
           <h6 style="font-size:17px;">My Pets</h6>
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
