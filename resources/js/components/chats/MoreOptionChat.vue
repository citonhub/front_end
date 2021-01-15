<template>
    <v-card class="py-0 px-0" style="width:200px;">

                                      <div class="col-12 px-0 py-1 d-flex flex-column">

                                           <v-card v-if="this.$root.selectedSpace.type == 'Direct'" tile flat class="px-2 py-2 d-flex flex-row" style="align-items:center;" @click="controlAction('profile')">

                                        

                                            <span style="font-family:BodyFont;font-size:13px;color:grey;">View profile</span>

                                         </v-card>
                                          <v-card tile flat v-if="this.$root.selectedSpace.type == 'Bot'"  class="px-2 py-2 d-flex flex-row" style="align-items:center;" @click="controlAction('diary')">


                                            <span style="font-family:BodyFont;font-size:13px;color:grey;">Diary info</span>

                                         </v-card>
                                         <v-card tile flat v-if="this.$root.selectedSpace.type == 'Channel' || this.$root.selectedSpace.type == 'SubSpace' || this.$root.selectedSpace.type == 'Team'" class="px-2 py-2 d-flex flex-row" style="align-items:center;" @click="controlAction('channel')">


                                            <span style="font-family:BodyFont;font-size:13px;color:grey;">Channel info</span>

                                         </v-card>

                                      </div>

                                     

                                   </v-card>
</template>
<script>
export default {

     methods:{
          controlAction:function(type){

               if(type == 'profile'){

                     this.goToProfile(this.$root.selectedSpace.userInfo.username) 

               }

               if(type == 'channel'){

                    this.$router.push({ path: '/channels/'+ this.$root.selectedSpace.space_id + '/channel_info' });

               }

               if(type == 'diary'){

                    this.$router.push({ path: '/channels/'+ this.$root.selectedSpace.space_id + '/channel_info' });

               }

          },
            goToProfile:function(username){
        this.$root.selectedUsername = username;
         this.$router.push({ path:'/profile-view/' + username})
      },
     }
    
}
</script>
<style scoped>

</style>