<template>
<v-app style="background:transparent; font-family:BodyFont;padding-top:20px;">
   <div class="col-12">

       <div class="col-lg-8 offset-lg-2">



           <v-form class="col-10" style="margin-bottom:60px"  >


               <div class="col-10 py-1 px-2 form-group" style="margin-bottom:35px">

<v-select
          v-model="app"
          :items="languages"
          menu-props="auto"
          label="Application Type"
          outlined
          hide-details
          prepend-inner-icon="las la-list"
          >
        </v-select>
</div>

 <div class="col-12 py-1 mt-4 px-2 d-flex" >
              <v-text-field
                 style="font-size:13px;"
                 placeholder="Project Title"
            label="Title"
            counter="30"
            v-model="title"
            outlined
             prepend-inner-icon="las la-project-diagram"
            :rules="titleRule"
             color="#3C87CD">
             </v-text-field>
<i style="font-size:2rem;color:#3C87CD:"  class="las la-save mt-2"></i>
             </div>


              <div class="col-12 py-1 mt-4 px-2 d-flex" >
              <v-select
                 style="font-size:13px;"
                 placeholder="Add Contributors"
                  menu-props="auto"
                 :items="contributors"
            label="Contributors"
            counter="30"
            v-model="contributor"
            outlined
             prepend-inner-icon="las la-users"
           
             color="#3C87CD">
             </v-select>
<i style="font-size:2rem;color:#3C87CD:"  class="las la-save mt-2"></i>
             </div>
           </v-form>
       </div>
       </div> 
</v-app>
</template>



<script>
export default {
    data(){
        return{
             title:'',
             contributor:'',
             app:'',
             contributors:['raymond','zubair'],
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
    }
}
</script>