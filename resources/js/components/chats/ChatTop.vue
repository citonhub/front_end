<template>
    <div class="row application application--light" data-app="true">


       <!-- large and medium screens -->
         <div class="col-md-9 py-0 d-lg-flex px-md-1 flex-row  d-none" style="align-items:center;" >
              
                   
                    <v-btn icon class="d-inline-block"  @click.stop="goback">
                      <v-icon style="font-size:24px;">las la-arrow-left</v-icon>
                    </v-btn>
                 

                   <div  class="d-inline-block mx-2"  style="width:42px;"  v-if="this.$root.selectedSpace.type == 'Channel' || this.$root.selectedSpace.type == 'Team' || this.$root.selectedSpace.type == 'SubSpace'"
                     :style="imageStyle(40,this.$root.selectedSpace,'channel')"   @click="showSideBar('channel_info')" ></div> 
                      <div  style="width:42px;" class="d-inline-block mx-2"   v-if="this.$root.selectedSpace.type == 'Bot' && this.$root.selectedSpace.bot_data != null"
                     :style="imageStyle(40,this.$root.selectedSpace.bot_data,'bot')"  @click="showSideBar('channel_info')"></div> 
                      <div  style="width:42px;" class="d-inline-block mx-2"   v-if="this.$root.selectedSpace.type == 'Direct' && this.$root.selectedSpace.userInfo != null"
                     :style="imageStyle(40,this.$root.selectedSpace.userInfo,'direct')"  @click="showSideBar('channel_info')"></div> 
                     <div class="d-inline-block">
                        

                             <div style="white-space: nowrap; overflow:hidden; text-overflow: ellipsis; ">
                                <span style="font-size:14px; font-family:BodyFont;cursor:pointer;font-family:MediumFont;"  @click="showSideBar('channel_info')"  v-if="this.$root.selectedSpace.type != 'Direct' && this.$root.selectedSpace.type != 'Bot'"> {{this.$root.selectedSpace.name}}</span>
              <span style="font-size:14px; font-family:BodyFont;cursor:pointer;font-family:MediumFont;"  @click="showSideBar('channel_info')"  v-if="this.$root.selectedSpace.userInfo != undefined && this.$root.selectedSpace.type == 'Direct'">{{this.$root.selectedSpace.userInfo.username}}</span>

                 <span style="font-size:14px; font-family:BodyFont;cursor:pointer;font-family:MediumFont;"  @click="showSideBar('channel_info')"  v-if="this.$root.selectedSpace.type == 'Bot'"> {{this.$root.selectedSpace.bot_data.name}}</span>
        
                              
                             </div>
                              <div style="white-space: nowrap; overflow:hidden; text-overflow: ellipsis; ">


                             <template v-if="!this.$root.typing &&  (this.$root.typingSpace != this.$root.selectedSpace.space_id)">

                              
                <span class="typingText d-block" v-if="this.$root.selectedSpace.type != 'Direct' && this.$root.selectedSpace.type != 'SubSpace' && this.$root.selectedSpaceMembers.length > 1">{{this.$root.selectedSpaceMembers.length}}  {{ $t('space.members') }} , {{generateOnlineUsers()}}  {{ $t('space.Online') }}</span>

          <span class="typingText d-block" v-if="this.$root.selectedSpace.type == 'SubSpace' ">
            
            <v-icon v-if="this.$root.selectedSubSpaceType == 'Public'" color="#333333"   class="d-inline-block" style="font-size:12px;">mdi-pound </v-icon>
            <v-icon v-if="this.$root.selectedSubSpaceType == 'Private'" color="#333333"  class="d-inline-block" style="font-size:12px;"> mdi-lock </v-icon>
            <span class="px-1">  {{this.$root.selectedSubSpaceName}}</span>
          </span>

          <span class="typingText d-block" v-if="this.$root.selectedSpace.type == 'Bot' ">
            Online
          </span>

           <span class="typingText d-block" v-if=" this.$root.selectedSpace.type == 'Direct' && checkIfOnline(this.$root.selectedSpace.userInfo.id)">{{ $t('space.Online') }}</span>

                             </template>


                  <template v-else>

                     <span class="typingText d-block" v-if="(this.$root.typingSpace == this.$root.selectedSpace.space_id)">
            
                  <span v-if="this.$root.selectedSpace.type != 'Direct' "> {{this.$root.typinguser}} is</span> typing...  
            
                </span>
                    
                    </template>          

      

             

                             </div>

                       
                     </div>
              
         </div>
         <div class="col-md-1 py-1 d-none text-right d-lg-block"  style="align-items:center;">

            <template v-if="this.$root.selectedSpace.type != 'Direct' && this.$root.selectedSpace.type != 'Bot'">

                  <v-btn  @click="showSideBar('sub_channels')" icon class="mr-2"> 
                      <v-badge
               dot
               v-if="that.$root.selectedSpaceSubMessages > 0"
               
                color="green">
              <v-icon>mdi mdi-pound</v-icon> 
              </v-badge>
                    <v-icon v-else >mdi mdi-pound</v-icon>
                     </v-btn>

             </template>

               <template v-if=" this.$root.selectedSpace.type == 'Bot'">

                  <template v-if="that.$root.selectedSpace.bot_data.bot_channel">

                      <v-btn    @click="gotToBotChannel(that.$root.selectedSpace.bot_data.bot_channel)" icon >
             
            
                 <v-icon >mdi-comment-multiple-outline </v-icon>
           
             
              </v-btn>
                    
                  </template>

                  <template v-else>

                      <v-btn :disabled="that.$root.selectedSpace.owner == that.$root.user_temp_id" :loading="loadingChat"  @click="gotToBotChannel(that.$root.selectedSpace.bot_data.bot_channel)" icon >
          

             
                 <v-icon >las la-user-alt </v-icon>
              
              </v-btn>

                  </template>

              


             </template>
              
         </div>

          <div class="col-md-1 py-1  d-none text-right px-1 d-lg-block"  style="align-items:center;">


            <template v-if=" this.$root.selectedSpace.type != 'Bot'">
             <v-btn @click="openLiveSession" icon class="mr-2"> 
                  
                    <v-badge
               dot
               v-if="that.$root.remoteLiveHappening"
                color="green">
              <v-icon>mdi-television-play</v-icon> 
              </v-badge>

              <v-icon v-else>mdi-television-play</v-icon> 

                </v-btn>
            </template>

            <v-btn v-else icon  @click.stop="showDiaryNotes" >
                <v-badge
                   dot
                   v-if="newUpdatePresent(that.$root.diaryNotes)"
                color="green">
                 <v-icon > mdi-format-list-bulleted</v-icon>
                   </v-badge>

                    <v-icon v-else  > mdi-format-list-bulleted</v-icon>
            </v-btn>

              
              
         </div>
         <div class="col-md-1 py-1 text-right d-none d-lg-block" style="align-items:center;" >

            
             <v-btn icon class="showMoreChat"  ><v-icon >las la-ellipsis-v</v-icon></v-btn>

               <!-- more option -->

                   <v-menu
      absolute
      :activator="'.showMoreChat'"
       style="z-index:99999999999999999999;"
      
      left
      offset-y
      
    >
    <more-option-chat></more-option-chat>
    </v-menu>

                 

                  <!-- ends -->


   
         </div>
            
            <!-- ends -->
           
         <!-- smaller screens -->
           
            <div class="col-12 py-0 d-flex  flex-row d-lg-none px-1" style="align-items:center;"  >
              
                    <v-btn icon class="d-lg-none d-inline-block"  @click.stop="goback">
                      <v-icon style="font-size:24px;">las la-arrow-left</v-icon>
                    </v-btn>
                 
                     <div class="d-flex" style="align-items:center; justify-content:center;">

                        <div  class="d-inline-block mr-1"   v-if="this.$root.selectedSpace.type == 'Channel' || this.$root.selectedSpace.type == 'Team' || this.$root.selectedSpace.type == 'SubSpace'"
                     :style="imageStyle(38,this.$root.selectedSpace,'channel')"   @click="showSideBar('channel_info')" ></div> 
                      <div class="d-inline-block mr-1"   v-if="this.$root.selectedSpace.type == 'Bot' && this.$root.selectedSpace.bot_data != null"
                     :style="imageStyle(38,this.$root.selectedSpace.bot_data,'bot')"  @click="showSideBar('channel_info')"></div> 
                     
                      <div    class="d-inline-block mr-1"   v-if="this.$root.selectedSpace.type == 'Direct' && this.$root.selectedSpace.userInfo != null"
                     :style="imageStyle(38,this.$root.selectedSpace.userInfo,'direct')"  @click="showSideBar('channel_info')"></div> 
                     

                     </div>
                    
                    

                     <div class="d-inline-block  py-0 px-0" style="width:40%;">

                    
                        

                            <div style="white-space: nowrap; overflow:hidden; text-overflow: ellipsis; ">
                                <span style="font-size:13px; font-family:BodyFont;cursor:pointer; font-family:MediumFont;"  @click="showSideBar('channel_info')"  v-if="this.$root.selectedSpace.type != 'Direct' && this.$root.selectedSpace.type != 'Bot'"> {{this.$root.selectedSpace.name}}</span>
              <span style="font-size:13px; font-family:BodyFont;cursor:pointer; font-family:MediumFont;"  @click="showSideBar('channel_info')"  v-if="this.$root.selectedSpace.userInfo != undefined && this.$root.selectedSpace.type == 'Direct'">{{this.$root.selectedSpace.userInfo.username}}</span>

               <span style="font-size:13px; font-family:BodyFont;cursor:pointer;font-family:MediumFont;"  @click="showSideBar('channel_info')"  v-if="this.$root.selectedSpace.type == 'Bot'"> {{this.$root.selectedSpace.bot_data.name}}</span>
             
                             </div>

                              <div >
                              <div style="white-space: nowrap; overflow:hidden; text-overflow: ellipsis; ">

             

                           
                            <template v-if="!this.$root.typing &&  (this.$root.typingSpace != this.$root.selectedSpace.space_id)">

                                <span class="typingTextSm d-block" v-if="this.$root.selectedSpace.type != 'Direct' && this.$root.selectedSpace.type != 'SubSpace' && this.$root.selectedSpaceMembers.length > 1">{{this.$root.selectedSpaceMembers.length}}  {{ $t('space.members') }} , {{generateOnlineUsers()}}  {{ $t('space.Online') }}</span>

          <span class="typingTextSm d-block" v-if="this.$root.selectedSpace.type == 'SubSpace' ">
            
            <v-icon v-if="this.$root.selectedSubSpaceType == 'Public'" color="#333333"   class="d-inline-block" style="font-size:12px;">mdi-pound </v-icon>
            <v-icon v-if="this.$root.selectedSubSpaceType == 'Private'" color="#333333"  class="d-inline-block" style="font-size:12px;"> mdi-lock </v-icon>
            <span >  {{this.$root.selectedSubSpaceName}}</span>
          </span>

          <span class="typingTextSm d-block" v-if="this.$root.selectedSpace.type == 'Bot' ">
            Online
          </span>
      <span class="typingTextSm d-block" v-if="this.$root.selectedSpace.type == 'Direct' && checkIfOnline(this.$root.selectedSpace.userInfo.id)">{{ $t('space.Online') }}</span>

                            </template>

                            <template v-else>

                               <span class="typingTextSm d-block"  v-if="(this.$root.typingSpace == this.$root.selectedSpace.space_id)">
            
                            <span v-if="this.$root.selectedSpace.type != 'Direct'"> {{this.$root.typinguser}} is</span> typing... 
            
                             </span>

                            </template>

                             </div>

                             </div>

                       
                     </div>

                  <div class="ml-auto d-flex flex-row" style="align-items:center; justify-content:center;">

                <!-- sub channels -->
                      <template v-if="this.$root.selectedSpace.type != 'Direct' && this.$root.selectedSpace.type != 'Bot'">

                  <v-btn  @click="showSideBar('sub_channels')" icon class="mr-2"> 
                      <v-badge
               dot
               v-if="that.$root.selectedSpaceSubMessages > 0"
               
                color="green">
              <v-icon>mdi mdi-pound</v-icon> 
              </v-badge>
                    <v-icon v-else >mdi mdi-pound</v-icon>
                    
                     </v-btn>

             </template>

             
             <!-- ends -->
                
                 <!-- live session and bot author comment-->

                  <template v-if=" this.$root.selectedSpace.type != 'Bot'">
                
             <v-btn small  @click="openLiveSession" icon class="mr-2"> 
                 <v-badge
               dot
               v-if="that.$root.remoteLiveHappening"
                color="green">
              <v-icon>mdi-television-play</v-icon> 
              </v-badge>

              <v-icon v-else>mdi-television-play</v-icon> 
               
               </v-btn>
            </template>

            <template v-else>

                <template v-if="that.$root.selectedSpace.bot_data.bot_channel">

                      <v-btn small class="mr-1" @click="gotToBotChannel(that.$root.selectedSpace.bot_data.bot_channel)" icon >
             
            
                 <v-icon  style="font-size:21px;">mdi-comment-multiple-outline </v-icon>
           
             
              </v-btn>
                    
                  </template>

                  <template v-else>

                      <v-btn  class="mr-1" small :disabled="that.$root.selectedSpace.owner == that.$root.user_temp_id" :loading="loadingChat"  @click="gotToBotChannel(that.$root.selectedSpace.bot_data.bot_channel)" icon >
          

             
                 <v-icon  style="font-size:21px;">las la-user-alt </v-icon>
              
              </v-btn>

                  </template>

            </template>

          


            <v-btn small @click.stop="showDiaryNotes" v-if=" this.$root.selectedSpace.type == 'Bot'" icon  >
             
                  <v-badge
                   dot
                   v-if="newUpdatePresent(that.$root.diaryNotes)"
                color="green">
                 <v-icon style="font-size:21px;" > mdi-format-list-bulleted</v-icon>
                   </v-badge>

                    <v-icon v-else style="font-size:21px;" > mdi-format-list-bulleted</v-icon>
              </v-btn>

                 <!-- ends -->
                
                <!-- more options -->

                   <v-btn small icon @click="showMoreOptions()" ><v-icon >las la-ellipsis-v</v-icon></v-btn>

                <!-- ends -->
                  </div>
              
         </div>

         

         <!-- ends -->


    </div>
</template>
<script>
 const MoreOptionChat = () => import(
    /* webpackChunkName: "MoreOptionChat" */ './MoreOptionChat.vue'
  );
export default {
    data () {
      return {
       that: this,
       loadingChat:false,
      }
    },
    mounted(){
     this.$root.chatTopLoaded = true;
     this.$root.chatTopLoadedLg = true;
    },
    components:{
     MoreOptionChat
    },
    methods:{
      newUpdatePresent:function(updateData){

         let update = updateData.filter((note)=>{

             return note.changes > 0 || note.is_new;

         })

         if(update.length > 0){
          return true;
         }else{
           return false;
         }

      },
       showMoreOptions:function(){
        this.$root.chatComponent.showMoreOptionsChat = true;
       },
        gotToBotChannel: function(botChannel){
          
          if(this.$root.selectedSpace.bot_data.bot_channel){

            
          let spaceId = this.$root.selectedSpace.bot_data.bot_channel;

               this.$root.chatComponent.chatInnerSideBar= false;
               this.$root.chatComponent.chatIsOpen = false;
                this.$root.chatComponent.innerSideBarContent = '';

                

            this.$router.push({ path: '/channels/' + spaceId +'/content' });
              
              this.$root.chatComponent.fetchMessages(spaceId);
              this.$root.chatComponent.messageIsDone = false;
           this.$root.chatComponent.chatIsOpen = true;


          }else{

             if(this.$root.selectedSpace.owner == this.$root.user_temp_id){

               return;

             }
            this.chatUser();
          }
      },
        chatUser:function(){

         this.loadingChat = true;

          axios.post( '/create-space',{
                name: '',
                limit: 2,
                memberId: this.$root.selectedSpace.owner,
                type: 'Direct'
                  })
          .then(response => {

             if (response.status == 200) {

              

                  let storedChat = this.$root.getLocalStore('user_chat_list'+ this.$root.username);

                   storedChat.then((result)=>{

                       if(result != null ){

                           

                          

                    let finalResult = JSON.parse(result);

                        let userSpace = finalResult.direct_messages.filter((space)=>{
                          return space.space_id == response.data.space.space_id
                        })

                        if(userSpace.length > 0){


                        }else{

                          finalResult.direct_messages.unshift(response.data.space);

                          this.$root.LocalStore('user_chat_list' + this.$root.username,finalResult);

                     let fullList = finalResult.channels.concat(finalResult.direct_messages, finalResult.pet_spaces);

                     
                   this.$root.ChatList = fullList;

                     this.$root.sortChatList();

                        }
                      
                         


                           let spaceId = response.data.space.space_id;

               this.$root.chatComponent.chatInnerSideBar= false;
               this.$root.chatComponent.chatIsOpen = false;
                this.$root.chatComponent.innerSideBarContent = '';

                

            this.$router.push({ path: '/channels/' + spaceId +'/content' });
              
              this.$root.chatComponent.fetchMessages(spaceId);
              this.$root.chatComponent.messageIsDone = false;
           this.$root.chatComponent.chatIsOpen = true;

       

                 }

                   } )

               
            }

          })
          .catch(error => {
             

               this.loadingChat = false;

              this.showAlert('Oops!','Something went wrong,please try again','error');


          })


        

      },
      showDiaryNotes:function(){

       this.$router.push({ path: '/channels/'+ this.$root.selectedSpace.space_id + '/diary_notes' });

      },
       showSideBar: function(type){


            
             if( this.$root.selectedSpace.type == 'Channel' || this.$root.selectedSpace.type == 'Team'  || this.$root.selectedSpace.type == 'SubSpace'){
                 this.$root.componentIsLoading = true;

                this.$router.push({ path: '/channels/'+ this.$root.selectedSpace.space_id + '/' + type });
              
              

             }

             if(this.$root.selectedSpace.type == 'Direct'){

               this.goToProfile(this.$root.selectedSpace.userInfo.username)

             }

           
         
       },
       goToProfile:function(username){
        this.$root.selectedUsername = username;
         this.$router.push({ path:'/profile-view/' + username})
      },
       openLiveSession:function(){
           this.$root.componentIsLoading = true;
           this.$root.liveSessionIsOpen = true;
               this.$router.push({ path: '/channels/'+ this.$root.selectedSpace.space_id +'/live_session' });
            
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

          if(this.$root.comingFromDiaryBank){

          this.$router.push({ path: '/board/diary/bank' });

          this.$root.comingFromDiaryBank = false;

          return;

         }
          
             this.$router.push({ path: '/channels'});
          
           this.$root.chatComponent.chatIsOpen = false;
       },
        imageStyle:function(dimension,data,type){
      

      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5; cursor:pointer;";
         if(type == 'channel'){
              styleString += 'background-color:#ffffff; background-image:url(imgs/channel.png);';
         }else{
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
         }
         
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5; cursor:pointer;";
         let imgLink = data.image_name + '.' + data.image_extension;
          if(type == 'channel' || type== 'bot'){
              styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/space/thumbnails/'  + imgLink  +  ');';
         }else{
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/profile/thumbnails/'  + imgLink  +  ');';
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