<template>
    <div style="background:#F3FFFC; position:absolute; height:100%; width:100%; overflow-y:hidden;left:0; overflow-x:hidden; " >


       <virtual-list 
       style="position:absolute; width:100%; height:100%; overflow-y:auto; overflow-x:hidden; padding-top:60px !important;padding-bottom:150px !important;"
       :data-key="'message_id'"
       id="messageContainer"
       ref="messageContainerRef"
       class="col-12 py-2 px-2" 
      :data-sources="this.$root.Messages"
      :data-component="itemComponent"
      :keeps="60">   



        <div class="col-12 " id="messagebottomDiv">

        </div>
     
     </virtual-list>  
  

         <div  style="position:absolute;z-index:20; bottom:0;z-index:6575;" class="col-12 py-0 my-0 px-0">
                <div class="px-2" v-if="this.$root.showRootReply">

                  <div class=" py-2 px-2  text-left mb-1"  style="background:#3E8893; border:1px solid transparent; border-radius:8px;" >

                     <div class="col-12 py-1 px-1  text-right" v-if="this.$root.replyMessage.type == null">
                  <span class="msgTextReply text-left d-block" style="color:white;" v-html="shortenContent(this.$root.replyMessage.content ,50)" ></span>
                 
              </div>
              
                 <div class="row py-0 my-0" v-if="this.$root.replyMessage.type == 'image'">
                     <div class="col-3 py-0 my-0">
                   <v-img width="50" :src="'/imgs/space/' + this.$root.replyMessage.image[0].image_name  + '.' + this.$root.replyMessage.image[0].image_extension" class="d-inline-block "> 

                 </v-img>
                     </div>
                     <div class="col-6 py-1 my-0 text-center px-0">
                 <span class="msgTextReply" style="color:white;">{{this.$root.replyMessage.image.length}} Images</span>
                     </div>
                     <div class="col-3 py-0 my-0 text-center px-0">
                 
                     </div>
                  </div>


                   <div class="row py-0 my-0" v-if="this.$root.replyMessage.type == 'video'">
                     <div class="col-3 py-0 my-0 text-center">
                    <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3E8893">mdi-video mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-9 py-0 my-0 text-left px-0">
                 <span class="msgTextReply" style="color:white;">{{ shortenContent(this.$root.replyMessage.video.display_name ,30)}}</span>
                     </div>
                     
                  </div>

                  <div class="row py-0 my-0" v-if="this.$root.replyMessage.type == 'audio'">
                     <div class="col-3 py-0 my-0 text-center">
                    <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3E8893">mdi-music mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-9 py-0 my-0 text-left px-0">
                 <span class="msgTextReply" style="color:white;">{{ shortenContent(this.$root.replyMessage.audio.display_name ,30)}}</span>
                     </div>
                     
                  </div>

                  <div class="row py-0 my-0"  v-if="this.$root.replyMessage.type == 'file'"> 
                     <div class="col-3 py-0 my-0 text-center">
                    <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3E8893">mdi-file mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-9 py-0 my-0 text-left px-0">
                 <span class="msgTextReply" style="color:white;">{{ shortenContent(this.$root.replyMessage.file.display_name ,30)}}</span>
                     </div>
                     
                  </div>

                  <div class="row py-0 my-0" v-if="this.$root.replyMessage.type == 'code'">
                     <div class="col-3 py-0 my-0 text-center">
                    <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3E8893">mdi-file mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-9 py-0 my-0 text-left px-0">
                 <span class="msgTextReply" style="color:white;">{{ this.$root.replyMessage.code.name + '.' + languageExtensions(this.$root.replyMessage.code.language_type)}}</span>
                     </div>
                     
                  </div>
              <span class="text-right label d-block " style="color:white;">{{this.$root.replyMessage.username}}</span>
              </div>
                  <div style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon @click="closeReply"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>
                </div>

           
            <v-card tile elevation-1  color="#ffffff" class="px-3">
          <channel-bottom ref="channelBottom"></channel-bottom>
        </v-card>
         </div>
         
         

       
       <span style="position:absolute; top:79%; left:2%; z-index:999998757;"  class="d-md-none d-inline-block">
          <span
               
                v-if="!this.$root.showRootReply"
                 @click="scrollToBottom"
                class="d-block"
                style="background:#35747e; padding:3px; border:1px solid transparent; border-radius:50%; color:white;"
              >
                <v-icon color="#ffffff"> mdi-chevron-double-down</v-icon>
              </span>
     </span>

      <span style="position:absolute; top:85%; left:2%;  z-index:999998757;" class="d-none d-md-inline-block">
          <span
              
               @click="scrollToBottom"
                class="d-block"
                 v-if="!this.$root.showRootReply"
                 style="background:#35747e; padding:3px; border:1px solid transparent; border-radius:50%; color:white;"
              >
                <v-icon color="#ffffff">mdi-chevron-double-down</v-icon>
              </span>
     </span>

      
       <span style="position:absolute; top:79%; right:2%; z-index:999998757;"  class="d-md-none d-inline-block">
          <v-btn
                color="#35747e"
                small
                v-if="!this.$root.showRootReply"
                 @click="showCodeBox"
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-xml</v-icon>
              </v-btn>
     </span>

      <span style="position:absolute; top:85%; right:2%;  z-index:999998757;" class="d-none d-md-inline-block">
          <v-btn
                color="#35747e"
                small
               @click="showCodeBox"
                class="d-block"
                 v-if="!this.$root.showRootReply"
                fab
              >
                <v-icon color="#ffffff">mdi-xml</v-icon>
              </v-btn>
     </span>

    </div>
</template>
<script>

import ChannelMessages from './ChannelMessages'
  import VirtualList from 'vue-virtual-scroll-list'

export default {
    data(){
        return{
          file:'audio/audio.mp3',
          videoUrl:'videos/post_video_y800o6u10xxz50c.mp4',
          videoImage:'videos/videoshow.jpg',
          backgroundVideo:'#c5c5c5',
          playerId2:'playerId2',
          Filename:'Index.html',
          viewerType:'',
           itemComponent: ChannelMessages,
          playerId1:'playerId1',
          messageid:'',
          Codelanguage_type:'HTML',
          Messages:this.$root.Messages,
          Codecontent:'<p>Hello HTML</p>',
          typinguser:'',
          typing:false,
          channel:null,
          imageArray:[
            {
              image_name: 'imgproj',
              image_extension:'jpeg',
              background_color:'#c5c5c5'
            },
            {
              image_name: 'imgproj1',
              image_extension:'jpeg',
              background_color:'#c5c5c5'
            },
          ]
          
        }
    },
     components: {
   
  },
    mounted(){
       this.$root.showTabs=false;
       this.$root.showHeader = false;
       this.fetchMessages();
       this.$root.messageScroller = this.$refs.messageContainerRef;
       
       this.makeSpaceConnetion();
    },
    methods:{
       showCodeBox: function(){
             this.$root.showCodeBox = true;
        },
         closeReply:function(){
        this.$root.showRootReply = false;
        this.$root.replyMessage = [];
        this.$root.is_reply = false;
        },
        scrollToBottom: function(){
      this.$refs.messageContainerRef.scrollToBottom();
        },
      scrollToMessage: function(messageid){
           
             this.$root.Messages.map((message)=>{
                if(message.message_id == messageid){
                  message.tagged = true;
                }
             });

             setTimeout(()=>{
               
                this.$root.Messages.map((message)=>{
                if(message.message_id == messageid){
                  message.tagged = false;
                }
             });

             },2000)
             
          
               setTimeout(() => {
         
           this.$refs.messageContainerRef.scrollToIndex(messageid);
        },500)
        
      
   

      },
      makeSpaceConnetion: function(){
         if(this.$root.channel == null){
           
             this.$root.channel =   Echo.join('space.' + this.$route.params.spaceId)
      .here((users) => {
        
      this.$root.SpaceUsers = users;

    })
    .joining((user) => {
    this.$root.SpaceUsers.push(user);
    
    })
    .leaving((user) => {
       let newList = this.$root.SpaceUsers.filter((eachuser)=>{
           return eachuser.id != user.id
       });
    this.$root.SpaceUsers = newList;
     
    
    })
    .listen('.SpaceChannel',(e) => {
             
            if(e.actionType == 'new-message'){
 
                this.$root.Messages.push(e.data); 
                this.scrollToMessage('bottomDiv');

            }
                        
            })
            .listenForWhisper('typing', (e) => {
              
                
              this.$root.typinguser = e.user;
               this.$root.typing = e.typing;
                
              
              setTimeout(() => {
                 
                 this.$root.typing = false;
                 
                 }, 5000);
                 });

         }
   
      },
     
       goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
       
        
        fetchMessages: function(){
           
           if(this.$root.Messages.length == 0){
             
             axios.get('/fetch-space-messages-' + this.$route.params.spaceId )
      .then(response => {
      
      if (response.status == 200) {
        
       this.Messages = response.data[0];
       this.$root.Messages =response.data[0];

       

        
       this.$root.selectedSpace = response.data[1]

    setTimeout(()=>{
          let lastMessage  = this.$root.Messages.pop();
            if(lastMessage != undefined){
          this.$refs.messageContainerRef.scrollToIndex(lastMessage.message_id);
         this.$root.Messages.push(lastMessage);
            }
       
    },500);
       
       
     }
       
     
     })
     .catch(error => {
    
     }) 

           }else{



              this.$refs.messageContainerRef.scrollToBottom();
          

           }
           

        },
       
        
       
        checkOwner: function(message_user_id){
            if(this.$root.user_temp_id == message_user_id){
              return true;
            }else{
              return false;
            }

        },
        shortenContent: function(content,limit){
             
             if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                 return shortcontent + '...';
             }else{
               return content;
             }
        },
         checkDatereal: function(date){

            var realTimeHour = moment(date).add(1,'hours');

            var aWeekAgo = moment().subtract(7,'days');

            if (moment(realTimeHour) >= aWeekAgo) {
              return moment(realTimeHour).format("h:mm a");
            }else{
               return moment(realTimeHour).format("h:mm a");
            }
      },
      covertDate: function(date){
           var realTimeHour = moment(date).format('l');

          
               
            if(moment().format('l') == realTimeHour){
                 return 'Today';
            }
             if(moment().subtract(1,'days').format('l') == realTimeHour){
                 return 'Yesterday';
            }
           
               return moment(realTimeHour).format("MMMM Do");
      },
       languageExtensions: function(language){
        if(language == 'HTML'){
           return 'html';
         }
         if(language == 'CSS'){
            return 'css';
         }
          if(language == 'PYTHON'){
           return 'py';
         }
          if(language == 'PHP'){
           return 'php';
         }
          if(language == 'JAVASCRIPT'){
           return 'js';
         }
          if(language == 'VUEJS'){
           return 'vue';
         }
          if(language == 'SQL'){
           return 'sql';
         }
          if(language == 'C'){
           return 'c';
         }
          if(language == 'C++'){
           return 'cpp';
         }
          if(language == 'JAVA'){
           return 'java';
         }
          if(language == 'C#'){
           return 'cs';
         }
          if(language == 'ERLANG'){
          return 'erl';
         }
          if(language == 'COFFEESCRIPT'){
           return 'coffee';
         }
          if(language == 'LIVESCRIPT'){
           return 'ls';
         }
         if(language == 'DJANGO'){
           return 'py';
         }
          if(language == 'KOTLIN'){
           return 'kt';
         }
          if(language == 'FOTRAN'){
           return 'for';
         }
          if(language == 'MARKDOWN'){
          return 'md';
         }
          if(language == 'PERL'){
          return 'pl';
         }
          if(language == 'R'){
           return 'r';
         }
          if(language == 'RUBY'){
           return 'rb';
         }
      }
  
  },

}
</script>
<style>
.msgText{
  font-size: 12px;
  color: #4d4d4d;
}
.label{
  color: #737373;
  font-size: 10px;
}
.tagged{
  background:white;
  border:2px solid transparent;
  border-radius: 8px;
}
.taggedOthers{
  background:#ACF8E9;
  border:2px solid transparent;
  border-radius: 8px;
}
.msgTextReply{
  font-size: 11px;
  color: #4d4d4d;
}
.imgLabel{
  font-size: 11px;
  color: #4d4d4d;
}
.DateBadge{
  background-color: #3E8893;
  border:1px solid transparent;
  border-radius:10px;
}
</style>