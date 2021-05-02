<template>
  <div class="py-0 px-0">
        <div class="col-12 px-1 py-0 pt-0 fixed-top d-flex flex-row" style="position:sticky; background:white; top:0%; border-bottom:2px solid #c5c5c5;align-items:center;">
            <div class=" mr-1 col-2 pt-1 pb-0 px-1">
              <v-btn icon @click="goBack">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>
            </div>
          
             <div class="col-8 pt-1 pb-0 text-center">
             <span style="font-size:14px; font-family:MediumFont;">Playlists</span>
          </div>
              
              <div class="col-2 py-0 mr-1 text-right">
                 
              </div>
          
        </div>
     
   
    <template v-if="loadingPlaylist">
       
        <div class="col-12 mt-4 text-center">

               <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

             </div>

    </template>

    <template v-else>

       <template v-if="checkIfisOwner()">

           <div class="  px-2 px-md-2 py-1 " >

        <v-card flat class="d-flex flex-row px-1 py-1 col-12 " style="background: rgba(125, 179, 229, 0.4); align-items:center;">
        

              <div style="width:100%;" class="d-flex flex-column" >

                 <div >
                     <input  v-model="playName"
                     @focus="showTextarea = true"
              @keyup.enter="createPlaylists()"
              style="border:1px solid white; width:100%; border-radius:2px; font-family:BodyFont; font-size:13px; background:white;"  placeholder="Create a playlist" class="py-2 px-2" >
                 </div>

                 <div v-if="showTextarea || newPlaylistDesc != ''" class="mt-2">

                   <textarea  @input="processContent" v-model="newPlaylistDesc" :placeholder="'What is this playlist about? Markdown is supported.'" class="py-2 px-2" style="border:1px solid white; width:100%; border-radius:2px; font-family:BodyFont; height:95px; font-size:13px; background:white;">

                   </textarea>

                 </div>
             
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

      </template>

     

   <draggable
    class="d-flex flex-row flex-wrap col-12 py-1 px-2 px-md-2 "
     tag="div"
        v-model="playlists"
        handle=".handle"
        v-bind="dragOptions"
        @start="drag = true"
        @end="handleOnDrop"
    >
 
  
         <v-card :ripple="false" flat class="d-flex flex-row px-1   mb-2 col-12" v-for="(playlist,index) in playlists" :key="index"  style="background: rgba(125, 179, 229, 0.4); cursor:pointer;">
              <div class="mr-2 " @click="showContent(playlist)">
                 <v-icon color="#000000" class="ml-2">las la-play-circle</v-icon>
              </div>

              <div @click="showContent(playlist)" style=" white-space: nowrap; overflow:hidden; width:100%; text-overflow:ellipsis;">
              <span  style="font-family:BodyFont;color:black;font-size:13px;">{{playlist.name}}</span>
              </div>

              <template v-if="checkIfisOwner()">

                   <div class="ml-auto px-2 d-flex flex-row" style="cursor:pointer;align-items:center;" v-if="!playlist.delete">

                <div class="handle" >
                 <v-icon >las la-braille</v-icon> 
                </div>

                

                  <div class="ml-1" @click.stop="showDelete(playlist)">
                   <v-btn x-small icon><v-icon style="font-size:17px;">mdi mdi-close</v-icon></v-btn>
                  </div>
            
               
              </div>

              <div class="ml-auto d-flex flex-row" style="align-items:center;" v-if="playlist.delete">

                <span style="font-size:12px; font-family:BodyFont;">Delete?</span>
                  <div class="ml-1">
                     <v-btn @click="deleteResource(playlist)" x-small color="error" style="font-size:10px; color:white;font-family:BodyFont;">Yes</v-btn>
                 </div>

                 <div class="ml-1">
                     <v-btn x-small @click="playlist.delete = false" style="font-size:10px;font-family:BodyFont;">No</v-btn>
                 </div>
              </div>


              </template>

           
        </v-card>
   
   

   </draggable>

   <template v-if="checkIfisOwner() && !has_youtube_resource">

    
     

      <div class="col-12 py-1 text-center" style="margin-top:70px;">

       <div class="col-12 text-center py-1">

          <div style="font-family:BodyFont;font-size:13px; color:grey;" class=" text-center">Create playlist from your YouTube channel</div>

    </div>

          <template v-if="youtube_connected">


             <v-btn @click="connectYoutube" :loading="loadingYoutubeConnect" rounded medium outlined style="color:#FF0000; font-family:BodyFont;font-size:13px; text-transform:none;" color="#FF0000">
               <v-icon class="px-2" style="font-size:35px; color:#FF0000;">mdi mdi-youtube</v-icon> 

               <span>Import videos</span>
            </v-btn>


          </template>

          <template v-else>

             <v-btn @click="handleYouTubeAuth" :loading="loadingAuthBtn" rounded medium outlined style="color:#FF0000; font-family:BodyFont;font-size:13px; text-transform:none;" color="#FF0000">
               <v-icon class="px-2" style="font-size:35px; color:#FF0000;">mdi mdi-youtube</v-icon> 

               <span>Sign In</span>
            </v-btn>

          </template>
           
      </div>

      

   </template>

    
      
     
    </template>
  


  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
data(){
    return{
         playlists:[],
         loading:false,
         saving:false,
            drag: false,
         loadingPlaylist:false,
         showTextarea:false,
         newPlaylistDesc:'',
         loadingYoutubeConnect:false,
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
    has_youtube_resource:true,
    youtube_connected:false,
    playName:'',
    contentInWord:'',
    loadingAuthBtn:false,
    }
},
 computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "playlist",
        disabled: false,
        ghostClass: "ghost"
      };
    },
      compiledMarkdown: function() {
           
             var renderer = new marked.Renderer();
            renderer.link = function(href, title, text) {
          var link = marked.Renderer.prototype.link.call(this, href, title, text);
          return link.replace("<a","<a target='_blank' ");
          };
        marked.setOptions({
          renderer: renderer    
          });

           return  marked(this.newPlaylistDesc, { sanitize: true });
           
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
   processContent:function(){

     this.contentInWord = this.compiledMarkdown;
   },
    goBack:function(){
              window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')

             this.$root.chatComponent.innerSideBarContent = '';
            
            this.$root.chatComponent.innerSideBarContent = '';
       
        },
      showContent:function(video){

       
          
          this.$root.selectedResource = video;
           
           this.$router.push({ path: '/channels/'+ this.$root.selectedSpace.space_id + '/resource_content/' + video.resource_id });
            this.$root.resourceContentType='videos'
      },
      connectYoutube:function(){

          this.loadingYoutubeConnect = true;

             axios.get( '/connect-youtube/' +  this.$root.selectedSpace.space_id)
      .then(response => {
      
      if (response.status == 200) {

      
         let newResource = response.data.resource;

          this.playlists.unshift(newResource);
             
          this.has_youtube_resource = true;

          this.loadingYoutubeConnect = false;

          this.$root.LocalStore('channel_playlist_' + this.$root.selectedSpace.space_id  + this.$root.username,this.playlists);

          this.saveResourceOrder(false);

             this.$root.chatComponent.showAlert('Created!','Playlist has been created','success');
       
     }
       
     
     })
     .catch(error => {

     this.$root.chatComponent.showAlert('Oops!','Unable to create playlist,please try again','error');
          this.loadingYoutubeConnect = false;
    
     }) 

      },
      deleteResource:function(resource){

         let remainingPlaylist = this.playlists.filter((eachresource)=>{
           return eachresource.resource_id != resource.resource_id
         })

         this.playlists = remainingPlaylist;

           axios.post( '/delete-resources',{
        resource_id: resource.resource_id
      })
      .then(response => {
      
      if (response.status == 200) {

      

               this.$root.chatComponent.showAlert('Deleted!','Playlist has been deleted','success');


          this.$root.LocalStore('channel_playlist_' + this.$root.selectedSpace.space_id  + this.$root.username,this.playlists);

          this.saveResourceOrder(false);
       
     }
       
     
     })
     .catch(error => {

     this.$root.chatComponent.showAlert('Oops!','Unable to delete playlist,please try again','error');
       
    
     }) 



            
      },
       checkYoutubeStatus:function(){
            axios.get('/get-youtube-status')
      .then(response => {
      
      if (response.status == 200) {

         
        let status = response.data.youtube_connected;

        if(status){
          
            this.$root.youtube_connected = true;
            this.youtube_connected = true

            this.connectYoutube();
        }else{
            setTimeout(() => {
                 this.checkYoutubeStatus();
            }, 3000);
        }
            
     }
       
     
     })
     .catch(error => {
       
        setTimeout(() => {
                 this.checkYoutubeStatus();
            }, 2000);
       
    
     }) 

      },
       checkIfisOwner: function(){

           let userMemberData = this.$root.selectedSpaceMembers.filter((members)=>{

             return members.user_id == this.$root.user_temp_id;
           });

           if(userMemberData.length != 0){

             return userMemberData[0].is_admin;

           }else{
              return false
           }

       },
      handleYouTubeAuth:function(){
          
           this.loadingAuthBtn = true
           var strWindowFeatures = "location=yes,height=770,width=720,scrollbars=yes,status=yes";
        var URL = 'https://api.citonhub.com/initiate-google-auth/' + this.$root.username;

        var win = window.open(URL, "_blank", strWindowFeatures);

        this.checkYoutubeStatus();

      },
        openModal(){
     this.removeModal=true;
     this.toggleForm=true
    },
    showDelete:function(resource){

  
        
        this.playlists.map((eachresource)=>{
        
           eachresource.delete = false;
       
        })

            resource.delete = true;
        
          
    },
   
    handleOnDrop:function(){
        this.drag = false;
         this.saveResourceOrder();
    },
    saveResourceOrder:function(showAlert = true){

       let ResourcesArray = [];

        this.playlists.forEach((resource)=>{

         ResourcesArray.push(resource.resource_id)
   
        });

      axios.post( '/save-resources-order',{
        space_id: this.$root.selectedSpace.space_id,
        resources: ResourcesArray,
        type:'playlist'
      })
      .then(response => {
      
      if (response.status == 200) {

         if(showAlert){

               this.$root.chatComponent.showAlert('Saved!','Your changes have been saved','success');

         }

       

          this.$root.LocalStore('channel_playlist_' + this.$root.selectedSpace.space_id  + this.$root.username,this.playlists);

     
         
     }
       
     
     })
     .catch(error => {

     this.$root.chatComponent.showAlert('Oops!','Unable to save changes,please try again','error');
       
    
     }) 


    },
    closeModal(){
        this.removeModal=false;
    },
    openForm(){
     this.toggleForm=false;
    },
    fetchPlaylists:function(){
       this.loadingPlaylist  = true;

             let storedPlaylist = this.$root.getLocalStore('channel_playlist_' + this.$root.selectedSpace.space_id  + this.$root.username);

            storedPlaylist.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);
                   
                       this.playlists = finalResult

                       
                   
                  this.loadingPlaylist = false;

              this.checkForNewPlaylist();

                 }else{
            
           
            axios.get( `/fetch-resource/${this.$root.selectedSpace.space_id}/playlist`)
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('channel_playlist_' + this.$root.selectedSpace.space_id  + this.$root.username,response.data.resources);
        
     
                   let finalResult = response.data.resources;

                    this.has_youtube_resource = response.data.has_youtube_resource;

                    this.youtube_connected = response.data.youtube_connected;

                    this.$root.youtube_connected = response.data.youtube_connected;

                     this.playlists = finalResult

                     
     
         this.loadingPlaylist = false;

            
     }
       
     
     })
     .catch(error => {

        this.loadingPlaylist = false;
    
     }) 

                 }
            })

         
    },
    checkForNewPlaylist:function(){
         axios.get( `/fetch-resource/${this.$root.selectedSpace.space_id}/playlist`)
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('channel_playlist_' + this.$root.selectedSpace.space_id  + this.$root.username,response.data.resources);
        
     
                   let finalResult = response.data.resources;

                     this.playlists = finalResult

                       this.has_youtube_resource = response.data.has_youtube_resource;

                    this.youtube_connected = response.data.youtube_connected;


                    this.$root.youtube_connected = response.data.youtube_connected;

         this.$root.forcereloadResource = false;
     }
       
     
     })
     .catch(error => {

        this.loadingPlaylist = false;
    
     }) 
    }, 
   
     createPlaylists:function(){
       if(this.playName == '' || this.contentInWord == '') return;
       this.saving = true;
    axios.post('/create-resource',
    {
      
space_id: this.$root.selectedSpace.space_id,
name: this.playName,
type:'playlist',
info: this.contentInWord

    }
    ).then(
      response=>{
        if(response.status==200){

           this.playName='';
       
           this.saving = false;
        let storedPlaylist = this.$root.getLocalStore('channel_playlist_' + this.$root.selectedSpace.space_id  + this.$root.username);
 
             storedPlaylist.then((result)=>{

            
                 if(result != null ){

                    let finalResult = JSON.parse(result);
                     
                      finalResult = finalResult.unshift(response.data.resource);

                      this.$root.LocalStore('channel_playlist_' + this.$root.selectedSpace.space_id  + this.$root.username,finalResult);
          

                 }else{


                 }

             })

               this.$root.channelHasResources = true


          this.playlists.unshift(response.data.resource)

           this.saveResourceOrder(false);

           this.showContent(response.data.resource);


        }
      }
    ).catch(err=>{
      console.log(err)

       this.saving = false;
    })
  },

    }
}
</script>

<style scoped>
.handle{
  cursor: move; 
   
}
.ghost {
  opacity: 0.5;
  background: white;

}

</style>