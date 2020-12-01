<template>
<div>
 
     <div style="color:white;background:#3E8893;  max-width:180px; min-width:160px;" :class="'px-2 py-2 card ' + type" @click.stop="hello = true">
    
        <div style="font-size:13px;">
           {{content }}
        </div>
        
        <div class="text-right">
     <v-btn text small style="color:white;font-size:13px;" @click.stop="trigger"> <span style="color:#ffffff;">Ok</span></v-btn>
        </div>
            
     </div>
 

</div>
  
</template>

<script>
 export default {
     props:['buttonText','content','type','next'],
    data () {
      return {
        hello:false
      }
    },
    methods:{
   trigger: function(){

     if(this.next == 'panelShowSwitch'){

      this.$root.mainPanelComponent.showOrgInfo = false;

      this.$root.mainPanelComponent.showSwitchInfo = true;

     }

     if(this.next == 'panelTeamChannel'){

      this.$root.mainPanelComponent.showSwitchInfo = false;

      this.$root.mainPanelComponent.showAddSpaceInfo = true;

     }

      if(this.next == 'panelBot'){

      this.$root.mainPanelComponent.showAddSpaceInfo = false;

      this.$root.mainPanelComponent.showBotInfo = true;

     }

      if(this.next == 'panelChallenges'){

      this.$root.mainPanelComponent.showBotInfo = false;

      this.$root.mainPanelComponent.showChallengesInfo = true;

     }



       if(this.next == 'panelFinal'){

      this.$root.mainPanelComponent.showChallengesInfo = false;

    
    this.$root.LocalStore('panelinfo' + this.$root.username,['done']);

     axios.post('/save-user-onboarding-dashboard_info')
      .then(response => {
      
      if (response.status == 200) {

       
     }
       
     
     })
     .catch(error => {
       
       
     })
     }


     

      if(this.next == 'searchInfo'){

      
         this.$root.chatListComponent.showProjectInfo = false;

        this.$root.chatListComponent.showSearchInfo = true;


     }

     if(this.next == 'dashboardInfo'){
       
        this.$root.chatListComponent.showSearchInfo = false;

        this.$root.showDashboardInfo = true;
     }

     if(this.next == 'hubinfo'){
       
        this.$root.showDashboardInfo = false;

        this.$root.showHubInfo = true;
     }

     if(this.next =='profileInfo'){
       
        this.$root.showHubInfo = false;

        this.$root.showProfileInfo = true;
     }

      if(this.next == 'final'){

    this.$root.showProfileInfo = false;
       
     this.$root.LocalStore('chatlistinfonew' + this.$root.username,['done']);

     axios.post('/save-user-onboarding-chatlist_info')
      .then(response => {
      
      if (response.status == 200) {

       
     }
       
     
     })
     .catch(error => {
       
       
     })

     }

     if(this.next == 'liveContent'){

       this.$root.channelContentComponent.showCodeBoxInfo = false;

       this.$root.channelTopComponent.showLiveInfo = true;

     }

     if(this.next == 'subSpace' && this.$root.selectedSpace.type != 'Direct'){

     
       this.$root.channelTopComponent.showLiveInfo = false;
    
     this.$root.channelTopComponent.showSubSpaceInfo = true;
     }

     if(this.next == 'subSpace' && this.$root.selectedSpace.type == 'Direct'){

       this.$root.channelTopComponent.showLiveInfo = false;


      this.$root.channelTopComponent.showCustomizerInfo = true;



     }

      if(this.next == 'customizeSpace'){

    
     this.$root.channelTopComponent.showSubSpaceInfo = false;


      this.$root.channelTopComponent.showCustomizerInfo = true;
     }


      if(this.next == 'finalTop'){

      this.$root.channelTopComponent.showCustomizerInfo = false;

        if(this.$root.selectedSpace.type == 'Team' || this.$root.selectedSpace.type == 'Channel'){

           this.$root.LocalStore('channelcontentinfoChannel' + this.$root.username,['done']);

             axios.post('/save-user-onboarding-channel_info')
      .then(response => {
      
      if (response.status == 200) {

       
     }
       
     
     })
     .catch(error => {
       
       
     })

        }

         if(this.$root.selectedSpace.type == 'Direct'){

           this.$root.LocalStore('channelcontentinfoDirect' + this.$root.username,['done']);


             axios.post('/save-user-onboarding-dm_info')
      .then(response => {
      
      if (response.status == 200) {

       
     }
       
     
     })
     .catch(error => {
       
       
     })

        }


         if(this.$root.selectedSpace.type == 'Bot'){

           this.$root.LocalStore('channelcontentinfoBot' + this.$root.username,['done']);

             axios.post('/save-user-onboarding-bot_info')
      .then(response => {
      
      if (response.status == 200) {

       
     }
       
     
     })
     .catch(error => {
       
       
     })

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

.infobottomstart::after{
  content: "";
  position: absolute;
  top: 100%;
  left: 15%;
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
