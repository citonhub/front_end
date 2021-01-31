<template>
    <div style="background:transparent;font-family:BodyFont;" class="px-0">
  
  
       <div class="col-lg-10 offset-lg-1 py-1 col-md-10 offset-md-1 px-2 d-md-block d-none fixed-top" style="position:sticky;z-index:9999999999;background:#F5F5FB;border-bottom:1px solid #c5c5c5;">
      <div class="row">
        <div class="col-6 py-0 my-0">
          <h5> <v-btn @click="goback" icon><v-icon>las la-arrow-left</v-icon></v-btn> 
          <template v-if="this.$route.params.type == 'new'">
                  Create a diary
             </template>
             <template v-if="this.$route.params.type == 'edit'">
                  Edit diary
             </template>
          </h5>
        </div>

         <div class="col-6 py-0 my-0 text-right">
             <v-btn @click="createDiary" :loading="loading"  small rounded  color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:MediumFont;">
              <template v-if="this.$route.params.type == 'new'">
                  Done
             </template>
             <template v-if="this.$route.params.type == 'edit'">
                  Save
             </template>
           </v-btn>
        </div>
         
      </div>
   </div>

   <div class=" px-0 col-12 pb-0 pt-2 d-md-none d-block fixed-top" style="position:sticky; background:#F5F5FB;border-bottom:1px solid #c5c5c5;">
     <div class="row py-0">
        <div class="col-8 py-0 my-0">
           <h6 style="font-size:17px;"><v-btn  @click="goback"  icon><v-icon>las la-arrow-left</v-icon></v-btn>
           
            <template v-if="this.$route.params.type == 'new'">
                  Create a diary
             </template>
             <template v-if="this.$route.params.type == 'edit'">
                  Edit diary
             </template>
             
            </h6>
        </div>
         <div class="col-4 py-0 my-0 text-right">
          <v-btn @click="createDiary" :loading="loading" small rounded  color="#3C87CD" style="font-size:12px; font-weight:bolder; text-transform:none; color:white;font-family:MediumFont;">
               <template v-if="this.$route.params.type == 'new'">
                  Done
             </template>
             <template v-if="this.$route.params.type == 'edit'">
                  Save
             </template>
           </v-btn>
        </div>
      </div>
   </div>


        <v-app style="background:transparent;font-family:BodyFont; " class="col-12 px-0">
           
              <v-form class="col-lg-8 offset-lg-2 py-1 col-md-10 offset-md-1 px-2" v-model="formState" ref="diaryForm">

      <div class="row">

    
    <!--Name textfield starts -->
           <div class="col-lg-8  py-1 my-0 px-2">

             <div style="font-size:14px;"  class="mb-1">1. Name your diary</div>
              <v-text-field
                 style="font-size:13px;"
                v-model="diaryName"
            label="Diary name"
            counter="60"
            :rules="NameRule"
            persistent-hint
          
             prepend-inner-icon="las la-book"
            
             color="#3C87CD">
             </v-text-field>

             </div>
        
    <!--Name textfield ends -->

    
    <!--   pet picture selection section starts -->

    <div class="col-12 py-1 my-0 mt-n3 px-2 pl-3">
              <div style="font-size:14px;"  class="my-2">2. Upload your diary photo</div>

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
                   @change="crophandler"
                 style="opacity:0;width:120px; height:100px; overflow:hidden; position:absolute; z-index:10;"
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

   <!-- pet picture selection section ends-->




      <div class="col-lg-8  py-1 mt-3 px-2 mb-3">

             <div style="font-size:14px;"  class="mb-2">3. Control diary access.</div>

              <v-chip
       :outlined="accessType !='private'"
       class="d-inline-block ml-2 my-1"
        :style="accessType != 'private' ? 'font-size:13px;cursor:pointer;' : 'font-size:13px;cursor:pointer;color:white;'"
       color="#3C87CD"
       
        
    @click="accessType='private'"
    >Private</v-chip>

               <v-chip 
        :outlined="accessType !='public'"
       class="d-inline-block ml-1 my-1"
    :style="accessType != 'public' ? 'font-size:13px;cursor:pointer;' : 'font-size:13px;cursor:pointer;color:white;'"
              color="#3C87CD"
           
@click="accessType='public'"
    >Public</v-chip>

    
             </div>


   <!-- channel selection field for pets starts-->

   
    <div class=" col-lg-12 py-1 my-0 px-2">
            <div style="font-size:14px;"  >4. Select a channel <span style="font-size:12px;color:grey;">(optional)</span></div>

                  
                    <div class="col-lg-8 py-0 px-0">
                         <v-select
                 style="font-size:13px;"
              dense
             
           
            v-model="selectedChannel"
            placeholder="select channel"
              
            persistent-hint
            chips
            :items="channelList"
            item-value="space_id"
            item-text="name"
           
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
                
              
             </div>


   <!-- channel selection field for pets ends-->

   <!-- add tags to diary -->
    
     <div  class=" col-lg-8 ">
         <div style="font-size:14px;" class="mb-3">5. Select your diary tags  <span style="font-size:12px;color:grey;">(optional)</span></div>
                 
              <v-select
                 style="font-size:13px;"
              dense
            
          
            placeholder="select tags"
           
            chips
            multiple
           
             
             item-text="name"
             item-value="name"
             :items="tags"
             v-model="diaryTags"
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

<!-- pet description field starts-->
  
  <div class="col-lg-8  py-1 my-0 px-2">

             <div style="font-size:14px;" class="mb-3">6. About your new diary</div>
              <v-textarea
                 style="font-size:13px;"
                
            placeholder="What is this diary for?"
            counter="300"
             :rules="requiredRule"
            outlined
          v-model="description"
             color="#3C87CD">
             </v-textarea>

             </div>

  
   <!-- pet description field ends-->

    <div class="col-12 py-2 text-center" v-if="this.$route.params.type == 'edit'" >

                <v-btn  @click="deleteDiary" :loading="loadingDelete" small rounded  color="#3C87CD" style="font-size:12px; text-transform:none; font-weight:bolder; color:white;font-family:MediumFont;">
             Delete
           </v-btn>

    </div>

          <div class="col-12 my-3 py-5">

          </div>
      

       
      </div>

  </v-form>

      
           
       </v-app>
        
    </div>
</template>
<script>


  import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'


export default {

data(){
  return{
    loadingDelete:false,
     NameRule:[
             v => !!v || 'Oh! you missed this.',
           v => v.length <= 60 || 'Diary name must be less than 60 characters'
            ],
        requiredRule: [
         v => !!v || 'Oh! you missed this.',
        ],
    diaryName:'',
     tags:[
              {
                  name:'Web app',
                  id: 'web',
               
               },
                {
                  name:'HTML',
                  id: 'html',
               
               },
                {
                  name:'CSS',
                  id: 'css',
               
               },
              
               {
                  name:'JavaScript',
                  id:26
               
               },
               {
                  name:'PHP',
                 
                   id: 35,
               
               },
               {
                  name:'Cloud computing',
                 
                   id: 140,
               
               },
               {
                  name:'Python',
                
                   id: 39,
               
               },
               {
                  name:'Artificial Intelligence',
                 
                   id: 100,
               
               },
                 {
                  name:'Machine Learning',
                 
                   id: 110,
               
               },
               {
                  name:'C',
                 
                  id: 4,
               
               },
               {
                  name:'C++',
                 
                  id:11,
               
               },
               {
                  name:'Laravel',
                 
                   id: 131,
               
               },
               {
                  name:'Java',
                 
                   id: 25,
               
               },
               {
                  name:'C#',
                 
                  id: 13,
               
               },
                 {
                  name:'Technical writing',
                 
                   id: 130,
               
               },
               {
                  name:'Dev ops',
                 
                   id: 130,
               
               },
               {
                  name:'Erlang',
                 
                   id: 18,
               
               },
                {
                  name:'Flask',
                 
                   id: 132,
               
               },
               {
                  name:'Django',
                 
                   id: 133,
               
               },
               
               {
                  name:'Kotlin',
                 
                  id: 27,
               
               },
               {
                  name:'Fortran',
                 
                  id:21,
               
               },
               {
                  name:'Perl',
                 
                   id: 34,
               
               },
               {
                  name:'R',
                
                   id:40,
               
               },
               {
                  name:'Ruby',
                 
                   id: 41,
               
               },
               {
                  name:'Go',
                 
                  id: 22,
               
               },

               {
                  name:'Hashkell',
                 
                  id: 24,
               
               },
               {
                  name:'Lua',
                 
                   id: 28,
               
               },
               {
                  name:'Pascal',
                 
                   id:33,
               
               },
               {
                  name:'TypeScript',
                 
                   id: 46,
               
               },
               {
                  name:'Rust',
                 
                   id:42,
               
               },
               {
                  name:'Swift',
                
                  id:45,
               
               },
                {
                  name:'Scala',
                 
                  id: 43,
               
               },
                {
                  name:'Jokes',
                  id: 'jokes',
               
               },
                {
                  name:'Others',
                  id: 'others',
               
               },
            ],
    channel:'',
    selectedChannel:'',
    description:'',
    imageUrl:'',
    channelList:[],
     input:'',
     language:'',
     diaryTags:[],
      image:'',
    imageDefault:0,
    formState: false,
    loading: false,
    accessType:'private',

  }
}
  ,
    mounted(){
       this.$root.showTopBar = false;
       this.fetchChannels();

       this.setEditValues();
        
    },
    methods:{
        setEditValues: function(){
       if(this.$root.selectedDiary.length != 0 && this.$route.params.type == 'edit'){
         this.diaryName = this.$root.selectedDiary.name;
       
         this.accessType = this.$root.selectedDiary.access_type;
         
         this.selectedChannel = this.$root.selectedDiary.bot_channel;

          if(this.$root.selectedDiary.diary_tags){

             this.diaryTags = this.$root.selectedDiary.diary_tags.split(',');

          }

        
   
       this.description = this.$root.selectedDiary.description;

     
          let imgLink =  this.$root.selectedDiary.image_name + '.' + this.$root.selectedDiary.image_extension;

              if(this.$root.selectedDiary.image_extension){

                   this.$root.croppedImage = '/imgs/space/' + imgLink;

              }
       

       
       }
    },
       selectDefaultImg:function(image,number){
       
        this.imageDefault = 'default_' + number;

        this.$root.croppedImage = image;

        this.$root.imageExist = false;


      },
          
      showAlert:function(title='',message,type){
       
       if(type == 'info'){

          iziToast.info(
        { 
       title: title,
       message: message,
       zindex:'9999999999',
       position: 'bottomRight',
         timeout: 2000,
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
         timeout: 2000,
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
         timeout: 2000,
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
         timeout: 2000,
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       if(type == 'question'){

       }
     


    },

    deleteDiary:function(){
      
        this.loadingDelete = true;
       axios.post('/delete-diary',{
                bot_id: this.$root.selectedDiary.bot_id
                  })
          .then(response => {
            
           if (response.status == 200) {
                
               
                 
                if(this.$root.diaryList.length != 0){

                   let remainingDiary = this.$root.diaryList.filter((diary)=>{
                     return diary.bot_id != this.$root.selectedDiary.bot_id;
                   });

                  this.$root.diaryList =  remainingDiary;

                   this.$root.LocalStore('user_diary_' + this.$root.username,this.$root.diaryList);

                }

                 this.loadingDelete = false;

                 

           this.$router.push({ path: '/board/diary'});

            }
            
            
          })
          .catch(error => {
            this.showAlert('Oops!',' Unable to delete diary','error')
              this.loadingDelete = false;
          })
    
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
 goback() {
          
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

       fetchChannels(){
          axios.get('/fetch-user-channels-diary' )
      .then(response => {
      
      if (response.status == 200) {
        
       this.channelList = response.data;
       
      }
       
     
     })
     .catch(error => {
    
     }) 

       },

     
         createDiary(){

             if( this.$refs.diaryForm.validate()){
               this.loading = true;
              
               let formData = new FormData();

              if(this.$root.imageExist){
                
             var data1 = this.handleBlob(this.$root.croppedImage);
                    formData.append('image',data1[0]);
                       formData.append('image_ext',data1[1]);
            }else{
                
                formData.append('image_default',this.imageDefault);
            }

             formData.append('name',this.diaryName);
             formData.append('channel_id',this.selectedChannel);
             formData.append('description',this.description);
             formData.append('access_type',this.accessType);
             formData.append('tags',this.diaryTags);


              if(this.$route.params.type == 'edit'){
              formData.append('bot_id',this.$root.selectedDiary.bot_id)
              }


              axios.post('/create-diary',formData,
           {
             headers:{
              'Content-Type':'multipart/form-data'
             }
           }
              )
          .then(
            response=>{
              if(response.status == 200){
                 
                this.loading = false;

                  if(this.$route.params.type == 'edit'){
               this.showAlert('Saved!',' Your changes has been saved','success')
              
              return
              }

                 let storedDiary = this.$root.getLocalStore('user_diary_'  + this.$root.username);

            storedDiary.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);


                     
                      this.$root.diaryList = finalResult;

                       this.$root.diaryList.unshift(response.data.dairy)


                       

                       this.$root.LocalStore('user_diary_' + this.$root.username,this.$root.diaryList);

                        this.$router.push({ path:'/board/diary/list'})

                      
     
                 }else{
                    this.$router.push({ path:'/board/diary/list'})
                 }
            })

             
        
              }
            }
          )
           .catch(error => {
             this.showAlert('Oops!',' Unable to create diary','error')
             this.loading = false;
          })

          

             }
        
         
        }

      
       
    }
}
</script>
<style scoped>

</style>