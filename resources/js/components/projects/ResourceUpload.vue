<template>
<div style="background:transparent; font-family:BodyFont;padding-top:20px;">
 
   <div class="col-12 mt-5 mt-md-1 ml-lg-4">
    <h6>Upload {{this.$route.params.type}}</h6>
   </div>

    <div class="col-md-8 col-lg-4 offset-lg-4 offset-md-2 text-center py-1">
    	
    		<div class="row my-2 py-2 px-2" >
    			<div class="col-12 py-2 my-0 px-2" v-if="fileUrl == ''">
    				 <div class="col-12 py-2 my-0 px-2 d-flex pointer" style=" align-items: center;justify-content: center;border:2px dashed #262626; border-radius:8px; height:200px;">
               <div class="pointer">
                <input type="file"  v-if="this.$route.params.type == 'Framework'"
                      @change="fileHandler"
                 style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                 accept=".css,.json,.jsonp,.js,.ts,.html,.xml"/>


                 <input type="file"  v-if="this.$route.params.type == 'Images'"
                 @change="fileHandler"
                 style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                  accept="image/x-png,image/jpeg,image/jpg"/>

                 <input type="file"  v-if="this.$route.params.type == 'Audios'"
                 @change="fileHandler"
                 style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                accept="audio/*"/>

                 <input type="file"  v-if="this.$route.params.type == 'Videos'"
                 @change="fileHandler"
                 style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                  accept="video/mp4,video/x-m4v,video/*"/>

                 <input type="file"  v-if="this.$route.params.type == 'Files'"
                 @change="fileHandler"
                 style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                 accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
              text/plain, application/pdf"/>

                

                  <span style="color:#262626; font-size:12px;" v-if="this.$route.params.type != 'Framework'">{{ $t('general.upload') }} {{this.$route.params.type}}</span> 
                   <span style="color:#262626; font-size:12px;" v-else>{{ $t('general.upload') }} code files e.g jquery.js, mdb.css</span>  
               </div>
                   
             </div>

    			</div>



            <div class="col-12  d-flex py-2 px-1 my-2" style="align-items:center;justify-content:center;" v-if="fileUrl != ''">
                            <div  style=" height:100%;width:100%; " >
                              
                      

                                   <v-card class="py-1 px-2" >
                                  <div class="col-12 py-1 px-0">
                     <div class="row py-0 my-0">
                     <div class="col-3 py-1 my-0 text-center">
                     <span style="border:1px solid transparent; border-radius:50%;" class="px-1 py-1">
                       <v-icon v-if="this.$route.params.type == 'Images'" color="gray">las la-file-image</v-icon>
                       <v-icon v-if="this.$route.params.type == 'Framework'" color="gray">las la-file-code</v-icon>
                       <v-icon v-if="this.$route.params.type == 'Videos'" color="gray">las la-file-video</v-icon>
                       <v-icon v-if="this.$route.params.type == 'Audios'" color="gray">las la-file-audio</v-icon>
                       <v-icon v-if="this.$route.params.type == 'Files'" color="gray">las la-file</v-icon>
                       
                      </span>
                 
                     </div>
                     <div class="col-6 py-1 my-0 text-left px-0">
                      <span style="font-size:12px;">{{ fileName }}</span>
                     </div>
                      <div class="col-3 py-0 my-0  d-flex px-1" style="align-items:center; justify-content:center;">
                     <span  style="font-size:10px;">{{fileSize}}</span>
                     </div>
                     
                  </div>
                   </div>
           
                              </v-card>
                             
                             <div style="position:absolute; height:auto; width:auto; right:5%; top:5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;">
                               <v-btn icon @click.stop="fileUrl = ''"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>
                              
                              </div> 
                       </div>

                  <div class="col-12 d-flex py-2 px-4" style="align-items:center;justify-content:center;" v-if="progressvalue > 0 && fileUrl != ''" >
                             <v-progress-linear color="#3C87CD" height="6px"  class=""  :value="progressvalue" rounded>

                          </v-progress-linear>
                       </div>

               <div class="col-12 py-2 my-0 px-2 text-center">
                  <v-btn x-small color="#3C87CD" style="font-size:11px; font-weight:bolder; color:white;font-family: MediumFont;" @click="uploadeFile" :loading="loading" :disabled="fileUrl == ''" >{{$t('general.upload')}}</v-btn>
             </div>
    			
    		</div>
    	
    </div>

</div>
  
</template>

<script>
  export default {
     data () {
      return {
    
        loading: false,
        Alert:false,
        alertMsg:'',
        disabled:true,
        fileName:'',
        FileBlob:'',
        fileSize:'',
        fileUrl:'',
       progressvalue:0,
      }
    },
     mounted(){
     
      
    },
    methods:{
       
        goBack: function(){
     
   },
   
    fileHandler:function(e){

       // gets the uploade file
      
      const files = e.target.files
            
         // get the file and read through the file using Js fileReader
            this.FileBlob = files[0];
           	const fr = new FileReader ()
        fr.readAsDataURL(files[0])
         let fileSize = files[0].size;
             
             this.fileSize =  this.bytesToSize(files[0].size);
             this.fileName = files[0].name;
        

      // checks it the file size does not exceeds 10 MB, if it does, raise an alert
           if(fileSize <= 10000000){
              fr.addEventListener('load', () => {
          this.fileUrl = fr.result;
          
        });
           }else{
              
               this.$root.projectPanelComponent.showAlert('Oops!','File size cannot be more than 10MB','error');
                return;
           }
    },
     bytesToSize:function(bytes) {

        // handles making the file size humanly readable
      var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (bytes == 0) return '0 Byte';
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
     },

      uploadeFile: function(){

         // start up the loader
        this.loading = true;
          

        // create a new Js formdata
          let formData = new FormData();
    

    //  append the uploaded file into the form
         if(this.fileUrl != ''){
          

            formData.append('file',this.FileBlob);
           
            
        }

        // append all other data

        formData.append('type',this.$route.params.type);
        formData.append('file_name',this.fileName);
        formData.append('project_slug',this.$route.params.project_slug);
      

       axios.post('/upload-panel-file',formData,
         {
            // define the header type to allow for file upload,and monitor the upload
             headers:{
              'Content-Type':'multipart/form-data'
             },
             onUploadProgress: function(progressEvent){
             this.progressvalue = parseInt(Math.round(
               (progressEvent.loaded / progressEvent.total) * 100
             ))
           }.bind(this)
           })
          .then(response => {
            
           if (response.status == 201) {
                this.loading = false;
                   
                  
              // push new files into the  file list
                   

              this.$root.projectData.project_files.resources.unshift(response.data)

               this.$root.LocalStore('user_projects_data_' +  this.$route.params.project_slug + this.$root.username,this.$root.projectData);

               
                this.$root.projectPanelComponent.showAlert('Happy coding!','File uploaded','success');

            
            }else{
              
            }
            
            
          })
          .catch(error => {
          this.$root.projectPanelComponent.showAlert('Oops!','Unable to save file,please try again','error');
              this.loading = false;
          })
    },

   
    }
}
</script>
<style >
 
  .pointer{
    cursor: pointer;
  }

  .pointer:hover{
    background: white;
  }
</style>
