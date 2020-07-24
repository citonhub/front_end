<template>
     <v-app style="background:transparent; font-family:BodyText;">

       <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">


        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-4 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-4 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
           <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">comment</span>
         </div>
         <div class="col-4 py-1 my-0 px-1 pr-2 text-right"  style="border-bottom:2px solid #4495a2;" >
              <v-btn rounded x-small color="#3E8893" :disabled="editFeild" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;" 
                   @click="savePost" :loading="loading">Send</v-btn>
         </div>
      </div>
     </div>

      <div class="col-12 py-1 my-0 " >
         <v-form class="row my-2 py-2 px-2 ">
              
             
             
              


             <div class="col-12 py-2 my-0 px-2">
                
                  <v-row>
       
            <div  class="px-2">
                
                <v-btn text icon  color="#4495a2"
                   
                >
                 <input type="file" multiple
                @change="crophandler" style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                 accept="image/x-png,image/jpeg,image/jpg"/>
                    <v-icon>mdi-image mdi-18px</v-icon>
                </v-btn>

                 <v-btn text icon  color="#4495a2"
                    @click="codeEditor"
                >
                    <v-icon>mdi-xml mdi-18px</v-icon>
                </v-btn>
               
                <v-btn text icon  color="#4495a2"
                    
                >
                <input type="file"
                @change="vidoehandler" style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                 accept="video/mp4,video/x-m4v,video/*"/>
                    <v-icon>mdi-video mdi-18px</v-icon>
                </v-btn>

                <v-btn text icon  color="#4495a2"
                   
                >
                    <v-icon>mdi-link-variant mdi-18px</v-icon>
                </v-btn>


               
            </div>            
       
    </v-row>
    <v-row>
        <v-col cols=12 >
         

            <div class="editor">
          
             <editor-content class="editor-box" :editor="editor" :onUpdate="countCharacter()" :onFocus="focusedText"  />
            </div>
        </v-col>
        <div class="col-12 py-0">
          <div class="row py-0 my-0">
                <div class="col-8 py-0 my-0">
                    <span style="font-size:12px;" class="text-danger" v-show="editFeild">Characters cannot exceed {{wordLimit }}</span>
                </div>
                 <div class="col-4 py-0 my-0  text-right">
                   <span class="counter">{{wordCount}}/{{ wordLimit }}</span>
                </div>
          </div>
          
        </div>
        
    </v-row>
             </div>
             
                  
                  <div class="col-12 d-flex py-2 px-4" style="align-items:center;justify-content:center;" v-if="progressvalue > 0">
                             <v-progress-linear color="#3E8893" height="14px"  class="" striped :value="progressvalue" rounded>

                          </v-progress-linear>
                       </div>

          
             
            <div class="col-12 py-2 my-0 px-2 text-center">
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

                       <div class="col-12 py-2" v-if="codeContent != ''">
                            <div  style="height:100%;width:100%; "  class="px-4">
                              
                              <code-box  :filename="CodeFileName" :codeContent="codeContent" :codeLanguage="codeLanguage" class="text-left" :codeViewerType="viewerType" ></code-box>

                             <div style="position:absolute; height:auto; width:auto; right:10%; bottom:10%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:12345676;">
                               <v-btn icon @click.stop="codeContent = ''"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>
                              
                              </div> 
                       </div>

                 </div>
             </div>


             <div class="my-5 py-3 "   style="padding-top:120px !important;">

             </div>

         
              
          </v-form>
        </div>
         </div>
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


     </v-app>
</template>
<script>
import { Editor, EditorContent, EditorMenuBar  } from 'tiptap';
import {
        Bold, 
        Underline,
        Image,BulletList,ListItem,Placeholder} from 'tiptap-extensions';

export default {
    data(){
        return{
          editor: new Editor({
        content: this.$root.postContent,
        extensions:[
        
            new Bold(),
            new Underline(),
            new Image(),
             new Placeholder({
            emptyEditorClass: 'is-editor-empty',
            emptyNodeClass: 'is-empty',
            emptyNodeText: 'replying ' + this.$root.commentUsername + '...',
            showOnlyWhenEditable: true,
            showOnlyCurrent: true,
          }),
       
           
        ],
        
      }),
      
     
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
         CodeFileName:this.$root.CodeFileName,
         codeContent:this.$root.codeContent,
         codeLanguage:this.$root.codeLanguage,
         viewerType:'comment',
         postContent:'',
         wordLimit:200,
         wordCount:0,
         mycontent:'',
         contentInWord:'',
         editFeild:false,
         loading:false,
         is_comment: true,
         is_reply: false,
         attachment_type:null,
         imageTemp1:this.$root.imageTemp1,
          imageTemp2:this.$root.imageTemp2,
           imageTemp3:this.$root.imageTemp3,
            imageTemp4:this.$root.imageTemp4,
          VideoBlob:'',
          progressvalue:0
        }
    },
     computed: {
   
     },
    components: {
    EditorContent,
    EditorMenuBar,
  },
   mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = true;
       this.setContentField();
        this.$root.checkIfUserIsLoggedIn();
    },
    methods:{
      goBack() {
           this.$root.fromHome = true;
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
      countCharacter:function(value){
            this.wordCount = this.editor.getHTML().length;

         if(this.wordCount > this.wordLimit){
           this.editFeild = true;

         }else{
            this.editFeild = false;
         }
         
       
         this.contentInWord = this.editor.getHTML();
         this.$root.postContent = this.editor.getHTML();

          
          
      },
      setContentField: function(){
        
          this.editor.setContent(this.$root.postContent);
      },
      focusedText:function(){
      
      },
      showHome: function(){
      this.$router.push({ path: '/' });
   },
   codeEditor: function(){
           this.image1 = '';
            this.image2 = '';
            this.image3 = '';
            this.image4 = '';
            this.videoUrl = '';
            this.$root.postContent = this.contentInWord; 
    this.$router.push({ path: '/code-editor' });
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

 ChangeDataToDefaults:function(){
      this.$root.imagepath1 = '';
      this.$root.imagepath2 = '';
      this.$root.imagepath3  = '';
      this.$root.imagepath4 = '';
      this.$root.codeContent = '';
      this.contentInWord = '';
      this.$root.postContent = '';
 },
    savePost: function(){
        this.loading = true;
          
          let formData = new FormData();
         

        if(this.image1 != '' || this.image2 != '' || this.image3 != ''|| this.image4 != ''){


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
            this.attachment_type = 'code';

            formData.append('code',this.codeContent);
             formData.append('file_name',this.CodeFileName);
             formData.append('language_type',this.codeLanguage);
            
        }

         if(this.videoUrl != ''){
            this.attachment_type = 'video';

            formData.append('video',this.VideoBlob);
            
        }

        formData.append('content',this.contentInWord);
        formData.append('is_comment',this.is_comment);
          if(this.$root.commentIsReply){
         formData.append('is_reply',true);
         formData.append('reply_post_id',this.$root.repliedPostId);
          }
         formData.append('commented_post_id',this.$route.params.postId);
        formData.append('attachment_type',this.attachment_type);

       axios.post('/save-post',formData,
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
            
           if (response.status == 200) {
                this.loading = false;
                this.$root.commentIsReply = false;
                let newPost = response.data[0];

                  this.$root.postComments.unshift(newPost);
                  
                  this.$root.postArray[0].comments = this.$root.postArray[0].comments + 1;

                 this.ChangeDataToDefaults();
                  this.$router.push({ path: '/post/' + this.$route.params.username + '/' +this.$route.params.postId + '/user' });
            }else{
              
            }
            
            
          })
          .catch(error => {
            this.showAlert(5000,'Failed- ' + error);
              this.loading = false;
          })
    },
     crophandler:function(e){

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
          this.codeContent='';
            this.image1 = '';
            this.image2 = '';
            this.image3 = '';
            this.image4 = '';
          const files = e.target.files
            
            this.VideoBlob = files[0];
           	const fr = new FileReader ()
        fr.readAsDataURL(files[0])
         let fileSize = files[0].size;

           if(fileSize <= 400000000){
              fr.addEventListener('load', () => {
          this.videoUrl = fr.result;
          
        });
           }else{
              this.showAlert(5000,'Video size cannot be more than 400MB')
                return;
           }
				
        }
    },
    beforeDestroy() {
    this.editor.destroy()
  },
}
</script>
<style lang="scss">
.editor-box> * {
    border-bottom:1px solid #4495a2;
    height: auto;
    line-height: 20px;
    padding: 5px 2px;
    font-size: 12px;
    color: #262626;
}

.editor p.is-editor-empty:first-child::before {
  content: attr(data-empty-text);
  float: left;
  color: #aaa;
  pointer-events: none;
  height: 0;
  font-style: italic;
}

.counter{
  font-size: 12px;
    color: #262626;
}

.is-active{
    border-color: #dbedf0;
    border-style: solid;
    border-width: 1px;
}
 /* *:focus {
    outline: none;
}  */
</style>