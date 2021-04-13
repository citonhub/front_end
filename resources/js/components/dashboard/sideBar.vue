<template>
    <div>
        <div class="col-12  py-0 ">
    

      <div class="row">
          <div class="col-12 text-center px-0 d-lg-block d-none">
                <img alt="citonhub logo" class="d-inline-block mr-1 mb-2" src="/imgs/logo.png" height="38px">
                   <div style="font-family:HeaderFont; font-size:19px;"  class="d-inline-block mt-2" >CitonHub</div>
          </div>

          <div class="col-12 text-center px-0 d-block d-lg-none pb-1">
                <img alt="citonhub logo" class="d-inline-block mr-1 mb-2" src="/imgs/logo.png" height="30px">
                   <div style="font-family:HeaderFont; font-size:14px;"  class="d-inline-block mt-2" >CitonHub</div>
          </div>
      </div>

  </div>
     

    <div class="col-lg-12 py-2 pt-0 px-0">
    
            <div class="col-12  px-0 py-1 py-md-2 mt-1 sideBar"  :style="selectedTab == 'channels' ? 'background:#F3F8FC; border-right:4px solid #3C87CD;' : ''" @click.stop="goToPage('channels')">
                <div class="row">
                <div class="col-4 py-1 text-center">
                  <v-icon class="d-none d-md-inline-block" style="font-size:27px;" :color="selectedTab == 'channels' ? '#3C87CD' : '#A4A4A5'">las la-comments</v-icon>
                 <v-icon  class="d-md-none d-inline-block" style="font-size:23px;" :color="selectedTab == 'channels' ? '#3C87CD' : '#A4A4A5'">las la-comments</v-icon>
                </div>
                <div class="  py-1 col-8 d-flex" :style="selectedTab == 'channels' ? 'align-items:center;' : 'align-items:center; color:#A4A4A5;'">
                  <div class="d-none d-md-inline-block" style="font-family:MediumFont; font-size:13px;" >Chats</div>
                  <div class="d-md-none d-inline-block" style="font-family:MediumFont; font-size:12px;" >Chats</div>
                </div>
                </div>
          </div>



           <div class="col-12  px-0 py-1 py-md-2 mt-1 sideBar"  :style="selectedTab == 'challenges' ? 'background:#F3F8FC; border-right:4px solid #3C87CD;' : ''" @click.stop="goToPage('challenges')">
                <div class="row">
                <div class="col-4 py-1 text-center">

                    <v-icon class="d-none d-md-inline-block" style="font-size:27px;" :color="selectedTab == 'challenges'  ? '#3C87CD' : '#A4A4A5'">las la-trophy</v-icon>
                 <v-icon  class="d-md-none d-inline-block" style="font-size:23px;" :color="selectedTab == 'challenges'  ? '#3C87CD' : '#A4A4A5'">las la-trophy</v-icon>

                 
                </div>
                <div class="  py-1 col-8 d-flex" :style="selectedTab == 'challenges'  ? 'align-items:center;' : 'align-items:center; color:#A4A4A5;'">
                   <div class="d-none d-md-inline-block" style="font-family:MediumFont; font-size:13px;" >Challenges</div>
                  <div class="d-md-none d-inline-block" style="font-family:MediumFont; font-size:12px;" >Challenges</div>
                </div>
                </div>
          </div>

                 
            <div class="col-12  px-0 py-1 py-md-2 mt-1 sideBar" :style="selectedTab == 'hub' ? 'background:#F3F8FC; border-right:4px solid #3C87CD;' : ''" @click.stop="goToPage('hub')">
                <div class="row">
                <div class="col-4 py-1 text-center">
                 
                    <v-icon class="d-none d-md-inline-block" style="font-size:27px;" :color="selectedTab == 'hub' ? '#3C87CD' : '#A4A4A5'">las la-stream</v-icon>
                 <v-icon  class="d-md-none d-inline-block" style="font-size:23px;" :color="selectedTab == 'hub' ? '#3C87CD' : '#A4A4A5'">las la-stream</v-icon>
                </div>
                <div class="  py-1 col-8 d-flex" :style="selectedTab == 'hub' ? 'align-items:center;' : 'align-items:center; color:#A4A4A5;'">
                  <div class="d-none d-md-inline-block" style="font-family:MediumFont; font-size:13px;" >Showcase</div>
                  <div class="d-md-none d-inline-block" style="font-family:MediumFont; font-size:12px;" >Showcase</div>
                </div>
                </div>
          </div>




           <div class="col-12  px-0 py-1 py-md-2 sideBar mt-1 " :style="selectedTab == 'projects' ? 'background:#F3F8FC; border-right:4px solid #3C87CD;' : ''" @click.stop="goToPage('projects')">
                <div class="row">
                <div class="col-4 py-1 text-center">
                
                     <v-icon class="d-none d-md-inline-block" style="font-size:27px;" :color="selectedTab == 'projects' ? '#3C87CD' : '#A4A4A5'">las la-laptop-code</v-icon>
                 <v-icon  class="d-md-none d-inline-block" style="font-size:23px;" :color="selectedTab == 'projects' ? '#3C87CD' : '#A4A4A5'">las la-laptop-code</v-icon>

                </div>
                <div class="  py-1 col-8 d-flex" :style="selectedTab == 'projects' ? 'align-items:center;' : 'align-items:center; color:#A4A4A5;'">
                  <div class="d-none d-md-inline-block" style="font-family:MediumFont; font-size:13px;" >Projects</div>
                  <div class="d-md-none d-inline-block" style="font-family:MediumFont; font-size:12px;" >Projects</div>
                </div>
                </div>
          </div>  


         
  


               <!-- <div class="col-12  px-0 py-1 py-md-2 mt-1 sideBar"  :style="selectedTab == 'diary' ? 'background:#F3F8FC; border-right:4px solid #3C87CD;' : ''"  @click.stop="goToPage('diary')">
                <div class="row">
                <div class="col-4 py-1 text-center">
                

                     <v-icon class="d-none d-md-inline-block" style="font-size:27px;" :color="selectedTab == 'diary' ? '#3C87CD' : '#A4A4A5'">las la-book</v-icon>
                 <v-icon  class="d-md-none d-inline-block" style="font-size:23px;" :color="selectedTab == 'diary' ? '#3C87CD' : '#A4A4A5'">las la-book</v-icon>
                </div>
                <div class="  py-1 col-8 d-flex" :style="selectedTab == 'diary' ? 'align-items:center;' : 'align-items:center; color:#A4A4A5;'">
                  <div class="d-none d-md-inline-block" style="font-family:MediumFont; font-size:13px;" >Diaries</div>
                  <div class="d-md-none d-inline-block" style="font-family:MediumFont; font-size:12px;" >Diaries</div>
                </div>
                </div>
          </div> -->



            
                <div class="col-12  px-0 py-1 py-md-2 mt-1 sideBar"  :style="selectedTab == 'leaderboard' ? 'background:#F3F8FC; border-right:4px solid #3C87CD;' : ''"  @click.stop="goToPage('leaderboard')">
                <div class="row">
                <div class="col-4 py-1 text-center">
                

                     <v-icon class="d-none d-md-inline-block" style="font-size:27px;" :color="selectedTab == 'leaderboard' ? '#3C87CD' : '#A4A4A5'">las la-user-friends</v-icon>
                 <v-icon  class="d-md-none d-inline-block" style="font-size:23px;" :color="selectedTab == 'leaderboard' ? '#3C87CD' : '#A4A4A5'">las la-user-friends</v-icon>
                </div>
                <div class="  py-1 col-8 d-flex" :style="selectedTab == 'mentor' ? 'align-items:center;' : 'align-items:center; color:#A4A4A5;'">
                  <div class="d-none d-md-inline-block" style="font-family:MediumFont; font-size:13px;" >Leaderboard</div>
                  <div class="d-md-none d-inline-block" style="font-family:MediumFont; font-size:12px;" >Leaderboard</div>
                </div>
                </div>
          </div>



     
        

         <div class="col-12  px-0 py-1 py-md-2 mt-1 sideBar"  :style="selectedTab == 'wallet' ? 'background:#F3F8FC; border-right:4px solid #3C87CD;' : ''"  @click.stop="goToPage('wallet')">
                <div class="row">
                <div class="col-4 py-1 text-center">
                
                    <v-icon class="d-none d-md-inline-block" style="font-size:27px;" :color="selectedTab == 'wallet' ? '#3C87CD' : '#A4A4A5'">las la-wallet</v-icon>
                 <v-icon  class="d-md-none d-inline-block" style="font-size:23px;" :color="selectedTab == 'wallet' ? '#3C87CD' : '#A4A4A5'">las la-wallet</v-icon>
                </div>
                <div class="  py-1 col-8 d-flex" :style="selectedTab == 'wallet' ? 'align-items:center;' : 'align-items:center; color:#A4A4A5;'">
                  <div class="d-none d-md-inline-block" style="font-family:MediumFont; font-size:13px;" >Wallet</div>
                  <div class="d-md-none d-inline-block" style="font-family:MediumFont; font-size:12px;" >Wallet</div>
                </div>
                </div>
          </div>

 
  </div>

    <div class="col-12 px-0 py-2 mt-2" style="position:absolute; bottom:0%;left:0;">
               
                    <div class="col-12 px-0  mb-1 py-1 py-md-2 sideBar" @click.stop="goToPage('settings')" :style="selectedTab == 'settings' ? 'background:#F3F8FC; border-right:4px solid #3C87CD;' : ''">
                       <div class="row">
                         <div class="col-4 py-1 text-center">
                 
                   <v-icon class="d-none d-md-inline-block" style="font-size:27px;" :color="selectedTab == 'settings' ? '#3C87CD' : '#A4A4A5'">las la-cog</v-icon>
                 <v-icon  class="d-md-none d-inline-block" style="font-size:23px;" :color="selectedTab == 'settings' ? '#3C87CD' : '#A4A4A5'">las la-cog</v-icon>
                </div>
                <div class="  py-1 col-8 d-flex" :style="selectedTab == 'settings' ? 'align-items:center;' : 'align-items:center; color:#A4A4A5;'">
                  <div class="d-none d-md-inline-block" style="font-family:MediumFont; font-size:13px;" >Settings</div>
                  <div class="d-md-none d-inline-block" style="font-family:MediumFont; font-size:12px;" >Settings</div>
                </div>
                       </div>
                    </div>
                    <div class="col-12 px-0 sideBar py-1 py-md-2"  :style="selectedTab == 'feedback' ? 'background:#F3F8FC; border-right:4px solid #3C87CD;' : ''"  @click.stop="goToPage('feedback')">
                       <div class="row">
                         <div class="col-4 py-1 text-center">
                

                       <v-icon class="d-none d-md-inline-block" style="font-size:27px;" :color="selectedTab == 'feedback' ? '#3C87CD' : '#A4A4A5'">las la-question-circle</v-icon>
                 <v-icon  class="d-md-none d-inline-block" style="font-size:23px;" :color="selectedTab == 'feedback' ? '#3C87CD' : '#A4A4A5'">las la-question-circle</v-icon>
                </div>
                <div class="  py-1 col-8 d-flex" :style="selectedTab == 'feedback' ? 'align-items:center;' : 'align-items:center; color:#A4A4A5;'">
                   <div class="d-none d-md-inline-block" style="font-family:MediumFont; font-size:13px;" >Feedbacks</div>
                  <div class="d-md-none d-inline-block" style="font-family:MediumFont; font-size:12px;" >Feedbacks</div>
                </div>
                       </div>
                    </div>
              
              
          </div>
    </div>
</template>
<script>
export default {
     data () {
      return {
        selectedTab:''
      }
    },
    mounted(){
      this.setPage();
       this.$root.componentIsLoading = false;
       this.$root.sideBarComponent = this;
    },
    methods:{
      installApp:function(){
        
                // Hide the app provided install promotion
            this.$root.ShowappInstaller = false;
          // Show the install prompt
           this.$root.deferredPrompt.prompt();
          // Wait for the user to respond to the prompt
           this.$root.deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the install prompt');
            } else {
              console.log('User dismissed the install prompt');
            }
          });
        

              },
        setPage:function(){

             if(this.$router.currentRoute.path.indexOf('projects') >= 0){
                
               this.selectedTab = 'projects';
               this.$root.searchType = 'projects';

            }

            if(this.$router.currentRoute.path.indexOf('channels') >= 0){
                
               this.selectedTab = 'channels';
                this.$root.searchType = 'channels';

              
            }

            if(this.$router.currentRoute.path.indexOf('diary') >= 0){
                
               this.selectedTab = 'diary';

                this.$root.searchType = 'diary';

              
            }

            if(this.$router.currentRoute.path.indexOf('leaderboard') >= 0){
                
               this.selectedTab = 'leaderboard';

                this.$root.searchType = 'leaderboard';

              
            }

            if(this.$router.currentRoute.path.indexOf('challenges') >= 0){
                
               this.selectedTab = 'challenges';

                this.$root.searchType = 'challenges'

              
            }

            if(this.$router.currentRoute.path.indexOf('hub') >= 0){
                
               this.selectedTab = 'hub';

                this.$root.searchType = 'hub'

              
            }

             

          if(this.$router.currentRoute.path.indexOf('wallet') >= 0){
                
               this.selectedTab = 'wallet';

                this.$root.searchType = 'wallet'

              
            }

             if(this.$router.currentRoute.path.indexOf('settings') >= 0){
                
               this.selectedTab = 'settings';

                this.$root.searchType = 'settings'
           
        }

          if(this.$router.currentRoute.path.indexOf('feedback') >= 0){
                
               this.selectedTab = 'feedback';

                this.$root.searchType = 'feedback'

              
            }


        },
        goToPage:function(page){

          this.$root.showProfileView = false;

           if(page == 'channels'){
       this.$router.push({ path: '/channels' });

       this.$root.showSideBar = false;
        this.selectedTab = page;
                this.$root.searchType = page;
        return;
           }

           if(page == 'hub'){
       this.$router.push({ path: '/hub' });
       
       this.$root.showSideBar = false;
        this.selectedTab = page;
                this.$root.searchType = page;
       
        return;
           }

            if(page == 'feedback'){
       this.$router.push({ path: '/board/feedback' });
       
       this.$root.showSideBar = false;
        this.selectedTab = page;
                this.$root.searchType = page;
       
        return;
           }

             this.$router.push({ path: '/board/' + page });

               this.selectedTab = page;
                this.$root.searchType = page;

             this.$root.showSideBar = false;
        
        },
        
    }
}
</script>
<style scoped>
.btnStyle{
    background: #3C87CD;
    color: white;
    border-radius: 30px;
    font-family: MediumFont;
    font-size: 15px;
  }
  
 .sideBar {
    background:transparent;
    border-right:4px solid transparent;
}

  .sideBar:hover{
      background: #F3F8FC;
      border-right:4px solid #3C87CD !important;
      cursor: pointer;
  }
</style>