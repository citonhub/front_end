<template>
<div class="py-0">
    <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row" style="position:sticky; background:white; top:0%; border-bottom:2px solid #c5c5c5;align-items:center;">
           
           
            <div class=" mr-1 col-2 px-1 py-0">
              <v-btn icon @click.stop="goBack">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>
            </div>

            
          
             <div class="col-8 py-0 text-center" style="white-space: nowrap; overflow:hidden; text-overflow:ellipsis; ">
             <span style="font-size:14px; font-family:MediumFont;">{{that.$root.selectedResource.name}}</span>
            </div>
              
            


        </div>


        <template v-if="loadingContent">
            
             <div class="col-12 mt-4 text-center">

               <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

             </div>

        </template>
        <template v-else>
          <div class="col-12 px-2 px-md-2">
     
         <span style="font-size:13px;font-family:BodyFont; " v-html="that.$root.selectedResource.info"  v-if="that.$root.selectedResource.user_id != that.$root.user_temp_id">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis totam praesentium sequi, suscipit officia numquam aut, voluptatibus culpa cumque ducimus ab quasi necessitatibus nulla omnis assumenda, ratione enim! Odit, quod?
         </span>

         <div  v-else style="width:100%; height:100px;">
        <v-textarea
                style="font-size:13px;font-family:BodyFont; "
                 
             dense
               @input="saveResourceInfo"
            :placeholder="'What is this ' +  that.$root.selectedResource.type + ' about? Markdown is supported.'"
              filled
              height="100"
              :loading="loadingInfo"
             v-model="input"
             counter="700"
             color="#3C87CD"
            
             ></v-textarea>
         </div>

        

           

      </div>

    
        <div style="background:transparent;font-family:BodyFont; " class="col-12 py-1 my-0 px-1 px-md-2 " >

      
        <template v-if="resources.length > 0">

           <resource :contents="resources" :show_add_icon="false"></resource>
        

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

              <template v-if="that.$root.selectedResource.type == 'playlist'">
            <div style="font-family:BodyFont;font-size:13px; color:grey;" class="mt-1 text-center">No video in this playlist yet.</div>

            <div class="col-12 py-1 text-center mt-2" v-if="checkIfisOwner()">

               <v-btn @click="goToSearch('youtube')" medium  rounded outlined style="color:#FF0000; font-family:BodyFont;font-size:13px; text-transform:none;" color="#FF0000">
               <v-icon class="px-2" style="font-size:35px; color:#FF0000;">mdi mdi-youtube</v-icon> 

               <span>Add videos from YouTube</span>
            </v-btn>

            </div>
           </template>

           <template v-else>
                <div style="font-family:BodyFont;font-size:13px; color:grey;" class="mt-1 text-center">No article or resource URL in this resource yet.</div>

             <div class="col-12 py-1 text-center d-flex flex-row mt-2 flex-wrap" v-if="checkIfisOwner()">

                <div class="col-12 py-1 text-center">

              <v-btn @click="goToSearch('devto')" medium outlined  rounded style="font-family:BodyFont;font-size:13px; text-transform:none;" color="#000000">
               <img  src="/imgs/devto.png" height="27px" class="px-2" >

               <span>Add articles from DevTo</span>
            </v-btn>

                </div>

                  <div class="col-12 py-2 text-center">

              <v-btn outlined @click="goToSearch('link')"  medium rounded style="font-family:BodyFont;font-size:13px; text-transform:none; " color="#3C87CD">
               
                 <v-icon class="px-2">las la-link  </v-icon>
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
        loadingInfo:false,
        loadingContent:false,
        input:'',
        loadingNextPage:false,
        nextPageToken:''
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
      this.fetchResourceContent();
      this.$root.showAddButton = true;
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
           info:this.contentInWord
         })

        .then(
          response=>{
            if(response.status == 200){
             
               this.loadingInfo = false;
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

         this.loadingContent = true;

             
            axios.get( '/fetch-resource-content/' + this.$root.selectedResource.resource_id   )
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


        this.resources = finalResult;

         this.nextPageToken = response.data.nextPageToken;

     this.loadingContent = false;
     
       
     }
       
     
     })
     .catch(error => {

        this.loadingContent = false;

         this.$root.chatComponent.showAlert('Oops!','Something went wrong,please try again','error');
    
     }) 

      
      }

       if(this.$root.selectedResource.devto_username){

         this.loadingContent = true;

             
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


        this.resources = finalResult;

         this.nextPageToken = 1;

     this.loadingContent = false;
     
       
     }
       
     
     })
     .catch(error => {

        this.loadingContent = false;

         this.$root.chatComponent.showAlert('Oops!','Something went wrong,please try again','error');
    
     }) 

      
      }
      
      if(this.$root.selectedResource.youtube_playlist_id == null && this.$root.selectedResource.devto_username == null){
         
           this.loadingContent = true;
       
          let storedResourceContent = this.$root.getLocalStore('channel_resource_content_' + this.$root.selectedResource.resource_id  + this.$root.username);

             storedResourceContent.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);
                
                       this.resources = finalResult

                   
                  this.loadingContent = false;

              this.checkForNewResourceContent();

                 }else{
            
           
           
            axios.get( '/fetch-resource-content/' + this.$root.selectedResource.resource_id   )
      .then(response => {
      
      if (response.status == 200) {
    
          this.$root.LocalStore('channel_resource_content_' + this.$root.selectedResource.resource_id  + this.$root.username,response.data.contents);

        this.resources = response.data.contents;

     this.loadingContent = false;
     
       
     }
       
     
     })
     .catch(error => {

        this.loadingContent = false;

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

        this.resources = response.data.contents;
    
         this.$root.forcereloadResource = false;
  
       
     }
       
     
     })
     .catch(error => {

        this.loadingContent = false;

    
     }) 

      },
      nextPagehandler: function(shown){

         if(this.nextPageToken && shown){

            this.loadingNextPage = true;

            axios.get( '/fetch-resource-content/' + this.$root.selectedResource.resource_id + '/' + this.nextPageToken   )
      .then(response => {
      
      if (response.status == 200) {
    
         

       let results = [];
    
        if(this.$root.selectedResource.devto_username){
            
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


        this.resources = finalResult;

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


        this.resources = finalResult;
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