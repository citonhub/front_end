<template>


    <div class="row" style="font-family:BodyFont;background:transparent;">

    <!-- contents  -->
         <v-form class="col-12 px-md-4 px-2 py-2 pt-0 mt-1 text-left" ref="addPost" v-model="formState" style="height:auto !important; font-family:BodyFont; background:transparent !important;" >
           
           <v-app class="row">

               <!-- project title -->
 
                    <div  class=" col-12 py-1 my-0 px-2" style="font-family:BodyFont;">
              <v-text-field
                v-model="post.title"
                 style="font-size:13px;"
                
              label="Project Title"
              :rules="titleRule"
               filled
            counter="80"
            placeholder="title"
            persistent-hint
             hint="What are you building?"
            
             color="#3C87CD">
             </v-text-field>

             </div>

             <!-- ends -->

             <!-- select project -->

              <div class=" col-12 py-1 my-0  " style="font-family:BodyFont;">
                <v-chip :outlined="postLink" @click="postLink = !postLink" class="d-inline-block mr-1" color="#3C87CD" :style="postLink ? 'font-size:13px;cursor:pointer;' : 'font-size:13px;cursor:pointer;color:white;'">Select Project</v-chip>
                <v-chip :outlined="!postLink" @click="postLink = true" class="d-inline-block mr-1" color="#3C87CD" :style="postLink ? 'font-size:13px;cursor:pointer;color:white;' : 'font-size:13px;cursor:pointer;'">Add Link</v-chip>

                <v-text-field 
                v-if="postLink" 
                label="Paste Project Link"
                class="mt-2"
                style="font-size:13px;"
                :rules="requiredRule"
                 color="#3C87CD"
                 placeholder="paste here"
                 v-model="post.project_url">

                </v-text-field>
                <v-select v-else 
                label="Select Project" 
                 style="font-size:13px;"
                 class="mt-2"
                 color="#3C87CD"
                    :rules="requiredRule"
                 placeholder="select..."
                v-model="post.project_slug">
                </v-select>
              
             </div>

             <!-- ends -->
            
           
              <div class="col-12 py-1 my-0 mt-n3 px-2 pl-3">
             <span style="font-size:13px;">Upload Thumbnail</span>
             <span style="font-size:12px; color:grey;" class="mx-1">(give your project an identity)</span><br>

               <v-sheet
              elevation="0"
              height="100"
              width="120"
              :style="'background-image:url('+ imageUrl + ');border-radius:10px;cursor:pointer;background-size:contain;'"
              class="py-0  px-0 mt-2 sheetbackImg"
              color="whitesmoke">

               <!-- <input type="file" id="settingsimage" ref="settingsimage" 
                @change="crophandler" style="opacity:0;width:100%; height:10px; overflow:hidden; position:absolute; z-index:10;"
                 accept="image/x-png,image/jpeg,image/jpg"/> -->
               <v-sheet
               
              
               elevation="0"
               height="100%"
               width="100%"
               style="border-radius:10px;background:#c5c5c5;"
               class="py-auto px-auto d-flex"
               >
                  
                 <v-icon class="mx-auto white-text">mdi-camera-plus</v-icon>
                
               </v-sheet>
              </v-sheet>
    
                <div style="font-size:13px;color:grey;" class="mt-3">Or select from defaults</div>

               <div class="d-flex flex-row mt-3" >
                       <div    class="mr-2"
    style="border-radius:10px;height:60px;width:60px;background-color:#c5c5c5;background-image:url(/imgs/imgproj3.jpeg);background-size: cover;
  background-repeat: no-repeat; border:1px solid #c5c5c5;">
  </div> 

    <div    class="mr-2"
    style="border-radius:10px;height:60px;width:60px;background-color:#c5c5c5;background-image:url(/imgs/imgproj2.jpeg);background-size: cover;
  background-repeat: no-repeat;border:1px solid #c5c5c5;">
  </div> 

     <div    class="mr-2"
    style="border-radius:10px;height:60px;width:60px;background-color:#c5c5c5;background-image:url(/imgs/imgproj1.jpeg);background-size: cover;
  background-repeat: no-repeat; border:1px solid #c5c5c5;">
  </div> 
              </div>

              </div>

           <!-- ends -->
             
         <div class="col-12 py-1">

         </div>

           <!-- add tags -->
                <div  class=" col-12 py-1 mt-5 my-0 px-2 pt-3" style="height:auto;font-family:BodyFont;">
              <v-combobox
                 style="font-size:13px;"
              dense
              label="Tags"
            counter="10"
            placeholder="add tags"
            hint="e.g php, nodejs, html5"
            persistent-hint
            chips
            multiple
               :rules="requiredRule"
            filled
             item-value="name"
             item-text="name"
             :items="languageIcon"
             v-model="post.tags"
             color="#3C87CD">

              <template v-slot:selection="data">
            <v-chip
              :key="JSON.stringify(data.item)"
              v-bind="data.attrs"
              :input-value="data.selected"
              color="#3C87CD"
              dense
              class="my-1"
              style="font-size:12px; font-family:BodyFont;"
              outlined
              :disabled="data.disabled"
          
            >
             
              {{ data.item.name }}
            </v-chip>

              </template>
             </v-combobox>

             </div>

         <!-- ends -->

         <div class="col-12 py-4">

         </div>

         <!-- project description -->
             <div class="col-12 py-1 pt-3 my-0 px-2">
                
                <v-textarea
                 style="font-size:14px;"
                 filled
                 height="100px"
                 counter="200"
                    :rules="descriptionRule"
                 v-model="post.description"
                 placeholder="A short description of your project"
                >

                </v-textarea>
             </div>
            
            <!-- ends -->

            <!-- add project button -->
             <div class=" text-center col-12 py-1 mt-4 my-0 px-2">
                 <v-btn  medium rounded type="submit" color="#3C87CD" style="font-size:13px; font-family:BodyFont; font-weight:bolder;text-transform:none; color:white;" @click.prevent="postData">
               Send
               </v-btn>
             </div>

             <!-- ends -->



             <!-- ends -->

           </v-app>


           
          
         </v-form>


     <!-- ends -->


    </div>
    
</template>

<script>



export default {
    components:{
         
     },

    data(){
        return{
           imageUrl:'',
            titleRule:[
             v => !!v || 'Title is required',
           v => v.length <= 80 || 'Title must be less than 80 characters'
            ],
        requiredRule: [
         v => !!v || 'This feild is required',
        ],
        descriptionRule:[
         v => !!v || 'description is required',
           v => v.length <= 200 || 'description must be less than 200 characters'
            ],
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

            addlink:false,
            select:true,
            addprojectlink:false,
            postLink: false,
            formState:false,
            post: {
              title: '',
              project_slug: '',
              project_url: '',
              tags: [],
              description: ''
            }
        }
    },

    methods:{
       displayTab() {
          this.addlink = !this.addlink
          this.select = !this.select

          alert(this.addlink)
       },
       displayTab2() {
          this.addprojectlink= !this.addprojectlink
          this.select = !this.select
       },

       postData () {
        console.log(this.post);

        axios.post('/save-hub-post', this.post)
        .then((response) => {
          if (response.status == 201) {
            console.log(response);

            axios.get('/fetch-posts')
              .then((response) => {
                if (response.status == 200) {
                  this.$root.posts = response.data.data
                }
              })
          }
        })
       }
    }
}
</script>