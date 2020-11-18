<template>
    <div class="py-0 px-0 "  style=" z-index:12;">


         <v-card class="col-12  my-0 ">
           
            <div class="col-12  py-1 my-0 px-2 ">

              <div class="row py-0 my-0">
                  <div class="col-6 py-0 my-0 text-left">

                    <h6>Create Content</h6>

                  </div>

                   <div class="col-6 py-0 my-0 text-right">

                      <v-btn rounded x-small color="#3E8893"  style="color:#ffffff; font-weight:12px; " v-if="!editMode" :loading="loadingTag" @click="addTag" >Add</v-btn>

                       <v-btn rounded x-small color="#3E8893"  style="color:#ffffff; font-weight:12px; " v-else :loading="loadingTag" @click="resetForm" >Reset</v-btn>

                  </div>
              </div>

               
                
             </div>
         
            <div class="row px-2 py-2" >

            <div class="col-12 col-md-10 offset-md-1  col-lg-8 offset-lg-2 py-2 my-0 px-2 text-center">
                  <v-text-field
                style="font-size:13px;"
                 placeholder="e.g Js arrays"
            label="Topic"
             :disabled="this.editMode"
             dense    
             v-model="tagName"
              counter="200"
             color="#4495a2"
            
             ></v-text-field>
             </div>


              <div class="col-12 col-md-10 offset-md-1  col-lg-8 offset-lg-2 py-2 my-0 px-2 text-center" v-if="editMode && tagactionType == 'pattern'">
                  <v-combobox
                style="font-size:13px;"
                 placeholder="keywords..."
            label="Add Keywords"
             dense    
             v-model="patternName"
              counter="80"
               multiple
               chips
             color="#4495a2"
            
             ></v-combobox>

             </div>


            <div class=" col-12  py-2 my-0 px-2 text-center"  v-if="editMode && tagactionType == 'pattern'">
                  <v-btn  type="submit" rounded small color="#3E8893" @click.prevent="addPattern" style="font-size:11px; font-weight:bolder; color:white;" :loading="loadingPattern">Add</v-btn>
             </div>


          

            <div class="col-12  py-2 my-0 px-2 " v-if="editMode && tagactionType == 'response'">

              <div class="row py-0 my-0">
                  <div class="col-12 py-0 my-0 text-center">

                     <v-btn small color="#3E8893" :loading="newContentLoading" style="color:#ffffff; font-weight:13px; font-weight:bolder; text-transform:capitalize; ">{{contentData.response_slug}}</v-btn>

                  </div>

                  
              </div>

               
                
             </div>
         

             <div   class="col-12  py-0 my-0 px-1 "  v-if="editMode && tagactionType == 'response'">
    
   

             

              <div class="col-12 py-2 my-0 mx-2 text-center" >

                <span v-for="(content,index) in responseContents" :key="index" >

                   <v-chip
      class="ma-1"
      close
      @click="showContent(content)"
      v-if="content.type == 'text'"
      @click:close="deleteContent(content)"
      color="#3E8893"
      outlined
    >
      <v-icon left>
        mdi-form-select
      </v-icon>
     Text
    </v-chip>


     <v-chip
      class="ma-1"
       v-if="content.type == 'code'"
      close
       @click:close="deleteContent(content)"
      @click="showContent(content)"
      color="#3E8893"
      outlined
    >
      <v-icon left>
        mdi-xml
      </v-icon>
     {{content.code.name}}.{{ languageExtensions(content.code.language_type) }}
    </v-chip>


     <v-chip
      class="ma-1"
      close
      @click="showContent(content)"
       @click:close="deleteContent(content)"
       v-if="content.type == 'audio'"
      color="#3E8893"
      outlined
    >
      <v-icon left>
        mdi-music
      </v-icon>
     Audio
    </v-chip>


     <v-chip
      class="ma-1"
      close
      @click="showContent(content)"
       @click:close="deleteContent(content)"
      color="#3E8893"
       v-if="content.type == 'video'"
      outlined
    >
      <v-icon left>
        mdi-video
      </v-icon>
     Video
    </v-chip>

   <v-chip
      class="ma-1"
       v-if="content.type == 'image'"
      close
      @click="showContent(content)"
       @click:close="deleteContent(content)"
      color="#3E8893"
      outlined
    >
      <v-icon left>
        mdi-image
      </v-icon>
     Image
    </v-chip>

     <v-chip
      class="ma-1"
      close
      color="#3E8893"
      @click="showContent(content)"
       @click:close="deleteContent(content)"
       v-if="content.type == 'file'"
      outlined
    >
      <v-icon left>
        mdi-file
      </v-icon>
     Doc
    </v-chip>


     
                </span>

                 
              </div>
             


              <div class="col-12 d-flex py-2 px-4" style="align-items:center;justify-content:center;" v-if="progressvalue > 0">
                             <v-progress-linear color="#3E8893" height="7px"  striped :value="progressvalue" rounded v-if="progressvalue < 100">

                          </v-progress-linear>
                          <span style="font-size:14px;" v-else>Processing...</span>
                       </div>
            

              <div class="col-12  py-2 my-0 px-2 text-center" v-if="showtypeList">
                 <div class="row">

                     <div class="col-12">
                   
                    <v-btn text  x-small color="#3E8893" @click="handleInput('text')" style="background:#edf6f7;border:1px solid #3E8893; font-size:11px;" class="mx-1">Text
                 
                </v-btn>

                    <v-btn text  x-small color="#3E8893" @click="handleInput('code')" style="background:#edf6f7;border:1px solid #3E8893; font-size:11px;" class="mx-1">Code
                 
                </v-btn>

                          <v-btn text  x-small color="#3E8893" style="background:#edf6f7;border:1px solid #3E8893; font-size:11px;" class="mx-1">Images
                 <input type="file" multiple
                  @change="crophandler"
                 style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                 accept="image/x-png,image/jpeg,image/jpg"/>
                </v-btn>
                 <v-btn text   x-small color="#3E8893" style="background:#edf6f7;border:1px solid #3E8893;font-size:11px;" class="mx-1">Audio
                  <input type="file" @change="audiohandler"
                style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                 accept="audio/*"/>
                 </v-btn>
                <v-btn text  x-small color="#3E8893" style="background:#edf6f7;border:1px solid #3E8893;font-size:11px;" class="mx-1">Video

                  <input type="file"  @change="vidoehandler" 
                style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                 accept="video/mp4,video/x-m4v,video/*"/>

                </v-btn>
                <v-btn text  x-small color="#3E8893" style="background:#edf6f7;border:1px solid #3E8893;font-size:11px;" class="mx-1">Doc
                  <input type="file"  @change="filehandler"
               style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;" 
             accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
              text/plain, application/pdf"/>
                </v-btn>

                

                     </div>

                 </div>
             </div>

              <div class="col-12  py-2 my-3 px-2 " v-if="showNewText">

                 <v-textarea
                style="font-size:13px;"
                 placeholder="type here..."
            label="Text message"
             dense
             filled
             @input="update"
             v-model="msgText"
             v-if="responseContText == ''"
             
             color="#4495a2"
            
             ></v-textarea>

             <div style="font-size:13px; border:1px solid gray; border-radius:7px; height:250px; overflow-y:scroll;" v-html="responseContText" v-else class="px-2 py-2" >

             </div>

              </div>

               <div class="col-12 py-0 my-0 px-1"  v-if="showCreateCode">

                  <v-select
           
          :items="items"
          label="Languages"
          style="font-size:13px;"
          hide-selected
           @change="detectchange(languageCode)"  
            v-model="languageCode"
           item-text="name"
           item-value="name"
          placeholder="select..."
          color="#4495a2"
          small-chips
        ></v-select>
                 
               </div>


               <div class="col-12  py-2 my-0 px-2" v-if="showCreateCode">
                  <v-text-field
                style="font-size:13px;"
                 placeholder="e.g index"
             label="File Name"
            
             dense    
             v-model="CodeFilename"
              counter="200"
             color="#4495a2"
            
             ></v-text-field>
             </div>


               <div class="col-12  py-2 my-3 px-2 " v-if="showCreateCode">

                

                 <div class="codebox"  v-if="showCode">
              
         <codemirror
        v-model="codeContent"
        
        :options="cmOption"
        style="height:250px;"
        @cursorActivity="onCmCursorActivity"
        @ready="onCmReady"
        @focus="onCmFocus"
        @blur="onCmBlur"
        @input="onCmCodeChange"        
        />
      
       

  <span style="position:absolute; bottom:23%; right:5%;z-index:100;" class="d-none d-md-inline-block">
           <v-btn
                color="#35747e"
                small
                 @click="runCode"
                class="d-inline-block "
                fab
                v-if="this.selectedLangId != null"
              >
                <v-icon color="#ffffff">mdi-play</v-icon>
            </v-btn>
         
     </span>


     <span style="position:absolute; bottom:20%; right:7%;z-index:100;"  class="d-inline-block d-md-none" >
           <v-btn
                color="#35747e"
                small
                 @click="runCode"
                class="d-inline-block "
                fab
                v-if="this.selectedLangId != null"
              >
                <v-icon color="#ffffff">mdi-play</v-icon>
            </v-btn>
         
     </span>
          
         
              </div>

              <div  v-else style="width:100%; height:250px;" >

          <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals" 
   :srcdoc="ResultCode" 
    style="border: 1px solid #c5c5c5; height:100%; width:100%; left:0; " v-if="selectedLangId == 0"></iframe>

    <textarea  readonly v-else v-model="ResultCode"  style="border: 1px solid #c5c5c5 ; max-height:150px;  width:100%; left:0; font-size:13px;" class="px-2 py-2">
       
    </textarea>

    <span style="position:absolute; bottom:23%; right:5%;z-index:1000;" class="d-none d-md-inline-block">
           <v-btn
                color="#35747e"
                small
                 @click="showCode = true"
                class="d-inline-block "
                fab
                v-if="this.selectedLangId != null"
              >
                <v-icon color="#ffffff">mdi-xml</v-icon>
            </v-btn>
         
     </span>


     <span style="position:absolute; bottom:20%; right:7%;z-index:1000;"  class="d-inline-block d-md-none" >
           <v-btn
                color="#35747e"
                small
                  @click="showCode = true"
                class="d-inline-block "
                fab
                v-if="this.selectedLangId != null"
              >
                <v-icon color="#ffffff">mdi-xml</v-icon>
            </v-btn>
         
     </span>
          

      </div>
        
         

              </div>


               <div class="col-12  col-md-10 offset-md-1  col-lg-8 offset-lg-2  py-2 my-1 px-2 text-center" >
                         
                  <div class="row py-1 px-1">
                  
                  <div class="col-md-6 d-flex py-2 px-4" style="align-items:center;justify-content:center;" v-if="image1 != ''">
                            <div @click="editImage('image1')" :style="'border:2px solid #3E8893; border-radius:10px; height:150px; background-image:url('+ image1 +');width:100%; background-size:cover;'" >
                             <div style="position:absolute; height:auto; width:auto; right:10%; top:10%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;">
                               <v-btn icon  @click.stop="image1 = ''"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>
                              
                              </div> 
                       </div>

                        <div class="col-md-6 d-flex py-2 px-4" style="align-items:center;justify-content:center;" v-if="image2 != ''">
                            <div @click="editImage('image2')" :style="'border:2px solid #3E8893; border-radius:10px; height:150px; background-image:url('+ image2 +');width:100%; background-size:cover;'" >
                             <div style="position:absolute; height:auto; width:auto; right:10%; top:10%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;">
                               <v-btn icon @click.stop="image2 = ''"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>
                              
                              </div> 
                       </div>
                        <div class="col-md-6 d-flex py-2 px-4" style="align-items:center;justify-content:center;" v-if="image3 != ''">
                            <div @click="editImage('image3')" :style="'border:2px solid #3E8893; border-radius:10px; height:150px; background-image:url('+ image3 +');width:100%; background-size:cover;'" >
                             <div style="position:absolute; height:auto; width:auto; right:10%; top:10%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;">
                               <v-btn icon @click.stop="image3 = ''"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>
                              
                              </div> 
                       </div>
                        <div class="col-md-6 d-flex py-2 px-4" style="align-items:center;justify-content:center;" v-if="image4 != ''">
                            <div @click="editImage('image4')" :style="'border:2px solid #3E8893; border-radius:10px; height:150px; background-image:url('+ image4 +');width:100%; background-size:cover;'" >
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


                       <div class="col-lg-10 offset-lg-1 d-flex py-2 px-4" style="align-items:center;justify-content:center;" v-if="audioUrl != ''">
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

                         <div class="col-lg-10 offset-lg-1  d-flex py-2 px-4" style="align-items:center;justify-content:center;" v-if="fileUrl != ''">
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


                      

                       


                      

                  </div>
                

              </div>
             </div>

             


         
            <div class=" col-12  py-2 my-0 px-2 text-center">
                  <v-btn  type="submit" rounded small color="#3E8893"  v-if="editMode && tagactionType == 'response'" :disabled="showBaseAddBtn" @click="sendMessage" :loading="loadingSendMsg" style="font-size:11px; font-weight:bolder; color:white;">Add</v-btn>
             </div>


            </div>
        </v-card>  


       

         <v-fade-transition>
              <div  style="position:absolute; width:100%; left:0; height:auto: align-items:center;justify-content:center;bottom:5%; z-index:123453566;"  class="d-flex">
             <v-alert
      v-model="Alert"
      dismissible
      close-icon="mdi-close"
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






  import { codemirror } from 'vue-codemirror'

  // base style
  import 'codemirror/lib/codemirror.css'

  // theme css
  import 'codemirror/theme/base16-dark.css'

  // language
  import 'codemirror/mode/python/python.js'
  import 'codemirror/mode/clike/clike.js'
  import 'codemirror/mode/cobol/cobol.js'
  import 'codemirror/mode/css/css.js'
  import 'codemirror/mode/erlang/erlang.js'
  import 'codemirror/mode/fortran/fortran.js'
  import 'codemirror/mode/go/go.js'
  import 'codemirror/mode/javascript/javascript.js'
  import 'codemirror/mode/lua/lua.js'
  import 'codemirror/mode/pascal/pascal.js'
  import 'codemirror/mode/perl/perl.js'
  import 'codemirror/mode/php/php.js'
  import 'codemirror/mode/r/r.js'
  import 'codemirror/mode/ruby/ruby.js'
  import 'codemirror/mode/rust/rust.js'
  import 'codemirror/mode/sql/sql.js'
  import 'codemirror/mode/haskell/haskell.js'


  


  // active-line.js
  import 'codemirror/addon/selection/active-line.js'

  // styleSelectedText
  import 'codemirror/addon/selection/mark-selection.js'
  import 'codemirror/addon/search/searchcursor.js'

  // highlightSelectionMatches
  import 'codemirror/addon/scroll/annotatescrollbar.js'
  import 'codemirror/addon/search/matchesonscrollbar.js'
  import 'codemirror/addon/search/searchcursor.js'
  import 'codemirror/addon/search/match-highlighter.js'

  // keyMap

  import 'codemirror/addon/edit/matchbrackets.js'
  import 'codemirror/addon/search/searchcursor.js'
  import 'codemirror/addon/search/search.js'
  import 'codemirror/keymap/sublime.js'

  // foldGutter
  import 'codemirror/addon/fold/foldgutter.css'
  import 'codemirror/addon/fold/brace-fold.js'
  import 'codemirror/addon/fold/foldcode.js'
  import 'codemirror/addon/fold/foldgutter.js'
  import 'codemirror/addon/fold/indent-fold.js'

    // scroll
import 'codemirror/addon/scroll/simplescrollbars.js'
import 'codemirror/addon/scroll/simplescrollbars.css'






let moment = require('moment');

export default {
    name:'response',
     data () {
         return{
       selectedtag:'',
       loading:false,
       codeContent:'',
       msgText:'',
       tagList:[
           'tag_1',
           'tage_2',
           'rad_3',
           
       ],
       languageCode:'',
        showCode:true,
         Alert:false,
        alertMsg:'',
         ResultCode:'',
         showAdminOptions:false,
         recheckCodeBox: true,
       responseName:'',
       loadingSendMsg:false,
       selectedTagData:[],
       videoUrl: '',
        VideoBackground:'#c5c5c5',
        selectedChannel:'',
        selectedResponse:'',
        VideoImgBackground:'',
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
         attachment_type:null,
         imageTemp1:this.$root.imageTemp1,
          imageTemp2:this.$root.imageTemp2,
           imageTemp3:this.$root.imageTemp3,
            imageTemp4:this.$root.imageTemp4,
            responseContText:'',
          VideoBlob:'',
          selectedtag2:'',
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
          contentData:[],
         FileBlob:'',
        cmOption: {
          tabSize: 4,
          foldGutter: true,
          filepath:'',
          NewMsg:'',
          styleActiveLine: true,
          lineNumbers: true,
           scrollbarStyle:"overlay",
          line: true,
          autocorrect: true,
          keyMap: "sublime",
          readOnly:'',
         
          mode: 'text/html',
          theme: 'base16-dark',
          extraKeys: {
             "F11": function(cm) {
          cm.setOption("fullScreen", !cm.getOption("fullScreen"));
        },
        "Esc": function(cm) {
          if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
        }
          },
          
        },
        loadingDeleteContent:false,
        selectedLangId:0,
        showCreateCode:false,
        showNewText:false,
        showAddChannel: false,
        showAddPeople: false,
        tagName:'',
        patternName:'',
        newContentLoading:false,
        items: [
          {
            "id": 0,
            "name": 'HTML' 
          },
          {
            "id": null,
            "name": 'CSS' 
          },
          {
            "id": 26,
            "name": 'JAVASCRIPT(Node)' 
          },
          {
            "id": 35,
            "name": 'PHP' 
          },
          {
            "id": 39,
            "name": 'PYTHON(3.8.1)' 
          },
          {
            "id": 100,
            "name": 'PYTHON For ML(3.7.7)' 
          },
          {
            "id": 38,
            "name": 'PYTHON(2.7.17)' 
          },
          {
            "id": 44,
            "name": 'SQL' 
          },
          {
            "id": 4,
            "name": 'C' 
          },
          {
            "id": 11,
            "name": 'C++' 
          },
          {
            "id": 25,
            "name": 'JAVA' 
          },
          {
            "id": 13,
            "name": 'C#' 
          },
          {
            "id": 18,
            "name": 'ERLANG' 
          },
          {
            "id": 14,
            "name": 'COBOL' 
          },
          {
            "id": 27,
            "name": 'KOTLIN' 
          },
          {
            "id": 21,
            "name": 'FOTRAN' 
          },
          {
            "id": 34,
            "name": 'PERL' 
          },
          {
            "id": 40,
            "name": 'R' 
          },
          {
            "id": 41,
            "name": 'RUBY' 
          },
          {
            "id": 22,
            "name": 'GO' 
          },
          {
            "id": 24,
            "name": 'HASKELL' 
          },
          {
            "id": 28,
            "name": 'LUA' 
          },
          {
            "id": 33,
            "name": 'PASCAL' 
          },
          {
            "id": 42,
            "name": 'RUST' 
          },
          {
            "id": 43,
            "name": 'SCALA' 
          },
          {
            "id": 45,
            "name": 'SWIFT' 
          },
          {
            "id": 46,
            "name": 'TYPESCRIPT' 
          }
        ],
        contentInWord:'',
        showtypeList:false,
        showBaseAddBtn:true,
        CodeFilename:'index',
        responseContents:[],
        tagactionType:'',
        loadingPattern:false,
        editMode:false,
        loadingTag:false
         }
     }, 
     components: {
      codemirror,
      
    },
     computed: {
    codemirror() {
      return this.$refs.cmEditor.codemirror
    },
    compiledMarkdown: function() {
            return marked(this.msgText);
          }
     },
     mounted(){
       this.fetchTags();
       this.$root.contentGenratorComponent = this;
     },
     methods:{
       addTagData: function(tagData,type){
            this.editMode = true;
                  this.selectedTagData = tagData;
                  this.tagactionType = type;
                 this.responseContents = [];
                 this.clearData();


                 

                  this.tagName =  this.selectedTagData.tag_name;
                  let scroller = document.querySelector("#mainScroller");
                   scroller.scrollTop = 0;
                
                 
       },
       resetForm:function(){

         this.editMode = false;
                  this.selectedTagData = [];
                  this.tagactionType = '';
                this.showtypeList = false;

       },
       addPattern:function(){
        
          this.loadingPattern = true;
       axios.post('/create-intent-pattern',{
                tag_unique_id: this.selectedTagData.tag_unique_id,
                patterns: this.patternName
                  })
          .then(response => {
             
            
            

            if(response.status == 200){

              this.loadingPattern =false;

             
              this.patternName ='';

               let returnedData = response.data;

                this.$root.fullData.map((data)=>{
                  if(data.tag_unique_id == this.selectedTagData.tag_unique_id){

                    returnedData.forEach((pattern)=>{
                   data.patterns.unshift(pattern)
                });

                  }
                })

                
              
              

               
             
            }
              
            
           
            
          })
          .catch(error => {
              console.log(error)
              this.loadingPattern = false;
          })
     

    },
    
        addTag:function(){
         if(this.tagName.length == 0) return;
      
    
          this.loadingTag = true;
       axios.post('/create-intent-tag',{
                name: this.tagName,
                bot_id: this.$route.params.botId
                  })
          .then(response => {
             
            
            

            if(response.status == 200){

              this.loadingTag =false;

              this.tagName = '';

              let newData = {
                patterns:[
                  response.data.pattern
                ],
                responses:[
                   response.data.response
                ],
                tag_name: response.data.tag.tag_name,
                tag_unique_id: response.data.tag.tag_unique_id
              };

               this.$root.fullData.unshift(newData);

               
             
            }
              
            
           
            
          })
          .catch(error => {
              console.log(error)
              this.loadingTag = false;
          })
     

    },
       addNewContentCtl:function(){
          this.showtypeList = true;
       },
       update:function(){
          
           this.contentInWord = this.compiledMarkdown;

        },
        deleteContent:function(content){

          if(this.loadingDeleteContent) return

           this.loadingDeleteContent = true;
          
             axios.post('/delete-intent-response/'+ this.selectedResponse + '/' + content.message_id)
          .then(response => {
             
            
            

            if(response.status == 200){

            
               let remainingContents = this.responseContents.filter((eachcontent)=>{
                 return eachcontent.message_id  != content.message_id
               })
                 
                 this.responseContents = remainingContents;
                this.loadingDeleteContent = false;
             
            }
              
            
           
            
          })
          .catch(error => {
             this.loadingDeleteContent = false;
              console.log(error)
            
          })

            
        },
        showContent:function(content){
              
              this.showBaseAddBtn = true;
               this.clearData();
              if(content.type == 'text'){
              
              this.responseContText = content.content;
              this.showNewText = true;



              }


               if(content.type == 'code'){
              
           
              this.showCreateCode = true;
              this.languageCode = content.code.language_type;

              this.codeContent = content.code.content;
               


              }

              if(content.type == 'audio'){
              
           
              this.audioUrl = 'http://citonhubnew.com/imgs/space/' + content.audio.audio_name + '.' + content.audio.audio_extension;

              this.audioName = content.audio.display_name;

              this.audioSize = 100;
              
               


              }

              if(content.type == 'video'){
              
           
              this.videoUrl = 'http://citonhubnew.com/imgs/space/' + content.video.video_name + '.' + content.video.video_extension;

              this.VideoBackground = '#c5c5c5';

            
              
               


              }

               if(content.type == 'file'){
              
           
              this.fileUrl = 'http://citonhubnew.com/imgs/space/' + content.file.file_name + '.' + content.file.file_extension;

              this.documentName = content.file.display_name;

              this.documentSize = '100';

            
              
               


              }

            if(content.type == 'audio'){
              
           
              this.audioUrl = 'http://citonhubnew.com/imgs/space/' + content.audio.audio_name + '.' + content.audio.audio_extension;
              
               


              }


              if(content.type == 'image'){
              
           
              let allImages = content.image;

               if(allImages.length == 1){
                  this.image1 = 'http://citonhubnew.com/imgs/space/' + allImages[0].image_name + '.' + allImages[0].image_extension;
               }

               if(allImages.length == 2){
                  this.image1 = 'http://citonhubnew.com/imgs/space/' + allImages[0].image_name + '.' + allImages[0].image_extension;
                  this.image2 = 'http://citonhubnew.com/imgs/space/' + allImages[1].image_name + '.' + allImages[1].image_extension;
               }

               if(allImages.length == 3){
                   this.image1 = 'http://citonhubnew.com/imgs/space/' + allImages[0].image_name + '.' + allImages[0].image_extension;
                  this.image2 = 'http://citonhubnew.com/imgs/space/' + allImages[1].image_name + '.' + allImages[1].image_extension;
                   this.image3 = 'http://citonhubnew.com/imgs/space/' + allImages[2].image_name + '.' + allImages[2].image_extension;
               }
               if(allImages.length == 4){
                  this.image1 = 'http://citonhubnew.com/imgs/space/' + allImages[0].image_name + '.' + allImages[0].image_extension;
                   this.image2 = 'http://citonhubnew.com/imgs/space/' + allImages[1].image_name + '.' + allImages[1].image_extension;
                   this.image3 = 'http://citonhubnew.com/imgs/space/' + allImages[2].image_name + '.' + allImages[2].image_extension;
                    this.image4 = 'http://citonhubnew.com/imgs/space/' + allImages[3].image_name + '.' + allImages[3].image_extension;
               }


              }

        },
       
       fetchTagResponses:function(tagId){
           axios.get('/fetch-intent-response-' + tagId)
          .then(response => {
             
            
            

            if(response.status == 200){

            
               this.$root.responses = response.data;

               
             
            }
              
            
           
            
          })
          .catch(error => {
              console.log(error)
            
          })
       },
       showAlert:function(duration,text){
        this.Alert = true;
        this.alertMsg = text;
        let _this = this;
     
     setTimeout(function(){
        _this.Alert = false;
     },duration);

    },
     fetchTags:function(){
      if( this.$root.tags.length == 0){

         axios.get('/get-intent-tags')
          .then(response => {
             
            
            

            if(response.status == 200){

            
               this.$root.tags = response.data.data;

               
             
            }
              
            
           
            
          })
          .catch(error => {
              console.log(error)
            
          })
        

      }


      },
      addResponse:function(){
        
          this.loading = true;
       axios.post('/create-intent-response',{
                tag_unique_id: this.selectedtag,
                title: this.responseName,
                  bot_id: this.$route.params.botId
                  })
          .then(response => {
             
 
            if(response.status == 201){

              this.loading =false;

              this.selectedtag = '';

              this.responseName ='';

              this.$root.responses.unshift(response.data)

              this.showAlert(5000,'Response created')
               
             
            }
              
            
           
            
          })
          .catch(error => {
              console.log(error)
              this.loading = false;
          })
     

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
            

          this.$router.push({ path: '/image-editor' });
          
        },
       handleInput:function(typeValue){
         this.clearData();
        
          if(typeValue == 'text'){

            this.showNewText = true;

          }

          if(typeValue == 'channel'){

            this.showAddChannel = true;

          }

          if(typeValue == 'code'){

            this.showCreateCode = true;

          }

          if(typeValue == 'people'){

            this.showAddPeople = true;

          }
       },

        sendMessage: function(){
        this.loadingSendMsg = true;

          
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
             formData.append('file_name',this.CodeFilename);
             formData.append('language_type',this.languageCode);
            
        }

         if(this.videoUrl != ''){

         
            this.attachment_type = 'video';

            formData.append('video',this.VideoBlob);
            formData.append('display_name',this.VideoName);
            
        }

         if(this.audioUrl != ''){
             
          
            this.attachment_type = 'audio';

            formData.append('audio',this.AudioBlob);
            formData.append('display_name',this.audioName);
            
        }

        if(this.fileUrl != ''){
           
            

            this.attachment_type = 'file';

            formData.append('file',this.FileBlob);
            formData.append('display_name',this.documentName);
             formData.append('file_size',this.documentSize);
            
        }

        if(this.contentInWord != ''){
           
            this.attachment_type = 'text';

            formData.append('content',this.contentInWord);
           
        }

       
           
        
        formData.append('attachment_type',this.attachment_type);
        formData.append('response_slug',this.contentData.response_slug);
        formData.append('space_id',this.contentData.response_slug);
        formData.append('bot_id',this.$route.params.botId);
      
      
       
       this.sendMessageData(formData);
    },
     sendMessageData: function(formData){

       
      
      axios.post('/create-response-content',formData,
         {
             headers:{
              'Content-Type':'multipart/form-data'
             },
             onUploadProgress: (progressEvent)=>{
               
            
                  this.progressvalue = parseInt(Math.round(
                   (progressEvent.loaded / progressEvent.total) * 100
                    ))
                
             
           }
           })
          .then(response => {

             
            
           if (response.status == 200) {
               
           
                let message = response.data.message[0];
                this.clearData();
                this.responseContents.push(message)
                this.loadingSendMsg = false;
                this.progressvalue = 0;
               
            }

           
            
          })
          .catch(error => {

            this.showAlert(5000,'Error->' + error)
           
           this.loadingSendMsg = false;
           
          })
    },
       onCmCursorActivity(codemirror) {
        console.debug('onCmCursorActivity', codemirror)
      },
        onCmReady(codemirror) {

        console.debug('onCmReady', codemirror)
      },
      onCmFocus(codemirror) {
        console.debug('onCmFocus', codemirror)
      },
      onCmBlur(codemirror) {
        console.debug('onCmBlur', codemirror)
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
            this.contentInWord = '';
            this.showCode = true;
            this.msgText = '';
             this.showAddPeople = false;
               this.showAddChannel = false;
               this.showNewText = false;
                this.showCreateCode = false;
                this.responseContText= '';
            this.showShareProject = false;

             this.showBaseAddBtn = false;

        },
         codeEditor: function(){
           this.image1 = '';
            this.image2 = '';
            this.image3 = '';
            this.image4 = '';
            this.videoUrl = '';
           
   
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
             
             const fr = new FileReader	
             fr.readAsDataURL(files[0])
				fr.addEventListener('load', () => {
          this.image1 = fr.result;
        });
        
          if(files[1]){
            const fr2 = new FileReader()
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
             const fr4 = new FileReader()
             fr4.readAsDataURL(files[3])
				fr4.addEventListener('load', () => {
          this.image4 = fr4.result;
        });
         }
        
			
       
              
          }
                   
			
        },
   bytesToSize:function(bytes) {
   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
   if (bytes == 0) return '0 Byte';
   var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
   return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
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
       replied_message:[],
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
   audiohandler:function(e){
        this.clearData();
          const files = e.target.files
            
            this.AudioBlob = files[0];
             const fr = new FileReader()
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
             const fr = new FileReader()
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
      runCode:function(){
        
       

           this.showCode = false;

            if(this.selectedLangId == 0 || this.language == 'HTML'){

              this.ResultCode = this.code; 
             

            }else{

              this.ResultCode = 'sending to sandbox...';

              this.runCodeOnSandbox();
              

            }

            


          

       
      },
      checkResponse:function(token){

        let _this = this;

      
                axios.post( '/check-for-submission',{
               token: token,
                langId: _this.selectedLangId
                  })
          .then(response => {
             
          
          if(response.status == 200){

            

            

              if(response.data[0].status.description == 'Accepted'){

                 

                  _this.ResultCode =  response.data[0].stdout;

                  
                 


              }else if(response.data[0].status.description == 'In Queue'){

                 _this.ResultCode = 'In Queue...';

                   _this.checkResponse(response.data[0].token);

              }else if(response.data[0].status.description == 'Processing'){

                 _this.ResultCode = 'Processing...';

                   _this.checkResponse(response.data[0].token);

              }else{

                 _this.ResultCode =  response.data[0].stdout +  '\n Error: \n'  + response.data[0].stderr ;

               

              }


              

      

         
             

          }

          
            
          })
          .catch(error => {

             
             
               _this.ResultCode = 'An issue occured,unable to run on sandbox...' + error;

               
             
          })


        

        

      },
      runCodeOnSandbox: function(){

          axios.post( '/run-code-on-sandbox',{
                langId: this.selectedLangId,
                code: this.codeContent,
                messageId: 0
                  })
          .then(response => {
             
          
          if(response.status == 200){

            

             let token = response.data[0].token;

        
              if(response.data[0].status.description == 'Accepted'){

                  this.ResultCode =  response.data[0].stdout ;

                
                

              }else if(response.data[0].status.description == 'In Queue'){

                 this.ResultCode = 'In Queue...';
                 this.checkResponse(token);

              }else if(response.data[0].status.description == 'Processing'){

                 this.ResultCode = 'Processing...';

                 this.checkResponse(token);

              }else{

                

                this.ResultCode =  response.data[0].stdout + '\n Error: \n' + response.data[0].stderr ;

              }

            

           
             

                

              

             

          }
            
          })
          .catch(error => {

            
             
               this.ResultCode = 'An issue occured,unable to run on sandbox...' + error;

              
              
          })

          
      },
      vidoehandler:function(e){
           this.clearData();
          const files = e.target.files
            
            this.VideoBlob = files[0];
           const fr = new FileReader ();
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
				
        },
      onCmCodeChange:function(codemirror){
       
    console.debug('onCmBlur', codemirror)
      },
       detectchange: function(languageFull){

          let language = '';
          
         if(typeof languageFull == 'object' ){
            language = languageFull.name
             this.selectedLangId =  languageFull.id
         }else{
           language = languageFull

           

            let languageArray = this.items.filter((item)=>{
      return   item.name == languageFull;
           });
       if(languageArray[0].length != 0){

          this.selectedLangId = languageArray[0].id;
       }
            
         }

        if(language == 'HTML'){
            this.cmOption.mode = 'text/html';
         }
         if(language == 'CSS'){
         this.cmOption.mode = 'text/css';
         }
          if(language == 'PYTHON(3.8.1)'){
           this.cmOption.mode = 'text/x-python';
         }

         if(language == 'PYTHON For ML(3.7.7)'){
           this.cmOption.mode = 'text/x-python';
         }

         if(language == 'PYTHON(2.7.17)'){
           this.cmOption.mode = 'text/x-python';
         }
          if(language == 'PHP'){
           this.cmOption.mode = 'text/x-php';
         }
          if(language == 'JAVASCRIPT(Node)'){
           this.cmOption.mode = 'text/javascript';
         }
          if(language == 'SQL'){
           this.cmOption.mode = 'text/x-sql';
         }
          if(language == 'C'){
           this.cmOption.mode = 'text/x-csrc';
         }
          if(language == 'C++'){
           this.cmOption.mode = 'text/x-c++src';
         }
          if(language == 'JAVA'){
           this.cmOption.mode = 'text/x-java';
         }
          if(language == 'C#'){
           this.cmOption.mode = 'text/x-csharp';
         }
          if(language == 'ERLANG'){
           this.cmOption.mode = 'text/x-erlang';
         }
          if(language == 'KOTLIN'){
           this.cmOption.mode = 'x-shader/x-fragment';
         }
          if(language == 'FOTRAN'){
           this.cmOption.mode = 'text/x-fortran';
         }
          if(language == 'PERL'){
           this.cmOption.mode = 'text/x-perl';
         }
          if(language == 'R'){
           this.cmOption.mode = 'text/x-rsrc';
         }
         if(language == 'GO'){
           this.cmOption.mode = 'text/x-go';
         }
         if(language == 'HASKELL'){
           this.cmOption.mode = 'text/x-haskell';
         }
          if(language == 'RUBY'){
           this.cmOption.mode = 'text/x-ruby';
         }
         if(language == 'LUA'){
           
            this.cmOption.mode = 'text/x-lua';

         }
         if(language == 'PASCAL'){

            this.cmOption.mode = 'text/x-pascal';
         }
         if(language == 'RUST'){

            this.cmOption.mode = 'text/x-rustsrc';
         }
         if(language == 'SCALA'){
           
             this.cmOption.mode = 'text/x-scala';

         }
         if(language == 'SWIFT'){

              this.cmOption.mode = 'text/x-swift';

         }
         if(language  == 'TYPESCRIPT'){

             this.cmOption.mode = 'text/javascript';

         }
      },
      languageExtensions: function(language){


           if(language == 'HTML'){
             return 'html';
         }
         if(language == 'CSS'){
          return 'css';
         }
          if(language == 'PYTHON(3.8.1)'){
           return 'py';
         }

         if(language == 'PYTHON For ML(3.7.7)'){
           return 'py';
         }

         if(language == 'PYTHON(2.7.17)'){
           return 'py';
         }
          if(language == 'PHP'){
            return 'php';
         }
          if(language == 'JAVASCRIPT(Node)'){
           return 'js';
         }
          if(language == 'SQL'){
            return 'sql';
         }
          if(language == 'C'){
            return 'c';
         }
          if(language == 'C++'){
           return 'cpp';
         }
          if(language == 'JAVA'){
            return 'java';
         }
          if(language == 'C#'){
           return 'cs';
         }
          if(language == 'ERLANG'){
            return 'erl';
         }
          if(language == 'KOTLIN'){
         return 'kt';
         }
          if(language == 'FOTRAN'){
          return 'for';
         }
          if(language == 'PERL'){
           return 'pl';
         }
          if(language == 'R'){
            return 'r';
         }
         if(language == 'GO'){
            return 'go';
         }
         if(language == 'HASKELL'){
           return 'hs';
         }
          if(language == 'RUBY'){
            return 'rb';
         }
         if(language == 'LUA'){
           
             return 'lua';

         }
         if(language == 'PASCAL'){

             return 'pas';
         }
         if(language == 'RUST'){

             return 'rs';
         }
         if(language == 'SCALA'){
           
              return 'scala';

         }
         if(language == 'SWIFT'){

               return 'swift';

         }
         if(language  == 'TYPESCRIPT'){

             return 'ts';

         }

      }
     }
}
</script>

<style scoped>
.codebox,
    .pre {
      width: 100%;
      margin: 0;
     
       display: block;
      font-size: 14px;
      line-height: 1.6;
      word-break: break-all;
      word-wrap: break-word;
      overflow: auto;
    }

    .codebox{
       height: 250px;
       border: 1px solid #e6e6e6;
     
        width:100%;
       
        overflow-x: hidden;
        overflow-y:hidden;
    }

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

</style>