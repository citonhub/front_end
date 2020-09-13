<template>
   

   <div>
     <div  class="d-flex alignContent col-12 py-0 my-0"  v-if="!playVideoValue"
   :style="'border:1px solid transparent;width:100%;height:200px; background-color:'+ backgroundColor+ ';background-image:url('+ backgroundImg+ '); border-radius: 10px;'" :id="'playerContainer'+playerId">
         
       <div>
         <span style="color:#c9e4e8; background:#3E8893; border:1px solid #3E8893; border-radius:50%;" class="px-2 py-2"  @click.stop="playVideo" ><v-icon color="#ffffff">mdi-play</v-icon></span>
     </div>
     </div>
       <div data-shaka-player-container style="max-width:40em" v-show="playVideoValue"
         data-shaka-player-cast-receiver-id="7B25EC44" :id="'videocontainner' + playerId">
      <!-- The manifest url in the src attribute will be automatically loaded -->
      <video  data-shaka-player   :id="'video'+playerId"
       :poster="backgroundImg" 
        style="width:100%;height:100%"
       :src="videoUrl"></video>
      </div>
    </div>
    

</template>
<script>

export default {
     props:['videoUrl','backgroundColor','backgroundImg','playerId'],
    data () {
      return {
         manifestUri:'',
         playVideoValue: false,
      }
    },
    mounted(){

         this.manifestUri = this.videoUrl;
     
     
    },
    computed: {
	
	},
  methods:{
    playVideo:function(){

      this.initApp();

      this.playVideoValue = true;

    },
    initApp:function() {
  // Install built-in polyfills to patch browser incompatibilities.
  shaka.polyfill.installAll();

  // Check to see if the browser supports the basic APIs Shaka needs.
  if (shaka.Player.isBrowserSupported()) {
    // Everything looks good!

    // Listen to the custom shaka-ui-loaded event, to wait until the UI is loaded.
document.addEventListener('shaka-ui-loaded',  this.initPlayer());
// Listen to the custom shaka-ui-load-failed event, in case Shaka Player fails
// to load (e.g. due to lack of browser support).
document.addEventListener('shaka-ui-load-failed', this.initFailed);
   
     
  } else {
    // This browser does not have the minimum set of APIs we need.
    console.error('Browser not supported!');
  }

   
},
 initPlayer:function() {
     
    let _this  = this;
   
 async function initPlayerInner() {


     // When using the UI, the player is made automatically by the UI object.
  const video = document.getElementById('video' + _this.playerId);
  const player = new shaka.Player(video);

  const videoContainer = document.getElementById('videocontainner' + _this.playerId);

    const ui = new shaka.ui.Overlay(player, videoContainer, video);
    
  const controls = ui.getControls();
  const config = {
  'overflowMenuButtons' : ['cast','picture_in_picture','loop','quality','playback_rate'],
  'seekBarColors': {
   base: 'rgba(111, 182, 195, 0.3)',
   buffered: 'rgba(111, 182, 195, 0.54)',
   played: 'rgb(111, 182, 195)',
 }
  };
  ui.configure(config);
 

  // Attach player and ui to the window to make it easy to access in the JS console.
  window.player = player;
  window.ui = ui;

  // Listen for error events.
  player.addEventListener('error', _this.onPlayerErrorEvent);
  controls.addEventListener('error', _this.onUIErrorEvent);

  // Try to load a manifest.
  // This is an asynchronous process.
  try {
    await player.load(_this.manifestUri);
    // This runs if the asynchronous load is successful.
   
  } catch (error) {
    _this.onPlayerError(error);
  }

}

 initPlayerInner();
},

 onPlayerErrorEvent(errorEvent) {
  // Extract the shaka.util.Error object from the event.
  onPlayerError(event.detail);
},

 onPlayerError(error) {
  // Handle player error
  console.error('Error code', error.code, 'object', error);
},

 onUIErrorEvent(errorEvent) {
  // Extract the shaka.util.Error object from the event.
  onPlayerError(event.detail);
},

 initFailed(errorEvent) {
  // Handle the failure to load; errorEvent.detail.reasonCode has a
  // shaka.ui.FailReasonCode describing why.
  console.error('Unable to load the UI library!');
}
    }
}
</script>
<style scoped>
.alignContent{
  align-items: center;
  justify-content: center;
}
</style>
