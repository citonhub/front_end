<template>

<v-app style="background:transparent; font-family:BodyFont;padding-top:20px;">
 
   <div class="col-12 mt-5 mt-md-1 ml-lg-4">
    <h6>Web Route</h6>
   </div>

    <div class="col-md-8 col-lg-4 offset-lg-4 offset-md-2 text-center py-1">
    	
    		<v-form class="row my-2 py-2 px-2">
                <div class="col-12 py-2 my-0 px-2">
    				<v-select :items="routes" label="Route type" placeholder="select..." dense outlined style="font-size:13px;"  color="#3C87CD"></v-select>
    			</div>
    			<div class="col-12 py-2 my-0 px-2">
    				<v-text-field style="font-size:13px;"  dense placeholder="path..."  outlined color="#3C87CD" label="Path"></v-text-field>
    			</div>

                <div class="col-12 py-2 my-0 px-2">
    				<v-select :items="files" label="Controller" placeholder="select..." dense outlined style="font-size:13px;"  color="#3C87CD"></v-select>
    			</div>

                <div class="col-12 py-2 my-0 px-2">
    				<v-text-field style="font-size:13px;"   dense placeholder="method..."  outlined color="#3C87CD" label="Method"></v-text-field>
    			</div>
    			
    			<div class="col-12 py-1 my-0 px-2 text-center">
    				<v-btn  type="submit" small color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:HeaderFont;">Add</v-btn>
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
        functionName:'',
        languageCat:[],
        RouteType:'',
        Controllers:[],
        ControllerFile:'',
        path:'',
        Routes:[
            'get','post'
        ],
        front_languages:[
         'HTML', 'CSS', 'JAVASCRIPT'
        ],
        back_languages:[
           'PHP','PYTHON' 
        ],
        programmingLanguage:'',
         Rule:[
             v => !!v || 'File Name is required',
           v => v.length < 30 || 'File Name must be less than 30 characters',
             v => (v.split(' ').length <= 1) || 'no one space allowed',
              v => /^\//.test(v) || 'Must start with \'/\''
           
         ],
          requiredRule: [
         v => !!v || 'This field is required',
          v => (v.split(' ').length <= 1) || 'no one space allowed',
           v => /^[A-Za-z0-9 ]+$/.test(v) || 'Cannot contain special character'
         
        ],
         loading:false,
         formstate:false,
         disableForm: false,
        }
    },
    components: {
   
  },
   mounted(){
      
       this.Controllers =  this.$root.editorSideComponent.controllers;
       this.setState();
    },
    methods:{
   setState:function(){
       if(this.$root.is_route_edit == 'true'){
           this.path = this.$root.selectedRoute.path;
           this.functionName = this.$root.selectedRoute.function_name;
           this.ControllerFile = this.$root.selectedRoute;
           this.RouteType = this.$root.selectedRoute.route_type;
           this.disableForm = true;
       }else{
         
         this.path = '';
           this.functionName = '';
           this.ControllerFile = '';
           this.RouteType = '';
           this.disableForm = false;

       }
   },
   
   goBack() {
          
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
    saveRoute:function(){
        var checkFile =  this.$root.projectData.project_files.routes.filter((route)=>{
           return route.path == this.path;
       }); 

      
       if(checkFile.length > 0 && checkFile[0].route_type == this.RouteType){
        this.$root.projectPanelComponent.showAlert('Oops!','Route exists,please try again','error');
         return;
       }
      
     if( this.$refs.form.validate()){
          this.loading = true;
         axios.post('/save-route-project',{
                project_slug: this.$route.params.project_slug,
                path: this.path,
                route_type: this.RouteType,
                function_name: this.functionName,
                file_name: this.ControllerFile
                  })
          .then(response => {
             
            
            
             if (response.status == 200) {
               

              this.$root.projectData.project_files.routes.unshift(response.data.route_file)

               this.$root.LocalStore('user_projects_data_' +  this.$route.params.project_slug + this.$root.username,this.$root.projectData);

               
                this.$root.projectPanelComponent.showAlert('Happy coding!','web route added','success');

                 this.loading = false;
            }
              
            
           
            
          })
          .catch(error => {
               this.$root.projectPanelComponent.showAlert('Oops!','Unable to add web route,please try again','error');
              this.loading = false;
          })
      }

    }
   
    },
}
</script>