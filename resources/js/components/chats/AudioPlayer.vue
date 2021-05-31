<template>
    <div>
        
          <div class="col-12 py-0 px-0 my-1 d-flex flex-row" style="align-items:center;justify-content:center;">
         
                <div class="mr-1">
                   <span><v-icon :color="colorBase">las la-microphone</v-icon></span>
				
                </div>
				<div>
                        <span :style="'font-size:12px; color:' + colorBase + ';'" class="px-1" v-html="totalTime()"></span> 
				</div>
                    
				<div class="mx-1" style="width:100%;">
                   <v-progress-linear rounded 
                     height="7" :color="colorBase" :value="sliderPercent" @change.stop="seek" ></v-progress-linear>
				</div>

				<div class="mr-1">
                     <audio  ref="audiofile"  style="display: none;" :id="'audio'+playerId" >
		
					 </audio>

					     <v-progress-circular v-if="loading" indeterminate :color="colorBase" class="px-2 py-1"  width="2" size="20" ></v-progress-circular>

						  <v-btn icon v-if="isPlaying" v-on:click.stop="toggleAudio" :color="colorBase" class="mx-0">
                           <v-icon style="font-size:24px;" :color="colorBase"> mdi mdi-pause</v-icon>
						  </v-btn>

						    <v-btn icon v-if="!isPlaying && loaded" v-on:click.stop="toggleAudio" :color="colorBase" class="mx-0">
                        	<v-icon style="font-size:24px;"   :color="colorBase">mdi mdi-play</v-icon>
						   </v-btn>

						  
                   <v-btn icon v-if="!isPlaying && !loading && !loaded"  v-on:click.stop="load" :color="colorBase" class="mx-0">
                       
						 <v-icon style="font-size:24px;"  :color="colorBase">mdi mdi-cloud-download </v-icon>
						
                       </v-btn>
				</div>

                <div >

                    <span :style="'font-size:12px;color:' + colorBase + ';'"  v-html="elapsedTime()"></span>
                </div>
                
          
          </div>
       
    </div>
</template>
<script>

export default {
    props: ["file", "playerId",'colorBase'],
    /**
     * playbackTime = local var that syncs to audio.currentTime
     * audioDuration = duration of audio file in seconds
     * isPlaying = boolean (true if audio is playing)
     *
     **/
    data() {
        return {
            playbackTime: 0,
            audioDuration: 100,
            audioLoaded: false,
			isPlaying: false,
			loading:false,
      loaded:false,
      sliderPercent:0,
			url:'',
        };
    },
    methods: {
	  saveFile(url) {
  return new Promise(function(resolve, reject) {
    // Get file name from url.
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function() {
      resolve(xhr);
    };
    xhr.onerror = reject;
    xhr.open('GET', url);
    xhr.send();
  }).then(function(xhr) {
   
    return xhr;
  });
     },
      load:function(){

        this.loading = true;

		   let audioDownload = this.saveFile(this.file);

		   audioDownload.then((result)=>{

			    let audioBlob = result.response;

			   let audioUrl = URL.createObjectURL(audioBlob);

			   	var audio = document.querySelector('#audio'+ this.playerId);
			 
			  audio.src = audioUrl;
        this.loading = false;
       
       this.loaded = true;
		   }).catch((e)=>{

		   });

		var audio = document.querySelector('#audio'+ this.playerId);
		
	
        //Wait for audio to load, then run initSlider() to get audio duration and set the max value of our slider 
        // "loademetadata" Event https://www.w3schools.com/tags/av_event_loadedmetadata.asp
        audio.addEventListener(
          "loadedmetadata",
          function(e) {
            this.initSlider();
          }.bind(this)
        );
        // "canplay" HTML Event lets us know audio is ready for play https://www.w3schools.com/tags/av_event_canplay.asp
        audio.addEventListener(
          "canplay",
          function(e) {
            this.audioLoaded=true;
          }.bind(this)
        );
        //Wait for audio to begin play, then start playback listener function
        this.$watch("isPlaying",function() {
          if(this.isPlaying) {
          var audio = document.querySelector('#audio'+ this.playerId);
            this.initSlider();
            //console.log("Audio playback started.");
            //prevent starting multiple listeners at the same time
            if(!this.listenerActive) {
              this.listenerActive=true;
              //for a more consistent timeupdate, include freqtimeupdate.js and replace both instances of 'timeupdate' with 'freqtimeupdate'
              audio.addEventListener("timeupdate",this.playbackListener);
            }
          }
        });
        
        //Update current audio position when user drags progress slider
        this.$watch("playbackTime",function() {
          
           var audio = document.querySelector('#audio'+ this.playerId);
        var diff=Math.abs(this.playbackTime-audio.currentTime);
        
          //Throttle synchronization to prevent infinite loop between playback listener and this watcher
          if(diff>0.01) {
			    var audio = document.querySelector('#audio'+ this.playerId);
            audio.currentTime=this.playbackTime;
          }

        });

        
      },
        //Set the range slider max value equal to audio duration
        initSlider() {
		
			var audio = document.querySelector('#audio'+ this.playerId);
            if (audio) {
                this.audioDuration = Math.round(audio.duration);
            }
        },
        //Convert audio current time from seconds to min:sec display
        convertTime(seconds){
             const format = val => `0${Math.floor(val)}`.slice(-2);
                var hours = seconds / 3600;
                var minutes = (seconds % 3600) / 60;
                return [minutes, seconds % 60].map(format).join(":");
        },
        //Show the total duration of audio file
        totalTime() {
		   var audio = document.querySelector('#audio'+ this.playerId);
		   
            if (audio && this.loaded) {
                var seconds = audio.duration;
                   if(seconds){
                    return this.convertTime(seconds);
                   }else{
                       return '00:00';
                   }
              
            } else {
                return '00:00';
            }
        },
        seek:function(value){
           var audio = document.querySelector('#audio'+ this.playerId);

           let goToDuration = (value/100) * audio.duration;
            audio.currentTime = goToDuration;
            this.playbackTime = goToDuration;
            this.sliderPercent = value;
        },
        //Display the audio time elapsed so far
        elapsedTime() {
            var audio = document.querySelector('#audio'+ this.playerId);
            if (audio) {
                var seconds = audio.currentTime;
                return this.convertTime(seconds);
            } else {
                return '00:00';
            }
        },
        //Playback listener function runs every 100ms while audio is playing
        playbackListener(e) {
            var audio = document.querySelector('#audio'+ this.playerId);
            //Sync local 'playbackTime' var to audio.currentTime and update global state
            this.playbackTime = audio.currentTime;
            this.sliderPercent = (audio.currentTime/audio.duration) * 100;
            
            //console.log("update: " + audio.currentTime);
            //Add listeners for audio pause and audio end events
            audio.addEventListener("ended", this.endListener);
            audio.addEventListener("pause", this.pauseListener);
        },
        //Function to run when audio is paused by user
        pauseListener() {
            this.isPlaying = false;
            this.listenerActive = false;
            this.cleanupListeners();
        },
        //Function to run when audio play reaches the end of file
        endListener() {
            this.isPlaying = false;
            this.listenerActive = false;
            this.cleanupListeners();
        },
        //Remove listeners after audio play stops
        cleanupListeners() {
           var audio = document.querySelector('#audio'+ this.playerId);
            audio.removeEventListener("timeupdate", this.playbackListener);
            audio.removeEventListener("ended", this.endListener);
            audio.removeEventListener("pause", this.pauseListener);
            //console.log("All cleaned up!");
        },
        toggleAudio() {
           var audio = document.querySelector('#audio'+ this.playerId);
            //var audio = document.getElementById("audio-player");
            if (audio.paused) {
                audio.play();
                this.isPlaying = true;
            } else {
                audio.pause();
                this.isPlaying = false;
            }
        },
    },
    mounted: function() {
       this.$root.audioIsLoading = false;
    }
};





</script>
<style>
.player-slider {
  width: 10px;
  height: 30px;
}
</style>