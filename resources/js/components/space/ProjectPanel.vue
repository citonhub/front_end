<template>
    <v-app style="font-family:BodyText;background:transparent;">

      <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:hidden; overflow-x:hidden; ">
        <div style="overflow-y:auto;position:absolute;left:0; width:100%; height:100%;">
         <div class="row my-0 py-0 px-2" >

         <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-0" >
         <div class="col-4 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-4 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
           <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">Project Panel</span>
         </div>
         <div class="col-4 py-0 my-0  text-right"  style="border-bottom:2px solid #4495a2; " >
             <v-btn icon color="#4495a2" @click="goToSettings" v-if="checkIfOwner()"><v-icon>mdi-cogs</v-icon></v-btn>
         </div>
      </div>
     </div>

     

      <div class="col-12 py-0 my-0" >
         <div class="row my-0 py-1 px-0 mx-1">

            <div class="col-12 py-0 px-1 ">
                <div class="row py-0 my-0">
                  
                    <div class="col-12 py-0 my-0 px-2 text-right">
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
        
            <div class="col-12 py-0 my-0 mx-0 px-0 text-right" v-if="checkIfOwner()">
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
                    <span class="fileName">{{returnFileName(file.file_name,file.language_type)}}</span>
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
        
            <div class="col-12 py-0 my-0 mx-0 px-0 text-right" v-if="checkIfOwner()">
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
                    <span class="fileName">{{returnFileName(file.file_name,file.language_type)}}</span>
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
        
            <div class="col-12 py-0 my-0 mx-0 px-0 text-right" v-if="checkIfOwner()">
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
        
            <div class="col-12 py-0 my-0 mx-0 px-0 text-right" v-if="checkIfOwner()">
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


       <span style="position:absolute; top:82.5%; left:3%; z-index:10;"  class="d-md-none d-inline-block">
         <v-btn
                color="#35747e"
                small
                
                 @click="showShare"
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-share-variant mdi-18px</v-icon>
              </v-btn>
     </span>

   


      <span style="position:absolute; top:84%; left:3%;z-index:10;" class="d-none d-md-inline-block">
          <v-btn
                color="#35747e"
                small
                 @click="showShare"
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-share-variant mdi-18px</v-icon>
              </v-btn>
     </span>


        <span style="position:absolute; top:82.5%; right:3%; z-index:10;"  class="d-md-none d-inline-block">
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

   


      <span style="position:absolute; top:84%; right:3%;z-index:10;" class="d-none d-md-inline-block">
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

      </div>
    </v-app>
</template>
<script>
export default {
     data(){
   return{
     panel:[],
     codeFiles:[],
     backEndFiles:[],
     frontEndFiles:[],
     language:'',
     duel:[],
     panelData:[],
     
     
   }
 },
    mounted(){
       this.$root.showTabs=true;
        this.$root.showHeader = false;
        this.fetchProject();
        this.fetchCodeFiles();
       this.trackPanel();
      },
 methods:{
    showHowTo: function(){
      this.$router.push({ path: '/how-to' });
   },
   addDBTable: function(){
      
      this.$router.push({ path: '/' + this.$route.params.projectSlug +   '/create-db-table' });

   },
     trackPanel: function(){

        if( this.$root.localChannel.length == 0){
          
          var channel = Echo.private('panel.' + this.$route.params.projectSlug)
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
   fetchProject: function(){
         
         if( this.$root.projectData.length != 0){

         }else{
          
          axios.get('/fetch-project-' + this.$route.params.projectSlug)
      .then(response => {
      
      if (response.status == 200) {
        
        
       this.$root.projectData = response.data[0];

       this.$root.ProjectMembers = response.data[2];

     }
       
     
     })
     .catch(error => {
    
     }) 
         }
         

        },
        showShare:function(){
           this.$root.shareText = 'Check out what I built';
           this.$root.shareLink = 'https://citonhubnew.com/share/project/' + this.$route.params.projectSlug ; 
            this.$root.showShare = true;
        },
      checkIfOwner:function(){
         var member = this.$root.ProjectMembers.filter((member)=>{
             return member.user_id == this.$root.user_temp_id;
         });

           if(member.length == 0){
            
            return false;
         }else{
           return true;
         }
        
      },
   addNewRoute: function(is_edit,route = []){
      this.$root.is_edit = is_edit;

         if(is_edit == 'true'){
           this.$root.selectedRoute = route;
         }
          
       this.$router.push({ path: '/' + this.$route.params.projectSlug +   '/add-panel-route' });
   },
     PanelSettingsCheck(settingStatus){
          if(!settingStatus.is_set){
             this.$router.push({ path: '/' + this.$route.params.projectSlug +   '/panel/settings' });
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
    
    this.$router.push({ path: '/' +  this.$route.params.projectSlug  +'/code-editor' });
   },
   databaseTable: function(database){
      this.$root.SelectedTable = database;
     
       this.$router.push({ path: '/' +  this.$route.params.projectSlug  +'/db-table' });

    
   },
    goBack() {
         this.$root.CodeFilesData = [];
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
   addNewFile:function(codeType){
        this.$root.panelLanguage = this.panelData.panel_language;
       this.$router.push({ path: '/' + this.$route.params.projectSlug +   '/' + codeType + '/add-new-file' });
   },
   goToSettings:function(){
      this.$router.push({ path: '/' + this.$route.params.projectSlug +   '/panel/settings' });
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
      
       axios.get('/fetch-code-files-project/' + this.$route.params.projectSlug)
      .then(response => {
      
      if (response.status == 200) {
        
        
        this.$root.CodeFilesData = response.data;

       this.codeFiles = response.data[0];
         this.$root.codeFiles = response.data[0];

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

   checkDuelStatus:function(terminalDate,votingDate){
          let now  = moment();
           let terminalDateToMoment = moment(terminalDate);
           let votingDateToMoment = moment(votingDate);
          
          let differenceInSeconds = votingDateToMoment.diff(now,'seconds');

          let differenceInSecondsForVoting = votingDateToMoment.diff(terminalDateToMoment,'seconds');
            
          if(differenceInSeconds <= 0){
             return 'Ended';
          }else{
             if(differenceInSecondsForVoting > 0){
                  return 'Voting'
             }
            return 'Active'
          }
          
       },

   loadPage:function(){
      this.$router.push({ path: '/' + this.$route.params.projectSlug +   '/page-loader' });
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