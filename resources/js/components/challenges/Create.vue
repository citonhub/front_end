<template>
<v-app style="background:transparent;font-family:BodyFont;" class="px-0" >

 
    <div class="col-lg-10 offset-lg-1 py-2 col-md-10 offset-md-1 px-2 d-md-block d-none fixed-top" style="position:sticky;z-index:9999999999;background:#F5F5FB;border-bottom:1px solid #c5c5c5;">
      <div class="row">
        <div class="col-6 py-0 my-0">
          <h5> <v-btn @click="goBack" icon><v-icon>las la-arrow-left</v-icon></v-btn> Create a challenge</h5>
        </div>

         <div class="col-6 py-0 my-0 text-right">
             <v-btn @click="createChallenge" :loading="loading" small rounded  color="#3C87CD" style="font-size:12px; text-transform:none; font-weight:bolder; color:white;font-family:MediumFont;">
             Create
           </v-btn>
        </div>
         
      </div>
   </div>

   <div class=" px-0 col-12 py-1 pt-2 d-md-none d-block fixed-top d-flex flex-row" style="position:sticky; background:#F5F5FB;border-bottom:1px solid #c5c5c5;">
   
        <div class="col-8 py-0 my-0 px-0">
           <div style="font-size:16px; font-family:HeaderFont;"><v-btn @click="goBack"  icon><v-icon>las la-arrow-left</v-icon></v-btn>Create a challenge</div>
        </div>
         <div class="col-4 py-0 my-0 text-right px-0">
      
          <v-btn @click="createChallenge" small rounded :loading="loading" color="#3C87CD" style="font-size:12px; text-transform:none; font-weight:bolder; color:white;font-family:MediumFont;">
             Create
           </v-btn>
        </div>
     
   </div>


   <div class="col-lg-8 offset-lg-2 py-1 col-md-10 offset-md-1 px-2 ">

      <v-form class="row" v-model="formstate" ref="create">


           <div class="col-lg-8  py-1 my-0 px-2">
              <v-text-field
                 style="font-size:13px;"
                
            label="Title"
            counter="60"
            persistent-hint
            v-model="title"
             
             
             prepend-inner-icon="las la-trophy"
            :rules="titleRule"
             color="#3C87CD">
             </v-text-field>

             </div>

               <div class=" col-lg-12 py-1 my-0 px-2">

                    <div class="col-lg-8 px-0">

                          <v-textarea
                 style="font-size:13px;"
                 filled
                 height="80px"
                 counter="100"
                 :rules="summaryRules"
                label="Summary"
                 placeholder="What is this challenge about?"
                 v-model="summary"
                >

                </v-textarea>

                    </div>
                
              
             </div>

             <div class="col-12 py-1 my-0 mt-n3 px-2 pl-3">
             <span style="font-size:14px;">Cover Image</span>
             <span style="font-size:12px; color:grey;" class="mx-1">(give this challenge an identity)</span><br>

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
                   <input type="file" id="settingsimage" ref="settingsimage" 
                @change="crophandler" style="opacity:0;width:120px; height:100px; overflow:hidden; position:absolute; z-index:10;"
                 accept="image/x-png,image/jpeg,image/jpg"/>
                 <v-icon class="mx-auto white-text">mdi-camera-plus</v-icon>
                
               </v-sheet>
              </v-sheet>
    
                <div style="font-size:13px;color:grey;" class="mt-3">Or select from defaults</div>

               <div class="d-flex flex-row mt-3" >
                       <div    class="mr-2" @click="selectDefaultImg('/imgs/background3.jpg',1)"
    style="border-radius:10px;height:60px;width:60px; cursor:pointer; background-color:#c5c5c5;background-image:url(/imgs/background3.jpg);background-size: cover;
  background-repeat: no-repeat; border:1px solid #c5c5c5;">
  </div> 

    <div    class="mr-2"  @click="selectDefaultImg('/imgs/background1.jpg',2)"
    style="border-radius:10px;height:60px;width:60px;cursor:pointer; background-color:#c5c5c5;background-image:url(/imgs/background1.jpg);background-size: cover;
  background-repeat: no-repeat;border:1px solid #c5c5c5;">
  </div> 

     <div    class="mr-2"  @click="selectDefaultImg('/imgs/imgproj2.jpeg',3)"
    style="border-radius:10px;height:60px;width:60px; cursor:pointer; background-color:#c5c5c5;background-image:url(/imgs/imgproj2.jpeg);background-size: cover;
  background-repeat: no-repeat; border:1px solid #c5c5c5;">
  </div> 
              </div>

              </div>

              <div class=" col-lg-12 py-1 my-0 px-2" >

                    <div class="col-lg-8 px-0" >
      <v-select
     label="Application type"
     :items="languageIcon"
     item-text="name"
           item-value="id"
     v-model="language"
     :rules="requiredRule"
     style="font-size:13px;"
      placeholder="select challenge app type"
       >

        </v-select>

                    </div>

              </div>

            
        <div class="col-lg-12 py-1 my-2 px-2 text-left">

                <span style="font-size:14px; font-family:BodyFont;">Description</span>
             
             </div>
             <div class="col-lg-12 py-1 my-2 px-2 text-left">

              <v-press-editor v-model="description"  :placeholder="'Describe this challenge, its aim and objective'"></v-press-editor>
             
             </div>




               <div class="col-lg-12 py-1 my-2 px-2 text-left">

                <span style="font-size:14px; font-family:BodyFont;">Rules</span>
             
             </div>

             <div class="col-lg-12 py-1 my-2 px-2 text-left">

              <v-press-editor v-model="rulesContent"  :placeholder="'What are the dos and do not'"></v-press-editor>
             
             </div>
             

            <div class="col-lg-12 py-1 my-2 mb-0 px-2 text-left">

                <span style="font-size:14px; font-family:BodyFont;">Who will Judge?</span>
             
             </div>

             <div class="col-lg-12 py-0 my-0 px-2 text-left">

               <v-chip
        :outlined="judgeType !='everyone'"
       class="d-inline-block mr-1"
    :style="judgeType != 'everyone' ? 'font-size:13px;cursor:pointer;' : 'font-size:13px;cursor:pointer;color:white;'"
              color="#3C87CD"
           
@click="enableEvery"
    >Everyone</v-chip>

     <v-chip
       :outlined="judgeType !='custom'"
       class="d-inline-block mr-1"
        :style="judgeType != 'custom' ? 'font-size:13px;cursor:pointer;' : 'font-size:13px;cursor:pointer;color:white;'"
       color="#3C87CD"
       
        
    @click="disableEvery"
    >Custom Judges</v-chip>
             
             </div>

              <div class=" col-lg-12 py-1 my-0 px-2" v-if="custom" >

                    <div class="col-lg-8 px-0" >

                         <v-combobox
                 style="font-size:13px;"
              dense
              label="Add Judges"
            counter="20"
            :rules="requiredRule"
            hint="Type their username to add"
            persistent-hint
            chips
            multiple
            
             color="#3C87CD"
            >

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
                
              
             </div>
       
        <div class="col-lg-12 py-1 my-2 mt-4 mb-0 px-2 text-left">

                <span style="font-size:14px; font-family:BodyFont;">Set Duration</span>
             
             </div>

           <div class="col-12 py-2 my-0 px-2">
                
               <div class="row py-0 my-0">
                  

                <div class="col-6 text-center py-0 my-0">

                  <v-text-field
                style="font-size:13px;"
                v-model="durationValueDay"
                :placeholder="$t('duels.days') + '...'"
            :label="$t('duels.days')"
            :rules="durationRule2"
            
            type="tel"
             dense
             color="#3C87CD"
             ></v-text-field>

                </div>


                 <div class="col-6 text-center py-0 my-0">

                  <v-text-field
                style="font-size:13px;"
                v-model="durationValueHr"
                :placeholder="$t('duels.hours') + '...'"
            :label="$t('duels.hours')"
            :rules="durationRule"
           
            type="tel"
             dense
             color="#3C87CD"
             ></v-text-field>

                </div>

               </div>
         

             </div>

          <div class="col-12 py-5 my-5">

          </div>

           <div class="col-12 py-5 my-5">

          </div>
      
       
      </v-form>

  </div>

</v-app>
  
</template>
<script>


 const VPressEditor = () => import(
    /* webpackChunkName: "VPressEditor" */ './Editor.vue'
  );

  import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'


export default {

    data() {
      return {
         text: '',
         everyone:false,
         custom:false,
         selectJudgeType:0,
         switch2:true,
         switch1:false,
         rulesContent:'',
          titleRule:[
             v => !!v || 'Title is required',
           v => v.length <= 50 || 'Name must be less than 50 characters'
            ],
      requiredRule: [
         v => !!v || 'This feild is required',
        ],
        summaryRules:[
            v => !!v || 'Summary is required',
           v => v.length <= 101 || 'Name must be less than 100 characters'
        ],
        max_participantRule:[
             v => !!v || 'Max Participant is required',
             v => !isNaN(parseFloat(v)) && v >= 2 && v <= 500 || 'Number has to be between 2 and 500'
        ],
        durationRule:[
             v => !isNaN(parseFloat(v)) && v >= 0 && v <= 1000 || 'Days has to be between 0 and 1000 hours'
        ],
        durationRule2:[
            v => !!v || 'duration is required',
             v => !isNaN(parseFloat(v)) && v >= 0 && v <= 23.9 || 'Duration has to be between 0 and 23.9 hours'
        ],

        participant: [
            'Individuals',
             'Teams'
        ],
        searchUsername:'',
        judgeType:'everyone',
        JudgesItems:[
          
        ],
        Judges:'',
        preMatchTime:'',
        Alert:false,
        alertMsg:'',
       
        programmingLanguage:[],
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
        title:'',
        summary:'',
        max_participant:'4',
        durationValue:'2',
        description:'',
        formstate: false,
        loading: false,
        rulesValue:'',
        loadingConnection:false,
        loadingDelete:false,
        durationValueDay:0,
        durationValueHr:2,
        input:'',
        language:'',
        image:'',
        imageDefault:0,
      };
    },
    mounted(){
     this.$root.showTopBar = false;
    },
    components:{
      VPressEditor
    },
    methods:{
      selectDefaultImg:function(image,number){
       
        this.imageDefault = 'default_' + number;

        this.$root.croppedImage = image;

        this.$root.imageExist = false;


      },
      handleBlob: function(imageString){
  // Split the base64 string in data and contentType
var block = imageString.split(";");
// Get the content type of the image
var contentType = block[0].split(":")[1];// In this case "image/gif"

 var imgType = contentType.slice(6);
 
// get the real base64 content of the file
var realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."

// Convert it to a blob to upload
var blob = this.b64toBlob(realData, contentType);

  return [blob,imgType];
 },
 goBack() {
          
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        crophandler:function(event){
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
      enableEvery(){
this.judgeType='everyone';
 this.custom=false
      },

      disableEvery(){
        this.judgeType='custom';
        this.custom='true'
      },

      goBack(){
        this.$router.push({path:'/board/challenges/list'})
      },

      setDuration( durationValue){
    durationValue=(( this.durationValueDay * 24) + this.durationValueHr)
    console.log(durationValue)
      },

      
      showAlert:function(title='',message,type){
       
       if(type == 'info'){

          iziToast.info(
        { 
       title: title,
       message: message,
       zindex:'9999999999',
       position: 'bottomRigh  t',
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

       if(type == 'question'){

       }
     


    },

     b64toBlob: function(b64Data, contentType, sliceSize) {
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

      createChallenge(){

         if( this.$refs.create.validate()){

            this.loading = true;

             let formData = new FormData();

              if(this.$root.imageExist){
                
             var data1 = this.handleBlob(this.$root.croppedImage);
                    formData.append('image',data1[0]);
                       formData.append('image_ext',data1[1]);
            }else{
                
                formData.append('image_default',this.imageDefault);
            }

             this.durationValue =  (this.durationValueDay * 24) + parseInt(this.durationValueHr);

             formData.append('title',this.title);
             formData.append('summary',this.summary);
             formData.append('description',this.description);
             formData.append('rules',this.rulesContent);
             formData.append('duration',this.durationValue);
             formData.append('challenge_language',this.language);
             formData.append('judges',this.judgeType);



           axios.post('/save-challenge',formData,
           {
             headers:{
              'Content-Type':'multipart/form-data'
             }
           }
        ).then(
          response => {
            
           if (response.status == 200) {
             
             this.showAlert('Welldone!',' Challenge created sucessfully!','success')
        
             

           }
           
           }
        )
        .catch(error => {
             this.showAlert('Oops!',' Unable to create challenge','error')
             this.loading = false;
          })

         }
       
      }
    }
  };
</script>
<style scoped>

</style>