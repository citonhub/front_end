<template>
     <div>

    <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:hidden; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">

        <div class="col-12 py-0 my-0">
          
               <div style="height:auto; width:100%; ">
                   <div class="col-12 py-0 my-0 px-0" >
           <div class="row py-1 my-0 px-0" >
         <div class="col-2 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
             <v-btn icon left @click="goToDuels"><v-icon color="#4495a2">mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-8 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
           <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">{{this.shortenContent(this.selectedDuel.title,40)}}</span>
         </div>
         <div class="col-2 py-0 my-0  d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
                
         </div>
               </div>
              </div> 
               <div class="col-12 py-0 my-0 topboard"  >
                 <div class="row py-0 my-0">
                    <div class="col-4 text-left my-0 py-0">
                         <v-btn x-small color="#ffffff " v-if="checkDuelStatus(this.selectedDuel) == 'Voting'"><span style="color:rgba(38, 82, 89,0.8); font-weight:bolder;" @click="result('vote')">Vote</span></v-btn>
                        <v-btn x-small color="#ffffff " v-if="checkDuelStatus(this.selectedDuel) == 'Ended'"><span style="color:rgba(38, 82, 89,0.8); font-weight:bolder;" @click="result('result')">Results</span></v-btn>
                    </div>
                    <div class="col-4 text-center py-1">

                       <v-btn x-small  text color="#ffffff " @click="showDuelInfo"><span style="color:#ffffff; font-weight:bolder; font-size:9px;">Duel Info</span></v-btn>
                      
                    </div>
                    <div class="col-4 text-right py-0">
                       <v-btn icon left @click="showShare()"><v-icon color="#ffffff">mdi-share-variant mdi-18px</v-icon></v-btn>
                    </div>
                    <div class="col-12 d-flex mt-0 pb-0 pt-0" style="align-items:center; justify-content:center;">
                      <h1 class="timer">{{ TimerValue }}</h1>
                    </div>
                    <div class="col-12 d-flex py-0" style="align-items:center; justify-content:center;">
                      <h1 class="TimerLabelNew">Day : Hour : Min : Sec</h1>
                    </div>
                    <div class="col-12 d-flex py-1" style="align-items:center; justify-content:center;">
                      <span class="statusnew">{{checkDuelStatus(this.selectedDuel)}}</span>
                    </div>

                    <div class="col-12 py-0 my-0">
                      <div class="row">
                        <div class="py-0 col-12 text-center">
                        <span style="font-size:12px;color:white;">Participants: {{this.selectedDuel.current_participant}}</span>
                        </div>
                        <div class="col-2 text-center py-0">
                            <v-btn icon @click="participantScoller--"><v-icon color="#ffffff">mdi-chevron-left mdi-18px</v-icon></v-btn>
                        </div>
                         <div class="col-8  py-1">
                               <v-carousel
                               cycle
                                height="100%"
                               hide-delimiter-background
                               show-arrows-on-hover
                                hide-delimiters
                                v-model="participantScoller"
                               :next-icon="false"
                             :show-arrows="false"
                                >
                                <v-carousel-item class="text-center" v-for="(participant,index) in this.selectedDuel.duel_participants_array"
                                 :key="index">
                                    <span class="py-1 px-1 newavatarText" @click.stop="viewUser(participant)" v-if="participant.type == 'user'">@{{participant.username}}</span>
                                     <span class="py-1 px-1 newavatarText" @click.stop="viewUser(participant)" v-if="participant.type == 'team'">@{{participant.team.name}}</span>
                              
                                </v-carousel-item>
                                
                                
                              </v-carousel>    
                         </div>
                         <div class="col-2 text-center py-0">
                          <v-btn icon @click="participantScoller++"><v-icon color="#ffffff">mdi-chevron-right mdi-18px</v-icon></v-btn>
                        </div>
                      </div>
                    </div>
                 </div>
               </div>

               </div>

              <div style="width:100%; height:auto;">
          
            <div class="col-12 my-0 py-0 px-2" style="border-bottom:1px solid #c5c5c5;">
                <div class="row py-0 my-0" >
                     <div class="col-4 text-left my-0 pb-0" style="align-items:center; justify-content:center;">
                        <v-btn class="d-inline-block" icon  @click="likeDuel">

                        <v-icon color="#3E8893" v-if="this.selectedDuel.liked_by_user">mdi-heart</v-icon>
                               <v-icon color="#999999" v-else>mdi-heart-outline </v-icon>
                         
                        </v-btn>
                      <span style="font-size:9px; color:#a6a6a6;">{{this.selectedDuel.likes}}</span>
                     </div>
                      <div class="col-4 d-flex my-0 pb-0" style="align-items:center; justify-content:center;">     

                     <v-btn  v-if="this.selectedDuel.user_participating" x-small color="#3E8893 " @click="DuelPanel" ><span style="color:#ffffff; font-weight:bolder; font-size:9px;">Panel</span></v-btn>
                     <v-btn  v-if="!this.selectedDuel.user_participating && !this.selectedDuel.participant_reached && knowDuelStatus(this.selectedDuel)"
                     x-small color="#3E8893 " @click="joinDuel" :loading="loading" style="color:white;"><span style="color:#ffffff; font-weight:bolder; font-size:9px;">Join</span></v-btn>
                     </div>
                      <div class="col-4 text-right my-0 pb-0" style="align-items:center; justify-content:center;">
                        <v-btn class="d-inline-block" icon @click="comment">
                        <v-icon color="#3E8893 ">mdi-comment-text-outline</v-icon>
                         
                        </v-btn>
                        <span style="font-size:9px; color:#a6a6a6;">{{this.selectedDuel.comments}}</span>
                     </div>
                </div>
            </div> 
           
            </div>

         

             <virtual-list 

             class="py-1 px-0 scrollerStyle"
      style="height:700px; background:whitesmoke;overflow-y:auto;width:100%; overflow-x:hidden; padding-bottom:450px !important;" 
      :data-key="'id'"
      :data-sources="this.$root.duelComments"
      :data-component="itemComponent"
      :keeps="15">   
     
       </virtual-list>  

              <div class="row my-0 py-0">


                   
                  

                   <div style="padding-top:450px; !important" class="col-12">

                   </div>

                  
   
                  </div>    

            
           
        </div>
         </div>
    </div>
     </div>
</template>
<script>
import DuelComments from './DuelComments'
import VirtualList from 'vue-virtual-scroll-list'

import { format } from 'url';
export default {
    data () {
      return {
       countDownDate:'',
       TimerValue:'',
       participantScoller:0,
       loading:false,
       selectedDuel:[],
       channel:'',
        itemComponent: DuelComments,
      
      }
    },
    mounted(){
       
       this.countDownTimer();
       this.$root.showTabs=true;
        this.$root.showHeader = false;
        this.fetchDuelComments();
         this.fetchDuel();
         this.$root.duelComments = [];

          this.$root.closeNotification(this.$route.params.duelId +'duel_join');
          this.$root.closeNotification(this.$route.params.duelId +'duel_comment');
          this.$root.closeNotification(this.$route.params.duelId +'duel_like');

          this.$root.closeNotification('new_duel'+ this.$route.params.duelId);
          
          if(this.$root.selectedDuel.length != 0){
            
               
               if(this.$root.selectedDuel.user_team != undefined){
        this.$root.localChannel = [];
             Echo.leave('panel.' + this.$root.selectedDuel.user_team.team_code);

               }
              
          }
         
        this.trackUser();
    },
    components: { 
     'virtual-list': VirtualList
      },


    
    methods:{
       showShare:function(){
            let duel = this.selectedDuel;
          this.$root.shareText  = 'Checkout this duel on CitonHub.';
         this.$root.shareLink = 'https://www.citonhub.com/link/duel/' + duel.duel_id + '/' + this.$root.username;

         this.$root.showShare = true;
   },
      
      activateBot:function(){
         this.$root.selectedPage  = this.$root.userPageTrack.filter((page)=>{
            return page.page_name == 'duel_board';
          });
         
          if(this.$root.selectedPage.length != 0){
               
              if(this.$root.selectedPage[0].status == 0){
                 this.$root.showBoard = true;
         this.$root.boardContent = 'Hey ' + this.$root.username + ',here you can join,follow up the duel and support your favourite duel participant. Also feel free to give your comments 😇';
         this.$root.boardBtnLabel = 'Okay,Got It';

              }
               
          }
        
         
      },
        trackUser: function(){
      

         axios.get('/fetch-profile-'+ this.$root.username)
   .then(response => {
   
   if (response.status == 200) {

        this.$root.userPageTrack = response.data[2];

        this.activateBot();
  }
    
  
  })
  .catch(error => {
 
  }) 

      
   },
      viewUser: function(participant){
       this.$root.pageloader = true;
        window.location = '/view-profile#/profile/activities/'+ participant.username;
    },
      showReply: function(){
           
      },
       goBack: function(){
         
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
   },
     
      likeDuel:function(){
        this.$root.checkIfUserIsLoggedIn('duels');
        if(this.selectedDuel.liked_by_user){
          return;
        }

        axios.post('/save-liked-duel',{
            "duel_id": this.$route.params.duelId
          })
      .then(response => {
      
      if (response.status == 200) {
        
           
       

         this.$root.duels.map((duel)=> {
            if(duel.duel_id ==  this.$route.params.duelId){
                duel.liked_by_user = true;
              duel.likes = duel.likes + 1;
            }
         });
        
        
     }
       
     
     })
     .catch(error => {
    
     }) 


      },
      fetchDuel: function(){
          if(this.$root.duels.length != 0){
              var thisDuel = this.$root.duels.filter((eachduel)=>{
             return eachduel.duel_id == this.$route.params.duelId;
           })

            this.selectedDuel = thisDuel[0];
            this.$root.selectedDuel = thisDuel[0];
            

             this.countDownDate = new Date(this.selectedDuel.duel_terminal_time).getTime();
            
            var  status = this.checkDuelStatus(this.selectedDuel);

          this.countDownDate = new Date(this.selectedDuel.duel_terminal_time).getTime();

           if(status == 'Active'){
              
             this.countDownDate = new Date(this.selectedDuel.duel_terminal_time).getTime();

           }
           if(status == 'Voting'){
             this.countDownDate = new Date(this.selectedDuel.duel_voting_time).getTime();
           }
            
             this.countDownTimer();


          }else{
             axios.get('/fetch-this-duel/' + this.$route.params.duelId + '/user')
      .then(response => {
      
      if (response.status == 200) {
        
         
        this.selectedDuel = response.data[0];
        this.$root.selectedDuel = response.data[0];
        
          
        var  status = this.checkDuelStatus(this.selectedDuel);

          this.countDownDate = new Date(response.data[0].duel_terminal_time).getTime();

           if(status == 'Active'){
              
             this.countDownDate = new Date(response.data[0].duel_terminal_time).getTime();

           }
           if(status == 'Voting'){
             this.countDownDate = new Date(response.data[0].duel_voting_time).getTime();
           }

         
          this.countDownTimer();
        
        

     }
       
     
     })
     .catch(error => {
    
     }) 
          }
      },
      goToDuels: function(){
         
          this.$router.push({ path: '/duel/duels' });
      },
      DuelPanel: function(){
         this.$root.checkIfUserIsLoggedIn('duels');

          if(this.selectedDuel.user_type == "user"){
                this.$router.push({ path: '/duel/'+ this.$route.params.duelId + '/panel/user/user' });
          }else{
              this.$router.push({ path: '/duel/'+ this.$route.params.duelId + '/panel/' + this.selectedDuel.user_team.team_code + '/user'});
          }
          
      },
     
      showDuelInfo: function(){
            this.$router.push({ path: '/duel/'+ this.$route.params.duelId + '/info' });
       },
       
      comment:function(){

            this.$root.checkIfUserIsLoggedIn('duels');

             this.$router.push({ path: '/duel/'+ this.$route.params.duelId + '/comment' });
      },
      fetchDuelComments: function(){
         axios.get('/fetch-duel-comments/' + this.$route.params.duelId)
      .then(response => {
      
      if (response.status == 200) {
        
         
        this.$root.duelComments =response.data
       

          

     }
       
     
     })
     .catch(error => {
    
     }) 

      },
      joinDuel: function(){
           this.$root.checkIfUserIsLoggedIn('duels'); 
           this.loading = true;
        
         axios.post('/join-duel',{
           duel_id: this.$route.params.duelId
         })
      .then(response => {
      
      if (response.status == 200) {
        
         
       if(response.data == 'joined'){
           this.loading = false;
           this.selectedDuel.user_participating = true;
          this.DuelPanel();
       }else{
          
         this.selectedDuel.participant_reached = true;
       }
       

          

     }
       
     
     })
     .catch(error => {
    
     }) 

          
      },
      shortenContent: function(content,limit){
              if(content != null){
                  if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                 return shortcontent + '...';
             }else{
               return content;
             }
              }
             
        },
      
      knowDuelStatus: function(duel){
           
           let result = this.checkDuelStatus(duel);

           if(result == 'Active' || result == 'Pending'){
                 return true;
           }else{
             return false;
           }
      },
       checkDuelStatus:function(duel){
      
      if(duel.started == 0){
         return 'Pending'
      }
             
          let now  = moment();
           let terminalDateToMoment = moment(duel.duel_terminal_time);
           let votingDateToMoment = moment(duel.duel_voting_time);
          
          let differenceInSeconds = votingDateToMoment.diff(now,'seconds');

          let differenceInSecondsForVoting = votingDateToMoment.diff(now,'seconds');
            
          if(differenceInSeconds <= 0){
             return 'Ended';
          }else{
             if(differenceInSecondsForVoting <= 3600){
                  return 'Voting'
             }
            return 'Active'
          }
          
       },
      result:function(type){
         
           this.$router.push({ path: '/duel/'+ this.$route.params.duelId + '/participant/' + type });
      },
       countDownTimer: function(){
           let _this = this;
          
          
          var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
        
        

  // Find the distance between now and the count down date
  var distance = _this.countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

     if(days <= 9){
         days = '0' + days
     }

     if(hours <= 9){
        hours = '0' + hours
     }

     if(minutes <= 9){
        minutes = '0' + minutes 
     }

     if(seconds <= 9){
         seconds = '0' + seconds
     }
  _this.TimerValue = days + " : " + hours + " : "
  + minutes + " : " + seconds ;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    _this.TimerValue = "0 : 0 : 0 : 0";
  }
}, 1000);
       }
    }
}
</script>
<style>
.topboard{
   background: rgb(39, 82, 89,0.8);
   border: 2px solid rgba(38, 82, 89,0.6);
   border-radius: 10px;
}
.matchTitle{
    font-family: HeaderText;
    font-size: 13px;
    font-weight: bolder;
    color: white;
}
.timer{
   font-family: HeaderText;
    font-size: 24px;
    font-weight: bolder;
    color: white;
}
.TimerLabelNew{
  
    font-size: 12px;
    font-weight: bolder;
    color: white;
}

.avatarCommentnew{
   background:#dbedf0;
    border:1px solid #dbedf0;
     border-radius:50%;
     color:#4d4d4d;
      text-transform: uppercase;
     font-size:10px; 
     font-family:HeaderText;
     font-weight: bolder;
 }

.statusnew{
    font-size:10px;
     color:#173236;
     border:2px solid #edf6f7; 
     border-radius:9px; 
     padding: 2px 4px;
     background:#edf6f7;
     font-weight: bolder;
 }

 .newavatarText{
   background:#edf6f7;
    border:1px solid #edf6f7;
     border-radius:9px;
     color:#173236;
     font-size:11px; 
     font-weight: bolder;
 }
  .mybadge{
     font-size:10px;
     color:white;
     font-family:HeaderText; 
     border:1px solid #3E8893; 
     border-radius:9px; 
     padding: 2px 4px;
     background:#3E8893;
     font-weight: bolder;
 } 
  .versus{
   color:#ffffff;
   font-size:12px; 
     font-family:HeaderText;
     font-weight: bolder;
 }
 .centralize{
   align-items: center;
   justify-content: center;
 }
  .commentHeader{
   font-size: 12px;
   font-weight: bolder;
   color:#333333;
 }
 .commentText{
   color:#4d4d4d ;
   font-size: 11px;
   font-weight: bolder;
 }
</style>