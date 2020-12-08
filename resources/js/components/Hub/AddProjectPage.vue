<template>
    <v-app style="background:transparent;font-family:BodyFont;padding-top:20px;">
<TopBar></TopBar>

<!-- Select Method page markup-->

  <!--<div class="col-lg-8 offset-lg-2" style="margin-top:100px;height:250px;">

<v-card style="height:100%" class="col-12 d-flex">
<v-btn style="background:c;color:white" class="mt-4 col-2 offset-2 py-2 px-2" elevation="2">Add a Link</v-btn>
<v-btn style="background:#3C87CD;color:white" class="mt-4 col-4 offset-2 py-2 px-2" elevation="2">Select From Project</v-btn>
</v-card>

     </div>!-->

    
<!-- add link tab markup-->
  <!--    <div class="col-lg-8 offset-lg-2" style="margin-top:100px;height:900px;">
<v-card style="height:100%" class="col-12">
    <p class="col-4 text-left">Project Thumbnail</p>
      <div class="col-lg-4 offset-lg-4">
         <div style="background:#3C87CD;border:1px solid white;height:100px;" class=" col-5 text-center d-flex project-img">
            <i style="color:white;" class="las la-plus mt-4 ml-3"></i>
            <i style="font-size:1.8rem;color:white;" class="las la-camera mt-4"></i>
         </div>
      </div>

      <div class="col-12 py-2 my-0 px-2">
    				<v-text-field  style="font-size:13px;"  dense placeholder="Project Title..."  outlined color="#3C87CD" label="Project Title"></v-text-field>
    			</div>

                <div class="col-lg-12 py-1 my-2 px-2 text-left">

                <span style="font-size:13px; font-family:BodyFont;">Choose application type</span>
             
             </div>


         <div class="row">
                 <div class="  col-2 col-lg-2 ml-4 px-2 my-0 py-2 " v-for="(app,index) in languageIcon" :key="index">
                     <v-card class="px-1 py-1 appBox" style="height:50px; border:1px solid #263238; border-radius:7px;">
                        <div class="d-flex" style=" height:100%; align-items:center; justify-content:center;  width:100%;">
                                   <div class="text-center">
                                      <i style="font-size:20px;" :class="app.icon"></i>
                                      <div>
                                         <span style="font-size:13px; font-family:BodyFont;">{{app.name}}</span>
                                      </div>
                                   </div>
                        </div>
                     </v-card>
                 </div>



                  

                 
             </div> 

             <div class="col-6 py-1 px-1">

             <v-textarea label="Project Description" counter="100" background-color="lightgrey" rows="3" clearable clear-icon="las la-times-circle" class="mt-4">
                 
                 </v-textarea>     

                 </div> 
	<div class="col-12 py-1 mt-4 px-2 text-center">
    				<v-btn  type="submit" large color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:HeaderFont;width:40%;">Add</v-btn>
             </div>
</v-card>

   </div>-->

   <!-- project link tab-->


  
    <div class="col-lg-8 offset-lg-2" style="margin-top:100px;height:550px;">
<v-card style="height:100%" class="col-12">

 <p class="col-4 text-left">Upload Project Thumbnail</p>
      <div class="col-lg-4 offset-lg-4">
         <div style="background:#3C87CD;border:1px solid white;height:100px;" class=" col-5 text-center d-flex project-img">
            <i style="color:white;" class="las la-plus mt-4 ml-3"></i>
            <i style="font-size:1.8rem;color:white;" class="las la-camera mt-4"></i>
         </div>
      </div>




 <div class="col-12 py-2 my-0 px-2">
    				<v-select :items="projects" label="Select Project" placeholder="select..." dense outlined style="font-size:13px;"  color="#3C87CD"></v-select>
    			</div>

               <div class="col-6 py-1 px-1">

             <v-textarea label="Project Description" counter="100" background-color="lightgrey" rows="3" clearable clear-icon="las la-times-circle" class="mt-4">
                 
                 </v-textarea>     

                 </div> 
	<div class="col-12 py-1 mt-4 px-2 text-center">
    				<v-btn  type="submit" large color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:HeaderFont;width:30%;">Add</v-btn>
             </div>

</v-card>
</div>

    </v-app>
</template>

<script>
const TopBar = () => import(
    /* webpackChunkName: "top-bar?v=0.40" */ './TopBar.vue'
  );

  


export default {
    components:{
        TopBar
    },

    data(){
        return{
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

            projects:[
               'Quizapp',
               'BookFinder'
            ]
        }
    }
}
</script>