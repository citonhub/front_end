<template>
  <div class="py-1 px-0">
      <div class="navigate d-flex px-0 py-1 mt-3" style="border-bottom:1px solid #3C87CD" >
   
   
   <v-btn color="#3C87CD">   <v-icon  class="mt-1" color="#fff">las la-plus</v-icon>
   <span class="offset-lg-1 mt-1" style="color:white">Add to Playlist</span></v-btn>

</div>

<div class="video-list mt-2" v-for="(video,index) in videos" :key="index">
    <div class="list-item px-0 d-flex py-2" style="background: rgba(125, 179, 229, 0.5);height:40px;border-radius:5px;
">
<v-icon color="#000" class="ml-2">las la-play-circle</v-icon>
<span class="ml-3" style="font-family:BodyFont;color:black;">{{video}}</span>
    </div>
</div>
  </div>
</template>

<script>
export default {
data(){
    return{
         videos:[
        'Vue Routes',
        'Props',
        'Data Binding',
        'Components',

    ]
    }
   
}
}
</script>

<style>

</style>