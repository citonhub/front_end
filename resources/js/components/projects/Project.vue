<template>
       <div class="col-lg-4 col-md-6 px-0 mb-2 pt-1 pt-md-2" @click="goToPanel(project)"  style="height:200px; cursor:pointer;"
          >
             <div  style="height:185px; position:absolute; width:94%; left:3%; border:1px solid #c5c5c5;background-repeat: no-repeat;
          border-radius:20px;box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25);background: url(/imgs/background3.jpg);background-size:cover;">

           <div class="py-2 px-2 text-right" style="height:auto; position:absolute; bottom:16%; width:auto; 
           right:0%;  border:1px solid transparent; border-top-left-radius:8px; align-items:center; justify-content:center;background: rgba(27, 27, 30, 0.4);">
             <div>
            <span class="d-inline-block mx-1" >
                <i class="lar la-heart" style="font-size:20px;color:white;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:white;">{{project.likes}}</span>
            </span>
             <span class="d-inline-block mx-1" >
                <i class="las la-thumbtack" style="font-size:20px;color:white;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:white;">{{project.pinned}}</span>
            </span>

              <span class="d-inline-block mx-1" @click.stop="shareProject">
                <i class="mdi mdi-share-variant" style="font-size:20px;color:white;" ></i> 
                
            </span>

             
             </div>
           
         </div>
         </div>

          <v-card class="py-1 px-2" style="position:absolute; width:94%; height:auto; left:3%; bottom:0; border-radius:0px; border-bottom-left-radius:20px;
          border-bottom-right-radius:20px;">
            
            <div class="col-12 py-0 my-0 text-left">
                <div class="row py-0 my-0">
                   <div class="col-10 py-0 my-0 d-flex" style="align-items:center;">
                      <div style="font-family:HeaderFont; font-size:13px;" >{{project.title}}</div>
                   </div>
                   <div class="col-2 text-right py-0 my-0">
                       <i :class="getProjectLanguage(project.panel)" style="font-size:23px;"></i>
                   </div>
                </div>
            </div>
          </v-card>

          

          </div>
</template>
<script>
export default {
    props:['project'],
     data () {
      return {
        
          languageIcon:[
               {
                  name:'Web app NodeJs',
                  icon:'lab la-html5',
                  id: 'NodeJs',
               
               },
               {
                  name:'Web app PHP',
                  icon:'lab la-html5',
                  id:'PHP'
               
               },
               {
                  name:'JavaScript',
                  icon:'lab la-js-square',
                  id:26
               
               },
               {
                  name:'PHP',
                  icon:'lab la-php',
                  id: 35
               
               },
               {
                  name:'Python 3.81',
                  icon:'lab la-python',
                  id: 39
               
               },
               {
                  name:'Python for ML(3.7.7)',
                  icon:'lab la-python',
                  id: 100
               
               },
               {
                  name:'C',
                  icon:'mdi mdi-language-c',
                  id: 4
               
               },
               {
                  name:'C++',
                  icon:'mdi mdi-language-cpp',
                  id:11
               
               },
               {
                  name:'Java',
                  icon:'lab la-java',
                  id: 25
               
               },
               {
                  name:'C#',
                  icon:'mdi mdi-language-csharp',
                  id: 13
               
               },
               {
                  name:'Erlang',
                  icon:'lab la-erlang',
                  id: 18
               
               },
               {
                  name:'Kotlin',
                  icon:'mdi mdi-language-kotlin',
                  id: 27
               
               },
               {
                  name:'Fortran',
                  icon:'mdi mdi-language-fortran',
                  id:21
               
               },
               {
                  name:'Perl',
                  icon:'las la-code',
                  id: 34
               
               },
               {
                  name:'R',
                  icon:'mdi mdi-language-r',
                  id:40
               
               },
               {
                  name:'Ruby',
                  icon:'mdi mdi-language-ruby',
                  id: 41
               
               },
               {
                  name:'Go',
                  icon:'mdi mdi-language-go',
                  id: 22
               
               },
               {
                  name:'Hashkell',
                  icon:'mdi mdi-language-haskell',
                  id: 24
               
               },
               {
                  name:'Lua',
                  icon:'mdi mdi-language-lua',
                  id: 28
               
               },
               {
                  name:'Pascal',
                  icon:'las la-code',
                  id:33
               
               },
               {
                  name:'TypeScript',
                  icon:'mdi mdi-language-typescript',
                  id: 46
               
               },
               {
                  name:'Rust',
                  icon:'las la-code',
                  id:42
               
               },
               {
                  name:'Swift',
                  icon:'lab la-swift',
                  id:45
               
               },
                {
                  name:'Scala',
                  icon:'las la-code',
                  id: 43
               
               },

            ],
          
      }
    },
    methods:{
          getProjectLanguage:function(panel){
        let iconData =  this.languageIcon.filter((icon)=>{
            return icon.id == panel.panel_language
          });
          
           if(iconData[0]){
             return iconData[0].icon
           }else{
             return 'las la-code'
           }
        
      },
      goToPanel:function(project){

         this.$router.push({ path: '/board/projects/panel/' + project.project_slug });
 //this.$router.push({ path: '/board/projects/panel/'+ project.project_slug + '/panel-loader'});

  //this.$root.projectPanelComponent.showSideBar = false
       // this.$router.push({path: '/board/projects/panel/' + project.project_slug + '/project-display'})

      },

      loadPage:function(){
       this.$router.push({ path: '/board/projects/panel/'+ this.$route.params.project_slug + '/panel-loader'});
   },
      shareProject:function(project){
          
          this.$root.shareLink =  'https://link.citonhub.com/project/'+ project.project_slug;

          this.$root.shareText = 'Check out this project on Citonhub';
          
          this.$root.infoText = 'Share project with others';

          this.$root.alertComponent =  this.$root.projectListComponent;

          this.$root.showInvitation = true;
    },
    }
}
</script>
<style scoped>

</style>