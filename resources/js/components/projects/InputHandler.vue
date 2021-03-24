<template>
    
    <div @click.stop="preventDefault">
    <v-card class="col-lg-4 offset-lg-4   py-2 d-flex flex-column col-md-8 offset-md-2 application application--light"  data-app="true" >

         
      <div class="d-flex flex-row px-1 py-2" style="border-bottom:1px solid #c5c5c5; border-radius:0px; align-items:center;">

             <div style="font-family:HeaderFont;font-size:14px;">This program needs input</div>

                <v-btn small icon color="#ffffff" @click="closeModal" style="background:#3C87CD;" 
           class="ml-auto "><v-icon>mdi-close mdi-18px</v-icon></v-btn>


        </div>
     

      <div v-for="(input,index) in that.$root.projectInputData" :key="index"> 

            <div style="font-size:13px;font-family:MediumFont;" class="mt-2">{{input.name}}</div>
              <v-text-field
                style="font-size:13px;"
                autofocus
              v-model="input.value"
             dense
             outlined
             color="#3C87CD"
            
             ></v-text-field>

      </div>
       

       <div class="col-12 text-center pb-2 py-0">
        <v-btn small @click="SendToSandBox" color="#3C87CD" style="color:white;font-family:BodyFont;font-size:11px;" class="mx-2 " >Send</v-btn>
      </div>
  

    </v-card>
   
    </div>
</template>
<script>
export default {
     data(){
      
        return{
         
        
          that:this,
        
        }
    },
    methods:{
        closeModal: function(){
       this.$root.showProjectInput = false;
        },
          preventDefault:function(){

       },
       SendToSandBox:function(){

          
            let codeContent = '';

            
            if(this.$router.currentRoute.path.indexOf('channel') >= 0){

               codeContent = this.$root.codeboxComponent.code;
            }

            if(this.$router.currentRoute.path.indexOf('panel-loader') >= 0){

               codeContent =  this.$root.projectData.project_files.code_files[0].content;
            }


            if(this.$router.currentRoute.path.indexOf('challenges') >= 0){

               codeContent =  this.$root.panelLoaderProject.participantSelected.main_file_content;
            }
               

                 if(this.$router.currentRoute.path.indexOf('hub') >= 0){

               codeContent =  this.$root.selectedPost.project.project_files.code_files[0].content;
            }

            

            

              let finalContent = '';

             this.$root.projectInputData.forEach((input)=>{

               if(this.$root.selectedLanguageId  == '39' || this.$root.selectedLanguageId  == '100' || this.$root.selectedLanguageId  == '38'){

                  let inputText = "input\\(\\'" + input.name + "\\'\\)";

               let inputText2 = 'input\\(\\"' + input.name + '\\"\\)';



              

              let inputRegex = new RegExp(inputText,'g');

               let inputRegex2 = new RegExp(inputText2,'g');

              

              
              finalContent =  codeContent.replace(inputRegex, "\"" + input.value + "\"");  

              finalContent =  finalContent.replace(inputRegex2,"\"" + input.value + "\"");  

              codeContent = finalContent;
             

               }
                    

              if(this.$root.selectedLanguageId  == '11' ){

                  var inputText = "cin >> " + input.name + ';';

                 var _ = require('regexgen.js');
                   var regex = _(
                  _.capture(inputText)
                         );

                  

               finalContent =  codeContent.replace(regex,input.name + ' = ' +  input.value + ';');  

               

                 codeContent = finalContent;

              }
                     
             

             })

            

         
          if(this.$router.currentRoute.path.indexOf('channel') >= 0){

           this.$root.codeboxComponent.runCodeOnSandbox(finalContent)
              this.$root.codeboxComponent.ResultCode = 'sending to sandbox...';
            }

            if(this.$router.currentRoute.path.indexOf('panel-loader') >= 0){

              
           this.$root.panelLoaderProject.runCodeOnSandbox(finalContent)
              this.$root.panelLoaderProject.pageContent = 'sending to sandbox...';
            }

             if(this.$router.currentRoute.path.indexOf('challenges') >= 0){

             this.$root.panelLoaderProject.runCodeOnSandbox(finalContent)
              this.$root.panelLoaderProject.pageContent = 'sending to sandbox...';
              
            }

             if(this.$router.currentRoute.path.indexOf('hub') >= 0){

             this.$root.projectViewComponent.runCodeOnSandbox(finalContent)
             this.$root.projectViewComponent.pageContent = 'sending to sandbox...';
              
            }
        



           this.closeModal();


       }
          
    }
}
</script>
<style scoped>

</style>