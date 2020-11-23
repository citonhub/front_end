<template>
<div>

  
     
     <div class="  col-lg-6 offset-lg-3 py-1 my-0" style="border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6;position:absolute; background:white; height:100%; overflow-y:hidden; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-1">
           <div  >
             
            
            
            
           </div>
            
  <virtual-list 
      style="overflow-y:auto;position:absolute;left:0; width:100%; height:100%;z-index:1345000;padding-bottom:200px;"
      :data-key="'duel_id'"
      :data-sources="duels"
      class="scrollerStyle"
      v-if="duels.length != 0"
      :data-component="itemComponent"
      :keeps="15">   
     
</virtual-list>  

<div v-else   style="overflow-y:auto;position:absolute;left:0; width:100%; height:100%;z-index:1345000;padding-bottom:200px;">
      <div class="col-12 col-lg-8 offset-lg-2 py-0 my-0">

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
      
 

     <span style="position:absolute; top:76%; right:3%;z-index:134500045;" v-show="!showmore" class="d-md-none d-inline-block">
          <v-btn
                color="#35747e"
                small
                @click="createDuel"
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
                @click="createDuel"
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-plus</v-icon>
              </v-btn>
     </span>

       <div class="col-12 py-5 my-5" style="padding-top:100px !important;">
             
         </div>
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
      
    
       createDuel: function(){
            this.$router.push({ path: '/duel/create' });
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