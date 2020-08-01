<template>
     <v-app style="background:transparent; font-family:BodyText;">

       <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">


        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-2 py-0 my-0 text-left px-1" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-7 py-0 my-0 d-flex px-0 text-left"  style="border-bottom:2px solid #4495a2; align-items:center;" >
             <span  v-if="projectData.length != 0" style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">{{shortenContent(projectData.title,35)}}</span>
         </div>
         <div class="col-3 py-0 my-0  text-right"  style="border-bottom:2px solid #4495a2; " >
             <v-btn icon @click="showComments"><v-icon color="#3E8893">mdi-comment-text-outline mdi-18px</v-icon></v-btn> 
                     <span style="font-size:9px; color:#a6a6a6;">{{projectData.comments}}</span>   
         </div>
      </div>
     </div>

        <v-app class="col-12 py-0 my-0" v-if="pageContent == ''">
      <div 
       
    style="border: 0; height:91%; top:7%; position:fixed;left:0; align-items:center; justify-content:center;" class="col-md-8 offset-md-2 px-5 col-lg-4 offset-lg-4 px-1 py-0 d-flex" >
         <v-progress-linear indeterminate color="#3E8893" rounded ></v-progress-linear>
       </div>
    </v-app>

     <div class="col-12 py-1 my-0 px-0" v-else>
          
             <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
   :srcdoc="pageContent" 
    style="border: 0; height:91%; position:fixed;left:0; top:6%;" class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 px-1 py-0" ></iframe>

        </div>


       <div style="position:fixed; top:93%; left:0%;z-index:1000;  height:7%; background:rgba(38, 82, 89,0.8);align-items:center; justify-content:center;"
                 class="d-flex col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-2"  v-if="UserStar.length != 0 && userLoggedIn">
                   <div class="row py-0 my-0">
                    
                      <div class="col-9 py-0 text-center">

                      <div v-for="(star,index) in UserStar" :key="index">
                      <v-rating v-model="star.stars" background-color="#edf6f7" color="#edf6f7"  ></v-rating>

                      </div>
                      </div>
                      <div class="col-3  text-center">

                      <v-btn x-small color="#3E8893 "  @click="SaveStars" :loading="saveLoading" class="mx-2"
                   style="color:white;"><span style="color:#ffffff; font-weight:bolder; font-size:9px;">Save</span></v-btn>

                      </div>
                   </div>
                   
                   
                   
                </div>

                 <div style="position:fixed; top:93%; left:0%;z-index:1000;  height:7%; background:rgba(38, 82, 89,0.8);align-items:center; justify-content:center;"
                 class="d-flex col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-2" v-if="UserStar.length == 0 && userLoggedIn">
                   <div class="row py-2 d-flex" style="align-items:center; justify-content:center;">
                       <span><v-icon color="#ffffff">mdi-star</v-icon><span style="font-size:13px; color:white;" class="px-1">{{projectData.total_stars}} Stars</span> </span>
                   </div>
                   
                </div>

                <div style="position:fixed; top:93%; left:0%;z-index:1000;  height:7%; background:rgba(38, 82, 89,0.8);align-items:center; justify-content:center;"
                 class="d-flex col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-2" v-if="!userLoggedIn">
                   <div class="row py-2 d-flex" style="align-items:center; justify-content:center;" @click="showLogin">
                      <v-rating  background-color="#edf6f7" color="#edf6f7"  ></v-rating>
                   </div>
                   
                </div>

         </div>

          <span style="position:absolute; top:81.5%; right:3%; z-index:10;"  class="d-md-none d-inline-block">
          <v-btn
                color="#35747e"
                small
                 @click="showPanel"
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-xml</v-icon>
              </v-btn>
     </span>

   


      <span style="position:absolute; top:86%; right:3%;z-index:9000000000099;" class="d-none d-md-inline-block">
          <v-btn
                color="#35747e"
                small
                 @click="showPanel"
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-xml</v-icon>
              </v-btn>
     </span>
       </div>

        <v-fade-transition>
              <div  style="position:absolute; width:100%; height:auto: align-items:center;justify-content:center;bottom:16%; z-index:123453566;"  class="d-flex">
             <v-alert
      v-model="Alert"
      dismissible
      close-icon="mdi-delete"
      color="#3E8893"
       width="auto"
       style="font-size:13px;"
       height="auto"
      border="left"
     
      elevation="2"
      colored-border
     
    >
      {{alertMsg}}
    </v-alert>
        </div>
        </v-fade-transition>

     </v-app>
</template>
<script>


export default {
    data(){
        return{
           Alert:false,
          alertMsg:'',
          pageContent:'', 
         saveLoading:false,
          projectData:[],
          rating:0,
          UserStar:[],
          userLoggedIn:false,
        }
    },
    components: {
   
  },
   mounted(){
      this.$root.showTabs= false;
       this.$root.showHeader = false;
       this.checkLogin();
        
       this.fetchProject();
       this.trackUser();
    },
    methods:{
       activateBot:function(){
         this.$root.selectedPage  = this.$root.userPageTrack.filter((page)=>{
            return page.page_name == 'project_page_loader';
          });
         
          if(this.$root.selectedPage.length != 0){
               
              if(this.$root.selectedPage[0].status == 0){
                 this.$root.showBoard = true;
        this.$root.boardContent = 'Weldone '+ this.$root.username + '😇, you can always view the output of your codes here and follow up stars and comments on your project';
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
       showLogin: function(){
         this.$root.checkIfUserIsLoggedIn('space');
       },
        checkLogin: function(){
       if(this.$root.user_temp_id == 0){
         this.userLoggedIn = false;
       }else{
         this.userLoggedIn = true;
       }
    },
    showComments:function(){
   this.$router.push({ path: '/' + this.$route.params.projectSlug +   '/comments' });
    },
    showPanel:function(){
     this.$router.push({ path: '/' + this.$route.params.projectSlug +   '/panel' });
    },
        showAlert:function(duration,text){
        this.Alert = true;
        this.alertMsg = text;
        let _this = this;
     
     setTimeout(function(){
        _this.Alert = false;
     },duration);

    },
         shortenContent: function(content,limit){
             
             if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                 return shortcontent + '...';
             }else{
               return content;
             }
        },
       goBack() {
          
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        fetchProject: function(){
        
         axios.get('/fetch-project-' + this.$route.params.projectSlug)
      .then(response => {
      
      if (response.status == 200) {
        
        
       this.projectData = response.data[0];
       this.UserStar = response.data[1];
         
         this.loadPageContent();

     }
       
     
     })
     .catch(error => {
    
     }) 

        },
        SaveStars:function(){
          
          this.saveLoading = true;
           axios.post('/save-project-stars',{
             stars: this.UserStar
           })
      .then(response => {
      
      if (response.status == 200) {
        
         
       this.saveLoading = false;
       this.showAlert(5000,'Stars saved')
          
     }
       
     
     })
     .catch(error => {
        this.saveLoading = false;
       this.showAlert(5000,'Error-' + error);
     }) 
        },
     loadPageContent: function(){
         axios.get('/run-panel/' + this.projectData.panel_id)
      .then(response => {
      
      if (response.status == 200) {
        
        
       this.pageContent = response.data;
         
        

     }
       
     
     })
     .catch(error => {
    
     }) 
     }
   
    }
   
}
</script>
<style>
.shelfText{
    font-size: 12px;
    color: #265259;
}
</style>