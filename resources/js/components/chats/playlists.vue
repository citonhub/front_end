<template>
  <div class="py-1 px-0">
      <div class="navigate d-flex px-0 py-1 mt-3" style="border-bottom:1px solid #3C87CD" >
   
   
   <v-btn @click="openModal" color="#3C87CD">   <v-icon  class="mt-1" color="#fff">las la-plus</v-icon>
   <span class="offset-lg-1 mt-1" style="color:white">Add to Playlist</span></v-btn>

</div>

<div class="video-list mt-2" v-for="(video,index) in videos" :key="index">
    <div class="list-item px-0 d-flex py-2" style="background: rgba(125, 179, 229, 0.5);height:40px;border-radius:5px;
">
<v-icon color="#000" class="ml-2">las la-play-circle</v-icon>
<span class="ml-3" style="font-family:BodyFont;color:black;">{{video}}</span>
    </div>
</div>

<div v-if="removeModal" class="playlist-modal" style="position:absolute;background:rgba(0,0,0,0.5);top:0;width:100%;height:600px;">
    
    <div class="created-lists mt-4 ml-2 col-lg-11" style="background:white;height:380px;" v-if="toggleForm">

<div class="top  mt-2">
    <div @click="openForm" class=""> <v-icon>las la-plus</v-icon> <span>Add to New Playlist</span>  </div>
    <span class="offset-lg-4 mb-2">or</span>
    <br>
    <span >Save video to...</span>


   </div >

   <div style="max-height:200px;overflow-y:scroll;">

   <div class="lists d-flex mt-2" v-for="(list , index) in lists"  :key="index">
       <v-icon color="rgba(125, 179, 229, 0.5)">las la-stop</v-icon>
      <span class="ml-2">{{list}}</span> 
   </div>

   </div>

        <v-btn @click="closeModal" class="mt-4 offset-4" color="#3C87CD" >Done</v-btn>
    
    
    
    
    
    </div>

    <!--playlist form-->

    <div v-else class="playlist-form py-1 mt-4 col-lg-10 offset-1" style="background:white;height:200px;border-radius:5px;" >
     
     <v-icon @click="closeForm" color="black" class="offset-10">las la-times</v-icon>
     
     <v-text-field
     class="mt-4 col-lg-11 ml-2"
         
            placeholder="Title"
          ></v-text-field>

          <div  class="action-buttons  mt-1 offset-3">

<v-btn @click="closeModal" color="#3C87CD">Create</v-btn>
          </div>

    </div>

    <!--playlist form ends-->
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
        'Code Along',
        'Building Databases'

    ],
    lists:[
        'React Tutorial',
        'Responsiveness',
        'Tech Writing',
        'MEVN Projects',
        'Code Along',
        'New Tech',
        'New Tech',
        'New Tech',
        'New Tech'
        
    ],
    toggleForm:false,
    removeModal:false
    }
   
},

methods:{
    openModal(){
     this.removeModal=true;
     this.toggleForm=true
    },
    closeModal(){
        this.removeModal=false;
    },
    openForm(){
this.toggleForm=false;
    }
}
}
</script>

<style>

</style>