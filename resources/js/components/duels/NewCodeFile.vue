<template>
     <v-app style="background:transparent; font-family:BodyText;">

       <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0 scrollerStyle" style="position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">


        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-2 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-8 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
             <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">{{ $t('panel.add_new_file') }}</span>
         </div>
         <div class="col-2 py-0 my-0  text-right"  style="border-bottom:2px solid #4495a2; " >
             
         </div>
      </div>
     </div>

      <div class="col-12 py-1 my-0 " >
            <v-form class="row my-2 py-2 px-2 " ref="form" v-model="formstate">
           
           <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                style="font-size:13px;"
                 :placeholder="$t('general.Name') + '...'"
                 :rules="Rule"
                 v-model="FileName"
                 counter="30"
            :label="$t('panel.file_name')"
             dense
             color="#4495a2"
             ></v-text-field>

             </div>


            
               <div class="col-12 py-2 my-0 px-2">
                  <v-select
          v-model="programmingLanguage"
          :items="languageCat"
          :label="$t('general.language')"
          style="font-size:12px;"
          :rules="requiredRule"
          hide-selected
          :placeholder="$t('general.select') + '...'"
          color="#4495a2"
          small-chips
        ></v-select>
             </div>


             <div class="col-12 py-2 my-0 px-2 text-center">
                  <v-btn rounded small :loading="loading" color="#3E8893" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;" @click="saveCodeFile">{{$t('general.add')}}</v-btn>
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
       style="font-size:13px;"
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


export default {
    data(){
        return{
         shelveName:'',
          Alert:false,
          FileName:'',
        alertMsg:'',
        languageCat:[],
        front_languages:[
         'HTML', 'CSS', 'JAVASCRIPT'
        ],
        back_languages:[
           'PHP','NodeJs' 
        ],
        programmingLanguage:'',
        Rule:[
             v => !!v || 'File Name is required',
           v => v.length < 30 || 'File Name must be less than 30 characters',
            v => (v.split(' ').length <= 1) || 'no one space allowed',
             v => /^[A-Za-z0-9 ]+$/.test(v) || 'Cannot contain special character'
         ],
          requiredRule: [
         v => !!v || 'This feild is required',
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
       
    showAlert:function(duration,text){
        this.Alert = true;
        this.alertMsg = text;
        let _this = this;
     
     setTimeout(function(){
        _this.Alert = false;
     },duration);

    },
    setLanguageType: function(){
       if(this.$route.params.language_type == 'front_end'){
       this.languageCat = this.front_languages;
       }
        
        if(this.$route.params.language_type == 'code_files'){

           let codeLang = this.appTypeList.filter((code)=>{
             return code.id == this.$root.panelLanguage;
           })

          this.languageCat = [codeLang[0].name];

           
          
        }
       if(this.$route.params.language_type ==  'back-end'){
           this.programmingLanguage = this.$root.panelLanguage;
            this.languageCat = [this.$root.panelLanguage];
       }
    },
   showShelf: function(){
    this.$router.push({ path: '/shelve' });
   },
   goBack() {
          
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
    saveCodeFile:function(){
       var checkFile = this.$root.CodeFilesData[0].filter((file)=>{
           return file.file_name == this.FileName;
       }); 

      
       if(checkFile.length > 0 && checkFile[0].language_type == this.programmingLanguage){
         this.showAlert(5000,'File exists');
         return;
       }

      
     if( this.$refs.form.validate()){
          this.loading = true;
         axios.post('/save-code-file',{
                duel_id: this.$route.params.duelId,
                file_name: this.FileName,
                language_type: this.programmingLanguage,
                code_category: this.$route.params.language_type
                  })
          .then(response => {
             
            
            
             if (response.status == 201) {
                
                this.$root.CodeFilesData[0].unshift(response.data);

                 this.$root.LocalStore('panel'+ this.$route.params.duelId,this.$root.CodeFilesData);

               this.$root.forcePanelReload= false;
              this.goBack();
            
            }
              
            
           
            
          })
          .catch(error => {
              this.showAlert(5000,'Failed- ' + error);
              this.loading = false;
          })
      }

    }
   
    },
   
}
</script>
<style>
.shelfText{
    font-size: 12px;
    color: #265259;
}
</style>