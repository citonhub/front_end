<template>
       <div style="position:absolute; height:100%; width:100%; overflow-y:auto; overflow-y:hidden;left:0;top:0%;"  class="teamSpace"> 

         <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white; padding-top:45px !important;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-2 py-0 my-0 text-left px-0" style="border-bottom:2px solid #3E8893;" >
           <v-btn icon color="#3E8893" @click="goBack"><v-icon>mdi-close mdi-18px</v-icon></v-btn>
         </div>
         
         <div class="col-8 py-0 my-0 d-flex" style="border-bottom:2px solid #3E8893; align-items:center;justify-content:center;">
          <span v-if="this.$route.params.channelType != 'SubSpace'" style="font-size:12px; color:#3E8893; font-weight:bolder;font-family:HeaderText;">
             
             <span v-if="this.$route.params.channelType == 'Channel'">

                {{ $t('space.sub_channels') }}

             </span>
              <span v-if="this.$route.params.channelType == 'Team'">
                  
                   {{ $t('space.sub_teams') }}
             </span>
           
            
            </span>

          <span v-else
          style="font-size:12px; color:#3E8893; font-weight:bolder;font-family:HeaderText;">
          

           <span v-if="this.$root.selectedGenSpaceType == 'Channel'">

                {{ $t('space.sub_channels') }}

             </span>
              <span v-if="this.$root.selectedGenSpaceType == 'Team'">
                  
                   {{ $t('space.sub_teams') }}
             </span>
          
          </span>
         </div>
        
         <div class="col-2 py-0 my-0 text-right px-0"  style="border-bottom:2px solid #3E8893;" >
          <v-btn icon color="#3E8893" @click="closeAddBoard = false" v-if="checkIfisOwner()"  ><v-icon>mdi-plus-circle-outline mdi-18px</v-icon></v-btn>
         </div>

         </div>
         </div>

         <div class="col-12 py-0 my-0" >
         <div class="row my-0 py-0 px-2"  v-if="subSpaces.length != 0">

           <v-card flat tile color="#c9e4e8" class="col-12 py-1 px-1 mb-1" v-if="this.$route.params.channelType == 'SubSpace'" @click.stop="gotoGeneral">
              <div class="row py-0 my-0">
                  <div class="col-2 py-0 my-0">
                    <v-icon color="#1e4148">mdi-google-circles-extended mdi-18px</v-icon>
                     
                  </div>
                  <div class="col-8 py-0 my-0 text-center">
                       <span  style="font-size:12px; color:#1e4148; font-weight:bolder;font-family:HeaderText;"> {{ $t('space.general') }}</span>
                  </div>
                  <div class="py-0 my-0 d-flex col-2" style="align-items:center;" v-if="false">
                          <span class="messagesBadges"><span style="padding:2px;"></span></span>
                    </div>
              </div>
           </v-card>
         

           <v-card flat tile color="#c9e4e8" class="col-12 py-1 px-1 mb-1" v-for="(space,index) in subSpaces" :key="index" @click.stop="selectSubSpace(space)">
              <div class="row py-0 my-0">
                  <div class="col-2 py-0 my-0">
                    <v-icon color="#1e4148" v-if="space.type == 'Public'">mdi-pound mdi-18px</v-icon>
                     <v-icon color="#1e4148" v-if="space.type == 'Private'">mdi-lock mdi-18px</v-icon>
                  </div>
                  <div class="col-8 py-0 my-0 text-center">
                       <span  style="font-size:12px; color:#1e4148; font-weight:bolder;font-family:HeaderText;">{{space.space_info.name}}</span>
                  </div>
                  <div class="py-0 my-0 d-flex col-2" style="align-items:center;" v-if="space.unread > 0">
                          <span class="messagesBadges"><span style="padding:2px;">{{space.unread}}</span></span>
                    </div>
              </div>
           </v-card>

         </div>

          <div class="col-12 text-center" v-else>
      
        <span style="color:gray; font-size:12px; font-family:BodyText;"  class="d-block">

           <span v-if="this.$root.selectedGenSpaceType == 'Channel'">

            

                {{ $t('space.no_sub_channels') }}

             </span>
              <span v-if="this.$root.selectedGenSpaceType == 'Team'">
                  
                   {{ $t('space.no_sub_teams') }}
             </span>
          
          
          
          </span>
         
         </div>

         
         </div>

      <div  @click="closeAddBoard =  true"  v-if="!closeAddBoard" style="position:fixed;  height:100%; background:rgba(38, 82, 89,0.5); overflow-y:hidden; overflow-x:hidden; left:0%; top:0%; align-items:center; justify-content:center; z-index:99999;" class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-2 my-0 px-0 d-flex ">
           <div  @click.stop="preventClose"  style="position:absolute; height:60%; width:100%; top:40%; left:0%; overflow-y:hidden; overflow-x:hidden; " class="mx-auto">

             <v-card tile flat
       height="100%"
          
       class="py-2 px-2" >


       <v-app class="row" style="background:transparent; font-family:BodyText;  ">
              <v-form class="col-12 py-2 my-0 text-center" ref="subSpace" v-model="subSpaceState">
                 <div class="row py-0 my-0 px-2">

                   <div class="col-12 py-2 my-0 px-2">
               
           <v-text-field
                style="font-size:12px;"
               :placeholder="$t('general.Name') + '...'"
             :label="$t('general.Name')"
             dense
             :rules="Rule"
             v-model="name"
              counter="50"
             color="#4495a2"
            
             ></v-text-field>

             </div>

             <div class="col-12 py-2 my-0 px-2">
                  <v-select
         
          :items="subSpaceType"
          label="Type"
          style="font-size:12px;"
          hide-selected
           :rules="requiredRule"
           v-model="subType"
          :placeholder="$t('general.select') + '...'"
          color="#4495a2"
          small-chips
        ></v-select>
             </div>

       

        <div class="col-12 py-1 my-0 px-2 text-center">
                  <v-btn rounded :loading="loadingSubSpace"  small color="#3E8893" 
                  style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;" 
                    @click.stop="createSubSpace">
                  {{$t('general.add')}}
                  </v-btn>
             </div>
                   
              
                 </div>
                   



              </v-form>

             
        </v-app>



            
             </v-card>

           </div>
         </div>

           <v-fade-transition>
              <div  style="position:absolute; width:100%; height:auto: align-items:center;justify-content:center;bottom:16%; z-index:123453566;"  class="d-flex">
             <v-alert
      v-model="Alert"
      dismissible
      close-icon="mdi-delete"
      color="#3E8893"
       width="auto"
       style="font-size:13px;"
       height="auto"
      border="left"
     
      elevation="2"
      colored-border
     
    >
      {{alertMsg}}
    </v-alert>
        </div>
        </v-fade-transition>

       </div>
</template>
<script>
export default {
     data(){
        return{
        
         Rule:[
             v => !!v || 'Name is required',
           v => v.length < 50 || 'Name must be less than 50 characters',
             v => /^[A-Za-z0-9 ]+$/.test(v) || 'Cannot contain special character'
         ],
          subSpaceState:'',
          subType:'',
          name:'',
          loadingSubSpace:false,
          requiredRule: [
         v => !!v || 'This feild is required',
        ],
        subSpaceType:[
            'Public','Private'
        ],
        closeAddBoard: true,
        Alert: false,
        alertMsg: false,
        subSpaces:[],

        }
    },
     components: {
   
  },
    mounted(){

      Echo.leave('space.' + this.$root.selectedSpace.space_id);

      
      this.setSubSpaces();
    
    },
    methods:{
        preventClose: function(){

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
        checkForUnread:function(){

           if(this.subSpaces.length != 0){
               
                
           for (let index = 0; index < this.subSpaces.length; index++) {
           
          let unreadStoredMsg = this.$root.getLocalStore('unread' + this.subSpaces[index].space_id + this.$root.username);
  
          unreadStoredMsg.then((result)=>{
  
             if(result != null){
  
              let finalResultUnread = JSON.parse(result);
                  
  
              this.subSpaces[index].unread = finalResultUnread.length;
  
             }
  
            
              
            
  
          });
        
          
        }
           }
         


        },
        gotoGeneral: function(){

            this.$root.Messages = null;

            this.$root.channel = null;

             this.closeConnections();

              this.$root.codeEditorArray = [];
       this.$root.returnedMessages = [];
       this.$root.messageStoreTop = [];
       this.$root.messageStore = [];
       this.$root.sharePage = false;
       this.$root.showUserInfo = false;

          Echo.leave('space.' + this.$root.selectedSpace.space_id);
        
        this.$root.forceListReload = true;
        this.$root.showUserInfo = false;
       this.$root.selectedSpaceMembers = [];

        this.$root.SpaceUsers = [];
       

          let spaceId = this.$root.selectedSpace.general_spaceId;

         


             this.$router.push({ path: '/space/'  +  spaceId  +  '/channel/content' + '/user' });

        },
        selectSubSpace: function(subSpace){
           
           

            this.$root.Messages = null;

              this.$root.channel = null

               this.closeConnections();

                this.$root.codeEditorArray = [];
       this.$root.returnedMessages = [];
       this.$root.messageStoreTop = [];
       this.$root.messageStore = [];
       this.$root.sharePage = false;
       this.$root.showUserInfo = false;
       

          Echo.leave('space.' + this.$root.selectedSpace.space_id);
        
        this.$root.forceListReload = true;
        this.$root.showUserInfo = false;
       this.$root.selectedSpaceMembers = [];

        this.$root.SpaceUsers = [];
         this.$root.selectedSpace = [];


             this.$router.push({ path: '/space/'  +   subSpace.space_id  +  '/channel/content' + '/user' });

        },
          closeConnections:function(){
          let _this = this;

         if(this.$root.audioconnection != undefined){

         
          
     this.$root.audioconnection.getAllParticipants().forEach(function(pid) {
        _this.$root.audioconnection.disconnectWith(pid);
    });

    // stop all local cameras
    this.$root.audioconnection.attachStreams.forEach(function(localStream) {
        localStream.stop();
    });

    // close socket.io connection
   this.$root.audioconnection.closeSocket();


           
         }

          if(this.$root.connection != undefined){


             // disconnect with all users
    this.$root.connection.getAllParticipants().forEach(function(pid) {
        _this.$root.connection.disconnectWith(pid);
    });

    // stop all local cameras
    this.$root.connection.attachStreams.forEach(function(localStream) {
        localStream.stop();
    });


          this.$root.connection.closeSocket();
          }
       

        this.$root.connection = undefined;
        this.$root.audioconnection = undefined;

        this.$root.screenSharingOn = false;
        this.$root.liveIsOn = false;
        this.$root.showVideoScreen = false;
        this.$root.liveInitiated = false;
        this.$root.presentRoomId = null;
        this.$root.remoteLiveHappening = false;

         this.$root.remoteLiveHappening = false;
        this.$root.remoteCode = false;
         this.$root.remoteScreen = false;
          this.$root.remoteAudio= false;
            this.$root.allAudioParticipant = [];
      },
        setSubSpaces: function(){

           if(this.checkIfisOwner()){

               this.subSpaces = this.$root.selectedSpace.sub_spaces;

           }else{

             this.subSpaces = this.$root.selectedSpace.sub_spaces.filter((space)=>{

               return space.type == 'Public' || (space.type == 'Private' && space.is_member == true);

             });
           }

          

             this.checkForUnread();

        },
       goBack() {
        this.$router.push({ path: '/space/' + this.$route.params.spaceId +'/channel/content'  + '/user'});
        },
         showAlert:function(duration,text){
        this.Alert = true;
        this.alertMsg = text;
        let _this = this;
     
     setTimeout(function(){
        _this.Alert = false;
     },duration);

    },
        fetchMessages: function(){
          
           axios.get('/fetch-space-messages-' + this.$route.params.spaceId )
      .then(response => {
      
      if (response.status == 200) {
        
     
       this.$root.selectedSpace = response.data[1]
       
     }
       
     
     })
     .catch(error => {
    
     }) 

        },
         shortenContent: function(content,limit){
             
             if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                 return shortcontent + '...';
             }else{
               return content;
             }
        },
       
         createSubSpace:function(){
       
      
     if( this.$refs.subSpace.validate()){

          this.loadingSubSpace = true;

         axios.post('/create-sub-space',{
                name: this.name,
                general_spaceId: this.$root.selectedSpace.general_spaceId,
                type: this.subType
                  })
          .then(response => {
             
            
            
             if (response.status == 200) {

                this.loadingSubSpace = false;  

                  this.subType = '';
                  this.name = '';

                   this.closeAddBoard = true;

                 this.$root.selectedSpace.sub_spaces.push(response.data)

                  
              
                 this.setSubSpaces();

                 this.saveSpaceToLocal();
 
            
            }

          
              
            
           
            
          })
          .catch(error => {
              this.showAlert(5000,'Failed- ' + error);
              this.loadingSubSpace = false;
          })
      }

    },
    saveSpaceToLocal: function(){
         let storedMsg = this.$root.getLocalStore(this.$route.params.spaceId + this.$root.username);

          storedMsg.then((result)=>{
               
               if(result != null){

                    let finalResult = JSON.parse(result);

                    finalResult[1] =  this.$root.selectedSpace;

                   this.$root.LocalStore(this.$route.params.spaceId  + this.$root.username,finalResult);

               }
          })
    }
     
  },
}
</script>
<style>
.documentIcon{
    background: #dbedf0;
    border:1px solid #dbedf0;
    border-radius:50%;
}
.documentTitle{
  font-size: 12px;
  color: #3E8893;
}

.documentSize{
  font-size: 10px;
  color: #a6a6a6;
}
.messagesBadges{
    
    color: #ffffff;
    background: #3e868e;
    font-size: 11px;
    font-family: HeaderText;
    font-weight: bolder;
    border:2px solid #3e868e;
    border-radius:50%;
}

.teamSpace::-webkit-scrollbar, .directSpace::-webkit-scrollbar, .channelSpace::-webkit-scrollbar, .project::-webkit-scrollbar {
  width: 5px;
}
 
.teamSpace::-webkit-scrollbar-track,.directSpace::-webkit-scrollbar-track,.channelSpace::-webkit-scrollbar-track,.project::-webkit-scrollbar-track {
 box-shadow: inset 0 0 6px rgba(111, 181, 195, 0.8);
  border:1px solid transparent;
  border-radius:6px;
}
 
.teamSpace::-webkit-scrollbar-thumb, .directSpace::-webkit-scrollbar-thumb, .channelSpace::-webkit-scrollbar-thumb, .project::-webkit-scrollbar-thumb {
   background-color: #6fb8c3;
  outline: 1px solid #6fb8c3;
  border:1px solid transparent;
   border-radius:6px;
}
</style>