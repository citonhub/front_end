<template>
    <div style="background:#F3FFFC; position:absolute; height:100%; width:100%; overflow-y:hidden;left:0; overflow-x:hidden; " >

       <div v-if="this.$root.Messages != null">
      
     

     <div id="messageContainer" 
      v-if="this.$root.Messages.length != 0"
      v-on:scroll="handlePushMessage()"
       class="col-12 py-2 px-2" 
     
        style="position:absolute; width:100%; height:100%; overflow-y:auto;  overflow-x:hidden; padding-top:60px !important;padding-bottom:150px !important;">  

        <channel-messages :sources="this.$root.Messages"  :username="this.$root.username"></channel-messages>

        <div class="col-12 py-4" id="messagebottomDiv">
          </div>      
    </div> 


      <div v-show="this.$root.Messages.length == 0" class="col-12 my-2 py-0 px-0 mx-1 text-center"  style="position:absolute; width:100%; height:100%; overflow-y:auto; overflow-x:hidden; padding-top:60px !important;padding-bottom:150px !important;" >
       <span style="color:gray; font-size:12px; font-family:BodyText;"  class="d-block">No message found</span>
              
         </div>


       </div>
       

     <div class="col-12 py-0 my-0"  v-else style="position:absolute; width:100%; height:100%; overflow-y:auto; overflow-x:hidden; padding-top:60px !important;padding-bottom:150px !important;">

         <div class="row py-0 my-0 px-1">
            
     <div class="col-8 py-1 my-0">
       <v-skeleton-loader
      class=" "
     
      type="sentences"
    ></v-skeleton-loader>
     </div>
         </div>


        <div class="row py-0 my-0 px-1">
            
     <div class="col-8 offset-4 py-1 my-0">
       <v-skeleton-loader
      class=" "
       
      type="sentences"
    ></v-skeleton-loader>
     </div>
         </div>

          <div class="row py-0 my-0 px-1">
            
     <div class="col-8 py-1 my-0">
       <v-skeleton-loader
      class=" "
       
      type="sentences"
    ></v-skeleton-loader>
     </div>
         </div>

       

         
      </div>
      
    
     




  

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


                   <div class="row py-0 my-0" v-if="this.$root.replyMessage.type == 'project'">
                     <div class="col-3 py-0 my-0">
                <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3E8893">mdi-plus-network-outline mdi-18px</v-icon></span>
                
                     </div>
                     <div class="col-6 py-1 my-0 text-center px-0">
                 <span class="msgTextReply" style="color:white;">{{shortenContent(this.$root.replyMessage.project.title ,30)}}</span>
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
         
         
      
      <div v-if="this.$root.ShowButton">
       
        <span style="position:absolute; top:76%; left:2%; z-index:999998757;"  class="d-md-none d-inline-block" v-if="scrollPosition >= 1500">
          <span
               
                v-if="!this.$root.showRootReply"
                 @click="scrollToBottom"
                class="d-block"
                style="background:#35747e; padding:3px; border:1px solid transparent; border-radius:50%; color:white;"
              >
                <v-icon color="#ffffff"> mdi-chevron-double-down</v-icon>
              </span>
     </span>

      <span style="position:absolute; top:85%; left:2%;  z-index:999998757;" class="d-none d-md-inline-block" v-if="scrollPosition >= 1500">
          <span
              
               @click="scrollToBottom"
                class="d-block"
                 v-if="!this.$root.showRootReply"
                 style="background:#35747e; padding:3px; border:1px solid transparent; border-radius:50%; color:white;"
              >
                <v-icon color="#ffffff">mdi-chevron-double-down</v-icon>
              </span>
     </span>

      
       <span style="position:absolute; top:76%; right:2%; z-index:999998757;"  class="d-md-none d-inline-block">
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
       
      

    </div>
</template>
<script>




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
          messageInitialLimit:30,
          messagePerLoad:10,
          newMessagesLoading:false,
          playerId1:'playerId1',
          messageid:'',
          messageFinished:false,
          returnedMessages:[],
          Codelanguage_type:'HTML',
          Messages:this.$root.Messages,
          Codecontent:'<p>Hello HTML</p>',
          oldLoading:false,
          typinguser:'',
          scrollHeightContainer:[],
          scrollPosition:0,
          startPosition:0,
          messageStore: [],
          messageStoreTop:[],
          endPosition:0,
           containerScrollPosition:0,
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
        this.$root.checkIfUserIsLoggedIn('space');
        this.$root.initialPushMangerReg();
       
       this.fetchMessages();

       if(this.$root.projectData.length != 0){
              
              this.$root.localChannel = [];
             Echo.leave('panel.' + this.$root.projectData.project_slug);

          }
          
       

      
       
       this.makeSpaceConnetion();
       this.$root.forceListReload = false;
      
       
    },
    methods:{
       showAlert:function(duration,text){
        this.$root.AlertRoot = true;
        this.$root.AlertMsgRoot = text;
        let _this = this;
     
     setTimeout(function(){
        _this.$root.AlertRoot = false;
     },duration);

    },
       activateBot:function(){
         this.$root.selectedPage  = this.$root.userPageTrack.filter((page)=>{
            return page.page_name == 'space_content';
          });
         
          if(this.$root.selectedPage.length != 0){
               
              if(this.$root.selectedPage[0].status == 0){
                 this.$root.showBoard = true;
         this.$root.boardContent = 'Hello';
         this.$root.boardBtnLabel = 'Okay Got It';

              }
               
          }
        
         
      },
        trackUser: function(){
      

         axios.get('/fetch-profile-'+ this.$root.username)
   .then(response => {
   
   if (response.status == 200) {

        this.$root.userPageTrack = response.data[2];

        this.activateBot();
  }
    
  
  })
  .catch(error => {
 
  }) 

      
   },
      generateUnreadMessage: function(){
          if(this.$root.selectedSpace.unread != 0 && this.$root.selectedSpace.unread != undefined){
             let newUnreadMsg = {
             content: 'You have ' + this.$root.selectedSpace.unread + ' unread messages',
        created_at: moment().subtract(1,'hours'),
         message_id: this.makeUUID(),
        type:'unread', 
             };
          let msgCount = this.$root.Messages.length;

           let msgIndex = msgCount - this.$root.selectedSpace.unread;

            this.$root.Messages.splice(msgIndex,0,newUnreadMsg);
             this.$root.selectedSpace.unread = 0;
          }
      },
      makeUUID:function(){
     var id = "id" + Math.random().toString(16).slice(2);
     return id;
 },
       showCodeBox: function(){
             this.$root.showCodeBox = true;
        },
         closeReply:function(){
        this.$root.showRootReply = false;
        this.$root.replyMessage = [];
        this.$root.is_reply = false;
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
         
           var container = document.querySelector('#messageContainer');
           
        var element =  document.querySelector('#message' + messageid);
       
        var top = element.offsetTop - 120;
        container.scrollTo(0 , top);
        },500)
      
        

      },
      scrollToBottom:function(){

         this.$root.scrollerControlHandler();
        
         setTimeout(() => {
         
           var container = document.querySelector('#messageContainer');
           
        var element =  document.querySelector('#messagebottomDiv');
       
        var top = element.offsetTop - 120;
        container.scrollTo(0 , top);
        },500)
      

      },
       showAlert:function(duration,text){
        this.$root.AlertRoot = true;
        this.$root.AlertMsgRoot = text;
        let _this = this;
     
     setTimeout(function(){
        _this.$root.AlertRoot = false;
     },duration);

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

              
 
                this.$root.returnedMessages.push(e.data); 

                  this.scrollToBottom(); 
               

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

      handleResults(messageArray){

        
          


          this.$root.returnedMessages = messageArray;
          
          let MsgLenght = messageArray.length;

         
             let startCount = MsgLenght - this.$root.messageInitialLimit;

             if(startCount <= 0){
               startCount = 0;
             }

          
  
          let sliedMsg = this.$root.returnedMessages.slice(startCount,MsgLenght);

         
         this.$root.messageStoreTop = this.$root.returnedMessages.slice(0,startCount);

         var finalMessage = sliedMsg;

         
         
         return finalMessage;
          
      },

      handlePushMessage: function(){

       
           

        var container = document.querySelector('#messageContainer');

         let scrollPosition = container.scrollTop;

          let containerScrollHeigthFixed = container.scrollHeight;

         this.scrollPosition = containerScrollHeigthFixed - scrollPosition;

        
       
        
        if(scrollPosition <= 5 && this.$root.messageStoreTop.length != 0){

          
          if(scrollPosition == 0){
           container.scrollTop = 100;
         }
            

           
             
               this.newMessagesLoading = true;
         
          
          this.showAlert(5000,'loading messages...')

           let loadingArray = [];


           if(this.$root.messageStoreTop.length < this.messagePerLoad){
             
              loadingArray = new Array(this.$root.messageStoreTop.length);



           }else{
             
               loadingArray = new Array(this.messagePerLoad);

           }
            
          
             
             for (let index = 0; index < loadingArray.length; index++) {
               
                 let arrayPoppedLoader =  this.$root.messageStoreTop.pop();
                  
                  this.$root.Messages.unshift(arrayPoppedLoader);
             }
             

           
               if(this.$root.Messages[21] != undefined){
                      var elementId = this.$root.Messages[21].message_id;
                  
                    var element =  document.querySelector('#message' + elementId);
            
             if(this.$root.messageStoreTop.length < this.messagePerLoad){

             }else{

                 var top = element.offsetTop - 200;

             }
             
            

               let NumberToRemove = 0;

              if(this.$root.Messages.length < this.$root.messageInitialLimit){
                  NumberToRemove = 10; 
              }
              if(this.$root.Messages.length > this.$root.messageInitialLimit){
                 NumberToRemove = this.$root.Messages.length - this.$root.messageInitialLimit;
              }

            
             let NumberArray =  new Array(NumberToRemove);

             for (let index = 0; index < NumberArray.length; index++) {
               
                 let arrayPopped =  this.$root.Messages.pop();
                  
                  this.$root.messageStore.unshift(arrayPopped);
             }

             container.scrollTop = top;

            

          
          
         
                    
               }

 
        }

     let containerScrollHeigth = container.scrollHeight;
         
        
         
           
        if((scrollPosition > (containerScrollHeigth - 1000)) && this.$root.messageStore.length != 0 ){
         
         container.scrollTop = containerScrollHeigth - 1300;

           this.showAlert(10000,'loading messages...')

             let NumberArrayBottom = [];


           if( this.$root.messageStore.length < this.messagePerLoad){
             
              NumberArrayBottom = new Array( this.$root.messageStore.length);



           }else{
             
               NumberArrayBottom = new Array(this.messagePerLoad);

           }

             for (let index = 0; index < NumberArrayBottom.length; index++) {
               
                 let arrayPopped =  this.$root.messageStore.shift();
                  
                  this.$root.Messages.push(arrayPopped);
             }


              

             for (let index = 0; index < NumberArrayBottom.length; index++) {
               
                 let arrayPoppedTop =  this.$root.Messages.shift();
                  
                  this.$root.messageStoreTop.push(arrayPoppedTop);
             }
             
             

              
              }
        
        },

    fetchMessages: function(){

      
           
           if(this.$root.Messages  == null ){
             
             axios.get('/fetch-space-messages-' + this.$route.params.spaceId )
      .then(response => {
      
      if (response.status == 200) {


       let returnedData = this.handleResults(response.data[0]);
        
       this.Messages = returnedData;
       this.$root.Messages = returnedData;

       
       
       this.generateUnreadMessage();
        
       this.$root.selectedSpace = response.data[1]

       setTimeout(() => {
         
           var container = document.querySelector('#messageContainer');
           
        var element =  document.querySelector('#messagebottomDiv');
       
        var top = element.offsetTop - 120;
        container.scrollTo(0 , top);
        },500)

   
          
   
       
     }
       
     
     })
     .catch(error => {
    
     }) 

           }else{


             
          this.scrollToBottom(); 
       
         

              this.Messages = this.$root.Messages;

            
          

           }
           

        },
       
         showMoreHandler(message){
           if(message.showReply){
              message.showReply = false;
           }else{
              this.$root.Messages.map((message)=>{
                 message.showReply = false;
              });
               
             message.showReply = true;
           }
        },
      replyMsg: function(message){
          this.$root.replyMessage = message;
           this.$root.is_reply = true;
          this.$root.showRootReply = true;

           message.showReply = false;
         
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