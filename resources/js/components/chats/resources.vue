<template>
  <div class="py-0 px-0">

   <div class="col-12 px-1 py-0 pt-0 fixed-top d-flex flex-row" style="position:sticky; background:white; top:0%; border-bottom:2px solid #c5c5c5;align-items:center;">
            <div class=" mr-1 col-2 py-1 px-1">
              <v-btn icon @click="goBack">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>
            </div>
          
             <div class="col-8 py-1 text-center">
             <span style="font-size:14px; font-family:MediumFont;">Resources</span>
          </div>
              
              <div class="col-2 py-0 mr-1 text-right">
                 
              </div>
          
    </div>

    <template v-if="loadingResources">
        
        <div class="col-12 mt-4 text-center">

               <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

             </div>
    </template>

    <template v-else>

        <template v-if="checkIfisOwner()">

             <div class=" px-2 px-md-2 py-1  " >
   
      <v-card flat class="d-flex flex-row px-1 py-1 col-12 " style="background: rgba(125, 179, 229, 0.4); align-items:center;">
             
               <div style="width:100%;" class="d-flex flex-column" >

                 <div >
                     <input   v-model="resourceName"
                     @focus="showTextarea = true"
               @keyup.enter="createResources()"
              style="border:1px solid white; width:100%; border-radius:2px; font-family:BodyFont; font-size:13px; background:white;"  placeholder="Create a resource" class="py-2 px-2" >
                 </div>

                 <div v-if="showTextarea || newPlaylistDesc != ''" class="mt-2">

                   <textarea  @input="processContent" v-model="newPlaylistDesc" :placeholder="'What is this resource about? Markdown is supported.'" class="py-2 px-2" style="border:1px solid white; width:100%; border-radius:2px; font-family:BodyFont; height:95px; font-size:13px; background:white;">

                   </textarea>

                 </div>
             
              </div>

          

              <div class="ml-auto px-2">
                <v-btn :loading="saving" icon style="background:white;" small  @click="createResources()">
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
        v-model="resources"
        handle=".handle"
        v-bind="dragOptions"
        @start="drag = true"
        @end="handleOnDrop">
    

       <v-card :ripple="false" flat class="d-flex flex-row px-1  mb-2 col-12 " v-for="(resource,index) in resources" :key="index" style="background: rgba(125, 179, 229, 0.4);cursor:pointer;">
              <div  @click="showContent(resource)" class="mr-2 ">
                 <v-icon color="#000000" class="ml-2">las la-folder</v-icon>
              </div>

              <div  @click="showContent(resource)" style=" white-space: nowrap; overflow:hidden; text-overflow:ellipsis; width:100%;">
              <span  style="font-family:BodyFont;color:black;font-size:13px;">{{resource.name}}</span>
              </div>

               <template v-if="checkIfisOwner()">

                    <div class="ml-auto px-2 d-flex flex-row" style="cursor:pointer;align-items:center;" v-if="!resource.delete">

                <div class="handle" >
                 <v-icon >las la-braille</v-icon> 
                </div>

                

                  <div class="ml-1" @click.stop="showDelete(resource)">
                   <v-btn x-small icon><v-icon style="font-size:17px;">mdi mdi-close</v-icon></v-btn>
                  </div>
            
               
              </div>

              <div class="ml-auto d-flex flex-row" style="align-items:center;" v-if="resource.delete">

                <span style="font-size:12px; font-family:BodyFont;">Delete?</span>
                  <div class="ml-1">
                     <v-btn @click="deleteResource(resource)" x-small color="error" style="font-size:10px; color:white;font-family:BodyFont;">Yes</v-btn>
                 </div>

                 <div class="ml-1">
                     <v-btn x-small @click="resource.delete = false" style="font-size:10px;font-family:BodyFont;">No</v-btn>
                 </div>
              </div>  


               </template>      
                 

        </v-card>     

       </draggable>


    <template v-if="checkIfisOwner() && !has_devto_resource">

       <div class="col-12 text-center">

          <div style="font-family:BodyFont;font-size:13px; color:grey;" class="mt-1 text-center">Create resource from your DevTo articles</div>

    </div>

      <div class="col-12 px-1  d-flex flex-row" style="align-items:center;" v-if="showAddArticle">
            <input style="width:100%;heigth:100%;font-size:13px;background:whitesmoke;border-radius:2px;font-family:BodyFont; text-transform:none;"  
                  placeholder="Your devto username" class="py-2 px-3" type="search" v-model="devtoUsername"  @keyup.enter="importDevtoArticle()"> 

                  <div class="ml-1">
                        <v-btn @click="importDevtoArticle()" :loading="loadingDevtoConnect" small color="#3C87CD" style="font-size:10px; color:white;font-family:BodyFont;">Import articles</v-btn>
                  </div>
      </div>
     

      <div class="col-12 text-center" v-else>
            <v-btn  @click="showAddArticle = true" rounded medium outlined style="font-family:BodyFont;font-size:13px; text-transform:none;" color="#000000">
               <img  src="/imgs/devto.png" height="27px" class="px-2" >

               <span>Import articles</span>
            </v-btn>
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
         resources:[],
          loading:false,
         saving:false,
         loadingResources:false,
    resourceName:'',
    has_devto_resource:true,
         drag: false,
         showAddArticle:false,
         devtoUsername:'',
         showTextarea:false,
          newPlaylistDesc:'',
         loadingDevtoConnect:false
    }
   
},
mounted(){
this.fetchResources();
  this.$root.showYoutubePlayer = false;
        this.$root.showYoutubePlayerSm = false;
        this.$root.showAddButton = false;
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
methods:{
   processContent:function(){

     this.contentInWord = this.compiledMarkdown;
   },
   goBack:function(){
              window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')

             this.$root.chatComponent.innerSideBarContent = '';
            
            this.$root.chatComponent.innerSideBarContent = '';
       
        },

  importDevtoArticle:function(){

       this.loadingDevtoConnect = true;

             axios.get( '/connect-devto/' +  this.$root.selectedSpace.space_id + '/' + this.devtoUsername)
      .then(response => {
      
      if (response.status == 200) {

      
         let newResource = response.data.resource;

          this.resources.unshift(newResource);
             
          this.has_devto_resource = true;

          this.loadingDevtoConnect = false;

          this.$root.LocalStore('channel_resource_' + this.$root.selectedSpace.space_id  + this.$root.username,this.resources);

          this.saveResourceOrder(false);

          this.$root.chatComponent.showAlert('Created!','Resource has been created','success');
       
     }
       
     
     })
     .catch(error => {

     this.$root.chatComponent.showAlert('Oops!','Unable to create resource,please try again','error');

          this.loadingDevtoConnect = false;
    
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

  deleteResource:function(resource){

         let remainingResources = this.resources.filter((eachresource)=>{
           return eachresource.resource_id != resource.resource_id
         })

         this.resources = remainingResources;

           axios.post( '/delete-resources',{
        resource_id: resource.resource_id
      })
      .then(response => {
      
      if (response.status == 200) {

      

               this.$root.chatComponent.showAlert('Deleted!','Resource has been deleted','success');


          this.$root.LocalStore('channel_resource_' + this.$root.selectedSpace.space_id  + this.$root.username,this.response);

          this.saveResourceOrder(false);
       
     }
       
     
     })
     .catch(error => {

     this.$root.chatComponent.showAlert('Oops!','Unable to delete resource,please try again','error');
       
    
     }) 



            
      },
     showDelete:function(resource){

  
        
        this.resources.map((eachresource)=>{
        
           eachresource.delete = false;
       
        })

            resource.delete = true;
        
          
    },
    handleOnDrop:function(){
        this.drag = false;
         this.saveResourceOrder();
    },
    fetchResources:function(){
       this.loadingResources  = true;

             let storedResouces = this.$root.getLocalStore('channel_resource_' + this.$root.selectedSpace.space_id  + this.$root.username);

            storedResouces.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);
                
                       this.resources = finalResult

                   
                  this.loadingResources = false;

              this.checkForNewResource();

                 }else{
            
           
            axios.get( `/fetch-resource/${this.$root.selectedSpace.space_id}/resource`)
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('channel_resource_' + this.$root.selectedSpace.space_id  + this.$root.username,response.data.resources);
        
     
                   let finalResult = response.data.resources;

                    this.has_devto_resource = response.data.has_devto_resource;

                     this.resources = finalResult

                
     
         this.loadingResources = false;

            
     }
       
     
     })
     .catch(error => {

        this.loadingResources = false;
    
     }) 

                 }
            })
    },
    saveResourceOrder:function(showAlert = true){

       let ResourcesArray = [];

        this.resources.forEach((resource)=>{

         ResourcesArray.push(resource.resource_id)
   
        });

      axios.post( '/save-resources-order',{
        space_id: this.$root.selectedSpace.space_id,
        resources: ResourcesArray,
         type:'resource'
      })
      .then(response => {
      
      if (response.status == 200) {

         if(showAlert){

               this.$root.chatComponent.showAlert('Saved!','Your changes have been saved','success');

         }

       

          this.$root.LocalStore('channel_resource_' + this.$root.selectedSpace.space_id  + this.$root.username,this.resources);

     
       
     }
       
     
     })
     .catch(error => {

     this.$root.chatComponent.showAlert('Oops!','Unable to save changes,please try again','error');
       
    
     }) 


    },
    checkForNewResource:function(){

         axios.get( `/fetch-resource/${this.$root.selectedSpace.space_id}/resource`)
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('channel_resource_' + this.$root.selectedSpace.space_id  + this.$root.username,response.data.resources);
        
     
                   let finalResult = response.data.resources;

                     this.resources = finalResult

                       this.has_devto_resource = response.data.has_devto_resource;

                   this.$root.forcereloadResource = false;
     
      

            
     }
       
     
     })
     .catch(error => {

        this.loadingResources = false;
    
     }) 

    },
 showContent:function(resource){
     
     this.$root.selectedResource = resource;
          
           this.$router.push({ path: '/channels/'+ this.$root.selectedSpace.space_id + '/resource_content/' + resource.resource_id });

     this.$root.resourceContentType='resources'
     
     }
  ,
  createResources:function(){
     if(this.resourceName == '' || this.contentInWord == '') return;

      this.saving = true;
    axios.post('/create-resource',
    {
      
space_id: this.$root.selectedSpace.space_id,
name: this.resourceName,
type:'resource',
info: this.contentInWord

    }
    ).then(
      response=>{
        if(response.status==200){
          this.resourceName='';

              let storedResouces = this.$root.getLocalStore('channel_resource_' + this.$root.selectedSpace.space_id  + this.$root.username);
 
             storedResouces.then((result)=>{


                 if(result != null ){

                    let finalResult = JSON.parse(result);
                     
                      finalResult = finalResult.unshift(response.data.resource);

                      this.$root.LocalStore('channel_resource_' + this.$root.selectedSpace.space_id  + this.$root.username,finalResult);
          

                 }else{


                 }

             })
         
           this.$root.channelHasResources = true

          this.resources.unshift(response.data.resource)

        this.saveResourceOrder(false);
         this.showContent(response.data.resource);
            this.saving = false;
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