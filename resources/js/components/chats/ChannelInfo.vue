<template>
  <div class="col-12 py-1 my-0 ">

       <div class="row">
        <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row" style="position:sticky;background:white; top:0%; border-bottom:2px solid #c5c5c5;align-items:center;">
            <div class=" mr-1 col-2 px-1 py-0">
              <v-btn icon  @click.stop="close">
                      <v-icon>mdi mdi-close</v-icon>
                    </v-btn>
            </div>
          
             <div class="col-8 py-0 text-center">
             <span style="font-size:14px; font-family:MediumFont;">
               <template v-if="that.$root.selectedSpace.type != 'Bot'">
                 Channel Info
               </template>
                <template v-else>
                 Diary Info
               </template>
               </span>

          </div>
              
              <div class="col-2 py-0 mr-1 text-right px-1" >
                  <v-btn icon @click.stop="EditChannel"  v-if="checkIfisOwner() &&  that.$root.selectedSpace.type != 'Bot'">
                      <v-icon>las la-edit</v-icon>
                    </v-btn>
              </div>
          
        </div>

        <div class="col-12 d-flex" style="align-items:center; justify-content:center;">
              <div   :style="imageStyleSpace(150,that.$root.selectedSpace,'channel')"  >
               </div> 
        </div>

        <div class="col-12 text-center py-0">
           <span style="font-size:14px; font-family:MediumFont;">{{that.$root.selectedSpace.name}}</span>
        </div>

        <div class="col-12 text-left py-1">
           <span style="font-size:14px;font-family:MediumFont;">Description</span><br>

              <template v-if="that.$root.selectedSpace.description">
                 <span style="font-size:12px;" v-html="that.$root.selectedSpace.description"></span>

              </template>

              <template v-else>
             

                  <span style="font-size:12px; color:grey;">Here is this channel description</span>


              </template>
          
        </div>
           
        <div class="col-12 py-2">
         <div class="row">

           <div class="col-6 px-0 py-0">

               <v-btn x-small color="#3C87CD"  v-if="checkIfisOwner() && that.$root.selectedSpace.type != 'Bot'" @click.stop="showInvitation" style="color:white;text-transform:capitalize;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" rounded>Invite</v-btn>

           </div>

           <div class="col-6 px-0 py-0 text-right">
               <v-btn x-small color="#3C87CD" :loading="loadingLeave" @click="leaveSpace" outlined style="text-transform:capitalize;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" rounded>Leave</v-btn>
           </div>

         </div>
        </div>
        
     <template v-if="that.$root.selectedSpace.type != 'Bot'">

          <div class="col-12 py-2 d-flex flex-row mt-2" style="border-top:1px solid #c5c5c5; border-bottom:1px solid #c5c5c5;">
           <div class="col-7 py-0 px-0">
                 <span style="font-size:14px; font-family:MediumFont;">Members</span>
           </div>
           <div class="col-5 text-right py-0 px-0">
                 <span style="font-size:13px;">{{that.$root.selectedSpaceMembers.length}}</span>
           </div>
        </div>

        <v-card flat tile :id="'member' + index" @click.stop="goToProfile(member)" class="col-12 py-2 d-flex flex-row" style="align-items:center; border-bottom:1px solid #c5c5c5;" v-for="(member,index) in that.$root.selectedSpaceMembers"
          :key="index">
              <div    class="mr-2"
     :style="imageStyle(40,member,'user')">
  </div> 
   <div>
        <span style="font-size:13px;">{{member.name}} @{{member.username}}</span>
   </div>
    <div class="py-0 my-0 " style="align-items:center; position:absolute; top:5%; right:5%;" v-if="member.is_admin">
                         <span style="font-size:10px; color:#4d4d4d;">Admin <v-icon color="#33cc33" v-if="checkIfOnline(member.user_id)" style="font-size:12px;">mdi-circle </v-icon></span>
                    </div>

               <div class="py-0 my-0 " style="align-items:center; position:absolute; top:5%; right:5%;" v-else>
                         <span style="font-size:10px; color:#4d4d4d;"> <v-icon color="#33cc33" v-if="checkIfOnline(member.user_id)" style="font-size:12px;">mdi-circle </v-icon></span>
                    </div>

            
        </v-card>

     </template>
       
        

     

    </div>

 

  </div>
   
</template>
<script>



export default {
      data(){
        return{
          
         that:this,
       loadingLeave:false,
       
        }
    },
    mounted(){
     this.$root.componentIsLoading = false;
    },
    methods:{
      goToProfile:function(member){
           

           if(this.$root.username ==  member.username) return;
          if(this.checkIfisOwner()){

             this.$root.chatComponent.selectedSpaceMembers = member;

              this.$root.showAdminOption = true;
    
          }else{
          this.$root.selectedUsername = member.username;
         this.$router.push({ path:'/profile-view/' + member.username})
          }

       
      },
         close:function(){
             window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        this.$root.chatComponent.chatInnerSideBar = false;
   },  
   
   EditChannel:function(){
        this.$root.chatComponent.innerSideBarContent = '';
          
            this.$root.chatComponent.innerSideBarContent = 'channel_edit';
                
          
           this.$router.push({ path: '/channels/' + this.$root.selectedSpace.space_id + '/channel_edit' });

   },
    leaveSpace: function(){
         this.loadingLeave = true;
        axios.post('/leave-space',{
           'space_id':this.$route.params.spaceId
        } )
      .then(response => {

      if (response.status == 200) {

           let storedChat = this.$root.getLocalStore('user_chat_list'+ this.$root.username);

                   storedChat.then((result)=>{

                       if(result != null ){

                    let finalResult = JSON.parse(result);

                       
                       if(this.$root.selectedSpace.type == 'Channel' || this.$root.selectedSpace.type == 'Team' ){

                          let remainingSpace = finalResult.channels.filter((space)=>{
                         return    space.space_id != this.$root.selectedSpace.space_id
                          });

                          finalResult.channels = remainingSpace;

                        }

                         if(this.$root.selectedSpace.type == 'Bot'){

                          let remainingSpace = finalResult.pet_spaces.filter((space)=>{
                         return    space.space_id != this.$root.selectedSpace.space_id
                          });

                          finalResult.pet_spaces = remainingSpace;

                        }
                         

                          this.$root.LocalStore('user_chat_list' + this.$root.username,finalResult,false,'leave_space');

                    
                    

                 }

                   } )


             


     }


     })
     .catch(error => {
          this.loadingLeave = false;
       this.$root.chatComponent.showAlert('Oops!','Something went wrong,please try again','error')
     })
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
        checkIfOnline: function(user_id){

         let SpaceUserOnline = this.generateOnlineUsersList();
          
        let userData = SpaceUserOnline.filter((user)=>{
         return user.id == user_id;
        });

         if(userData.length == 0){

            return false

         }else{

           return true
         }

      },
    imageStyleSpace:function(dimension,data,type){
      

      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:5px solid #3C87CD; cursor:pointer;";
         if(type == 'channel'){
              styleString += 'background-color:#ffffff; background-image:url(imgs/channel.png);';
         }else{
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
         }
         
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:5px solid #3C87CD; cursor:pointer;";
         let imgLink = data.image_name + '.' + data.image_extension;
          if(type == 'channel' || type== 'bot'){
              styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/space/'  + imgLink  +  ');';
         }else{
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/profile/'  + imgLink  +  ');';
         }
         
          return styleString;
      }

      

  },
    imageStyle:function(dimension,data,type){
      

      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5; ";
         if(type == 'channel'){
              styleString += 'background-color:#ffffff; background-image:url(imgs/channel.png);';
         }else{
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
         }
         
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5; ";
         let imgLink = data.image_name + '.' + data.image_extension;
          if(type == 'channel' || type == 'bot'){
              styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/space/thumbnails/'  + imgLink  +  ');';
         }else{
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/profile/thumbnails/'  + imgLink  +  ');';
         }
         
          return styleString;
      }

      

  },
   showInvitation:function(){
            this.$root.shareText = 'Join ' + this.$root.selectedSpace.name +  ' on Citonhub';
       this.$root.shareLink =   'https://www.citonhub.com/link/channel/'+ this.$root.selectedSpace.space_id;
            this.$router.push({ path: '/channels/' + this.$root.selectedSpace.space_id + '/channel_invitation' });
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
    }
}
</script>
<style scoped>

</style>