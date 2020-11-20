<template>
       <div style="position:absolute; background:white; top:0%; left:0%; height:95%; overflow-y:auto; overflow-x:hidden; z-index:987664736568; width:100%;" class="scrollerStyle"> 

         <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-2 py-0 my-0 text-left px-1" style="border-bottom:2px solid #3E8893;">
           <v-btn icon color="#3E8893" @click="goBack"><v-icon>mdi-close mdi-18px</v-icon></v-btn>
         </div>
         <div class="col-8 py-0 my-0 d-flex" style="border-bottom:2px solid #3E8893; align-items:center;justify-content:center;">
          <span  style="font-size:12px; color:#3E8893; font-weight:bolder;font-family:HeaderText;">Share</span>
         
         </div>
         <div class="col-2 py-0 my-0 text-right px-1"  style="border-bottom:2px solid #3E8893;">
          
         </div>
         </div>
         </div>

         <div class="col-12 py-0 my-0" >
           <div class="row my-0 py-0 px-2">

              <div class="col-12 py-1 my-0 text-center">
                 <v-btn icon color="#3E8893" @click="showShareProject ? showShareProject = false : showShareProject = true" style="background:#edf6f7;border:1px solid #3E8893;" class="mx-1"><v-icon>mdi-plus-network-outline</v-icon></v-btn>
                 
                <v-btn icon color="#3E8893" style="background:#edf6f7;border:1px solid #3E8893;" class="mx-1"><v-icon>mdi-image</v-icon>
                 <input type="file" multiple
                @change="crophandler" style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                 accept="image/x-png,image/jpeg,image/jpg"/>
                </v-btn>
                 <v-btn icon color="#3E8893" style="background:#edf6f7;border:1px solid #3E8893;" class="mx-1"><v-icon>mdi-music</v-icon>
                  <input type="file"
                @change="audiohandler" style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                 accept="audio/*"/>
                 </v-btn>
                <v-btn icon color="#3E8893" style="background:#edf6f7;border:1px solid #3E8893;" class="mx-1"><v-icon>mdi-video</v-icon>

                  <input type="file"
                @change="vidoehandler" style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                 accept="video/mp4,video/x-m4v,video/*"/>

                </v-btn>
                <v-btn icon color="#3E8893" style="background:#edf6f7;border:1px solid #3E8893;" class="mx-1"><v-icon>mdi-file-document</v-icon>
                  <input type="file" @change="filehandler"
               style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;" 
             accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
              text/plain, application/pdf"/>
                </v-btn>
                
              </div>


             <div class="col-12 py-2 my-0 px-2" v-if="showShareProject">
                  <v-select
         
          :items="projectArray"
          label="Select Project"
          style="font-size:12px;"
          hide-selected
          :loading="loadingProjects"
           item-text="title"
           item-value="project_slug"
           v-model="selectedProject"
          placeholder="select..."
          color="#4495a2"
          small-chips
          ></v-select>
             </div>


                

          
             
            <div class="col-12 col-lg-8 offset-lg-2 py-2 my-0 px-2 text-center">
                 <div class="row py-0 my-0">
                       <div class="col-6 d-flex py-2 px-4" style="align-items:center;justify-content:center;" v-if="image1 != ''">
                            <div @click="editImage('image1')" :style="'border:2px solid #3E8893; border-radius:10px; height:120px; background-image:url('+ image1 +');width:100%; background-size:cover;'" >
                             <div style="position:absolute; height:auto; width:auto; right:10%; top:10%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;">
                               <v-btn icon  @click.stop="image1 = ''"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>
                              
                              </div> 
                       </div>

                        <div class="col-6 d-flex py-2 px-4" style="align-items:center;justify-content:center;" v-if="image2 != ''">
                            <div @click="editImage('image2')" :style="'border:2px solid #3E8893; border-radius:10px; height:120px; background-image:url('+ image2 +');width:100%; background-size:cover;'" >
                             <div style="position:absolute; height:auto; width:auto; right:10%; top:10%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;">
                               <v-btn icon @click.stop="image2 = ''"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>
                              
                              </div> 
                       </div>
                        <div class="col-6 d-flex py-2 px-4" style="align-items:center;justify-content:center;" v-if="image3 != ''">
                            <div @click="editImage('image3')" :style="'border:2px solid #3E8893; border-radius:10px; height:120px; background-image:url('+ image3 +');width:100%; background-size:cover;'" >
                             <div style="position:absolute; height:auto; width:auto; right:10%; top:10%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;">
                               <v-btn icon @click.stop="image3 = ''"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>
                              
                              </div> 
                       </div>
                        <div class="col-6 d-flex py-2 px-4" style="align-items:center;justify-content:center;" v-if="image4 != ''">
                            <div @click="editImage('image4')" :style="'border:2px solid #3E8893; border-radius:10px; height:120px; background-image:url('+ image4 +');width:100%; background-size:cover;'" >
                             <div style="position:absolute; height:auto; width:auto; right:10%; top:10%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;">
                               <v-btn icon @click.stop="image4 = ''"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>
                              
                              </div> 
                       </div>

                        <div class="col-12 d-flex py-2 px-4" style="align-items:center;justify-content:center;" v-if="videoUrl != ''">
                            <div  style="border:2px solid #3E8893; border-radius:10px; height:100%;width:100%; " >
                              <video-player :videoUrl="videoUrl" :backgroundColor="VideoBackground" :backgroundImg="VideoImgBackground"></video-player>
                             <div style="position:absolute; height:auto; width:auto; right:10%; top:10%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;">
                               <v-btn icon @click.stop="videoUrl = ''"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>
                              
                              </div> 
                       </div>


                       <div class="col-lg-8 offset-lg-2 d-flex py-2 px-4" style="align-items:center;justify-content:center;" v-if="audioUrl != ''">
                            <div  style=" height:100%;width:100%; " >
                             
                                  
                                   <v-card class="py-1 px-2" >
                                  <div class="col-12 py-1 px-0">
                     <div class="row py-0 my-0">
                     <div class="col-3 py-1 my-0 text-center">
                     <span style="background:#c9e4e8; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#1f4247">mdi-music mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-6 py-1 my-0 text-left px-0">
                      <span class="msgText">{{ audioName }}</span>
                     </div>
                      <div class="col-3 py-0 my-0  d-flex px-1" style="align-items:center; justify-content:center;">
                     <span class="msgText" style="font-size:10px;">{{audioSize}}</span>
                     </div>
                     
                  </div>
                   </div>
           
                              </v-card>
           
                            
                             <div style="position:absolute; height:auto; width:auto; right:2%; top:-10%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;">
                               <v-btn icon @click.stop="audioUrl = ''"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>
                              
                              </div> 
                       </div>

                         <div class="col-12 d-flex py-2 px-4" style="align-items:center;justify-content:center;" v-if="fileUrl != ''">
                            <div  style=" height:100%;width:100%; " >
                              <v-card class="py-1 px-2" >
                                  <div class="col-12 py-1 px-0">
                     <div class="row py-0 my-0">
                     <div class="col-3 py-1 my-0 text-center">
                     <span style="background:#c9e4e8; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#1f4247">mdi-file mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-6 py-1 my-0 text-left px-0">
                      <span class="msgText">{{ documentName }}</span>
                     </div>
                      <div class="col-3 py-0 my-0  d-flex px-1" style="align-items:center; justify-content:center;">
                     <span class="msgText" style="font-size:10px;">{{documentSize}}</span>
                     </div>
                     
                  </div>
                   </div>
           
                              </v-card>
                             <div style="position:absolute; height:auto; width:auto; right:2%; top:-10%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;">
                               <v-btn icon @click.stop="fileUrl = ''"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>
                              
                              </div> 
                       </div>

                       <div class="col-12 py-2" v-if="codeContent != ''">
                            <div  style="height:100%;width:100%; "  class="px-4">
                              
                              <code-box  :filename="CodeFileName" :codeContent="codeContent" :codeLanguage="codeLanguage" class="text-left" :codeViewerType="viewerType"></code-box>

                             <div style="position:absolute; height:auto; width:auto; right:10%; bottom:10%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:12345676;">
                               <v-btn icon @click.stop="codeContent = ''"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>
                              
                              </div> 
                       </div>

                     

                 </div>
             </div>
           
           

            </div>

           
         </div>

           <div class="text-right px-3" style="position:absolute;left:0; bottom:20%;width:100%;height:auto;align-items:center;justify-content:center; z-index:123453566;" >
                   
                  <v-btn fab small color="#3E8893" :disabled="editFeild" style="color:white;"
                   @click="sendMessage" :loading="loading"><v-icon color="#ffffff">mdi-send</v-icon></v-btn>
             </div>
         

     <v-fade-transition>
              <div  style="position:absolute; width:100%; height:auto: align-items:center;justify-content:center;bottom:15%; z-index:123453566;"  class="d-flex">
             <v-alert
      v-model="Alert"
      dismissible
      close-icon="mdi-delete"
      color="#3E8893"
       width="auto"
       style="font-size:13px;background:#dbedf0;"
       height="auto"
      border="left"
     
      elevation="2"
      colored-border
     
    >
      {{alertMsg}}
    </v-alert>
        </div>
        </v-fade-transition>


       </div>
</template>
<script>
export default {
     data(){
        return{
        
           imagepath:'',
        Alert:false,
        alertMsg:'',
        image1: this.$root.imagepath1,
        image2: this.$root.imagepath2,
        image3: this.$root.imagepath3,
        image4: this.$root.imagepath4,
        imageHeight1: this.$root.imageHeight1,
        imageHeight2: this.$root.imageHeight2,
        imageHeight3: this.$root.imageHeight3,
        imageHeight4: this.$root.imageHeight4,
        imageWidth1: this.$root.imageWidth1,
        imageWidth2: this.$root.imageWidth2,
        imageWidth3: this.$root.imageWidth3,
        imageWidth4: this.$root.imageWidth4,
        videoUrl: '',
        VideoBackground:'#c5c5c5',
        VideoImgBackground:'',
         CodeFileName:'index',
         codeContent:this.$root.codeContent,
         codeLanguage:this.$root.codeLanguage,
         FileBlob:'',
         viewerType:'postViewer',
         postContent:'',
         wordLimit:200,
         wordCount:0,
         mycontent:'',
         contentInWord:'',
         editFeild:false,
         loading:false,
         is_comment: false,
         attachment_type:null,
         imageTemp1:this.$root.imageTemp1,
          imageTemp2:this.$root.imageTemp2,
           imageTemp3:this.$root.imageTemp3,
            imageTemp4:this.$root.imageTemp4,
          VideoBlob:'',
          AudioBlob:'',
          audioUrl:'',
          progressvalue:0,
          fileUrl:'',
          projectArray:[],
          documentSize:'',
          VideoName:'',
          documentName:'',
          audioName:'',
          audioSize:'',
          loadingProjects:false,
          showShareProject:false,
          selectedProject:'',
          
        }
    },
     components: {
   
  },
    mounted(){
      this.$root.is_reply = false;
     
      this.getAllProjects();
    },
    methods:{
      getAllProjects:function(){
          if(this.$root.ChatList.length != 0){
            this.projectArray = this.$root.ChatList[3].data;
          }else{
            this.loadingProjects = true;
             axios.get( '/fetch-user-projects')
      .then(response => {
      
      if (response.status == 200) {
        
        this.loadingProjects = false;
     
       this.projectArray = response.data
       
     }
       
     
     })
     .catch(error => {
    
     }) 
          }
      },
       goBack() {

           this.$root.showChatBottom = true;
          
       this.$root.sharePage = false;
        },
      
        memberHandler: function(){

        },
        clearData: function(){
           this.image1 = '';
            this.image2 = '';
            this.image3 = '';
            this.image4 = '';
            this.videoUrl = '';
           this.audioUrl = '';
            this.fileUrl = '';
            this.codeContent = '';
            this.showShareProject = false;

        },
         codeEditor: function(){
           this.image1 = '';
            this.image2 = '';
            this.image3 = '';
            this.image4 = '';
            this.videoUrl = '';
           
    this.$router.push({ path: '/code-editor' });
   },
   bytesToSize:function(bytes) {
   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
   if (bytes == 0) return '0 Byte';
   var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
   return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
},
   audiohandler:function(e){
        this.clearData();
          const files = e.target.files
            
            this.AudioBlob = files[0];
           	const fr = new FileReader ()
        fr.readAsDataURL(files[0])
         let fileSize = files[0].size;
          this.audioName = files[0].name;
         this.audioSize = this.bytesToSize(files[0].size);
           if(fileSize <= 40000000){
              fr.addEventListener('load', () => {
          this.audioUrl = fr.result;
          
        });
           }else{
              this.showAlert(5000,'Video size cannot be more than 400MB')
                return;
           }
   },
   filehandler:function(e){
       this.clearData();
          const files = e.target.files
            
            this.FileBlob = files[0];
           	const fr = new FileReader ()
        fr.readAsDataURL(files[0])
         let fileSize = files[0].size;
             
             this.documentSize =  this.bytesToSize(files[0].size);
             this.documentName = files[0].name;
           if(fileSize <= 400000000){
              fr.addEventListener('load', () => {
          this.fileUrl = fr.result;
          
        });
           }else{
              this.showAlert(5000,'File size cannot be more than 400MB')
                return;
           }
   },
    showAlert:function(duration,text){
        this.Alert = true;
        this.alertMsg = text;
        let _this = this;
     
     setTimeout(function(){
        _this.Alert = false;
     },duration);

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

 makeUUID:function(){
     var id = "id" + Math.random().toString(16).slice(2);
     return id;
 },
 makeMessage:function(msgType,data){
    let NewMessage = {
      content:null,
      created_at: moment().subtract(1,'hours'),
       is_reply:"false",
       message_id: this.makeUUID(),
        id:this.makeUUID(),
       replied_message:[],
        index_count : this.$root.returnLastIndex() + 1,
       replied_message_id:null,
       showReply:false,
       showDate:null,
       loading:true,
       progressValue:0,
       space_id:this.$root.selectedSpace.space_id,
        tagged:false,
        type:msgType,    
        user_id:this.$root.user_temp_id,
        username:this.$root.username,
        video:{},
        audio:{},
        code:{},
        image:{},
        file:{}

    };
   
   if (msgType == 'image') {
      NewMessage.image = data;
   }

    if (msgType == 'video') {
      NewMessage.video = data;
   }

    if (msgType == 'audio') {
      NewMessage.audio = data;
   }

    if (msgType == 'code') {
      NewMessage.code = data;
   }

    if (msgType == 'file') {
      NewMessage.file = data;
   }

   return NewMessage;

 },
 ChangeDataToDefaults:function(){
      this.$root.imagepath1 = '';
      this.$root.imagepath2 = '';
      this.$root.imagepath3  = '';
      this.$root.imagepath4 = '';
      this.$root.codeContent = '';
      this.contentInWord = '';
      this.$root.postContent = '';
      this.showShareProject =  false;
 },
    sendMessage: function(){
        this.loading = true;

          this.$root.showChatBottom = true;
          
          let formData = new FormData();
         

        if(this.image1 != '' || this.image2 != '' || this.image3 != ''|| this.image4 != ''){
                 
                
                let Data = null;
          
             this.$root.NewMsg = this.makeMessage('image',Data);

               this.attachment_type = 'image';

               if(this.image1 != ''){
                   if(this.$root.imageCanvas1 == ''){
                       formData.append('image1',this.imageTemp1);
                   }else{
                     var data1 = this.handleBlob(this.image1);
                       formData.append('image1',data1[0]);
                       formData.append('imageType1',data1[1]);
                      
                   }
              
               }

                if(this.image2 != ''){
                   if(this.$root.imageCanvas2 == ''){
                       formData.append('image2',this.imageTemp2);
                   }else{
                          var data2 = this.handleBlob(this.image2);
                  formData.append('image2',data2[0]);
                       formData.append('imageType2',data2[1]);

                   }
              
               }

                if(this.image3 != ''){
                   if(this.$root.imageCanvas3 == ''){
                       formData.append('image3',this.imageTemp3);
                   }else{

                  var data3 = this.handleBlob(this.image3);
                  formData.append('image3',data3[0]);
                       formData.append('imageType3',data3[1]);
                   }
              
               }
                if(this.image4 != ''){
                   if(this.$root.imageCanvas4 == ''){
                       formData.append('image4',this.imageTemp4);
                   }else{

                  var data4 = this.handleBlob(this.image4);
                  formData.append('image4',data4[0]);
                       formData.append('imageType4',data4[1]);
                   }
              
               }
               
              
            
      
            
                

            
            

           // height
             formData.append('imageHeight1',this.imageHeight1);
            formData.append('imageHeight2',this.imageHeight2);
            formData.append('imageHeight3',this.imageHeight3);
            formData.append('imageHeight4',this.imageHeight4);

           // width
             formData.append('imageWidth1',this.imageWidth1);
            formData.append('imageWidth2',this.imageWidth2);
            formData.append('imageWidth3',this.imageWidth3);
            formData.append('imageWidth4',this.imageWidth4);
        }

         if(this.codeContent != ''){
            
             let Data = null;
          
          this.$root.NewMsg = this.makeMessage('code',Data);

            this.attachment_type = 'code';

            formData.append('code',this.codeContent);
             formData.append('file_name',this.CodeFileName);
             formData.append('language_type',this.codeLanguage);
            
        }

         if(this.videoUrl != ''){

           let Data = null;
          
          this.$root.NewMsg = this.makeMessage('video',Data);
            this.attachment_type = 'video';

            formData.append('video',this.VideoBlob);
            formData.append('display_name',this.VideoName);
            
        }

         if(this.audioUrl != ''){
             
           let Data =null;
          
          this.$root.NewMsg = this.makeMessage('audio',Data);
           
            this.attachment_type = 'audio';

            formData.append('audio',this.AudioBlob);
            formData.append('display_name',this.audioName);
            
        }

        if(this.fileUrl != ''){
           
            let Data =null;
          
          this.$root.NewMsg = this.makeMessage('file',Data);

            this.attachment_type = 'file';

            formData.append('file',this.FileBlob);
            formData.append('display_name',this.documentName);
             formData.append('file_size',this.documentSize);
            
        }

        if(this.showShareProject == true){

           let Data =null;
          
          this.$root.NewMsg = this.makeMessage('project',Data);

           let projectData = this.projectArray.filter((project)=>{
              return project.project_slug == this.selectedProject;
              
           });

           this.$root.NewMsg.project = projectData[0];

            formData.append('project_data',this.selectedProject);

            this.attachment_type = 'project';

            
        }


        

          this.$root.Messages.push(this.$root.NewMsg);
          
           this.$root.spaceFullData[0] =  this.$root.Messages;
         
           let fullData = [];
                    fullData.push(this.$root.spaceFullData[0]);
                fullData.push(this.$root.spaceFullData[1]);

                 let thirdData = [];
                    
                    thirdData.push(this.$root.spaceFullData[2][0])

                fullData.push(thirdData);

               


             this.$root.LocalStore(this.$root.selectedSpace.space_id  + this.$root.username,fullData);

           
         
           
         this.$root.sharePage = false;

         this.$root.scrollToBottom();
           
         
         if(this.$root.SpaceUsers.length == 0){
        
          formData.append('current_user','empty');

         }else{
           
           formData.append('current_user',JSON.stringify(this.$root.SpaceUsers ));
         }
      
        
        formData.append('is_reply',this.$root.is_reply);
        formData.append('attachment_type',this.attachment_type);
        formData.append('space_id',this.$root.selectedSpace.space_id);
        formData.append('temp_id', this.$root.NewMsg.message_id)
         formData.append('device_id',this.$root.userDeviceId)
        
        this.ChangeDataToDefaults();

         this.$root.updateSpaceTracker(this.$root.selectedSpace.space_id);
       this.$root.sendShareMessage(formData);
    },
     crophandler:function(e){

       this.clearData();

         this.videoUrl = '';
         this.codeContent='';
           // Reference to the DOM input element
			var input = e.target;
            // Ensure that you have a file before attempting to read it  
             
              var filesLength = input.files.length;
              if(filesLength > 4){
                 this.showAlert(5000,'Selected images cannot be more than 4')
                return;
              }

              

          if(filesLength <= 4){
             
            
           const files = e.target.files

           this.imageTemp1 = files[0];
           this.imageTemp2 = files[1];
           this.imageTemp3 = files[2];
           this.imageTemp4 = files[3];

            this.$root.imageTemp1 = files[0];
           this.$root.imageTemp2 = files[1];
           this.$root.imageTemp3 = files[2];
           this.$root.imageTemp4 = files[3];
             
           	const fr = new FileReader ()
				fr.readAsDataURL(files[0])
				fr.addEventListener('load', () => {
          this.image1 = fr.result;
        });
        
          if(files[1]){
            const fr2 = new FileReader ()
				fr2.readAsDataURL(files[1])
				fr2.addEventListener('load', () => {
          this.image2 = fr2.result;
        });
          }
           	

        if(files[2]){
           	const fr3 = new FileReader ()
				fr3.readAsDataURL(files[2])
				fr3.addEventListener('load', () => {
          this.image3 = fr3.result;
        });
        }


         if(files[3]){
           	const fr4 = new FileReader ()
				fr4.readAsDataURL(files[3])
				fr4.addEventListener('load', () => {
          this.image4 = fr4.result;
        });
         }
        
			
       
              
          }
                   
			
        },
        editImage:function(imageNumber){
           this.codeContent='';
          if(imageNumber == 'image1'){

         this.$root.imagepath1  = this.image1;
          this.$root.imagepath2  = this.image2;
           this.$root.imagepath3  = this.image3;
            this.$root.imagepath4  = this.image4;

          this.$root.currentImage = 'image1'

          
          }

          if(imageNumber == 'image2'){

          this.$root.imagepath1  = this.image1;
          this.$root.imagepath2  = this.image2;
           this.$root.imagepath3  = this.image3;
            this.$root.imagepath4  = this.image4;

          this.$root.currentImage = 'image2'
          }

          if(imageNumber == 'image3'){

          this.$root.imagepath1  = this.image1;
          this.$root.imagepath2  = this.image2;
           this.$root.imagepath3  = this.image3;
            this.$root.imagepath4  = this.image4;

          this.$root.currentImage = 'image3'
          }

          if(imageNumber == 'image4'){

         this.$root.imagepath1  = this.image1;
          this.$root.imagepath2  = this.image2;
           this.$root.imagepath3  = this.image3;
            this.$root.imagepath4  = this.image4;

          this.$root.currentImage = 'image4'
          }
            this.$root.postContent = this.contentInWord; 

          this.$router.push({ path: '/image-editor' });
          
        },
        vidoehandler:function(e){
           this.clearData();
          const files = e.target.files
            
            this.VideoBlob = files[0];
           	const fr = new FileReader ()
        fr.readAsDataURL(files[0])
         let fileSize = files[0].size;
           this.VideoName = files[0].name;

           if(fileSize <= 100000000){
              fr.addEventListener('load', () => {
          this.videoUrl = fr.result;
          
        });
           }else{
              this.showAlert(5000,'Video size cannot be more than 100MB')
                return;
           }
				
        }
  
  },
}
</script>
<style>
.documentIcon{
    background: #dbedf0;
    border:1px solid #dbedf0;
    border-radius:50%;
}
.documentTitle{
  font-size: 12px;
  color: #3E8893;
}

.documentSize{
  font-size: 10px;
  color: #a6a6a6;
}

.newbadge{
     font-size:11px;
      color:rgb(38, 82, 89);
     font-family:HeaderText; 
     border:1px solid #3E8893; 
     border-radius:9px; 
     padding: 2px 4px;
     background:#edf6f7;
     font-weight: bolder;
 } 
 .messagesBadges{
    
    color: #ffffff;
    background: #3e868e;
    font-size: 11px;
    border:2px solid #3e868e;
    border-radius:50%;
}
</style>