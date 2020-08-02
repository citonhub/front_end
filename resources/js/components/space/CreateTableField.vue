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
             <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">Create Table Field</span>
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
                 placeholder="name..."
                 :rules="Rule"
                 v-model="FieldName"
                 counter="30"
            label="Field Name"
             dense
             color="#4495a2"
             ></v-text-field>

             </div>

             <div class="col-12 py-2 my-0 px-2">
                  <v-select
          v-model="dataTypeValue"
          :items="DataType"
          label="Data Type"
          style="font-size:12px;"
          :rules="requiredRule"
          hide-selected
          placeholder="select..."
          color="#4495a2"
          small-chips
        ></v-select>
             </div>



            

             <div class="col-12 py-2 my-0 px-2 text-center">
                  <v-btn rounded small :loading="loading" color="#3E8893" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;" @click="createTableField">Create</v-btn>
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
        DataType:[
         'Int','DateTime', 'Char','Text'
        ],
        programmingLanguage:'',
         Rule:[
             v => !!v || 'Table Name is required',
           v => v.length < 30 || 'Table Name must be less than 30 characters',
            v => (v.split(' ').length <= 1) || 'no one space allowed'
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
       this.$root.showHeader = true;
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
    createTableField:function(){

       var checkFile = this.$root.SelectedTable.fields.filter((field)=>{
           return field.name == this.FieldName 
       }); 

      
       if(checkFile.length > 0){
         this.showAlert(5000,'Table Field exists');
         return;
       }

      
     if( this.$refs.form.validate()){
          this.loading = true;
         axios.post('/save-db-table-field',{
                name: this.FieldName,
                data_type: this.dataTypeValue,
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
          axios.get('/fetch-code-files-project/' + this.$route.params.projectSlug)
      .then(response => {
      
      if (response.status == 200) {
        
        
        this.$root.CodeFilesData = response.data;
        this.showAlert(5000,'Table Field Created');
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