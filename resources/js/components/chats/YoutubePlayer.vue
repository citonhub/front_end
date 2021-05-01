<template>
 <div @click.stop="preventClose()" style="background:white;">
    <v-btn class="d-lg-inline-flex d-none" icon color="#ffffff" @click="that.$root.showYoutubePlayer = false" style="position:absolute;background:#3C87CD; margin-top:-24px; left:2%; z-index:999999999999;" 
                                            ><v-icon>mdi-close mdi-18px</v-icon></v-btn>

      
       <v-btn class="d-block-flex d-lg-none" icon color="#ffffff"  @click="that.$root.showYoutubePlayerSm = false" style="position:absolute;background:#3C87CD; margin-top:4px; left:4px; z-index:999999999999;" 
                                            ><v-icon>mdi-close mdi-18px</v-icon></v-btn>

    <template v-if="loadingVideo">

      <div class="d-flex flex-row" :style="'height:' + playerHeight + 'px;  background:white; align-items:center;justify-content:center;'">
            
            <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>
      </div>

    </template>

    <template v-else>

      <iframe :id="'YTplayer' + screenType" style="z-index:99999999999999999;" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"  @click.stop="preventClose()" type="text/html" width="100%" :height="playerHeight"
  :src="'https://www.youtube.com/embed/' + that.$root.playingYoutubeVideo.content.id + '?enablejsapi=1&rel=0'"
  frameborder="0"></iframe>  

    <div class="col-12 px-2 py-1 d-flex flex-column" style="background:white;">
   
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
             <template v-if="that.$root.playingVideoSubState == 'subscribed'">
                    <v-btn text disabled style="font-family:BodyFont;font-size:12px; white-space: nowrap; color:grey; "> SUBSCRIBED</v-btn>
             </template>
             <template v-else>
                <v-btn text color="red" @click="subscribeToChannel()" style="font-family:BodyFont;font-size:12px; white-space: nowrap; color:red; "> SUBSCRIBE</v-btn>
             </template>
              
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
                 <v-btn @click="rateVideo('like')" icon> <v-icon style="font-size:23px;" :color="that.$root.playingVideoRating == 'like' ? '#FF0000' : ''" >las la-thumbs-up</v-icon> </v-btn>
             </div>

             <div>
                {{convertDigit(that.$root.playingYoutubeVideo.content.statistics.likeCount,1)}} 
             </div>
              
           </div>

           <div class="col-3  d-flex py-1 flex-column" style="font-family:BodyFont;font-size:11px; align-items:center; justify-content:center;">
                  <div>
                 <v-btn @click="rateVideo('unlike')" icon> <v-icon  :color="that.$root.playingVideoRating == 'dislike' ? '#FF0000' : ''"  style="font-size:23px;">las la-thumbs-down</v-icon> </v-btn>
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

    </template>

     
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
        showDescription:false,
        loadingVideo:false,
      }
    },
    mounted(){
   
      
      this.$root.YoutubeComponent = this;

      this.loadVideoData(true);
       
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
      loadVideoData: function(initial = false,videoId = 0){
         this.loadingVideo = true;
        axios.post( '/get-video-data',{
           videoId: this.$root.playingYoutubeVideo.content.id,
           resourceContentId:  this.$root.playingYoutubeVideo.id,
           video_channel_id: this.$root.playingYoutubeVideo.content.snippet.channelId
         } )
      .then(response => {
      
      if (response.status == 200) {

     

         this.$root.playingYoutubeVideo.content = response.data.video_data;

         this.$root.playingVideoSubState = response.data.subscription_state;

         this.$root.playingVideoRating = response.data.video_ratings;

         this.$root.playVideoAuthState = response.data.userIsAuth;

        if(initial){
           this.setVideoData();

        }else{
             this.player.loadVideoById(videoId);
        }

       
     
       this.loadingVideo = false;
            
     }
       
     
     })
     .catch(error => {

      this.loadingVideo = false;

     }) 
      },
      subscribeToChannel:function(){
        
         if(this.$root.youtube_connected){
 
           this.$root.playingVideoSubState = 'subscribed';

        axios.post( '/subscribe-toChannel',{

           channelId: this.$root.playingYoutubeVideo.content.snippet.channelId
         } )
      .then(response => {
      
      if (response.status == 200) {

     

            
     }
       
     
     })
     .catch(error => {

      this.loadingVideo = false;

     }) 

         }else{
    
             this.$router.push({ path: '/channels/'+ this.$root.selectedSpace.space_id + '/youtube_auth' });

         }
        
           
      },
      rateVideo(type){

          if(this.$root.youtube_connected){

             if(this.$root.playingVideoRating == 'like' || this.$root.playingVideoRating == 'dislike'){
             
             type = 'none';
              
           }

          this.$root.playingVideoRating = type;

          axios.post( '/rate-video',{

           videoId: this.$root.playingYoutubeVideo.content.id,
           type: type
         } )
      .then(response => {
      
      if (response.status == 200) {

     

            
     }
       
     
     })
     .catch(error => {

   

     }) 



          }else{

             this.$router.push({ path: '/channels/'+ this.$root.selectedSpace.space_id + '/youtube_auth' });

          }
           
      },
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
             
                
                  this.loadVideoData(false,data.content.id);
               
          }
     

          }

          // set new next and prev data

          this.$root.resourceComponent.handleResource(data,playingIndex);

         
        
         
      },
      onPlayerReady:function(event){
          
          this.player.playVideo();
      },
      onPlayerStateChange:function(event){

         if(event.data == -1){
            this.player.playVideo();
         }
        
     
      }
    }
}
</script>
<style scoped>

</style>