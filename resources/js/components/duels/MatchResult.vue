<template>
    <v-app style="font-family:BodyText;background:transparent; ">

       <div class="col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-0 px-0 my-0 scrollerStyle" style="border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6;position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">

        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
      
         <div class="py-1 my-0 text-left px-1" style=" position:absolute; left:0; width:10%; background:#b7dbe1;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
            
         </div>
         <div class=" py-1 my-0 px-2 "  style=" background:#b7dbe1;border-bottom:2px solid #4495a2; overflow-x:auto; white-space:nowrap; position:absolute; left:10%; width:90%; " >
             <v-chip v-for="(participant,index) in participants" :key="index"
      class="ma-1 ml-0 fileText d-inline-block"
      small
      @click="showPage(participant)"
     :style=" selecetedPanelId == participant.panel_id ? 'color:white;background-color:#4ba6b4;' : 'background-color:#edf6f7;'"
      >
     <span  v-if="participant.type == 'user'" >@{{participant.username}}</span> 
     <span  v-if="participant.type == 'team'" >@{{participant.team.name}}</span> 
    </v-chip>  
         </div>
        
        
      </div>

       <div class="col-12 py-0 my-0" v-if="pageContent != ''" >
          <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"   v-if="duelPanelIsWeb"
   :srcdoc="pageContent" 
    style="border: 0; height:91%; top:7%; position:fixed;left:0;" class="col-md-8 offset-md-2  col-lg-6 offset-lg-3 px-1 py-0" ></iframe>

  <textarea  readonly v-else v-model="pageContent"  style="border: 0; height:91%; position:fixed;left:0; top:7%; font-size:14px; " class="col-md-8 offset-md-2  col-lg-6 offset-lg-3 px-3 py-3" >
</textarea>
       </div>

    <div class="col-12 py-0 my-0"  v-if="pageContent == '' && !loading">
      <div 
      
    style="border: 0; height:91%; top:7%; position:fixed;left:0; align-items:center; justify-content:center;" class="col-md-8 offset-md-2  col-lg-6 offset-lg-3 px-1 py-0 d-flex" >
         <span style="font-size:13px; color:gray;">
            
           {{ $t('duels.selete_to_view') }}

         </span>
       </div>
    </div>


    <v-app class="col-12 py-0 my-0" v-if="pageContent == '' && loading">
      <div 
       
    style="border: 0; height:91%; top:7%; position:fixed;left:0; align-items:center; justify-content:center;" class="col-md-8 offset-md-2 px-5 col-lg-6 offset-lg-3 px-1 py-0 d-flex" >
         <v-progress-linear indeterminate color="#3E8893" rounded ></v-progress-linear>
       </div>
    </v-app>
       

       
                <div style="position:fixed; top:93%; left:0%;z-index:1000;  height:7%; background:rgba(38, 82, 89,0.8);align-items:center; justify-content:center;"
                 class="d-flex col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-2" v-if="votes.length != 0">
                  
                  <span  v-if="selectedParticipantId == ''"><v-icon color="#ffffff">mdi-star</v-icon><span style="font-size:12px; color:white;" class="px-1">{{ $t('duels.votes') }}</span> </span>
                  
                   <div class="row py-0 my-0" v-else>
                     <div class="col-8 py-0 my-0 text-center">
                       
                   <div v-for="(vote,index) in votes" :key="index">
                      <v-rating v-model="vote.stars" @input="SaveVotes()" background-color="#edf6f7" color="#edf6f7"  v-if="vote.participant_id == selectedParticipantId"></v-rating>
                   </div>
                     </div>
                     <div class="col-4 py-2 my-0 text-center">
             <span><v-icon color="#ffffff">mdi-star</v-icon><span style="font-size:13px; color:white;" class="px-1">{{participantSelected.votes}} {{ $t('duels.votes') }}</span> </span>
                     </div>
                   </div>

                  
                 
                   
                </div>

                 <div style="position:fixed; top:93%; left:0%;z-index:1000;  height:7%; background:rgba(38, 82, 89,0.8);align-items:center; justify-content:center;"
                 class="d-flex col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-2" v-else>
                   <div class="row py-2 d-flex" style="align-items:center; justify-content:center;">
                       <span><v-icon color="#ffffff">mdi-star</v-icon><span style="font-size:13px; color:white;" class="px-1">{{participantSelected.votes}} {{ $t('duels.votes') }}</span> </span>
                   </div>
                   
                </div>
         </div>
       </div>

        <v-fade-transition>
              <div  style="position:absolute; width:100%; height:auto: align-items:center;justify-content:center;bottom:16%; z-index:123453566;"  class="d-flex">
             <v-alert
      v-model="Alert"
      dismissible
      close-icon="mdi-delete"
      color="#3E8893"
       width="auto"
       style="font-size:13px;"
       height="auto"
      border="left"
     
      elevation="2"
      colored-border
     
    >
      {{alertMsg}}
    </v-alert>
        </div>
        </v-fade-transition>

    </v-app>
</template>
<script>


export default {
      mounted(){
       this.$root.showTabs=false;
       this.$root.showHeader = false;
       this.checkState();
       this.$root.pageLoaderOpened = true;
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
          duelPanelIsWeb:true,
    }
},
methods:{

    showAlert:function(duration,text){
        this.Alert = true;
        this.alertMsg = text;
        let _this = this;
     
     setTimeout(function(){
        _this.Alert = false;
     },duration);

    },
    checkState: function(){
       if(this.$route.params.actionType == "vote"){
         this.fetchParticipants();
       }else{
         this.fetchResults();
       }
    },
       goBack() {
       this.$router.push({ path: '/duel/' + this.$route.params.duelId +'/board' + '/user'});
        },
        showPage: function(participant){
          this.pageContent = '';
          this.loading = true;
          this.participantSelected = participant; 
           this.selectedParticipantId = participant.id;
          this.selecetedPanelId = participant.panel_id;

          this.duelPanelIsWeb = participant.duelIsWeb;

            if(participant.duelIsWeb){

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
    
     }) 
     },
     checkResponse:function(token,langId){

         let _this = this;

        let interval = setInterval(check,1000);


        function check(){

           
             if(_this.recheckCodeBox){

               _this.recheckCodeBox = false;

                axios.post( '/check-for-submission',{
               token: token,
                langId: langId
                  })
          .then(response => {
             
          
          if(response.status == 200){

            

            

              if(response.data[0].status.description == 'Accepted'){

                 

                  _this.pageContent =  response.data[0].stdout;

                  
                 clearInterval(interval);


              }else if(response.data[0].status.description == 'In Queue'){

                 _this.pageContent = 'In Queue...';

              }else if(response.data[0].status.description == 'Processing'){

                 _this.pageContent = 'Processing...';

              }else{

                 _this.pageContent =  response.data[0].stdout +  '\n Error: \n'  + response.data[0].stderr ;

                 clearInterval(interval);

              }


             if(_this.$root.pageLoaderOpened == false){

             clearInterval(interval);

             }

              

        

         
               _this.recheckCodeBox = true;

          }

          
            
          })
          .catch(error => {

             
             
               _this.pageContent = 'An issue occured,unable to run on sandbox...';

                
               clearInterval(interval);
              
          })

             }

          

        }

        

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
        
         this.$root.checkIfUserIsLoggedIn('duels');

         axios.get( '/fetch-duel-participants/' + this.$route.params.duelId)
      .then(response => {
      
      if (response.status == 200) {
        
         
        this.participants = response.data[0];
        this.votes = response.data[1];
         var duel = response.data[2];
           
          
      
        let status = this.checkDuelStatus(duel.duel_terminal_time,duel.duel_voting_time);

      
            
            this.fetchResults()

            this.selectedParticipantId = '';
           
         
       

          

     }
       
     
     })
     .catch(error => {
    
     }) 

      },
      
      fetchResults: function(){
          this.$root.checkIfUserIsLoggedIn('duels');
        

         axios.get( '/fetch-duel-results/' + this.$route.params.duelId)
      .then(response => {
      
      if (response.status == 200) {
        
         
        this.participants = response.data[0];

        var duel = response.data[1];

       
      
        let status = this.checkDuelStatus(duel.duel_terminal_time,duel.duel_voting_time);

        if(status == 'Active'){
            this.fetchParticipants();
           this.$router.push({ path: '/duel/'+ this.$route.params.duelId + '/participant/vote' });
        }
         
        
        

          

     }
       
     
     })
     .catch(error => {
    
     }) 

      },
    checkDuelStatus:function(terminalDate,votingDate){
          let now  = moment();
           let terminalDateToMoment = moment(terminalDate);
           let votingDateToMoment = moment(votingDate);
          
          let differenceInSeconds = votingDateToMoment.diff(now,'seconds');

          let differenceInSecondsForVoting = votingDateToMoment.diff(terminalDateToMoment,'seconds');
            
          if(differenceInSeconds <= 0){
             return 'Ended';
          }else{
             if(differenceInSecondsForVoting > 0){
                  return 'Voting'
             }
            return 'Active'
          }
          
       },
      SaveVotes:function(){

         setTimeout(()=>{

            if(this.votes.length == 0){
           return;
         }
          this.saveLoading = true;
           axios.post( '/save-duel-votes',{
             votes: this.votes
           })
      .then(response => {
      
      if (response.status == 200) {
        
         
       this.saveLoading = false;
       this.showAlert(5000,'Votes saved')
          
     }
       
     
     })
     .catch(error => {
        this.saveLoading = false;
       this.showAlert(5000,'Error-' + error);
     }) 


         },1000)

        

      }
     
}
}
</script>
<style lang="scss" scoped>
.fileText{
    font-size:11px;
}

 
</style>