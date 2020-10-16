<template>
     <v-app style="background:transparent; font-family:BodyText;">

       <div class="col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-0 px-0 my-0" style="  border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6; position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">


        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-2 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-8 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
             <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">Add Table Entry</span>
         </div>
         <div class="col-2 py-0 my-0  text-right"  style="border-bottom:2px solid #4495a2; " >
             
         </div>
      </div>
     </div>

      <div class="col-12 py-1 my-0 " >
            <v-form  ref="form" v-model="formstate">
           <div v-for="(field,index) in fieldsArray" :key="index" class="row my-2 py-2 px-2 ">
             
               <div class="col-12 py-2 my-0 px-2" v-if=" field.data_type != 'Text'">
              <v-text-field
                style="font-size:13px;"
                 :placeholder="field.name + '...'"
                 v-model="field.content"
                 
            :label="field.name"
             dense
             color="#4495a2"
             ></v-text-field>

             </div>

              <div class="col-12 py-2 my-0 px-2" v-else>
              <v-textarea
               style="font-size:13px;"
                 :placeholder="field.name + '...'"
                 v-model="field.content"
                 
            :label="field.name"
             dense
             color="#4495a2"
             ></v-textarea>

             </div>

           </div>
         

           


            

             <div class="col-12 py-2 my-0 px-2 text-center">
                  <v-btn rounded small :loading="loading" color="#3E8893" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;" @click="addEntry">Add</v-btn>
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
        FieldName:'',
        dataTypeValue:'',
        field_type:'',
       
        programmingLanguage:'',
         Rule:[
             v => !!v || 'Table Name is required',
           v => v.length < 30 || 'Table Name must be less than 30 characters',
            v => /^[A-Za-z0-9 ]+$/.test(v) || 'Cannot contain special character'
         ],
          requiredRule: [
         v => !!v || 'This feild is required',
        ],
         loading:false,
         formstate:false,
         fieldsArray:[]
        }
    },
    components: {
   
  },
   mounted(){
      this.$root.showTabs=true;
        this.$root.showHeader = false;
       this.setLanguageType();
       this.setFields();
    },
    methods:{
    setFields: function(){
       this.fieldsArray = this.$root.SelectedTable.fields.filter((field)=>{
           return field.name != 'id' && field.name != 'created_at';
       });

       this.fieldsArray.map((field)=>{
         field.content = ''
       });

       
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
       if(this.$route.params.language_type == 'front_end'){
       this.languageCat = this.front_languages;
       }else{
           this.programmingLanguage = this.$root.panelLanguage;
            this.languageCat = [this.$root.panelLanguage];
       }
    },
   showShelf: function(){
    this.$router.push({ path: '/shelve' });
   },
   goBack() {
            this.$root.forcePanelReload= true;
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
    addEntry:function(){

      
     if( this.$refs.form.validate()){
          this.loading = true;
         axios.post('/save-db-table-entry',{
                
                fieldEntries: this.fieldsArray,
                table_id: this.$root.SelectedTable.id
                
                  })
          .then(response => {
             
            
            
             if (response.status == 200) {
                
                this.updateRoot();
              
            }
              
            
           
            
          })
          .catch(error => {
              this.showAlert(5000,'Failed- ' + error);
              this.loading = false;
          })
      }

    },
    updateRoot: function(){
          axios.get( '/fetch-code-files/' + this.$route.params.duelId)
      .then(response => {
      
      if (response.status == 200) {
        
         
        this.$root.CodeFilesData = response.data;
        this.showAlert(5000,'Table Entry Saved');
         
           this.fieldsArray.map((field)=>{
         field.content = ''
       });
      this.loading = false;

     }
       
     
     })
     .catch(error => {
    
     }) 
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