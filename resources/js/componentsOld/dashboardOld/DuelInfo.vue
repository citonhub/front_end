<template>
     <div >
         <div class="col-lg-6 offset-lg-3 py-0 px-0 my-0" style="border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6;position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">
      <!-- top bar -->
        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-4 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-4 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
           <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;text-transform:capitalize;">{{ this.$root.selectedDuel.duel_id}}</span>
         </div>
         <div class="col-4 py-0 my-0  d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
            
         </div>
      </div>
     </div>
   <!-- ends -->
   
   <!-- contents -->
      <div class="col-12 py-1 my-0 " >
         <div class="row my-0 py-2 px-0 mx-1">
                <v-card flat  class="col-12 py-1 my-1" elevation-19 style="background: whitesmoke;">
                   <span class="HeadingText">Title</span>
                <div class="col-12 py-0 my-0 text-left">
                   <span class="para">{{ this.$root.selectedDuel.title}}</span>
                </div>
                </v-card>


                <v-card flat class="col-12 py-1 my-1" elevation-19 style="background: whitesmoke;">
                   <span class="HeadingText">Max. Number of Participants: {{ this.$root.selectedDuel.max_participant}}</span>
                
                </v-card>

                 <v-card flat class="col-12 py-1 my-1" elevation-19 style="background: whitesmoke;">
                   <span class="HeadingText">Judge</span>
                <div class="col-12 py-0 my-0 text-left">
                   <span class="mybadgenew mx-1" v-for="(judge,index) in this.$root.selectedDuel.judges_array" :key="index" >{{ judge.username }}</span>
                </div>
                </v-card>

                <v-card flat class="col-12 py-1 my-1" elevation-19 style="background: whitesmoke;">
                   <span class="HeadingText">Rules</span>
                <div class="col-12 py-0 my-0 text-left para" v-html="this.$root.selectedDuel.rules">
                 
                </div>
                </v-card>

                 <v-card flat class="col-12 py-1 my-1" elevation-19 style="background: whitesmoke;">
                   <span class="HeadingText">Duration</span>
                <div class="col-12 py-0 my-0 text-left">
                   <span class="para">{{this.$root.selectedDuel.duration}} hours</span>
                </div>
                </v-card>

                <v-card flat class="col-12 py-1 my-1" elevation-19 style="background: whitesmoke;">
                   <span class="HeadingText">Creator</span>
                <div class="col-12 py-0 my-0 text-left">
                  <span style="font-size:10px;font-family:HeaderText;" class="mybadgenew">@{{this.$root.selectedDuel.username}}</span>
                   <span class="para">Jun 12, 2020</span> 
                </div>
                </v-card>

                 
                
                <div class="col-12 py-3 my-3" style="padding-top:100px !important;">

                 </div>
          </div>
        </div>
      <!-- ends -->
         </div>
         </div>
     </div>
</template>
<script>
export default {
 data(){
   return{
         
   }
 },
   mounted(){ 
      this.$root.showTabs=true;
       this.$root.showHeader = false;
       this.fetchDuel();
    },
 methods:{
   goBack: function(){
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
   },
    fetchDuel: function(){
          if(this.$root.duels.length != 0){
              var thisDuel = this.$root.duels.filter((eachduel)=>{
             return eachduel.duel_id == this.$route.params.duelId;
           })

            this.$root.selectedDuel = thisDuel[0];
             this.countDownDate = new Date(this.$root.selectedDuel.duel_terminal_time).getTime();
          }else{
             axios.get('/fetch-this-duel/' + this.$route.params.duelId)
      .then(response => {
      
      if (response.status == 200) {
        
         
        this.$root.selectedDuel = response.data[0];
          this.countDownDate = new Date(this.$root.selectedDuel.duel_terminal_time).getTime();
        
        

     }
       
     
     })
     .catch(error => {
    
     }) 
          }
      },
   
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
.para{
 
  font-size: 12px;
  
  color:#4d4d4d;
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