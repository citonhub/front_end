<template>
    <v-card class="py-0 px-0 col-lg-4 col-md-8 col-10">

                                      <div class="col-12 px-0 py-1 d-flex flex-column">

                                           <v-card v-if="this.$root.selectedSpace.type == 'Direct'" tile flat class="px-2 py-2 d-flex flex-row" style="align-items:center;" @click="controlAction('profile')">

                                        

                                          <v-icon class="mr-1">las la-cog</v-icon>   <span style="font-family:BodyFont;font-size:13px;color:grey;">View profile</span>

                                         </v-card>
                                          <v-card tile flat v-if="this.$root.selectedSpace.type == 'Bot'"  class="px-2 py-2 d-flex flex-row" style="align-items:center;" @click="controlAction('diary')">


                                            <v-icon class="mr-1"> las la-cog</v-icon> <span style="font-family:BodyFont;font-size:13px;color:grey;">Diary info</span>

                                         </v-card>
                                         <v-card tile flat v-if="this.$root.selectedSpace.type == 'Channel' || this.$root.selectedSpace.type == 'SubSpace' || this.$root.selectedSpace.type == 'Team'" class="px-2 py-2 d-flex flex-row" style="align-items:center;" @click="controlAction('channel')">


                                             <v-icon class="mr-1">las la-cog</v-icon> <span style="font-family:BodyFont;font-size:13px;color:grey;">Channel info</span>

                                         </v-card>

                                      

                                          <v-card tile flat v-if="(this.$root.selectedSpace.type == 'Channel' || this.$root.selectedSpace.type == 'SubSpace' || this.$root.selectedSpace.type == 'Team') && this.$root.selectedSpace.payment_option == 'support'" class="px-2 py-2 d-flex flex-row" style="align-items:center;" @click="controlAction('support')">


                                            <v-icon class="mr-1">las la-hands-helping</v-icon> <span style="font-family:BodyFont;font-size:13px;color:grey;">Support {{ this.$root.selectedSpace.name }}</span>

                                         </v-card>

                                            <v-card tile flat v-if="(this.$root.selectedSpace.type == 'Channel' || this.$root.selectedSpace.type == 'SubSpace' || this.$root.selectedSpace.type == 'Team') && this.$root.selectedSpace.payment_option == 'support'" class="px-2 py-2 d-flex flex-row" style="align-items:center;" @click="controlAction('support_link')">


                                           <v-icon class="mr-1">las la-link</v-icon>   <span style="font-family:BodyFont;font-size:13px;color:grey;">Copy support link</span>

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

               if(type == 'support'){

                       this.$root.showProcessorFromChat = true;

                       this.$root.fromSupportDirectlink = true;

                      this.$router.push({ path: '/channels/'+ this.$root.selectedSpace.space_id + '/payment' });

               }

                 if(type == 'support_link'){

                     this.copyMessage();

               }

          },
            copyMessage () {


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

      copyToClipboard('https://www.citonhub.com/link/support/'+ this.$root.selectedSpace.space_id);

        this.$root.chatComponent.showAlert('Copied!','Copied to clipboard','success');

         
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