<template>
       <div style="position:absolute; height:92%; width:100%; overflow-y:auto;left:0;top:8%;"> 


         <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-2 py-0 my-0 text-left px-1" style="border-bottom:2px solid #3E8893;">
           <v-btn icon color="#3E8893" @click="goBack"><v-icon>mdi-close mdi-18px</v-icon></v-btn>
         </div>
         <div class="col-8 py-0 my-0 mt-1 d-flex" style="border-bottom:2px solid #3E8893; align-items:center;justify-content:center;">
            <span  style="font-size:12px; color:#3E8893; font-weight:bolder;font-family:HeaderText;">Members</span>
            <span class="messagesBadges mx-1">
                             <span class=" ">{{Members.length}}</span>
                          </span>
         
          
         </div>
         <div class="col-2 py-0 my-0 text-right px-1"  style="border-bottom:2px solid #3E8893;">
          
         </div>
         </div>
         </div>

         <div class="col-12 py-0 my-0">
         <div class="row my-0 py-0 pb-5 px-2 scrollerStyle">

              <v-card tile flat class="col-12 py-1 px-2" color="#edf6f7"  @click="createSpace(member)"  style="border-bottom:1px solid #5fb0b9;" v-for="(member, index) in Members" :key="index">
               <div class="row py-0 my-0 px-0">
                    <div class="py-0 my-0 d-flex col-2" style="align-items:center;justify-content:center; ">
                        <div class="py-0">
                          
                  <div :style="imageStyle(35,member)"
                  class="d-inline-block" >

                  </div>
             
                 
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-7" style="align-items:center;" v-if="checkIfUser(member.id)">
                         <span class="titleText">You</span>
                    </div>

                    <div class="py-0 my-0 d-flex col-7" style="align-items:center;" v-else>
                         <span class="titleText">{{ shortenContent(member.name,30)}} </span><span class="newbadge mx-2"> @{{member.username}}</span>
                    </div>

                    <div class="py-0 my-0 text-right col-3" style="align-items:center;" v-if="member.is_admin">
                         <span style="font-size:10px; color:#4d4d4d;">Admin </span>
                    </div>

                   
                </div>
              </v-card>
             


            </div>
         </div>


         <div style="position:fixed;  height:100%; background:rgba(38, 82, 89,0.5); overflow-y:hidden; overflow-x:hidden; left:0%; top:0%; align-items:center; justify-content:center; z-index:99999;" class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-2 my-0 px-0 d-flex ">
           <div style="position:absolute; height:auto; width:90%; bottom:30%; left:5%; overflow-y:hidden; overflow-x:hidden; " class="mx-auto pb-2">

             <v-card style="border-radius:10px;"
       height="auto"
      
       class="py-2 px-1" >

            <v-card tile flat class="text-center py-2" style="border-bottom:1px solid #c5c5c5;border-radius:0px;" @click="makeAdmin">
        <span style="font-size:13px;">Make an Admin</span>
            </v-card>
             <v-card tile flat class="text-center py-2" style="border-bottom:1px solid #c5c5c5;border-radius:0px;" @click="muteUser">
        <span style="font-size:13px;">Mute</span>
            </v-card>
             <v-card tile flat class="text-center py-2" style="border-bottom:1px solid #c5c5c5;border-radius:0px;" @click="blockUser">
        <span style="font-size:13px;">Block</span>
            </v-card>
             <v-card tile flat class="text-center py-2" style="border-bottom:1px solid #c5c5c5;border-radius:0px;" @click="removeUser">
        <span style="font-size:13px;">Remove</span>
            </v-card>
         <v-card tile flat class="text-center py-2"  @click="createSpace">
        <span style="font-size:13px;">View Profile</span>
            </v-card>

             </v-card>

           </div>
         </div>

          <div  @click="closeUserInfoBoard"   v-if="this.$root.showUserInfo" style="position:fixed;  height:100%; background:rgba(38, 82, 89,0.5); overflow-y:hidden; overflow-x:hidden; left:0%; top:0%; align-items:center; justify-content:center; z-index:99999;" class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-2 my-0 px-0 d-flex ">
    
       <div @click.stop="preventCloseBoard" style="position:absolute; height:auto; width:90%; bottom:5%; left:5%; overflow-y:hidden; overflow-x:hidden; " class="mx-auto pb-2">
  

          <v-card  
      style="border-radius:10px;"
       height="auto"
      
       class="pt-2 px-1"
  >
   <div class="row py-0 my-0"  v-if="this.$root.userBasicInfo.length != 0" >

     <div class="col-4 d-flex py-0 my-0" style="align-items:center; justify-content:center;">

         <div class="text-center">


                    <span class=" px-1 d-block" style="color: #2d626c; font-size:12px;">Connections</span>


                  <span class=" px-1 d-block" style="color: #2d626c; font-size:12px; font-family:HeaderText;">{{this.$root.userBasicInfo.connections}}</span>

             

              </div>

             
     </div>

      <div class="col-4 d-flex py-0 my-0" style="align-items:center; justify-content:center;">

        <div>
           <v-img  @click="viewFullImage()"
                   :style="this.$root.userBasicInfo.background_color != null ?  'background-color:'   + this.$root.userBasicInfo.background_color + ';' : 'background-color:#ffffff;'" 
                   :src="this.$root.userBasicInfo.image_name != null ? 'imgs/profile/' + this.$root.userBasicInfo.image_name + '.' + this.$root.userBasicInfo.image_extension : 'imgs/usernew.png'" height="90" width="90" class="avatarImg" style="border:3px solid #3E8893;border-radius:50%;"></v-img>

                   

     </div>

    </div>


      <div class="col-4 d-flex py-0 my-0" style="align-items:center; justify-content:center;">
              <div class="text-center">
                  <img src="imgs/coins.png" height="30"  class="d-block" > 
                  <span class=" px-1 d-block" style="color: #2d626c; font-size:12px; font-family:HeaderText;">{{this.$root.userBasicInfo.coins}}</span>

              

              </div>

     </div>

      <div class="col-12 d-flex py-0 my-1" style="align-items:center; justify-content:center;">
              <div class="text-center">
                
                  <span class=" px-1 d-block" style="color: #2d626c; font-size:12px; font-family:HeaderText;">{{this.$root.userBasicInfo.userData.name}}</span>

                   <span class=" px-1 d-block" style="color: #2d626c; font-size:12px; ">@{{this.$root.userBasicInfo.userData.username}}</span>

              

              </div>
          </div>

      
       <div class="col-12 py-0 my-0" >
              <div class="row my-0 py-0">
                
                  <div class="col-4 text-center d-flex py-0 my-1" style="align-items:center; justify-content:center;">

                     <div>
               <v-chip
      small
      label
       class="d-block"
     style="color:#ffffff;background:#3E8893; font-size:11px;"
      >
      Channels
      </v-chip>  

       <span class=" px-1 d-block py-1" style="color: #2d626c; font-size:12px; font-family:HeaderText;">{{this.$root.userBasicInfo.channels}}</span>
                     </div>
                      
                  

                  </div>
                  
                   <div class="col-4 text-center d-flex py-0 my-1" style="align-items:center; justify-content:center;">
               

               <div>
         <v-chip
      small
       class="d-block"
      label
     style="color:#ffffff;background:#3E8893; font-size:11px;"
      >
      Projects
      </v-chip>  

      <span class=" px-1 d-block py-1" style="color: #2d626c; font-size:12px; font-family:HeaderText;">{{this.$root.userBasicInfo.projects}}</span>
               </div>
                      

                  </div>

                   <div class="col-4 text-center d-flex py-0 my-1" style="align-items:center; justify-content:center;">

                      <div>
                        
                          <v-chip
      small
      class="d-block"
      label
     style="color:#ffffff;background:#3E8893; font-size:11px;"
      >
      Teams
      </v-chip>  

      <span class=" px-1 d-block py-1" style="color: #2d626c; font-size:12px; font-family:HeaderText;">{{this.$root.userBasicInfo.teams}}</span>
                      </div>

                     

                  </div>

              </div>

     </div>


      <div class="col-12  py-2 my-1 mb-0 pb-2"  style="background:#4497a2; border:1px solid #4497a2; border-radius:18px ;" >
              <div class="row py-0 my-0">
                
                  <div class="col-6 text-center py-0 px-0">
                    <v-btn  rounded color="#ffffff" small :loading="loadingMessage" @click.stop="messageSpace" ><span style="font-size:12px; font-family:HeaderText; color:#1e4348; text-transform:capitalize;">Message</span></v-btn>
                  </div>

                   <div class="col-6 text-center py-0 px-0" v-if="this.$root.userBasicInfo.user_connected == true">
                    <v-btn  rounded color="#ffffff" small @click.stop="viewProfile"><span style="font-size:12px; color:#1e4348; font-family:HeaderText;  text-transform:capitalize;">Profile</span></v-btn>
                  </div>

                  <div class="col-6 text-center py-0 px-0" v-if="this.$root.userBasicInfo.user_connected == false">
                    <v-btn  rounded color="#ffffff" :loading="connectionLoading" small @click.stop="connectToUser"><span style="font-size:12px; color:#1e4348; font-family:HeaderText;  text-transform:capitalize;">Connect</span></v-btn>
                  </div>

                   <div class="col-6 text-center py-0 px-0" v-if="this.$root.userBasicInfo.user_connected == 'connected'">
                    <v-btn  rounded color="#ffffff" small  ><span style="font-size:12px; color:#1e4348; font-family:HeaderText;  text-transform:capitalize;">Connected</span></v-btn>
                  </div>
                 

              </div>
              
          </div>

    

      

   </div>




   <div class="row py-0 my-0" v-else >
       
        <v-skeleton-loader
           class="mx-auto my-2 col-12"
           height="90"
           width="100%"
          
         type="image"
          ></v-skeleton-loader>

          <div class="col-12 text-center">
              <span class=" px-1 d-block" style="color: #2d626c; font-size:12px;">{{ this.$root.infoLoaderText}}</span>
          </div>
        </div>


  

    

    
    
    

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
           Alert:false,
           alertMsg:'',
           loading:false,
          Members:[],
          connectionLoading:false,
          loadingMessage:false,
        }
    },
     components: {
   
  },
    mounted(){
      this.fetchMessages();
      this.fetchMembers();
    },
    methods:{
       showAlert:function(duration,text){
        this.Alert = true;
        this.alertMsg = text;
        let _this = this;
     
     setTimeout(function(){
        _this.Alert = false;
     },duration);

    },
     preventCloseBoard: function(){

      },
      makeAdmin:function(){

      },
      muteUser:function(){
        
      },
      blockUser:function(){

      },
      removeUser:function(){

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
      createSpace: function(member){

         if(member.username == this.$root.username){
      return;
         }

         this.$root.showUserInfo = true;
          
            this.$root.selectedMember = member;
            
      axios.get('/fetch-user-info/'  + member.username )
      .then(response => {
      
      if (response.status == 200) {

         
         this.$root.userBasicInfo = response.data[0];

         
       
      }
       
     
     })
     .catch(error => {

        this.$root.infoLoaderText = 'unable to load user info'
    
     }) 

      },
         connectToUser:function(){
           this.connectionLoading = true;
         axios.get('/connect-user-'+ this.$root.userBasicInfo.userData.username)
      .then(response => {
      
      if (response.status == 200) {
          
          
          
             
          this.$root.userBasicInfo.user_connected = 'connected';
            this.connectionLoading = false;
          
          
     }
       
     
     })
     .catch(error => {
    
     }) 

      },
       closeUserInfoBoard: function(){

          this.$root.showUserInfo = false;

          this.$root.userBasicInfo = [];
        
      },
      viewProfile: function(){
        

        this.$root.pageloader = true;
        window.location = '/view-profile#/profile/channels/'+ this.$root.selectedMember.username;
         
      },
      messageSpace: function(){


          this.loadingMessage = true;

          let member = this.$root.selectedMember;

        if(member.username == this.$root.username){
          return;
        }

        if(member.direct_present){
         
         this.$root.Messages = null;
        this.$root.selectedSpace = [];

        this.$root.forceListReload = true;
      
      this.$root.ChatList = [];
          this.$router.push({ path: '/space/'  +  member.space_id  +  '/channel/content' + '/user' });

          this.$root.showUserInfo = false;

          


          return;
      
        }
        if(this.loading){
            return;
        }

        this.loading = true;
           
          axios.post('/create-space',{
                name: '',
                limit: 2,
                memberId: member.id,
                type: 'Direct'
                  })
          .then(response => {
             
             if (response.status == 200) {

               this.$root.Messages = null;
        this.$root.selectedSpace = [];


         this.$root.showUserInfo = false;

         if(this.$root.ChatList.length != 0){
           this.$root.ChatList[4].unshift(response.data);
           
            this.$root.LocalStore('ChatList' + this.$root.username,this.$root.ChatList);
        this.$root.forceListReload = true;
         }
       
         

               this.$router.push({ path: '/space/'  +  response.data.space_id  +  '/channel/content' + '/user' });

              
                         
            }

          })
          .catch(error => {
              this.showAlert(5000,'Failed- ' + error);

               this.loadingMessage = false;

             
          })

      },
       imageStyle:function(dimension,user){
      

      if(user.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;";
         styleString += 'background-color:#ffffff; background-image:url(imgs/usernew.png);';
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;";
         let imgLink = user.image_name + '.' + user.image_extension;
          styleString += 'background-color:'+ user.background_color + '; background-image:url(imgs/profile/'  + imgLink  +  ');';
          return styleString;
      }

      

     },
       goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        memberHandler: function(){

        },
         checkIfUser:function(userId){
            if(userId == this.$root.user_temp_id){
                return true;
            }else{
              return false;
            }
            
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
         fetchMembers: function(){
          
           axios.get('/fetch-space-members-' + this.$route.params.spaceId )
      .then(response => {
      
      if (response.status == 200) {
        
     
       this.Members = response.data;
       
     }
       
     
     })
     .catch(error => {
    
     }) 

        },
  
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

.newbadge{
     font-size:11px;
      color:rgb(38, 82, 89);
     font-family:HeaderText; 
     border:1px solid #3E8893; 
     border-radius:9px; 
     padding: 2px 4px;
     background:#edf6f7;
     font-weight: bolder;
 } 
 .messagesBadges{
    
    color: #3e868e;
    background: #ffffff;
    font-size: 11px;
    padding: 4px 8px;
    border:2px solid #3e868e;
    border-radius:50%;
}

body{
  overscroll-behavior-y: none;
}




.scrollerStyle::-webkit-scrollbar {
  width: 5px;
}
 
.scrollerStyle::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(111, 181, 195, 0.8);
  border:1px solid transparent;
  border-radius:6px;
}
 
.scrollerStyle::-webkit-scrollbar-thumb {
  background-color: #6fb8c3;
  outline: 1px solid #6fb8c3;
  border:1px solid transparent;
   border-radius:6px;
}

</style>