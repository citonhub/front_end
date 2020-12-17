<template>
<v-app style="background:transparent;" class="px-0" >
 
    <div class="col-lg-10 offset-lg-1 py-1 col-md-10 offset-md-1 px-2 d-md-block d-none fixed-top" style="position:sticky;z-index:9999999999;background:#F5F5FB;border-bottom:1px solid #c5c5c5;">
      <div class="row">
        <div class="col-6 py-0 my-0">
          <h5> <v-btn @click="goToProjectList" icon><v-icon>las la-arrow-left</v-icon></v-btn> Create a project</h5>
        </div>

         <div class="col-6 py-0 my-0 text-right">
             <v-btn  small rounded  color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:HeaderFont;">
             Create
           </v-btn>
        </div>
         
      </div>
   </div>

   <div class=" px-0 col-12 py-1 d-md-none d-block fixed-top" style="position:sticky; background:#F5F5FB;border-bottom:1px solid #c5c5c5;">
     <div class="row">
        <div class="col-8 py-0 my-0">
           <h6 style="font-size:17px;"><v-btn  @click="goToProjectList" icon><v-icon>las la-arrow-left</v-icon></v-btn>Create a project</h6>
        </div>
         <div class="col-4 py-0 my-0 text-right">
          <v-btn small rounded  color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:HeaderFont;">
             Create
           </v-btn>
        </div>
      </div>
   </div>


   <div class="col-lg-8 offset-lg-2 py-1 col-md-10 offset-md-1 px-2 ">

      <div class="row text-center">
         
           <div class="col-lg-6 py-1 my-0 px-2">
              <v-text-field
                 style="font-size:13px;"
                
            label="Title"
            counter="60"
            persistent-hint
            hint="What do you want to build?"
            v-model="title"
             
             
             prepend-inner-icon="las la-laptop-code"
            :rules="titleRule"
             color="#3C87CD">
             </v-text-field>

             </div>

             <div class="col-lg-12 py-1 my-2 px-2 text-left">

                <span style="font-size:13px; font-family:BodyFont;">Choose application type</span>
             
             </div>

             <div class="col-lg-12 py-1 my-2 mt-0 px-2 text-left">

             <div class="row">
                 <div class="  col-4 col-lg-2 px-2 my-0 py-2 " v-for="(app,index) in languageIcon" :key="index">
                     <v-card class="px-1 py-1 appBox" style="height:100px; border:1px solid #263238; border-radius:7px;">
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
     
      </div>

  </div>

</v-app>
  
</template>

<script>
 export default {
    data () {
      return {
        titleRule:[
             v =>!!v || 'Project title is required',
           v =>  v.length < 30 || 'Title must be less than 80 characters'
            ],
            title:'',
            owner:'',
            owners:['You','CitonHub'],
            app:'',
            languageIcon:[
               {
                  name:'Web app NodeJs',
                  icon:'lab la-node-js'
               
               },
               {
                  name:'Web app PHP',
                  icon:'lab la-php'
               
               },
               {
                  name:'JavaScript',
                  icon:'lab la-js-square'
               
               },
               {
                  name:'PHP',
                  icon:'lab la-php'
               
               },
               {
                  name:'Python 3.81',
                  icon:'lab la-python'
               
               },
               {
                  name:'Python for ML(3.7.7)',
                  icon:'lab la-python'
               
               },
               {
                  name:'C',
                  icon:'mdi mdi-language-c'
               
               },
               {
                  name:'C++',
                  icon:'mdi mdi-language-cpp'
               
               },
               {
                  name:'Java',
                  icon:'lab la-java'
               
               },
               {
                  name:'C#',
                  icon:'mdi mdi-language-csharp'
               
               },
               {
                  name:'Erlang',
                  icon:'lab la-erlang'
               
               },
               {
                  name:'Kotlin',
                  icon:'mdi mdi-language-kotlin'
               
               },
               {
                  name:'Fortran',
                  icon:'mdi mdi-language-fortran'
               
               },
               {
                  name:'Perl',
                  icon:'las la-code'
               
               },
               {
                  name:'R',
                  icon:'mdi mdi-language-r'
               
               },
               {
                  name:'Ruby',
                  icon:'mdi mdi-language-ruby'
               
               },
               {
                  name:'Go',
                  icon:'mdi mdi-language-go'
               
               },
               {
                  name:'Hashkell',
                  icon:'mdi mdi-language-haskell'
               
               },
               {
                  name:'Lua',
                  icon:'mdi mdi-language-lua'
               
               },
               {
                  name:'Pascal',
                  icon:'las la-code'
               
               },
               {
                  name:'TypeScript',
                  icon:'mdi mdi-language-typescript'
               
               },
               {
                  name:'Rust',
                  icon:'las la-code'
               
               },
               {
                  name:'Swift',
                  icon:'lab la-swift'
               
               },
                {
                  name:'Scala',
                  icon:'las la-code'
               
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
                "SWIFT"]
      }
    },

    methods:{
       createProject() {
           this.$router.push({ path: '/board/projects/panel' });
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
