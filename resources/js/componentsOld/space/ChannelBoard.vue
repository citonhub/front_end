<template>
      <div class="scrollerStyle" style="position:absolute; height:92%; width:100%; overflow-y:auto;left:0;top:8%;">

         <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-0" >
           <div class="col-12 py-0 px-1 ">
             <v-btn icon color="#3E8893" @click="goBack"><v-icon>mdi-close mdi-18px</v-icon></v-btn>
          </div>

          <!-- larger  image  view-->
          <div class="col-12 py-0 px-0 d-flex" style="align-items:center; justify-content:center;">
              <div v-if="this.$root.selectedSpace.type != 'Bot'">

   <v-img  @click.stop="viewFullImage(that.$root.selectedSpace)" :background-color="this.$root.selectedSpace.background_color" :src="this.$root.selectedSpace.image_name == null ? 'imgs/team.png' : '/imgs/space/'+ this.$root.selectedSpace.image_name +'.' + this.$root.selectedSpace.image_extension " height="130" width="130" class="avatarImg" style="border:3px solid #3E8893;"></v-img>
              </div>

              <div v-if="this.$root.selectedSpace.bot_data != undefined && this.$root.selectedSpace.type == 'Bot'">

   <v-img  @click.stop="viewFullImage(that.$root.selectedSpace.bot_data)" :background-color="this.$root.selectedSpace.bot_data.background_color" :src="this.$root.selectedSpace.bot_data.image_name == null ? 'imgs/team.png' : '/imgs/space/'+ this.$root.selectedSpace.bot_data.image_name +'.' + this.$root.selectedSpace.bot_data.image_extension " height="130" width="130" class="avatarImg" style="border:3px solid #3E8893;"></v-img>
              </div>
          </div>

          <!-- ends -->

          <!-- channel name and description -->

           <div class="col-12 py-1 px-2 text-center">
              <div>
                 <span class="TitleName">{{ $t('space.channel_name') }}</span>
              </div>
              <div>
                 <span class="content">{{this.$root.selectedSpace.name}}</span>
              </div>
          </div>

          <div class="col-12 py-1 px-2 text-center">
              <div>
                 <span class="TitleName">{{ $t('general.description') }}</span>
              </div>
              <div>
                 <span class="contentdesc" v-if="this.$root.selectedSpace.description != null" v-html="this.$root.selectedSpace.description"></span>
                 <span v-else class="contentdescnull">{{ $t('space.channel_desc') }}</span>
              </div>
          </div>

          <!-- ends -->

   <!-- space edit button -->
          <div class="col-12 py-2 my-0 px-0 text-center" v-if="checkIfisOwner() && this.$root.selectedSpace.type != 'SubSpace' && this.$root.selectedSpace.type != 'Bot'">
                   <v-btn @click="editSpace" rounded small color="#3E8893" style="font-size:10px; color:white;text-transform:capitalize;">{{ $t('general.edit') }}</v-btn>
                </div>
          <!-- ends -->


    <!-- space members view  -->
          <div class="col-12 px-2 py-1 pt-2"  v-if="this.$root.selectedSpace.type != 'Bot'">
               <v-card tile flat class=" py-2 px-2 " color="#edf6f7" style="border-bottom:1px solid #3E8893; border-top:1px solid #3E8893;" @click="channelMembers">
              <div class="row py-0 my-0">
                <div class="col-6 py-0 my-0 ">
                   <span class="content" style="font-size:12px;">{{ $t('space.members') }}</span>
                </div>
                <div class="py-0 my-0 col-6 text-right" >
                       <span class="messagesBadges">
                             <span class="">{{this.$root.selectedSpaceMembers.length}}</span>
                          </span>
                    </div>
              </div>

          </v-card>
          </div>

      <!-- ends -->


   <!-- contains the leave and invite buttons -->
           <div class="col-12 px-2 py-1"  v-if="this.$root.selectedSpace.type != 'Bot'">
               <v-card tile flat class=" py-2 px-2 " color="#edf6f7" style="border-bottom:1px solid #3E8893; border-top:1px solid #3E8893;">
              <div class="row py-0 my-0">
                <div class="col-4 py-0 my-0 text-left">
                   <v-btn rounded x-small color="#3E8893" :loading="loadingLeave" @click="leaveSpace" style="font-size:10px; color:white; text-transform:capitalize;">{{ $t('space.leave') }}</v-btn>
                </div>
                <div class="col-4 py-0 my-0 px-0 text-center">

                </div>
                <div class="py-0 my-0 col-4 text-right" v-if="checkIfisOwner()">
                  <v-btn rounded x-small color="#3E8893" style="font-size:10px;color:white;text-transform:capitalize;" @click="share">invite</v-btn>


                    </div>
              </div>

          </v-card>
          </div>

           <div class="col-12 px-2 py-1"  v-if="this.$root.selectedSpace.type == 'Bot'">
               <v-card tile flat class=" py-2 px-2 " color="#edf6f7" style="border-bottom:1px solid #3E8893; border-top:1px solid #3E8893;">
              <div class="row py-0 my-0">
                <div class="col-12 py-0 my-0 text-center">
                   <v-btn rounded x-small color="#3E8893"  @click="leaveSpace" style="font-size:10px; color:white; text-transform:capitalize;">{{ $t('space.leave') }}</v-btn>
                </div>

              </div>

          </v-card>
          </div>
    <!-- ends -->
   
      
       <!-- team projects -->

             <div class="col-12 py-2 my-0 px-0 text-center" v-if="this.$root.selectedSpace.type == 'Team'">
                   <v-btn @click="channelProjects" rounded x-small color="#3E8893" style="font-size:10px; color:white;text-transform:capitalize;">{{ $t('space.team_project') }}</v-btn>
                </div>
        <!-- ends -->







         </div>
         </div>
<v-fade-transition>
              <div  style="position:absolute; width:100%; height:auto: align-items:center;justify-content:center;bottom:10%; z-index:123453566;"  class="d-flex">
             <v-alert
      v-model="Alert"
      dismissible
      close-icon="mdi-delete"
      color="#3E8893"
       width="auto"
       style="font-size:13px;background:#dbedf0;"
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
        SpaceMembers:[],
        loadingLeave: false,
        that:this
        }
    },
     components: {

  },
    mounted(){
      window.Echo.leave('space.' + this.$root.selectedSpace.space_id);


      if(this.$root.reloadSpaceInfo){

        this.fetchSpaceInfo();

      }

    },
    methods:{
      channelProjects: function(){

             this.$router.push({ path: '/space/'  + this.$route.params.spaceId + '/channel/projects' });


        },
        fetchSpaceInfo: function(){

            axios.get('/fetch-space-info-'+ this.$route.params.spaceId)
   .then(response => {

   if (response.status == 200) {



       this.$root.selectedSpace = response.data;
  }


  })
  .catch(error => {

  })


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
       leaveSpace: function(){
         this.loadingLeave = true;
        axios.post('/leave-space',{
           'space_id':this.$route.params.spaceId
        } )
      .then(response => {

      if (response.status == 200) {


         if(this.$root.selectedSpace.type == 'Channel'){

             this.$root.removeLocalStorage(this.$route.params.spaceId);

           if(this.$root.ChatList[2].length != 0){



                 let remainingSpace = this.$root.ChatList[2].filter((space)=>{
                   return    space.space_id != this.$route.params.spaceId
                 });

                 this.$root.ChatList[2] = remainingSpace;


                  this.$root.LocalStore('ChatList' + this.$root.username,this.$root.ChatList);
              }

         }

         if(this.$root.selectedSpace.type == 'Team'){

           if(this.$root.ChatList[1].length != 0){



                 let remainingSpace = this.$root.ChatList[1].filter((space)=>{
                   return    space.space_id != this.$route.params.spaceId
                 });

                 this.$root.ChatList[1] = remainingSpace;

                  this.$root.LocalStore('ChatList' + this.$root.username,this.$root.ChatList);
              }

         }




              this.$router.push({ path: '/space/chat-list' });


     }


     })
     .catch(error => {
          this.loadingLeave = false;
       this.showAlert(5000,'Oops!, An error occured')
     })
       },

       goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        channelMembers: function(){

              this.$router.push({ path: '/space/' + this.$route.params.spaceId + '/channel/members' });
        },
        editSpace:function(){
                 this.$router.push({ path: '/space/' + this.$route.params.spaceId + '/channel/edit' });
        },
         showAlert:function(duration,text){
        this.Alert = true;
        this.alertMsg = text;
        let _this = this;

     setTimeout(function(){
        _this.Alert = false;
     },duration);

    },
    share:function(){
        this.$root.fromSpaceShare = true;
       this.$root.shareText = 'Join ' + this.$root.selectedSpace.name +  ' ' +  this.$root.selectedSpace.type  +' on Citonhub';
       this.$root.shareLink =   'https://www.citonhub.com/link/space/'+ this.$route.params.spaceId + '/' + this.$root.username;
      this.$root.showShare = true;
    },
     viewFullImage:function(data){
           if(data.image_name == null){
                return;
           }
        var imageData = data;
            this.$root.fullImageViewer = true;
            this.$root.fullImageColor = imageData.background_color;
            this.$root.imageViewPath = 'imgs/space/' + imageData.image_name + '.' + imageData.image_extension;

            this.$router.push({ path: '/image-viewer'});
        },
        copyLink () {
          let spacelink = document.querySelector('#spacelink')
          spacelink.setAttribute('type', 'text')
          spacelink.select()

          try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
              if(msg == 'successful'){
                this.showAlert(5000,'Link Copied!')
              }else{
                 this.showAlert(5000,'Unable to Copy Link')
              }
          } catch (err) {

          }

          /* unselect the range */
          spacelink.setAttribute('type', 'hidden')
          window.getSelection().removeAllRanges()
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
.TitleName{
  font-size: 12px;
  color: #a6a6a6;
}


.content{
    font-size: 14px;

    color:rgb(38, 82, 89);
}

.contentdesc{
    font-size: 11px;

    color:rgb(38, 82, 89);
}
.contentdescnull{
    font-size: 11px;

    color:grey;
}
.messagesBadges{

    color: #3e868e;
    background: #ffffff;
    font-size: 11px;
    padding: 5px 7px;
    border:2px solid #3e868e;
    border-radius:50%;
}
</style>