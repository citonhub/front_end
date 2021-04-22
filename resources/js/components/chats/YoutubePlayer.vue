<template>
 <div @click.stop="preventClose()" style="background:white;">
     <iframe :id="'YTplayer' + screenType" style="z-index:99999999999999999;" @click.stop="preventClose()" type="text/html" width="100%" :height="playerHeight"
  :src="'https://www.youtube.com/embed/' + videoId + '?enablejsapi=1&rel=0'"
  frameborder="0"></iframe>  

    <div class="col-12 px-1 py-1 d-flex flex-column" style="background:white;">
   
        <div class="d-flex flex-row" style="align-items:center;">
              <div  style="font-family:MediumFont;font-size:14px; " >
               CitonHub Demo
          </div>

          <div class="ml-auto" >
               <v-btn small icon ><v-icon style="font-size:20px;">mdi mdi-menu-down</v-icon></v-btn>
          </div>
        </div>

         <div class="col-12 text-left py-0 px-0" style="font-family:BodyFont;font-size:12px; white-space: nowrap; color:grey; ">
               34 views
           </div>

        <div class=" d-flex flex-row" style="align-items:center;" >
        

           <div class="col-6 py-0 px-0 text-left" style="font-family:BodyFont;font-size:12px; white-space: nowrap; color:grey; ">
              CitonHub
           </div>

           <div class="col-6 py-0 text-right px-0" >
               <v-btn text color="red" style="font-family:BodyFont;font-size:12px; white-space: nowrap; color:red; "> SUBSCRIBE</v-btn>
           </div>

        </div>

        <div class="d-flex flex-row" style="align-items:center;">
          

           <div class="col-3 py-1 d-flex flex-column" style="font-family:BodyFont;font-size:11px; align-items:center; justify-content:center;">
                <div>
                 <v-btn icon> <v-icon style="font-size:23px;">las la-arrow-left</v-icon> </v-btn>
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
               21k
             </div>
              
           </div>

           <div class="col-3  d-flex py-1 flex-column" style="font-family:BodyFont;font-size:11px; align-items:center; justify-content:center;">
                  <div>
                 <v-btn icon> <v-icon  style="font-size:23px;">las la-thumbs-down</v-icon> </v-btn>
             </div>
             <div>
               50
             </div>
              
           </div>

           <div class="col-3 py-1 d-flex flex-column" style="font-family:BodyFont;font-size:12px; align-items:center; justify-content:center;">
                <div>
                 <v-btn icon> <v-icon style="font-size:23px;">las la-arrow-right</v-icon> </v-btn>
             </div>

             <div>
               Next
             </div>
           </div>
        </div>
          
     
    </div>
</div>    
</template>
<script>



export default {
    props:['screenType','playerHeight','videoId'],
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