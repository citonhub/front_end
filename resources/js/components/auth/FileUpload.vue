<template>
   <v-app  class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 my-0 px-0" style="position:absolute; font-family:BodyText; background:transparent; height:100%; overflow-y:auto; overflow-x:hidden; ">
        <div class="row my-0 py-0 px-0">
       <div class="col-12 py-0 morebackground d-flex" style="height:100%;" @click="closeBackground">
          
         <v-card class="py-1 px-2 row" > 
           
    

            <div class="col-12 text-center py-1 px-2" @click.stop="preventClose">
           
                  <div class="col-12 py-2 my-0 px-2 d-flex" style="align-items: center;justify-content: center;border:3px dotted #c5c5c5; border-radius:8px; height:50px;">
                    <input type="file"  v-if="UploadType == 'Framework'"
                      @change="fileHandler"
                 style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                 accept=".css,.json,.jsonp,.js,.ts,.html,.xml"/>


                 <input type="file"  v-if="UploadType == 'Images'"
                 @change="fileHandler"
                 style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                  accept="image/x-png,image/jpeg,image/jpg"/>

                 <input type="file"  v-if="UploadType == 'Audios'"
                 @change="fileHandler"
                 style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                accept="audio/*"/>

                 <input type="file"  v-if="UploadType == 'Aideos'"
                 @change="fileHandler"
                 style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                  accept="video/mp4,video/x-m4v,video/*"/>

                 <input type="file"  v-if="UploadType == 'Files'"
                 @change="fileHandler"
                 style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                 accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
              text/plain, application/pdf"/>

                

                  <span style="color:gray; font-size:12px;">Upload {{UploadMessage}}</span>  
             </div>

             

              <div class="col-lg-8 offset-lg-2  d-flex py-2 px-1 my-2" style="align-items:center;justify-content:center;" v-if="fileUrl != ''">
                            <div  style=" height:100%;width:100%; " >
                              
                      

                                   <v-card class="py-1 px-2" >
                                  <div class="col-12 py-1 px-0">
                     <div class="row py-0 my-0">
                     <div class="col-3 py-1 my-0 text-center">
                     <span style="background:#c5c5c5; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="gray">mdi-file-document mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-6 py-1 my-0 text-left px-0">
                      <span class="fileName" style="font-size:12px;">{{ fileName }}</span>
                     </div>
                      <div class="col-3 py-0 my-0  d-flex px-1" style="align-items:center; justify-content:center;">
                     <span class="fileName" style="font-size:10px;">{{fileSize}}</span>
                     </div>
                     
                  </div>
                   </div>
           
                              </v-card>
                             
                             <div style="position:absolute; height:auto; width:auto; right:5%; top:5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;">
                               <v-btn icon @click.stop="fileUrl = ''"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>
                              
                              </div> 
                       </div>

                  <div class="col-12 d-flex py-2 px-4" style="align-items:center;justify-content:center;" v-if="progressvalue > 0">
                             <v-progress-linear color="#3E8893" height="7px"  class="" striped :value="progressvalue" rounded>

                          </v-progress-linear>
                       </div>

               <div class="col-12 py-2 my-0 px-2 text-center">
                  <v-btn x-small color="#3E8893" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;" @click="uploadeFile" :loading="loading" :disabled="fileUrl == ''" >Upload</v-btn>
             </div>

            </div>
        </v-card>
          
       
     </div>

        </div>

        <v-fade-transition>
              <div  style="position:absolute; width:100%; height:auto: align-items:center;justify-content:center;top:4%; z-index:123453566;"  class="d-flex">
             <v-alert
      v-model="Alert"
      dismissible
      close-icon="mdi-delete"
      color="#3E8893"
       width="auto"
       style="font-size:13px;"
       height="auto"
      border="left"
     
      elevation="2"
      colored-border
     
    >
      {{alertMsg}}
    </v-alert>
        </div>
        </v-fade-transition>

     </v-app>
</template>
<script>
export default {
    props:['UploadType','UploadMessage'],
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
      this.$root.showTabs=true;
       this.$root.showHeader = false;
      
    },
    methods:{
       
        goBack: function(){
     
   },
    showAlert:function(duration,text){
        this.Alert = true;
        this.alertMsg = text;
        let _this = this;
     
     setTimeout(function(){
        _this.Alert = false;
     },duration);

    },
    closeBackground:function(){
        if(this.loading){
          return;
        }else{
    this.$root.UploadResources = false;
        }
        

    },
    preventClose:function(){

    },
    fileHandler:function(e){
      
      const files = e.target.files
            
            this.FileBlob = files[0];
           	const fr = new FileReader ()
        fr.readAsDataURL(files[0])
         let fileSize = files[0].size;
             
             this.fileSize =  this.bytesToSize(files[0].size);
             this.fileName = files[0].name;
           if(fileSize <= 1000000){
              fr.addEventListener('load', () => {
          this.fileUrl = fr.result;
          
        });
           }else{
              this.showAlert(5000,'File size cannot be more than 10MB')
                return;
           }
    },
     bytesToSize:function(bytes) {
      var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (bytes == 0) return '0 Byte';
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
     },

      uploadeFile: function(){
        this.loading = true;
          
          let formData = new FormData();
         



         if(this.fileUrl != ''){
          

            formData.append('file',this.FileBlob);
           
            
        }

        formData.append('type',this.UploadType);
        formData.append('file_name',this.fileName);
        formData.append('project_slug',this.$route.params.projectSlug);
       axios.post('/upload-panel-file',formData,
         {
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
                   
                   this.$root.panelResources.push(response.data);
               this.closeBackground();
            }else{
              
            }
            
            
          })
          .catch(error => {
            this.showAlert(5000,'Failed- ' + error);
              this.loading = false;
          })
    },

   
    }
}
</script>
<style>
.morebackground{
     position: absolute;
     width:100%; 
     top: 0;
     left: 0;
     height:100%; 
     align-items: center;
     justify-content: center;
     background:rgba(38, 82, 89,0.6);
     z-index:100000;
 }
 .login{
     color: #1e4248;
     font-size:13px;
 }

 .forgot{
     cursor: pointer;
     text-decoration: underline;
     color: #4494a2;
     font-size:12px;
 }

</style>