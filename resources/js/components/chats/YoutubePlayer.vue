<template>
 <div @click.stop="preventClose()" style="background:white;">
    <v-btn class="d-lg-inline-flex d-none" icon color="#ffffff" @click="that.$root.showYoutubePlayer = false" style="position:absolute;background:#3C87CD; margin-top:-24px; left:2%; z-index:999999999999;" 
                                            ><v-icon>mdi-close mdi-18px</v-icon></v-btn>

      
       <v-btn class="d-block-flex d-lg-none" icon color="#ffffff"  @click="that.$root.showYoutubePlayerSm = false" style="position:absolute;background:#3C87CD; margin-top:4px; left:4px; z-index:999999999999;" 
                                            ><v-icon>mdi-close mdi-18px</v-icon></v-btn>


     <iframe :id="'YTplayer' + screenType" style="z-index:99999999999999999;" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"  @click.stop="preventClose()" type="text/html" width="100%" :height="playerHeight"
  :src="'https://www.youtube.com/embed/' + that.$root.playingYoutubeVideo.content.id + '?enablejsapi=1&rel=0'"
  frameborder="0"></iframe>  

    <div class="col-12 px-1 py-1 d-flex flex-column" style="background:white;">
   
        <div class="d-flex flex-row" style="align-items:center;">
              <div  style="font-family:MediumFont;font-size:14px; text-align:left;"  >
               {{ that.$root.playingYoutubeVideo.content.snippet.title }}
          </div>

          <div class="ml-auto" >
               <v-btn small icon @click="showDescription ? showDescription = false : showDescription = true" >
                 <v-icon style="font-size:20px;" v-if="!showDescription">mdi mdi-menu-down</v-icon>

                  <v-icon style="font-size:20px;" v-if="showDescription">mdi mdi-menu-up</v-icon>
                 
                 </v-btn>
          </div>
        </div>

         <div class="col-12 text-left py-0 px-0" style="font-family:BodyFont;font-size:12px; white-space: nowrap; color:grey; ">
                {{convertDigit(that.$root.playingYoutubeVideo.content.statistics.viewCount,1)}} views
           </div>

        <div class=" d-flex flex-row" style="align-items:center;" >
        

           <div class="col-6 py-0 px-0 text-left" style="font-family:BodyFont;font-size:12px; white-space: nowrap; color:grey; ">
               {{ that.$root.playingYoutubeVideo.content.snippet.channelTitle }}
           </div>

           <div class="col-6 py-0 text-right px-0" >
               <v-btn text color="red" style="font-family:BodyFont;font-size:12px; white-space: nowrap; color:red; "> SUBSCRIBE</v-btn>
           </div>

        </div>

        <div class="d-flex flex-row" style="align-items:center;">
          

           <div class="col-3 py-1 d-flex flex-column" style="font-family:BodyFont;font-size:11px; align-items:center; justify-content:center;">
                <div>
                 <v-btn icon @click.stop="playerAction('prev')" :disabled="this.$root.prevResourceId < 0" > <v-icon style="font-size:23px;">las la-arrow-left</v-icon> </v-btn>
             </div>

             <div>
               Prev
             </div>
           </div>

            <div class="col-3 d-flex py-1 flex-column" style="font-family:BodyFont;font-size:11px; align-items:center; justify-content:center;">
             <div>
                 <v-btn icon> <v-icon style="font-size:23px;">las la-thumbs-up</v-icon> </v-btn>
             </div>

             <div>
                {{convertDigit(that.$root.playingYoutubeVideo.content.statistics.likeCount,1)}} 
             </div>
              
           </div>

           <div class="col-3  d-flex py-1 flex-column" style="font-family:BodyFont;font-size:11px; align-items:center; justify-content:center;">
                  <div>
                 <v-btn icon> <v-icon  style="font-size:23px;">las la-thumbs-down</v-icon> </v-btn>
             </div>
             <div>
                {{convertDigit(that.$root.playingYoutubeVideo.content.statistics.dislikeCount,1)}} 
             </div>
              
           </div>

           <div class="col-3 py-1 d-flex flex-column" style="font-family:BodyFont;font-size:12px; align-items:center; justify-content:center;">
                <div>
                 <v-btn @click.stop="playerAction('next')" icon :disabled="this.$root.nextResourceId ==  null"> <v-icon style="font-size:23px;">las la-arrow-right</v-icon> </v-btn>
             </div>

             <div>
               Next
             </div>
           </div>
        </div>

        <div class="col-12 text-left px-0" v-if="showDescription" style="font-family:BodyFont;font-size:13px; ">
              <textarea  readonly v-model="that.$root.playingYoutubeVideo.content.snippet.description"  class="col-12 mt-0 mt-md-1" style=" height:250px;"  >
       
    </textarea>
        </div>
          
     
    </div>
</div>    
</template>
<script>



export default {
    props:['screenType','playerHeight','video'],
     data () {
      return {
        videoScr:'',
        player:undefined,
        that:this,
        showDescription:false
      }
    },
    mounted(){
   
      this.setVideoData();
      this.$root.YoutubeComponent = this;
       
    },
    computed: {
	    playerState:function(){
        
        
      }
    }, 
    watch:{
    playerState:function(newValue, oldValue){

    
    }
    } , 
    methods:{
        preventClose:function(){

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
        },
        setVideoData: function(){
 var tag = document.createElement('script');
  tag.id = 'iframe-youtube';
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  
   let intevalVideoSetting = null;

      intevalVideoSetting = setInterval(() => {
  
            if(this.player == undefined){
             this.player = new YT.Player('YTplayer' + this.screenType, {
        events: {
          'onReady': this.onPlayerReady,
          'onStateChange': this.onPlayerStateChange
        }
           });

            }else{
              clearInterval(intevalVideoSetting)
            }
    
        
      }, 3000);
      
        },
      playerAction: function(type){

          let data = null;

          let playingIndex = 0;

          if(type == 'next'){
              data =  this.$root.nextResourceData
              playingIndex = this.$root.nextResourceId;
          }else{
            data =   this.$root.prevResourceData

             playingIndex = this.$root.prevResourceId;
          }

          this.$root.playingYoutubeVideo = data;
           this.$root.playingYoutubeVideoId = data.content.id

          if(data.type == 'youtube_video'){

             if(this.player == undefined){

               this.player = new YT.Player('YTplayer' + this.screenType, {
        events: {
          'onReady': this.onPlayerReady,
          'onStateChange': this.onPlayerStateChange
        }
           });


          }else{
             
                

                this.player.loadVideoById(data.content.id)
          }
     

          }

          // set new next and prev data

          this.$root.resourceComponent.handleResource(data,playingIndex);

         
        
         
      },
      onPlayerReady:function(event){
             console.log('ready')
          this.player.playVideo();
      },
      onPlayerStateChange:function(event){

         if(event.data == -1){
            this.player.playVideo();
         }
        
        console.log('state change',event)
      }
    }
}
</script>
<style scoped>

</style>