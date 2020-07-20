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
             <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">Add New Route</span>
         </div>
         <div class="col-2 py-0 my-0  text-right"  style="border-bottom:2px solid #4495a2; " >
             
         </div>
      </div>
     </div>

      <div class="col-12 py-1 my-0 " >
            <v-form class="row my-2 py-2 px-2 " ref="form" v-model="formstate">
           
           


            
               <div class="col-12 py-2 my-0 px-2">
                  <v-select
          v-model="RouteType"
          :items="Routes"
          label="Route Type"
          style="font-size:12px;"
          :rules="requiredRule"
          hide-selected
          placeholder="select..."
           :disabled="disableForm"
          color="#4495a2"
          small-chips
        ></v-select>
             </div>


             <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                style="font-size:13px;"
                 placeholder="path e.g /index..."
                 hint="must begin with '/'"
                  :disabled="disableForm"
                 :rules="requiredRule"
                 v-model="path"
                 counter="20"
            label="Path"
             dense
             color="#4495a2"
             ></v-text-field>

             </div>

              <div class="col-12 py-2 my-0 px-2">
                  <v-select
          v-model="ControllerFile"
          :items="Controllers"
          label="Controller File"
           item-text="file_name"
           item-value="file_name"
          style="font-size:12px;"
           :disabled="disableForm"
          :rules="requiredRule"
          hide-selected
          placeholder="select..."
          color="#4495a2"
          small-chips
        ></v-select>
             </div>


             <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                style="font-size:13px;"
                 placeholder="Method name e.g main"
                 hint="Method name in the selected controller"
                 :rules="requiredRule"
                 :disabled="disableForm"
                 v-model="functionName"
                 counter="20"
            label="Method Name"
             dense
             color="#4495a2"
             ></v-text-field>

             </div>





             <div class="col-12 py-2 my-0 px-2 text-center">
                  <v-btn rounded small :loading="loading" :disabled="disableForm" color="#3E8893" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;" @click="saveRoute">Add</v-btn>
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
           v => v.length < 30 || 'File Name must be less than 30 characters'
         ],
          requiredRule: [
         v => !!v || 'This field is required',
        ],
         loading:false,
         formstate:false,
         disableForm: false,
        }
    },
    components: {
   
  },
   mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = true;
       this.setLanguageType();
       this.Controllers = this.$root.backEndFiles;
       this.setState();
    },
    methods:{
   setState:function(){
       if(this.$root.is_edit == 'true'){
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
   
   goBack() {
          
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
    saveRoute:function(){
        var checkFile = this.$root.panelRoutes.filter((route)=>{
           return route.path == this.path;
       }); 

      
       if(checkFile.length > 0 && checkFile[0].route_type == this.RouteType){
         this.showAlert(5000,'Path exists');
         return;
       }
      
     if( this.$refs.form.validate()){
          this.loading = true;
         axios.post('/save-route',{
                duel_id: this.$route.params.duelId,
                path: this.path,
                route_type: this.RouteType,
                function_name: this.functionName,
                file_name: this.ControllerFile
                  })
          .then(response => {
             
            
            
             if (response.status == 201) {
               
              this.$root.forcePanelReload= false;

               this.$root.panelRoutes.unshift(response.data)
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