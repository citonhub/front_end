<template>
<div>
  <!-- small and medium and large screen -->

     <div class="col-12  px-0  d-flex flex-column  py-0" style="position:fixed; left:0; height:100%; top:0%; background:white; z-index:99999999999999999999;">

      <div class=" py-0 px-0 px-md-2 " style="height:auto;border-bottom:2px solid #3C87CD; width:100%; border-radius:0px;">


         <div class="d-lg-block d-none">
              <div class="row py-1 my-0" >
           <div class="col-4 py-0 my-0 text-left d-flex flex-row" style="align-items:center;">
             <div class="mr-2">
               <v-btn @click="closePanel()" icon ><v-icon style="font-size:25px;">las la-times</v-icon> </v-btn>
             </div>

           <template v-if="this.$root.projectData.project">
      <div style="font-family:MediumFont; font-size:14px;text-transform:capitalize;" >{{this.$root.projectData.project.title}} </div>
           </template>

           </div>
            <div class="col-4 py-0 my-0 d-flex" style="align-items:center;justify-content:center;">

            <v-btn small rounded color="#4BB543" outlined>

               <div class="mx-1">
                    <v-icon>
                   mdi mdi-play
                 </v-icon>
               </div>
               <span style="font-size:13px; font-family: HeaderFont; text-transform: none;">
                 Run
               </span>
            </v-btn>

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

      <div class=" d-flex flex-row" style="height:100%; width:100%; background:#ffffff;">

           <div  class="file_explorer" style="position:relative;">

             <div

                style="background-color: #cccccc;
                width:7px;
                right:0;
                position:absolute;
                height: 100%;
                cursor: w-resize;" >

             </div>


           </div>

         <div class="code_editor">

         </div>

          <div class="dymanicComp d-flex flex-row">

            <div
              class="mr-auto"
               style="background-color: #cccccc;
               width:7px;

               height: 100%;
               cursor: w-resize;" >

            </div>

          </div>


      </div>


   </div>

  <!-- ends -->

<!-- git -->


                               <div v-if="showGit" class="col-12 py-0 px-0" style="background: rgba(27, 27, 30, 0.32);  left:0; position:fixed; height:100%; top:0%;z-index:999999999999999999;" >
                                   <div style="position:absolute; height:100%; width:100%; right:0%;" >

                                    <div class=" col-md-4 offset-md-8 px-0 py-0 pb-2" style="background:white;height:100%; overflow-y:auto; overflow-x:hidden;" >

                                    <openGit @myEvent="closeGit"></openGit>
                                    </div>

                                   </div>
                               </div>


</div>

</template>

<script>



  const panelSide = () => import(
    /* webpackChunkName: "panel-side" */ './PanelSide.vue'
  );

  const MoreOptions = () => import(
    /* webpackChunkName: "MoreOptionsPanel" */ './MoreOptions.vue'
  );


  const openGit = () => import(
    /* webpackChunkName: "MoreOptionsPanel" */ './AddGit'
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
        startX:0,
        m_pos:0,
        resize_el:'',
        showGit:false
      }
    },
    components: {
        panelSide,
        MoreOptions,
        openGit
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


      // new functions

closeGit(){

  this.showGit=false
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
        resizeDiv:function(e){
            this.resize_el = document.getElementById("resize");
          var parent = this.resize_el.parentNode;
          var dx = this.m_pos - e.x;
          this.m_pos = e.x;
          parent.style.width = (parseInt(getComputedStyle(parent, '').width) + dx) + "px";
        },
        onStopDrag:function(e){
          this.m_pos = 0;

        },
        onInitDrag: function(e){

          var m_pos;
function resize(e){
  var parent = resize_el.parentNode;
  var dx = m_pos - e.x;
  m_pos = e.x;
  parent.style.width = (parseInt(getComputedStyle(parent, '').width) - dx) + "px";
}

var resize_el = document.getElementById("resize");
resize_el.addEventListener("mousedown", function(e){
  m_pos = e.x;
  document.addEventListener("mousemove", resize, false);
}, false);
document.addEventListener("mouseup", function(){
  document.removeEventListener("mousemove", resize, false);
}, false);

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



       if(this.$router.currentRoute.path.indexOf('panel-loader') >= 0){

               return;
            }


            if(this.$router.currentRoute.path.indexOf('editor') <= 0){

                this.$router.push({ path: '/board/projects/panel/'+ this.$route.params.project_slug + '/editor'});

            }




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
       //  this.$router.push({path: '/board/projects/panel/' + this.$root.projectData.project.project_slug + '/add-git'})
       this.showGit=true
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
.file_explorer{
  height:100%;
  max-width:25%;
  width:15%;
  min-width:15%;
  background:white;
   resize: horizontal;
   overflow: auto;

}

.code_editor{
  height:100%;
  max-width:60%;
  min-width:50%;
  width:55%;
  background:black;
  resize: horizontal;
  overflow: auto;
}

.dymanicComp{
  height:100%;
  max-width:40%;
  width:30%;
  background:transparent;
}
</style>
