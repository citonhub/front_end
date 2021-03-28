<template>
<div class="fixed-layout">
 

   <div style="width:100%; height:100%; overflow-y:hidden; overflow-x:hidden; ">
 
 <!-- side bar -->

 <!-- large and medium screens -->
  <v-card class="d-none  d-lg-block"  style="z-index:999;border-radius:0px; width:15%; align-items:center; background:white; justify-content:center; position:fixed; height:100%; top:0%;">
      
      <template>
        <div class="d-flex" v-if="that.$root.componentIsLoading" style="position:absolute;height:100%; width:100%; align-items:center; justify-content:center;">

         <img src="/imgs/diary_loading.svg" height="50" >

      </div>
       <side-bar></side-bar>
      </template>

  </v-card>

 <!-- ends -->

 <!-- side bar for medium and small screens -->

 <v-slide-x-transition>
   <div class="col-12 d-lg-none d-block py-0 px-0" style="position:fixed; width:100%; height:100%; z-index:99999999999999999;background: rgba(27, 27, 30, 0.32);" @click="that.$root.showSideBar = false" v-if="that.$root.showSideBar">

   <div style="position:absolute; height:100%; width:65%; left:0;" >

     <div class="col-md-6 pt-2 px-0" style="background:white;height:100%;" @click.stop="that.$root.showSideBar = true">
      
      <template >
         <div class="d-flex" v-if="that.$root.componentIsLoading" style="position:absolute;height:100%; width:100%; align-items:center; justify-content:center;">

         <img src="/imgs/diary_loading.svg" height="50" >

      </div>
       <side-bar></side-bar>
      </template>
       
     </div>

   </div>

 </div>
 </v-slide-x-transition>


 <!-- ends -->

 <!-- image cropper -->


   <div class="py-0 px-0" style="position:fixed; width:100%; height:100%; z-index:99999999999999999;background: rgba(27, 27, 30, 0.32);" v-if="that.$root.showImageCropper">

   <div style="position:absolute; height:90%; top:5%; width:94%; left:3%; align-items:center; justify-content:center;" class="d-flex" >

     <div class=" col-lg-6  pt-2 col-md-8  d-flex flex-column" style="background:white;height:100%;" >

       <div class="text-center d-flex flex-row" style="align-items:center;">
          
          <div class="col-2 px-1 py-1 text-left">
          <v-btn icon @click="closeCropper"><v-icon>mdi mdi-close</v-icon> </v-btn> 
          </div>
         
          <div class="text-center col-8 py-1" style="width:100%;">
            <h6>Crop Image</h6>
          </div>

           <div class="col-2 px-1 py-1">
          
          </div>
       </div>
        <image-cropper-board></image-cropper-board>
     </div>

   </div>

 </div>


 <!-- ends -->


  <!-- share  -->


   <div class="py-0 px-0" style="position:fixed; width:100%; height:100%; z-index:99999999999999999;background: rgba(27, 27, 30, 0.32);" @click="that.$root.showInvitation = false" v-if="this.$root.showInvitation">

   <div style="position:absolute; height:90%; top:5%; width:94%; left:3%; align-items:center; justify-content:center;" class="d-flex" >

   

      
      <invitation :infoText="this.$root.infoText"
                                   :extraInfo="this.$root.extraInfo" :fromChat="false" :alertComponent="this.$root.alertComponent"></invitation>
   

   </div>

 </div>


 <!-- ends -->

 <!-- showuserPoint info  -->


   <div class="py-0 px-0" style="position:fixed; width:100%; height:100%; z-index:99999999999999999;background: rgba(27, 27, 30, 0.32);" v-if="that.$root.showPointDetailsInfo">

   <div style="position:absolute; height:90%; top:5%; width:94%; left:3%; align-items:center; justify-content:center;" class="d-flex" >

     
      <point-info-board :alertComponent="that"></point-info-board>
   

   </div>

 </div>


 <!-- ends -->


     <!-- profile View  -->


   <div class="py-0 px-0" style="position:fixed; width:100%; height:100%; z-index:99999999999999999;background: #F5F5FB;" v-if="this.$root.showProfileView">

  
      
      <profile-view :fromModal="true"></profile-view>
   

  

 </div>


 <!-- ends -->

  <!-- moreInfo wallet  -->


   <div class="py-0 px-0" style="position:fixed; width:100%; height:100%; z-index:99999999999999999;background: rgba(27, 27, 30, 0.32);" v-if="this.$root.showWalletinfo" @click="that.$root.showWalletinfo = false" >

   <div style="position:absolute; height:90%; top:8%; width:94%; left:3%; "  >
  

     <template v-if="that.$root.infoType == 'fee'">
     <fee-info></fee-info>
     </template>

      <template v-if="that.$root.infoType == 'transaction'">
   <transaction-info></transaction-info>
     </template>

      <template v-if="that.$root.infoType == 'payout'">
   <payout-info></payout-info>
     </template>

     <template v-if="that.$root.infoType == 'referral'">
   <referral-info></referral-info>
     </template>


     <template v-if="that.$root.infoType == 'balance'">
   <balance-info></balance-info>
     </template>
        
     
   </div>

 </div>


 <!-- ends -->


 <!-- project input handler  -->


   <div class="py-0 px-0" style="position:fixed; width:100%; height:100%; z-index:99999999999999999;background: rgba(27, 27, 30, 0.32);" v-if="that.$root.showProjectInput" >

   <div style="position:absolute; height:90%; top:8%; width:94%; left:3%; "  >
  

     <input-handler></input-handler>


        
     
   </div>

 </div>


 <!-- ends -->





  <!-- new payout account wallet  -->


   <div class=" px-0"  v-if="that.$root.showPayoutAccount" @click="that.$root.showPayoutAccount = false" style="position:fixed; width:100%; height:100%; z-index:99999999999999999;background: rgba(27, 27, 30, 0.32); overflow-y:auto;padding-bottom:100px !important;" >

   <div style="position:absolute; height:90%; top:5%; width:94%; left:3%; "  >
  

    
   <payout-account></payout-account>
    
     
   </div>

 </div>


 <!-- ends -->
    
<!-- Main board -->
<div   :style="!$screen.lg ? 'z-index:999999; background:#F5F5FB;  align-items:center; justify-content:center; position:fixed; width:100%; left:0%; height:100%; top:0%;'
: 'z-index:999999; background:#F5F5FB;  align-items:center; justify-content:center; position:fixed; width:85%; left:15%; height:100%; top:0%;'">

    <!-- top bar component -->
    
     <top-bar></top-bar>

     <!-- ends -->
  
      <div class="col-12 py-0 pb-3 px-0 mt-md-5" style="position:absolute; background:#F5F5FB; left:0%; top:0%;  height:100%;overflow-y:hidden; overflow-x:hidden; ">
      <!-- entry point for vue router -->
      <router-view></router-view>
      <!-- ends -->
     </div>
     
   
   

  </div>


    
     
<!-- ends -->
     
   </div>




</div>
  
</template>

<script>

import VueScreen from 'vue-screen'
Vue.use(VueScreen, 'bootstrap')

const ImageCropperBoard = () => import(
    /* webpackChunkName: "imageCropperBoard" */ './ImageCropper.vue'
  );

     const Invitation = () => import(
    /* webpackChunkName: "Invitation" */ '../chats/invitation.vue'
  );

   const TransactionInfo = () => import(
   /* webpackChunkName: "TransactionInfo" */ '../Wallet/TransactionInfo.vue'
  );

    const PayoutInfo = () => import(
   /* webpackChunkName: "PayoutInfo" */ '../Wallet/PayoutInfo.vue'
  );


const FeeInfo = () => import(
   /* webpackChunkName: "FeeInfo" */ '../Wallet/FeeInfo.vue'
  );

  const ReferralInfo = () => import(
   /* webpackChunkName: "ReferralInfo" */ '../Wallet/ReferralInfo.vue'
  );


    const BalanceInfo = () => import(
   /* webpackChunkName: "BalanceInfo" */ '../Wallet/BalanceInfo.vue'
  );

 const InputHandler = () => import(
   /* webpackChunkName: "InputHandler" */ '../projects/InputHandler.vue'
  );

  const TopBar = () => import(
    /* webpackChunkName: "TopBarBoard" */ './TopBar.vue'
  );

   const PayoutAccount = () => import(
    /* webpackChunkName: "TopBarBoard" */ '../Wallet/PayoutAccount.vue'
  );

   const SideBar = () => import(
    /* webpackChunkName: "SideBar" */ './sideBar.vue'
  );

   const ProfileView = () => import(
    /* webpackChunkName: "ProfileView" */ '../Profile/ProfilePage.vue'
  );

    const PointInfoBoard = () => import(
   /* webpackChunkName: "PointInfoBoard" */ '../chats/PointInfoBoard.vue'
  );

 export default {
    data () {
      return {
       showSideBar:false,
       searchType:'',
       that:this
      }
    },
    components:{
     ImageCropperBoard,
     Invitation,
      TransactionInfo,
      FeeInfo,
     TopBar,
     ReferralInfo,
     BalanceInfo,
     SideBar,
     InputHandler,
     ProfileView,
     PayoutAccount,
     PayoutInfo,
     PointInfoBoard
    },
    mounted(){
      this.$root.boardComponent = this;
    },
    methods:{
      closeCropper:function(){
        this.$root.showImageCropper = false;
         window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      }
    }
  }
</script>
<style scoped>
  .fixed-layout{
    position: fixed;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
   
  }
.scroller::-webkit-scrollbar {
  width: 6px;
}

 
.scroller::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
  
</style>
