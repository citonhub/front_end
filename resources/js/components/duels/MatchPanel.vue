<template>
    <v-app style="font-family:BodyText;background:transparent;overflow-x:hidden;">

      <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:hidden; overflow-x:hidden; ">
        <div style="overflow-y:auto;position:absolute;left:0; width:100%; height:100%; overflow-x:hidden;">
         <div class="row my-0 py-0 px-2" >

         <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-0" >
         <div class="col-4 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-4 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
           <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">Duel Panel</span>
         </div>
         <div class="col-4 py-0 my-0  text-right"  style="border-bottom:2px solid #4495a2; " >
             <v-btn icon color="#4495a2" @click="goToSettings"><v-icon>mdi-cogs</v-icon></v-btn>
         </div>
      </div>
     </div>

      <div  class="col-12 py-1 my-0 d-flex" style="align-items:center; justify-content:center; position:absolute; width:100%; height:90%;" v-if="this.checkDuelStatus(duel) == 'Voting'">
          <v-icon color="grey">mdi-lock</v-icon>  <span style="font-size:14px; color:grey;">Voting in progress, Panel Locked</span>
      </div>

      <div class="col-12 py-1 my-0" v-else>
         <div class="row my-0 py-1 px-0 mx-1">

             <div class="col-12 py-0 px-1 ">
                <div class="row py-0 my-0">
                   <div class="col-6 py-0 my-0 px-2 text-left">
                      <v-btn  x-small color="#3E8893" v-if="duel.user_type == 'user'"
              style="font-size:10px; font-weight:bolder; color:white;font-family: Headertext; text-transform:capitalize;" @click="makeTeam = true">Make <span class="mx-1" style="text-transform:lowercase;">a</span> team</v-btn>
                 <v-btn  x-small color="#3E8893" v-else
              style="font-size:10px; font-weight:bolder; color:white;font-family: Headertext; text-transform:capitalize;" @click="showShare"> Team link</v-btn>  
                   </div>
                    <div class="col-6 py-0 my-0 px-2 text-right">
                      <v-btn  x-small color="#3E8893" @click="showHowTo"
              style="font-size:10px; font-weight:bolder; color:white;font-family: Headertext; text-transform:capitalize;"> <v-icon class="mr-1">mdi-format-list-text mdi-18px</v-icon> How To</v-btn>  
                   </div>
                </div>  
             </div>

              <v-expansion-panels
         v-model="panel"
          multiple
          dense
         
          class="my-2"
         >
      <v-expansion-panel>
        <v-expansion-panel-header class="header">Front-end

          <template v-slot:actions>
            <v-icon color="#3E8893">mdi-iframe-outline</v-icon>
          </template>
          
        </v-expansion-panel-header>
        <v-expansion-panel-content class="px-0">       
        
            <div class="col-12 py-0 my-0 mx-0 px-0 text-right">
               <v-btn icon @click="addNewFile('front_end')"><v-icon>mdi-plus-circle-outline mdi-18px</v-icon></v-btn>
            </div>
            <v-card tile flat class="col-12 py-1 my-0 " @click="showEditor(file,'front-end')" style="border-bottom:1px solid #c5c5c5; background:#edf6f7;" 
             v-for="(file,index) in this.$root.frontEndFiles" :key="index">
                <div class="row my-0 py-0">
                  <div class="col-2 text-center py-0 my-0 ">
                     <v-icon color="#e34f26" v-if="file.language_type == 'HTML'">mdi-language-html5 mdi-18px</v-icon>
                     <v-icon color="#0066ff"  v-if="file.language_type == 'CSS'">mdi-language-css3 mdi-18px</v-icon>
                     <v-icon color="#e6b800"  v-if="file.language_type == 'JAVASCRIPT'">mdi-language-javascript mdi-18px</v-icon>
                      <v-icon color="#0066ff" v-if="file.language_type == 'TYPESCRIPT'">mdi-language-typescript mdi-18px</v-icon>
                </div>
                 <div class="col-10 py-0 my-0 ">
                    <span class="fileName" style="font-size:12px;">{{returnFileName(file.file_name,file.language_type)}}</span>
                </div>
                </div>
             </v-card>

           

              
          
       
      
        </v-expansion-panel-content>
      </v-expansion-panel>


       <v-expansion-panel v-if="panelData.app_type == 'Multiple-pages' || panelData.panel_language != 'not-set'">
        <v-expansion-panel-header class="header">Back-end

          <template v-slot:actions>
            <v-icon color="#3E8893">mdi-iframe-braces-outline</v-icon>
          </template>
          
        </v-expansion-panel-header>
       <v-expansion-panel-content class="px-0">       
        
            <div class="col-12 py-0 my-0 mx-0 px-0 text-right">
               <v-btn icon @click="addNewFile('back_end')"><v-icon>mdi-plus-circle-outline mdi-18px</v-icon></v-btn>
            </div>
            <v-card tile flat class="col-12 py-1 my-0 " @click="showEditor(file,'back-end')" style="border-bottom:1px solid #c5c5c5; background:#edf6f7;"
             v-for="(file,index) in this.$root.backEndFiles" :key="index">
              <div class="row my-0 py-0">
                  <div class="col-2 text-center py-0 my-0 ">
                      <v-icon color="#0066ff" v-if="file.language_type == 'PHP'">mdi-language-php mdi-18px</v-icon>
                    <v-icon color="#e6b800" v-if="file.language_type == 'PHYTON'">mdi-language-python mdi-18px</v-icon>
                </div>
                 <div class="col-10 py-0 my-0 ">
                    <span class="fileName" style="font-size:12px;">{{returnFileName(file.file_name,file.language_type)}}</span>
                </div>
                </div>
             </v-card>

            
      
        </v-expansion-panel-content>
      </v-expansion-panel>


       <v-expansion-panel v-if="panelData.panel_language != 'not-set'"> 
        <v-expansion-panel-header class="header">Router

          <template v-slot:actions>
            <v-icon color="#3E8893">mdi-router</v-icon>
          </template>
          
        </v-expansion-panel-header>
       <v-expansion-panel-content class="px-0">       
        
            <div class="col-12 py-0 my-0 mx-0 px-0 text-right">
               <v-btn icon @click="addNewRoute('false')"><v-icon>mdi-plus-circle-outline mdi-18px</v-icon></v-btn>
            </div>
            <v-card tile flat class="col-12 py-1 my-0 "  style="border-bottom:1px solid #c5c5c5; background:#edf6f7;" @click="addNewRoute('true',route)"
              v-for="(route,index) in this.$root.panelRoutes" :key="index" >
              <div class="row my-0 py-0">
                  <div class="col-2 text-center py-0 my-0 ">
                     <v-icon color="#2d646c">mdi-routes mdi-18px</v-icon>
                </div>
                 <div class="col-7 py-0 my-0 ">
                    <span class="fileName">{{ route.path }}</span>
                </div>
                 <div class="col-3 py-0 my-0 ">
                    <span class="route">{{route.route_type}}</span>
                </div>
                </div>
             </v-card>

            
      
        </v-expansion-panel-content>
      </v-expansion-panel>

     

       <v-expansion-panel v-if="panelData.panel_language != 'not-set'">
       <v-expansion-panel-header class="header">Database Tables

          <template v-slot:actions>
            <v-icon color="#3E8893">mdi-database</v-icon>
          </template>
          
        </v-expansion-panel-header>
        <v-expansion-panel-content class="px-0">       
        
            <div class="col-12 py-0 my-0 mx-0 px-0 text-right">
               <v-btn icon @click="addDBTable()"><v-icon>mdi-plus-circle-outline mdi-18px</v-icon></v-btn>
            </div>
            <v-card tile flat class="col-12 py-1 my-0 " @click="databaseTable(table)" style="border-bottom:1px solid #c5c5c5; background:#edf6f7;" 
             v-for="(table,index) in this.$root.CodeFilesData[3]" :key="index">
                <div class="row my-0 py-0">
                  <div class="col-2 text-center py-0 my-0 ">
                     <v-icon color="#2d646c">mdi-table mdi-18px</v-icon>
                </div>
                 <div class="col-10 py-0 my-0 ">
                    <span class="fileName">{{table.name}}.tb</span>
                </div>
                </div>
             </v-card>
      
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
         </div>
         <div class="my-5 py-3 "   style="padding-top:120px !important;">

             </div>
      </div>
        
        


      

         </div>
      
        
      </div>




        <span style="position:absolute; top:83%; left:3%; z-index:10;"  class="d-md-none d-inline-block" v-if="duel.user_type == 'team'">
          <v-btn
                color="#35747e"
                small
                @click="showComment"
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-comment-text-outline mdi-18px</v-icon>
              </v-btn>
     </span>

   


      <span style="position:absolute; top:90%; left:3%;z-index:10;" class="d-none d-md-inline-block"  v-if="duel.user_type == 'team'">
          <v-btn
                color="#35747e"
                small
                 @click="showComment"
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-comment-text-outline mdi-18px</v-icon>
              </v-btn>
     </span>

        <span style="position:absolute; top:83%; right:3%; z-index:10;"  class="d-md-none d-inline-block">
          <v-btn
                color="#35747e"
                small
                @click="loadPage"
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-play </v-icon>
              </v-btn>
     </span>

   


      <span style="position:absolute; top:90%; right:3%;z-index:10;" class="d-none d-md-inline-block">
          <v-btn
                color="#35747e"
                small
                 @click="loadPage"
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-play mdi-18px</v-icon>
              </v-btn>
     </span>


    
              <div  style="position:absolute; width:100%;  background:rgba(38, 82, 89,0.6); height:100%; align-items:center;justify-content:center; top:0; z-index:53566;"  @click="makeTeam = false" class="d-flex" v-if="makeTeam">
              <div @click.stop="stopProp">
                     <v-card class="py-1 px-2" width="220" >
                <v-form>
                  <div class="col-12 px-1 py-1 my-2 text-right">
                      
                  </div>
                   <div class="col-12 py-0 my-0 px-2">
                  <v-text-field
                style="font-size:12px;"
                 placeholder="name..."
            label="Team Name"
             dense
             v-model="teamName"
             color="#4495a2"
            
             ></v-text-field>

             </div>

             <div class="col-12 py-2 my-0 px-2 text-center">
                  <v-btn rounded x-small color="#3E8893" style="font-size:10px;  color:white;" @click.stop="createTeam" :loading="loadingTeamBtn" >Create</v-btn>
             </div>
                </v-form>
             </v-card>
              </div>  
        </div>
       

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
      panel:[0,1],
     codeFiles:[],
     Alert:false,
     backEndFiles:[],
     alertMsg:'',
     frontEndFiles:[],
     language:'',
     loadingTeamBtn:false,
     duel:[],
     makeTeam:false,
     teamName:'',
     panelData:[],
     localChannel:[],
     lockPanel: false,
   }
 },
    mounted(){
       this.$root.showTabs=true;
        this.$root.showHeader = false;
        this.$root.checkIfUserIsLoggedIn('duel');
        this.trackPanel();
        this.trackUser();
        this.fetchDuel();
      },
 methods:{
    activateBot:function(){
         this.$root.selectedPage  = this.$root.userPageTrack.filter((page)=>{
            return page.page_name == 'duel_panel';
          });
         
          if(this.$root.selectedPage.length != 0){
               
              if(this.$root.selectedPage[0].status == 0){
                 this.$root.showBoard = true;
         this.$root.boardContent = 'Congratulations ' + this.$root.username + ' 🥳, you joined first duel. Write and run your codes here. Have some more questions? Click on \'How To\' button to answer them.';
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
   showHowTo: function(){
      this.$router.push({ path: '/how-to' });
   },
     trackPanel: function(){

        if( this.$route.params.type != 'user' && this.$root.localChannel.length == 0){
          
          var channel = Echo.private('panel.' + this.$route.params.type)
       .listen('.PanelChannel',(e) => {
             
    
      if(e.actionType == 'new-file'){

       
      
          

      
         this.$root.codeFiles.unshift(e.data);

          if(e.data.type == "front_end"){
            this.$root.frontEndFiles.unshift(e.data);
          }

          if(e.data.type == "back_end"){
           this.$root.backEndFiles.unshift(e.data);
          }
         

      
         
      }

       if(e.actionType == 'new-route'){
           
            this.$root.panelRoutes.unshift(e.data);

       }

       if(e.actionType == 'new-DBtable'){
         
         this.$root.CodeFilesData[3].unshift(e.data);
       }

       if(e.actionType == 'new-comment'){

          this.$root.projectComments.unshift(e.data);

       }

       if(e.actionType == 'new-comment-like'){
          
          this.$root.projectComments.map((comment)=>{
         
         if(comment.id == e.data){
         comment.likes = comment.likes + 1;
         }
          });

       }

       if(e.actionType == 'new-file-update'){
          
          if(e.data.type == 'front_end'){
         
          this.$root.frontEndFiles.map((file)=>{
             if(file.id == e.data.id){
                file.content = e.data.content;
             }
          });

          }

           if(e.data.type == 'back_end'){
         
          this.$root.backEndFiles.map((file)=>{
             if(file.id == e.data.id){
                file.content = e.data.content;
             }
          });

          }
          
           this.$root.codeEditorArray.map((file)=>{
             if(file.id == e.data.id){
                file.content = e.data.content;
             }
          });
       }

        })

      this.$root.localChannel.push(channel);

        }
   
       
     },

   showShare:function(){

         this.$root.shareText  = 'Join ' + this.$root.selectedDuel.user_team.name + ' on CitonHub Duel';
         this.$root.shareLink = 'https://www.citonhub.com/link/duel-team/' + this.$root.selectedDuel.user_team.team_code + '/' + this.$root.username;

         this.$root.showShare = true;
   },
   createTeam:function(){
      if(this.teamName == ''){
       return;
      }
       this.loadingTeamBtn = true;
      axios.post('/make-team',{
         duel_id :   this.$route.params.duelId,
         name : this.teamName
      })
      .then(response => {
      
      if (response.status == 201) {
        
         this.loadingTeamBtn = false;
          this.makeTeam = false;
          this.$root.selectedDuel.user_type = "team";
          this.$root.selectedDuel.user_team = response.data;
       

     }
       
     
     })
     .catch(error => {
       this.showAlert(5000,'Failed- ' + error);
              this.loadingTeamBtn = false;
     }) 


   },
   stopProp:function(){

   },
    showAlert:function(duration,text){
        this.Alert = true;
        this.alertMsg = text;
        let _this = this;
     
     setTimeout(function(){
        _this.Alert = false;
     },duration);

    },
   addDBTable: function(){
      
      this.$router.push({ path: '/duel/' + this.$route.params.duelId +   '/create-db-table' });

   },
   addNewRoute: function(is_edit,route = []){
      this.$root.is_edit = is_edit;

         if(is_edit == 'true'){
           this.$root.selectedRoute = route;
         }
          
       this.$router.push({ path: '/duel/' + this.$route.params.duelId +   '/add-panel-route' });
   },
   showComment:function(){
     this.$router.push({ path: '/duel/' + this.$route.params.duelId +   '/panel/' + this.$route.params.type + '/comments/view' });
   },
     PanelSettingsCheck(settingStatus){
          if(!settingStatus.is_set){
             this.$router.push({ path: '/duel/' + this.$route.params.duelId +   '/panel/new/settings' });
          }
      },
   showEditor: function(codeBox,catType){
       this.$root.forcePanelReload = false;
       var thiscodebox = this.$root.codeEditorArray.filter((code)=>{
         return code.id == codeBox.id;
       });

       if(thiscodebox.length == 0){
           this.$root.codeEditorArray.unshift(codeBox);
       }
       this.$root.selectedFileCatType = catType;
       this.$root.EditorLanguage = codeBox.language_type;
       this.$root.codeEditorContent = codeBox.content;
       this.$root.selectedFileId = codeBox.id;
    
    this.$router.push({ path: '/duel/' +  this.$route.params.duelId  +'/code-editor' });
   },
   databaseTable: function(database){
      this.$root.SelectedTable = database;
     
       this.$router.push({ path: '/duel/' +  this.$route.params.duelId  +'/db-table' });

    
   },
    goBack() {

         this.$root.CodeFilesData = [];
     
      this.$router.push({ path: '/duel/' + this.$route.params.duelId +   '/board' + '/user' });

      
        },
   addNewFile:function(codeType){
        this.$root.panelLanguage = this.panelData.panel_language;
       this.$router.push({ path: '/duel/' + this.$route.params.duelId +   '/' + codeType + '/add-new-file' });
   },
   goToSettings:function(){
      this.$router.push({ path: '/duel/' + this.$route.params.duelId +   '/panel/new/settings' });
   },
   fetchDuel: function(){
      if(this.$root.selectedDuel.length != 0){

        this.duel = this.$root.selectedDuel;

         this.fetchCodeFiles();

      }else{
       
       axios.get('/fetch-this-duel/' + this.$route.params.duelId + '/' + this.$route.params.type)
      .then(response => {
      
      if (response.status == 200) {
        
         
       var duel = response.data[0];

        this.duel = duel;
        this.$root.selectedDuel =  duel;

        this.fetchCodeFiles();
      
        let status = this.checkDuelStatus(duel);

        if(status == 'Voting'){
           
          this.lockPanel = true;
           
        }
       

     }
       
     
     })
     .catch(error => {
    
     }) 

      }
     
   },
   fetchCodeFiles: function(){
       


      if(this.$root.CodeFilesData.length != 0 && !this.$root.forcePanelReload){
         
           this.$root.panelRoutes = this.$root.CodeFilesData[2];

        this.codeFiles = this.$root.CodeFilesData[0];

        this.$root.frontEndFiles = this.codeFiles.filter((file)=>{
          return file.type == "front_end"
        });

        this.$root.backEndFiles = this.codeFiles.filter((file)=>{
          return file.type == "back_end"
        });
        

        this.PanelSettingsCheck(this.$root.CodeFilesData[1]);

         this.panelData = this.$root.CodeFilesData[1];

         return;
      }
      
       axios.get('/fetch-code-files/' + this.$route.params.duelId)
      .then(response => {
      
      if (response.status == 200) {
        
        
        this.$root.CodeFilesData = response.data;

       this.codeFiles = response.data[0];

        this.PanelSettingsCheck(response.data[1]);

         this.panelData = response.data[1];
        
        this.$root.panelRoutes = response.data[2];
         

        this.$root.frontEndFiles = this.codeFiles.filter((file)=>{
          return file.type == "front_end"
        });

        this.$root.backEndFiles = this.codeFiles.filter((file)=>{
          return file.type == "back_end"
        });

    
        
        

     }
       
     
     })
     .catch(error => {
    
     }) 
   },

  checkDuelStatus:function(duel){
      
      if(duel.started == 0){
         return 'Pending'
      }
             
          let now  = moment();
           let terminalDateToMoment = moment(duel.duel_terminal_time);
           let votingDateToMoment = moment(duel.duel_voting_time);
          
          let differenceInSeconds = votingDateToMoment.diff(now,'seconds');

          let differenceInSecondsForVoting = votingDateToMoment.diff(now,'seconds');
            
          if(differenceInSeconds <= 0){
             return 'Ended';
          }else{
             if(differenceInSecondsForVoting <= 3600){
                  return 'Voting'
             }
            return 'Active'
          }
          
       },
   loadPage:function(){
      this.$router.push({ path: '/duel/' + this.$route.params.duelId +   '/page-loader' });
   },
  
   returnFileName: function(fileName,fileType){
       var file_extension = this.languageExtensions(fileType);

       return fileName + '.' + file_extension;
   },
   languageExtensions: function(language){
        if(language == 'HTML'){
           return 'html';
         }
         if(language == 'CSS'){
            return 'css';
         }
          if(language == 'PYTHON'){
           return 'py';
         }
          if(language == 'PHP'){
           return 'php';
         }
          if(language == 'JAVASCRIPT'){
           return 'js';
         }
          if(language == 'VUEJS'){
           return 'vue';
         }
          if(language == 'SQL'){
           return 'sql';
         }
          if(language == 'C'){
           return 'c';
         }
          if(language == 'C++'){
           return 'cpp';
         }
          if(language == 'JAVA'){
           return 'java';
         }
          if(language == 'C#'){
           return 'cs';
         }
          if(language == 'ERLANG'){
          return 'erl';
         }
          if(language == 'COFFEESCRIPT'){
           return 'coffee';
         }
          if(language == 'LIVESCRIPT'){
           return 'ls';
         }
         if(language == 'DJANGO'){
           return 'py';
         }
          if(language == 'KOTLIN'){
           return 'kt';
         }
          if(language == 'FOTRAN'){
           return 'for';
         }
          if(language == 'MARKDOWN'){
          return 'md';
         }
          if(language == 'PERL'){
          return 'pl';
         }
          if(language == 'R'){
           return 'r';
         }
          if(language == 'RUBY'){
           return 'rb';
         }
      }
 }   
}
</script>
<style>
.header{
    font-size: 12px;
    color: #4d4d4d;
}
.fileName{
    font-size: 13px;
    color: #173236;
    font-family: OtherText;
}
.route{
  font-size: 12px;
    color: #173236;
    text-transform: uppercase;
}
</style>