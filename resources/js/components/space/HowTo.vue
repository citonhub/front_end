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
             <div class="col-12 py-0 text-center">
               <span class="headingText" style="color:gray;">
                  Panel Language: PHP<br>
                  <span>This panel uses the Model View Controller Model (MVC)</span>
               </span>
             </div>

              <div class="col-12 py-0 text-center">
               <span class="headingTextBolder">
                  Front-end
               </span>
             </div>

              <div class="col-12 py-0 my-1 text-left">
               <span class="headingText">
                 To include new files in your HTML use @include(fileId.fileType.fileName)...<br>

                 <ul>
                     <li><b class="headingTextBolder">fileId</b> is a 9-digit unique to your project, it is usually given in the index.html file</li>
                      <li> <b class="headingTextBolder">fileType</b> can be 'styles' for css files, 'scripts' for Javascript or Typescript or empty for HTML files</li>
                     <li><b class="headingTextBolder">fileName</b> is the name of the file as shown in the panel</li>
                 </ul>

                  <span>To include a new HTML file with name about.html, <b class="headingTextBolder">fileId</b> = '983456792'</span>
                  <code-view :codeLanguage="'HTML'" :codeContent="'@include(\'983456792.about\')'"></code-view>  <br> <br>


                  <span>To include a new CSS file with name about.css, <b class="headingTextBolder">fileId</b> = '983456792'</span>
                  <code-view :codeLanguage="'HTML'" :codeContent="'@include(\'983456792.styles.about\')'"></code-view> <br> <br>

                   <span>To include a new JS/TS file with name about.js, <b class="headingTextBolder">fileId</b> = '983456792'</span>
                  <code-view :codeLanguage="'HTML'" :codeContent="'@include(\'983456792.scripts.about\')'"></code-view> <br> <br>

               </span>
             </div>

             <div class="col-12 py-0 text-center">
               <span class="headingTextBolder">
                 Back-end
               </span>
             </div>


              <div class="col-12 py-0 my-1 text-left">
               <span class="headingText">
                 To create new  public function;

                  
                  <code-view :codeLanguage="'PHP'" :codeContent="'public function functionName(){}'"></code-view> <br> <br>
               </span>
             </div>

             <div class="col-12 py-0 my-1 text-left">
               <span class="headingText">
                 To show a new view call the Public method showView(fileName);

                  <span>For example, to  the  about.html view file, </span>
                  <code-view :codeLanguage="'PHP'" :codeContent="'$this->showView(\'about\')'"></code-view> <br> <br>
               </span>
             </div>


             


             <div class="col-12 py-0 text-center">
               <span class="headingTextBolder">
                  Routes (Navigation)
               </span>
             </div>

              <div class="col-12 py-0 my-1 text-left">
               <span class="headingText">
                 Routes can be POST or GET. <br>You need to add a new route in your panel to make it work.<br>
                
                  <span>To call a GET route with name '/index', calling the a function in the index.php file, <b class="headingTextBolder">fileId</b> = '983456792'</span>
                  <code-view :codeLanguage="'HTML'" :codeContent="'/983456792/index'"></code-view>  <br> <br>
                

               </span>
             </div>


              <div class="col-12 py-0 text-center">
               <span class="headingTextBolder">
                 Database
               </span>
             </div>

             <div class="col-12 py-0 my-1 text-left">
               <span class="headingText">
                   Create a new Database table in your project panel.<br>
                 To save data into your Database table e.g users , use the public function $this->SaveData($tableName,$dataArray);
       
                  <code-view :codeLanguage="'PHP'" :codeContent="'$this->SaveData(\'users\',$dataArray);'"></code-view> <br> <br>
               </span>
             </div>

              <div class="col-12 py-0 my-1 text-left">
               <span class="headingText">
                 
                 To get data from your Database table e.g users , use the public function $this->getAllData($tableName);
       
                  <code-view :codeLanguage="'PHP'" :codeContent="'$this->getAllData(\'user\')'"></code-view> <br> <br>
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
          
        }
    },
     components: {
   
  },
    mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = true;
       
    },
    methods:{
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