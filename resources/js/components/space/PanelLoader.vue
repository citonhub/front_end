<template>
     <v-app style="background:transparent; font-family:BodyText;">

       <div class="col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-0 px-0 my-0 scrollerStyle" style=" border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6; position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">


        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-2 py-0 my-0 text-left px-1" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-6 py-0 my-0 d-flex px-0 text-left"  style="border-bottom:2px solid #4495a2; align-items:center;" >
             <span  v-if="projectData.length != 0" style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">{{shortenContent(projectData.title,30)}}</span>
         </div>

        
         <div class="col-4 py-0 my-0  text-right"  style="border-bottom:2px solid #4495a2; " >
             <v-btn icon @click="showFullPage" class="sliderfullBtn" v-if="projectData.is_web" ><v-icon color="#3E8893">mdi-launch mdi-18px</v-icon></v-btn> 
             <v-btn icon @click="showShare"><v-icon color="#3E8893">mdi-share-variant mdi-18px</v-icon></v-btn> 
                     
         </div>
      </div>
     </div>

        <v-app class="col-12 py-0 my-0" v-if="pageContent == ''">
      <div 
       
    style="border: 0; height:91%; top:7%; position:fixed;left:0; align-items:center; justify-content:center;" class="col-md-8 offset-md-2 px-5 col-lg-6 offset-lg-3 px-1 py-0 d-flex" >
         <v-progress-linear indeterminate color="#3E8893" rounded ></v-progress-linear>
       </div>
    </v-app>

     <div class="col-12 py-1 my-0 px-0" v-else>
          
             <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals" v-if="projectData.is_web"
   :srcdoc="pageContent" 
    style="border: 0; height:91%; position:fixed;left:0; top:6%;" class="col-md-8 offset-md-2  col-lg-3 offset-lg-4 px-1 py-0" ></iframe>

  
   <textarea  readonly v-else v-model="pageContent"  style="border: 0; height:91%; position:fixed;left:0; top:6%; font-size:14px; " class="col-md-8 offset-md-2  col-lg-6 offset-lg-3 px-3 py-3" >
       
    </textarea>


        </div>


       <div style="position:fixed; top:93%; left:0%;z-index:1000;  height:7%; background:rgba(38, 82, 89,0.8);align-items:center; justify-content:center;"
                 class="d-flex col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-2"  v-if="UserStar.length != 0 && userLoggedIn">
                   <div class="row py-0 my-0">
                    
                      <div class="col-12 py-0 text-center">

                      <div v-for="(star,index) in UserStar" :key="index">
                      <v-rating v-model="star.stars" background-color="#edf6f7" color="#edf6f7" @input="SaveStars()"  ></v-rating>

                      </div>
                      </div>
                    
                   </div>
                   
                   
                   
                </div>

                 <div style="position:fixed; top:93%; left:0%;z-index:1000;  height:7%; background:rgba(38, 82, 89,0.8);align-items:center; justify-content:center;"
                 class="d-flex col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-2" v-if="UserStar.length == 0 && userLoggedIn">
                   <div class="row py-2 d-flex" style="align-items:center; justify-content:center;">
                       <span><v-icon color="#ffffff">mdi-star</v-icon><span style="font-size:13px; color:white;" class="px-1">{{projectData.total_stars}} {{$t('general.stars')}}</span> </span>
                   </div>
                   
                </div>

                <div style="position:fixed; top:93%; left:0%;z-index:1000;  height:7%; background:rgba(38, 82, 89,0.8);align-items:center; justify-content:center;"
                 class="d-flex col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-2" v-if="!userLoggedIn">
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

   


      <span style="position:absolute; top:86%; right:3%;z-index:90099;" class="d-none d-md-inline-block">
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



      <span style="position:absolute; top:81.5%; left:3%; z-index:10;"  class="d-md-none d-inline-block">
          <v-btn
                color="#35747e"
                small
                 @click="showComments"
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-comment-text-outline</v-icon>
              </v-btn>
     </span>

   


      <span style="position:absolute; top:86%; left:3%;z-index:9999;" class="d-none d-md-inline-block">
          <v-btn
                color="#35747e"
                small
                 @click="showComments"
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-comment-text-outline</v-icon>
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
          recheckCodeBox:true
        }
    },
    components: {
   
  },
   mounted(){
      this.$root.showTabs= false;
       this.$root.showHeader = false;
       this.checkLogin();
        
       this.fetchProject();

       this.$root.pageLoaderOpened = true;
       this.trackUser();
    },
    methods:{
       showShare:function(){
           this.$root.shareText = 'Check out this project on CitonHub';
           this.$root.shareLink = 'https://www.citonhub.com/link/project/' + this.$route.params.projectSlug + '/user' ; 
            this.$root.showShare = true;
        },
      showFullPage:function(){

          window.open('/run-panel/' + this.projectData.panel_id, '_blank');
      },
     
        trackUser: function(){
      

         axios.get(  '/fetch-profile-'+ this.$root.username)
   .then(response => {
   
   if (response.status == 200) {

        this.$root.userPageTrack = response.data[2];

       
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
        
         axios.get( '/fetch-project-' + this.$route.params.projectSlug)
      .then(response => {
      
      if (response.status == 200) {
        
        
       this.projectData = response.data[0];
       this.UserStar = response.data[1];

        if(this.projectData.is_web){

           this.loadPageContent();

        }else{

           this.pageContent = 'sending to sandbox...';

              this.runCodeOnSandbox();
          
        }
         
        

     }
       
     
     })
     .catch(error => {
    
     }) 

        },
         checkResponse:function(token,langId){

         let _this = this;

        let interval = setInterval(check,1000);


        function check(){

           
             if(_this.recheckCodeBox){

               _this.recheckCodeBox = false;

                axios.post( '/check-for-submission',{
               token: token,
                langId: langId
                  })
          .then(response => {
             
          
          if(response.status == 200){

            

            

              if(response.data[0].status.description == 'Accepted'){

                 

                  _this.pageContent =  response.data[0].stdout;

                  
                 clearInterval(interval);


              }else if(response.data[0].status.description == 'In Queue'){

                 _this.pageContent = 'In Queue...';

              }else if(response.data[0].status.description == 'Processing'){

                 _this.pageContent = 'Processing...';

              }else{

                 _this.pageContent =  response.data[0].stdout +  '\n Error: \n'  + response.data[0].stderr ;

                 clearInterval(interval);

              }


             if(_this.$root.pageLoaderOpened == false){

             clearInterval(interval);

             }

              

        

         
               _this.recheckCodeBox = true;

          }

          
            
          })
          .catch(error => {

             
             
               _this.pageContent = 'An issue occured,unable to run on sandbox...';

                
               clearInterval(interval);
              
          })

             }

          

        }

        

      },
      runCodeOnSandbox: function(){

          axios.post( '/run-code-on-sandbox-project',{
                panel_id: this.projectData.panel_id,
                  })
          .then(response => {
             
          
          if(response.status == 200){

            

             let token = response.data[0][0].token;

        
              if(response.data[0][0].status.description == 'Accepted'){

                  this.pageContent =  response.data[0][0].stdout ;

                
                

              }else if(response.data[0][0].status.description == 'In Queue'){

                 this.pageContent = 'In Queue...';
                 this.checkResponse(token,response.data[1]);

              }else if(response.data[0][0].status.description == 'Processing'){

                 this.pageContent = 'Processing...';

                 this.checkResponse(token,response.data[1]);

              }else{

                

                this.pageContent =  response.data[0][0].stdout + '\n Error: \n' + response.data[0][0].stderr ;

              }

              

           
             

                

              

             

          }
            
          })
          .catch(error => {

            
             
               this.pageContent = 'An issue occured,unable to run on sandbox...';

                
              
          })

          
      },
        SaveStars:function(){
          
          this.saveLoading = true;
           axios.post( '/save-project-stars',{
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
         axios.get( '/run-panel/' + this.projectData.panel_id)
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