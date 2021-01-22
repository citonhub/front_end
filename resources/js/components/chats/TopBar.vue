<template>
    <div>
        <!-- large and medium screen top bar -->
    
   

     <!-- top bar smaller screen -->

       <div class="col-12 d-block d-md-none py-2 " style="position:absolute; top:0; left:0; font-family:BodyFont; z-index:99999999999;background:#ffffff;">

         <div class="row px-2">
             <v-card  style="border-radius:7px;" class="col-12 py-2 px-1">
                   <div class="row">
                   <div class="col-2 py-0  text-center">
                 <v-btn icon @click="that.$root.showSideBar = true"><v-icon style="font-size:25px;color:#263238;" >las la-bars</v-icon></v-btn>
            </div>
             <div class="col-6 d-flex py-0 px-1" style="justify-content:center;align-items:center;">

             <input style="width:100%;heigth:100%;font-size:12px;"   @input="searchChatList"
                       v-model="searchValue"  placeholder="Search" class="py-2 px-2" type="search" >       
         
            </div>
              <div class="col-2 text-center py-0">
                 <template v-if="this.$root.authProfile.name" >

                      <v-btn icon  @click="goToNotification"> 
                   <v-badge
                   dot
                   v-if="this.$root.authProfile.unread > 0"
                color="green">
                <v-icon style="font-size:23px;color:#263238;" >las la-bell</v-icon>
                   </v-badge>

                    <v-icon style="font-size:23px;color:#263238;" v-else >las la-bell</v-icon>
                </v-btn>

                  </template>
            </div>
             <div class="col-2 d-flex px-1 py-0" style="justify-content:center; align-items:center;">

                <template v-if="this.$root.authProfile.name">
                 <div :style="imageStyleUser(32,this.$root.authProfile)" @click="showProfile"></div>
                </template>
            </div>
                   </div>
             </v-card>
         </div>

     </div>

     <!-- ends -->
    </div>
</template>
<script>
export default {
     data () {
      return {
       showSideBar:false,
       searchType:'',
       that:this,
       searchValue:'',
      }
    },
    mounted(){
      this.$root.TopBarComponentChat = this;
    },
    methods:{
       goToNotification: function(){

        this.$router.push({ path:'/board/notifications'});

      },
        showProfile:function(){

           this.$router.push({ path:'/profile/' + this.$root.username});

      },
      searchChatList:function(){

    

       let chatListResult = this.$root.ChatList.filter((chat)=>{

          let nameValue = '';

          if(chat.type == 'Team' || chat.type == 'Channel'){

             nameValue = chat.name.toLowerCase();

          }

          if(chat.type == 'Bot' && chat.bot_data != null){
             nameValue = chat.bot_data.name.toLowerCase();
          }

          if(chat.type == 'Direct'){

            nameValue = chat.userInfo.username.toLowerCase()

          }

        
         
      return nameValue.includes(this.searchValue.toLowerCase());

       

                
       });

       

      this.$root.searchChatList = chatListResult;

    },
     imageStyleUser:function(dimension,data){

      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;";
         
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
        
         
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5; ";
         let imgLink = data.image_name + '.' + data.image_extension;
         
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/profile/'  + imgLink  +  ');';
         
         
          return styleString;
      }
     },
    }
}
</script>
<style scoped>

</style>