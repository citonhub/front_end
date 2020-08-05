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
                        To attach an image, video, or use a CSS or JS in code is very easy.
                 </span> <br>

                  
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

                 <code-view :codeLanguage="'PHP'" :codeContent="resourcesCode"></code-view> <br> <br>
             </div>


             <div class="col-12 py-0 my-1 text-left">
                 <span style="color:#2e626b; font-size:13px;">
                        To link in new HTML, CSS and Javascript files created in your panel
                 </span> <br>

             </div>

              <div class="col-12 py-0 text-left">
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 1 -</b>  Make sure you created the new file in your 'View Files'
                 </span>
             </div>

             <div class="col-12 py-0 text-left"> 
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 2 -</b> Use this code to link in the new HTML,CSS or JS file.
                 </span><br><br>

                 <code-view :codeLanguage="'PHP'" :codeContent="ViewCode"></code-view> <br> <br>
             </div>


               <div class="col-12 py-0 my-1 text-left">
                 <span style="color:#2e626b; font-size:13px;">
                        To create multiple pages
                 </span> <br>

             </div>

             <div class="col-12 py-0 text-left">
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 1 -</b>  Create a new route e.g '/about' in the 'Web Routes panel'
                 </span>
             </div>

             <div class="col-12 py-0 text-left">
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 2 -</b>  Add this line of code to your controller file
                 </span><br><br>

                 <code-view :codeLanguage="'PHP'" :codeContent="ControllerCode"></code-view> <br> <br>
             </div>

             <div class="col-12 py-0 text-left">
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 3-</b> The URL of your new route is
                 </span><br><br>

                 <code-view :codeLanguage="'HTML'" :codeContent="RouteCode"></code-view> <br> <br>
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
          ViewCode:'',
          ControllerCode:'',
          RouteCode:'',
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
// FolderName is the name of the folder your resoures, e.g  Images, Videos, Audios, Framework \n\
// FileName is the name of the file e.g video.mp4 \n\
// e.g {{$home}}/{{$panel}}/Videos/video.mp4";

this.ViewCode = "@include($panel  . '.FolderName.FileName') \n\
// FolderName is the name of the folder, which can be Styles-> .css, Scripts-> .js , empty for .html \n\
// FileName is the name of the file e.g index.html, main.css \n\
// e.g @include($panel  . '.Styles.index') to include index.css file \n\
// @include($panel  . '.Scripts.index') to include index.js file\n\
// @include($panel  . '.index') to include index.html file" ;

this.ControllerCode = "<?php \n\
public function FileName(){ \n\
  return $this->showView('FileName'); \n\
} \n\
// FileName is the name of the file e.g about.html \n\
// Note: only .html files can be called in the web routes \n\
// e.g to call the about.html page\n\
/**public function about(){ \n\
  return $this->showView('about'); \n\
}*/" ;
this.RouteCode = " /page-loader/{{ $panel }}/routeName \n\
// routeName is the name of the route e.g /about \n\
// e.g  \n\
 <a href=\"/page-loader/{{$panel }}/about\"></a> ";
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