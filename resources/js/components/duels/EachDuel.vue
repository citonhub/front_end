<template>
           <div class="col-12 px-2 py-2">
               <v-card elevation-22 class="py-1 px-2"  @click="showboard(source)">
                <div class="row">
                   <div class="py-0 col-12 text-center d-md-block d-none">
                        <div style="background-color:#b9dcdf; border-radius:4px; border:1px solid transparent;">
                           <span style="font-size:12px;color:#0f2024;">{{shortenContent(source.title,40)}}</span>
                        </div>
                   </div>
                    <div class="py-0 col-12 text-center d-block d-md-none" >
                        <div style="background-color:#b9dcdf; border-radius:4px; border:1px solid transparent;">
                           <span style="font-size:12px;color:#0f2024;">{{shortenContent(source.title,35)}}</span>
                        </div>
                        
                   </div>

                   <div class="py-1 col-6">
                        <span style="font-size:12px;color:#595959;">Participants: {{source.current_participant}}</span>
                   </div>
                   
                    <div class="py-1 col-6 text-right">
                        <span style="font-size:12px;text-transform:capitalize;" class="mybadgenew">{{source.duel_id}}</span>
                   </div>
                     <div class="col-4 text-center">
                        <span><v-icon class="px-0" color="#3E8893">mdi-heart mdi-18px</v-icon></span>
                         <span style="font-size:11px; color:#595959;font-family:HeaderText;">{{source.likes}}</span>
                     </div>
                     <div class="col-4 text-center">
                            <span class="statusnew" >{{checkDuelStatus(source)}}</span>
                     </div>
                     <div class="col-4 text-center">
                      <span><v-icon class="px-0" color="#3E8893">mdi-comment-text-outline mdi-18px</v-icon></span>
                       <span style="font-size:11px; color:#595959;font-family:HeaderText;">{{source.comments}}</span>
                     </div>

                </div>
               </v-card>
            </div>
            
</template>
<script>
export default {
     props: {
      index: { // index of current item
        type: Number
      },
      source: { // here is: {uid: 'unique_1', text: 'abc'}
        type: Object,
        default () {
          return {}
        }
      },
     
    },
 methods:{
          showboard: function(duel){
           
          this.$router.push({ path: '/duel/' + duel.duel_id +'/board' + '/user' });
       },
       shortenContent: function(content,limit){
             
             if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                 return shortcontent + '...';
             }else{
               return content;
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
      
    }
}
</script>
<style>

</style>