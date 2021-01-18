<template>
<v-app style="background:transparent; font-family:BodyFont;padding-top:20px;">
 
   <div class="col-12 mt-5 mt-md-1">
    <h6>Create Database</h6>
   </div>

    <div class="col-md-8 col-lg-4 offset-lg-4 offset-md-2 text-center py-1">
    	
    		<v-form class="row my-2 py-2 px-2"  ref="form" v-model="formstate">
    			<div class="col-12 py-2 my-0 px-2">
    				<v-text-field style="font-size:13px;" dense placeholder="name..."  :rules="Rule"
                 v-model="TableName"
                 counter="30" outlined color="#3C87CD" label="Table Name"></v-text-field>
    			</div>
    		
    			<div class="col-12 py-1 my-0 px-2 text-center">
    				<v-btn  type="submit" small color="#3C87CD" :loading="loading" @click.prevent="createTable" style="font-size:13px; font-weight:bolder; color:white;font-family:HeaderFont;">Add</v-btn>
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
        TableName:'',
         Rule:[
             v => !!v || 'Oh! you missed this.',
           v => v.length < 30 || 'Table Name must be less than 30 characters',
            v => (v.split(' ').length <= 1) || 'no one space allowed',
             v => /^[A-Za-z0-9 ]+$/.test(v) || 'Cannot contain special character'
         ],
          requiredRule: [
         v => !!v || 'Oh! you missed this.',
        ],
         loading:false,
         formstate:false,
        }
    },
    components: {
   
  },
   mounted(){
      
      
    },
    methods:{
   
  
   goBack() {
          
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
    createTable:function(){

       var checkFile =  this.$root.projectData.project_files.dbtables.filter((table)=>{
           return table.name == this.TableName;
       }); 

      
       if(checkFile.length > 0){
        
           this.$root.projectPanelComponent.showAlert('Oops!','Table Name exists,please try again','error');
         return;
       }

      
     if( this.$refs.form.validate()){
          this.loading = true;
         axios.post('/save-db-table-project',{
                project_slug: this.$route.params.project_slug,
                table_name: this.TableName
                  })
          .then(response => {
  
             if (response.status == 200) {
               
                 this.$root.projectData.project_files.dbtables.push(response.data.dbtable);
               
              this.$root.LocalStore('user_projects_data_' +  this.$route.params.project_slug + this.$root.username,this.$root.projectData);
                 
             this.$root.projectPanelComponent.showAlert('Happy coding!','Database table added','success');
         
          this.loading = false;
            
            }
  
          })
          .catch(error => {
           
              this.$root.projectPanelComponent.showAlert('Oops!','Unable to add database,please try again','error');
              this.loading = false;
          })
      }

    }
   
    },
   
}
</script>
<style >
 
  
</style>
