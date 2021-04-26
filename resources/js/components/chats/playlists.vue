<template>
  <div class="py-1 px-0">
    
      <div class="  px-1 px-md-2 py-1 " >
   


  <v-card flat class="d-flex flex-row px-1 py-1 col-12" style="background: rgba(125, 179, 229, 0.4); align-items:center;">
              <div class="mr-2 ">
                 <v-icon color="#000000" class="ml-2">las la-play-circle</v-icon>
              </div>

              <div style="width:100%;">
               <input  v-model="playName"
              @keyup.enter="createPlaylists()"
              style="border:1px solid white; width:100%; border-radius:2px; font-family:BodyFont; font-size:13px; background:white;"  placeholder="Create a playlist" class="py-2 px-2" >
              </div>

              <div class="ml-auto px-2">
                <v-btn icon :loading="saving" style="background:white;" small @click="createPlaylists()" >
                   <v-icon style="font-size:24px;">
                     las la-arrow-right
                   </v-icon>
                </v-btn>
              </div>

        </v-card>

  
     </div>

   <div class="d-flex flex-row flex-wrap col-12 py-1 px-1 px-md-2 mt-2">
 
    <template v-if="showPlaylist">
         <v-card flat class="d-flex flex-row px-1  mb-2 col-12" v-for="(video,index) in videos" :key="index" @click="showContent(video)" style="background: rgba(125, 179, 229, 0.4);">
              <div class="mr-2 ">
                 <v-icon color="#000000" class="ml-2">las la-play-circle</v-icon>
              </div>

              <div>
              <span  style="font-family:BodyFont;color:black;font-size:13px;">{{video.name}}</span>
              </div>

              <div class="ml-auto px-2">
               <span class="d-flex flex-row"
                style="font-family:BodyFont;align-items:center; justify-content:center; color:black;font-size:13px; background:white; height:26px; width:26px; border:1px solid #ffffff;border-radius:50%;">12</span>
              </div>

        </v-card>
    </template>

    <div class="col-12 text-center">

          <div style="font-family:BodyFont;font-size:13px; color:grey;" class="mt-1 text-center">Create playlist from your YouTube channel</div>

    </div>
     

      <div class="col-12 text-center">
            <v-btn @click="handleYouTubeAuth" rounded medium outlined style="color:#FF0000; font-family:BodyFont;font-size:13px; text-transform:none;" color="#FF0000">
               <v-icon class="px-2" style="font-size:35px; color:#FF0000;">mdi mdi-youtube</v-icon> 

               <span>Sign In</span>
            </v-btn>
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

  </div>
</template>

<script>
export default {
data(){
    return{
         videos:[],
         loading:false,
         saving:false,
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
    removeModal:false,
    showPlaylist:true,
    playName:''
    }
},
mounted(){

  this.$root.showYoutubePlayer = false;
        this.$root.showYoutubePlayerSm = false;
        this.$root.showAddButton = false;
  this.fetchPlaylists();
}

,
 methods:{
      showContent:function(video){
          
          this.$root.selectedResource = video;
           this.$router.push({ path: '/channels/'+ this.$root.selectedSpace.space_id + '/resource_content/' + video.resource_id });
            this.$root.resourceContentType='videos'
      },
      handleYouTubeAuth:function(){
          
           var strWindowFeatures = "location=yes,height=770,width=720,scrollbars=yes,status=yes";
        var URL = 'https://api.beta.citonhub.com/initiate-google-auth/' + this.$root.username;

        var win = window.open(URL, "_blank", strWindowFeatures);

        setTimeout(() => {
              this.showContent();
        }, 4000);
      },
        openModal(){
     this.removeModal=true;
     this.toggleForm=true
    },
    closeModal(){
        this.removeModal=false;
    },
    openForm(){
     this.toggleForm=false;
    },

    fetchPlaylists:function(){
      axios.get(`/fetch-resource/${this.$root.selectedSpace.space_id}/playlist`)
      .then(
        response=>{
          if(response.status==200){
            console.log(response.data)
            this.videos=response.data.resources
          }
        }
      )
    },

     createPlaylists:function(){
    axios.post('/create-resource',
    {
      
space_id: this.$root.selectedSpace.space_id,
name: this.playName,
type:'playlist'


    }
    ).then(
      response=>{
        if(response.status==201){
console.log('playlist created!')
this.playName=''
        }
      }
    )
  }
    }
}
</script>

<style>

</style>