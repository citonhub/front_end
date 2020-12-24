<template>
    <div class="row" >


       <!-- large and medium screens -->
         <div class="col-md-8 py-0 d-md-flex px-md-1 flex-row  d-none" style="align-items:center;" >
              
                   
                 

                   <div  class="d-inline-block mr-2"   v-if="this.$root.selectedSpace.type == 'Channel' || this.$root.selectedSpace.type == 'Team'"
                     :style="imageStyle(40,this.$root.selectedSpace,'channel')"   @click="showSideBar('channel_info')" ></div> 
                      <div  class="d-inline-block mr-2"   v-if="this.$root.selectedSpace.type == 'Bot' && this.$root.selectedSpace.bot_data != null"
                     :style="imageStyle(40,this.$root.selectedSpace.bot_data,'bot')"  @click="showSideBar('channel_info')"></div> 
                      <div  class="d-inline-block mr-2"   v-if="this.$root.selectedSpace.type == 'Direct' && this.$root.selectedSpace.userInfo != null"
                     :style="imageStyle(40,this.$root.selectedSpace.userInfo,'direct')"  @click="showSideBar('channel_info')"></div> 
                     <div class="d-inline-block">
                        

                             <div style="white-space: nowrap; overflow:hidden; text-overflow: ellipsis; ">
                                <span style="font-size:14px; font-family:BodyFont;cursor:pointer;"  @click="showSideBar('channel_info')"  v-if="this.$root.selectedSpace.type != 'Direct'"> {{this.$root.selectedSpace.name}}</span>
              <span style="font-size:14px; font-family:BodyFont;cursor:pointer;"  @click="showSideBar('channel_info')"  v-if="this.$root.selectedSpace.userInfo != undefined && this.$root.selectedSpace.type == 'Direct'" @click.stop="viewUser()">{{this.$root.selectedSpace.userInfo.username}}</span>

                 <span style="font-size:14px; font-family:BodyFont;cursor:pointer;"  @click="showSideBar('channel_info')"  v-if="this.$root.selectedSpace.type == 'Bot'"> {{this.$root.selectedSpace.bot_data.name}}</span>
        
                              
                             </div>
                              <div style="white-space: nowrap; overflow:hidden; text-overflow: ellipsis; ">


                           
                            <span class="typingText d-block" v-if="this.$root.typing && (this.$root.typingSpace == this.$root.selectedSpace.space_id)">{{this.$root.typinguser}} is typing... </span>
                <span class="typingText d-block" v-if="!this.$root.typing && this.$root.selectedSpace.type != 'Direct' && this.$root.selectedSpace.type != 'SubSpace' && this.$root.selectedSpaceMembers.length > 1">{{this.$root.selectedSpaceMembers.length}}  {{ $t('space.members') }} , {{generateOnlineUsers()}}  {{ $t('space.Online') }}</span>

          <span class="typingText d-block" v-if="!this.$root.typing && this.$root.selectedSpace.type == 'SubSpace' ">
            
            <v-icon v-if="this.$root.selectedSubSpaceType == 'Public'" color="#333333"   class="d-inline-block" style="font-size:12px;">mdi-pound </v-icon>
            <v-icon v-if="this.$root.selectedSubSpaceType == 'Private'" color="#333333"  class="d-inline-block" style="font-size:12px;"> mdi-lock </v-icon>
            <span class="px-1">  {{this.$root.selectedSubSpaceName}}</span>
          </span>

          <span class="typingText d-block" v-if="this.$root.selectedSpace.type == 'Bot' ">
            Online
          </span>

           <span class="typingText d-block" v-if="this.$root.typing && this.$root.selectedSpace.type == 'SubSpace' && (this.$root.typingSpace == this.$root.selectedSpace.space_id) ">
            
              {{this.$root.typinguser}} is typing... 
            
          </span>

              <span class="typingText d-block" v-if="!this.$root.typing && this.$root.selectedSpace.type == 'Direct' && checkIfOnline(this.$root.selectedSpace.userInfo.id)">{{ $t('space.Online') }}</span>

                             </div>

                       
                     </div>
              
         </div>
         <div class="col-md-2 py-1 d-md-block d-none">
              
         </div>
         <div class="col-md-2 py-1 pt-2 text-right d-md-block d-none" >

             <template v-if="this.$root.selectedSpace.type != 'Direct' && this.$root.selectedSpace.type != 'Bot'">

                  <v-btn  @click="showSideBar('sub_channels')" icon class="mr-2"> <v-icon>mdi mdi-pound</v-icon> </v-btn>

             </template>

               <template v-if=" this.$root.selectedSpace.type == 'Bot'">

                <v-btn icon @click="gotToBotChannel(that.$root.selectedSpace.bot_data.bot_channel)"><v-icon color="#ffffff">mdi-account-supervisor-outline</v-icon></v-btn>

             </template>
           


            <template v-if=" this.$root.selectedSpace.type != 'Bot'">
             <v-btn @click="openLiveSession" icon class="mr-2"> <v-icon>mdi-television-play</v-icon> </v-btn>
            </template>

            <v-btn v-else icon  ><v-icon >mdi-comment-question-outline</v-icon></v-btn>

              
               
         </div>
            
            <!-- ends -->
           
         <!-- smaller screens -->
           
            <div class="col-9 py-0 d-flex  flex-row d-md-none px-1" style="align-items:center;"  >
              
                    <v-btn icon class="d-lg-none d-inline-block mr-1"  @click.stop="goback">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>
                 

                      <div  class="d-inline-block mr-1"   v-if="this.$root.selectedSpace.type == 'Channel' || this.$root.selectedSpace.type == 'Team'"
                     :style="imageStyle(38,this.$root.selectedSpace,'channel')"   @click="showSideBar('channel_info')" ></div> 
                      <div  class="d-inline-block mr-1"   v-if="this.$root.selectedSpace.type == 'Bot' && this.$root.selectedSpace.bot_data != null"
                     :style="imageStyle(38,this.$root.selectedSpace.bot_data,'bot')"  @click="showSideBar('channel_info')"></div> 
                     
                      <div  class="d-inline-block mr-1"   v-if="this.$root.selectedSpace.type == 'Direct' && this.$root.selectedSpace.userInfo != null"
                     :style="imageStyle(38,this.$root.selectedSpace.userInfo,'direct')"  @click="showSideBar('channel_info')"></div> 
                    

                     <div class="d-inline-block">
                        

                            <div style="white-space: nowrap; overflow:hidden; text-overflow: ellipsis; ">
                                <span style="font-size:13px; font-family:BodyFont;cursor:pointer;"  @click="showSideBar('channel_info')"  v-if="this.$root.selectedSpace.type != 'Direct'"> {{this.$root.selectedSpace.name}}</span>
              <span style="font-size:13px; font-family:BodyFont;cursor:pointer;"  @click="showSideBar('channel_info')"  v-if="this.$root.selectedSpace.userInfo != undefined && this.$root.selectedSpace.type == 'Direct'" @click.stop="viewUser()">{{this.$root.selectedSpace.userInfo.username}}</span>

               <span style="font-size:13px; font-family:BodyFont;cursor:pointer;"  @click="showSideBar('channel_info')"  v-if="this.$root.selectedSpace.type == 'Bot'"> {{this.$root.selectedSpace.bot_data.name}}</span>
             
                             </div>

                              <div >
                              <div style="white-space: nowrap; overflow:hidden; text-overflow: ellipsis; ">


                           
                            <span  class="typingTextSm d-block" v-if="this.$root.typing && (this.$root.typingSpace == this.$root.selectedSpace.space_id)">{{this.$root.typinguser}} is typing... </span>
                <span class="typingTextSm d-block" v-if="!this.$root.typing && this.$root.selectedSpace.type != 'Direct' && this.$root.selectedSpace.type != 'SubSpace' && this.$root.selectedSpaceMembers.length > 1">{{this.$root.selectedSpaceMembers.length}}  {{ $t('space.members') }} , {{generateOnlineUsers()}}  {{ $t('space.Online') }}</span>

          <span class="typingTextSm d-block" v-if="!this.$root.typing && this.$root.selectedSpace.type == 'SubSpace' ">
            
            <v-icon v-if="this.$root.selectedSubSpaceType == 'Public'" color="#333333"   class="d-inline-block" style="font-size:12px;">mdi-pound </v-icon>
            <v-icon v-if="this.$root.selectedSubSpaceType == 'Private'" color="#333333"  class="d-inline-block" style="font-size:12px;"> mdi-lock </v-icon>
            <span class="px-1">  {{this.$root.selectedSubSpaceName}}</span>
          </span>

          <span class="typingTextSm d-block" v-if="this.$root.selectedSpace.type == 'Bot' ">
            Online
          </span>

           <span class="typingTextSm d-block" v-if="this.$root.typing && this.$root.selectedSpace.type == 'SubSpace' && (this.$root.typingSpace == this.$root.selectedSpace.space_id) ">
            
              {{this.$root.typinguser}} is typing... 
            
          </span>

              <span class="typingTextSm d-block" v-if="!this.$root.typing && this.$root.selectedSpace.type == 'Direct' && checkIfOnline(this.$root.selectedSpace.userInfo.id)">{{ $t('space.Online') }}</span>

                             </div>

                             </div>

                       
                     </div>
              
         </div>

          <div class="col-1 py-0 px-0 d-md-none d-block pt-1 text-right" >

                 <template v-if="this.$root.selectedSpace.type != 'Direct' && this.$root.selectedSpace.type != 'Bot'">

                  <v-btn  @click="showSideBar('sub_channels')" icon class="mr-2"> <v-icon>mdi mdi-pound</v-icon> </v-btn>

             </template>

               <template v-if=" this.$root.selectedSpace.type == 'Bot'">

                <v-btn icon @click="gotToBotChannel(that.$root.selectedSpace.bot_data.bot_channel)"><v-icon color="#ffffff">mdi-account-supervisor-outline</v-icon></v-btn>

             </template>

         </div>
         <div class="col-2 py-0 px-0 text-right pt-1 d-md-none d-block" >
              
             <template v-if=" this.$root.selectedSpace.type != 'Bot'">
             <v-btn @click="openLiveSession" icon class="mr-2"> <v-icon>mdi-television-play</v-icon> </v-btn>
            </template>

            <v-btn v-else icon  ><v-icon >mdi-comment-question-outline</v-icon></v-btn>
         </div>


         <!-- ends -->


    </div>
</template>
<script>
export default {
    data () {
      return {
       that: this,
      }
    },
    methods:{
        gotToBotChannel: function(botChannel){
          
          if(this.$root.selectedSpace.bot_data.bot_channel){

             this.$root.Messages = null;

              this.$root.channel = null

              

      //           this.$root.codeEditorArray = [];
      //  this.$root.returnedMessages = [];
      //  this.$root.messageStoreTop = [];
      //  this.$root.messageStore = [];
      //  this.$root.sharePage = false;
      //  this.$root.showUserInfo = false;
       

      //      window.Echo.leave('space.' + this.$root.selectedSpace.space_id);
        
      //   this.$root.forceListReload = true;
      //   this.$root.showUserInfo = false;
      //  this.$root.selectedSpaceMembers = [];

      //   this.$root.SpaceUsers = [];
      //    this.$root.selectedSpace = [];

            



      //        this.$router.push({ path: '/space/'  +  botChannel  +  '/channel/content/new' + '/user' });

      //           this.$root.channelContentComponent.fetchMessages();

      //      this.$root.channelContentComponent.makeSpaceConnetion();
                         

          }
      },
       showSideBar: function(type){

            this.$router.push({ path: '/channels/space_id/' + type });
            
         
       },
       openLiveSession:function(){
               this.$router.push({ path: '/channels/space_id/live_session' });
            
       },
        checkIfOnline: function(user_id){

          let userData = this.$root.globalUsers.filter((user)=>{
               return user.id == user_id;
             })
          
         if(userData.length == 0){

            return false

         }else{

           return true
         }

      },
        generateOnlineUsers: function(){
          let onlineUserList = [];

          this.$root.selectedSpaceMembers.forEach(member => {
             
             let userData = this.$root.globalUsers.filter((user)=>{
               return user.id == member.user_id;
             })

             if(userData.length != 0){
               onlineUserList.push(userData[0])
             }
           
            
          });
        
        return onlineUserList.length;
       },
       goback: function(){

           window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
           this.$root.chatComponent.chatIsOpen = false;
       },
        imageStyle:function(dimension,data,type){
      

      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5; cursor:pointer;";
         if(type == 'channel'){
              styleString += 'background-color:#ffffff; background-image:url(imgs/channel.png);';
         }else{
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile.png);';
         }
         
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5; cursor:pointer;";
         let imgLink = data.image_name + '.' + data.image_extension;
          if(type == 'channel' || type== 'bot'){
              styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/space/'  + imgLink  +  ');';
         }else{
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/profile/'  + imgLink  +  ');';
         }
         
          return styleString;
      }

      

  },
    }
}
</script>
<style scoped>
.typingText{
font-size:12px; 
color:grey; 
font-family:BodyFont;
}

.typingTextSm{
font-size:11px; 
color:grey; 
font-family:BodyFont;
}
</style>