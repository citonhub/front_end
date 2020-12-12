<template>
<div>
 
   <div class="col-12  ">
    <div style="font-family:BodyFont" class="col-4 d-flex">

    <i style="font-size:1.9rem" class="las la-trophy "></i>  <p class="h3">Challenges</p>
    </div>

<div  v-for="ch in challenges" :key="ch.number" style="border-radius:10px;background:rgba(125,179,229,0.1);font-family:BodyFont;font-size:1.1rem;font-weight:500;line-height:21px;" class="challenge mb-4 ">
    <div  class="row ">
      <div style="font-size:1.3rem;font-weight:500;color:#1B1B1E;" class="col-lg-4 offset-lg-1">Challenge <span>{{ch.number}}</span> </div>
 <div class="col-lg-4 offset-lg-3">Duration: <span>{{ch.duration}}hours</span></div>
    </div>

      <div  class="row">
      <div class="col-lg-4 offset-lg-1">No. of Participants: <span>{{ch.participant}}</span> </div>
 <div class="col-lg-4 offset-lg-3">Application Type:  <span>{{ch.type}}</span></div>
    </div>

    </div>
<div class="col-4 offset-lg-7">
    <v-btn
    small
    rounded
    fab
    >
    <v-icon><i style="color:black;font-size:1rem" class="las la-plus"></i></v-icon>
    </v-btn>
    </div>
   </div>

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
  
</style>
