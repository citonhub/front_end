<template>
 <div>
<div style="position:absolute; height:100%; width:100%; overflow-y:hidden;left:0;top:0%;" v-if="showCode"> 


        <div class="col-12 py-1 my-0 fixed-top" style="position:sticky; background:white;">
      
         
         <div class="col-12 py-0 my-0 px-0" >
             <div class="row py-0 my-0">
                  <div class="col-2 py-0 my-0 px-2 d-flex" style="text-align:center; justify-content:center;">
                     <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-close mdi-18px</v-icon></v-btn>
                  </div>
                  <div class="col-7 py-0 my-0 px-1">
                     <select  style="font-size:13px !important; " placeholder="select language"  @change="detectchange(language)"   v-model="language" class="browser-default custom-select">
                 <option v-for="(option,index)  in items" :value="option.name" :key="index">{{ option.name}}</option>
                     </select>
                   </div>
                    <div class="col-1 py-0 my-0 px-2 text-right">
                    <v-btn icon color="#4495a2" @click="copyText" v-if="!this.$root.codeIsLive"><v-icon>mdi-content-copy mdi-18px</v-icon></v-btn>

                    
                    <v-btn icon color="#4495a2" @click="showAdminUsers()" v-else><v-icon>mdi-account-cog mdi-18px</v-icon></v-btn>
                   </div>
                   <div class="col-2 py-0 my-0 px-2 text-right">
                    <v-btn icon color="#4495a2" @click="sendMessage"><v-icon>mdi-send mdi-18px</v-icon></v-btn>
                   </div>
             </div>
               
               

         </div>
        
      </div>

       <div class="col-12 py-0 my-0" style="position:absolute; height:95.5%;width:100%; overflow-y:hidden; overflow-x:hidden;">
         <div class="row my-0 py-0 px-0 ">
             
              <div class="codebox">
              
         <codemirror
        v-model="code"
        :options="cmOption"
        style="height:100%;"
        @cursorActivity="onCmCursorActivity"
        @ready="onCmReady"
        @focus="onCmFocus"
        @blur="onCmBlur"
        @input="onCmCodeChange"
        />
              </div>
          <input type="hidden" id="codeBoxContent" :value="code">
         </div>
       </div>

         <span style="position:absolute; top:85%; right:5%;z-index:1000;"  v-if="!this.$root.codeIsLive">
           <v-btn
                color="#35747e"
                small
                  @click="goBack"
                class="d-inline-block "
                fab
              >
                <v-icon color="#ffffff">mdi-close mdi-18px</v-icon>
            </v-btn>
         
     </span>

      <span style="position:absolute; top:85%; right:5%;z-index:1000;"  v-else>
           <v-btn
                color="#35747e"
                small
                @click="muteAudio"
                v-if="!this.$root.localAudioMuted"
                class="d-inline-block sliderfullBtn"
                fab
              >
                <v-icon color="#ffffff">mdi-microphone mdi-18px</v-icon>
            </v-btn>

             <v-btn
               
                small
                @click="unmuteAudio"
                v-else
                class="d-inline-block "
                fab
              >
                <v-icon >mdi-microphone mdi-18px</v-icon>
            </v-btn>
         
     </span>

     <span style="position:absolute; top:85%; left:5%;z-index:1000;" >
           <v-btn
                color="#35747e"
                small
                 @click="runCode"
                class="d-inline-block "
                fab
                v-if="this.selectedLangId != null"
              >
                <v-icon color="#ffffff">mdi-play</v-icon>
            </v-btn>
         
     </span>
          

    
    </div>

      <div style="position:absolute; height:100%; width:100%; overflow-y:hidden;left:0;top:0%;background:white;"  v-else>
         <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-3 py-0 my-0 text-left px-1" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-close</v-icon></v-btn>
         </div>
         <div class="col-6 py-0 my-0 d-flex px-0"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
             <span   style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">Page Loader</span>
         </div>
         <div class="col-3 py-0 my-0  text-right"  style="border-bottom:2px solid #4495a2; " >
            
         </div>
      </div>
     </div> 
          <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
   :srcdoc="ResultCode" 
    style="border: 0; height:91%; position:absolute; width:100%; left:0; top:6%;" v-if="selectedLangId == 0"></iframe>

    <textarea v-else v-model="ResultCode"  style="border: 0; height:91%; position:absolute; width:100%; left:0; top:6%; font-size:13px;" class="px-2 py-2">
       
    </textarea>


   
      <span style="position:absolute; top:85%; right:5%;z-index:1000;">
           <v-btn
                color="#35747e"
                small
                 @click="returnToCode"
                class="d-inline-block "
                fab
              >
                <v-icon color="#ffffff">mdi-xml</v-icon>
            </v-btn>
         
     </span>

        </div>

          <div    v-if="showAdminOptions" @click="showAdminOptions = false" style="position:fixed;  height:100%; background:rgba(38, 82, 89,0.5); overflow-y:hidden; overflow-x:hidden; left:0%; top:0%; align-items:center; justify-content:center; z-index:99999;" class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-2 my-0 px-0 d-flex ">
           <div  @click.stop="showAdminOptions = true" style="position:absolute; height:auto; width:90%; top:30%; left:5%; overflow-y:hidden; overflow-x:hidden; " class="mx-auto pb-2">

             <v-card style="border-radius:10px;"
       height="auto"
      
       class="py-2 px-1" >

             <div class="text-center">
               <h6>Admin</h6>
             </div>
           
             <v-card tile flat  @click.stop="makeUserMaster(admin)" :color="admin.master_user ? '#b7dbe1': '#ffffff'" class="text-center py-2" style="border-bottom:1px solid #c5c5c5;border-radius:0px;" v-for="(admin, index) in adminMembers" 
             :key="index">
        <span style="font-size:13px;" v-if="!checkIfUser(admin.user_id)">{{admin.username}}</span>
         <span style="font-size:13px;" v-else>You</span>
            </v-card>
            
           

             </v-card>

           </div>
         </div>
 </div>
    
</template>
<script>

import dedent from 'dedent'
  import { codemirror } from 'vue-codemirror'

  // base style
  import 'codemirror/lib/codemirror.css'

  // theme css
  import 'codemirror/theme/base16-dark.css'

  // language
  import 'codemirror/mode/python/python.js'
  import 'codemirror/mode/clike/clike.js'
  import 'codemirror/mode/cobol/cobol.js'
  import 'codemirror/mode/css/css.js'
  import 'codemirror/mode/erlang/erlang.js'
  import 'codemirror/mode/fortran/fortran.js'
  import 'codemirror/mode/go/go.js'
  import 'codemirror/mode/javascript/javascript.js'
  import 'codemirror/mode/lua/lua.js'
  import 'codemirror/mode/pascal/pascal.js'
  import 'codemirror/mode/perl/perl.js'
  import 'codemirror/mode/php/php.js'
  import 'codemirror/mode/r/r.js'
  import 'codemirror/mode/ruby/ruby.js'
  import 'codemirror/mode/rust/rust.js'
  import 'codemirror/mode/sql/sql.js'
  import 'codemirror/mode/haskell/haskell.js'


  


  // active-line.js
  import 'codemirror/addon/selection/active-line.js'

  // styleSelectedText
  import 'codemirror/addon/selection/mark-selection.js'
  import 'codemirror/addon/search/searchcursor.js'

  // highlightSelectionMatches
  import 'codemirror/addon/scroll/annotatescrollbar.js'
  import 'codemirror/addon/search/matchesonscrollbar.js'
  import 'codemirror/addon/search/searchcursor.js'
  import 'codemirror/addon/search/match-highlighter.js'

  // keyMap

  import 'codemirror/addon/edit/matchbrackets.js'
  import 'codemirror/addon/search/searchcursor.js'
  import 'codemirror/addon/search/search.js'
  import 'codemirror/keymap/sublime.js'

  // foldGutter
  import 'codemirror/addon/fold/foldgutter.css'
  import 'codemirror/addon/fold/brace-fold.js'
  import 'codemirror/addon/fold/foldcode.js'
  import 'codemirror/addon/fold/foldgutter.js'
  import 'codemirror/addon/fold/indent-fold.js'





export default {
      mounted(){
       
        this.detectchange(this.language);
        this.$root.codeBoxOpened = true;
        this.setCodeContent();
        this.updateCodeMaster();
       
      },
     components: {
      codemirror,
      
    },
     computed: {
    codemirror() {
      return this.$refs.cmEditor.codemirror
    }
   },
    data(){
        return{
             cmOption: {
          tabSize: 4,
          foldGutter: true,
          filepath:'',
          NewMsg:'',
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          autocorrect: true,
          keyMap: "sublime",
          readOnly:'',
          mode: 'text/html',
          theme: 'base16-dark',
          extraKeys: {
             "F11": function(cm) {
          cm.setOption("fullScreen", !cm.getOption("fullScreen"));
        },
        "Esc": function(cm) {
          if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
        }
          },
          
        },
         selectedLangId:0,
        items: [
          {
            "id": 0,
            "name": 'HTML' 
          },
          {
            "id": null,
            "name": 'CSS' 
          },
          {
            "id": 26,
            "name": 'JAVASCRIPT(Node)' 
          },
          {
            "id": 35,
            "name": 'PHP' 
          },
          {
            "id": 39,
            "name": 'PYTHON(3.8.1)' 
          },
          {
            "id": 38,
            "name": 'PYTHON(2.7.17)' 
          },
          {
            "id": 44,
            "name": 'SQL' 
          },
          {
            "id": 4,
            "name": 'C' 
          },
          {
            "id": 11,
            "name": 'C++' 
          },
          {
            "id": 25,
            "name": 'JAVA' 
          },
          {
            "id": 13,
            "name": 'C#' 
          },
          {
            "id": 18,
            "name": 'ERLANG' 
          },
          {
            "id": 14,
            "name": 'COBOL' 
          },
          {
            "id": 27,
            "name": 'KOTLIN' 
          },
          {
            "id": 21,
            "name": 'FOTRAN' 
          },
          {
            "id": 34,
            "name": 'PERL' 
          },
          {
            "id": 40,
            "name": 'R' 
          },
          {
            "id": 41,
            "name": 'RUBY' 
          },
          {
            "id": 22,
            "name": 'GO' 
          },
          {
            "id": 24,
            "name": 'HASKELL' 
          },
          {
            "id": 28,
            "name": 'LUA' 
          },
          {
            "id": 33,
            "name": 'PASCAL' 
          },
          {
            "id": 42,
            "name": 'RUST' 
          },
          {
            "id": 43,
            "name": 'SCALA' 
          },
          {
            "id": 45,
            "name": 'SWIFT' 
          },
          {
            "id": 46,
            "name": 'TYPESCRIPT' 
          }
        ],
        language: this.$root.fullCodeLanguage,
         code: this.$root.FullcodeContent,
         showCode:true,
         ResultCode:'',
         showAdminOptions:false,
         adminMembers:[],
         
    }
   
},
methods:{
  muteAudio:function(){

         
         

           this.$root.localAudioMuted = true;

           var localStream = this.$root.audioconnection.attachStreams[0];
            localStream.mute('audio');


      },
      unmuteAudio: function(){

        

           this.$root.localAudioMuted = false;

             var localStream = this.$root.audioconnection.attachStreams[0];
            localStream.unmute('audio');

      },
     onCmCursorActivity(codemirror) {
        console.debug('onCmCursorActivity', codemirror)
      },
      makeUserMaster: function(member){

         if(!this.checkIfisOwner()){
            return;
         }

        axios.post('/make-user-master',{
           memberId: member.memberId,
           space_id: this.$route.params.spaceId
         })
      .then(response => {
      
      if (response.status == 200) {

          this.adminMembers.forEach((member)=>{
            
             member.master_user = false;

          });
        
         this.adminMembers.map((member)=>{
           if(member.memberId == response.data){

             member.master_user = true;

           }
         })

          this.$root.selectedSpaceMembers.forEach((member)=>{
            
             member.master_user = false;

          });

          this.$root.selectedSpaceMembers.map((member)=>{
           if(member.memberId == response.data){

             member.master_user = true;

           }
         })

         
        this.setCodeContent();

        this.liveChanges(response.data,'new_master');
      }
       
     
     })
     .catch(error => {

       
    
     }) 

      },
      setNewUser: function(memberId){
       
       this.adminMembers.forEach((member)=>{
            
             member.master_user = false;

          });
        
         this.adminMembers.map((member)=>{
           if(member.memberId == memberId){

             member.master_user = true;

           }
         })

          this.$root.selectedSpaceMembers.forEach((member)=>{
            
             member.master_user = false;

          });

          this.$root.selectedSpaceMembers.map((member)=>{
           if(member.memberId == memberId){

             member.master_user = true;

           }
         })

         
        this.setCodeContent();

        this.$root.newMasterId = null;

      },
      updateCodeMaster: function(){
         
         let interval = null;

          interval = setInterval(()=>{

             
             if(this.$root.codeIsLive == false){
            
            clearInterval(interval);

          }

          if(this.$root.newMasterId != null){

              this.setNewUser(this.$root.newMasterId);

               

          }

          },1000)
      },
      showAdminUsers:function(){
         
         this.showAdminOptions = true;
         this.adminMembers = this.$root.selectedSpaceMembers.filter((member)=>{
           return member.is_admin == true;
         });
         

      },
      checkIfMaster: function(){
     
      let userMemberData = this.$root.selectedSpaceMembers.filter((members)=>{
   
             return members.user_id == this.$root.user_temp_id;
           });

           if(userMemberData.length != 0){

             return userMemberData[0].master_user;

           }else{
              return false
           }


      },
      checkIfUser:function(userId){
            if(userId == this.$root.user_temp_id){
                return true;
            }else{
              return false;
            }
            
         },
      setCodeContent:function(){


    let userState = this.checkIfMaster();
       

         let _this = this;
        let  interval = setInterval(setCode,200);
        function setCode(){

           _this.code = _this.$root.FullcodeContent;
           _this.language = _this.$root.fullCodeLanguage;
           _this.detectchange(_this.$root.fullCodeLanguage);
           

           if(_this.$root.liveShowCode){
               _this.showCode = true;
           }else{

           _this.showCode = false;
           _this.ResultCode = _this.$root.CodeResult;
           
           }
              
          if(_this.$root.codeIsLive == false){
            
            clearInterval(interval);

          }

          if(_this.$root.selfStopTrigger){

         clearInterval(interval);
          }
         
        }
    

        

          if(this.$root.codeIsLive && !userState){

             
             this.cmOption.readOnly = 'nocursor';

             this.$root.selfStopTrigger = false;
          

    

         }else{


           this.$root.selfStopTrigger = true;
            
        
           this.cmOption.readOnly = undefined;

         }
          
        
      
      },
      checkIfisOwner: function(){

           let userMemberData = this.$root.selectedSpaceMembers.filter((members)=>{
   
             return members.user_id == this.$root.user_temp_id;
           });

           if(userMemberData.length != 0){

             return userMemberData[0].is_admin;

           }else{
              return false
           }
         
       },
       returnToCode:function(){

          this.showCode = true;

           let userState = this.checkIfisOwner();

           if(this.$root.codeIsLive && userState){

              
              this.liveChanges(true,'returnToCode');
            

          }


       },
      copyText () {
          let spacelink = document.querySelector('#codeBoxContent')
          spacelink.setAttribute('type', 'text')  
          spacelink.select()

          try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
              if(msg == 'successful'){

                this.showAlert(5000,'Copied!')
                
              }else{

                 this.showAlert(5000,'Oops! unable to copy')
                
              }
          } catch (err) {
           
          }

          /* unselect the range */
          spacelink.setAttribute('type', 'hidden')
          window.getSelection().removeAllRanges()
        },

        showAlert:function(duration,text){
        this.$root.AlertRoot = true;
        this.$root.AlertMsgRoot = text;
        let _this = this;
     
     setTimeout(function(){
        _this.$root.AlertRoot = false;
     },duration);

    },

       goBack() {
          
       this.$root.showCodeBox = false;
        this.$root.showChatBottom = true;
        this.$root.codeBoxOpened = false;

        this.$root.codeIsLive = false;

        },
        makeUUID:function(){
     var id = "id" + Math.random().toString(16).slice(2);
     return id;
 },
    makeMessage:function(msgType,data){
    let NewMessage = {
      content:null,
      created_at: moment().subtract(1,'hours'),
       is_reply:"false",
       message_id: this.makeUUID(),
       replied_message:[],
       replied_message_id:null,
       showReply:false,
       showDate:null,
       loading:true,
       progressValue:0,
       space_id:this.$route.params.spaceId,
        tagged:false,
        type:msgType,    
        user_id:this.$root.user_temp_id,
        username:this.$root.username,
        video:{},
        audio:{},
        code:{},
        image:{},
        file:{}

    };
   
   if (msgType == 'image') {
      NewMessage.image = data;
   }

    if (msgType == 'video') {
      NewMessage.video = data;
   }

    if (msgType == 'audio') {
      NewMessage.audio = data;
   }

    if (msgType == 'code') {
      NewMessage.code = data;
   }

    if (msgType == 'file') {
      NewMessage.file = data;
   }

   return NewMessage;

 },
           sendMessage: function(){
              
               this.$root.showChatBottom = true;
             
              
              let Data = [];
              this.$root.NewMsg = this.makeMessage('code',Data);
              
             

               this.$root.returnedMessages.push(this.$root.NewMsg);
               this.$root.Messages.push(this.$root.NewMsg);

              this.$root.spaceFullData[0] = this.$root.returnedMessages;
         
           let fullData = [];
                    fullData.push(this.$root.spaceFullData[0]);
                fullData.push(this.$root.spaceFullData[1]);

                 let thirdData = [];
                    
                    thirdData.push(this.$root.spaceFullData[2][0])

                fullData.push(thirdData);

               


              this.$root.LocalStore(this.$route.params.spaceId  + this.$root.username,fullData);

                 this.$root.scrollerControlHandler();

              
               this.goBack();

                 this.$root.scrollToBottom();
                
                let postData = {
              content: '',
              space_id: this.$route.params.spaceId,
              is_reply: this.$root.is_reply,
              current_user: JSON.stringify(this.$root.SpaceUsers ),
              replied_message_id: this.$root.replyMessage.message_id,
               attachment_type: 'code',
                code: this.code,
              language_type: this.language,
              file_name:'index',
              temp_id:  this.$root.NewMsg.message_id
            };
            
         this.$root.updateSpaceTracker(this.$route.params.spaceId);
       this.$root.sendCodeMessage(postData);
         
      },
       
      onCmReady(codemirror) {

        console.debug('onCmReady', codemirror)
      },
      onCmFocus(codemirror) {
        console.debug('onCmFocus', codemirror)
      },
      onCmBlur(codemirror) {
        console.debug('onCmBlur', codemirror)
      },
      onCmCodeChange:function(codemirror){
       
       

            this.liveChanges(codemirror,'typing');

        

      },
       liveChanges:function(data,action) {

      
      let channel =  window.Echo.join('space.' + this.$route.params.spaceId);
   
       if(this.$root.codeIsLive){

         channel.whisper('liveCoding', {
          data:data,
            action: action,
            spaceId: this.$route.params.spaceId
        });


       }

         
     
          
        },
      runCode:function(){
        
       

           this.showCode = false;

            if(this.selectedLangId == 0 || this.language == 'HTML'){

              this.ResultCode = this.code; 
              this.sendCodeRunning();

            }else{

              this.ResultCode = 'sending to sandbox...';

              this.runCodeOnSandbox();
              this.sendCodeRunning();


            }

            


          

       
      },
      sendCodeRunning:function(){
   
        let userState = this.checkIfisOwner();

           if(this.$root.codeIsLive && userState){

              
              this.liveChanges(this.ResultCode,'codeRun');
            

          }
      },
      checkResponse:function(token){

         let _this = this;

        let interval = setInterval(check,1000);


        function check(){


           axios.post('/check-for-submission',{
               token: token
                  })
          .then(response => {
             
          
          if(response.status == 200){

            

            

              if(response.data[0].status.description == 'Accepted'){

                 

                  _this.ResultCode =  response.data[0].stdout;

                  
                 clearInterval(interval);


              }else if(response.data[0].status.description == 'In Queue'){

                 _this.ResultCode = 'In Queue...';

              }else if(response.data[0].status.description == 'Processing'){

                 _this.ResultCode = 'Processing...';

              }else{

                 _this.ResultCode =  response.data[0].stdout +  '\n Error: \n'  + response.data[0].stderr ;

                 clearInterval(interval);

              }


              if(_this.$root.codeBoxOpened == false){
                  clearInterval(interval);
              }

              

         _this.sendCodeRunning();
              

          }
            
          })
          .catch(error => {

           
             
               _this.ResultCode = 'An issue occured,unable to run on sandbox...';

                 _this.sendCodeRunning();
               clearInterval(interval);
              
          })

        }

        

      },
      runCodeOnSandbox: function(){

          axios.post('/run-code-on-sandbox',{
                langId: this.selectedLangId,
                code: this.code,
                messageId: this.$root.codeMessageId
                  })
          .then(response => {
             
          
          if(response.status == 200){

            

             let token = response.data[0].token;

        
              if(response.data[0].status.description == 'Accepted'){

                  this.ResultCode =  response.data[0].stdout ;

                
                

              }else if(response.data[0].status.description == 'In Queue'){

                 this.ResultCode = 'In Queue...';
                 this.checkResponse(token);

              }else if(response.data[0].status.description == 'Processing'){

                 this.ResultCode = 'Processing...';

                 this.checkResponse(token);

              }else{

                

                this.ResultCode =  response.data[0].stdout + '\n Error: \n' + response.data[0].stderr ;

              }

              this.sendCodeRunning();

           
             

                

              

             

          }
            
          })
          .catch(error => {

            
             
               this.ResultCode = 'An issue occured,unable to run on sandbox...';

                this.sendCodeRunning();
              
          })

          
      },
       detectchange:  function(languageFull){

         
         
          
          let language = '';
         if(typeof languageFull == 'object' ){
            language = languageFull.name
             this.selectedLangId =  languageFull.id
         }else{
           language = languageFull

           

            let languageArray = this.items.filter((item)=>{
      return   item.name == languageFull;
           });
       if(languageArray[0].length != 0){

          this.selectedLangId = languageArray[0].id;
       }
            
         }

          let userState = this.checkIfisOwner();

           if(this.$root.codeIsLive && userState){

              
              this.liveChanges(language,'codeChange');
            

          }



          

          this.$root.fullCodeLanguage = language;
          

  
         if(language == 'HTML'){
            this.cmOption.mode = 'text/html';
         }
         if(language == 'CSS'){
         this.cmOption.mode = 'text/css';
         }
          if(language == 'PYTHON(3.8.1)'){
           


           this.cmOption.mode = 'text/x-python';

           this.code = "print(\"hello, world\")";

         }
         if(language == 'PYTHON(2.7.17)'){
           this.cmOption.mode = 'text/x-python';

            this.code = "print(\"hello, world\")";
         }
          if(language == 'PHP'){
           this.cmOption.mode = 'text/x-php';

           this.code = "<?php \n " +
"print(\"hello, world\n\"); \n " +
"?>";
         }
          if(language == 'JAVASCRIPT(Node)'){
           this.cmOption.mode = 'text/javascript';

             this.code = "console.log(\"hello, world\");";
         }
          if(language == 'SQL'){
           this.cmOption.mode = 'text/x-sql';

             this.code =" SELECT \n " +
  "  Name, COUNT(*) AS num_albums \n " +
"FROM artists JOIN albums \n " +
"ON albums.ArtistID = artists.ArtistID \n " +
"GROUP BY Name \n " +
"ORDER BY num_albums DESC \n " +
"LIMIT 4; ";

         }
          if(language == 'C'){
           this.cmOption.mode = 'text/x-csrc';

            this.code ="#include <stdio.h> \n " +
"                                        \n " +
"int main(void) { \n " +
"    printf(\"hello, world\n\"); \n " +
"    return 0; \n " +
"}";
         }
          if(language == 'C++'){
           this.cmOption.mode = 'text/x-c++src';
            this.code = "#include <iostream>  \n " +
"                                           \n " +
"int main() {    \n " +
"    std::cout << \"hello, world\" << std::endl;  \n " +
"    return 0;  \n " +
"}";
         }
          if(language == 'JAVA'){
           this.cmOption.mode = 'text/x-java';
           this.code = "public class Main { \n " +
 "   public static void main(String[] args) { \n " +
"      System.out.println(\"hello, world\"); \n " +
 "   } \n " +
"}";
         }
          if(language == 'C#'){
           this.cmOption.mode = 'text/x-csharp';

           this.code = "public class Hello { \n " +
"    public static void Main() { \n " +
"       System.Console.WriteLine(\"hello, world\"); \n " +
"   } \n " +
"}";
         }
          if(language == 'ERLANG'){
           this.cmOption.mode = 'text/x-erlang';

           this.code = "main(_) -> \n " +
 "   io:fwrite(\"hello, world\n\").";
         }
          if(language == 'KOTLIN'){
           this.cmOption.mode = 'x-shader/x-fragment';
           this.code = "fun main() { \n " +
 "   println(\"hello, world\") \n " +
"}";
         }
          if(language == 'FOTRAN'){
           this.cmOption.mode = 'text/x-fortran';

           this.code = "program main \n " +
 "   print *, \"hello, world\" \n " +
"end";
         }
          if(language == 'PERL'){
           this.cmOption.mode = 'text/x-perl';

           this.code = "my $name = <STDIN>; \n " +
"print \"hello, $name\"";
         }
          if(language == 'R'){
           this.cmOption.mode = 'text/x-rsrc';

           this.code = "cat(\"hello, world\n\")";
         }
         if(language == 'GO'){
           this.cmOption.mode = 'text/x-go';

           this.code = "package main \n " +
"                           \n " +
"import \"fmt\" \n " +
"                        \n " +
"func main() { \n " +
 "   fmt.Println(\"hello, world\") \n " +
"}";
         }
         if(language == 'HASKELL'){
           this.cmOption.mode = 'text/x-haskell';

           this.code ="main = putStrLn \"hello, world\"";
         }
          if(language == 'RUBY'){
           this.cmOption.mode = 'text/x-ruby';

           this.code = "puts \"hello, world\"";
         }
         if(language == 'LUA'){
           
            this.cmOption.mode = 'text/x-lua';

             this.code = "print(\"hello, world\")";

         }
         if(language == 'PASCAL'){

            this.cmOption.mode = 'text/x-pascal';
            this.code = "program Hello; \n " +
"begin  \n " +
 "   writeln ('hello, world') \n " +
"end. \n ";

         }
         if(language == 'RUST'){

            this.cmOption.mode = 'text/x-rustsrc';

            this.code ="fn main() { \n " +
"    println!(\"hello, world\"); \n " +
"}";
         }
         if(language == 'SCALA'){
           
             this.cmOption.mode = 'text/x-scala';

            this.code ="object Main {  \n " +
 "   def main(args: Array[String]) = {  \n " +
 "      val name = scala.io.StdIn.readLine()  \n " +
  "     println(\"hello, \"+ name)  \n " +
 "   } \n " +
"}";

         }
         if(language == 'SWIFT'){

              this.cmOption.mode = 'text/x-swift';

            this.code = "import Foundation \n " +
"let name = readLine() \n " +
"print(\"hello, \(name!)\")";

         }
         if(language  == 'TYPESCRIPT'){
           

             this.cmOption.mode = 'text/javascript';

             this.code ="console.log(\"hello, world\");";

         }
         
      },
}
}
</script>
<style lang="scss" scoped>
.fileText{
    font-size:10px;
}

 .codebox,
    .pre {
      width: 100%;
      margin: 0;
     
       display: block;
      font-size: 12px;
      line-height: 1.6;
      word-break: break-all;
      word-wrap: break-word;
      overflow: auto;
    }

    .codebox{
       height: 100%;
       border: 1px solid #e6e6e6;
        position:absolute;
        width:100%;
       
        overflow-x: hidden;
        overflow-y:hidden;
    }
</style>