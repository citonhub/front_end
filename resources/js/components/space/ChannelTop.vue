<template>
     <div class="row py-1 my-0 px-1" >
         <div class="col-1 py-0 my-0 d-flex" style="align-items:center; justify-content:center;">
               <v-btn icon @click.stop="goBack"><v-icon color="white">mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-2 py-0 my-0 d-flex" style="align-items:center; justify-content:center;" >
            <div>
                
                <v-img v-if="this.$root.selectedSpace.type == 'Personal'" :background-color="this.$root.selectedSpace.background_color" :src="this.$root.selectedSpace.image_name == null ? 'imgs/user.svg' : '/imgs/space/'+ this.$root.selectedSpace.image_name +'.' + this.$root.selectedSpace.image_extension " height="36" width="36" class="avatarImg"  style="border:2px solid white;"></v-img>
                <v-img v-else :background-color="this.$root.selectedSpace.background_color" :src="this.$root.selectedSpace.image_name == null ? 'imgs/channel.svg' : '/imgs/space/'+ this.$root.selectedSpace.image_name +'.' + this.$root.selectedSpace.image_extension " height="36" width="36" class="avatarImg"  style="border:2px solid white;"></v-img>

            </div>  
         </div>
         <div class="col-6 py-0 my-0 pt-1 text-center"  @click="showSpaceInfo">
              <span class="TitleText d-block">{{this.$root.selectedSpace.name}}</span>
               <span class="typingText d-block" v-if="this.$root.typing">{{this.$root.typinguser}} is typing... </span>
         </div>
         <div class="col-3 py-0 my-0 px-0 text-right"  style="" >
              <v-btn icon @click.stop="channelProjects"><v-icon color="white">mdi-cards-variant</v-icon></v-btn>
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
              if(this.$root.selectedSpace.type ==  'Channel'){
               this.$router.push({ path: '/space/'  + this.$route.params.spaceId + '/channel/resources' });
              }else{
             this.$router.push({ path: '/space/'  + this.$route.params.spaceId + '/channel/projects' });
              }
            
        },
        showSpaceInfo:function(){
        this.$router.push({ path: '/space/' + this.$route.params.spaceId +   '/channel/board' });
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