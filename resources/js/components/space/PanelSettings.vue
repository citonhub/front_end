<template>
     <v-app style="background:transparent; font-family:BodyText;">

       <div class="  col-lg-6 offset-lg-3 py-0 px-0 my-0 scrollerStyle" style="border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6;  position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">


        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-2 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-8 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
             <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">{{ $t('panel.panel_settings') }} </span>
         </div>
         <div class="col-2 py-0 my-0  text-right"  style="border-bottom:2px solid #4495a2; "  v-if="this.$root.projectData.user_id == this.$root.user_temp_id">
               <v-btn v-if="!loadingDelete" icon color="#4495a2" @click="deleteProject"><v-icon>mdi-delete</v-icon></v-btn>
               <v-progress-circular v-else indeterminate color="#4495a2"><v-icon color="#4495a2">mdi-delete</v-icon></v-progress-circular>
         </div>
         <div class="col-2 py-0 my-0  text-right"  style="border-bottom:2px solid #4495a2; "  v-else>
               
         </div>
      </div>
     </div>

      <div class="col-12 py-1 my-0 " >
            <v-form class="row my-2 py-2 px-2 " ref="form" v-model="formstate">


            
  
        
        <v-fade-transition>
         <div class="col-12 col-lg-8 offset-lg-2 py-2 my-0 px-2"  v-if="this.$root.panelDataFull.is_set != true">
        <v-select
          v-model="backEndLang"
          :items="appTypeList"
          :label="$t('general.app_type')"
          persistent-hint
          style="font-size:12px;"
          :rules="requiredRule"
           item-text="name"
           item-value="id"
          hide-selected
           :disabled="this.$root.panelDataFull.is_set == true"
          :placeholder="$t('general.select') + '...'"
          color="#4495a2"
          small-chips
        ></v-select>
             </div>

              <div class="col-12 col-lg-8 offset-lg-2 py-2 my-0 px-2" v-else>
         <v-text-field
                style="font-size:12px;"
                
             :label="$t('general.app_type')"
             dense
             :disabled="true"
             v-model="languageAppName"
             
             color="#4495a2"
            
             ></v-text-field>
             </div>
        </v-fade-transition>
         


             <div class="col-12 py-2 my-0 px-2 text-center" v-if="this.$root.projectData.user_id == this.$root.user_temp_id && this.$root.panelDataFull.is_set == false">
                  <v-btn rounded small :loading="loading" color="#3E8893" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;" @click="savePanelSettings">{{$t('general.continue')}}</v-btn>
             </div>

              
          </v-form>


             <div class="col-12 col-lg-8 offset-lg-2 py-2 my-0 px-2" v-if="this.$root.projectData.user_id == this.$root.user_temp_id && this.$root.panelDataFull.is_set == true">
              <v-text-field
                style="font-size:12px;"
                
                  :placeholder="$t('space.project_title') + '...'"
            :label="$t('space.project_title')"
             dense
             :rules="Rule"
              :loading="loadingTitle"
              @click:append-outer="changeTitle"
             v-model="name"
             append-outer-icon="mdi-content-save-outline"
              counter="80"
             color="#4495a2"
            
             ></v-text-field>

             </div>


          <div class="col-12 col-lg-8 offset-lg-2 py-2 my-0 px-2" v-if="this.$root.projectData.user_id == this.$root.user_temp_id && this.$root.panelDataFull.is_set == true">

            
        <v-select
          v-model="Contributors"
          :items="Connections"
        
          :label="$t('panel.add_contributors')"
          persistent-hint
          style="font-size:12px;"
          item-text="username"
          item-value="username"
          @click:append-outer="addContributors"
           append-outer-icon="mdi-content-save-outline"
          multiple
          :loading="loadingConnection"
          hide-selected
          hint="Note: Contributors can edit your project"
           :placeholder="$t('general.select') + '...'"
          color="#4495a2"
          small-chips
        ></v-select>
             </div>

        
          


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
          name:'',
          serverRequired:'',
          FileName:'',
          Contributors:[],
          languageAppName:'',
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
        alertMsg:'',
        AppTypes:['Single-page','Multiple-pages'],
        back_languages:[
         'PHP','NodeJs'
        ],
        server_side:[
           'Yes','No' 
        ],
        appType:'',
        Connections:[],
        backEndLang:'',
        loadingTitle:false,
         Rule:[
             v => !!v || 'Name is required',
           v => v.length < 80 || 'Name must be less than 80 characters',
            v => /^[A-Za-z0-9 ]+$/.test(v) || 'Cannot contain special character'
         ],
          requiredRule: [
         v => !!v || 'This feild is required',
        ],
         loading:false,
         formstate:false,
         loadingConnection:false,
         loadingContribute:false,
         loadingDelete:false,
        }
    },
    components: {
   
  },
   mounted(){

      if(this.$root.projectData.length != 0){
        this.name = this.$root.projectData.title;
      }
      this.$root.showTabs=true;
       this.$root.showHeader = false;
       this.setLanguageType();
       this.fetchConnected();
    },
    methods:{
         addContributors: function(){
           this.loadingConnection = true;
               axios.post(  '/add-contributors',{
                 'contributors': this.Contributors,
                 'project_slug': this.$route.params.projectSlug
               })
      .then(response => {
      
      if (response.status == 200) {
        
       this.Connections = response.data.data;
        this.loadingConnection = false;
         this.showAlert(5000,'Contributors Added');

          this.$router.push({ path: '/' +this.$route.params.projectSlug +'/panel' });
     }
       
     
     })
     .catch(error => {
       this.loadingConnection = false;
       this.showAlert(5000,'Failed- ' + error);
     }) 

         },
          changeTitle: function(){
           this.loadingTitle = true;
               axios.post( '/save-project-title',{
                 'title': this.name,
                 'project_slug': this.$route.params.projectSlug
               })
      .then(response => {
      
      if (response.status == 200) {
        
     
        this.loadingTitle = false;
         this.showAlert(5000,'Saved');

         
     }
       
     
     })
     .catch(error => {
       this.loadingTitle = false;
       this.showAlert(5000,'Failed- ' + error);
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
    setLanguageType: function(){

     
      if( this.$root.panelDataFull.panel_language == 'NodeJs'){

          

          this.languageAppName =  'Web app with NodeJs';

        }

         if( this.$root.panelDataFull.panel_language == 'PHP'){

          

          this.languageAppName =  'Web app with PHP';

        }
         
        if( this.$root.panelDataFull.panel_language != 'NodeJs' &&  this.$root.panelDataFull.panel_language != 'PHP'){

          

          let codeLang = this.appTypeList.filter((code)=>{
             return code.id == this.$root.panelDataFull.panel_language;
           })

          
           

           if(codeLang[0] == undefined){

               this.languageAppName =  '';

            }else{
         this.languageAppName =  codeLang[0].name ;
            }
        }

        
    },
   showShelf: function(){
    this.$router.push({ path: '/shelve' });
   },
   fetchConnected: function(){

      this.loadingConnection = true;
          
           axios.get( '/fetch-connected' )
      .then(response => {
      
      if (response.status == 200) {
        
       this.Connections = response.data.data;
        this.loadingConnection = false;
     }
       
     
     })
     .catch(error => {
       this.loadingConnection = false;
     }) 

        },
   goBack() {

     if(this.$root.fromChatList){
         this.$router.push({ path: '/space/chat-list' });
     }else{
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
     }

      this.$root.forcePanelReload = true;
          
       
        },
        deleteProject:function(){

           this.loadingDelete = true;

          axios.post( '/delete-project',{
                project_slug: this.$route.params.projectSlug,
                panel_code_files : this.$root.CodeFilesData[0]
                  })
             .then(response => {
             
            
            
             if (response.status == 200) {

                if(this.$root.ChatList[3].data.length != 0){

                   
                 
                 let remainingProject = this.$root.ChatList[3].data.filter((project)=>{
                   return    project.project_slug != this.$route.params.projectSlug
                 });

                 this.$root.ChatList[3].data = remainingProject;
              }

               this.$root.removeLocalStorage(this.$route.params.projectSlug);
              
              this.$router.push({ path: '/space/chat-list' });

             
            
              
            
            }
              
            
           
            
          })
          .catch(error => {
              this.showAlert(5000,'Failed- ' + error);
              this.loadingDelete = false;
          })

        },
    savePanelSettings:function(){

       let selectedLanguageInfo = this.appTypeList.filter((lang)=>{

         return lang.id == this.backEndLang;

       });


       
     if( this.$refs.form.validate()){
          this.loading = true;
         axios.post( '/save-panel-settings-project',{
                project_slug: this.$route.params.projectSlug,
                app_type: 'Multiple-pages',
                panel_language: this.backEndLang,
                panel_code_files : this.$root.CodeFilesData[0],
                language_name: selectedLanguageInfo[0].name
                  })
             .then(response => {
             
            
            
             if (response.status == 200) {
              
              this.$root.forcePanelReload = true;
              this.$root.fromChatList = false;

               this.$router.push({ path: '/' + this.$route.params.projectSlug +'/panel' });
            
              
            
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