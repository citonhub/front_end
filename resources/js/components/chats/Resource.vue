<template>
    <div>

      <div class="col-12 py-0 px-0 hoverEffect" v-for="(content,index) in contents" :key="index" @click.stop="handleResource(content)">
            <!-- youtube search display -->
        <template v-if="content.type == 'youtube_video'">

            <div class="col-12 pb-0 pt-0 px-0 d-flex flex-row" style=" align-items:center;">
            <div class="col-5 py-1 px-1" style="height:92px;">
              <div :style="'position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url('+ content.content.snippet.thumbnails.standard.url +');background-repeat: no-repeat; background-size:100%;'" >
                <div v-if="show_add_icon" style="background:rgba(0, 0, 0,0.6); cursor:pointer; position:absolute; top:0px; right:0px; border:1px solid black; border-top-right-radius:8px;" class="px-1 py-1">
                      <v-icon style="font-size:18px; color:white;">las la-plus</v-icon>
                </div>
            

                <div style="align-items:center;background:rgba(0, 0, 0,0.1); justify-content:center; cursor:pointer; position:absolute; top:0; left:0; width:100%; height:100%;" class="px-1 py-1 d-flex">
                      <v-icon style="font-size:35px; color:#FF0000;">mdi mdi-youtube</v-icon>
                </div>

              </div>
            </div>  

               

             <div class="col-6 d-flex flex-column pt-1 my-auto" style="justify-content:center;width:100%;">

               <div class="pt-3 mb-1" style="font-family:MediumFont;font-size:13px; overflow:hidden; width:100%; text-overflow:ellipsis;  ">
                 {{ shortenContent(content.content.snippet.title,50) }}
               </div>
                <div class="mb-1" style="font-family:BodyFont;font-size:12px; white-space: nowrap; color:grey; overflow:hidden; text-overflow:ellipsis; ">
                  {{ content.content.snippet.channelTitle }}
               </div>
                <div class="" style="font-family:BodyFont;font-size:12px;color:grey; overflow:hidden; text-overflow:ellipsis;  ">
                 {{content.content.statistics.viewCount}} views
               </div>
           
            
            </div>  

            <div >
              <v-icon>las la-ellipsis-v</v-icon>
            </div>

             

         </div>

        

        </template>
        <!-- ends -->

        <!-- udemy search display  -->
           
         <template v-if="content.type == 'udemy_video'">
           <div class="col-12 pb-0 pt-0 px-0 d-flex flex-row" style=" align-items:center;">
            <div class="col-5 py-1 px-1" style="height:92px;">
              <div style="position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url(imgs/7.jpg);background-repeat: no-repeat; background-size:cover;" >
                <div v-if="show_add_icon" style="background:rgba(0, 0, 0,0.6); cursor:pointer; position:absolute; top:0px; right:0px; border:1px solid black; border-top-right-radius:8px;" class="px-1 py-1">
                      <v-icon style="font-size:18px; color:white;">las la-plus</v-icon>
                </div>
                   <div style="align-items:center;background:rgba(0, 0, 0,0.1); justify-content:center; cursor:pointer; position:absolute; top:0; left:0; width:100%; height:100%;" class="px-1 py-1 d-flex">
                      <img  src="/imgs/udemy_logo.png" height="25px" >
                </div>

              </div>
            </div>  

             <div class="col-7 d-flex flex-column pt-1 my-auto" style="justify-content:center;width:100%;">

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

         </div>


       
         </template>

        <!-- ends -->

        <!-- Dev.to search display  -->

        <template v-if="content.type == 'devto_article'">

            <div class="col-12  pb-0 pt-0 px-0 d-flex flex-row" style=" align-items:center;">
            <div class="col-5 py-1 px-1" style="height:92px;">
              <div style="position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url(imgs/7.jpg);background-repeat: no-repeat; background-size:cover;" >
                <div v-if="show_add_icon" style="background:rgba(0, 0, 0,0.6); cursor:pointer; position:absolute; top:0px; right:0px; border:1px solid black; border-top-right-radius:8px;" class="px-1 py-1">
                      <v-icon style="font-size:18px; color:white;">las la-plus</v-icon>
                </div>

                 <div style="align-items:center;background:rgba(0, 0, 0,0.1); justify-content:center; cursor:pointer; position:absolute; top:0; left:0; width:100%; height:100%;" class="px-1 py-1 d-flex">
                      <img  src="/imgs/devto.png" height="35px" >
                </div>
              </div>
            </div>  

             <div class="col-7 d-flex flex-column pt-1 my-auto" style="justify-content:center;width:100%;">

               <div class="pt-3 mb-1" style="font-family:MediumFont;font-size:13px; overflow:hidden; width:100%; text-overflow:ellipsis;  ">
                 CSS Variables: What are they & How to use
               </div>
                <div class="mb-1" style="font-family:BodyFont;font-size:12px; white-space: nowrap; color:grey; overflow:hidden; text-overflow:ellipsis; ">
                  Zachary Fetters
               </div>
                <div class="" style="font-family:BodyFont;font-size:12px;color:grey; overflow:hidden; text-overflow:ellipsis;  ">
                 5 min read
               </div>
            </div>  

         </div>


        </template>

        <!-- ends -->

        <!-- resource link display -->

        <template v-if="content.type == 'shared_link'"> 
                <div class="col-12  pb-0 pt-0 px-0 d-flex flex-row" style=" align-items:center;">
            <div class="col-5 py-1 px-1" style="height:92px;">
              <div style="position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url(imgs/5.jpg);background-repeat: no-repeat; background-size:cover;" >
                <div v-if="show_add_icon" style="background:rgba(0, 0, 0,0.6); cursor:pointer; position:absolute; top:0px; right:0px; border:1px solid black; border-top-right-radius:8px;" class="px-1 py-1">
                      <v-icon style="font-size:18px; color:white;">las la-plus</v-icon>
                </div>

                 <div style="align-items:center;background:rgba(0, 0, 0,0.1); justify-content:center; cursor:pointer; position:absolute; top:0; left:0; width:100%; height:100%;" class="px-1 py-1 d-flex">
                        <v-icon style="font-size:35px; color:#ffffff;">las la-link</v-icon>
                </div>
              </div>
            </div>  

             <div class="col-7 d-flex flex-column pt-1 my-auto" style="justify-content:center;width:100%;">

               <div class="pt-3 mb-1" style="font-family:MediumFont;font-size:13px; overflow:hidden; width:100%; text-overflow:ellipsis;  ">
                 Working with SSH on Ubuntu: Try it out 
               </div>
                <div class="mb-1" style="font-family:BodyFont;font-size:12px; white-space: nowrap; color:grey; overflow:hidden; text-overflow:ellipsis; ">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit...
               </div>
                <div class="" style="font-family:BodyFont;font-size:12px;color:grey; overflow:hidden; text-overflow:ellipsis;  ">
                 medium.com
               </div>
            </div>  

         </div>

        </template>

        <!-- ends -->
      </div>
       

    </div>
</template>
<script>
export default {
    props:['show_add_icon','contents'],
    methods:{
        shortenContent: function(content,limit){
             
             if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                  
                 return shortcontent + '...';
             }else{
               return content;
             }
        },
        handleResource:function(content){
        
        if(content.type  == 'youtube_video'){
           this.$root.playingVideoId = content.content.id;

           this.$root.showYoutubePlayer = true;
        }
        }
    }
}
</script>
<style scoped>
.hoverEffect:hover{
   background-color: whitesmoke;
}
</style>