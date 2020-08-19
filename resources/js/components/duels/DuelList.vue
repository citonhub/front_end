<template>
     <div >
         <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0 scrollerStyle" style="position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">

        <div class="col-12 py-0 my-0 fixed-top " style="position:sticky; background:white;">
       <div class="row py-1 my-0 " >
         <div class="col-4 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-4 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
           <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;text-transform:capitalize;">My Duels</span>
         </div>
         <div class="col-4 py-0 my-0  text-right"  style="border-bottom:2px solid #4495a2;" >
              <v-btn icon color="#4495a2" @click="createDuel"><v-icon>mdi-plus-circle-outline</v-icon></v-btn>
         </div>
      </div>
     </div>

      <div class="col-12 py-1 my-0 " v-if="duels != null" >
         <div class="row my-0 py-0 px-0 mx-1" v-if="duels.length != 0">
              
                 <div class="col-12 px-0 py-2" v-for="(duel,index) in duels" :key="index">
               <v-card elevation-22 class="py-1 px-1" >
                <div class="row px-1">
                   <div class="py-0 col-12 text-center d-md-block d-none"  @click="showboard(duel)">
                        <div style="background-color:#b9dcdf; border-radius:4px; border:1px solid transparent;">
                           <span style="font-size:12px;color:#0f2024;">{{shortenContent(duel.title,40)}}</span>
                        </div>
                   </div>
                    <div class="py-0 col-12 text-center d-block d-md-none"  @click="showboard(duel)" >
                        <div style="background-color:#b9dcdf; border-radius:4px; border:1px solid transparent;">
                           <span style="font-size:12px;color:#0f2024;">{{shortenContent(duel.title,35)}}</span>
                        </div>
                        
                   </div>

                   <div class="py-1 col-6">
                        <span style="font-size:12px;color:#595959;">Participants: {{duel.current_participant}}</span>
                   </div>
                   
                    <div class="py-1 col-6 text-right">
                        <span style="font-size:12px;text-transform:capitalize;" class="mybadgenew">{{duel.duel_id}}</span>
                   </div>


                     <div class="col-4  py-1 text-center">
                        <v-btn  color="#4495a2" icon  @click.stop="editDuel(duel)"><span><v-icon>mdi-circle-edit-outline mdi-18px</v-icon></span></v-btn>
                     </div>
                     <div class="col-4 py-1 text-center" >
                            <span  v-if="checkDuelStatus(duel) == 'Pending'">

                    <v-btn @click="startDuel(duel)" rounded x-small color="#3E8893"
              style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext; text-transform:capitalize;">start</v-btn>            
                            </span>
                            <span class="statusnew" v-if="checkDuelStatus(duel) != 'Pending'">{{checkDuelStatus(duel)}}</span>
                     </div>
                     <div class="col-4 py-1 text-center">
                      <v-btn  color="#4495a2" icon @click="showShare(duel)" ><span><v-icon>mdi-share-variant mdi-18px</v-icon></span></v-btn>
                     </div>

                </div>
               </v-card>
            </div>

                
                <div class="col-12 py-3 my-3" style="padding-top:100px !important;">

                 </div>
          </div>

          <div v-if="duels.length == 0" class="col-12 my-2 py-0 px-0 mx-1 text-center" >
       <span style="color:gray; font-size:12px;"  class="d-block">No Duel found</span>
               <v-btn small @click="createDuel" rounded color="#3E8893" style="color:white; font-size:12px; text-transform:capitalize;" class="my-2">Create a duel</v-btn>
            </div>
        </div>

       
      <div class="col-12 py-0 my-0"  v-else>

         <div class="row py-0 my-0 px-1">
            
     <div class="col-12 py-1 my-0">
       <v-skeleton-loader
      class="mx-auto "
        height="90px"
      type="image"
    ></v-skeleton-loader>
     </div>
         </div>


        <div class="row py-0 my-0 px-1">
            
     <div class="col-12 py-1 my-0">
       <v-skeleton-loader
      class="mx-auto "
        height="90px"
      type="image"
    ></v-skeleton-loader>
     </div>
         </div>

          <div class="row py-0 my-0 px-1">
            
     <div class="col-12 py-1 my-0">
       <v-skeleton-loader
      class="mx-auto "
        height="90px"
      type="image"
    ></v-skeleton-loader>
     </div>
         </div>

       

         
      </div>
      
    
     
</div>

         </div>
         </div>
  
</template>
<script>
export default {
 data(){
   return{
         
    duels:this.$root.UserDuel,
   }
 },
   mounted(){ 
      this.$root.showTabs=true;
       this.$root.showHeader = true;
       this.$root.disconnectDuel(this.$root.duels);
     this.fetchDuels();
     this.trackUser();
       
    },
 methods:{
    showShare:function(duel){

          this.$root.shareText  = 'Checkout this duel on CitonHub.';
         this.$root.shareLink = 'https://www.citonhub.com/link/duel/' + duel.duel_id + '/' + this.$root.username;

         this.$root.showShare = true;
   },
   goBack: function(){
      this.$router.push({ path: '/duel/duels' });
   },
   createDuel: function(){
     this.$router.push({ path: '/duel/create' });
   },
    activateBot:function(){
         this.$root.selectedPage  = this.$root.userPageTrack.filter((page)=>{
            return page.page_name == 'my_duel';
          });
         
          if(this.$root.selectedPage.length != 0){
               
              if(this.$root.selectedPage[0].status == 0){
                 this.$root.showBoard = true;
         this.$root.boardContent = 'Hurray 🥳, you created your first duel, share the duel with your friends and click on \'start\' and let the fun begin 😎';
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
   editDuel: function(duel){
      this.$root.editDuelArray = duel;
        this.$root.isEditDuel = true;
      this.$router.push({ path: '/duel/edit' });
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
    showboard: function(duel){
           
          this.$router.push({ path: '/duel/' + duel.duel_id +'/board' + '/user' });
       },
        startDuel: function(duel){
       
      axios.post('/start-duel',{
                
                duelId: duel.duel_id
                
                  })
          .then(response => {
            
           if (response.status == 200) {
                
                duel.started = 1;
              
                

            }else{
             
            }
            
            
          })
          .catch(error => {
           
          })

    },
    shortenContent: function(content,limit){
             
             if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                 return shortcontent + '...';
             }else{
               return content;
             }
        },
     fetchDuels: function(){
        if(this.$root.UserDuel != null){


            this.duels = this.$root.UserDuel;
             this.$root.trackDuelConnections(this.$root.UserDuel);
            this.$root.allChannel = [];
         
        }else{
         
         axios.get('/fetch-user-duels')
      .then(response => {
      
      if (response.status == 200) {
        
        this.duels = response.data;
        this.$root.UserDuel = response.data;
        this.$root.trackDuelConnections(this.$root.UserDuel);
         this.$root.allChannel = [];

     }
       
     
     })
     .catch(error => {
    
     }) 
        }
           
       }
   
 }   
}
</script>
<style>
.HeadingText{
  font-weight: bolder;
  font-size: 13px;
  font-family: Headertext;
  color:#173236;
}
.paragraphtext{
  font-weight: bolder;
  font-size: 12px;
  font-family: Headertext;
  color:gray;
}
 .mybadgenew{
     font-size:11px;
     color:white;
     font-family:HeaderText; 
     border:1px solid #4495a2; 
     border-radius:4px; 
     padding: 2px 4px;
     background:#4495a2;
     font-weight: bolder;
 } 

</style>