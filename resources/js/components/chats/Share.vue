<template>
    <div style="font-family:BodyFont;">
    
      <v-btn icon color="#ffffff" @click="goBack" style="position:absolute;background:#3C87CD;top:2%; right:2%; z-index:990679797879;" 
           class="d-inline-block  "><v-icon>mdi-close mdi-18px</v-icon></v-btn>

          <div class="d-flex flex-wrap mb-2 mt-4 pt-3" style="align-items:center; justify-content:center;">
           
          
            <v-card class="px-1 py-1 mx-1" style="border-radius:10px;">
                   <v-btn title="Add images" icon  >
                            <v-icon style="font-size:26px;">las la-image</v-icon>
                 <input type="file" multiple
                @change="crophandler" style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                 accept="image/x-png,image/jpeg,image/jpg"/>
                </v-btn>
           </v-card>

            <v-card class="px-1 py-1 mx-1" style="border-radius:10px;">
                   <v-btn title="Add a video" icon > <v-icon style="font-size:26px;">las la-video</v-icon>
                     <input type="file"
                @change="vidoehandler" style="opacity:0;width:100%; height:100%; left:0; overflow:hidden; position:absolute; z-index:10;"
                 accept="video/mp4,video/x-m4v,video/*"/>
                   </v-btn>
                  
           </v-card>

            <v-card class="px-1 py-1 mx-1" style="border-radius:10px;">
                   <v-btn icon title="Add an audio" > <v-icon style="font-size:26px;">las la-music</v-icon>
                     <input type="file"
                @change="audiohandler" style="opacity:0;width:100%; height:100%; left:0; overflow:hidden; position:absolute; z-index:10;"
                 accept="audio/*"/>
                   </v-btn>
                   
           </v-card>

            <v-card class="px-1 py-1 mx-1" style="border-radius:10px;">
                   <v-btn icon title="Add a code"> <v-icon style="font-size:26px;">las la-file-alt</v-icon>
                     <input type="file" @change="filehandler"
               style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
           />
                   </v-btn>
                  
           </v-card>

           <v-card class="px-1 py-1 mx-1" style="border-radius:10px;">
                   <v-btn icon title="Add a code"> <v-icon style="font-size:26px;">las la-laptop-code</v-icon></v-btn>
           </v-card>


          </div>
           
           <!-- image editing view -->
          <div>

                 

                <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 d-flex flex-row flex-wrap px-1 px-md-2" style="align-items:center; ">

                       <div class="col-6 d-flex py-2 px-2" style="align-items:center;justify-content:center;" v-if="image1 != ''">
                            <div @click="editImage('image1')" :style="'border:2px solid #3C87CD; border-radius:10px; height:170px; background-image:url('+ image1 +');width:100%; background-size:cover;'" >
                             <div style="position:absolute; height:auto; width:auto; right:10%; top:10%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;">
                               <v-btn icon  @click.stop="image1 = ''"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>

                              </div>
                       </div>

                        <div class="col-6 d-flex py-2 px-2" style="align-items:center;justify-content:center;" v-if="image2 != ''">
                            <div @click="editImage('image2')" :style="'border:2px solid #3C87CD; border-radius:10px; height:170px; background-image:url('+ image2 +');width:100%; background-size:cover;'" >
                             <div style="position:absolute; height:auto; width:auto; right:10%; top:10%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;">
                               <v-btn icon @click.stop="image2 = ''"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>

                              </div>
                       </div>
                        <div class="col-6 d-flex py-2 px-2" style="align-items:center;justify-content:center;" v-if="image3 != ''">
                            <div @click="editImage('image3')" :style="'border:2px solid #3C87CD; border-radius:10px; height:170px; background-image:url('+ image3 +');width:100%; background-size:cover;'" >
                             <div style="position:absolute; height:auto; width:auto; right:10%; top:10%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;">
                               <v-btn icon @click.stop="image3 = ''"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>

                              </div>
                       </div>
                        <div class="col-6 d-flex py-2 px-2" style="align-items:center;justify-content:center;" v-if="image4 != ''">
                            <div @click="editImage('image4')" :style="'border:2px solid #3C87CD; border-radius:10px; height:170px; background-image:url('+ image4 +');width:100%; background-size:cover;'" >
                             <div style="position:absolute; height:auto; width:auto; right:10%; top:10%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;">
                               <v-btn icon @click.stop="image4 = ''"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>

                              </div>
                       </div>

                  <div class="col-12 text-center" v-if="image1 != '' || image2 != '' || image3 != '' || image4 != ''">
                           <v-btn small rounded color="#3C87CD"  @click="sendMessage" style="font-size:12px; font-weight:bolder; color:white;font-family:MediumFont;">
            <span style="color:white;text-transform:none;">Send</span> 
           </v-btn>
                  </div>
                </div>

          </div>

          <!-- ends -->
    </div>
</template>
<script>
// alert

import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

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
    methods:{
             goBack:function(){
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')

          this.$root.chatComponent.chatShareIsOpen = false;
       },
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
           if(fileSize <= 4000000){
              fr.addEventListener('load', () => {
          this.audioUrl = fr.result;

        });
       
        setTimeout(() => {
           this.sendMessage()
        }, 1000);
           }else{
              
               this.showAlert('Oops!','Audio size cannot be more than 40MB','error')
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
     
      // send message
         this.sendMessage();

        });
           }else{
              this.showAlert('Oops!','File size cannot be more than 400MB','error')
                return;
           }
   },
  showAlert:function(title='',message,type){
       
       if(type == 'info'){

          iziToast.info(
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

           this.$root.spaceFullData.messages =  this.$root.Messages;

          

        this.$root.LocalStore('full_'+this.$root.selectedSpace.space_id  + this.$root.username,this.$root.spaceFullData);


         this.$root.scrollToBottom();


        

           formData.append('current_user',JSON.stringify(this.generateOnlineUsersList()));
       
      


        formData.append('is_reply',this.$root.is_reply);
        formData.append('attachment_type',this.attachment_type);
        formData.append('space_id',this.$root.selectedSpace.space_id);
        formData.append('temp_id', this.$root.NewMsg.message_id)
         formData.append('device_id',this.$root.userDeviceId)

        this.ChangeDataToDefaults();

          this.$root.updateSpaceTracker(this.$root.selectedSpace.space_id,this.$root.NewMsg);

       this.$root.sendShareMessage(formData);

       this.goBack();
    },
     generateOnlineUsersList: function(){
          let onlineUserList = [];

          this.$root.selectedSpaceMembers.forEach(member => {
             
             let userData = this.$root.globalUsers.filter((user)=>{
               return user.id == member.user_id;
             })

             if(userData.length != 0){
               onlineUserList.push(userData[0])
             }
           
            
          });
        
        return onlineUserList;
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
                
                  this.showAlert('Oops!','Selected images cannot be more than 4','error')
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
          
      this.$router.push({ path: '/channels/' + this.$root.selectedSpace.space_id +'/crop-image' });
        

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
       
        // send message
         this.sendMessage();
        });
           }else{
              this.showAlert('Oops!','Video size cannot be more than 100MB','error')
              
                return;
           }

        }
    }
}
</script>
<style scoped>

</style>