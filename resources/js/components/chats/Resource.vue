<template>
    <div>

       <template v-if="this.$root.forcereloadResource">
             <div class="col-12  text-center">

               <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

             </div>
       </template>

      <div class="col-12 py-1 px-0 hoverEffect" v-for="(content,index) in contents" :key="index" >
            <!-- youtube search display -->
        <template v-if="content.type == 'youtube_video'">

            <div class="col-12 pb-0 pt-0 px-0 d-flex flex-row" :style="content.content.id == that.$root.playingYoutubeVideoId ? ' align-items:center;background:whitesmoke;' : 'align-items:center;'" >
            <div class="col-5 py-1 px-1" style="height:110px;" @click="handleResource(content,index)">
              <div :style="'position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url('+ content.content.snippet.thumbnails.default.url +');background-repeat: no-repeat; background-size:100%;'" >
             
                <div style="align-items:center;background:rgba(0, 0, 0,0.1); justify-content:center; cursor:pointer; position:absolute; top:0; left:0; width:100%; height:100%;" class="px-1 py-1 d-flex">
                      <v-icon style="font-size:35px; color:#FF0000;">mdi mdi-youtube</v-icon>
                </div>

              </div>
            </div>  

               

             <div @click="handleResource(content,index)" class="col-6 d-flex flex-column pt-1 my-auto" style="justify-content:center;width:100%;">

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

              <template v-else>
                 <v-icon>las la-ellipsis-v</v-icon>
              </template>
               

            
            </div>

             

         </div>

        

        </template>
        <!-- ends -->

        <!-- udemy search display  -->
           
         <template v-if="content.type == 'udemy_video'">
           <div class="col-12 pb-0 pt-0 px-0 d-flex flex-row" style=" align-items:center;">
            <div  @click="handleResource(content,index)" class="col-5 py-1 px-1" style="height:92px;">
              <div style="position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url(imgs/7.jpg);background-repeat: no-repeat; background-size:cover;" >
                <div @click.stop="addToSelected(content)" v-if="show_add_icon" style="background:rgba(0, 0, 0,0.6); cursor:pointer; position:absolute; top:0px; right:0px; border:1px solid black; border-top-right-radius:8px;" class="px-1 py-1">
                      <v-icon style="font-size:18px; color:white;">las la-plus</v-icon>
                </div>
                   <div style="align-items:center;background:rgba(0, 0, 0,0.1); justify-content:center; cursor:pointer; position:absolute; top:0; left:0; width:100%; height:100%;" class="px-1 py-1 d-flex">
                      <img  src="/imgs/udemy_logo.png" height="25px" >
                </div>

              </div>
            </div>  

             <div @click="handleResource(content,index)" class="col-6 d-flex flex-column pt-1 my-auto" style="justify-content:center;width:100%;">

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

              <template v-else>
                 <v-icon>las la-ellipsis-v</v-icon>
              </template>
               

            
            </div>


         </div>


       
         </template>

        <!-- ends -->

        <!-- Dev.to search display  -->

        <template v-if="content.type == 'devto_article'">

            <div class="col-12  py-1 px-0 d-flex flex-row" style=" align-items:center;">
            <div  @click="handleResource(content,index)" class="col-5 py-1 px-1" style="height:110px;">
              <div :style="'position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url(' + content.content.cover_image +');background-repeat: no-repeat; background-size:cover;'" >
               

                 <div style="align-items:center;background:rgba(0, 0, 0,0.1); justify-content:center; cursor:pointer; position:absolute; top:0; left:0; width:100%; height:100%;" class="px-1 py-1 d-flex">
                      <img  src="/imgs/devto.png" height="35px" >
                </div>
              </div>
            </div>  

             <div @click="handleResource(content,index)" class="col-6 d-flex flex-column pt-1 my-auto" style="justify-content:center;width:100%;">

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

              <template v-else>
                 <v-icon>las la-ellipsis-v</v-icon>
              </template>
               

            
            </div>

         </div>


        </template>

        <!-- ends -->

        <!-- resource link display -->

        <template v-if="content.type == 'shared_link'"> 

           <div  class="col-12  pb-0 pt-0 px-0 d-flex flex-row mt-1" style=" align-items:center;">
            <div @click="handleResource(content,index)" class="col-5 py-1 px-1" style="height:110px;">
              <div :style="'position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url(' + content.content.image + ');background-repeat: no-repeat; background-size:cover;'" >
               
                 <div style="align-items:center;background:rgba(0, 0, 0,0.1); justify-content:center; cursor:pointer; position:absolute; top:0; left:0; width:100%; height:100%;" class="px-1 py-1 d-flex">
                        <v-icon style="font-size:35px; color:#ffffff;">las la-link</v-icon>
                </div>
              </div>
            </div>  

             <div @click="handleResource(content,index)" class="col-6 d-flex flex-column pt-1 my-auto" style="justify-content:center;width:100%;">

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

              <template v-else>
                 <v-icon>las la-ellipsis-v</v-icon>
              </template>
               

            
            </div> 

         </div>

           

        </template>

        <!-- ends -->
      </div>
       

    </div>
</template>
<script>

import VueScreen from 'vue-screen'
Vue.use(VueScreen, 'bootstrap')


export default {
      data () {
      return {
      
        that:this,
        
      }
    },
    props:['show_add_icon','contents','fromStandalone'],
    mounted(){
        this.$root.resourceComponent = this;
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
        shortenContent: function(content,limit){
             
             if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                  
                 return shortcontent + '...';
             }else{
               return content;
             }
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
</style>