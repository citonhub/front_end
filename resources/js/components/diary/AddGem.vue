<template>
    <v-app style="background:transparent;font-size:BodyFont;">
        <div class="col-12 px-3 px-md-2 scroller" style="position:absolute;height:95%;top:0%;left:0%;overflow-y:auto;overflow-x:hidden;padding-bottom:150px !important;">
        
        <div class="row">

            <div class="col-md-6 offset-md-1 py-0 my-0 pl-md-3 text-left">
          <h5 style="font-size:18px;" class="d-md-block d-none"> Add a Note</h5>
         <h5 class="d-md-none d-block"> Add a Note</h5>
        </div>

         <div class="col-lg-6 offset-lg-1 mb-2">

              <v-text-field
                 style="font-size:13px;"
                
            label="Subject"
            counter="60"
            persistent-hint     
           
             placeholder="What new thing do you learn today"
              dense
             color="#3C87CD">
             </v-text-field>

         </div>

         <div class="col-lg-6 offset-lg-1 mb-2">
             <v-combobox
                 style="font-size:13px;"
              dense
              label="Keywords"
            counter="80"
             placeholder="words or sentences that is related to the above topic"
            persistent-hint
            chips
            multiple
             color="#3C87CD">

              <template v-slot:selection="data">
            <v-chip
              :key="JSON.stringify(data.item)"
              v-bind="data.attrs"
              :input-value="data.selected"
              color="#3C87CD"
              dense
              class="my-1"
               :items="items"
              style="font-size:12px; color:#3C87CD; font-family:BodyFont;"
              outlined
              :disabled="data.disabled"
          
            >
             
              {{ data.item }}
            </v-chip>

              </template>
             </v-combobox>
         </div>

           <div class="col-lg-6 offset-lg-1 py-1">
           
            <h5 style="font-size:15px;color:gray;" >Contents</h5>
            
         </div>

          <div class="col-lg-10 offset-lg-1 d-flex flex-row flex-wrap py-0" style="align-items:center;">
           
            <v-chip close dense color="#3C87CD" class="mr-2 my-1"  style="font-size:13px; color:#ffffff; font-family:BodyFont;" >First content</v-chip>

              <v-chip close dense outlined color="#3C87CD" class="mx-r my-1"  style="font-size:13px;  font-family:BodyFont;" >Another content</v-chip>

                <v-btn icon class="mx-1"><v-icon style="font-size:20px;">las la-plus</v-icon></v-btn>
            
         </div>

         <div class="col-lg-3 pb-0 offset-lg-1">

              <v-text-field
                 style="font-size:13px;"
                
           v-model="selectedResponse"
            counter="60"
             
              dense
             color="#3C87CD">
             </v-text-field>

         </div>

         <div class="col-lg-10 py-1 offset-lg-1 d-flex px-0 flex-row" style="align-items:center;">

              <v-btn icon class="mx-1"><v-icon style="font-size:20px;">las la-plus</v-icon></v-btn>

         </div>

          <draggable
        class="col-lg-10 py-1 offset-lg-1 px-0 px-md-2 py-0 d-flex flex-row flex-wrap"
        tag="div"
        style="background:#E1F0FC;"
         v-model="list"
         handle=".handle"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
      >

      

            <div
              class="col-md-6 col-lg-4 px-1"
            v-for="(element,index) in list"
            :key="index"
          >
            <div class="px-2 py-2">

             <template v-if="element.type == 'text'">

                <v-card elevation-1 class="py-1 px-2 ml-2" style="max-width:100%;  border:1px solid transparent; min-width:150px;background:#ffffff; border-radius:7px; border-bottom-left-radius:0px;">

                    <div class="d-flex flex-row" style="align-items:center;">
                      <div class="col-8 py-0 px-0">
                         <span style="font-size:13px;font-weight:bold; ">V18</span>
                      </div>

                      <div class="col-4 py-0 px-0 text-right">
                          <v-icon style="font-size:25px;" color="#3C87CD" class="handle">las la-list</v-icon>
                      </div>
                        
                  </div>
                      <span style="font-size:13px;">{{element.content}}</span>
                      
                  </v-card> 

             </template>

             <template v-if="element.type == 'images'">

                 <v-card elevation-1 class="py-1 pb-2 px-2 ml-2" style=" width:100%;  border:1px solid transparent; min-width:150px;background:#ffffff; border-radius:7px; border-bottom-right-radius:0px;">
                      <div class="d-flex flex-row" style="align-items:center;">
                      <div class="col-8 py-0 px-0">
                         <span style="font-size:13px;font-weight:bold; ">V18</span>
                      </div>

                      <div class="col-4 py-0 px-0 text-right">
                          <v-icon style="font-size:25px;" color="#3C87CD" class="handle">las la-list</v-icon>
                      </div>
                        
                  </div>
                     <images :imageArray="element.imageArray" ></images>
                  </v-card> 

             </template>

             <template v-if="element.type == 'video'">

                <v-card elevation-1 class="py-1 px-2 ml-2" style=" width:100%;  border:1px solid transparent; min-width:150px;background:#ffffff; border-radius:7px; border-bottom-right-radius:0px;">
                     <div class="d-flex flex-row" style="align-items:center;">
                      <div class="col-8 py-0 px-0">
                         <span style="font-size:13px;font-weight:bold; ">V18</span>
                      </div>

                      <div class="col-4 py-0 px-0 text-right">
                          <v-icon style="font-size:25px;" color="#3C87CD" class="handle">las la-list</v-icon>
                      </div>
                        
                  </div>
                  <video-player  :videoUrl="'sample.mpd'" :backgroundColor="'#c5c5c5'" style="width:100%;"
               :backgroundImg="'/imgs/video.jpeg'" :playerId="'small56'" > </video-player>
                        
                      
                  </v-card> 

             </template>

             <template v-if="element.type == 'audio'">

                 <v-card elevation-1 class="py-1 pb-2 px-2 ml-2" style=" width:100%;  border:1px solid transparent; min-width:150px;background:#ffffff; border-radius:7px; border-bottom-right-radius:0px;">
                      <div class="d-flex flex-row" style="align-items:center;">
                      <div class="col-8 py-0 px-0">
                         <span style="font-size:13px;font-weight:bold; ">V18</span>
                      </div>

                      <div class="col-4 py-0 px-0 text-right">
                          <v-icon style="font-size:25px;" color="#3C87CD" class="handle">las la-list</v-icon>
                      </div>
                        
                  </div>
                   <audio-player class="mt-n1" :file="'/audio/space_audio_2666.mp3'" :playerId="'394'" :colorBase="'#000000'"></audio-player>
                  
                  </v-card> 

             </template>

             <template v-if="element.type == 'code'">

                <v-card elevation-1 class="py-1 px-2 pb-5 ml-2" style=" width:100%;  border:1px solid transparent; min-width:150px;background:#ffffff; border-radius:7px; border-bottom-right-radius:0px;">
                        <div class="d-flex flex-row" style="align-items:center;">
                      <div class="col-8 py-0 px-0">
                         <span style="font-size:13px;font-weight:bold; ">V18</span>
                      </div>

                      <div class="col-4 py-0 px-0 text-right">
                          <v-icon style="font-size:25px;" color="#3C87CD" class="handle">las la-list</v-icon>
                      </div>
                        
                  </div>
                   <code-box color="#000000" :codeContent="'Hello world'" :topMargin="13" :filename="'index.php'" :codeLanguage="'PHP'" ></code-box>
                        
                  </v-card> 

             </template>

             <template v-if="element.type == 'project'">
               
                 <v-card elevation-1 class="py-1 pb-2 px-2 ml-2" style=" width:100%;  border:1px solid transparent; min-width:150px;background:#ffffff; border-radius:7px; border-bottom-right-radius:0px;">
                      <div class="d-flex flex-row" style="align-items:center;">
                      <div class="col-8 py-0 px-0">
                         <span style="font-size:13px;font-weight:bold; ">V18</span>
                      </div>

                      <div class="col-4 py-0 px-0 text-right">
                          <v-icon style="font-size:25px;" color="#3C87CD" class="handle">las la-list</v-icon>
                      </div>
                        
                  </div>

                   <div class="row">
                      <div class="col-2 text-center d-flex py-1" style="align-items:center; justify-content:center;">
                        <v-icon >las la-laptop-code</v-icon>
                      </div>
                      <div class="col-7 d-flex py-1"  style="align-items:center;">
                           <span style=" font-size:13px;">Java calculator</span>
                      </div>

                       <div class="col-3 text-right py-1"  style="align-items:center;">
                           <v-btn icon > <v-icon>las la-arrow-circle-right</v-icon></v-btn>
                      </div>
                   </div>

                  </v-card> 


             </template>

             
                     
            </div>
          
          </div>

              
       
        
    
      </draggable>




        </div>   
      </div>

       <!-- add content -->

        <div v-if="false" class="col-12" style="position:absolute;height:100%;z-index:9999999999999;background: rgba(27, 27, 30, 0.32); overflow-y:auto;overflow-x:hidden;"> 

          <div class="d-flex flex-wrap mb-2" style="align-items:center; justify-content:center;">
           
           <v-card class="px-1 py-1 mx-1" style="border-radius:10px;">
                   <v-btn title="Add a text" icon > <v-icon style="font-size:26px;">las la-align-left</v-icon></v-btn>
           </v-card>

            <v-card class="px-1 py-1 mx-1" style="border-radius:10px;">
                   <v-btn title="Add images" icon > <v-icon style="font-size:26px;">las la-image</v-icon></v-btn>
           </v-card>

            <v-card class="px-1 py-1 mx-1" style="border-radius:10px;">
                   <v-btn title="Add a video" icon > <v-icon style="font-size:26px;">las la-video</v-icon></v-btn>
           </v-card>

            <v-card class="px-1 py-1 mx-1" style="border-radius:10px;">
                   <v-btn icon title="Add an audio" > <v-icon style="font-size:26px;">las la-music</v-icon></v-btn>
           </v-card>

            <v-card class="px-1 py-1 mx-1" style="border-radius:10px;">
                   <v-btn icon title="Add a code"> <v-icon style="font-size:26px;">las la-code</v-icon></v-btn>
           </v-card>

            <v-card class="px-1 py-1 mx-1" style="border-radius:10px;">
                   <v-btn icon title="Start recording"> <v-icon style="font-size:26px;">las la-microphone</v-icon></v-btn>
           </v-card>
            

          </div>

         <div class="col-lg-12 py-1 my-2 px-2 text-center">

             <v-press-editor :placeholder="'Type here...'"></v-press-editor>
             
             </div>
             

        </div>

        <!-- ends -->
    </v-app>
</template>
<script>

  const CodeBox = () => import(
    /* webpackChunkName: "CodeBox?v=0.53" */ '../chats/CodeBox.vue'
  );

   const VideoPlayer = () => import(
    /* webpackChunkName: "VideoPlayer?v=0.13" */  '../chats/VideoPlayer.vue'
  );

  const AudioPlayer = () => import(
    /* webpackChunkName: "AudioPlayer?v=0.20" */ '../chats/AudioPlayer.vue'
  );

  const Images = () => import(
    /* webpackChunkName: "Images?v=0.32" */ '../chats/Images.vue'
  );


 const VPressEditor = () => import(
    /* webpackChunkName: "VPressEditor?v=0.12" */ '../challenges/Editor.vue'
  );


  import draggable from 'vuedraggable'


export default {
     data () {
      return {
       items:['cool','new'],
       text:'',
       selectedResponse:'First response',
        list: [
           {
             type:'text',
             content:'Lorem ipsum dolor sit amet consectetur'
           },
           {
             type:'images',
               imageArray:[
               {
                 image_name:'space_image_1_128',
                 image_extension:'png',
                 background_color:'#c5c5c5'
               },
               {
                image_name:'space_image_1_129',
                image_extension:'png',
                background_color:'#c5c5c5'
               },
               {
                 image_name:'space_image_1_130',
                image_extension:'jpg',
                background_color:'#c5c5c5'
               },
                {
                  image_name:'space_image_1_131',
                image_extension:'jpeg',
                background_color:'#c5c5c5'
               }
             ]
           },
           {
             type:'video'
           },
            {
             type:'audio'
           },
           {
             type:'code'
           },
           {
             type:'project'
           }
        ],
      drag: false,
     
      }
    },
   components: {
    draggable,
     CodeBox,
      VideoPlayer,
      AudioPlayer,
      Images,
      VPressEditor
  },
   computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
     mounted(){
      this.$root.showMobileHub = false;
    },
    methods:{
       
        
    } 
}
</script>
<style scoped>
.handle{
   cursor: move; 
    
}
.ghost {
  opacity: 0.5;
  background: whitesmoke;
  border:1px solid whitesmoke;
  border-radius: 7px;
}

  .scroller::-webkit-scrollbar {
  width: 6px;
  background: transparent;
}


.scroller::-webkit-scrollbar-thumb {
  background-color:  #3C87CD;
  outline: 1px solid  #3C87CD;
}
</style>