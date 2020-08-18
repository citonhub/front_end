<template>
     <v-app style="background:transparent; font-family:BodyText;">

       <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">


        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-2 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-8 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
             <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">Panel Settings</span>
         </div>
         <div class="col-2 py-0 my-0  text-right"  style="border-bottom:2px solid #4495a2; " >
             
         </div>
      </div>
     </div>

      <div class="col-12 py-1 my-0 " >
            <v-form class="row my-2 py-2 px-2 " ref="form" v-model="formstate">
        


            
            
        <v-fade-transition>
         <div class="col-12 py-2 my-0 px-2">
        <v-select
          v-model="backEndLang"
          :items="back_languages"
          label="Back-end Language"
          style="font-size:12px;"
          :rules="requiredRule"
          persistent-hint
           hint="For front-end application,click continue"
          hide-selected
          placeholder="select..."
          color="#4495a2"
          small-chips
        ></v-select>
             </div>
        </v-fade-transition>
         


             <div class="col-12 py-2 my-0 px-2 text-center">
                  <v-btn rounded small :loading="loading" color="#3E8893" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;" @click="savePanelSettings">Continue</v-btn>
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
          serverRequired:'',
          FileName:'',
        alertMsg:'',
        AppTypes:['Single-page','Multiple-pages'],
        back_languages:[
          'PHP','NodeJs'
        ],
        server_side:[
           'Yes','No' 
        ],
        appType:'Multiple-pages',
        backEndLang:'PHP',
         Rule:[
             v => !!v || 'File Name is required',
           v => v.length < 30 || 'File Name must be less than 30 characters'
         ],
          requiredRule: [
         v => !!v || 'This feild is required',
        ],
         loading:false,
         formstate:false,
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
       }else{
           this.languageCat = this.back_languages;
       }
    },
   showShelf: function(){
    this.$router.push({ path: '/shelve' });
   },
   goBack() {
         
            if(this.$root.fromDuelBoard){

                this.$router.push({ path: '/duel/' + this.$route.params.duelId +'/board' + '/user' });
              
            
        }else{
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        }
      
        },
    savePanelSettings:function(){
       
     if( this.$refs.form.validate()){
         
             this.loading = true;
         axios.post('/save-panel-settings',{
                duel_id: this.$route.params.duelId,
                app_type: this.appType,
                panel_language: this.backEndLang,
                panel_code_files : this.$root.CodeFilesData[0]
                  })
             .then(response => {
             
            
            
             if (response.status == 200) {
              
              this.$root.forcePanelReload = true;
              this.$root.fromDuelBoard = false;
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