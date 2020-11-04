<template>
     <div  style="background:transparent; font-family:BodyText; z-index:9998999889090999;">

       <div class="   col-lg-6 offset-lg-3 py-0 px-0 my-0" style="  position:fixed;  background:rgba(38, 82, 89,0.4); height:100%; overflow-y:auto; overflow-x:hidden; z-index:9998999889090999;" 
         @click="closeShare">
         <div class="row my-0 py-0 px-2">


       

       <div @click.stop="preventClose" class="py-1 my-0" style=" background-color:white;position:absolute;bottom:0%; height:60%; width:100%; left:0; overflow-y:hidden; overflow-x:hidden; ">
           
          
           <div class="col-12 py-1" >
        <div class="row"  v-if="!selectedExtraOptions">
           
         
                
                <div class="col-12 px-2 py-0">
                       <v-card tile flat class="col-12 py-2 px-0 my-1" color="#edf6f7" style="border:1px solid #5fb0b9;" @click.stop="shareToWhatsapp">
                <div class="row py-0 my-0 px-0">
                    
                    <div class="col-2 d-flex py-0 my-0" style="align-items:center; justify-content:center;">
                        <v-icon color="#35747e" class="mx-1">mdi-whatsapp</v-icon> 
                    </div>
                     <div class="py-0 my-0 d-flex col-8" style="align-items:center; justify-content:center;">
                        <span class="titleTextNew">{{ $t('general.share_whatsapp') }}</span>
                    </div>
                     <div class="col-2 d-flex" style="align-items:center; justify-content:center;">
                       
                    </div>
                    
                    
                </div>
             </v-card>

              <v-card tile flat class="col-12 py-2 px-0 my-1" color="#edf6f7" style="border:1px solid #5fb0b9;" @click.stop="shareToTwitter">
                <div class="row py-0 my-0 px-0">
                    
                    <div class="col-2 d-flex py-0 my-0" style="align-items:center; justify-content:center;">
                        <v-icon color="#35747e" class="mx-1">mdi-twitter</v-icon> 
                    </div>
                     <div class="py-0 my-0 d-flex col-8" style="align-items:center; justify-content:center;">
                        <span class="titleTextNew">{{ $t('general.share_twitter') }}</span>
                    </div>
                     <div class="col-2 d-flex" style="align-items:center; justify-content:center;">
                       
                    </div>
                    
                    
                </div>
             </v-card>

              <v-card tile flat class="col-12 py-2 px-0 my-1" color="#edf6f7" style="border:1px solid #5fb0b9;" @click.stop="shareToFacebook">
                <div class="row py-0 my-0 px-0">
                    
                    <div class="col-2 d-flex py-0 my-0" style="align-items:center; justify-content:center;">
                        <v-icon color="#35747e" class="mx-1">mdi-facebook</v-icon> 
                    </div>
                     <div class="py-0 my-0 d-flex col-8" style="align-items:center; justify-content:center;">
                        <span class="titleTextNew">{{ $t('general.share_facebook') }}</span>
                    </div>
                     <div class="col-2 d-flex" style="align-items:center; justify-content:center;">
                       
                    </div>
                    
                    
                </div>
             </v-card>

              <v-card tile flat class="col-12 py-2 px-0 my-1" color="#edf6f7" style="border:1px solid #5fb0b9;" @click.stop="mailInvite" v-if="this.$root.fromSpaceShare">
                <div class="row py-0 my-0 px-0">
                    
                    <div class="col-2 d-flex py-0 my-0" style="align-items:center; justify-content:center;">
                        <v-icon color="#35747e" class="mx-1">mdi-email</v-icon> 
                    </div>
                     <div class="py-0 my-0 d-flex col-8" style="align-items:center; justify-content:center;">
                        <span class="titleTextNew">{{ $t('general.mail_link') }}</span>
                    </div>
                     <div class="col-2 d-flex" style="align-items:center; justify-content:center;">
                       
                    </div>
                    
                    
                </div>
             </v-card>

              <v-card tile flat class="col-12 py-2 px-0 my-1" color="#edf6f7" style="border:1px solid #5fb0b9;" @click.stop="sendToConnections" v-if="this.$root.fromSpaceShare">
                <div class="row py-0 my-0 px-0">
                    
                    <div class="col-2 d-flex py-0 my-0" style="align-items:center; justify-content:center;">
                        <v-icon color="#35747e" class="mx-1">mdi-account-group</v-icon> 
                    </div>
                     <div class="py-0 my-0 d-flex col-8" style="align-items:center; justify-content:center;">
                        <span class="titleTextNew">{{ $t('general.send_connection') }}</span>
                    </div>
                     <div class="col-2 d-flex" style="align-items:center; justify-content:center;">
                       
                    </div>
                    
                    
                </div>
             </v-card>

              <v-card tile flat class="col-12 py-2 px-0 my-1" color="#edf6f7" style="border:1px solid #5fb0b9;" @click.stop="copyLink" >
                <div class="row py-0 my-0 px-0">
                    
                    <div class="col-2 d-flex py-0 my-0" style="align-items:center; justify-content:center;">
                        <v-icon color="#35747e" class="mx-1">mdi-link</v-icon> 
                    </div>
                     <div class="py-0 my-0 d-flex col-8" style="align-items:center; justify-content:center;">
                        <span class="titleTextNew">{{ $t('general.copy_link') }}</span>
                    </div>
                     <div class="col-2 d-flex" style="align-items:center; justify-content:center;">
                       
                    </div>
                    
                    
                </div>
             </v-card>
              <input type="hidden" id="spacelink" :value="this.$root.shareLink">

                </div>
                 
        

         
            
        </div>

        <v-app class="row" style="background:transparent; font-family:BodyText;  " v-else>
              <v-form class="col-12 py-2 my-0 text-center" ref="emailform" v-model="Emailformstate" v-if="purpose == 'mail'">
                 <div class="row py-0 my-0">

                   <div class="col-12 py-2 my-0 px-2">
               <v-combobox
          v-model="mails"
          :items="items"
          label="E-mails"
          :rules="emailRule"
          style="font-size:13px;"
          multiple
          placeholder="Type e-mails"
          dense
          color="#3E8893"
          chips
        ></v-combobox>

          

             </div>
       

        <div class="col-12 py-1 my-0 px-2 text-center">
                  <v-btn rounded :loading="loadingEmail"  small color="#3E8893" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;" 
                    @click.stop="sendInviteMail">
                  {{ $t('general.invite') }}
                  </v-btn>
             </div>
                   
              
                 </div>
                   



              </v-form>

               <v-form class="col-12 py-2 my-0 text-center" ref="connectionform" v-model="connectionformstate" v-if="purpose == 'connection'">
                 <div class="row py-0 my-0">

                   <div class="col-12 py-2 my-0 px-2">
               <v-combobox
          v-model="selectedConnections"
          :items="Connections"
          :label="$t('space.your_connections')"
           style="font-size:13px;"
          item-text="name"
          item-value="username"
          hide-selected
           :loading="loadingConnection"
          multiple
          dense
          :placeholder="$t('general.select') + '...'"
          color="#3E8893"
          chips
        ></v-combobox>

          

             </div>
       

        <div class="col-12 py-1 my-0 px-2 text-center">
                  <v-btn rounded :loading="loadingEmail" small color="#3E8893" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;" 
                 @click.stop="sendToConnection" >
                   {{ $t('general.invite') }}
                  </v-btn>
             </div>
                   
              
                 </div>
                   



              </v-form>
        </v-app>
     </div>
     
     <v-fade-transition>
              <div  style="position:absolute; width:100%; height:auto: align-items:center;justify-content:center;bottom:40%; z-index:99923453566;"  class="d-flex">
             <v-alert
      v-model="Alert"
      dismissible
      close-icon="mdi-delete"
      color="#3E8893"
      dense
       
       style="font-size:13px;background:#dbedf0;"
       height="auto"
      
     
      elevation="2"
     
     
    >
      {{alertMsg}}
    </v-alert>
        </div>
        </v-fade-transition>
       
       </div>
     </div>
      </div>

      
     </div>
</template>
<script>


export default {
    data(){
        return{
           Alert:false,
        alertMsg:'',
        mails:'',
        items:[],
         emailRule: [
            v => !!v || 'Email is required',
            
            ],
          Emailformstate: false,
          loadingEmail:false,
          selectedConnections:'',
          purpose: '',
          connectionformstate: false,
          Connections:[],
          loadingConnection:false,
          selectedExtraOptions: false,
       
        }
    },
    components: {
   
  },
   mounted(){
     
    },
    methods:{
      sendToConnections:function(){
        this.selectedExtraOptions = true;

        this.purpose = 'connection';
        this.fetchConnected();
      },
      mailInvite: function(){

        this.selectedExtraOptions = true;

        this.purpose = 'mail';

         

      },
      sendToConnection: function(){
      
      this.$refs.connectionform.validate();
           
           if(this.connectionformstate){

            
              
              this.loadingConnection = true;
             axios.post('/send-to-connections',{
                space_id: this.$route.params.spaceId,
                connections: this.selectedConnections
                  })
          .then(response => {
            
            if (response.status == 200) {
                 
              this.loadingConnection = false;

              this.showAlert(5000, 'Sent to Connections');
          
            }
            
          })
          .catch(error => {
             this.showAlert(5000, '😬 ' + 'Failed- ' + error);
              this.loadingConnection = false;
          })
      }
      },
      sendInviteMail: function(){

         
           this.$refs.emailform.validate();
           
           if(this.Emailformstate){

            
              
              this.loadingEmail = true;
             axios.post( '/send-space-invite-mail',{
                space_id: this.$route.params.spaceId,
                mails: this.mails
                  })
          .then(response => {
            
            if (response.status == 200) {
                 
              this.loadingEmail = false;

              this.showAlert(5000, 'Invitation sent');
          
            }
            
          })
          .catch(error => {
             this.showAlert(5000, '😬 ' + 'Failed- ' + error);
              this.loadingEmail = false;
          })
       }

      },
      fetchConnected: function(){

      this.loadingConnection = true;
          
           axios.get( '/fetch-connected' )
      .then(response => {
      
      if (response.status == 200) {
        
       this.Connections = response.data.data;
        this.loadingConnection = false;
     }
       
     
     })
     .catch(error => {
       this.loadingConnection = false;
     }) 

        },
     showAlert:function(duration,text){
        this.Alert = true;
        this.alertMsg = text;
        let _this = this;
     
     setTimeout(function(){
        _this.Alert = false;
     },duration);

    },
      closeShare:function(){

        this.$root.fromSpaceShare = false;
          this.$root.showShare = false;
         
      },
      preventClose: function(){

      },
      shareToWhatsapp:function(){
        let link = 'whatsapp://send?text=' + this.$root.shareLink + '. Sent from CitonHub.';
         window.location =  link;
      },
      shareToTwitter: function(){
         let link = 'https://twitter.com/intent/tweet?' + 'url=' + this.$root.shareLink + '&text=Sent from CitonHub.';
         window.location =  link;
      },
      shareToFacebook:function(){
          let link = 'https://www.facebook.com/sharer/sharer.php?u=' + this.$root.shareLink + '. Sent from CitonHub.';
         window.location =  link;
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
.titleTextNew{
    font-size:13px; 
    font-family:HeaderText; 
    color:#35747e;
}
</style>