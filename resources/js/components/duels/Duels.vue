<template>
<div>

  
     
     <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-1 my-0" style="position:absolute; background:white; height:100%; overflow-y:hidden; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-1">
           <div  >
             
            
            
            
           </div>
            
  <virtual-list 
      style="overflow-y:auto;position:absolute;left:0; width:100%; height:100%;z-index:1345000;padding-bottom:200px;"
      :data-key="'duel_id'"
      :data-sources="duels"
      v-if="duels.length != 0"
      :data-component="itemComponent"
      :keeps="15">   
     
</virtual-list>  

<div v-else   style="overflow-y:auto;position:absolute;left:0; width:100%; height:100%;z-index:1345000;padding-bottom:200px;">
      <div class="col-12 py-0 my-0">

         <div class="row py-0 my-0 px-1">
            
     <div class="col-12 py-1 my-0">
       <v-skeleton-loader
      class="mx-auto "
        height="70px"
      type="image"
    ></v-skeleton-loader>
     </div>
         </div>


        <div class="row py-0 my-0 px-1">
            
     <div class="col-12 py-1 my-0">
       <v-skeleton-loader
      class="mx-auto "
        height="70px"
      type="image"
    ></v-skeleton-loader>
     </div>
         </div>

          <div class="row py-0 my-0 px-1">
            
     <div class="col-12 py-1 my-0">
       <v-skeleton-loader
      class="mx-auto "
        height="70px"
      type="image"
    ></v-skeleton-loader>
     </div>
         </div>
  </div>
          
      
    
     
</div>
            

         </div>
      
   <span style="position:absolute; top:76%; left:3%; z-index:12345665786; background:rgba(38, 82, 89,0.7); border:1px solid transparent; border-radius:7px;" class=" px-1 py-1 d-md-none d-inline-block text-center">
          <img src="imgs/coin.svg" height="22" >
          <span class="coin"  style="font-size:13px; font-family:HeaderText;">{{this.$root.authProfile.coin}}</span>

     </span>

<span style="position:absolute; top:84%; left:5%; z-index:12345665786; background:rgba(38, 82, 89,0.7); border:1px solid transparent; border-radius:7px;" class=" px-1 py-1 d-none d-md-inline-block text-center">
          <img src="imgs/coin.svg" height="22" >
          <span class="coin"  style="font-size:13px; font-family:HeaderText;">{{this.$root.authProfile.coin}}</span>

     </span>

     <span style="position:absolute; top:76%; right:3%;z-index:134500045;" v-show="!showmore" class="d-md-none d-inline-block">
          <v-btn
                color="#35747e"
                small
                @click="showmore ? showmore = false : showmore = true"
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-plus</v-icon>
              </v-btn>
     </span>

      <span style="position:absolute; top:84%; right:3%;z-index:134500045;" v-show="!showmore" class="d-none d-md-inline-block">
          <v-btn
                color="#35747e"
                small
                @click="showmore ? showmore = false : showmore = true"
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-plus</v-icon>
              </v-btn>
     </span>

       <div class="col-12 py-5 my-5" style="padding-top:100px !important;">
             
         </div>
     </div> 

     
    
     <div :class=" showmore ? 'morebackground col-md-8 offset-md-2  col-lg-4 offset-lg-4' : 'hidebackground col-md-8 offset-md-2  col-lg-4 offset-lg-4'" @click="showmore = false"
         style="position:fixed; height:100%;z-index:13450003445; " >
      
       <span style="position:absolute; top:65%; right:3%;" class="d-md-none d-inline-block">
         
              <span v-show="showmore">
                <div class="my-2">
                      <span class="px-1 morelabel"  @click.stop="myDuels" >&nbsp; &nbsp; My Duels</span>
                 <v-btn
                color="#35747e"
                small
                @click.stop="myDuels"
                class="d-inline-block "
                fab
              >
                <v-icon color="#ffffff">mdi-layers</v-icon>
              </v-btn>
                  </div>
                  <div class="my-2">
                      <span class="px-1 morelabel"  @click.stop="createDuel" >Create Duel</span>
                 <v-btn
                color="#35747e"
                small
                @click.stop="createDuel"
                class="d-inline-block "
                fab
              >
                <v-icon color="#ffffff">mdi-layers-plus</v-icon>
              </v-btn>
                  </div>

               

              <div class="my-2">
                  <span class="px-1 morelabel">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
              <v-btn
                color="#35747e"
                small
                @click="showmore ? showmore = false : showmore = true"
                class="d-inline-block "
                fab
              >
                <v-icon color="#ffffff">mdi-close</v-icon>
              </v-btn>
              </div>
         
           </span>
         
         
     </span>


      <span style="position:absolute; top:70%; right:3%;" class="d-none d-md-inline-block">
         
              <span v-show="showmore">
                  <div class="my-2">
                      <span class="px-1 morelabel " style="cursor:pointer;" @click.stop="myDuels">&nbsp; &nbsp; My Duels</span>
                 <v-btn
                color="#35747e"
                small
                @click.stop="myDuels"
                class="d-inline-block "
                fab
              >
                <v-icon color="#ffffff">mdi-layers</v-icon>
              </v-btn>
                  </div>

                   <div class="my-2">
                      <span class="px-1 morelabel" style="cursor:pointer;" @click.stop="createDuel" >Create Duel</span>
                 <v-btn
                color="#35747e"
                small
                @click.stop="createDuel"
                class="d-inline-block "
                fab
              >
                <v-icon color="#ffffff">mdi-layers-plus</v-icon>
              </v-btn>
                  </div>

             
              <div class="my-2">
                  <span class="px-1 morelabel">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
              <v-btn
                color="#35747e"
                small
                @click="showmore ? showmore = false : showmore = true"
                class="d-inline-block "
                fab
              >
                <v-icon color="#ffffff">mdi-close</v-icon>
              </v-btn>
              </div>
         
           </span>
         
         
     </span>

     </div>
     
          
</div>
     
</template>
<script>
import EachDuel from './EachDuel'
  import VirtualList from 'vue-virtual-scroll-list'

export default {
     data () {
      return {
       showmore:false,
       duels:this.$root.duels,
       itemComponent: EachDuel,
         
      }
    },
     components: { 
     'virtual-list': VirtualList
      },
    mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = true;
        if(this.$root.UserDuel != null){
           this.$root.disconnectDuel(this.$root.UserDuel);
        }
      this.fetchDuels();
      this.trackUser();
       
    },
    methods:{
      
      myDuels:function(){
         this.$router.push({ path: '/duel/list' });
      },
       createDuel: function(){
            this.$router.push({ path: '/duel/create' });
       },
       findDuels: function(){
           alert('I will search Duels');
       },
       activateBot:function(){
         this.$root.selectedPage  = this.$root.userPageTrack.filter((page)=>{
            return page.page_name == 'duel';
          });
         
          if(this.$root.selectedPage.length != 0){
               
              if(this.$root.selectedPage[0].status == 0){
                 this.$root.showBoard = true;
         this.$root.boardContent = 'Challenge your friends to duels and support your favourite prticipants';
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
       
       fetchDuels: function(){
         if(this.$root.duels.length != 0){
             this.duels =  this.$root.duels;

              this.$root.trackDuelConnections(this.$root.duels);

         }else{
                 
            axios.get('/fetch-duels')
      .then(response => {
      
      if (response.status == 200) {
        
        this.duels = response.data;
        this.$root.duels = response.data;

          this.$root.trackDuelConnections(this.$root.duels);
       

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
 .mybadgenew{
     font-size:11px;
     color:white;
     font-family:HeaderText; 
     border:1px solid #3E8893; 
     border-radius:4px; 
     padding: 2px 4px;
     background:#3E8893;
     font-weight: bolder;
 } 

 .morebackground{
     position:absolute; 
     width:100%; 
     height:100%; 
     display: block;
     background:rgba(38, 82, 89,0.6);
     z-index:100000;
 }

 .hidebackground{
     display: none;
 }
 .morelabel{
     font-family:HeaderText;
     color: white;
     font-size: 12px;
     font-weight: bolder;
 }
 .versus{
   color:#173236;
   font-size:12px; 
     font-family:HeaderText;
     font-weight: bolder;
 }
 .statusnew{
    font-size:10px;
      color:#173236;
     border:2px solid #dbedf0; 
     border-radius:9px; 
     padding: 2px 4px;
     background:#dbedf0;
     font-weight: bolder;
 }
 
 .avatarText{
   background:#dbedf0;
    border:1px solid #dbedf0;
     border-radius:50%;
     color:#173236;
     font-size:10px; 
     font-family:HeaderText;
     font-weight: bolder;
 }
 .coin{
  font-size: 10px;
  font-weight: bolder;
  color: white;
}
</style>