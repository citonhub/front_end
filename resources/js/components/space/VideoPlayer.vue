<template>
   

   
    <div class="player" :style="'background-color:'+ backgroundColor+ ';background-image:url('+ backgroundImg+ ');border:1px solid #5dafbb;'"  @click.stop="togglePlay" :id="'player'+playerId" >
  <video class="player-video" :src="videoUrlPlay" :id="'video'+playerId" height="200px"></video>
    <div data-skip="-10" class="player-btn" id="backward"><v-icon color="#c9e4e8" v-show="skipbackward">mdi-skip-backward mdi-18px</v-icon></div>

    <div data-skip="10" class="player-btn" id="forward"><v-icon color="#c9e4e8" v-show="skipforward" >mdi-skip-forward mdi-18px</v-icon></div>
     
     <div id="playbtn" v-if="!playing && !loading ">
         <span style="color:#c9e4e8; background:#3E8893; border:1px solid #3E8893; border-radius:50%;" class="px-2 py-2"  @click.stop="togglePlay"><v-icon color="#ffffff">mdi-play</v-icon></span>
     </div>
     <div id="playbtn" v-if="!playing && loading">
         <v-progress-circular color="#3E8893" indeterminate style="color:#c9e4e8; background:#3E8893; border:1px solid #3E8893; border-radius:50%;" class="px-2 py-2"  @click.stop="togglePlay"><v-icon color="#ffffff">mdi-play</v-icon></v-progress-circular>
     </div>

     <div id="playbtn" v-if="percentComplete == 100 ">
         <span style="color:#c9e4e8; background:#3E8893; border:1px solid #3E8893; border-radius:50%;" class="px-2 py-2"  @click.stop="togglePlay"><v-icon color="#ffffff">mdi-play</v-icon></span>
     </div>

  <div class="player-controls">

    <div class="progress">
      <v-progress-linear height="8" rounded v-model="percentComplete" color="#3E8893"></v-progress-linear>
    </div>

       

    <div class="col-12 py-0 my-0">
       <div class="row py-0 my-0">
         <div class="col-8 text-left py-0 my-0">
       <span style="font-size:12px;color:#ffffff;"> {{ currentTime }} / {{ durationTime }}</span>
         </div>
         <div class="col-4 text-right py-0 my-0"  :id="'mute'+playerId">
            
         <span id="mute">
        <v-icon color="#c9e4e8" v-if="muted"> mdi-volume-mute  mdi-18px</v-icon>
        <v-icon color="#c9e4e8" v-else> mdi-volume-high  mdi-18px</v-icon>
      </span>
  
     <span class="d-inline-block px-2" :id="'fullscreen'+ playerId"> 
       
       <v-icon color="#c9e4e8" v-if="fullscreen">mdi-fullscreen-exit mdi-18px</v-icon> 

        <v-icon color="#c9e4e8" v-else>mdi-fullscreen mdi-18px</v-icon> 
     
     </span>
         </div>
        
       </div>
     
    </div>

      

  </div>
</div>

</template>
<script>
const convertTimeHHMMSS = (val) => {
	let hhmmss = new Date(val * 1000).toISOString().substr(11, 8);

	return hhmmss.indexOf("00:") === 0 ? hhmmss.substr(3) : hhmmss;
};
export default {
     props:['videoUrl','backgroundColor','backgroundImg','playerId'],
    data () {
      return {
        skipforward: false,
        skipbackward: false,
        fullscreen: false,
        video: undefined,
        progressFilled: undefined,
        isPause:true,
        muted:false,
        progress:undefined,
        videoUrlPlay:'',
        playing:false,
        storeBackground:this.backgroundImg,
        volume:0,
        loading:false,
        videoProgress:0,
        loaded: false,
        durationSeconds:0,
        currentSeconds:0,
      }
    },
    mounted(){
     
     this.loadVideo();
    },
    computed: {
		currentTime() {
			return convertTimeHHMMSS(this.currentSeconds);
		},
		durationTime() {
			return convertTimeHHMMSS(this.durationSeconds);
		},
		percentComplete:{
       get: function () {
       this.videoProgress = parseInt(this.currentSeconds / this.durationSeconds * 100);
			return parseInt(this.currentSeconds / this.durationSeconds * 100);
    },
    // setter
    set: function (newValue) {
      this.videoProgress = parseInt(this.currentSeconds / this.durationSeconds * 100);
			return parseInt(this.currentSeconds / this.durationSeconds * 100);
    }
			
		},
		
	},
    methods:{




skip(event) {

     event.stopPropagation();

    if(this.dataset.skip > 0){
       this.skipforward = true;
        setTimeout(function(){
          this.skipforward = false;
        },1000)
    }else{
       this.skipbackward = true;
        setTimeout(function(){
          this.skipbackward = false;
        },1000)
    }
  this.video.currentTime += parseFloat(this.dataset.skip);
},

 rangeUpdate(event) {
    event.stopPropagation();
  this.video[this.name] = this.value;
},
update(e) {
			this.currentSeconds = parseInt(this.video.currentTime);
		},
 scrub(e) {
   e.stopPropagation();
  const scrubTime = (e.offsetX / this.progress.offsetWidth) * this.video.duration;
  this.video.currentTime = scrubTime;
},

 toggleFullScreen(event){
   
    event.stopPropagation();

	if(this.video.requestFullScreen){
		this.video.requestFullScreen();
	} else if(this.video.webkitRequestFullScreen){
		this.video.webkitRequestFullScreen();
	} else if(this.video.mozRequestFullScreen){
		this.video.mozRequestFullScreen();
	}
},

vidmute(event){

    event.stopPropagation();
	if(this.video.muted){
		this.video.muted = false;
	  this.muted = false;
	} else {
		this.video.muted = true;
		this.muted = true;
	}
},

load() {
        this.loading = true;
      this.videoUrlPlay = this.videoUrl;
      setTimeout(()=>{
        if (this.video.readyState >= 2) {
        this.loaded = true;
        this.loading = false;
         this.backgroundImg = '';
        this.durationSeconds = parseInt(this.video.duration);
				return this.playing = false;
			}
      },2000)
			

			throw new Error('Failed to load video file.');
		},
togglePlay: function(){
  
   if(!this.loaded){
      
      this.load();
   }

  const playState = this.video.paused ? 'play' : 'pause';
   
    if(playState == 'play'){
      this.playing = true;
    }else{
      this.playing = false;
    }
    
  this.video[playState](); // Call play or paused method 

},
  
 loadVideo: function(){
 const player = document.querySelector('#player' + this.playerId);
this.video = player.querySelector('#video'+ this.playerId);
this.progress = player.querySelector('.progress');
this.progressFilled = player.querySelector('.filled-progress');
const skippers = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player-slider');
const fullscreenCtrl = document.getElementById('fullscreen' + this.playerId);
const muteCtrl = document.getElementById('mute' + this.playerId);




// Event listeners


fullscreenCtrl.addEventListener('click',this.toggleFullScreen);
muteCtrl.addEventListener('click',this.vidmute);



skippers.forEach(button => button.addEventListener('click', this.skip));
ranges.forEach(range => range.addEventListener('change', this.rangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', this.rangeUpdate));

let mousedown = false;
this.progress.addEventListener('click', this.scrub);
this.progress.addEventListener('mousemove', (e) => mousedown && this.scrub(e));
this.progress.addEventListener('mousedown', () => mousedown = true);
this.progress.addEventListener('mouseup', () => mousedown = false);

this.video.addEventListener('timeupdate', this.update);
	
     }
    }
}
</script>
<style lang="scss">
  $accent-color: #3E8893;


.player {
  max-width: 800px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat; 

  &:hover {
    .progress {
      height: 8px;
    }

    .player-controls {
      transform: translateY(0);
    }
  }
}

.player:-webkit-full-screen,
.player:fullscreen {
  max-width: none;
  width: 100%;
}

.play-btn {
  flex: 1;
}

.player-video {
  width: 100%;
  display: block;
}

.player-btn {
  background: none;
  border: 0;
  color: white;
  text-align: center;
  max-width: 60px;
  padding: 5px 8px;

  svg {
    fill: #FFFFFF;
  }

  &:hover,
  &:focus {
    border-color: #3E8893;
    background: rgba(255, 255, 255, .2);
  }
}

.player-slider {
  width: 10px;
  height: 30px;
}

.player-controls {
  align-items: center;
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: translateY(100%) translateY(-5px);
  transition: all 0.3s;
  flex-wrap: wrap;
  background: rgba(0, 0, 0, 0.3);
}

.player-controls > * {
  flex: 1;
}

#backward{
   display: flex;
  position: absolute;
  top:0;
  width: 15%;
  justify-content: center;
  align-items: center;
  height: 100%;
  background:none;

}

#forward{
   display: flex;
  position: absolute;
  top:0;
  left: 85%;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
  background: none;

}

#playbtn{
   display: flex;
  position: absolute;
  top:0;
  left:0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: none;
}

.progress {
  position: relative;
  display: flex;
  flex: 10;
  border-radius: 0px;
  flex-basis: 100%;
  height: 0px;
  transition: height 0.3s;
  background: #c9e4e8;
}

.filled-progress {
  width: 0%;
  background: $accent-color;
  flex: 0;
  flex-basis: 0%;
}


</style>