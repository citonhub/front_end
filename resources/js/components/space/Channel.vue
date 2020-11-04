<template>
    <v-app style="font-family:BodyText;overflow-y:hidden; background:transparent;" >
     
     

      <div class="  col-lg-6 offset-lg-3 py-0 px-0 my-0" style="border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6;  position:absolute; background:white; height:100%; overflow-y:hidden; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">

         <v-card tile  class="col-12 py-0 my-0 " style="position:absolute;z-index:9999999999900; background:#3E8893;left:0;" >
          <channel-top></channel-top>
         
        </v-card>
         <div v-if="this.$root.fullImageViewer" class="col-12 py-0 my-0 px-0 d-md-block d-none" style="position:absolute;z-index:20;left:0; top:5%;  z-index:9999999999987664736568;">
            <full-image-viewer></full-image-viewer>
          </div>
        <div v-if="this.$root.fullImageViewer" class="col-12 py-0 my-0 px-0 d-md-none d-block" style="position:absolute;z-index:20;left:0; top:7%;  z-index:9999999999999987664736568;">
            <full-image-viewer></full-image-viewer>
          </div>



        
            <channel-share  v-if="this.$root.sharePage" class="col-12 py-0 my-0 px-0 d-md-block d-none" style="position:absolute;z-index:20;left:0; top:5%;  z-index:9999999999987664736568;"></channel-share>

             <channel-share  v-if="this.$root.sharePage" class="col-12 py-0 my-0 px-0 d-md-none d-block" style="position:absolute;z-index:20;left:0; top:7%;  z-index:9999999999999987664736568;"></channel-share>
         

          <div v-if="this.$root.voiceRecorder" class="col-12  py-0 my-0 px-0" style="position:absolute;z-index:20;left:0; top:7%;  z-index:987664736;">
            <voice-recorder></voice-recorder>
          </div>
          
       <div v-if="this.$root.showCodeBox" class="col-12 py-0 my-0 px-0 " style="position:absolute;z-index:20;left:0; top:0%; height:100%; width:100%;  z-index:9999999999999987664736568;">
            <channel-code-box ></channel-code-box>
          </div>

         
        <router-view></router-view>
         </div>
      </div>

       <v-fade-transition>
              <div  style="position:fixed; height:auto: align-items:center;justify-content:center;bottom:15%; z-index:9999999123453566;"  class="d-flex col-md-8 offset-md-2  col-lg-4 offset-lg-4">
             <v-alert
      v-model="this.$root.AlertRoot"
  
     
      color="#3E8893"
       width="auto"
       class="py-1 px-2"
       rounded
       style="font-size:13px;background:#3E8893; color:white; border-radius:20px;"
       height="auto"
    
       elevation-10
    
     
     
    >
     {{this.$root.AlertMsgRoot}}
    </v-alert>
        </div>
        </v-fade-transition>

    </v-app>
</template>
<script>
export default {
     data () {
      return {
       showmore:false
      }
    },
    mounted(){
      
      this.$root.showTabs=false;
       this.$root.showHeader = false;
       
    },
    methods:{
      
    }
}
</script>
<style>

</style>