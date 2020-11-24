<!--component displaying a user's notifications-->
<template>
     <div style="background:transparent; font-family:BodyText;">
        <div class="  col-lg-6 offset-lg-3 py-0 px-0 my-0" style="border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6;position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">

        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-2 py-0 my-0 text-left px-1" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-8 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
           <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;"> {{ $t('profile.notifications') }}</span>
         </div>
         <div class="col-2 py-0 my-0  d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
            
         </div>
      </div>
     </div>

      <div class="py-1 my-0 scrollerStyle" style="position:absolute; top:5%; height:95%;width:100%; left:0; overflow-y:auto; overflow-x:hidden; padding-bottom:100px !important;">
        
        <!-- user's notification list-->
       <div class="col-12 py-2 my-0 " v-if="Notifications != null" >
            <notify-list :Notifications="Notifications" v-if="Notifications.length != 0"></notify-list>

          <div v-if="Notifications.length == 0" class="text-center col-12">
       <span style="color:gray; font-size:12px;"> {{ $t('profile.no_notifications') }}</span>
          </div>
       </div>

       <div v-else  >
      <div class="col-12 py-0 my-0">

         <div class="row py-0 my-0 px-1">
          <div  class="col-12 py-0 my-0 px-0">
          <v-skeleton-loader
        type="list-item-avatar-two-line"
          ></v-skeleton-loader>
          </div>       
         </div>


           <div class="row py-0 my-0 px-1">
          <div  class="col-12 py-0 my-0 px-0">
          <v-skeleton-loader
        type="list-item-avatar-two-line"
          ></v-skeleton-loader>
          </div>       
         </div>

  <div class="row py-0 my-0 px-1">
          <div  class="col-12 py-0 my-0 px-0">
          <v-skeleton-loader
        type="list-item-avatar-two-line"
          ></v-skeleton-loader>
          </div>       
         </div>



         
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
          
         Notifications: null,
        
        }
    },
     components: {
   
  },
    mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = false;
       this.fetchNotification();
       
    },
    methods:{
       goBack() {

        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
       fetchNotification: function(){
          axios.get('/user-notification')
      .then(response => {
      
      if (response.status == 200){
          

          this.Notifications = response.data; 

            this.markAsRead();
         
      }
       
     
     })
     .catch(error => {
    
     }) 

       },
       markAsRead:function(){
             axios.post( '/mark-as-read')
      .then(response => {
      
      if (response.status == 200){
          

         
         
      }
       
     
     })
     .catch(error => {
    
     }) 
       }
      
       
      
  },
}
</script>
<style>

.titleText{
    font-size:12px; 
    font-family:HeaderText; 
    color:#173236;
}

</style>