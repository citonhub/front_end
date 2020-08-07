<template>
     <div class="row py-1 my-0 px-1" >
         <div class="col-1 py-0 my-0 d-flex" style="align-items:center; justify-content:center;">
               <v-btn icon @click.stop="goBack"><v-icon color="white">mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-2 py-0 my-0 d-flex" style="align-items:center; justify-content:center;" >
            <div v-if="this.$root.selectedSpace.type != 'Direct'">
                
                <v-img v-if="this.$root.selectedSpace.type == 'Personal'" :background-color="this.$root.selectedSpace.background_color" :src="this.$root.selectedSpace.image_name == null ? 'imgs/usernew.png' : '/imgs/space/'+ this.$root.selectedSpace.image_name +'.' + this.$root.selectedSpace.image_extension " height="36" width="36" class="avatarImg"  style="border:2px solid white;"></v-img>
                <v-img v-else :background-color="this.$root.selectedSpace.background_color" :src="this.$root.selectedSpace.image_name == null ? 'imgs/team.png' : '/imgs/space/'+ this.$root.selectedSpace.image_name +'.' + this.$root.selectedSpace.image_extension " height="36" width="36" class="avatarImg"  style="border:2px solid white;"></v-img>

            </div> 
            <div v-else>
                
                <v-img :background-color="this.$root.selectedSpace.userInfo.background_color" :src="this.$root.selectedSpace.userInfo.image_name == null ? 'imgs/usernew.png' : '/imgs/profile/'+ this.$root.selectedSpace.userInfo.image_name +'.' + this.$root.selectedSpace.userInfo.image_extension " height="36" width="36" class="avatarImg"  style="border:2px solid white;"></v-img>
                

            </div>  
         </div>
         <div class="col-6 py-0 my-0 pt-1 text-center"  @click="showSpaceInfo">
           <div>
              
               <span class="TitleText d-block" v-if="this.$root.selectedSpace.type != 'Direct'"> {{shortenContent(this.$root.selectedSpace.name,22)}}</span>
              <span class="TitleText d-block" v-else @click.stop="viewUser()">{{shortenContent(this.$root.selectedSpace.userInfo.username,22)}}</span>
               <span class="typingText d-block" v-if="this.$root.typing">{{this.$root.typinguser}} is typing... </span>
                <span class="typingText d-block" v-if="!this.$root.typing && this.$root.selectedSpace.type != 'Direct' && this.$root.selectedSpaceMembers.length > 1">{{this.$root.selectedSpaceMembers.length}} Members</span>

           </div>
             
         </div>
         <div class="col-3 py-0 my-0 px-0 text-right"  style="" >
              <v-menu bottom left
                transition="slide-y-transition" dense
               z-index="9899996969696" tile>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

           <v-card  v-if="this.$root.selectedSpace.type ==  'Team'" tile flat class="py-2 text-center px-4" style="width:140px;  background:white;" @click="channelProjects">
             <span style="font-size:12px;">Projects</span>
           </v-card>
           <v-card  tile flat class="py-2 text-center px-4" style="width:140px; background:white;" @click="channelResources">
             <span style="font-size:12px;">Media</span>
           </v-card>
          </v-menu>
              
         </div>
      </div>

</template>
<script>
export default {
     data(){
        return{
       
        }
    },
     components: {
   
  },
    mounted(){
     
    },
    methods:{
       goBack() {
            this.$router.push({ path: '/space/chat-list'});
        
        },
        channelProjects: function(){
              
             this.$router.push({ path: '/space/'  + this.$route.params.spaceId + '/channel/projects' });

            
        },
        channelResources:function(){
        this.$router.push({ path: '/space/'  + this.$route.params.spaceId + '/channel/resources' });
        },
        showSpaceInfo:function(){
           if(this.$root.selectedSpace.type == 'Direct'){
              return;
           };
        this.$router.push({ path: '/space/' + this.$route.params.spaceId +   '/channel/board' });
       },
        shortenContent: function(content,limit){
             if(content != undefined){
             
             if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                 return shortcontent + '...';
             }else{
               return content;
             }
             
             }
             
        },
        viewUser: function(){
        this.$root.pageloader = true;
        window.location = '/view-profile#/profile/activities/'+ this.$root.selectedSpace.userInfo.username;
    },
  
  },
}
</script>
<style>
.TitleText{
    color: white;
    font-size: 12px;
}
.typingText{
    font-size: 10px;
    color: white;
}
</style>