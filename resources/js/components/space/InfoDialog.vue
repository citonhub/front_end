<template>
<div>
 
     <div style="color:white;background:#3E8893; max-width:200px; min-width:180px;" :class="'px-2 py-2 card ' + type">
    
        <div style="font-size:13px;">
           {{content }}
        </div>
        
        <div class="text-right">
     <v-btn text small style="color:white;font-size:13px;" @click.stop="trigger">{{buttonText}}</v-btn>
        </div>
            
     </div>
 

</div>
  
</template>

<script>
 export default {
     props:['buttonText','content','type','next'],
    data () {
      return {
       
      }
    },
    methods:{
   trigger: function(){

     if(this.next == 'channelInfo'){

        this.$root.chatListComponent.showProjectInfo = false;

        this.$root.chatListComponent.showChannelInfo = true;

     }

     if(this.next == 'teamInfo'){

      

        this.$root.chatListComponent.showChannelInfo = false;

         this.$root.chatListComponent.showTeamInfo = true;

     }

      if(this.next == 'searchInfo'){

      
         this.$root.chatListComponent.showTeamInfo = false;

        this.$root.chatListComponent.showSearchInfo = true;


     }

      if(this.next == 'final'){


        this.$root.chatListComponent.showSearchInfo = false;
     this.$root.LocalStore('chatlistinfo' + this.$root.username,['done']);

     }

     if(this.next == 'liveContent'){

       this.$root.channelContentComponent.showCodeBoxInfo = false;

       this.$root.channelTopComponent.showLiveInfo = true;

     }

     if(this.next == 'subSpace' && this.$root.selectedSpace.type != 'Direct'){

     
       this.$root.channelTopComponent.showLiveInfo = false;
    
     this.$root.channelTopComponent.showSubSpaceInfo = true;
     }else{

       this.$root.channelTopComponent.showSubSpaceInfo = false;


      this.$root.channelTopComponent.showCustomizerInfo = true;



     }

      if(this.next == 'customizeSpace'){

    
     this.$root.channelTopComponent.showSubSpaceInfo = false;


      this.$root.channelTopComponent.showCustomizerInfo = true;
     }


      if(this.next == 'finalTop'){

      this.$root.channelTopComponent.showCustomizerInfo = false;
        if(this.$root.selectedSpace.type != 'Direct'){

           this.$root.LocalStore('channelcontentinfo' + this.$root.username,['done']);

        }
      
     }
   }
    }
  }
</script>
<style scoped>

.infobottom::after{
content: "";
  position: absolute;
  top: 100%;
  left: 85%;
  margin-left: -5px;
  border-width: 6px;
  border-style: solid;
  border-color: #3E8893 transparent transparent transparent;

}

.infotop::after{
  content: "";
  position: absolute;
   bottom: 100%;  /* At the top of the tooltip */
  left: 90%;
  margin-left: -5px;
  border-width: 6px;
  border-style: solid;
  border-color: transparent transparent  #3E8893 transparent;

}


.infoleft::after{
content: "";
  position: absolute;
 top: 15%;
  right: 100%; /* To the left of the tooltip */
  margin-top: -5px;
  border-width: 6px;
  border-style: solid;
  border-color:  transparent #3E8893 transparent transparent;

}


.inforight::after{
content: "";
  position: absolute;
 top: 15%;
  left: 100%; /* To the right of the tooltip */
  margin-top: -5px;
  border-width: 6px;
  border-style: solid;
  border-color: transparent transparent transparent  #3E8893;

}



  
</style>
