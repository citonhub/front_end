<template>
 <div class="px-2 py-2 "  @click.stop="preventClose">

     <v-card class="col-lg-4 offset-lg-4 py-1  col-md-8 offset-md-2">
         
               <div class="row">

                 <div class="col-12 py-1 text-center">

                   <span style="font-family:BodyFont; font-size:13px;">{{infoText}}</span>

                 </div>

                  <template v-if="!selectedExtraOptions">

                       <div class="col-12 py-1 text-center">

                   <span style="font-family:BodyFont; font-size:13px;color:grey;">Now, invite others to your channel</span>

                 </div>

                  <div class="col-12  py-0">

                   <div class="row">

                  <v-card tile flat class="py-2 px-2 d-flex flex-row col-12" @click.stop="copyLink" style="border-bottom:1px solid #c5c5c5;border-top:1px solid #c5c5c5;">
                     
                      <div class="mr-2">

                           <v-icon color="#3C87CD" class="mx-1">las la-link</v-icon> 

                      </div>

                      <div>
                           <span style="font-family:BodyFont; font-size:13px;">Copy invitation link</span>
                      </div>

                     </v-card>

                     <v-card tile flat class="py-2 px-2 d-flex flex-row col-12"  @click.stop="shareToTwitter" style="border-bottom:1px solid #c5c5c5;">
                     
                      <div class="mr-2">

                           <v-icon color="#00acee" class="mx-1">las la-twitter</v-icon> 

                      </div>

                      <div>
                           <span style="font-family:BodyFont; font-size:13px;">Share to twitter</span>
                      </div>



                     </v-card>

                      <v-card tile flat class="py-2 px-2 d-flex flex-row col-12" @click.stop="shareToWhatsapp" :style="fromChat ? 'border-bottom:1px solid #c5c5c5;' :''">
                     
                      <div class="mr-2">

                           <v-icon color="#4FCE5D" class="mx-1">las la-whatsapp</v-icon> 

                      </div>

                      <div>
                           <span style="font-family:BodyFont; font-size:13px;">Share to Whatsapp</span>
                      </div>

                     </v-card>
                   

                      <v-card v-if="fromChat" tile flat class="py-2 px-2 d-flex flex-row col-12" @click.stop="mailInvite" style="border-bottom:1px solid #c5c5c5;">
                     
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
               <v-select
          v-model="selectedConnections"
          :items="Connections"
          label="Invite followers"
           style="font-size:13px;"
          item-text="name"
          item-value="username"
          hide-selected
           :loading="loadingConnection"
          multiple
          dense
          :placeholder="$t('general.select') + '...'"
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
             
              {{ data.item.name }}
            </v-chip>

              </template>
           
        </v-select>
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
    props:['infoText','fromChat','alertComponent'],
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
      preventClose:function(){

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

              this.alertComponenthis.showAlert('Nice','Invitation sent','success');
          
            }
            
          })
          .catch(error => {
             this.alertComponent.showAlert('Oops!','Something went wrong,please try again','error')
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
          let spacelink = document.querySelector('#spacelink')
          spacelink.setAttribute('type', 'text')  
          spacelink.select()

          try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
              if(msg == 'successful'){
                  this.alertComponent.showAlert('Nice','Link copied','success');
              }else{
                  this.alertComponent.showAlert('Oops','Unable to copy link','error');
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