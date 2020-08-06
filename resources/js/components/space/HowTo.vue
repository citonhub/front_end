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
           <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">How To</span>
         </div>
         <div class="col-2 py-0 my-0  d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
            
         </div>
      </div>
     </div>

      
        
        <div class="col-12 py-0 my-0">
          
          <div class="row my-0 py-0">


              <div class="col-12 py-0 my-1 text-left">
                 <span style="color:#2e626b; font-size:13px;">
                    <b style="color:#173136;"> 1</b> Navigate to a new page
                 </span> <br>

             </div>

             <div class="col-12 py-0 text-left">
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 1 -</b>  Create the new HTML file
                 </span>

                 <div style="color:#2e626b; font-size:13px;" class="text-center">
                     <img src="/imgs/howto6.png" height="50" width="100%" />
                 </div>
             </div>

             <div class="col-12 py-0 text-left" style="border-bottom:1px solid #c5c5c5;">
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step -2</b> Navigate the new page using this url
                 </span><br><br>
                  
                  

                 <code-view :codeLanguage="'HTML'" :codeContent="RouteCode1"></code-view> <br> 

                 <span style="color:#2e626b; font-size:13px;">
                     if your HTMLFileName is <b style="color:#173136;"> newPage</b><br>
                    
                 </span><br>

                  <code-view :codeLanguage="'HTML'" :codeContent="RouteCode2"></code-view> <br> 


                
             </div>


              <div class="col-12 py-0 my-1 text-left">
                 <span style="color:#2e626b; font-size:13px;">
                     <b style="color:#173136;"> 2</b>   To link a new HTML, CSS or Javascript file you created in your panel
                 </span> <br><br>

                
             </div>

              <div class="col-12 py-0 text-left">
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 1 -</b>  Make sure you created the new file in your 'View Files'
                 </span>

                  <div style="color:#2e626b; font-size:13px;" class="text-center">
                     <img src="/imgs/howto8.png" height="130" width="100%" />
                 </div>

             </div>


              <div class="col-12 py-0 text-left" style="border-bottom:1px solid #c5c5c5;"> 
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 2 -</b>Use this code to link in the new HTML,CSS or JS file.
                 </span><br><br>

                  <span style="color:#2e626b; font-size:13px;">
                        @include($panel  . '.<b style="color:#173136;">FolderName</b>.<b style="color:#173136;">FileName</b>')
                 </span><br><br>

                 <span style="color:#2e626b; font-size:13px;">
                       FolderName is the name of the folder, which can be Styles-> .css, Scripts-> .js , empty for .html <br>
                       FileName is the name of the file e.g index.html, main.css 
                 </span><br><br>

                   <span style="color:#2e626b; font-size:13px;">
                       For HTML
                 </span> <br><br>

                

                 <code-view :codeLanguage="'HTML'" :codeContent="ViewCode1"></code-view> <br>

                  <span style="color:#2e626b; font-size:13px;">
                       For CSS
                 </span> <br><br>

                

                 <code-view :codeLanguage="'HTML'" :codeContent="ViewCode2"></code-view> <br>

                  <span style="color:#2e626b; font-size:13px;">
                       For JavaScript
                 </span> <br><br>

                

                 <code-view :codeLanguage="'HTML'" :codeContent="ViewCode3"></code-view> <br>
             </div>


             

              
              <div class="col-12 py-0 my-1 text-left">
                 <span style="color:#2e626b; font-size:13px;">
                     <b style="color:#173136;"> 2</b>   To attach an image, video, or use a CSS or JS file in code is very easy.
                 </span> <br><br>

                  
             </div>

             <div class="col-12 py-0 text-left">
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 1 -</b>  Upload your file to resources.
                 </span>
             </div>

              <div class="col-12 py-0 text-left"> 
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 2 -</b> To use the file in your codes call.
                 </span><br><br>

                  
                 <code-view :codeLanguage="'HTML'" :codeContent="resourcesCode"></code-view> <br>
                 <span style="color:#2e626b; font-size:13px;">
                      FolderName is the name of the folder in your resoures, e.g  Images, Videos, Audios, Framework. <br>
                     FileName is the name of the file e.g video.mp4
                 </span><br>

                

               
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
      this.resourcesCode = "{{$home}}/{{$panel}}/FolderName/FileName \n\
// e.g {{$home}}/{{$panel}}/Videos/video.mp4";

this.ViewCode1 = "@include($panel  . '.index') to include index.html file" ;

this.ViewCode2 = "@include($panel  . '.Styles.index') to include index.css file " ;


this.ViewCode3 = "@include($panel  . '.Scripts.index') to include index.js file" ;

this.RouteCode1 = " /page-loader/{{ $panel }}/HTMLFileName";

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