<template>
<v-app style="background:transparent; font-family:BodyFont;padding-top:20px;">
 
   <div class="col-12 mt-5 mt-md-1 ml-lg-4">
    <h6>Add Code File</h6>
   </div>

    <div class="col-md-8 col-lg-4 offset-lg-4 offset-md-2 text-center py-1">
    	
    		<v-form class="row my-2 py-2 px-2"  ref="form" v-model="formstate">
    			<div class="col-12 py-2 my-0 px-2">
    				<v-text-field style="font-size:13px;" :rules="Rule"
                 v-model="FileName"
                 counter="30" dense placeholder="name..."  outlined color="#3C87CD" label="File Name"></v-text-field>
    			</div>
    			<div class="col-12 py-2 my-0 px-2">
    				<v-select  v-model="programmingLanguage"
          :items="languageCat"  label="Language" placeholder="select..." dense outlined style="font-size:13px;"  color="#3C87CD"></v-select>
    			</div>
    			<div class="col-12 py-1 my-0 px-2 text-center">
    				<v-btn  type="submit" :loading="loading" @click.prevent="saveCodeFile" small color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:HeaderFont;">Add</v-btn>
             </div>
    		</v-form>
    	
    </div>

</v-app>
  
</template>

<script>
  export default {
    data(){
        return{
         shelveName:'',
          Alert:false,
          FileName:'',
        alertMsg:'',
        languageCat:[],
        front_languages:[
         'HTML', 'CSS', 'JAVASCRIPT','MD'
        ],
        back_languages:[
           'PHP','JAVASCRIPT' 
        ],
        programmingLanguage:'',
         Rule:[
             v => !!v || 'Oh! you missed this.',
           v => v.length < 30 || 'File Name must be less than 30 characters',
            v => (v.split(' ').length <= 1) || 'no one space allowed',
             v => /^[A-Za-z0-9 ]+$/.test(v) || 'Cannot contain special character'
         ],
          requiredRule: [
         v => !!v || 'Oh! you missed this.',
        
        ],
         loading:false,
         formstate:false,
         appTypeList:[
            {
            "id": 'NodeJs',
            "name": 'Web app with NodeJs' 
          },
          {
            "id": 'PHP',
            "name": 'Web app with PHP' 
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
          sandboxCodeId:'',
        }
    },
    components: {
   
  },
   mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = false;
       this.setLanguageType();
    },
    methods:{

    setLanguageType: function(){
       if(this.$route.params.language_type == 'front_end'){
       this.languageCat = this.front_languages;
       }
        
        if(this.$route.params.language_type == 'code_files'){

           let codeLang = this.appTypeList.filter((code)=>{
             return code.id == this.$root.projectData.project_panel.panel_language;
           })

          this.languageCat = [codeLang[0].name];

           
          
        }
       if(this.$route.params.language_type ==  'back_end'){
           this.programmingLanguage = this.$root.projectData.project_panel.panel_language;
             if(this.programmingLanguage == 'NodeJs'){
                this.languageCat = ['JAVASCRIPT'];
                
             }

             if(this.programmingLanguage == 'PHP'){
                this.languageCat = ['PHP'];

             }    
       }
    },
  
   goBack() {
           
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
    saveCodeFile:function(){
       var checkFile = this.$root.projectData.project_files.code_files.filter((file)=>{
           return file.file_name == this.FileName;
       }); 

      
       if(checkFile.length > 0 && checkFile[0].language_type == this.programmingLanguage){
           
           this.$root.projectPanelComponent.showAlert('Oops!','File exist,please try again','error');

           return;
       }

      
     if( this.$refs.form.validate()){
          this.loading = true;
         axios.post( '/save-code-file',{
                project_slug: this.$route.params.project_slug,
                file_name: this.FileName,
                language_type: this.programmingLanguage,
                code_category: this.$route.params.language_type
                  })
          .then(response => {
             
 
             if (response.status == 200) {
               
              this.$root.projectData.project_files.code_files.push(response.data.code_file);

                this.$root.editorSideComponent.separateCodeFiles();

                 this.$root.LocalStore('user_projects_data_' +  this.$route.params.project_slug + this.$root.username,this.$root.projectData);

                  if(this.$root.projectData.project.is_web){

                       this.$root.projectPanelComponent.showEditor(response.data.code_file,'front-end');

                   }else{
                        this.$root.projectPanelComponent.showEditor(response.data.code_file,'code-file');
                   }

            }

            
          })
          .catch(error => {
               this.$root.projectPanelComponent.showAlert('Oops!','Unable to save file,please try again','error');
              this.loading = false;
          })
      }

    }
   
    },
   
}
</script>
<style >
 
  
</style>
