<template>
 <div @click.stop="preventClose()">
     <iframe :id="'YTplayer' + screenType"  @click.stop="preventClose()" type="text/html" width="100%" :height="playerHeight"
  :src="'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://citonhubnew.com'"
  frameborder="0"></iframe>  

    <div class="col-12">
     <v-btn color="primary" @click="playnext">
        play next
     </v-btn>
    </div>
</div>    
</template>
<script>



export default {
    props:['screenType','playerHeight'],
     data () {
      return {
        videoScr:'',
        player:undefined
      }
    },
    mounted(){
   
      this.setVideoData();
       
    },
    computed: {
	
    },   
    methods:{
        preventClose:function(){

        },
        setVideoData: function(){
 var tag = document.createElement('script');
  tag.id = 'iframe-youtube';
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        },
      playnext: function(){

          if(this.player == undefined){

               this.player = new YT.Player('YTplayer' + this.screenType, {
        events: {
          'onReady': this.onPlayerReady,
          'onStateChange': this.onPlayerStateChange
        }
           });


      

          }else{

              console.log(this.player);

                this.player.loadVideoById('ezXqzmtzKX0')
          }
     
        
         
      },
      onPlayerReady:function(){

      },
      onPlayerStateChange:function(){

      }
    }
}
</script>
<style scoped>

</style>