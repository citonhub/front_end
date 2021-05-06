<template>
    <div>
        <!-- large and medium screen top bar -->
    
     <div class="col-12 d-none d-md-block py-0" style="position:absolute; background:#F5F5FB;height:70px;  top:0; left:0; font-family:BodyFont;z-index:9999999999;">

         <div class="row">
            <div class="col-lg-5 col-md-1  text-left">
                 <v-btn icon @click="showSideBarHandler()" class="mt-2 d-lg-none "><v-icon style="font-size:25px;color:black;" >las la-bars</v-icon></v-btn>
            </div>
             <div class="col-lg-7 col-md-10 offset-md-1 offset-lg-0">
                <div class="row">
                  <div class="col-lg-6 col-md-5 text-center">
                      <template v-if="that.$root.searchType != 'notifications' && that.$root.searchType != 'wallet'">
                     <v-text-field
                style="font-size:13px;"
                   v-model="searchContent"
                 :placeholder="'Search ' + that.$root.searchType"
              filled
              dense
              @input="triggerSearch"
            append-icon="las la-search"
            rounded
             ></v-text-field>
                      </template>

             
                  </div>

                <div class="col-lg-2 col-md-2 text-right">
                  <template v-if="this.$root.authProfile.name" >

                      <v-btn icon  @click="goToNotification"> 
                   <v-badge
               :content="this.$root.authProfile.unread" 
                   v-if="this.$root.authProfile.unread > 0"
                color="green">
                <v-icon style="font-size:25px;color:#263238;" >las la-bell</v-icon>
                   </v-badge>

                    <v-icon style="font-size:25px;color:#263238;" v-else >las la-bell</v-icon>
                </v-btn>

                  </template>
                      
                </div>
                  <div class="col-lg-4 col-md-5 py-1 d-flex" style="justify-content:center; align-items:center;"> 
                     
                          <div class="mb-5" @click="showProfile" style="cursor:pointer;">
                                <v-card  elevation-2 class=" d-flex   py-1 px-2" style="border-radius:30px; justify-content:center; align-items:center;"> 
                         
                                 <template v-if="this.$root.authProfile.name">

                                    <div  class="d-inline-block mr-2" :style="imageStyleUser(30,this.$root.authProfile)"  ></div>
                              
                              
                              <span style="font-family:MediumFont; font-size:13px;color:black; " class="pr-1" >{{this.$root.authProfile.name}}</span>
                             
                                 </template>
                           
                               
                        
                     </v-card>

                          </div>
                    
                  </div>
                </div>
            </div>
         </div>

     </div>

     <!-- top bar smaller screen -->

       <div class="col-12 d-block d-md-none py-2 " style="position:absolute; background:#F5F5FB; top:0; left:0; font-family:BodyFont; z-index:99999999999;" v-if="that.$root.showTopBar">

         <div class="row px-2">
             <v-card  style="border-radius:7px;" class="col-12 py-2 px-1">
                   <div class="row">
                   <div class="col-2 py-0  text-center">
                 <v-btn icon @click="showSideBarHandler()"><v-icon style="font-size:25px;color:#263238;" >las la-bars</v-icon></v-btn>
            </div>
             <div class="col-6 d-flex py-0 px-1" style="align-items:center;">
                <template v-if="that.$root.searchType != 'notifications' && that.$root.searchType != 'wallet'">
             <input style="width:100%;heigth:100%;font-size:13px;"  @input="triggerSearch"  v-model="searchContent" 
                :placeholder="'Search ' + that.$root.searchType"
              class="py-2 px-2" type="search" >   
                </template>    

                <template v-else>
                      <div class="text-left">
                    <span style="font-size:14px;text-transfrom:capitalize;font-family:MediumFont;" v-if="that.$root.searchType == 'wallet'">Wallet</span>
                     <span style="font-size:14px;text-transfrom:capitalize;font-family:MediumFont;" v-if="that.$root.searchType == 'notifications'">Notifications</span>
                      </div>
                       
                </template>
         
            </div>
             <div class="col-2 text-center py-0">
                 <template v-if="this.$root.authProfile.name" >

                      <v-btn icon  @click="goToNotification"> 
                   <v-badge
                 dot
                   v-if="this.$root.authProfile.unread > 0"
                color="green">
                <v-icon style="font-size:23px;color:#263238;" >las la-bell</v-icon>
                   </v-badge>

                    <v-icon style="font-size:23px;color:#263238;" v-else >las la-bell</v-icon>
                </v-btn>

                  </template>
            </div>
             <div class="col-2 d-flex px-1 py-0" style="justify-content:center; align-items:center;">

                <template v-if="this.$root.authProfile.name">
                 <div :style="imageStyleUser(32,this.$root.authProfile)" @click="showProfile"></div>
                </template>
            </div>
                   </div>
             </v-card>
         </div>

     </div>

     <!-- ends -->
    </div>
</template>
<script>
export default {
     data () {
      return {
       showSideBar:false,
       searchType:'',
       that:this,
       searchContent:''
      }
    },
    mounted(){
      this.$root.TopBarComponentBoard = this;
    },
    
    methods:{
      showProfile:function(){

           this.$router.push({ path:'/profile/' + this.$root.username});

      },
      showSideBarHandler: function(){

         this.$root.checkIfUserIsLoggedIn();

         this.$root.componentIsLoading = true;

         this.$root.showSideBar = true;



      },
      triggerSearch:function(){

         if(this.$root.searchType == 'challenges'){
      
           
            this.getChallenges(this.searchContent);

         }

         if(this.$root.searchType == 'projects'){
      
           
            this.searchProject(this.searchContent);

         }

          if(this.$root.searchType == 'diary'){
      
           
            this.searchDiary(this.searchContent);

         }

          if(this.$root.searchType == 'leaderboard'){
      
           
           this.searchLeaderboard(this.searchContent);

         }

      },
      searchProject:function(query){

         let fullProjectList = this.$root.projectList.user_projects.concat(this.$root.projectList.contributor_projects,this.$root.projectList.pinned_projects);

        let projectListResult = fullProjectList.filter((project)=>{

          let nameValue = project.title.toLowerCase();

           

         
      return nameValue.includes(query.toLowerCase());

       

                
       });

       

      this.$root.projectSearchList = projectListResult;

      },
      searchDiary:function(query){

          
          if(this.$router.currentRoute.path.indexOf('bank') >= 0){

             this.getDiaryBank(query);

             return;

          }

        let diaryListResult = this.$root.diaryList.filter((diary)=>{

          let nameValue = diary.name.toLowerCase();

           

         
      return nameValue.includes(query.toLowerCase());

       

                
       });

       

      this.$root.diarySearchList = diaryListResult;

      },
       getDiaryBank:_.debounce(function (query) {

            let finalString = '/' + query;

              if(query.length == 0) {
                 finalString = '';
              }
          this.$root.diaryBankComponent.loadingSearchDairy = true;
  
         axios.get('/get-diary-bank' + finalString)

        .then(
          response=>{
            if(response.status == 200){
             
         
           this.$root.diaryBankSearchList = response.data.diaries;  

             this.$root.diaryBankComponent.loadingSearchDairy = false;

            }
          }
        )
     .catch(error => {

           this.$root.diaryBankComponent.loadingSearchDairy = false;
    
     }) 

      }, 500),
      getChallenges:_.debounce(function (query) {

         

            let finalString = '/' + query;

              if(query.length == 0) {
                 finalString = '';
              }
          this.$root.challengeListComponent.loadingSearchChallenges = true;
  
         axios.get('/get-challenges' + finalString)

        .then(
          response=>{
            if(response.status == 200){
             
         
           this.$root.challengeSearchList = response.data.challenges;  

             this.$root.challengeListComponent.loadingSearchChallenges = false;

            }
          }
        )
     .catch(error => {

          this.$root.challengeListComponent.loadingSearchChallenges = false;
    
     }) 

      }, 500),

      searchLeaderboard(query){

if(this.$router.currentRoute.path.indexOf('leaderboard') >= 0){

           //filter

        //   this.$root.leaderboardMembers.filter((member)=>{
           //  return member.username.indexOf('query') > -1
        //   })

    this.loading = true;

         axios.get( '/fetch-mentors' +'?page=' + 1 +'&query=' + query)
      .then(response => {
      
      if (response.status == 200) {

       
        this.$root.leaderboardMembers=response.data.mentors
           this.mentors = this.$root.leaderboardMembers
          
        

         this.loading = false;
       
     }
       
     
     })
     .catch(error => {

        this.loading = false;
         this.showAlert('Oops!','Unable to fetch mentors,please try again','error')
    
     }) 


          }
      },
      
      goToNotification: function(){

        this.$router.push({ path:'/board/notifications'});

      },
      imageStyleUser:function(dimension,data){

      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;";
         
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
        
         
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5; ";
         let imgLink = data.image_name + '.' + data.image_extension;
         
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/profile/'  + imgLink  +  ');';
         
         
          return styleString;
      }
     },
    }
}
</script>
<style scoped>

</style>