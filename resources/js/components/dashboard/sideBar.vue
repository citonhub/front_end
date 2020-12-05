<template>
    <div>
        <div class="col-12  py-2 mb-lg-5 md-3">
    

      <div class="row">
          <div class="col-12 text-center px-0 d-lg-block d-none">
                <img alt="citonhub logo" class="d-inline-block mr-1 mb-2" src="/imgs/citonhub.png" height="38px">
                   <div style="font-family:HeaderFont; font-size:19px;"  class="d-inline-block mt-2" >CitonHub</div>
          </div>

          <div class="col-12 text-center px-0 d-block d-lg-none">
                <img alt="citonhub logo" class="d-inline-block mr-1 mb-2" src="/imgs/citonhub.png" height="30px">
                   <div style="font-family:HeaderFont; font-size:15px;"  class="d-inline-block mt-2" >CitonHub</div>
          </div>
      </div>

  </div>
     

    <div class="col-12  py-2 px-0">
    

      <div class="row px-0">
          <div class="col-12  px-0 py-1 py-md-2 sideBar" :style="selectedTab == 'projects' ? 'background:#F3F8FC; border-right:4px solid #3C87CD;' : ''" @click.stop="goToPage('projects')">
                <div class="row">
                <div class="col-4 py-1 text-center">
                  <v-icon style="font-size:30px;" :color="selectedTab == 'projects' ? '#3C87CD' : '#A4A4A5'">las la-laptop-code</v-icon>
                </div>
                <div class="  py-1 col-8 d-flex" :style="selectedTab == 'projects' ? 'align-items:center;' : 'align-items:center; color:#A4A4A5;'">
                  <div style="font-family:MediumFont; font-size:14px;" >Projects</div>
                </div>
                </div>
          </div>

          <div class="col-12  px-0 py-1 py-md-2 mt-1 sideBar"  :style="selectedTab == 'channels' ? 'background:#F3F8FC; border-right:4px solid #3C87CD;' : ''" @click.stop="goToPage('channels')">
                <div class="row">
                <div class="col-4 py-1 text-center">
                  <v-icon style="font-size:30px;" :color="selectedTab == 'channels' ? '#3C87CD' : '#A4A4A5'">las la-comments</v-icon>
                </div>
                <div class="  py-1 col-8 d-flex" :style="selectedTab == 'channels' ? 'align-items:center;' : 'align-items:center; color:#A4A4A5;'">
                  <div style="font-family:MediumFont; font-size:14px;" >Channels</div>
                </div>
                </div>
          </div>

            <div class="col-12  px-0 py-1 py-md-2 mt-1 sideBar"  :style="selectedTab == 'teams' ? 'background:#F3F8FC; border-right:4px solid #3C87CD;' : ''" @click.stop="goToPage('teams')">
                <div class="row">
                <div class="col-4 py-1 text-center">
                  <v-icon style="font-size:30px;" :color="selectedTab == 'teams' ? '#3C87CD' : '#A4A4A5'">las la-user-friends</v-icon>
                </div>
                <div class="  py-1 col-8 d-flex" :style="selectedTab == 'teams'  ? 'align-items:center;' : 'align-items:center; color:#A4A4A5;'">
                  <div style="font-family:MediumFont; font-size:14px;" >Teams</div>
                </div>
                </div>
          </div>

            <div class="col-12  px-0 py-1 mt-1 py-md-2 sideBar"  :style="selectedTab == 'direct-messages' ? 'background:#F3F8FC; border-right:4px solid #3C87CD;' : ''" @click.stop="goToPage('direct-messages')">
                <div class="row">
                <div class="col-4 py-1 text-center">
                  <v-icon style="font-size:30px;" :color="selectedTab == 'direct-messages' ? '#3C87CD' : '#A4A4A5'">las la-user</v-icon>
                </div>
                <div class="  py-1 col-8 d-flex" :style="selectedTab == 'direct-messages' ? 'align-items:center;' : 'align-items:center; color:#A4A4A5;'">
                  <div style="font-family:MediumFont; font-size:14px;" >Direct Messages</div>
                </div>
                </div>
          </div>

          <div class="col-12  px-0 py-1 py-md-2 mt-1 sideBar"  :style="selectedTab == 'content-bots' ? 'background:#F3F8FC; border-right:4px solid #3C87CD;' : ''"  @click.stop="goToPage('content-bots')">
                <div class="row">
                <div class="col-4 py-1 text-center">
                  <v-icon style="font-size:30px;" :color="selectedTab == 'content-bots' ? '#3C87CD' : '#A4A4A5'">las la-file-alt</v-icon>
                </div>
                <div class="  py-1 col-8 d-flex" :style="selectedTab == 'content-bots' ? 'align-items:center;' : 'align-items:center; color:#A4A4A5;'">
                  <div style="font-family:MediumFont; font-size:14px;" >Content Bots</div>
                </div>
                </div>
          </div>

           <div class="col-12  px-0 py-1 py-md-2 mt-1 sideBar"  :style="selectedTab == 'challenges' ? 'background:#F3F8FC; border-right:4px solid #3C87CD;' : ''" @click.stop="goToPage('challenges')">
                <div class="row">
                <div class="col-4 py-1 text-center">
                  <v-icon style="font-size:30px;" :color="selectedTab == 'challenges'  ? '#3C87CD' : '#A4A4A5'">las la-trophy</v-icon>
                </div>
                <div class="  py-1 col-8 d-flex" :style="selectedTab == 'challenges'  ? 'align-items:center;' : 'align-items:center; color:#A4A4A5;'">
                  <div style="font-family:MediumFont; font-size:14px;" >Challenges</div>
                </div>
                </div>
          </div>


           <div class="col-12  px-0 py-1 py-md-2 mt-3 d-lg-block d-none" >
                <div class="row">
                <div class="col-12 py-1 text-center">
                  
                  <button class="btnStyle py-3 px-5">Hub</button>

                </div>
                </div>
          </div>


          


      </div>

  </div>

    <div class="col-12 px-0 py-2 mt-2" style="position:absolute; bottom:0%;left:0;">
               
                    <div class="col-12 px-0  mb-1 py-1 py-md-2 sideBar">
                       <div class="row">
                         <div class="col-4 py-1 text-center">
                  <v-icon style="font-size:30px;" color="#A4A4A5">las la-cog</v-icon>
                </div>
                <div class="  py-1 col-8 d-flex" style="align-items:center; color:#A4A4A5;">
                  <div style="font-family:MediumFont; font-size:14px;" >Setings</div>
                </div>
                       </div>
                    </div>
                    <div class="col-12 px-0 sideBar py-1 py-md-2">
                       <div class="row">
                         <div class="col-4 py-1 text-center">
                  <v-icon style="font-size:30px;" color="#A4A4A5">las la-question-circle</v-icon>
                </div>
                <div class="  py-1 col-8 d-flex" style="align-items:center; color:#A4A4A5;">
                  <div style="font-family:MediumFont; font-size:14px;" >Help</div>
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
    },
    methods:{
        setPage:function(){

             if(this.$router.currentRoute.path.indexOf('projects') >= 0){
                
               this.selectedTab = 'projects';

              
            }

            if(this.$router.currentRoute.path.indexOf('channels') >= 0){
                
               this.selectedTab = 'channels';

              
            }

            if(this.$router.currentRoute.path.indexOf('content-bots') >= 0){
                
               this.selectedTab = 'content-bots';

              
            }

            if(this.$router.currentRoute.path.indexOf('challenges') >= 0){
                
               this.selectedTab = 'challenges';

              
            }

            if(this.$router.currentRoute.path.indexOf('teams') >= 0){
                
               this.selectedTab = 'teams';

              
            }

            if(this.$router.currentRoute.path.indexOf('direct-messages') >= 0){
                
               this.selectedTab = 'direct-messages';

              
            }

        },
        goToPage:function(page){

             this.$router.push({ path: '/board/' + page });

               this.selectedTab = page;

             this.$root.boardComponent.showSideBar = false;
        
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
  
  .sideBar{
      cursor: pointer;
  }

  .sideBar:hover{
      background: #F3F8FC;
  }
</style>