<template>
     <v-app style="background:transparent; font-family:BodyText;">
        <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">

        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-2 py-0 my-0 text-left px-1" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-8 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
           <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">Frequently Asked Questions</span>
         </div>
         <div class="col-2 py-0 my-0  d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
            
         </div>
      </div>
     </div>

      
        
        <div class="col-12 py-0 my-0">
          
          <div class="row my-0 py-0">



               <div class="col-12 py-0 my-1 text-left">
                 <span style="color:#2e626b; font-size:13px;">
                    <b style="color:#173136;"> 1.</b> How do I link a new HTML, CSS or JavaScript file to my code Editor?
                 </span> <br><br>

             </div>

             <div class="col-12 py-0 text-left">
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 1-</b>  Click on the + icon in view files and add a new file.
                 </span>

                 <div style="color:#2e626b; font-size:13px;" class="text-center">
                     <img src="/imgs/howto6.png" height="50" width="100%" />
                 </div>
             </div>


              <div class="col-12 py-0 text-left" >
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 2-</b> Click on the new file and type/paste your code. Save it.
                 </span>

             </div>

               <div class="col-12 py-0 text-left" style="border-bottom:1px solid #c5c5c5;"> 
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 3-</b> Go back to your Index code editor.  Copy and paste this URL to your code editor.
                 </span><br><br>

                  <span style="color:#2e626b; font-size:13px;">
                        @include($panel  . '.<b style="color:#173136;">FOLDERNAME</b>.<b style="color:#173136;">FILENAME</b>')
                 </span><br><br>

                 <span style="color:#2e626b; font-size:13px;" >
                       FOLDERNAME is the name of the folder, which can be Styles for .css, Scripts for .js , empty for .html <br>
                       FILENAME is the name of the file e.g index.html, main.css 
                 </span><br><br>

                   <span style="color:#2e626b; font-size:13px;">
                       For HTML
                 </span> <br>

                

                 <code-view :codeLanguage="'HTML'" :codeContent="ViewCode1"></code-view> <br>

                  <span style="color:#2e626b; font-size:13px;">
                       For CSS
                 </span> <br>

                

                 <code-view :codeLanguage="'HTML'" :codeContent="ViewCode2"></code-view> <br>

                  <span style="color:#2e626b; font-size:13px;">
                       For JavaScript
                 </span> <br>

                

                 <code-view :codeLanguage="'HTML'" :codeContent="ViewCode3"></code-view> <br>
             </div>

              

               <div class="col-12 py-0 my-1 text-left">
                 <span style="color:#2e626b; font-size:13px;">
                    <b style="color:#173136;"> 2.</b> I have my code files on my computer/phone how do I link it in my code?
                 </span> <br><br>

             </div>

             <div class="col-12 py-0 text-left">
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 1-</b>  Upload your code to files in resources(Framework).
                 </span>

             </div>

             <div class="col-12 py-0 text-left" >
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 2-</b> Copy this URL and paste it where you need it in your code.
                 </span><br><br>
                  
                  

                 <code-view :codeLanguage="'HTML'" :codeContent="resourcesCodeNew"></code-view> <br> 

        

                
             </div>

              <div class="col-12 py-0 text-left" style="border-bottom:1px solid #c5c5c5;">
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 3-</b>  Change FILENAME to what you named your code file.
                 </span>

             </div>







              <div class="col-12 py-0 my-1 text-left">
                 <span style="color:#2e626b; font-size:13px;">
                    <b style="color:#173136;">3.</b> How do I navigate to a new page?
                 </span> <br>

             </div>

             <div class="col-12 py-0 text-left">
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 1-</b>  First, you have to create a new HTML file in your View files.
                 </span>

                 <div style="color:#2e626b; font-size:13px;" class="text-center">
                     <img src="/imgs/howto8.png" height="150" width="100%" />
                 </div>
             </div>

             <div class="col-12 py-0 text-left" >
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 2-</b> Copy and paste this URL where you need it in the code editor.
                 </span><br><br>
                  
                  

                 <code-view :codeLanguage="'HTML'" :codeContent="RouteCode1"></code-view> <br> <br>

                  <code-view :codeLanguage="'HTML'" :codeContent="RouteCode2"></code-view> <br> 

            
                
             </div>

             <div class="col-12 py-0 text-left" style="border-bottom:1px solid #c5c5c5;">
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 3-</b>  Change HTMLFILENAME to the name of the file you uploaded. Easy right?
                 </span>

             </div>




              <div class="col-12 py-0 my-1 text-left">
                 <span style="color:#2e626b; font-size:13px;">
                     <b style="color:#173136;"> 4.</b>  How do I include videos/images/audios/documents to my code?    
                 </span> <br><br>

                
             </div>


              <div class="col-12 py-0 text-left">
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 1-</b> Upload your file to resources
                 </span>

             </div>

              <div class="col-12 py-0 text-left">
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 2-</b> Copy this URL and paste it where you need it.
                 </span>

                 <span style="color:#2e626b; font-size:13px;">
                       For Videos
                 </span> <br>

             <code-view :codeLanguage="'HTML'" :codeContent="resourcesVideos"></code-view> <br>

               <span style="color:#2e626b; font-size:13px;">
                       For Images
                 </span> <br>

             <code-view :codeLanguage="'HTML'" :codeContent="resourcesImages"></code-view> <br>

               <span style="color:#2e626b; font-size:13px;">
                       For Audios
                 </span> <br>

             <code-view :codeLanguage="'HTML'" :codeContent="resourcesAudios"></code-view> <br>

               <span style="color:#2e626b; font-size:13px;">
                       For Files/Documents
                 </span> <br>

             <code-view :codeLanguage="'HTML'" :codeContent="resourcesFiles"></code-view> <br>

             </div>

              


           <div class="col-12 py-0 text-left" style="border-bottom:1px solid #c5c5c5;">
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 3-</b>  Change FILENAME to the name of the file you uploaded.
                 </span>

             </div>

             


             

              
             
              <div class="col-12 py-0 my-1 text-left">
                 <span style="color:#2e626b; font-size:13px;">
                     <b style="color:#173136;"> 5.</b> Why is the API in my code not working?
                 </span> <br><br>

                  
             </div>

             <div class="col-12 py-0 text-left"  style="border-bottom:1px solid #c5c5c5;">
                <span style="color:#2e626b; font-size:13px;">
                      Make sure the API URL is served through HTTPS request.
                 </span>
             </div>



              <div class="col-12 py-0 my-1 text-left">
                 <span style="color:#2e626b; font-size:13px;">
                     <b style="color:#173136;"> 6.</b> How can I get my Project URL?
                 </span> <br><br>

                  
             </div>

             <div class="col-12 py-0 text-left"  style="border-bottom:1px solid #c5c5c5;">
                <span style="color:#2e626b; font-size:13px;">
                      Click on the beeping icon <v-icon color="#3E8893">mdi-launch mdi-18px</v-icon> in the page loader
                 </span>
             </div>


            
             


             
             


            



             <div class="col-12 py-5 my-5">

             </div>

          </div>
           
        </div>
        
              
  


      
         </div>
        </div>
     </v-app>
</template>
<script>



export default {
    data(){
        return{
          resourcesCode:'',
          ViewCode1:'',
          ViewCode2:'',
          ViewCode3:'',
          ControllerCode:'',
          RouteCode1:'',
            RouteCode2:'',
            resourcesCodeNew:'',
         resourcesVideos:'',
         resourcesAudios:'',
         resourcesFiles:'',
         resourcesImages:'',

        }
    },
     components: {
   
  },
    mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = false;
       this.loadDefaultCode();
       
    },
    methods:{
      loadDefaultCode(){
      this.resourcesCode = "{{$home}}/{{$panel}}/FOLDERNAME/FILENAME \n\
<!-- e.g {{$home}}/{{$panel}}/Videos/video.mp4 -->";

this.resourcesCodeNew = "{{$home}}/{{$panel}}/Framework/FILENAME \n\
<!-- e.g {{$home}}/{{$panel}}/Framework/main.js -->";

this.resourcesVideos = "{{$home}}/{{$panel}}/Videos/FILENAME \n\
<!-- e.g {{$home}}/{{$panel}}/Videos/sample_video.mp4 -->";

this.resourcesAudios = "{{$home}}/{{$panel}}/Audio/FILENAME \n\
<!-- e.g {{$home}}/{{$panel}}/Audios/sample_audio.mp3 -->";

this.resourcesFiles = "{{$home}}/{{$panel}}/Files/FILENAME \n\
<!-- e.g {{$home}}/{{$panel}}/Files/sample_file.pdf -->";

this.resourcesImages = "{{$home}}/{{$panel}}/Images/FILENAME \n\
<!-- e.g {{$home}}/{{$panel}}/Images/sample_image.png -->";

this.ViewCode1 = "@include($panel  . '.index') <!-- to include index.html file -->" ;

this.ViewCode2 = "@include($panel  . '.Styles.index') <!-- to include index.css file --> " ;


this.ViewCode3 = "@include($panel  . '.Scripts.index') <!-- to include index.js file -->" ;

this.RouteCode1 = " /page-loader/{{ $panel }}/HTMLFILENAME";

 this.RouteCode2 = " e.g  \n\
 <a href=\"/page-loader/{{$panel}}/newPage\"></a> ";
      },
       goBack() {

          
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        crophandler:function(){

        },
    
      
  },
}
</script>
<style>
.editor-style> * {
    border-bottom:1px solid #4495a2;
    height: auto;
    line-height: 4px;
    padding: 5px 2px;
    font-size: 12px;
    color: #262626;
}

.headingText{
    color: #2e2d2d;
    font-size:13px;
}

.headingTextBolder{
   color: #262626;
    font-size:13px;
    font-family: HeaderText;
    font-weight: bolder;  
}

.is-active{
    border-color: #dbedf0;
    border-style: solid;
    border-width: 1px;
}
 /* *:focus {
    outline: none;
}  */

.preview{
   border: solid 3px #3E8893;
   height:200px;
   width:200px;
}
</style>