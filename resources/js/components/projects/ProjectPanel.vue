<template>
<div>
 
 
  
  <!-- small and medium and large screen -->
    
     <div class="col-12   px-0 d-block  py-0" style="position:fixed; left:0; height:100%; top:0%; background:white; z-index:99999999999999999999;">

      <div class="col-12 py-0 fixed-top" style="position:fixed;width:100%;border-bottom:2px solid #3C87CD; border-radius:0px; background:white; z-index:9999999999999999999;">
        
         <div class="d-md-block d-none">
              <div class="row py-1 my-0" >
           <div class="col-2 py-0 my-0 text-left">
           <v-btn @click="closePanel()" icon><v-icon style="font-size:25px;">las la-times</v-icon> </v-btn>
           </div>
            <div class="col-8 py-0 my-0 d-flex" style="align-items:center;justify-content:center;">
                <div style="font-family:MediumFont; font-size:13px;" >Project title 1 </div>
           </div>
            <div class="col-2 py-0 my-0 text-right">
           <v-btn icon @click="openSettings()"><v-icon style="font-size:25px;">las la-cog</v-icon> </v-btn>
           </div>

        </div>
         </div>
          <div class="d-md-none d-block">
              <div class="row py-1 my-0" v-if="this.$router.currentRoute.path.indexOf('editor') <= 0">
           <div class="col-2 py-0 my-0 text-left">
           <v-btn @click="closePanel()" icon><v-icon style="font-size:25px;">las la-times</v-icon> </v-btn>
           </div>
            <div class="col-8 py-0 my-0 d-flex" style="align-items:center;justify-content:center;">
                <div style="font-family:MediumFont; font-size:13px;" >Project title 1 </div>
           </div>
            <div class="col-2 py-0 my-0 text-right">
           <v-btn icon @click="openSettings()"><v-icon style="font-size:25px;">las la-cog</v-icon> </v-btn>
           </div>

        </div>
         </div>
       
            <div class="d-md-none d-block" >
                  <div class="row" style="background:#F3F8FC ">
                  <div class="col-2  py-0 " >
                       <v-btn icon @click="showSideBar = true" ><v-icon style="font-size:20px;">las la-bars</v-icon> </v-btn>
                  </div>

                  <div class="col-10  py-1 " style="overflow-x:auto; white-space:nowrap;" v-if="this.$router.currentRoute.path.indexOf('editor') >= 0">
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

                </div>
            </div>
               
              
      </div>

      <div class="col-12 py-1 px-0" style="position:absolute;width:100%;height:100%; background:white;">
         <!-- side bar -->
          
          <div class="col-lg-2 col-md-4  scroller d-md-block d-none" style="position:absolute;height:98%; background:#ffffff; border-right:1px solid #c5c5c5; top:0; padding-top:30px; overflow-y:auto; overflow-x:hidden;">
           
             <panel-side></panel-side>
       
          </div>


          <v-slide-x-transition>
   <div class="col-12 d-md-none  py-0 px-0" style="position:fixed; width:100%; top:0; height:100%; background: rgba(27, 27, 30, 0.32);z-index:9999999999999;" @click="showSideBar = false" v-if="showSideBar">

   <div style="position:absolute; height:100%; width:70%; left:0;" >

     <div class="col-md-6 pt-2 scroller" style="background:white;height:100%; overflow-y:auto; overflow-x:hidden; "  @click.stop="showSideBar = true">
         <panel-side></panel-side>
     </div>

   </div>

 </div>
 </v-slide-x-transition>

         <!-- ends -->

   <!-- panel viewer -->

      <div  class=" col-lg-10 offset-lg-2  col-md-8 offset-md-4 "  style=" position:absolute;height:95%; background:#F3F8FC; top:5%;">
       
       <router-view></router-view>

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

import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

 export default {
    data () {
      return {
        showSideBar:false,
        that:this,
        loadingProject:false,
        
      }
    },
    components: {
        panelSide 
    },
    mounted(){
       this.$root.projectData = [];
      this.$root.codeEditorArray= [];
      this.$root.codeEditorContent = '';
     this.fetchProjectData();
      this.$root.projectPanelComponent = this;

    },
    methods:{
      showCode:function(codeBox){

        this.$root.codeEditorComponent.showCode(codeBox);

      },
      removeCode:function(){
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
       zindex:'9999999999',
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       

    },
       fetchProjectData:function(){

          this.loadingProject  = true;

             let storedProjectData = this.$root.getLocalStore('user_projects_data_' +  this.$route.params.project_slug + this.$root.username);

            storedProjectData.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);
                     
                      this.$root.projectData = finalResult;
                    
                   
 
                  this.loadingProject = false;

                   if(this.$root.projectData.project.is_web){

                      this.showEditor(this.$root.projectData.project_files.code_files[0],'front-end');

                   }else{
                       this.showEditor(this.$root.projectData.project_files.code_files[0],'code-file');
                   }

                 

              // this.checkForNewProjectData();

                 }else{
            
           
            axios.get( '/fetch-project-data/' + this.$route.params.project_slug)
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('user_projects_data_' +  this.$route.params.project_slug + this.$root.username,response.data);
        
     
         this.$root.projectData = response.data;
        
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
         this.$router.push({ path: '/board/projects/list' });
      },

      openSettings(){
        this.$router.push({ path: '/board/projects/panel/'+  this.$route.params.project_slug +'/set-panel' });
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