<template>
    <div>

       <template v-if="this.$root.forcereloadResource">
             <div class="col-12  text-center">

               <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

             </div>
       </template>

         <draggable 
       class="col-12 py-0 px-0 "
     tag="div"
        v-model="contents"
        handle=".handle"
        v-bind="dragOptions"
        @start="drag = true"
        @end="handleOnDrop">


         <div class="col-12 py-1 px-0 hoverEffect" v-for="(content,index) in contents" :key="index" >

         
            <!-- youtube search display -->
        <template v-if="content.type == 'youtube_video'">

             <template v-if="typeof content.content.id === 'object'">


               <div class="col-12 pb-0 pt-0 px-0 d-flex flex-row" :style="content.content.id.playlistId == that.$root.playingYoutubeVideoId ? ' align-items:center;background:whitesmoke;' : 'align-items:center;'" >
            <div class="handle">

              <template v-if="!show_add_icon && checkIfisOwner() && resourceType != 'playlist_template'">
                 <v-btn icon small> <v-icon >las la-braille</v-icon> </v-btn>
              </template>

            </div>
            <div class="col-5 py-1 px-1" style="height:110px;" @click="handleResource(content,index)">
              <div :style="'position:absolute;width:100%;border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url('+ content.content.snippet.thumbnails.default.url +');background-repeat: no-repeat; background-size:100%;'" >
             
                <div style="align-items:center;background:rgba(0, 0, 0,0.5);width:40%; left:60%; border-radius:0px; border-top-right-radius:8px;  border-bottom-right-radius:8px; justify-content:center; cursor:pointer; position:absolute; top:0; height:100%;" class="px-1 py-1 d-flex">
                      <v-icon style="font-size:35px; color:#ffffff;">mdi-playlist-play</v-icon>
                </div>

              </div>
            </div>  

               

             <div @click="handleResource(content,index)" class="col-5 d-flex flex-column pt-1 my-auto" style="justify-content:center;width:100%;">

               <div class="pt-3 mb-1" style="font-family:MediumFont;font-size:13px; overflow:hidden; width:100%; text-overflow:ellipsis;  ">
                 {{ shortenContent(content.content.snippet.title,50) }}
               </div>
                <div class="mb-1" style="font-family:BodyFont;font-size:12px; white-space: nowrap; color:grey; overflow:hidden; text-overflow:ellipsis; ">
                  {{ content.content.snippet.channelTitle }}
               </div>
               
           
            
            </div>  

            <div >
              <template v-if="show_add_icon">

                 <v-checkbox
            color="#3C87CD"
            dense
            @change="addToSelected(content)"
            small
          ></v-checkbox>

              </template>

               <template v-if="checkIfisOwner() && !show_add_icon">  
                <v-btn icon   @click="showOptions(content)">
                     <v-icon
                   style="font-size:20px;"
               
                 >las la-trash-alt</v-icon>

                </v-btn>
              </template>

             

            
            </div>

             

         </div>

             </template>

             <template v-else>


               <div class="col-12 pb-0 pt-0 px-0 d-flex flex-row" :style="content.content.id == that.$root.playingYoutubeVideoId ? ' align-items:center;background:whitesmoke;' : 'align-items:center;'" >
            
             <div class="handle">
              
              <template v-if="!show_add_icon && checkIfisOwner() &&  resourceType != 'playlist_template'">
                 <v-btn icon small> <v-icon >las la-braille</v-icon> </v-btn>
              </template>

            </div>
           
            <div class="col-5 py-1 px-1" style="height:110px;" @click="handleResource(content,index)">
              <div :style="'position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url('+ content.content.snippet.thumbnails.default.url +');background-repeat: no-repeat; background-size:100%;'" >
             
                <div style="align-items:center;background:rgba(0, 0, 0,0.1); justify-content:center; cursor:pointer; position:absolute; top:0; left:0; width:100%; height:100%;" class="px-1 py-1 d-flex">
                      <v-icon style="font-size:35px; color:#FF0000;">mdi mdi-youtube</v-icon>
                </div>

              </div>
            </div>  

               

             <div @click="handleResource(content,index)" class="col-5 d-flex flex-column pt-1 my-auto" style="justify-content:center;width:100%;">

               <div class="pt-3 mb-1" style="font-family:MediumFont;font-size:13px; overflow:hidden; width:100%; text-overflow:ellipsis;  ">
                 {{ shortenContent(content.content.snippet.title,50) }}
               </div>
                <div class="mb-1" style="font-family:BodyFont;font-size:12px; white-space: nowrap; color:grey; overflow:hidden; text-overflow:ellipsis; ">
                  {{ content.content.snippet.channelTitle }}
               </div>
                <div class="" style="font-family:BodyFont;font-size:12px;color:grey; overflow:hidden; text-overflow:ellipsis;  ">
                 {{convertDigit(content.content.statistics.viewCount,1)}} views
               </div>
           
            
            </div>  

            <div >
              <template v-if="show_add_icon">

                 <v-checkbox
            color="#3C87CD"
            dense
            @change="addToSelected(content)"
            small
          ></v-checkbox>

              </template>

             <template v-if="checkIfisOwner() && !show_add_icon">  
                <v-btn icon   @click="showOptions(content)">
                     <v-icon
                   style="font-size:20px;"
               
                 >las la-trash-alt</v-icon>

                </v-btn>
              </template>
               

            
            </div>

             

         </div>

             </template>

            

        

        </template>
        <!-- ends -->

        <!-- udemy search display  -->
           
         <template v-if="content.type == 'udemy_video'">
           <div class="col-12 pb-0 pt-0 px-0 d-flex flex-row" style=" align-items:center;">
             
              <div class="handle">
              
              <template v-if="!show_add_icon && checkIfisOwner() &&  resourceType != 'playlist_template'">
                 <v-btn icon small> <v-icon >las la-braille</v-icon> </v-btn>
              </template>

            </div>

            <div  @click="handleResource(content,index)" class="col-5 py-1 px-1" style="height:92px;">
              <div style="position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url(imgs/7.jpg);background-repeat: no-repeat; background-size:cover;" >
                <div style="background:rgba(0, 0, 0,0.6); cursor:pointer; position:absolute; top:0px; right:0px; border:1px solid black; border-top-right-radius:8px;" class="px-1 py-1">
                      <v-icon style="font-size:18px; color:white;">las la-plus</v-icon>
                </div>
                   <div style="align-items:center;background:rgba(0, 0, 0,0.1); justify-content:center; cursor:pointer; position:absolute; top:0; left:0; width:100%; height:100%;" class="px-1 py-1 d-flex">
                      <img  src="/imgs/udemy_logo.png" height="25px" >
                </div>

              </div>
            </div>  

             <div @click="handleResource(content,index)" class="col-5 d-flex flex-column pt-1 my-auto" style="justify-content:center;width:100%;">

               <div class="pt-3 mb-1" style="font-family:MediumFont;font-size:13px; overflow:hidden; width:100%; text-overflow:ellipsis;  ">
                 Python for Data science and Machine
               </div>
                <div class="mb-1" style="font-family:BodyFont;font-size:12px; white-space: nowrap; color:grey; overflow:hidden; text-overflow:ellipsis; ">
                  Jose Portilla
               </div>
                <div class="" style="font-family:BodyFont;font-size:13px;color:black; overflow:hidden; text-overflow:ellipsis;  ">
                  <span class="mr-2" style="font-family:MediumFont;">$11.99</span> <strike style="color:grey;">$94.99</strike>
               </div>
            </div>  

                <div >
              <template v-if="show_add_icon">

                 <v-checkbox
            color="#3C87CD"
            dense
            small
             @change="addToSelected(content)"
          ></v-checkbox>

              </template>

              <template v-if="checkIfisOwner() && !show_add_icon">  
                <v-btn icon   @click="showOptions(content)">
                     <v-icon
                   style="font-size:20px;"
               
                 >las la-trash-alt</v-icon>

                </v-btn>
              </template>

            
            </div>


         </div>


       
         </template>

        <!-- ends -->

        <!-- Dev.to search display  -->

        <template v-if="content.type == 'devto_article'">

            <div class="col-12  py-1 px-0 d-flex flex-row" style=" align-items:center;">
            <div class="handle">
              
              <template v-if="!show_add_icon && checkIfisOwner() &&  resourceType != 'playlist_template'">
                 <v-btn icon small> <v-icon >las la-braille</v-icon> </v-btn>
              </template>

            </div>
          
            <div  @click="handleResource(content,index)" class="col-5 py-1 px-1" style="height:110px;">
              <div :style="'position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url(' + content.content.cover_image +');background-repeat: no-repeat; background-size:cover;'" >
               

                 <div style="align-items:center;background:rgba(0, 0, 0,0.1); justify-content:center; cursor:pointer; position:absolute; top:0; left:0; width:100%; height:100%;" class="px-1 py-1 d-flex">
                      <img  src="/imgs/devto.png" height="35px" >
                </div>
              </div>
            </div>  

             <div @click="handleResource(content,index)" class="col-5 d-flex flex-column pt-1 my-auto" style="justify-content:center;width:100%;">

               <div class="pt-3 mb-1" style="font-family:MediumFont;font-size:13px; overflow:hidden; width:100%; text-overflow:ellipsis;  ">
                 {{content.content.title}}
               </div>
                <div class="mb-1" style="font-family:BodyFont;font-size:12px; white-space: nowrap; color:grey; overflow:hidden; text-overflow:ellipsis; ">
                  {{content.content.user.username}}
               </div>
                <div class="" style="font-family:BodyFont;font-size:12px;color:grey; overflow:hidden; text-overflow:ellipsis;  ">
                 {{ content.content.reading_time_minutes }} min read
               </div>
            </div>  

             <div >
              <template v-if="show_add_icon">

                 <v-checkbox
            color="#3C87CD"
            dense
            small
             @change="addToSelected(content)"
          ></v-checkbox>

              </template>

               <template v-if="checkIfisOwner() && !show_add_icon">  
                <v-btn icon   @click="showOptions(content)">
                     <v-icon
                   style="font-size:20px;"
               
                 >las la-trash-alt</v-icon>

                </v-btn>
              </template>

             

            
            </div>

         </div>


        </template>

        <!-- ends -->

        <!-- resource link display -->

        <template v-if="content.type == 'shared_link'"> 

           <div  class="col-12  pb-0 pt-0 px-0 d-flex flex-row mt-1" style=" align-items:center;">
            
             <div class="handle">
              
              <template v-if="!show_add_icon && checkIfisOwner() &&  resourceType != 'playlist_template'">
                 <v-btn icon small> <v-icon >las la-braille</v-icon> </v-btn>
              </template>

            </div>
          
            <div @click="handleResource(content,index)" class="col-5 py-1 px-1" style="height:110px;">
              <div :style="'position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url(' + content.content.image + ');background-repeat: no-repeat; background-size:cover;'" >
               
                 <div style="align-items:center;background:rgba(0, 0, 0,0.1); justify-content:center; cursor:pointer; position:absolute; top:0; left:0; width:100%; height:100%;" class="px-1 py-1 d-flex">
                        <v-icon style="font-size:35px; color:#ffffff;">las la-link</v-icon>
                </div>
              </div>
            </div>  

             <div @click="handleResource(content,index)" class="col-5 d-flex flex-column pt-1 my-auto" style="justify-content:center;width:100%;">

               <div class="pt-3 mb-1" v-html="content.content.title" style="font-family:MediumFont;font-size:13px; overflow:hidden; width:100%; text-overflow:ellipsis;  ">
                
               </div>
                <div class="mb-1"  v-html="content.content.description"  style="font-family:BodyFont;font-size:12px; white-space: nowrap; color:grey; overflow:hidden; text-overflow:ellipsis; ">
                
               </div>
                <div class="" style="font-family:BodyFont;font-size:12px;color:grey; overflow:hidden; text-overflow:ellipsis;  ">
                {{processURL(content.content.base)}}
               </div>
            </div> 

              <div >
              <template v-if="show_add_icon">

                 <v-checkbox
            color="#3C87CD"
            dense
             @change="addToSelected(content)"
            small
          ></v-checkbox>

              </template>

               <template v-if="checkIfisOwner() && !show_add_icon">  
                <v-btn icon   @click="showOptions(content)">
                     <v-icon
                   style="font-size:20px;"
               
                 >las la-trash-alt</v-icon>

                </v-btn>
              </template>

            
            </div> 

         </div>

           

        </template>

        <!-- ends -->
      </div>

           </draggable>

     
       

    </div>
</template>
<script>

import VueScreen from 'vue-screen'
Vue.use(VueScreen, 'bootstrap')


export default {
      data () {
      return {
      
        that:this,
  
        selected_id:'',
          drag: false,
          contentData:[],
          loadingContent:false,
        
      }
    },
    props:['show_add_icon','contents','fromStandalone','resourceType'],
    mounted(){
      this.contentData = this.contents;
        this.$root.resourceComponent = this;
      
    },
    computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "playlist",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
    methods:{
        processURL:function(link){

    let psl = require('psl');
     let FullString = link

     function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
      }

       return psl.get(extractHostname(FullString));


    },
     handleOnDrop:function(){
        this.drag = false;
       this.saveResourceContentOrder();
    },
    saveResourceContentOrder:function(showAlert = true){

       if(this.$root.loadingResourceContent) return

       this.$root.loadingResourceContent = true;

      let ResourcesArray = [];

        this.contents.forEach((content)=>{

         ResourcesArray.push(content.id)
   
        });

         axios.post( '/save-resources-content-order',{
        resource_id: this.$root.selectedResource.resource_id,
        content: ResourcesArray
      })
      .then(response => {
      
      if (response.status == 200) {

        this.$root.LocalStore('channel_resource_content_' + this.$root.selectedResource.resource_id  + this.$root.username, this.contents);

         if(showAlert){

               this.$root.chatComponent.showAlert('Saved!','Your changes have been saved','success');

         }

          this.$root.loadingResourceContent = false;

       
     }
       
     
     })
     .catch(error => {

     this.$root.chatComponent.showAlert('Oops!','Unable to save changes,please try again','error');
      this.$root.loadingResourceContent = false;
       
    
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
        shortenContent: function(content,limit){
             
             if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                  
                 return shortcontent + '...';
             }else{
               return content;
             }
        },

        showOptions(content){
         this.selected_id=content.id

         if(this.selected_id == content.id){
           axios.post('/delete-resource-content' , {
           "content_id" : content.id
           }).then(
             response=>{
               if(response.status== 200){
                 const newContents = this.contents.filter(content =>  content.id !== this.selected_id );
                 this.contents= newContents

                  this.$root.LocalStore('channel_resource_content_' + this.$root.selectedResource.resource_id  + this.$root.username, this.contents);
               }
             }
           ).catch( error=>{

             this.selected_id=''

             this.$root.chatComponent.showAlert('Oops!','Something went wrong,please try again','error');
           }


             
           )
         }

      
        },
         makeUUID:function(){
      var id = "id" + Math.random().toString(16).slice(2);
      return id;
       },
        handleResource:function(content,index){
          
           this.$root.nextResourceId = index + 1;
          this.$root.prevResourceId = index - 1;


          if( this.$root.nextResourceId >=  this.contents.length){
            
            this.$root.nextResourceId = null;
           
          }else{
            this.$root.nextResourceData = this.contents[this.$root.nextResourceId];
          }

          if(this.$root.prevResourceId >= 0){
             
             this.$root.prevResourceData = this.contents[this.$root.prevResourceId];
          }
         
        if(content.type  == 'youtube_video'){   


            if(typeof content.content.id === 'object'){

            
                  if(!this.$root.isLogged){

                       this.$root.checkIfUserIsLoggedIn();

                       this.$root.showResourceView = false;

                       return;

                  }

              this.$root.formerselectedResource =  this.$root.selectedResource;

              let resourceTemplate = {
                info:"<p>"  +  content.content.snippet.title +  " videos</p>",
                name:content.content.snippet.title,
                type:'playlist_template',
                resource_id: this.makeUUID(),
                youtube_playlist_id:content.content.id.playlistId
              };

               this.$root.fromTemplateView = true;

            this.$root.selectedResource = resourceTemplate;
            this.$root.showYoutubePlayer = false;
            this.$root.showYoutubePlayerSm = false;
          
           this.$router.push({ path: '/channels/'+ this.$root.selectedSpace.space_id + '/resource_content_new/template'});

            }else{

                this.$root.playingYoutubeVideo = content;

            
             this.$root.playingYoutubeVideoId = content.content.id

              if(this.fromStandalone){

                this.$root.showYoutubePlayerTemp = true;

              }else{

                 if(this.$screen.lg){

              this.$root.showYoutubePlayer = true;

              }else{

                 this.$root.showYoutubePlayerSm = true;
              }

              }
             


            }
         
       
  

         
        }

          if(content.type  == 'devto_article'){
          

          let url = content.content.canonical_url;

             window.open(url, '_blank');

         
        }



          if(content.type  == 'shared_link'){
          

          let url = content.content.link;

             window.open(url, '_blank');

         
        }
        },
         checkIfSelected:function(content){

         let thisContent =  this.$root.selectedItems.filter((eachContent)=>{
               
              
                return content.content.id == eachContent.id;
             
         });

         if(thisContent.length == 0){
              return false
         }else{
           return true
         }
       },
         addToSelected:function(content){

            
            if(this.checkIfSelected(content)){
               
               let remainingContent =  this.$root.selectedItems.filter((eachContent)=>{
               
              
                   return content.content.id != eachContent.id;
             
               });
        
               this.$root.selectedItems = remainingContent;
              

            }else{

               this.$root.selectedItems.push(content.content);

            }

            this.$root.resourceToAddStore =  this.$root.selectedItems;

          
          
        },
        convertDigit:function(num, digits){
           var si = [
    { value: 1, symbol: "" },
    { value: 1E3, symbol: "k" },
    { value: 1E6, symbol: "M" },
    { value: 1E9, symbol: "G" },
    { value: 1E12, symbol: "T" },
    { value: 1E15, symbol: "P" },
    { value: 1E18, symbol: "E" }
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
        }
    }
}
</script>
<style scoped>
.hoverEffect:hover{
   background-color: whitesmoke;
   cursor: pointer;
}
.handle{
  cursor: move; 
   
}
.ghost {
  opacity: 0.5;
  background: white;

}
</style>