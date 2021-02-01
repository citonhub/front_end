<template>
     <div style="position:absolute;height:100%;width:100%;" >

                     <div class="col-12 my-0 py-2 d-flex  scroller " style="overflow-x:auto; white-space:nowrap; z-index:9999999999;
                      border-top-left-radius:6px;  border-top-right-radius:6px; left:0;background:#F3F8FC; ">
                 
                 <v-btn class="d-inline-block" @click="goBack" small icon style="position:sticky;left:0px;">
                      <v-icon color="#3C87CD" >mdi mdi-close mdi-18px</v-icon>
                 </v-btn>
                 
                <v-chip v-for="(participant,index) in participants" :key="index"
      class="ma-1 mx-1 ml-0 fileText "
        @click="showPage(participant)"
      small
   :style="selecetedPanelId == participant.panel_id ? 'color:white;background-color:#3C87CD;' : 'background:transparent;border:1px solid #3C87CD;'"
      >
     <span  v-if="participant.type == 'user'" >{{participant.username}}</span>
     <span  v-if="participant.type == 'team'" >{{participant.team.name}}</span>
    </v-chip>  

              </div>

      <!-- shows when page content is loading -->
      <div 
        v-if="pageContent == '' && loading"
    style="border: 0; height:80%; top:5%;left:0; z-index:99999999999; align-items:center; justify-content:center;" class=" px-5 col-lg-4 offset-lg-4 px-1 py-0 d-flex" >
         <v-progress-circular color="#3C87CD" indeterminate width="3" size="28" ></v-progress-circular>
       </div>
    
  <!-- ends -->


   <!-- page content view -->
   
          <!-- for HTML contents -->
            
     <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals" v-if="pageContent != '' && participantSelected.is_web"
  :srcdoc="pageContent" 
   class="col-12 mt-0  px-0 py-0" style="  height:100%; background:white;border:1px solid transparent; border-radius:0px;z-index:9999999999;"  ></iframe>
       <!-- ends -->
       
    <!-- for non-web content -->
   <textarea v-model="pageContent" readonly v-if="pageContent != '' && !participantSelected.is_web"   class="col-12 mt-0 mt-md-1" style=" font-size:14px;  top:0; height:100%; left:0;  background:white;border:1px solid transparent; border-radius:0px;"  >
       
    </textarea>

     <!-- ends -->
       

   <!-- ends -->


         <!-- voter -->

          <div style="position:absolute;width:100%; left:0%; bottom:0%; background: rgba(60, 135, 205); z-index:9999999999999999999;" class="py-2 px-2">

              <div class="row">

                  <div class="col-3 py-0 px-0">

                  </div>

                  <div class="col-6 py-0 px-0 d-flex flex-row" style="align-items:center; justify-content:center;">
                  
                   <template  v-if="votes.length != 0">

                       <span  v-if="selectedParticipantId == ''"><v-icon color="#ffffff">mdi-star</v-icon><span style="font-size:12px; color:white;" class="px-1">{{ $t('duels.votes') }}</span> </span>
                     
                       <template v-if="this.$route.params.type == 'vote'">

                            <div v-for="(vote,index) in votes" :key="index">
                      <v-rating v-model="vote.stars" @input="SaveVotes()"  color="#ffffff"  v-if="vote.participant_id == selectedParticipantId"></v-rating>
                   </div>

                       </template>

                        <div v-else>
                   <span><v-icon color="#ffffff">mdi-star</v-icon><span style="font-size:13px; color:white;" class="px-1">{{participantSelected.votes}} {{ $t('duels.votes') }}</span> </span>
                     </div>
                      
                    

                   </template>

                    <div v-else>
                   <span><v-icon color="#ffffff">mdi-star</v-icon><span style="font-size:13px; color:white;" class="px-1">{{participantSelected.votes}} {{ $t('duels.votes') }}</span> </span>
                     </div>

                     

                  
                       

                  </div>

                  <div class="col-3 py-0 px-0">

                  </div>

              </div>

          </div>

         <!-- ends -->

       
       <v-btn medium fab color="#3C87CD"  @click="goTopanel" class="d-inline-block " style="z-index:999999999999999;  position:absolute;  bottom:8%; right:2%; ">

        <v-icon style="font-size:25px; color:white;">las la-laptop-code</v-icon>
         
     </v-btn>




               </div>

            
</template>
<script>

import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

export default {
      mounted(){
      
      this.checkState();
      
      },
     components: {


    },
     computed: {

   },
    data(){
        return{
          participants: [],
          selecetedPanelId:'',
          pageContent:'',
          selectedParticipantId:'',
          loading:false,
          saveLoading: false,
          Alert:false,
          alertMsg:'',
          rating:0,
          participantSelected:[],
           recheckCodeBox:true,
          votes:[],
          PanelIsWeb:true,
    }
},
methods:{
     showAlert:function(title='',message,type){
       
       if(type == 'info'){

          iziToast.info(
        { 
       title: title,
       message: message,
       zindex:'9999999999',
       timeout:5000,
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )

       }

       if(type == 'success'){
         iziToast.success(
        { 
       title: title,
       message: message,
       zindex:'9999999999',
        timeout:5000,
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       if(type == 'warning'){

          iziToast.warning(
        { 
       title: title,
       message: message,
        timeout:5000,
       zindex:'9999999999',
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )

       }

       if(type == 'error'){
         iziToast.error(
        { 
       title: title,
       message: message,
       zindex:'9999999999',
        timeout:5000,
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       

    },
  
    goTopanel:function(){

      

            this.$root.panelFromChallenges = true;
         
       this.$router.push({ path: '/board/projects/panel/' + this.participantSelected.project_slug });
    },
    checkState: function(){

         this.loading = true;
     
         this.fetchParticipants();
      
    },
       goBack() {
      this.$root.showResultPage = false;
       window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        showPage: function(participant){
          this.pageContent = '';
          this.loading = true;
          this.participantSelected = participant;
           this.selectedParticipantId = participant.id;
          this.selecetedPanelId = participant.panel_id;

            if(participant.is_web){

               this.loadPageContent(this.selecetedPanelId);

            }else{

                     this.runCodeOnSandbox();
            }

        },
         loadPageContent: function(panelId){
         axios.get( '/run-panel/' + panelId)
      .then(response => {

      if (response.status == 200) {

        this.loading = false;
       this.pageContent = response.data;



     }


     })
     .catch(error => {

          this.showAlert('Oops!','Unable to load page content','error');

     })
     },
       checkResponse:function(token){

        let _this = this;

      
                axios.post( '/check-for-submission',{
               token: token,
                langId: _this.selectedLangId
                  })
          .then(response => {
             
          
          if(response.status == 200){

            

            

              if(response.data[0].status.description == 'Accepted'){

                 

                  _this.pageContent =  response.data[0].stdout;

                  
                 


              }else if(response.data[0].status.description == 'In Queue'){

                 _this.pageContent = 'In Queue...';

                   _this.checkResponse(response.data[0].token);

              }else if(response.data[0].status.description == 'Processing'){

                 _this.pageContent = 'Processing...';

                   _this.checkResponse(response.data[0].token);

              }else{

                 _this.pageContent =  response.data[0].stdout +  '\n Error: \n'  + response.data[0].stderr ;

               

              }


              if(_this.$root.codeBoxOpened == false){
                
              }

              

       

         
               _this.recheckCodeBox = true;

          }

          
            
          })
          .catch(error => {

             
             
               _this.pageContent = 'An issue occured,unable to run on sandbox...';

               
             
          })


        

      },
      runCodeOnSandbox: function(){

          axios.post( '/run-code-on-sandbox-project',{
                panel_id: this.selecetedPanelId,
                  })
          .then(response => {
             
          
          if(response.status == 200){

          
             let token = response.data[0][0].token;

        
              if(response.data[0][0].status.description == 'Accepted'){

                  this.pageContent =  response.data[0][0].stdout ;

                
                

              }else if(response.data[0][0].status.description == 'In Queue'){

                 this.pageContent = 'In Queue...';
                 this.checkResponse(token,response.data[1]);

              }else if(response.data[0][0].status.description == 'Processing'){

                 this.pageContent = 'Processing...';

                 this.checkResponse(token,response.data[1]);

              }else{

                

                this.pageContent =  response.data[0][0].stdout + '\n Error: \n' + response.data[0][0].stderr ;

              }


          }
            
          })
          .catch(error => {

            
             
               this.pageContent = 'An issue occured,unable to run on sandbox...';

                
              
          })

          
      },
       
   
      fetchParticipants: function(){

         axios.get( '/fetch-challenge-participants/' + this.$route.params.challenge_id)
      .then(response => {

      if (response.status == 200) {


        this.participants = response.data.participants;
        this.votes = response.data.votes;
 
            this.selectedParticipantId = '';

        // show first result

         if( this.participants[0]){

               this.showPage( this.participants[0])

         }


     }


     })
     .catch(error => {
        this.showAlert('Oops!','Unable to fetch participants','error');
             })

      },

     
   
      SaveVotes:function(){

         setTimeout(()=>{

            if(this.votes.length == 0){
           return;
         }
          this.saveLoading = true;
           axios.post( '/save-challenge-votes',{
             votes: this.votes
           })
      .then(response => {

      if (response.status == 200) {


       this.saveLoading = false;
        this.showAlert('Nice!','Your votes have been save','success');
      
     }


     })
     .catch(error => {
        this.saveLoading = false;
    this.showAlert('Oops!','Unable to save votes','error');
     })


         },1000)



      }

}
}
</script>
<style scoped>
.scroller::-webkit-scrollbar {
  height: 5px;
}

.scroller::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid darkgrey;
}

</style>