<template>


    <div class="row" style="font-family:BodyFont;background:transparent;">

    <!-- contents  -->
         <v-form class="col-12 px-md-4 px-3 py-2 pt-0 mt-1 text-left" ref="addPost" v-model="formState" style="height:auto !important; font-family:BodyFont; background:transparent !important;" >
           
           <div class="row application application--light"  data-app="true">

               <!-- project title -->

               
 
                    <div  class=" col-12 py-1 my-0 px-2 mb-1" style="font-family:BodyFont;">
                       <span  style="font-size:14px;font-family:MediumFont;" class="mb-1">Project title</span>  
              <v-text-field
                v-model="post.title"
                 style="font-size:13px;"
                
             
              :rules="titleRule"
                dense
            counter="80"
            outlined
            placeholder="my portfolio"
            persistent-hint
             hint="What are you building?"
            
             color="#3C87CD">
             </v-text-field>

             </div>

             <!-- ends -->

             <!-- select project -->

              <div class=" col-12 py-1 my-0 px-2" style="font-family:BodyFont;">
                 <v-chip :outlined="!postLink" @click="postLink = true" class="d-inline-block mr-1" color="#3C87CD" :style="postLink ? 'font-size:13px;cursor:pointer;color:white;' : 'font-size:13px;cursor:pointer;'">Add Link</v-chip>

                <v-chip :outlined="postLink" @click="postLink = !postLink" class="d-inline-block mr-1" color="#3C87CD" :style="postLink ? 'font-size:13px;cursor:pointer;' : 'font-size:13px;cursor:pointer;color:white;'">Select Project</v-chip>
               

                <v-text-field 
                v-if="postLink" 
               
                class="mt-2"
               
                outlined
                
                dense
              
                style="font-size:13px;"
                :rules="urlRule"
                 color="#3C87CD"
                 placeholder="paste here"
                 v-model="post.project_url">

                </v-text-field>
                <v-select v-else 
               
                 style="font-size:13px;"
                 class="mt-2"
                 @change="setTagHandler"
                 color="#3C87CD"
                   :items="projectArray"
                  item-text="title"
                item-value="project_slug"
                 :loading="loadingProjects"
                 dense
                 outlined
                    :rules="requiredRule"
                 placeholder="select..."
                v-model="post.project_slug">
                </v-select>
              
             </div>

             <!-- ends -->
            
           
              <div class="col-12 py-1 my-0 mt-n3 px-2 ">
       
              <span  style="font-size:14px;font-family:MediumFont;">Upload Thumbnail</span>  

            <v-sheet
              elevation="0"
              height="100"
              width="120"
              :style="'background-image:url('+ this.$root.croppedImage + ');border-radius:10px;cursor:pointer;background-size:cover;'"
              class="py-0  px-0 mt-2 sheetbackImg"
            >  
              <v-sheet 
                color="rgba(15, 33, 36, 0.3)"
                elevation="0"
                height="100%"
                width="100%"
                style="border-radius:10px;"
                class="py-auto px-auto d-flex"
              >
                <input 
                  type="file" 
                  id="settingsimage" 
                  ref="settingsimage" 
                  @change="crophandler" 
                  style="opacity:0;width:120px; height:100px; overflow:hidden; position:absolute; z-index:10;"
                  accept="image/x-png,image/jpeg,image/jpg"
                />
                <v-icon class="mx-auto white-text">mdi-camera-plus</v-icon>
              </v-sheet>
            </v-sheet>

           
    
                <div style="font-size:13px;color:grey;" class="mt-3">Or select from defaults</div>

               <div class="d-flex flex-row mt-3" >
                       <div    class="mr-2" @click="selectDefaultImg('/imgs/background1.jpg',1)"
    style="border-radius:10px;height:60px;width:60px; cursor:pointer; background-color:#c5c5c5;background-image:url(/imgs/background1.jpg);background-size: cover;
  background-repeat: no-repeat; border:1px solid #c5c5c5;">
  </div> 

    <div    class="mr-2"  @click="selectDefaultImg('/imgs/background3.jpg',2)"
    style="border-radius:10px;height:60px;width:60px;cursor:pointer; background-color:#c5c5c5;background-image:url(/imgs/background3.jpg);background-size: cover;
  background-repeat: no-repeat;border:1px solid #c5c5c5;">
  </div> 

     <div    class="mr-2"  @click="selectDefaultImg('/imgs/imgproj2.jpeg',3)"
    style="border-radius:10px;height:60px;width:60px; cursor:pointer; background-color:#c5c5c5;background-image:url(/imgs/imgproj2.jpeg);background-size: cover;
  background-repeat: no-repeat; border:1px solid #c5c5c5;">
  </div> 
              </div>

              </div>

           <!-- ends -->
             
      
           <!-- add tags -->
                <div  class=" col-12 py-1 mt-1 my-0 px-2 pt-3" style="height:auto;font-family:BodyFont;">
                    <span  style="font-size:14px;font-family:MediumFont;" class="mb-1">Tags</span>  
              <v-select
                 style="font-size:13px;"
              dense
            
            counter="10"
            placeholder="add tags"
           
            chips
            multiple
            outlined
               :rules="requiredRule"
             
             item-text="name"
             item-value="name"
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
             </v-select>

             </div>

         <!-- ends -->

        

         <!-- project description -->
             <div class="col-12 py-1 pt-0 my-0 px-2">
                 <span  style="font-size:14px;font-family:MediumFont;">Description</span>  
                
                <v-textarea
                 style="font-size:14px;"
                 outlined
                 height="100px"
                 counter="300"
                    :rules="descriptionRule"
                 v-model="post.description"
                 placeholder="A collection of my all the projects I have built"
                >

                </v-textarea>
             </div>
            
            <!-- ends -->

            <!-- add project button -->
             <div class=" text-center col-12 py-1 mt-4 my-0 px-2">
                 <v-btn  medium rounded type="submit" color="#3C87CD" :loading="loading" style="font-size:13px; font-family:MediumFont; font-weight:bolder;text-transform:none; color:white;" @click.prevent="postData">
               Send
               </v-btn>
             </div>

             <!-- ends -->



             <!-- ends -->

           </div>


           
          
         </v-form>


     <!-- ends -->


    </div>
    
</template>

<script>

  import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

export default {
   
    data(){
        return{
           imageUrl:'',
            titleRule:[
             v => !!v || 'Oh! you missed this.',
           v => v.length <= 80 || 'Title must be less than 80 characters'
            ],
        requiredRule: [
         v => !!v || 'Oh! you missed this.',
        ],
        descriptionRule:[
         v => !!v || 'Oh! you missed this.',
           v => v.length <= 300 || 'description must be less than 300 characters'
            ],
            urlRule:[
                  v => !!v || 'Oh! you missed this.',
                  v =>  this.isURL(v) || "Link should be valid and secure"
            ],
            languageIcon:[
              {
                  name:'Web app',
                  icon:'lab la-html5',
                  border_color:'#263238',
                  background:'#ffffff',
                  id: 'web',
               
               },
               {
                  name:'Web app NodeJs',
                  icon:'lab la-html5',
                  border_color:'#263238',
                  background:'#ffffff',
                  id: 'NodeJs',
               
               },
               {
                  name:'Web app PHP',
                  icon:'lab la-html5',
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

            addlink:false,
            select:true,
            addprojectlink:false,
            postLink: true,
            formState:false,
            post: {
              title: '',
              project_slug: '',
              project_url: '',
              tags: ['Web app'],
              description: ''
            },
            imageDefault:0,
            loadingProjects:false,
            loading:false,
            projectArray:[],
            setTag:[],
        }
    },
    mounted(){
         this.getAllProjects();
     },
    methods:{
      isURL(str) {
      let url;

      try {
        url = new URL(str);
      } catch (_) {
        return false;
      }

      return  url.protocol === "https:";
    },
       displayTab() {
          this.addlink = !this.addlink
          this.select = !this.select

          alert(this.addlink)
       },
        goBack() {
      
        this.$root.showAddNewPost = false;
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
       displayTab2() {
          this.addprojectlink= !this.addprojectlink
          this.select = !this.select
       },
       setTagHandler:function(){

         let selectedProject = this.projectArray.filter((project)=>{
           return project.project_slug == this.post.project_slug;
         })

         let selectedTag = this.languageIcon.filter((language)=>{
           return language.id == selectedProject[0].panel_language
         })

          this.post.tags = [selectedTag[0].name];
         
       },
        getAllProjects:function(){
         
            this.loadingProjects = true;
             axios.get( '/fetch-personal-projects')
      .then(response => {

      if (response.status == 200) {

        this.loadingProjects = false;

       this.projectArray = response.data.projects

     }


     })
     .catch(error => {

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
         timeout: 5000,
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
         timeout: 5000,
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
         timeout: 5000,
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
         timeout: 5000,
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       if(type == 'question'){

       }
     


    },


        crophandler: function (event) {
          this.imageDefault = 0;
          
          // Reference to the DOM input element
          var input = event.target;
          
          // Ensure that you have a file before attempting to read it
          if (input.files && input.files[0]) {
          
            // create a new FileReader to read this image and convert to base64 format
            var reader = new FileReader();
          
            // Define a callback function to run, when FileReader finishes its job
            reader.onload = (e) => {
          
              // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
              // Read image as base64 and set to imageData
              this.$root.imagepath = e.target.result;
              this.imagepath = e.target.result;              
              this.$root.imageExist = true;  
            };
          
            // Start the reader job - read file as a data url (base64 format)
            reader.readAsDataURL(input.files[0]);

            this.$router.push({ path: '/crop-image' });
          }
        },

        selectDefaultImg: function (image, number) {
       
          this.imageDefault = 'default_' + number;
          this.$root.croppedImage = image;
          this.$root.imageExist = false;
        },

        handleBlob: function (imageString) {
          
          // Split the base64 string in data and contentType
          var block = imageString.split(";");

          // Get the content type of the image
          var contentType = block[0].split(":")[1];// In this case "image/gif"
          var imgType = contentType.slice(6);

          // get the real base64 content of the file
          var realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."

          // Convert it to a blob to upload
          var blob = this.b64toBlob(realData, contentType);

          return [blob, imgType];
        },

        b64toBlob: function (b64Data, contentType, sliceSize) {
          contentType = contentType || '';
          sliceSize = sliceSize || 512;

          var byteCharacters = atob(b64Data);
          var byteArrays = [];

          for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            
            for (var i = 0; i < slice.length; i++) {
              byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
          }

          var blob = new Blob(byteArrays, {type: contentType});
          return blob;
        },

        postData () {
          if (this.$refs.addPost.validate()) {

             this.loading = true;
            let formData = new FormData();

            if (this.$root.imageExist) {      
              var data1 = this.handleBlob(this.$root.croppedImage);
              formData.append('image', data1[0]);
              formData.append('image_ext', data1[1]);
            } else { 
              formData.append('image_default',this.imageDefault);
            }

            formData.append('title', this.post.title);
            formData.append('project_slug', this.post.project_slug);
            formData.append('project_url', this.post.project_url);
            formData.append('description', this.post.description);

             var languageList = this.post.tags;
                 
                 let finalLanguageArray = [];

                languageList.forEach((lang)=>{

                   let langData = this.languageIcon.filter((data)=>{
                     return data.name == lang;
                   })

                   finalLanguageArray.push(langData[0]);

                })
               
            formData.append('tags',JSON.stringify(finalLanguageArray));



            axios.post('/save-hub-post', formData, {
              headers: {
                'Content-Type':'multipart/form-data'
              }
            })
              .then((response) => {
                if (response.status == 200) {

                  this.$root.posts.unshift(response.data.data);

                 
                 this.loading = false;

                   this.showAlert('Awesome!','Your project has been shared','success')

                   

                 
                    this.goBack();

                    this.$root.authProfile.points += 10;

                     this.$root.showRewardBoard = true;

                  
                }
              })
           .catch(error => {
             this.showAlert('Oops!','Unable to save post,please try again','error')
             this.loading = false;
          })
          
          }
        }
      }
}
</script>