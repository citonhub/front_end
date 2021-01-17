<template>
<div style="background:transparent;" class="px-0" >

    <!-- spacer -->
    <div class="my-lg-3 my-md-3 py-0 py-md-2 col-12 " style="background:#F5F5FB;">

    </div>
  
  <!-- ends -->
 
    <div class="col-lg-10 offset-lg-1 py-1 col-md-10 offset-md-1 px-2 d-md-block d-none fixed-top" style="position:sticky;z-index:9999999999;background:#F5F5FB;border-bottom:1px solid #c5c5c5;">
      <div class="row">
        <div class="col-6 py-0 my-0">
          <h5> <v-btn @click="goToProjectList" icon><v-icon>las la-arrow-left</v-icon></v-btn> Create a project</h5>
        </div>

         <div class="col-6 py-0 my-0 text-right">
             <v-btn   :loading="loading" @click="createProject" :disabled="selectLangValue.length == 0 || title == ''" small rounded  color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:HeaderFont;">
             Create
           </v-btn>
        </div>
         
      </div>
   </div>

   <div class=" px-1 col-12 py-2 d-md-none d-block fixed-top" style="position:sticky; background:#F5F5FB;border-bottom:1px solid #c5c5c5;">
     <div class="row">
        <div class="col-8 py-0 my-0">
            <v-btn  @click="goToProjectList"  icon><v-icon>las la-arrow-left</v-icon></v-btn>  <h6 class="d-inline-block" >Create a project</h6>
        </div>
         <div class="col-4 py-0 my-0 text-right">
          <v-btn :loading="loading" @click="createProject" small rounded :disabled="selectLangValue.length == 0 || title == ''" color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:HeaderFont;">
             Create
           </v-btn>
        </div>
      </div>
   </div>


   <div class="col-lg-8 offset-lg-2 py-1 col-md-10 offset-md-1 px-4 px-md-2 ">

      <v-app style="background:transparent;font-family:BodyFont; " class="row text-center">
         
           <div class="col-lg-6 py-1 my-0 px-2">
              <v-text-field
                 style="font-size:13px;"
                
            label="Title"
            counter="60"
            persistent-hint
            hint="What do you want to build?"
            v-model="title"
             
             
             prepend-inner-icon="las la-laptop-code"
            :rules="Rule"
             color="#3C87CD">
             </v-text-field>

             </div>

             <div class="col-lg-12 py-1 my-2 px-2 text-left">

                <span style="font-size:13px; font-family:BodyFont;">Choose application type</span>
             
             </div>

             <div class="col-lg-12 py-1 my-2 mt-0 px-2 text-left">

             <div class="row">
                 <div class="  col-4 col-lg-2 px-2 my-0 py-2 " v-for="(app,index) in languageIcon" :key="index">
                     <v-card @click="selectLang(app)" :color="app.background" class="px-1 py-1 appBox" :style="'height:100px; border:1px solid ' + app.border_color + '; border-radius:7px;'">
                        <div class="d-flex" style=" height:100%; align-items:center; justify-content:center;  width:100%;">
                                   <div class="text-center">
                                      <i style="font-size:30px;" :class="app.icon"></i>
                                      <div>
                                         <span style="font-size:13px; font-family:BodyFont;">{{app.name}}</span>
                                      </div>
                                   </div>
                        </div>
                     </v-card>
                 </div>

                  

                 
             </div>
             
             </div>
     
      </v-app>

  </div>

</div>
  
</template>

<script>

import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

 export default {
    data () {
      return {
       
             Rule:[
             v => !!v || 'Oh!, you miss this.',
           v => v.length < 80 || 'Name must be less than 60 characters',
            v => /^[A-Za-z0-9 ]+$/.test(v) || 'Cannot contain special character'
         ],
            title:'',
            owner:'',
            owners:['You','CitonHub'],
            app:'',
            languageIcon:[
               {
                  name:'Web app NodeJs',
                  icon:'lab la-node-js',
                  border_color:'#263238',
                  background:'#ffffff',
                  id: 'NodeJs',
               
               },
               {
                  name:'Web app PHP',
                  icon:'lab la-php',
                   border_color:'#263238',
                  background:'#ffffff',
                   id:'PHP'
               
               },
               {
                  name:'JavaScript',
                  icon:'lab la-js-square',
                   border_color:'#263238',
                  background:'#ffffff',
                  id:26
               
               },
               {
                  name:'PHP',
                  icon:'lab la-php',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 35,
               
               },
               {
                  name:'Python 3.81',
                  icon:'lab la-python',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 39,
               
               },
               {
                  name:'Python for ML(3.7.7)',
                  icon:'lab la-python',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 100,
               
               },
               {
                  name:'C',
                  icon:'mdi mdi-language-c',
                   border_color:'#263238',
                  background:'#ffffff',
                  id: 4,
               
               },
               {
                  name:'C++',
                  icon:'mdi mdi-language-cpp',
                   border_color:'#263238',
                  background:'#ffffff',
                  id:11,
               
               },
               {
                  name:'Java',
                  icon:'lab la-java',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 25,
               
               },
               {
                  name:'C#',
                  icon:'mdi mdi-language-csharp',
                   border_color:'#263238',
                  background:'#ffffff',
                  id: 13,
               
               },
               {
                  name:'Erlang',
                  icon:'lab la-erlang',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 18,
               
               },
               {
                  name:'Kotlin',
                  icon:'mdi mdi-language-kotlin',
                   border_color:'#263238',
                  background:'#ffffff',
                  id: 27,
               
               },
               {
                  name:'Fortran',
                  icon:'mdi mdi-language-fortran',
                   border_color:'#263238',
                  background:'#ffffff',
                  id:21,
               
               },
               {
                  name:'Perl',
                  icon:'las la-code',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 34,
               
               },
               {
                  name:'R',
                  icon:'mdi mdi-language-r',
                   border_color:'#263238',
                  background:'#ffffff',
                   id:40,
               
               },
               {
                  name:'Ruby',
                  icon:'mdi mdi-language-ruby',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 41,
               
               },
               {
                  name:'Go',
                  icon:'mdi mdi-language-go',
                   border_color:'#263238',
                  background:'#ffffff',
                  id: 22,
               
               },
               {
                  name:'Hashkell',
                  icon:'mdi mdi-language-haskell',
                   border_color:'#263238',
                  background:'#ffffff',
                  id: 24,
               
               },
               {
                  name:'Lua',
                  icon:'mdi mdi-language-lua',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 28,
               
               },
               {
                  name:'Pascal',
                  icon:'las la-code',
                   border_color:'#263238',
                  background:'#ffffff',
                   id:33,
               
               },
               {
                  name:'TypeScript',
                  icon:'mdi mdi-language-typescript',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 46,
               
               },
               {
                  name:'Rust',
                  icon:'las la-code',
                   border_color:'#263238',
                  background:'#ffffff',
                   id:42,
               
               },
               {
                  name:'Swift',
                  icon:'lab la-swift',
                   border_color:'#263238',
                  background:'#ffffff',
                  id:45,
               
               },
                {
                  name:'Scala',
                  icon:'las la-code',
                   border_color:'#263238',
                  background:'#ffffff',
                  id: 43,
               
               },

            ],
            languages:["Web app with NodeJs",
                "Web app with PHP",
               "JAVASCRIPT(Node)",
                
                "PYTHON(3.8.1)",
                "PYTHON FOR ML(3.7.7)",
                "SQL",
                "C",
                "C++",
                "JAVA",
                "C#",
                "ERLANG",
                "COBOL",
                "KOTLIN",
                "FOTRAN",
                "PERL",
                "R",
                "RUBY",
                "GO",
                "HASKELL",
                "LUA",
                "PASCAL",
                "RUST",
                "SCALA",
                "SWIFT"],
            loading:false,
            selectLangValue:[],
      }
    },
    mounted(){
     this.$root.showTopBar = false;
    },
    methods:{
       selectLang:function(lang){

          this.selectLangValue = lang;
           this.languageIcon.map((app)=>{
                
                if(lang.name == app.name){
                  app.border_color = '#3C87CD';
                  app.background = '#F3F8FC';
                }else{
                   app.border_color = '#263238';
                  app.background = '#ffffff';
                }
           })
       },
       createProject() {

        this.loading = true;
         axios.post( '/create-project',{
               
                app_type: 'Multiple-pages',
                title: this.title,
                panel_language: this.selectLangValue.id,
                language_name: this.selectLangValue.name.toUpperCase()
                  })
             .then(response => {
             
            
            
             if (response.status == 200) {
              
            

             this.$root.projectList.user_projects.unshift(response.data.project);

             this.$root.LocalStore('user_projects_' + this.$root.username,this.$root.projectList);

             this.$router.push({ path: '/board/projects/panel/' + response.data.project.project_slug });
            
              
            
            }
              
            
           
            
          })
          .catch(error => {
              this.showAlert('Oops!','Unable to create project,please try again','error');
              this.loading = false;
          })

          
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
       goToProjectList: function(){
           this.$router.push({ path: '/board/projects/list' });
       }
    }
  }
</script>
<style scoped >
 
 .appBox:hover{
    background: #F3F8FC;
    cursor: pointer;
 }
</style>
