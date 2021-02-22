<template>
   
   <!-- chat list view -->
       <div  
       
        class="col-12 px-1 d-flex flex-row py-0 messageBox"
         :style="spaceSelected(source) ? 'align-items:center; justify-content:center; background:whitesmoke;' : 'align-items:center; justify-content:center;'" 
         @click="openChat(source.space_id)" >
           
                   <div  class=" mr-2 py-3" v-if="source.type == 'Channel' || source.type == 'Team'"
                     :style="imageStyle(40,source,'channel')"></div> 
                      <div  class=" mr-2 py-3" v-if="source.type == 'Bot' && source.bot_data != null"
                     :style="imageStyle(40,source.bot_data,'bot')"></div> 
                      <div  class=" mr-2 py-3" v-if="source.type == 'Direct' && source.userInfo != null"
                     :style="imageStyle(40,source.userInfo,'direct')"></div> 
                   
                     <div class="px-0 py-3" style="width:85%;border-bottom:1px solid #e6e6e6;" >
                                 <div class="pr-1 d-flex flex-row" style="align-items:center;">
                                   
                                       <div class="px-0 py-0 my-0 " style="white-space: nowrap; overflow:hidden; text-overflow: ellipsis; ">
                                               <span v-if="source.type == 'Team' || source.type == 'Channel'" style="font-size:14px; font-family:BodyFont;">{{ source.name }}</span>
                                             <span v-if="source.type == 'Bot' && source.bot_data != null" style="font-size:14px; font-family:BodyFont;">{{ source.bot_data.name }}</span>
                                             <span v-if="source.type == 'Direct'" style="font-size:14px; font-family:BodyFont;">{{ source.userInfo.username }}</span>
                                       </div>
                                        <div class="px-1 py-0 my-0 text-right ml-auto" style="width:26%;">
                                             <span  v-if="source.last_message" style="font-size:11px; font-family:BodyFont;color:gray; margin-right:0px;" >
                                               <span v-if="source.last_message[0]">
                                                  {{checkDatereal(source.last_message[0].created_at)}}
                                                 </span>
                                               </span> 
                                           
                                       </div>
                                   
                                 </div>

                                <div class=" d-flex flex-row" style="align-items:center;">
                                   
                                       <div class=" px-0 py-0 my-0 pr-1  " style="width:100%;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;font-size:13px; color:grey; font-family:BodyFont;">
                                            
                                             <span v-if="source.last_message.length != 0 && source.last_message[0]">
                                                 <template v-if="source.last_message[0].deleted">
                                                <span ><i>This message was deleted</i></span>
                                                  </template>
                                                <template v-else>

                                                     <span v-if="that.$root.username != source.last_message[0].username && source.type != 'Direct' && source.type != 'Bot' ">{{ source.last_message[0].username }}:</span > {{ generateMessageString(source.last_message) }}
                                             
                                                   
                                                </template>
                                             </span>
                                             <span v-else><i>Send a message to start chat</i></span>
                                             
                                       </div>
                                        <div class=" px-1 py-0 my-0 text-right " v-if="source.type != 'Bot'">
                                              <span v-if="source.unread > 0" class="messagesBadges d-flex ml-lg-0 ml-md-5 ml-0" >{{source.unread}}</span>
                                       </div>
                                    
                                 </div>          
                     </div> 



       </div>

       <!-- ends -->


       
    
</template>
<script>


const { htmlToText } = require('html-to-text');

export default {
   props:['source'],
   
    data () {
      return {
       that: this,
       popup:true
      }
    },
   mounted(){
        this.$root.chatListComponent = this;
   },
    methods:{
      
       openChat:function(space_id){

           // handle random qoutes

          function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
      }

        this.$root.chatComponent.selectedQuoteId =  getRandomInt(0,9); 

      // ends


          if(this.$root.selectedSpace.general_spaceId != space_id ){

             if(this.$root.TrackLastSubSpace.length != 0 && space_id == this.$root.TrackLastSubSpace[0]){

                     this.$router.push({ path: '/channels/' + this.$root.TrackLastSubSpace[1]  +'/content' });
              
              this.$root.chatComponent.fetchMessages(this.$root.TrackLastSubSpace[1] );
              this.$root.chatComponent.messageIsDone = false;
           this.$root.chatComponent.chatIsOpen = true;

         

                     return;

             }else{

               

                this.$router.push({ path: '/channels/' + space_id +'/content' });
              
              this.$root.chatComponent.fetchMessages(space_id);
              this.$root.chatComponent.messageIsDone = false;
           this.$root.chatComponent.chatIsOpen = true;
           

             }

          }

          
               
                 
           

       },
       
     
       generateMessageString: function(Lastmessage){

          let finalString = '';

          let message = Lastmessage[0];

          if(message.type == null || message.type == 'action' || message.type == 'text'){

          finalString =  htmlToText(message.content, {
             wordwrap: 100
            });

          }

           if(message.type == 'image'){

          finalString = 'sent an image'

          }

        if(message.type == 'join'){

          finalString = 'joined'

          }

          if(message.type == 'code'){

          finalString = 'shared a code'

          }

          if(message.type == 'video'){

          finalString = 'sent a video'

          }

          if(message.type == 'audio'){

          finalString = 'sent an audio'

          }

           if(message.type == 'project'){

          finalString = 'shared a project'

          }

           if(message.type == 'file'){

          finalString = 'shared a file'

          }

           

          return finalString;

       },
       spaceSelected: function(space){

          if(space.type == 'Channel' || space.type == 'Team'){

             if(space.space_id == this.$root.selectedSpace.general_spaceId){

                return true

             }

             return false;

          }else{
              
               if(space.space_id == this.$root.selectedSpace.space_id){

                return true;

             }
             return false;
             
          }

       },
         checkDatereal: function(date){

            var realTimeHour = moment(date).add(1,'hours');

            var aWeekAgo = moment().subtract(7,'days');

            var anHourAgo = moment().subtract(1,'hours');

            if (moment(realTimeHour) >= aWeekAgo) {

               if(moment(realTimeHour) >= anHourAgo){

                 return moment(realTimeHour).format("h:mm a");
                  
               } 

              return moment(realTimeHour).format("h:mm a");
             
            }else{
                return moment(realTimeHour).calendar();
            }
      },
        imageStyle:function(dimension,data,type){
      

      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;";
         if(type == 'channel'){
              styleString += 'background-color:#ffffff; background-image:url(imgs/channel.png);';
         }else{
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
         }
         
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;";
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
.messagesBadges{
    
    color: #ffffff;
    background: #3C87CD;
    font-size: 11px;
    font-family: BodyFont;
    font-weight: bolder;
    align-items: center;
    justify-content: center;
    height:20px;
    width:20px;
    border-radius:50%;
}
.messageBox:hover{
    background:whitesmoke;
    cursor: pointer;
}
</style>