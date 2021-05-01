<template>
 <div class="px-2 py-2 "  @click.stop="preventClose">

     <v-card class="col-lg-4 offset-lg-4 py-1  col-md-8 offset-md-2">
         
               <div class="row">

                  <template v-if="infoText == 'custom'">

                    <div class="px-0 mt-2">

                     <div  style="font-family:MediumFont; font-size:14px;" class="px-2">Welcome!</div>

                    <div class="col-12 py-1 pt-0 px-2 text-left">
                
                   <span style="font-family:BodyFont; font-size:13px; color:grey;">Here is your brand new channel where you engage your community.</span>
                    </div>

                      <div  style="font-family:MediumFont; font-size:14px;" class="mt-3 px-2">Set up your channel</div>

                     <div class="col-12 py-1 px-2 text-left">
                
                   <span style="font-family:BodyFont; font-size:13px; color:grey;">Create playlists from Youtube and curate the best resources for your channel </span>
                    </div>

                      <v-card tile flat  @click="handleSetUp('youtube')"  class="py-2 px-2 d-flex flex-row col-12" style="border-bottom:1px solid #c5c5c5;border-top:1px solid #c5c5c5;">
                     
                      <div class="mr-2">

                            <v-icon style="color:#FF0000;" >mdi mdi-youtube</v-icon>

                      </div>

                      <div>
                           <span style="font-family:BodyFont; font-size:13px;">Create playlists from Youtube</span>
                      </div>

                     </v-card>
                       <v-card tile flat   @click="handleSetUp('devto')"  class="py-2 px-2 d-flex flex-row col-12" style="border-bottom:1px solid #c5c5c5;">
                     
                      <div class="mr-2">
                        
                          <img  src="/imgs/devto.png" height="27px"  >

                      </div>

                      <div>
                           <span style="font-family:BodyFont; font-size:13px;">Create resources from DevTo</span>
                      </div>

                     </v-card>

                  

                       <div  style="font-family:MediumFont; font-size:14px;" class="mt-5 mb-2 px-2">Invite people</div>

                    </div>

                   

                  </template>
                  <template v-else>

                         <div class="col-12 py-1 text-center">

                   <span style="font-family:MediumFont; font-size:13px;">{{infoText}}</span>

                 </div>

                  </template>

            

                  <template v-if="!selectedExtraOptions">

                       <div class="col-12 py-1 text-center" v-if="infoText != 'custom'">

                   <span style="font-family:BodyFont; font-size:13px;color:grey;">{{extraInfo}}</span>

                 </div>

                  <div class="col-12  py-0">

                   <div class="row">

                  <v-card tile flat class="py-2 px-2 d-flex flex-row col-12" @click="copyLink" style="border-bottom:1px solid #c5c5c5;border-top:1px solid #c5c5c5;">
                     
                      <div class="mr-2">

                           <v-icon color="#3C87CD" class="mx-1">las la-link</v-icon> 

                      </div>

                      <div>
                           <span style="font-family:BodyFont; font-size:13px;">Copy invitation link</span>
                      </div>

                     </v-card>

                     <v-card tile flat class="py-2 px-2 d-flex flex-row col-12"  @click="shareToTwitter" style="border-bottom:1px solid #c5c5c5;">
                     
                      <div class="mr-2">

                           <v-icon color="#00acee" class="mx-1">las la-twitter</v-icon> 

                      </div>

                      <div>
                           <span style="font-family:BodyFont; font-size:13px;">Share to twitter</span>
                      </div>



                     </v-card>

                      <v-card tile flat class="py-2 px-2 d-flex flex-row col-12" @click="shareToWhatsapp" :style="fromChat ? 'border-bottom:1px solid #c5c5c5;' :''">
                     
                      <div class="mr-2">

                           <v-icon color="#4FCE5D" class="mx-1">las la-whatsapp</v-icon> 

                      </div>

                      <div>
                           <span style="font-family:BodyFont; font-size:13px;">Share to Whatsapp</span>
                      </div>

                     </v-card>
                   

                      <v-card v-if="fromChat && !that.$root.comingFromDiaryBank " tile flat class="py-2 px-2 d-flex flex-row col-12" @click.stop="mailInvite" style="border-bottom:1px solid #c5c5c5;">
                     
                      <div class="mr-2">

                           <v-icon color="#3C87CD" class="mx-1">las la-envelope</v-icon> 

                      </div>

                      <div>
                           <span style="font-family:BodyFont; font-size:13px;">Send invitation mail</span>
                      </div>

                     </v-card>

                       <v-card v-if="fromChat" tile flat class="py-2 px-2 d-flex flex-row col-12"  @click.stop="sendToConnections" >
                     
                      <div class="mr-2">

                           <v-icon color="#3C87CD" class="mx-1">las la-user-friends</v-icon> 

                      </div>

                      <div>
                           <span style="font-family:BodyFont; font-size:13px;">Invite your followers</span>
                      </div>

                     </v-card>

                   </div>

                 </div>

                  </template>

                  <template v-else>

                       <!-- send mail and invitation session -->
        <v-app class="col-12 px-0 py-1" style="background:transparent; font-family:BodyFont;  height:200px;" >
             
              <v-form class="col-12 py-0 my-0 text-center" ref="emailform" v-model="Emailformstate" v-if="purpose == 'mail'">
                 <div class="row py-0 my-0">

                <div class="col-12 px-1 py-0 pb-2 text-left">

                   <v-btn icon @click.stop="selectedExtraOptions = false">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>

              </div>
       

         <!-- send mail session -->
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
          color="#3C87CD"
          chips
        >
           <template v-slot:selection="data">
            <v-chip
              :key="JSON.stringify(data.item)"
              v-bind="data.attrs"
              :input-value="data.selected"
              color="#3C87CD"
              dense
              class="my-1"
              style="font-size:12px; font-family:BodyFont;"
              outlined
              :disabled="data.disabled"
          
            >
             
              {{ data.item }}
            </v-chip>

              </template>
        </v-combobox>

          

             </div>
       

        <div class="col-12 py-1 my-0 px-2 text-center">
                  <v-btn rounded :loading="loadingEmail"  small color="#3C87CD" style="font-size:11px;  color:white;font-family: MediumFont;" 
                    @click.stop="sendInviteMail">
                  {{ $t('general.invite') }}
                  </v-btn>
             </div>

           <!-- ends -->
              
                 </div>
                   



              </v-form>
          

          <!-- send to connections -->
               <v-form class="col-12 py-0 my-0 text-center" ref="connectionform" v-model="connectionformstate" v-if="purpose == 'connection'">
                 <div class="row py-0 my-0">

                      <div class="col-12 px-1 py-0 pb-2 text-left">

                   <v-btn icon @click.stop="selectedExtraOptions = false">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>

              </div>

                   <div class="col-12 py-2 my-0 px-2">

                      <select  style="font-size:14px !important; " :placeholder="$t('general.select') + '...'"   v-model="selectedConnections" class="browser-default custom-select">
                 <option v-for="(option,index)  in Connections" :value="option.username" :key="index">{{ option.name}}</option>
                     </select>
            

             </div>
        <div class="col-12 py-1 my-0 px-2 text-center">
                  <v-btn rounded :loading="loadingEmail" small color="#3C87CD" style="font-size:11px;  color:white;font-family: MediumFont;" 
                 @click.stop="sendToConnection" >
                   {{ $t('general.invite') }}
                  </v-btn>
             </div>
                   
              
                 </div>
              </v-form>

          <!-- ends -->
        </v-app>

      <!-- ends -->

                  </template>

                 
                
                  <input type="hidden" id="spacelink" :value="this.$root.shareLink">


               </div>

            </v-card>

 </div>
    
</template>
<script>



export default {
    props:['infoText','fromChat','alertComponent','extraInfo'],
    data(){
        return{
           Alert:false,
        alertMsg:'',
        mails:[],
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
          that:this,
       
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
      preventClose:function(){

      },
      handleSetUp:function(type){

         if(type == 'youtube'){
              this.$router.push({ path: '/channels/'+ this.$root.selectedSpace.space_id + '/playlists' });
         }

         if(type == 'devto'){
           
             this.$router.push({ path: '/channels/'+ this.$root.selectedSpace.space_id + '/resources' });
         }

      },
      sendToConnection: function(){
      
    
           
           if(this.selectedConnections){

            
              
              this.loadingConnection = true;
             axios.post('/send-to-connections',{
                space_id: this.$route.params.spaceId,
                connections: [this.selectedConnections]
                  })
          .then(response => {
            
            if (response.status == 200) {
                 
              this.loadingConnection = false;

               this.alertComponent.showAlert('Nice','Invitation sent','success');
          
            }
            
          })
          .catch(error => {
               this.alertComponent.showAlert('Oops!','Something went wrong,please try again','error')
              this.loadingConnection = false;
          })
      }
      },
      sendInviteMail: function(){

         
           
           
          if(this.mails.length == 0) return;
              
              this.loadingEmail = true;
             axios.post( '/send-space-invite-mail',{
                space_id: this.$route.params.spaceId,
                mails: this.mails
                  })
          .then(response => {
            
            if (response.status == 200) {
                 
              this.loadingEmail = false;

              this.alertComponent.showAlert('Nice','Invitation sent','success');
          
            }
            
          })
          .catch(error => {
             this.alertComponent.showAlert('Oops!','Something went wrong,please try again','error')
              this.loadingEmail = false;
          })
      

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
        let link = 'whatsapp://send?text='+ this.$root.shareText + ', ' + this.$root.shareLink;

         window.open(link, '_blank');

       
      },
      shareToTwitter: function(){
         let link = 'https://twitter.com/intent/tweet?' + 'url=' + this.$root.shareLink + '&text=' + this.$root.shareText;

        window.open(link, '_blank');   
       },
     
      showBot:function(){
                
         window.location =  this.$root.shareLink;
      },
     
       copyLink () {
        
        
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

      copyToClipboard( this.$root.shareLink);
      this.alertComponent.showAlert('Nice','Link copied','success');

         
        },


     
     
    },
   
}
</script>