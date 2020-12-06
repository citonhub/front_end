<template>
<v-app>
 
   <div class="col-12 ">
    <h5>Add Project</h5 ><v-btn>Create Project</v-btn>
   </div>
 
<v-card>
   <div class="col-lg-12">

<v-form class="col-lg-8">
  <div class="col-12 py-1 my-0 px-2">
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

             </div>

             <div class="col-12 py-1 my-0 px-2 form-group">
<v-select
          v-model="owner"
          :items="owners"
          menu-props="auto"
          label="Project Owner"
          hide-details
          prepend-icon="las la-list"
          single-line>
        </v-select>

                </div>
                <br>
 <div class="col-12 py-1 my-0 px-2 form-group">

<v-select
          v-model="app"
          :items="languages"
          menu-props="auto"
          label="Application Type"
          hide-details
          prepend-icon="las la-list"
          single-line>
        </v-select>
</div>

</v-form>

   <div class=" px-0 col-12 py-1 d-md-none d-block fixed-top" style="position:sticky; background:#F5F5FB;">
  

     <div class="row">
        <div class="col-6 py-0 my-0">
           <h6 style="font-size:17px;">Add Project</h6>
        </div>
         <div class="col-6 mb-1 py-0 my-0 text-right">
          
        </div>
      </div>
   </div>
</div>
</v-card>
</v-app>
  
</template>

<script>
 export default {
    data () {
      return {
        titleRule:[
             v = !!v || 'Project title is required',
           v=  v.length < 30 || 'Title must be less than 80 characters'
            ],
            title:'',
            owner:'',
            owners:['You','CitonHub'],
            app:'',
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
  }
</script>
<style >
 
  
</style>
