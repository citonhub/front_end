<template>

  <v-card tile :class="$screen.lg || $screen.md  ? 'col-8 offset-md-2  col-lg-4 offset-lg-4 px-0 py-0   ' : ' col-12 py-0 px-0  '"  :style="$screen.lg || $screen.md ? 'height:86%; position:absolute; top:7%;overflow-y:auto; ' : 'height:100%;position:absolute; overflow-y:auto; left:0%;'"> 

      
      <template v-if="loadingContent">

        <div style="position:absolute; height:100%; width:100%; left:0px; justify-content:center;align-items:center;" class="d-flex flex-row">
                 
                    <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>
        </div>

      </template>

      <template v-else>
        

           <div class="col-12 px-1 py-1  fixed-top d-flex flex-row" style="position:sticky; align-items:center; background:white; top:0%; border-bottom:2px solid #c5c5c5;align-items:center;">

              <div v-if="that.$root.showResourceViewContent"  >
                  <v-btn icon @click="goBack">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>
              </div>

            <div class="ml-1"  v-if="!that.$root.showResourceViewContent">
                <div   :style="imageStyleSpace(40,spaceData,'channel')"  >
               </div>
            </div>
          
             <div class=" text-center" style=" white-space: nowrap; width:100%;  overflow:hidden; text-overflow:ellipsis; "  v-if="that.$root.showResourceView">
             <span style="font-size:14px; font-family:MediumFont;">{{mainContent}}</span>
          </div>

            <div class=" text-center" style=" white-space: nowrap; width:100%;  overflow:hidden; text-overflow:ellipsis; "  v-if="that.$root.showResourceViewContent">
             <span style="font-size:14px; font-family:MediumFont;">{{titleContent}}</span>
          </div>

              
              <div class="  ml-auto">
                  <v-btn icon @click="shareResource">
                      <v-icon>mdi mdi-share-variant</v-icon>
                    </v-btn>
              </div>
          
 
     </div>

      <template v-if="that.$root.showResourceView">

          <template v-if="loadingResources">

                <div class="col-12 mt-4 text-center">

               <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

             </div>         

       </template>
      
      <template v-else>

        <div class="col-12">

             <v-card :ripple="false" flat class="d-flex flex-row px-1  mb-2 col-12 " v-for="(resource,index) in resources" :key="index" style="background: rgba(125, 179, 229, 0.4);cursor:pointer;">
              <div  @click="showContent(resource)" class="mr-2 ">
                 
                   <v-icon color="#000000" class="ml-2"  v-if="resource.type == 'playlist'" >las la-play-circle</v-icon>
              </div>

              <div  @click="showContent(resource)" style=" white-space: nowrap; overflow:hidden; text-overflow:ellipsis; width:100%;">
              <span  style="font-family:BodyFont;color:black;font-size:13px;">{{resource.name}}</span>
              </div>

        </v-card>    

        </div>


     <div class="col-12 py-3 text-center ">

            <v-btn @click="showContent()" medium color="#3C87CD" style="color:white;text-transform:none;font-family:MediumFont;font-size:13px;" class="mx-2 d-inline-block" >
                     Join Channel
                   </v-btn>


        </div>


       
        


      </template>

      </template>


      <template v-if="that.$root.showResourceViewContent">

          <template v-if="loadingResourceContent">

                <div class="col-12 mt-4 text-center">

               <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

             </div>         

       </template>
      
      <template v-else>

          
             <div class="col-12 px-2 px-md-2  ">

            
               <h6 >Description</h6>
            
           <div>
               <span style="font-size:13px;font-family:BodyFont; color:grey;" v-html="selectedResource.info">
          
              </span>
           </div>

             </div>

          <div style="background:transparent;font-family:BodyFont; " class="col-12 py-1 px-2 px-md-2 " >
            
              

      
        <template v-if="selectedResource.type == 'playlist'">
           <h6>Videos</h6>
        </template>

        <template v-else>
          <h6>Links and articles</h6>
        </template>
      

        <template v-if="resourcesContent.length > 0">

           <resource :contents="resourcesContent" :show_add_icon="false" :fromStandalone="true" :isFree="true"></resource>
        

          <div class="text-center col-lg-12">
    <v-progress-circular
      indeterminate
      color="#3C87CD"
      v-if="loadingNextPage"
    ></v-progress-circular> 
     
     <div v-observe-visibility="nextPagehandler" ></div> 

  
  </div>
    


        </template>

        <template v-else>

              <template v-if="selectedResource.type == 'playlist'">
            <div style="font-family:BodyFont;font-size:13px; color:grey;" class="mt-4 text-center">No video in this playlist yet.</div>

          
           </template>

           <template v-else>
                <div style="font-family:BodyFont;font-size:13px; color:grey;" class="mt-4 text-center">No article or resource URL in this resource yet.</div>

          
           </template>

        </template>


           <div class="col-12 py-3 text-center ">

            <v-btn @click="goToChannel()" medium color="#3C87CD" style="color:white;text-transform:none;font-family:MediumFont;font-size:13px;" class="mx-2 d-inline-block" >
                     Join Channel
                   </v-btn>


        </div>

          

         
        </div>



       
        


      </template>

        
        
      </template>




    

  
     <div class="col-12 py-4 my-4">

      </div>
     


        <div v-if="that.$root.showYoutubePlayerTemp" style="  background: rgba(27, 27, 30, 0.32); left:0; position:absolute; height:100%; top:0%;z-index:999999999999;" class="d-flex flex-row col-12 px-0 py-0 text-center">
                                         
               <div style=" height:auto; left:0%; " class=" col-12 px-0 py-0">
                        <youtube-player :screenType="'small'" :playerHeight="220" :videoId="that.$root.playingVideoId"></youtube-player>
                </div>
         </div>




   

      </template>


   

      

  </v-card>

</template>
<script>
import VueScreen from 'vue-screen'
Vue.use(VueScreen, 'bootstrap')

  const Resource = () => import(
   /* webpackChunkName: "Resource" */ './Resource.vue'
  );
    const YoutubePlayer = () => import(
   /* webpackChunkName: "YoutubePlayer" */ './YoutubePlayer.vue'
  );

export default {
     data(){
      return{
       spaceData:[],
       loadingBtn:false,
       loadingContent:false,
       loadingResourceContent:false,
       resources:[],
       resourcesContent:[],
       loadingResources:false,
       titleContent:'',
       that:this,
       mainContent:'',
       loadingNextPage:false,
       showYoutubePlayerTemp:false,
       selectedResource:[],
       nextPageToken:'',
     }
     },
      components:{
      Resource,
      YoutubePlayer
    },
     mounted(){

     
         this.fetchSpaceInfo();
      
     },
     methods:{
       
       shareResource:function(){
            this.$root.shareLink =  'https://link.citonhub.com/resources/'+ this.$route.params.spaceId;

          this.$root.shareText = 'Check out ' + this.spaceData.name + ' on CitonHub';
          
          this.$root.infoText = 'Share resources with others';

          this.$root.alertComponent =   this.$root.chatComponent;

          this.$root.showInvitation = true;
       },
       goToChannel(){
              
              this.$root.visitedResources = true;

               this.$root.showResourceView = false;

             this.$root.showResourceViewContent = false;
            
          if(!this.$root.isLogged){

                       this.$root.checkIfUserIsLoggedIn();

                       this.$root.showResourceView = false;

                       return;

               }

               if( this.$root.isLogged){

                 this.$root.autoOpenResourcePage = true;


                 this.$root.chatComponent.openChat(this.$route.params.spaceId,true,true)

                 return;
                 
               }

       },
       showContent:function(content){

         
          
            this.$router.push({ path: '/channels/e_resources/content/'+ this.$route.params.spaceId });

          this.titleContent = content.name;
         this.selectedResource = content;

         this.$root.formerselectedResource =  content;

          this.fetchResourceContent();




       },
       goBack:function(){
          this.$router.push({ path: '/channels/e_resources/view/'+ this.$route.params.spaceId });
       },
        fetchResourceContent:function(){


      if(this.selectedResource.youtube_playlist_id){

      
         this.loadingResourceContent = true;

             
            axios.get( '/fetch-resource-content/' + this.selectedResource.resource_id  + '/' + this.selectedResource.youtube_playlist_id  )
      .then(response => {
      
      if (response.status == 200) {
    
           let results = response.data.result;

          
           let finalResult = [];

             results.forEach((data)=>{
               let resultWrapper = {
                 content: data,
                 type:'youtube_video'
               };
              
              finalResult.push(resultWrapper);

             });


        this.resourcesContent = finalResult;

         this.nextPageToken = response.data.nextPageToken;

     this.loadingResourceContent = false;
     
       
     }
       
     
     })
     .catch(error => {

        this.loadingResourceContent = false;

         this.$root.chatComponent.showAlert('Oops!','Something went wrong,please try again','error');
    
     }) 

      
      }

       if(this.selectedResource.devto_username){

         this.loadingResourceContent = true;

                

            axios.get( '/fetch-resource-content/' + this.selectedResource.resource_id   )
      .then(response => {
      
      if (response.status == 200) {
    
           let results = response.data.articles;

           let finalResult = [];

             results.forEach((data)=>{
               let resultWrapper = {
                 content: data,
                 type:'devto_article'
               };
              
              finalResult.push(resultWrapper);

             });


        this.resourcesContent = finalResult;

         this.nextPageToken = 1;

     this.loadingResourceContent = false;
     
       
     }
       
     
     })
     .catch(error => {

        this.loadingResourceContent = false;

         this.$root.chatComponent.showAlert('Oops!','Something went wrong,please try again','error');
    
     }) 

      
      }
      
      if(this.selectedResource.youtube_playlist_id == null && this.selectedResource.devto_username == null){
         
           this.loadingResourceContent = true;
       
           
            axios.get( '/fetch-resource-content/' + this.selectedResource.resource_id   )
      .then(response => {
      
      if (response.status == 200) {
    
        
        this.resourcesContent = response.data.contents;

        

     this.loadingResourceContent = false;
     
       
     }
       
     
     })
     .catch(error => {

        this.loadingResourceContent = false;

         this.$root.chatComponent.showAlert('Oops!','Something went wrong,please try again','error');
    
     }) 

    
      }
         
      },
       fetchSpaceInfo: function(){
          if(this.$root.visitedResources){
          
          this.$root.showResourceView = false;
             return;

          }
                 this.loadingContent = true;
           axios.get('/fetch-space-info-'+ this.$route.params.spaceId)
   .then(response => {

   if (response.status == 200) {

        this.spaceData = response.data.space;
      
    
           this.loadingContent = false;

            this.$root.showResourceView = true;
            this.mainContent = this.spaceData.name +  ' Resources';



          this.fetchResources();
          
  }


  })
  .catch(error => {

      this.$root.chatComponent.showAlert('Oops!','Something went wrong, please try again','error');

      this.loadingContent = false;

  })


          },
            nextPagehandler: function(shown){

               let playlistID = this.selectedResource.youtube_playlist_id;

         if(this.nextPageToken && shown){

            this.loadingNextPage = true;

            axios.get( '/fetch-resource-content/' + this.selectedResource.resource_id + '/' + playlistID + '/' + this.nextPageToken   )
      .then(response => {
      
      if (response.status == 200) {
    
         

       let results = [];
    
        if(this.selectedResource.devto_username){
            
                this.nextPageToken++

              results = response.data.articles;

                let finalResult = [];

             results.forEach((data)=>{
               let resultWrapper = {
                 content: data,
                 type:'devto_article'
               };
              
              finalResult.push(resultWrapper);

             });


        this.resourcesContent = finalResult;

          }else{
             this.nextPageToken = response.data.nextPageToken;

            results = response.data.result

              let finalResult = [];

             results.forEach((data)=>{
               let resultWrapper = {
                 content: data,
                 type:'youtube_video'
               };
              
              finalResult.push(resultWrapper);

             });


        this.resourcesContent = finalResult;
          }

         

      

     

       this.loadingNextPage = false;

     
       
     }
       
     
     })
     .catch(error => {

     this.loadingNextPage = false;

         this.$root.chatComponent.showAlert('Oops!','Something went wrong,please try again','error');
    
     }) 


         }

         
      },
          fetchResources:function(){
       this.loadingResources  = true;
          
              axios.get( `/fetch-resource/${this.$route.params.spaceId}/resource`)
      .then(response => {
      
      if (response.status == 200) {

      
                   let finalResult = response.data.resources;

                     this.resources = finalResult

                
     
         this.loadingResources = false;

            
     }
       
     
     })
     .catch(error => {

        this.loadingResources = false;
    
     }) 

    },
        imageStyleSpace:function(dimension,data,type){


      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:2px solid #3C87CD; cursor:pointer;";
         if(type == 'channel'){
              styleString += 'background-color:#ffffff; background-image:url(imgs/channel.png);';
         }else{
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
         }

         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:2px solid #3C87CD; cursor:pointer;";
         let imgLink = data.image_name + '.' + data.image_extension;
          if(type == 'channel' || type== 'bot'){
              styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/space/'  + imgLink  +  ');';
         }else{
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/profile/'  + imgLink  +  ');';
         }

          return styleString;
      }



  },
     }
}
</script>
<style scoped>

</style>