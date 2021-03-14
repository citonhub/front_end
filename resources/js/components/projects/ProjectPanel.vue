<template>
<div>
 
 
  
  <!-- small and medium and large screen -->
    
     <div class="col-12  px-0  d-block  py-0" style="position:fixed; left:0; height:100%; top:0%; background:white; z-index:99999999999999999999;">

      <div class="col-12 py-0 px-0 px-md-2 fixed-top" style="position:fixed;width:100%;border-bottom:2px solid #3C87CD; border-radius:0px; background:white; z-index:9999999999999999999;">
        
         <div class="d-lg-block d-none">
              <div class="row py-1 my-0" >
           <div class="col-4 py-0 my-0 text-left">
           <v-btn @click="closePanel()" icon ><v-icon style="font-size:25px;">las la-times</v-icon> </v-btn>
          
           </div>
            <div class="col-4 py-0 my-0 d-flex" style="align-items:center;justify-content:center;">
              <template v-if="this.$root.projectData.project">
         <div style="font-family:MediumFont; font-size:13px;" >{{this.$root.projectData.project.title}} </div>
              </template>
               
           </div>
            <div class="col-4 py-0 my-0  d-flex flex-row">

                <div class="ml-auto d-flex flex-row">

                   <template v-if="this.$router.currentRoute.path.indexOf('panel-loader') >= 0">
               
                   <div class="mx-1 " >
                       <v-btn icon  @click="shareProject" ><v-icon style="font-size:20px;">mdi mdi-share-variant</v-icon> </v-btn>
                     </div>

                      <div class="mx-1 " v-if="that.$root.projectData.project.is_web">
                       <v-btn icon  @click="showFullPage" ><v-icon style="font-size:20px;">mdi mdi-launch</v-icon> </v-btn>
                     </div>

               </template>

               <v-btn @click="openGit()" icon>
                 <v-icon style="font-size:25px;">lab la-github</v-icon>
               </v-btn>
           <v-btn icon @click="openSettings()"><v-icon style="font-size:25px;">las la-cog</v-icon> </v-btn>

                 </div>
              
           </div>

        </div>
         </div>
          <div class="d-lg-none d-block">
              <div class="row py-1 my-0" v-if="this.$router.currentRoute.path.indexOf('editor') <= 0 && this.$router.currentRoute.path.indexOf('panel-loader') <= 0">
           <div class="col-2 py-0 my-0 text-left">
            <v-btn  @click="showSideBar = true" icon class="ml-1"><v-icon style="font-size:25px;">las la-bars</v-icon> </v-btn>
           </div>
            <div class="col-8 py-0 my-0 d-flex" style="align-items:center;justify-content:center;">
                <template v-if="this.$root.projectData.project">

                     <div style="font-family:MediumFont; font-size:13px;" >{{this.$root.projectData.project.title}} </div>

                </template>

             
           </div>
            <div class="col-2 py-0 my-0 text-right">
           <v-btn icon @click="openSettings()"><v-icon style="font-size:25px;">las la-cog</v-icon> </v-btn>
           </div>

        </div>
         </div>
       
            <div class="d-lg-none d-flex flex-row py-1" style="background:#F3F8FC; align-items:center; " v-if="this.$router.currentRoute.path.indexOf('editor') >= 0" >
                 
                  <div class="mx-1 " >
                       <v-btn icon @click="showSideBar = true" ><v-icon style="font-size:20px;">las la-bars</v-icon> </v-btn>
                  </div>

                  <div class=" " style="overflow-x:auto; white-space:nowrap;width:100%;" v-if="this.$router.currentRoute.path.indexOf('editor') >= 0">
                      <v-chip v-for="(file,index) in this.$root.codeEditorArray" :key="index"
      class="ma-1 mx-1 ml-0 fileText d-inline-block"
      close
      small
      @click:close="removeCode(file)"
      @click="showCode(file)"
     :style=" that.$root.selectedFileId == file.id ? 'color:white;background-color:#3C87CD;' : 'background:transparent;border:1px solid #3C87CD;'"
      >
      {{file.file_name + '.' + languageExtensions(file.language_type)}}
    </v-chip>  

                  </div>

                   <div class="ml-auto " >
                       <v-btn icon @click="copyText" ><v-icon style="font-size:20px;">las la-copy</v-icon> </v-btn>
                  </div>

              
            </div>

            <!-- loader -->

              <div class="d-lg-none d-flex flex-row py-1" style="background:#F3F8FC; align-items:center; "  v-if="this.$router.currentRoute.path.indexOf('panel-loader') >= 0">
                 
                  <div class="mx-1 " >
                       <v-btn icon @click="showSideBar = true" ><v-icon style="font-size:20px;">las la-bars</v-icon> </v-btn>
                  </div>

                  <div class="ml-auto d-flex flex-row" style="align-items:center;" >
                      
                       <div class="mx-1 " >
                       <v-btn icon  @click="shareProject" ><v-icon style="font-size:20px;">mdi mdi-share-variant</v-icon> </v-btn>
                     </div>

                      <div class="mx-1 " v-if="that.$root.projectData.project.is_web">
                       <v-btn icon  @click="showFullPage" ><v-icon style="font-size:20px;">mdi mdi-launch</v-icon> </v-btn>
                     </div>

                  </div>

              
            </div>

            <!-- ends -->
               
              
      </div>

      <div class="col-12 py-1 px-0" style="position:absolute;width:100%;height:100%; background:white;">
         <!-- side bar -->
          
          <div class="col-lg-2 col-md-4  scroller d-lg-block d-none" style="position:absolute;height:98%; background:#ffffff; border-right:1px solid #c5c5c5; top:0; padding-top:30px; overflow-y:auto; overflow-x:hidden;">
           
           <template v-if="filesAreReady">

              <panel-side :fromDevice="'large'"></panel-side>

           </template>
            <template v-else>

           <div style="position:absolute; height:100%; width:100%; align-items:center; justify-content:center;" class="d-flex">

          <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

           </div>


         </template>

           
           
       
       
          </div>


          <v-slide-x-transition>
   <div class="col-12 d-lg-none  py-0 px-0" style="position:fixed; width:100%; top:0; height:100%; background: rgba(27, 27, 30, 0.32);z-index:9999999999999;" @click="showSideBar = false" v-if="showSideBar">

   <div style="position:absolute; height:100%; width:70%; left:0;" >

     <div class="col-md-7 pt-2 scroller" style="background:white;height:100%; overflow-y:auto; overflow-x:hidden; "  @click.stop="showSideBar = true">
      
         <template v-if="filesAreReady">

              <panel-side :fromDevice="'small'"></panel-side>

           </template>

            <template v-else>
             
             <div style="position:absolute; height:100%; width:100%; align-items:center; justify-content:center;" class="d-flex">

          <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

           </div>

         </template>
           
      
     </div>

   </div>

 </div>
 </v-slide-x-transition>

      
          <!-- message options -->

                             <div  v-if="showMoreOptions" @click="showMoreOptions = false" class="col-12 d-lg-none py-0 px-0 d-flex" style="align-items:center; justify-content:center; background: rgba(27, 27, 30, 0.1); position:fixed; height:100%; top:0%;z-index:999999999999;" >
                                  
                                  <more-options></more-options>
                            </div>

                            <!-- ends -->

         <!-- ends -->

   <!-- panel viewer -->

      <div  class=" col-lg-10 offset-lg-2   "  style=" position:absolute;height:95%; background:#F3F8FC; top:5%;">


         <template v-if="loadingProject">
           <div style="position:absolute; height:100%; width:100%; align-items:center; justify-content:center;" class="d-flex">

          <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

           </div>

         </template>
         <template v-else>

            <router-view></router-view>

         </template>
       
      

         </div>

   <!-- ends -->
       
      </div>
   </div>

  <!-- ends -->
</div>
  
</template>

<script>
  const panelSide = () => import(
    /* webpackChunkName: "panel-side" */ './PanelSide.vue'
  );

  const MoreOptions = () => import(
    /* webpackChunkName: "MoreOptionsPanel" */ './MoreOptions.vue'
  );


import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

 export default {
    data () {
      return {
        showSideBar:false,
        that:this,
        loadingProject:false,
        filesAreReady: false,
        showMoreOptions:false,
      }
    },
    components: {
        panelSide,
        MoreOptions
    },
    mounted(){
       
      this.$root.codeEditorArray= [];
      this.$root.codeEditorContent = '';
     this.fetchProjectData();
      this.$root.projectPanelComponent = this;

    },
    methods:{
      showCode:function(codeBox){
        

        this.$root.codeEditorComponent.showCode(codeBox);

      },
      removeCode:function(codeBox){

           this.$root.codeEditorComponent.removeCode(codeBox);
      },
      languageExtensions:function(language){
           
              if(language == 'HTML'){
             return 'html';
         }
         if(language == 'CSS'){
          return 'css';
         }

          if(language == 'VUE'){
          return 'vue';
         }

          if(language == 'MD'){
          return 'md';
         }

          if(language == 'PYTHON(3.8.1)'){
           return 'py';
         }
    
       if(language == 'PYTHON 3.81'){
           return 'py';
         }

         if(language == 'PYTHON For ML(3.7.7)'){
           return 'py';
         }

         if(language == 'PYTHON(2.7.17)'){
           return 'py';
         }
          if(language == 'PHP'){
            return 'php';
         }
          if(language == 'JAVASCRIPT(Node)'){
           return 'js';
         }

          if(language == 'JAVASCRIPT'){
           return 'js';
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
          if(language == 'KOTLIN'){
         return 'kt';
         }
          if(language == 'FOTRAN'){
          return 'for';
         }
          if(language == 'PERL'){
           return 'pl';
         }
          if(language == 'R'){
            return 'r';
         }
         if(language == 'GO'){
            return 'go';
         }
         if(language == 'HASKELL'){
           return 'hs';
         }
          if(language == 'RUBY'){
            return 'rb';
         }
         if(language == 'LUA'){
           
             return 'lua';

         }
         if(language == 'PASCAL'){

             return 'pas';
         }
         if(language == 'RUST'){

             return 'rs';
         }
         if(language == 'SCALA'){
           
              return 'scala';

         }
         if(language == 'SWIFT'){

               return 'swift';

         }
         if(language  == 'TYPESCRIPT'){

             return 'ts';

         }

      },
       showAlert:function(title='',message,type){
       
       if(type == 'info'){

          iziToast.info(
        { 
       title: title,
       message: message,
       timeout:2000,
       zindex:'9999999999',
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )

       }

       if(type == 'success'){
         iziToast.success(
        { 
       title: title,
       message: message,
        timeout:2000,
       zindex:'9999999999',
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       if(type == 'warning'){

          iziToast.warning(
        { 
       title: title,
        timeout:2000,
       message: message,
       zindex:'9999999999',
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )

       }

       if(type == 'error'){
         iziToast.error(
        { 
       title: title,
       message: message,
        timeout:2000,
       zindex:'9999999999',
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       

    },
     copyText () { 

          const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

      copyToClipboard(this.$root.codeEditorComponent.code);

        this.showAlert('Copied!','Copied to clipboard','success');
         
        
        },
      shareProject:function(){
          
          this.$root.shareLink =  'https://link.citonhub.com/project/'+ this.$route.params.project_slug;

          this.$root.shareText = 'Check out this project on Citonhub';
          
          this.$root.infoText = 'Share your project with others';

          this.$root.alertComponent =  this.$root.projectPanelComponent;

          this.$root.showInvitation = true;
    },
    showFullPage:function(){

        window.open('/run-panel/' + this.$root.projectData.project_panel.panel_id , '_blank');

     },
       fetchProjectData:function(){

          this.loadingProject  = true;

             let storedProjectData = this.$root.getLocalStore('user_projects_data_' +  this.$route.params.project_slug + this.$root.username);

            storedProjectData.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);
                     
                      this.$root.projectData = finalResult;
                    
                      this.$root.ProjectMembers = finalResult.project_owner;
                   
 
                  this.loadingProject = false;
                  this.filesAreReady = true;

                   if(this.$root.projectData.project.is_web){

                      this.showEditor(this.$root.projectData.project_files.code_files[0],'front-end');

                   }else{
                       this.showEditor(this.$root.projectData.project_files.code_files[0],'code-file');
                   }

                 

              this.checkForNewProjectData();

                 }else{
            
           
            axios.get( '/fetch-project-data/' + this.$route.params.project_slug)
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('user_projects_data_' +  this.$route.params.project_slug + this.$root.username,response.data);
        
     
         this.$root.projectData = response.data;

          this.$root.ProjectMembers = response.data.project_owner;

            this.filesAreReady = true;
        
          if(this.$root.projectData.project.is_web){

                      this.showEditor(this.$root.projectData.project_files.code_files[0],'front-end');

                   }else{
                       this.showEditor(this.$root.projectData.project_files.code_files[0],'code-file');
                   }
         
     
         this.loadingProject = false;
       
     }
       
     
     })
     .catch(error => {

        this.loadingProject = false;
    
     }) 

                 }
            })

       },
       checkForNewProjectData:function(){
       
        axios.get( '/fetch-project-data/' + this.$route.params.project_slug)
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('user_projects_data_' +  this.$route.params.project_slug + this.$root.username,response.data);
        
     
         this.$root.projectData = response.data;

          this.$root.ProjectMembers = response.data.project_owner;

       
     }
       
     
     })
     .catch(error => {

       
     }) 
       },
       showEditor: function(codeBox,catType){
   
       this.$root.SelectedCodeBox = codeBox;
       var thiscodebox = this.$root.codeEditorArray.filter((code)=>{
         return code.id == codeBox.id;
       });

       this.$root.codeEditorArray.map((codeFile)=>{
          
          if(codeFile.id == codeBox.id){
           
            codeFile.content = codeBox.content;
            
           }

       });

       if(thiscodebox.length == 0){
           this.$root.codeEditorArray.unshift(codeBox);
       }
       this.$root.selectedFileCatType = catType;
       this.$root.EditorLanguage = codeBox.language_type;
       this.$root.codeEditorContent = codeBox.content;
       this.$root.selectedFileId = codeBox.id;

      
          this.$router.push({ path: '/board/projects/panel/'+ this.$route.params.project_slug + '/editor'});
      
  
   },
      closePanel() {
       if(this.$root.viewFromPost){

                 this.$router.push({ path: '/hub/post/' +  this.$root.selectedPost.post_id  });

               
 
                 this.$root.viewFromPost = false;

                 return
           }
           
         if(this.$root.panelFromChallenges){

           this.$root.panelFromChallenges = false;

              this.$router.push({path:'/board/challenges/panel/' + this.$root.selectedChallenge.duel_id +  '/description' })

         }else{

             this.$router.push({ path: '/board/projects/list' });

         }
       
      },

      openSettings(){
        this.$router.push({ path: '/board/projects/panel/'+  this.$route.params.project_slug +'/set-panel' });
      },

       openGit(){
        //    this.$root.projectPanelComponent.showSideBar = false
         this.$router.push({path: '/board/projects/panel/' + this.$root.projectData.project.project_slug + '/add-git'})
         console.log(this.$root.projectData.project.project_slug )
      }
    }
  }
</script>
<style scoped>
.scroller::-webkit-scrollbar {
  width: 6px;
}

 
.scroller::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid darkgrey;
}
</style>