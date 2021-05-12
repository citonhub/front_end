<template>
<div class="py-0">
    <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row" style="position:sticky; background:white; top:0%; border-bottom:2px solid #c5c5c5;align-items:center;">
           
           
            <div class=" mr-1 col-2 px-1 pt-1 pb-0">
              <v-btn icon @click.stop="goBack">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>
            </div>

            
          
             <div class="col-8 pt-1 pb-0  d-flex flex-row" style="white-space: nowrap; overflow:hidden; text-overflow:ellipsis; align-items:center; justify-content:center;">
          
             <template v-if="showEditTitle">

                  <input v-model="resourceTitle"  @input="saveResourceInfo()"
                 
              style="border:1px solid #c5c5c5; width:100%; border-radius:2px; font-family:BodyFont; font-size:13px; background:white;"   class="py-1 px-1" >

               <v-btn  x-small icon @click="showEditTitle ? showEditTitle = false : showEditTitle = true"> <v-icon>las la-close</v-icon> </v-btn>

             </template>
             <template v-else>
                <span style="font-size:14px; font-family:MediumFont;">{{that.$root.selectedResource.name}}</span> 

                  <v-btn v-if="checkIfisOwner() && that.$root.selectedResource.type != 'playlist_template'" x-small icon @click="showEditTitle ? showEditTitle = false : showEditTitle = true"> <v-icon>las la-edit</v-icon> </v-btn>
             </template>

            

           
            </div>
              
            


        </div>


        <template v-if="that.$root.loadingResourcesContent">
            
             <div class="col-12 mt-4 text-center">

               <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

             </div>

        </template>
        <template v-else>
          <div class="col-12 px-2 px-md-2">
            
            <div class="d-flex flex-row col-12 py-0 px-0" style="align-items:center;">
            <div >
               <h6 class="d-inline-block">Description</h6> <v-btn v-if="checkIfisOwner() && that.$root.selectedResource.type != 'playlist_template'" x-small icon @click="showEditDesc ? showEditDesc = false : showEditDesc = true"> <v-icon>las la-edit</v-icon> </v-btn>
            </div>
            
            </div>
          
     
         <span style="font-size:13px;font-family:BodyFont; color:grey;" v-html="that.$root.selectedResource.info"  v-if="that.$root.selectedResource.user_id != that.$root.user_temp_id">
          
         </span>

         <div  v-else style="width:100%;">
           <template v-if="showEditDesc">

             <v-textarea
                style="font-size:13px;font-family:BodyFont; "
                 
             dense
               @input="saveResourceInfo()"
            :placeholder="'What is this ' +  that.$root.selectedResource.type + ' about? Markdown is supported.'"
              filled
              height="100"
              :loading="loadingInfo"
             v-model="input"
             counter="700"
             color="#3C87CD"
            
             ></v-textarea>

           </template>
           <template v-else>

             <span style="font-size:13px;font-family:BodyFont;  color:grey;" v-html="that.$root.selectedResource.info"  >
          
         </span>

           </template>
        
         </div>

        

           

      </div>

    
        <div style="background:transparent;font-family:BodyFont; " class="col-12 py-1 my-0 px-2 px-md-2 " >
      
        <template>
           <h6>Content</h6>
        </template>

        
      

        <template v-if="that.$root.resourcesData.length > 0">

           <resource :contents="that.$root.resourcesData" :show_add_icon="false" :resourceType='that.$root.selectedResource.type'></resource>
        

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

              <template >
            <div style="font-family:BodyFont;font-size:13px; color:grey;" class="mt-5 text-center">No content in this resource yet.</div>

            <div class="col-12 py-1 text-center mt-2" v-if="checkIfisOwner() && that.$root.selectedResource.youtube_playlist_id == null">

               <v-btn @click="goToSearch('youtube')" medium  rounded outlined style="color:#FF0000; font-family:BodyFont;font-size:13px; text-transform:none;" color="#FF0000">
               <v-icon class="px-1" style="font-size:35px; color:#FF0000;">mdi mdi-youtube</v-icon> 

               <span>Add videos from YouTube</span>
            </v-btn>

            </div>

              <div class="col-12 py-1 text-center d-flex flex-row  flex-wrap" v-if="checkIfisOwner() && that.$root.selectedResource.devto_username == null">

                <div class="col-12 py-1 text-center">

              <v-btn @click="goToSearch('devto')" medium outlined  rounded style="font-family:BodyFont;font-size:13px; text-transform:none;" color="#000000">
               <img  src="/imgs/devto.png" height="27px" class="px-1" >

               <span>Add articles from DevTo</span>
            </v-btn>

                </div>

                  <div class="col-12 py-2 text-center">

              <v-btn outlined @click="goToSearch('link')"  medium rounded style="font-family:BodyFont;font-size:13px; text-transform:none; " color="#3C87CD">
               
                 <v-icon class="px-1">las la-link  </v-icon>
               <span>Add resource URL</span>
            </v-btn>

                </div>

              

            </div>
           </template>

          

        </template>
          

           <div class="col-12 my-5 py-5">

           </div>
        </div>

        </template>

      

       <!-- ends -->

       
        
     
</div>    
</template>
<script>
const { htmlToText } = require('html-to-text');

  const Resource = () => import(
   /* webpackChunkName: "Resource" */ './Resource.vue'
  );
export default {
    data(){
    return{
        resources:[],
        that:this,
        contentInWord:'',
        title:'',
        showEditTitle:false,
        loadingInfo:false,
        loadingContent:false,
        input:'',
        showEditDesc:false,
        loadingNextPage:false,
        nextPageToken:'',
        resourceTitle:'',
    }
   
},
   computed:{
       compiledMarkdown: function() {
           
             var renderer = new marked.Renderer();
            renderer.link = function(href, title, text) {
          var link = marked.Renderer.prototype.link.call(this, href, title, text);
          return link.replace("<a","<a target='_blank' ");
          };
        marked.setOptions({
          renderer: renderer    
          });

           return  marked(this.input, { sanitize: true });
           
          }
   },
    components:{
      Resource
    },
    mounted(){
      this.$root.loadingSearch = false;

      this.fetchResourceContent();

       this.resourceTitle = this.$root.selectedResource.name;
      
      this.setType();
      this.input =   htmlToText( this.$root.selectedResource.info, { });

       
    },
    methods:{
        goToSearch: function(type){
           
      if(type == 'link'){
          this.$router.push({ path: '/channels/'+ this.$root.selectedSpace.space_id + '/add_resource_url' });
        return;
      }
    if(this.$router.currentRoute.path.indexOf('resource_search') >= 0){
this.$root.resourceSearchType= type
    }else{
       this.$router.push({ path: '/channels/'+ this.$root.selectedSpace.space_id + '/resource_search' });
 this.$root.resourceSearchType= type
    }

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
      saveResourceInfo:_.debounce(function () {

          this.contentInWord = this.compiledMarkdown;

           this.loadingInfo = true;

           
  
         axios.post('/save-resource-info',{
           resource_id: this.$root.selectedResource.resource_id,
           info:this.contentInWord,
           title:this.resourceTitle
         })

        .then(
          response=>{
            if(response.status == 200){
             
               this.loadingInfo = false;

               this.$root.selectedResource.name = this.resourceTitle;

               this.$root.selectedResource.info = this.contentInWord;
            }
          }
        )
     .catch(error => {

          this.$root.chatComponent.showAlert('Oops!','Unable to save your changes','error','bottomRight',10000)
           this.loadingInfo = false;
    
     }) 

      }, 500),
               goBack:function(){
              window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')

             this.$root.chatComponent.innerSideBarContent = '';
            
            this.$root.chatComponent.innerSideBarContent = '';
       
        },
      fetchResourceContent:function(){


      if(this.$root.selectedResource.youtube_playlist_id){

        this.$root.showAddButton = false;

        if(this.$root.loadingResourcesContent) return

         this.$root.loadingResourcesContent = true;

             
            axios.get( '/fetch-resource-content/' + this.$root.selectedResource.resource_id  + '/' + this.$root.selectedResource.youtube_playlist_id  )
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


        this.$root.resourcesData = finalResult;

         this.$root.nextPageToken = response.data.nextPageToken;

     this.$root.loadingResourcesContent = false;
     
       
     }
       
     
     })
     .catch(error => {

        this.$root.loadingResourcesContent = false;

         this.$root.chatComponent.showAlert('Oops!','Something went wrong,please try again','error');
    
     }) 

      
      }

       if(this.$root.selectedResource.devto_username){

         this.$root.loadingResourcesContent = true;

                 this.$root.showAddButton = false;

            axios.get( '/fetch-resource-content/' + this.$root.selectedResource.resource_id   )
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


        this.$root.resourcesData = finalResult;

        this.$root.nextPageToken = 1;

     this.$root.loadingResourcesContent = false;
     
       
     }
       
     
     })
     .catch(error => {

        this.$root.loadingResourcesContent = false;

         this.$root.chatComponent.showAlert('Oops!','Something went wrong,please try again','error');
    
     }) 

      
      }
      
      if(this.$root.selectedResource.youtube_playlist_id == null && this.$root.selectedResource.devto_username == null){
         
           this.$root.loadingResourcesContent = true;
       
          let storedResourceContent = this.$root.getLocalStore('channel_resource_content_' + this.$root.selectedResource.resource_id  + this.$root.username);

             storedResourceContent.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);

                      if(finalResult.length == 0){
              this.$root.showAddButton = false;
                  }else{
                      this.$root.showAddButton = true;
                  }

                
                        this.$root.resourcesData = finalResult

                   
                  this.$root.loadingResourcesContent = false;

              this.checkForNewResourceContent();

                 }else{
            
           
           
            axios.get( '/fetch-resource-content/' + this.$root.selectedResource.resource_id   )
      .then(response => {
      
      if (response.status == 200) {
    
          this.$root.LocalStore('channel_resource_content_' + this.$root.selectedResource.resource_id  + this.$root.username,response.data.contents);

         this.$root.resourcesData = response.data.contents;

         if( this.$root.resourcesData.length == 0){
              this.$root.showAddButton = false;
                  }else{
                      this.$root.showAddButton = true;
                  }

    this.$root.loadingResourcesContent = false;
     
       
     }
       
     
     })
     .catch(error => {

        this.$root.loadingResourcesContent = false;

         this.$root.chatComponent.showAlert('Oops!','Something went wrong,please try again','error');
    
     }) 

                 }
            })

    
      }
         
      },
      checkForNewResourceContent:function(){

         
            axios.get( '/fetch-resource-content/' + this.$root.selectedResource.resource_id   )
      .then(response => {
      
      if (response.status == 200) {
    
          this.$root.LocalStore('channel_resource_content_' + this.$root.selectedResource.resource_id  + this.$root.username,response.data.contents);

         this.$root.resourcesData = response.data.contents;

        if(  this.$root.resourcesData.length == 0){
              this.$root.showAddButton = false;
                  }else{
                      this.$root.showAddButton = true;
                  }

    
         this.$root.forcereloadResource = false;

        
  
       
     }
       
     
     })
     .catch(error => {

        this.$root.loadingResourcesContent = false;

    
     }) 

      },
      nextPagehandler: function(shown){

           let playlistID = this.$root.selectedResource.youtube_playlist_id;

         if(this.$root.nextPageToken && shown){

            this.loadingNextPage = true;

            axios.get( '/fetch-resource-content/' + this.$root.selectedResource.resource_id + '/' + playlistID + '/' + this.$root.nextPageToken    )
      .then(response => {
      
      if (response.status == 200) {
    
         

       let results = [];
    
        if(this.$root.selectedResource.devto_username){
            
                this.$root.nextPageToken++

              results = response.data.articles;

                let finalResult = [];

             results.forEach((data)=>{
               let resultWrapper = {
                 content: data,
                 type:'devto_article'
               };
              
              this.$root.resourcesData =  this.$root.resourcesData.concat(finalResult);

             });


         this.$root.resourcesData = finalResult;

          }else{
            this.$root.nextPageToken = response.data.nextPageToken;

            results = response.data.result

              let finalResult = [];

             results.forEach((data)=>{
               let resultWrapper = {
                 content: data,
                 type:'youtube_video'
               };
              
              finalResult.push(resultWrapper); 

             });


        this.$root.resourcesData =  this.$root.resourcesData.concat(finalResult);
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
      setType:function(){
if(this.$root.resourceContentType=='resources'){
this.title='My Articles'
}else if(this.$root.resourceContentType=='videos'){
this.title='My Videos'
}
      },
    
    }
}
</script>
<style scoped>

</style>