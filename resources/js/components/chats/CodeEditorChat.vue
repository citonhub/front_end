<template>
 <div>
<div style="position:absolute; height:100%; width:100%; overflow-y:hidden;left:0;top:0%;" v-if="showCode">


        <div class="col-12 py-1 my-0 fixed-top px-0 px-md-2" style="position:sticky; background:white;">

         <!-- top bar, contains editor language selection, and editor user settings -->
         <div class="col-12 py-0 my-0 px-1 d-flex flew-row" >
            
                
                     <v-btn icon class="mr-1" @click="goBack"><v-icon>mdi-close mdi-18px</v-icon></v-btn>


                   
                 
                  <div style="width:100%;">
                     <select  style="font-size:14px !important; " placeholder="select language"  @change="detectchange(language)"   v-model="language" class="browser-default custom-select">
                 <option v-for="(option,index)  in items" :value="option.name" :key="index">{{ option.name}}</option>
                     </select>
                   </div>
                   
                  
                   
                   
                     <v-btn class="mx-1 ml-2 mt-2"  x-small color="#3C87CD "  @click="sendMessage" ><span style="color:#ffffff; font-weight:bolder; font-size:10px;">send</span></v-btn>
                 
          
                     <v-btn class="mx-1" icon @click="copyText" v-if="!that.$root.codeIsLive"><v-icon>las la-copy</v-icon></v-btn>


                    <v-btn icon class="mx-1"  @click="showActiveUsers()"  v-if="that.$root.codeIsLive">
                         <v-badge
               dot
                color="green">
                <v-icon>las la-user-friends </v-icon>
              </v-badge>
                     
                        </v-btn>




         </div>

         <!-- ends -->

      </div>


    <!-- Code editor (powered using the codemirrior component) -->
       <div class="col-12 py-0 my-0" style="position:absolute; height:95.5%;width:100%; overflow-y:hidden; overflow-x:hidden;">
         <div class="row my-0 py-0 px-0 ">

              <div class="codeboxnew1">

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
          <textarea type="hidden" id="codeBoxContent" :value="code"></textarea>
         </div>
       </div>

    <!-- ends -->



   

  <!-- Mute/Unmute microphone during life coding sessions -->

      <span style="position:absolute; top:85%; left:5%;z-index:1000;" v-if="that.$root.codeIsLive">
           <v-btn
                color="#3C87CD"
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

    <!-- ends -->


    <!-- fixed butoon to run code -->

     <span style="position:absolute; top:85%; right:5%;z-index:1000;"   class="d-inline-block d-md-none">
           <v-btn
                color="#3C87CD"
                small
                 @click="runCode"
              
                fab
                v-if="this.selectedLangId != null"
              >
                <v-icon color="#ffffff">mdi-play</v-icon>
            </v-btn>

          

     </span>

     <span style="position:absolute; top:86%; right:3%;z-index:1000;"  class="d-none d-md-inline-block"   >
          <v-btn
                color="#3C87CD"
                
                 @click="runCode"
               
                fab
                v-if="this.selectedLangId != null"
              >
                <v-icon color="#ffffff">mdi-play</v-icon>
            </v-btn>

     </span>

     

     <!-- ends -->



    </div>

  <!-- code/page viewer -->
      <div style="position:absolute; height:100%; width:100%; overflow-y:hidden;left:0;top:0%;background:white;"  v-else>

        <!-- page loader/viewer top bar -->
         <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;border-bottom:2px solid #3C87CD;" >
       <div class="row py-1 my-0 px-1" >
         <div class="col-3 py-0 my-0 text-left px-1">
            <v-btn icon color="#3C87CD" @click="goBack"><v-icon>mdi-close</v-icon></v-btn>
         </div>
         <div class="col-6 py-0 my-0 d-flex px-0"  style=" align-items:center; justify-content:center;" >
             <span   style="font-size:13px; color:#3C87CD; font-family:MediumFont;">Page Loader</span>
         </div>

         <div class="col-3 py-1 my-0 px-2 text-right"   >
                     <v-btn   x-small color="#3C87CD "  @click="sendMessage" ><span style="color:#ffffff; font-weight:bolder; font-size:10px;">send</span></v-btn>
          </div>
      </div>
     </div>

     <!-- ends -->

     <!-- page viewer for HTML codes -->
          <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
   :srcdoc="ResultCode"
    style="border: 0; height:91%; position:absolute; width:100%; left:0; top:6%;" v-if="selectedLangId == 0 || selectedLangId == 35"></iframe>

<!-- ends -->


    <!-- code viewer for non-web codes -->
    <textarea  readonly v-else v-model="ResultCode"  style="border: 0; background:black; color:white; height:95%; position:absolute; width:100%; left:0; top:6%; font-size:14px;" class="px-2 py-2">

    </textarea>

  <!-- ends -->


    <!-- fixed button to go bact to editor view -->
      <span style="position:absolute; top:85%; right:5%;z-index:1000;"  class="d-inline-block d-md-none"  >
           <v-btn
                color="#3C87CD"
                small
                 @click="returnToCode"
               
                fab
              >
                <v-icon color="#ffffff">mdi-xml</v-icon>
            </v-btn>

     </span>


      <span style="position:absolute; top:86%; right:3%;z-index:1000;"  class="d-none d-md-inline-block"  >
           <v-btn
                color="#3C87CD"
                
                 @click="returnToCode"
              
                fab
              >
                <v-icon color="#ffffff">mdi-xml</v-icon>
            </v-btn>

     </span>

     

    <!-- ends -->

        </div>
      <!-- ends -->


      <!-- switch editor admin user (modal) -->
          <div    v-if="showAdminOptions" @click="showAdminOptions = false" style="position:fixed;  height:100%; background:rgba(38, 82, 89,0.5); overflow-y:hidden; overflow-x:hidden; left:0%; top:0%; align-items:center; justify-content:center; z-index:99999;" class="col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-2 my-0 px-0 d-flex ">
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

        <!-- ends -->
 </div>

</template>
<script>
 import { codemirror } from 'vue-codemirror'
 import '../../bootstraps/codeImports'
 import 'codemirror/addon/hint/anyword-hint.js'
 import 'codemirror/addon/hint/css-hint.js'
 import 'codemirror/addon/hint/html-hint.js'
 import 'codemirror/addon/hint/javascript-hint.js'
 import 'codemirror/addon/hint/show-hint.css'
 import 'codemirror/addon/hint/show-hint.js'
 import 'codemirror/addon/hint/sql-hint.js'
 import 'codemirror/addon/hint/xml-hint.js'


export default {
      mounted(){

          this.$root.componentIsLoading = false;
        this.setCodeContent();
      
      this.$root.codeboxComponent = this;
     

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
           scrollbarStyle:"overlay",
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
         that:this,
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
            "id": 100,
            "name": 'PYTHON For ML(3.7.7)'
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
         recheckCodeBox: true,

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

        axios.post( '/make-user-master',{
           memberId: member.memberId,
           space_id: this.$root.selectedSpace.space_id
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
      showActiveUsers:function(){

            this.$root.showMemberBoard = true;
            
            this.$router.push({ path: '/channels/'+ this.$root.selectedSpace.space_id +'/live_session' });
        

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

      

          if(this.$root.codeIsLive && !userState && this.$root.fromLiveSession){

             



             this.cmOption.readOnly = 'nocursor';

             this.$root.selfStopTrigger = false;

           this.code = this.$root.FullcodeContent;
           this.language = this.$root.fullCodeLanguage;
           this.detectchange(this.$root.fullCodeLanguage);


           if(this.$root.liveShowCode){
               this.showCode = true;
           }else{

           this.showCode = false;
           this.ResultCode = this.$root.CodeResult;

           }

         

         }else{


          // this.$root.selfStopTrigger = true;

         
           this.cmOption.readOnly = undefined;

            this.code = this.$root.FullcodeContent;
           this.language = this.$root.fullCodeLanguage;

           
           this.detectchange(this.$root.fullCodeLanguage);

          

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

          const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

      copyToClipboard(this.code);

        this.$root.chatComponent.showAlert('Copied!','Copied to clipboard','success');

         
        
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

          this.$root.fromLiveSession = false;
          this.$root.codeFromChat = false;
    
    window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
         this.$root.chatComponent.chatInnerConent = '';
 

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
        id:this.makeUUID(),
       replied_message:[],
         index_count : this.$root.returnLastIndex() + 1,
       replied_message_id:null,
       showReply:false,
       showDate:null,
       loading:true,
       progressValue:0,
       space_id:this.$root.selectedSpace.space_id,
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

              

              let Data = [];
              this.$root.NewMsg = this.makeMessage('code',Data);

              
               this.$root.Messages.push(this.$root.NewMsg);

              this.$root.spaceFullData.messages =  this.$root.Messages;

         
              this.$root.LocalStore('full_space_'+this.$root.selectedSpace.space_id  + this.$root.username,this.$root.spaceFullData);


                 this.$root.scrollToBottom();

                let postData = {
              content: '',
              space_id: this.$root.selectedSpace.space_id,
              is_reply: this.$root.is_reply,
              current_user: JSON.stringify(this.generateOnlineUsersList()),
              replied_message_id: this.$root.replyMessage.message_id,
               attachment_type: 'code',
                code: this.code,
              language_type: this.language,
              file_name:'index',
              temp_id:  this.$root.NewMsg.message_id,
               device_id: this.$root.userDeviceId
            };

          this.$root.updateSpaceTracker(this.$root.selectedSpace.space_id,this.$root.NewMsg);

        this.$root.sendCodeMessage(postData);

         this.goBack();

      },
    generateOnlineUsersList: function(){
          let onlineUserList = [];

          this.$root.selectedSpaceMembers.forEach(member => {
             
             let userData = this.$root.globalUsers.filter((user)=>{
               return user.id == member.user_id;
             })

             if(userData.length != 0){
               onlineUserList.push(userData[0])
             }
           
            
          });
        
        return onlineUserList;
       },
      onCmReady(codemirror) {

          codemirror.on('keypress', () => {
    
    codemirror.showHint()
  })

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

          if(this.$root.codeIsLive){

             this.$root.dataconnection.send({
                action:action,
                data: data,
                space_id: this.$root.selectedSpace.space_id
              });

          }



        },
      runCode:function(){



           this.showCode = false;
           this.$root.liveShowCode = false;

            if(this.selectedLangId == 0 || this.language == 'HTML'){

              this.ResultCode = this.code;
              this.sendCodeRunning();

            }else{

               let status =  this.$root.checkCodeForInput(this.code,this.selectedLangId);

                if(status == 'present'){
                  return;
                } 

               

       
              this.ResultCode = 'sending to sandbox...';

              this.runCodeOnSandbox(null);
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


                axios.post( '/check-for-submission',{
               token: token,
                langId: _this.selectedLangId
                  })
          .then(response => {


          if(response.status == 200){





              if(response.data[0].status.description == 'Accepted'){



                  _this.ResultCode =  response.data[0].stdout;





              }else if(response.data[0].status.description == 'In Queue'){

                 _this.ResultCode = 'In Queue...';

                   _this.checkResponse(response.data[0].token);

              }else if(response.data[0].status.description == 'Processing'){

                 _this.ResultCode = 'Processing...';

                   _this.checkResponse(response.data[0].token);

              }else{

                 _this.ResultCode =  response.data[0].stdout +  '\n Error: \n'  + response.data[0].stderr + ' \n' + response.data[0].compile_output + 
                 '\n' + response.data[0].error;



              }


              if(_this.$root.codeBoxOpened == false){

              }



         _this.sendCodeRunning();




          }



          })
          .catch(error => {



               _this.ResultCode = 'An issue occured,unable to run on sandbox...';

                 _this.sendCodeRunning();

          })




      },
      runCodeOnSandbox: function(codeContent){

           if(codeContent == null){

              codeContent = this.code

           }

          axios.post( '/run-code-on-sandbox',{
                langId: this.selectedLangId,
                code: codeContent,
                messageId: 77
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



                this.ResultCode =  rresponse.data[0].stdout +  '\n Error: \n'  + response.data[0].stderr + ' \n' + response.data[0].compile_output + 
                 '\n' + response.data[0].error;

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

       if(!this.$root.codeIsLive && !this.$root.codeFromChat){
       this.code = "print(\"hello, world\")";
       }


         }

         if(language == 'PYTHON For ML(3.7.7)'){



           this.cmOption.mode = 'text/x-python';

       if(!this.$root.codeIsLive && !this.$root.codeFromChat){
       this.code = "import mlxtend\n" +
"import numpy\n" +
"import pandas\n" +
"import scipy\n" +
"import sklearn\n" +
"\n" +
"print(\"hello, world\")";
       }


         }


         if(language == 'PYTHON(2.7.17)'){
           this.cmOption.mode = 'text/x-python';

            if(!this.$root.codeIsLive && !this.$root.codeFromChat){
       this.code = "print(\"hello, world\")";
       }

         }
          if(language == 'PHP'){
           this.cmOption.mode = 'text/x-php';


     if(!this.$root.codeIsLive && !this.$root.codeFromChat){
       this.code = "<?php \n " +
"print(\"hello, world\n\"); \n " +
"?>";
       }
         }
          if(language == 'JAVASCRIPT(Node)'){
           this.cmOption.mode = 'text/javascript';


        if(!this.$root.codeIsLive && !this.$root.codeFromChat){
       this.code = "console.log(\"hello, world\");";
       }

         }
          if(language == 'SQL'){
           this.cmOption.mode = 'text/x-sql';

 if(!this.$root.codeIsLive && !this.$root.codeFromChat){
      this.code =" SELECT \n " +
  "  Name, COUNT(*) AS num_albums \n " +
"FROM artists JOIN albums \n " +
"ON albums.ArtistID = artists.ArtistID \n " +
"GROUP BY Name \n " +
"ORDER BY num_albums DESC \n " +
"LIMIT 4; ";

       }

         }
          if(language == 'C'){
           this.cmOption.mode = 'text/x-csrc';

            if(!this.$root.codeIsLive && !this.$root.codeFromChat){
       this.code ="#include <stdio.h> \n " +
"                                        \n " +
"int main(void) { \n " +
"    printf(\"hello, world\n\"); \n " +
"    return 0; \n " +
"}";
       }


         }
          if(language == 'C++'){
           this.cmOption.mode = 'text/x-c++src';

            if(!this.$root.codeIsLive && !this.$root.codeFromChat){
       this.code = "#include <iostream>  \n " +
"                                           \n " +
"int main() {    \n " +
"    std::cout << \"hello, world\" << std::endl;  \n " +
"    return 0;  \n " +
"}";
       }

         }
          if(language == 'JAVA'){
           this.cmOption.mode = 'text/x-java';

            if(!this.$root.codeIsLive && !this.$root.codeFromChat){
        this.code = "public class Main { \n " +
 "   public static void main(String[] args) { \n " +
"      System.out.println(\"hello, world\"); \n " +
 "   } \n " +
"}";
       }


         }
          if(language == 'C#'){
           this.cmOption.mode = 'text/x-csharp';

            if(!this.$root.codeIsLive && !this.$root.codeFromChat){
      this.code = "public class Hello { \n " +
"    public static void Main() { \n " +
"       System.Console.WriteLine(\"hello, world\"); \n " +
"   } \n " +
"}";
       }


         }
          if(language == 'ERLANG'){
           this.cmOption.mode = 'text/x-erlang';

            if(!this.$root.codeIsLive && !this.$root.codeFromChat){
        this.code = "main(_) -> \n " +
 "   io:fwrite(\"hello, world\n\").";
       }


         }
          if(language == 'KOTLIN'){
           this.cmOption.mode = 'x-shader/x-fragment';

            if(!this.$root.codeIsLive && !this.$root.codeFromChat){
        this.code = "fun main() { \n " +
 "   println(\"hello, world\") \n " +
"}";
       }

         }
          if(language == 'FOTRAN'){
           this.cmOption.mode = 'text/x-fortran';

         if(!this.$root.codeIsLive && !this.$root.codeFromChat){
      this.code = "program main \n " +
 "   print *, \"hello, world\" \n " +
"end";
       }


         }
          if(language == 'PERL'){
           this.cmOption.mode = 'text/x-perl';

            if(!this.$root.codeIsLive && !this.$root.codeFromChat){
        this.code = "my $name = <STDIN>; \n " +
"print \"hello, $name\"";
       }


         }
          if(language == 'R'){
           this.cmOption.mode = 'text/x-rsrc';

            if(!this.$root.codeIsLive && !this.$root.codeFromChat){
      this.code = "cat(\"hello, world\n\")";
       }


         }
         if(language == 'GO'){
           this.cmOption.mode = 'text/x-go';

            if(!this.$root.codeIsLive && !this.$root.codeFromChat){
       this.code = "package main \n " +
"                           \n " +
"import \"fmt\" \n " +
"                        \n " +
"func main() { \n " +
 "   fmt.Println(\"hello, world\") \n " +
"}";
       }


         }
         if(language == 'HASKELL'){
           this.cmOption.mode = 'text/x-haskell';

            if(!this.$root.codeIsLive && !this.$root.codeFromChat){
       this.code ="main = putStrLn \"hello, world\"";
       }


         }
          if(language == 'RUBY'){
           this.cmOption.mode = 'text/x-ruby';

            if(!this.$root.codeIsLive && !this.$root.codeFromChat){
        this.code = "puts \"hello, world\"";
       }


         }
         if(language == 'LUA'){

            this.cmOption.mode = 'text/x-lua';

             if(!this.$root.codeIsLive && !this.$root.codeFromChat){
       this.code = "print(\"hello, world\")";
       }



         }
         if(language == 'PASCAL'){

            this.cmOption.mode = 'text/x-pascal';

             if(!this.$root.codeIsLive  && !this.$root.codeFromChat){
      this.code = "program Hello; \n " +
"begin  \n " +
 "   writeln ('hello, world') \n " +
"end. \n ";
       }


         }
         if(language == 'RUST'){

            this.cmOption.mode = 'text/x-rustsrc';

             if(!this.$root.codeIsLive && !this.$root.codeFromChat){
      this.code ="fn main() { \n " +
"    println!(\"hello, world\"); \n " +
"}";
       }


         }
         if(language == 'SCALA'){

             this.cmOption.mode = 'text/x-scala';

              if(!this.$root.codeIsLive && !this.$root.codeFromChat){
      this.code ="object Main {  \n " +
 "   def main(args: Array[String]) = {  \n " +
 "      val name = scala.io.StdIn.readLine()  \n " +
  "     println(\"hello, \"+ name)  \n " +
 "   } \n " +
"}";

       }



         }
         if(language == 'SWIFT'){

              this.cmOption.mode = 'text/x-swift';

               if(!this.$root.codeIsLive && !this.$root.codeFromChat){
        this.code = "import Foundation \n " +
"let name = readLine() \n " +
"print(\"hello, \(name!)\")";
       }



         }
         if(language  == 'TYPESCRIPT'){


             this.cmOption.mode = 'text/javascript';

              if(!this.$root.codeIsLive && !this.$root.codeFromChat){
       this.code = "console.log(\"hello, world\");";
       }



         }

        

      },
}
}
</script>
<style lang="scss" scoped>
.fileText{
    font-size:10px;
}

 .codeboxnew1,
    .pre {
      width: 100%;
      margin: 0;

       display: block;
      font-size: 14px;
      line-height: 1.6;
      word-break: break-all;
      word-wrap: break-word;
      overflow: auto;
    }

    .codeboxnew1{
       height: 100%;
       border: 1px solid #e6e6e6;
        position:absolute;
        width:100%;

        overflow-x: hidden;
        overflow-y:hidden;
    }
</style>