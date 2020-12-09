<template>
    <div>
        
          <div class="col-12 py-0 my-1" >
           <div class="row py-0 my-0">
                <div class="col-2 d-flex py-1" style="align-items:center;justify-content:center;">
                   <span class="px-1 py-1" style="border:1px solid transparent;border-radius:50%;" ><v-icon :color="colorBase">las la-microphone</v-icon></span>
				   
				    
                </div>
                <div class="col-10 d-flex py-1 px-1 pr-3" style="align-items:center;justify-content:center;">
                      <span :style="'font-size:12px; color:' + colorBase + ';'" class="px-1"> {{ durationTime }}</span> 

                <v-progress-linear rounded :value="percentComplete" height="7" :color="colorBase" v-model="audioProgress" @change="seek"></v-progress-linear>
                 <audio :loop="innerLoop" ref="audiofile" :src="fileurl" preload="auto" style="display: none;" :id="'audio'+playerId" ></audio>
                   <v-btn icon v-on:click.stop="togglePlay" :color="colorBase" class="mx-0">
                          <v-progress-circular v-if="loading" indeterminate :color="colorBase" class="px-2 py-2" ><v-icon :color="colorBase">mdi mdi-play </v-icon></v-progress-circular>
						 <v-icon v-if="!playing && !loading " :color="colorBase">mdi mdi-play </v-icon>
						<v-icon v-if="playing && percentComplete < 100" :color="colorBase"> mdi mdi-pause</v-icon>
						<v-icon v-if="percentComplete == 100" :color="colorBase">mdi mdi-play</v-icon>
                       </v-btn>

                    <span :style="'font-size:12px;color:' + colorBase + ';'"> {{ currentTime }}</span>
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
	props: {
		file: {
			type: String,
			default: null
		},
		autoPlay: {
			type: Boolean,
			default: true
		},
		loop: {
			type: Boolean,
			default: false
		},
		playerId:{
			
			default: null
		},
		colorBase:{
			default: '#3E8893'
		}
	},
	data: () => ({
		audio: undefined,
		currentSeconds: 0,
		durationSeconds: 0,
		innerLoop: false,
		loaded: false,
		showplay: true,
		playing: false,
		
		loading:false,
		fileurl:'',
		previousVolume: 35,
		showVolume: false,
        volume: 100,
        audioProgress:0,
	}),
	computed: {
		currentTime() {
			return convertTimeHHMMSS(this.currentSeconds);
		},
		durationTime() {
			return convertTimeHHMMSS(this.durationSeconds);
		},
		percentComplete() {
			 this.audioProgress = parseInt(this.currentSeconds / this.durationSeconds * 100);
			return parseInt(this.currentSeconds / this.durationSeconds * 100);
		},
		muted() {
			return this.volume / 100 === 0;
		}
	},
	watch: {
	
		volume(value) {
			this.showVolume = false;
			this.audio.volume = this.volume / 100;
		}
	},
	methods: {
	
	
		load() {
        this.loading = true;
      this.fileurl = this.file;
      setTimeout(()=>{

        if (this.audio.readyState >= 2) {
        this.loaded = true;
        this.loading = false;
		this.durationSeconds = parseInt(this.audio.duration);
		    this.audio.play();
				return this.playing = true;
			}
      },2000)
			

			throw new Error('Failed to load audio file.');
		},
		togglePlay: function(){

   if(!this.loaded){
      
	  this.load();
	  
   }

  const playState = this.audio.paused ? 'play' : 'pause';
   
    if(playState == 'play'){
      this.playing = true;
    }else{
      this.playing = false;
    }
    
  this.audio[playState](); // Call play or paused method 

},
		mute() {
			if (this.muted) {
				return this.volume = this.previousVolume;
			}

			this.previousVolume = this.volume;
			this.volume = 0;
		},
		seek(e) {
			
			
			
			const seekPos = this.audioProgress/ 100;

			this.audio.currentTime = parseInt(this.audio.duration * seekPos);
		},
		stop() {
			this.playing = false;
			this.audio.currentTime = 0;
		},
		update(e) {
			this.currentSeconds = parseInt(this.audio.currentTime);
		}
	},
	created() {
		this.innerLoop = this.loop;
	},
	mounted() {
		this.audio = document.querySelector('#audio'+ this.playerId);
		this.audio.addEventListener('timeupdate', this.update);
		
	}


};
</script>
<style>
.player-slider {
  width: 10px;
  height: 30px;
}
</style>