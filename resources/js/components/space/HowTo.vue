<template>
     <v-app style="background:transparent; font-family:BodyText;">
        <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0 scrollerStyleNew" style="position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">

        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-2 py-0 my-0 text-left px-1" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-4 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
           <span @click="showTab('front-end')"  :style="docType == 'front-end'  ? 'color:#ffffff;background:#4495a2; border-radius:10px; font-size:11px; cursor:pointer;' : 'color:#1f4047; cursor:pointer; background:#b8d8e0;  border-radius:10px;  font-size:11px;' "
              class="px-2 py-1"
            >Front-end</span>
         </div>
         <div class="col-4 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
           <span  @click="showTab('back-end')" :style="docType == 'back-end'  ? 'color:#ffffff;background:#4495a2; border-radius:10px; font-size:11px; cursor:pointer;' : ' color:#1f4047; background:#b8d8e0; cursor:pointer; border-radius:10px;  font-size:11px;' "
              class="px-2 py-1"
            >Back-end</span>
         </div>
         <div class="col-2 py-0 my-0  d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
            
         </div>
      </div>
     </div>

      
        
        <div class="col-12 py-0 my-0">
          
          <div class="row my-0 py-0" v-if="docType == 'front-end'">


             <div class="col-12 py-0 my-1 text-left">
                 <span style=" font-size:13px;">
                    <b style="color:#173236; font-family:HeaderText; font-weight:bolder;">1. How do I create a new HTML, CSS or JavaScript file to my Code Editor? </b> 
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


              <div class="col-12 py-0 text-left" style="border-bottom:1px solid #c5c5c5;" >
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 2-</b> Click on the new file and type/paste your code. Save it.
                 </span>

             </div>



               <div class="col-12 py-0 my-1 text-left">
                 <span style="color:#2e626b; font-size:13px;">
                    <b style="color:#173236; font-family:HeaderText; font-weight:bolder;" > 2. How do I link a new HTML, CSS or JavaScript  file into an HTML file in my Code Editor?</b> 
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
                      <b style="color:#173136;">Step 3-</b> Copy and paste the code below in your HTML , to use the file.
                 </span><br><br>

                 
                 

                   <span style="color:#2e626b; font-size:13px;">
                       For HTML
                 </span> <br>

                

                 <code-view :codeLanguage="'PHP'" :codeContent="ViewCode1"></code-view> <br>

                  <span style="color:#2e626b; font-size:13px;">
                       For CSS
                 </span> <br>

                

                 <code-view :codeLanguage="'PHP'" :codeContent="ViewCode2"></code-view> <br>

                  <span style="color:#2e626b; font-size:13px;">
                       For JavaScript
                 </span> <br>

                

                 <code-view :codeLanguage="'PHP'" :codeContent="ViewCode3"></code-view> <br>

                 <span style="color:#2e626b; font-size:13px;" >
                    
                       FILENAME is the name of the file e.g index for index.html
                 </span><br>
             </div>

              

               <div class="col-12 py-0 my-1 text-left">
                 <span style="color:#2e626b; font-size:13px;">
                    <b style="color:#173236; font-family:HeaderText; font-weight:bolder;"> 3. I have my code files on my computer/phone how do I link it in my code?</b> 
                 </span> <br><br>

             </div>

             <div class="col-12 py-0 text-left">
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 1-</b>  Upload your files into Framework in your panel resources.
                 </span>

             </div>

             <div class="col-12 py-0 text-left" >
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 2-</b> Copy this URL and paste it where you need it in your code.
                 </span><br><br>
                  
                  

                 <code-view :codeLanguage="'PHP'" :codeContent="resourcesCodeNew"></code-view> <br> 

        

                
             </div>

              <div class="col-12 py-0 text-left" style="border-bottom:1px solid #c5c5c5;">
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 3-</b>  Change FILENAME to what you named your code file.
                 </span>

             </div>







              <div class="col-12 py-0 my-1 text-left">
                 <span style="color:#2e626b; font-size:13px;">
                    <b style="color:#173236; font-family:HeaderText; font-weight:bolder;">4. How do I navigate to a new page? </b> 
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
                  
                  

                 <code-view :codeLanguage="'PHP'" :codeContent="RouteCode1"></code-view> <br> <br>

                  <code-view :codeLanguage="'HTML'" :codeContent="RouteCode2"></code-view> <br> 

            
                
             </div>

             <div class="col-12 py-0 text-left" style="border-bottom:1px solid #c5c5c5;">
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 3-</b>  Change HTMLFILENAME to the name of the file you uploaded. Easy right?
                 </span>

             </div>




              <div class="col-12 py-0 my-1 text-left">
                 <span style="color:#2e626b; font-size:13px;">
                     <b style="color:#173236; font-family:HeaderText; font-weight:bolder;"> 5. How do I include videos/images/audios/documents to my code? </b>  
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

             <code-view :codeLanguage="'PHP'" :codeContent="resourcesVideos"></code-view> <br>

               <span style="color:#2e626b; font-size:13px;">
                       For Images
                 </span> <br>

             <code-view :codeLanguage="'PHP'" :codeContent="resourcesImages"></code-view> <br>

               <span style="color:#2e626b; font-size:13px;">
                       For Audios
                 </span> <br>

             <code-view :codeLanguage="'PHP'" :codeContent="resourcesAudios"></code-view> <br>

               <span style="color:#2e626b; font-size:13px;">
                       For Files/Documents
                 </span> <br>

             <code-view :codeLanguage="'PHP'" :codeContent="resourcesFiles"></code-view> <br>

             </div>

              


           <div class="col-12 py-0 text-left" style="border-bottom:1px solid #c5c5c5;">
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 3-</b>  Change FILENAME to the name of the file you uploaded.
                 </span>

             </div>

             


             

              
             
              <div class="col-12 py-0 my-1 text-left">
                 <span style="color:#2e626b; font-size:13px;">
                     <b style="color:#173236; font-family:HeaderText; font-weight:bolder;"> 6. Why is the API in my code not working? </b>
                 </span> <br><br>

                  
             </div>

             <div class="col-12 py-0 text-left"  style="border-bottom:1px solid #c5c5c5;">
                <span style="color:#2e626b; font-size:13px;">
                      Make sure the API URL is served through HTTPS request.
                 </span>
             </div>



              <div class="col-12 py-0 my-1 text-left">
                 <span style="color:#2e626b; font-size:13px;">
                     <b style="color:#173236; font-family:HeaderText; font-weight:bolder;" > 7. How can I get my Project URL? </b>
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

          <div class="row my-0 py-0" v-if="docType == 'back-end'">


             <div class="col-12 py-0 my-1 text-left">
                 <span style=" font-size:13px;">
                    <b style="color:#173236; font-family:HeaderText; font-weight:bolder;">1. How do I return a View file in my controller file? </b> 
                 </span> <br><br>

             </div>

             <div class="col-12 py-0 text-left">
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 1-</b> Copy and paste the code below
                 </span>

              <code-view :codeLanguage="'PHP'" :codeContent="showViewPHP"></code-view> <br>
   
             </div>


              <div class="col-12 py-0 text-left" style="border-bottom:1px solid #c5c5c5;" >
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 2-</b> Change FILENAME to the view file name .
                 </span>

             </div>


          <div class="col-12 py-0 my-1 text-left">
                 <span style=" font-size:13px;">
                    <b style="color:#173236; font-family:HeaderText; font-weight:bolder;">2. How do I return a View file with data attached ? </b> 
                 </span> <br><br>

             </div>

             <div class="col-12 py-0 text-left">
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 1-</b> Copy and paste the code below
                 </span>

              <code-view :codeLanguage="'PHP'" :codeContent="showViewDataPHP"></code-view> <br>
   
             </div>


              <div class="col-12 py-0 text-left" >
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 2-</b> Change FILENAME to the view file name, and $data to the your data variable name .
                 </span>

             </div>

              <div class="col-12 py-0 text-left" style="border-bottom:1px solid #c5c5c5;" >
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 3-</b> Use attached data in your view file using a curly bracket.
                 </span><br>

                  <code-view :codeLanguage="'PHP'" :codeContent="accessData"></code-view> <br><br>

                 <span style="color:#2e626b; font-size:13px;">
                    To know more on how to use attached data in your view read <a href="https://laravel.com/docs/7.x/blade" target="_blank">Laravel Blade Template Documentation</a>
                 </span><br>
                   



             </div>

             <div class="col-12 py-0 my-1 text-left">
                 <span style=" font-size:13px;">
                    <b style="color:#173236; font-family:HeaderText; font-weight:bolder;">3. How do I create a new Database table? </b> 
                 </span> <br><br>

             </div>

              <div class="col-12 py-0 text-left">
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 1-</b> Use the code below to create a new database
                 </span>

               <code-view :codeLanguage="'PHP'" :codeContent="createDB"></code-view> <br>
   
             </div>

           <div class="col-12 py-0 text-left" style="border-bottom:1px solid #c5c5c5;">
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 2-</b> Change TABLE_NAME to the name of your new table e.g users<br>
                      Define your table fields and datatype of the fields in  <b style="color:#173136; font-weight:bold;">$tableFields</b> which takes in the table field name and the corresponding 
                      data type.                         
                 </span><br>

             


             </div>



             <div class="col-12 py-0 my-1 text-left">
                 <span style=" font-size:13px;">
                    <b style="color:#173236; font-family:HeaderText; font-weight:bolder;">4. How do I save data in my database? </b> 
                 </span> <br><br>

             </div>

            


              <div class="col-12 py-0 text-left" >
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 1-</b> Add a new POST route to send request data to your controller file.
                 </span>

                    <div style="color:#2e626b; font-size:13px;" class="text-center">
                     <img src="/imgs/post_data.png" height="140" width="100%" />
                 </div>

             </div>


              <div class="col-12 py-0 text-left" >
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 2-</b> Use this code to save the data to your database
                 </span><br>

                  <code-view :codeLanguage="'PHP'" :codeContent="saveDataCodePHP"></code-view> <br>

              


             </div>
             
              <div class="col-12 py-0 text-left" style="border-bottom:1px solid #c5c5c5;" >
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 5-</b> Change METHOD_NAME to the method/function name that handle the request.<br>
                       Change TABLE_NAME to the name of your database table<br>
                       Change <b style="color:#173136; font-weight:bold;">field_name</b> to the name of your database field e.g phone, email<br>
                       And <b style="color:#173136; font-weight:bold;">data_name</b> to the name of request data returned <br><br>



                 </span><br>

                   <span style="color:#2e626b; font-size:13px;">
                    To know more on how to work with data requests read <a href="https://laravel.com/docs/7.x/requests" target="_blank">Laravel Requests Documentation</a>
                 </span><br>

             </div>

             <div class="col-12 py-0 my-1 text-left">
                 <span style=" font-size:13px;">
                    <b style="color:#173236; font-family:HeaderText; font-weight:bolder;">5. How do I get data from my database? </b> 
                 </span> <br><br>

             </div>

             <div class="col-12 py-0 text-left">
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 1-</b> Use the code below
                 </span>

               <code-view :codeLanguage="'PHP'" :codeContent="getDataCodePHP"></code-view> <br>
   
             </div>

             <div class="col-12 py-0 text-left" style="border-bottom:1px solid #c5c5c5;" >
                <span style="color:#2e626b; font-size:13px;">
                      <b style="color:#173136;">Step 5-</b> Change METHOD_NAME to the method/function name that handle the request.<br>
                      TABLE_NAME to the name of your database table
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
         docType:'front-end',
         resourcesImages:'',
         showViewDataPHP:'',
      showViewPHP:'',
      accessData:'',
      saveDataCodePHP:'',
      getDataCodePHP:'',
      createDB:''
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
      showTab:function(type){
      this.docType = type;
      },
      loadDefaultCode(){
        this.accessData = "{{$data}}";
      this.resourcesCode = "{{$home}}/{{$panel}}/FOLDERNAME/FILENAME";

      this.showViewPHP = " public function FILENAME(){ \n " +
"return $this->showView('FILENAME'); \n " +
 "}";

 this.showViewDataPHP = " public function FILENAME(){ \n " +
"return $this->showViewWithData('FILENAME','data'); \n " +
 "}";

  this.saveDataCodePHP = " public function METHOD_NAME(Request $request){ \n " +
  "  $requestData = [   \n " +
 " \"field_name\"=> '$request->input('data_name')',  \n " +
" \"field_name\"=> '$request->input('data_name')'  \n " +
  " ...  \n " +
  " ];  \n " +
"  $this->SaveData('TABLE_NAME',$requestData); \n " +
 "}";

 this.getDataCodePHP = " public function METHOD_NAME(){ \n " +
"  $this->getAllData('TABLE_NAME'); \n " +
 "}";

  this.createDB =
  " $tableFields = [ \n " +
  " [                                 \n " +
  "  \"name\" => 'name' e.g phone_number,              \n " +
  "  \"data_type\"=> 'data_type' e.g int, boolean, char  ,            \n " +
  " ],                     \n " +
"...." +
 "  ] ; \n " +
    
  " $this->CreateDB('TABLE_NAME',$tableFields); \n "

this.resourcesCodeNew = "{{$home}}/{{$panel}}/Framework/FILENAME";

this.resourcesVideos = "{{$home}}/{{$panel}}/Videos/FILENAME ";

this.resourcesAudios = "{{$home}}/{{$panel}}/Audio/FILENAME";

this.resourcesFiles = "{{$home}}/{{$panel}}/Files/FILENAME";

this.resourcesImages = "{{$home}}/{{$panel}}/Images/FILENAME";

this.ViewCode1 = "@include($panel  . '.FILENAME')" ;

this.ViewCode2 = "@include($panel  . '.Styles.FILENAME')" ;


this.ViewCode3 = "@include($panel  . '.Scripts.FILENAME')" ;

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